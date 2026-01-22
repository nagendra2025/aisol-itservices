"use server";

import { careersFormSchema, type CareersFormData } from "@/lib/validations";
import { sendCareersEmail } from "@/lib/resend";
import { rateLimit, getClientIdentifier } from "@/lib/rate-limit";
import { headers } from "next/headers";

export type CareersFormState = {
  success?: boolean;
  error?: string;
  fieldErrors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    linkedinUrl?: string[];
    honeypot?: string[];
  };
};

export async function submitCareersForm(
  prevState: CareersFormState | null,
  formData: FormData
): Promise<CareersFormState> {
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
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      linkedinUrl: formData.get("linkedinUrl") as string | undefined,
      honeypot: formData.get("website") as string, // Honeypot field named "website"
    };

    // Validate
    const result = careersFormSchema.safeParse(rawData);

    if (!result.success) {
      return {
        fieldErrors: result.error.flatten().fieldErrors,
      };
    }

    const data: CareersFormData = result.data;

    // Send email
    await sendCareersEmail({
      name: data.name,
      email: data.email,
      message: data.message,
      linkedinUrl: data.linkedinUrl,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Careers form error:", error);
    
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
      error: "Failed to submit application. Please try again later or contact us directly.",
    };
  }
}

