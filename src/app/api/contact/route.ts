import { contactFormSchema } from "@/lib/validations";
import { sendContactEmail } from "@/lib/resend";
import { rateLimit, getClientIdentifier } from "@/lib/rate-limit";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const headersList = request.headers;
    const identifier = getClientIdentifier(headersList);
    const rateLimitResult = rateLimit(identifier);

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse form data
    const formData = await request.formData();
    const rawData = {
      name: formData.get("name") as string,
      company: formData.get("company") as string | undefined,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string | undefined,
      message: formData.get("message") as string,
      serviceInterest: formData.get("serviceInterest") as string | undefined,
      honeypot: formData.get("website") as string, // Honeypot field
    };

    // Validate
    const result = contactFormSchema.safeParse(rawData);

    if (!result.success) {
      return NextResponse.json(
        { fieldErrors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    // Send email
    await sendContactEmail({
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      message: data.message,
      serviceInterest: data.serviceInterest,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        return NextResponse.json(
          { error: "Email service configuration error. Please contact the site administrator." },
          { status: 500 }
        );
      }
      if (error.message.includes("domain") || error.message.includes("verification")) {
        return NextResponse.json(
          { error: "Email domain not verified. Please contact the site administrator." },
          { status: 500 }
        );
      }
      if (error.message.includes("rate limit") || error.message.includes("quota")) {
        return NextResponse.json(
          { error: "Email service temporarily unavailable. Please try again later." },
          { status: 429 }
        );
      }
    }
    
    return NextResponse.json(
      { error: "Failed to send message. Please try again later or contact us directly." },
      { status: 500 }
    );
  }
}



