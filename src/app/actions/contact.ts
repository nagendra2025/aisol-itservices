"use server";

import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { sendContactEmail } from "@/lib/resend";
import { rateLimit, getClientIdentifier } from "@/lib/rate-limit";
import { headers } from "next/headers";

export type ContactFormState = {
  success?: boolean;
  error?: string;
  fieldErrors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    company?: string[];
    phone?: string[];
    serviceInterest?: string[];
    honeypot?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // Rate limiting
    const headersList = await headers();
    const identifier = getClientIdentifier(headersList);
    const rateLimitResult = rateLimit(identifier);

    if (!rateLimitResult.allowed) {
      return {
        error: "Too many requests. Please try again later.",
      };
    }

    // Extract form data
    const rawData = {
      name: formData.get("name") as string,
      company: formData.get("company") as string | undefined,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string | undefined,
      message: formData.get("message") as string,
      serviceInterest: formData.get("serviceInterest") as string | undefined,
      honeypot: formData.get("website") as string, // Honeypot field named "website"
    };

    // Validate
    const result = contactFormSchema.safeParse(rawData);

    if (!result.success) {
      return {
        fieldErrors: result.error.flatten().fieldErrors,
      };
    }

    const data: ContactFormData = result.data;

    // Send email
    await sendContactEmail({
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      message: data.message,
      serviceInterest: data.serviceInterest,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Contact form error:", error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      // Check for common Resend errors
      if (error.message.includes("API key")) {
        return {
          error: "Email service configuration error. Please contact the site administrator.",
        };
      }
      if (error.message.includes("domain") || error.message.includes("verification")) {
        return {
          error: "Email domain not verified. Please contact the site administrator.",
        };
      }
      if (error.message.includes("rate limit") || error.message.includes("quota")) {
        return {
          error: "Email service temporarily unavailable. Please try again later.",
        };
      }
    }
    
    return {
      error: "Failed to send message. Please try again later or contact us directly.",
    };
  }
}

