import { careersFormSchema } from "@/lib/validations";
import { sendCareersEmail } from "@/lib/resend";
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
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      linkedinUrl: formData.get("linkedinUrl") as string | undefined,
      honeypot: formData.get("website") as string, // Honeypot field
    };

    // Validate
    const result = careersFormSchema.safeParse(rawData);

    if (!result.success) {
      return NextResponse.json(
        { fieldErrors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    // Send email
    await sendCareersEmail({
      name: data.name,
      email: data.email,
      message: data.message,
      linkedinUrl: data.linkedinUrl,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Careers form error:", error);
    
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
      { error: "Failed to submit application. Please try again later or contact us directly." },
      { status: 500 }
    );
  }
}

