"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        "Submit Application"
      )}
    </Button>
  );
}

export function CareersForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setFieldErrors({});

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Application submitted successfully! We'll review your information and get back to you soon.");
        // Reset form
        const form = document.querySelector('form') as HTMLFormElement;
        form?.reset();
      } else {
        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors);
        } else if (result.error) {
          toast.error(result.error);
        } else {
          toast.error("Failed to submit application. Please try again.");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit application. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Application Form</CardTitle>
        <CardDescription>
          Fill out the form below to express your interest. We'll review your
          information and reach out if there's a good fit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-6">
          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
          />

          <div className="space-y-2">
            <Label htmlFor="name">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              aria-invalid={fieldErrors.name ? true : undefined}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
            />
            {fieldErrors.name && (
              <p id="name-error" className="text-sm text-destructive">
                {fieldErrors.name[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              aria-invalid={fieldErrors.email ? true : undefined}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
            />
            {fieldErrors.email && (
              <p id="email-error" className="text-sm text-destructive">
                {fieldErrors.email[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedinUrl">LinkedIn Profile URL (Optional)</Label>
            <Input
              id="linkedinUrl"
              name="linkedinUrl"
              type="url"
              placeholder="https://linkedin.com/in/yourprofile"
              aria-invalid={fieldErrors.linkedinUrl ? true : undefined}
              aria-describedby={fieldErrors.linkedinUrl ? "linkedinUrl-error" : undefined}
            />
            {fieldErrors.linkedinUrl && (
              <p id="linkedinUrl-error" className="text-sm text-destructive">
                {fieldErrors.linkedinUrl[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell us about yourself, your experience, and why you're interested in joining AISOL..."
              aria-invalid={fieldErrors.message ? true : undefined}
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
            />
            {fieldErrors.message && (
              <p id="message-error" className="text-sm text-destructive">
                {fieldErrors.message[0]}
              </p>
            )}
          </div>

          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </CardContent>
    </Card>
  );
}

