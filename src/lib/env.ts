import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required"),
  CONTACT_TO_EMAIL: z.string().email("CONTACT_TO_EMAIL must be a valid email"),
  FROM_EMAIL: z.string().email("FROM_EMAIL must be a valid email"),
});

export type Env = z.infer<typeof envSchema>;

export function validateEnv(): Env {
  try {
    return envSchema.parse({
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
      FROM_EMAIL: process.env.FROM_EMAIL,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missing = error.issues.map((e) => e.path.join(".")).join(", ");
      throw new Error(`Missing or invalid environment variables: ${missing}`);
    }
    throw error;
  }
}

