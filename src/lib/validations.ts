import { z } from "zod";

// Honeypot field - should always be empty
export const honeypotSchema = z.string().max(0, "Invalid submission");

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  company: z.string().max(100, "Company name is too long").optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().max(20, "Phone number is too long").optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
  serviceInterest: z.string().optional(),
  honeypot: honeypotSchema, // Anti-spam field
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Careers form schema
export const careersFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
  linkedinUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  honeypot: honeypotSchema, // Anti-spam field
});

export type CareersFormData = z.infer<typeof careersFormSchema>;

