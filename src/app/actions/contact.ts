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
    return {
      error: "Failed to send message. Please try again later.",
    };
  }
}

