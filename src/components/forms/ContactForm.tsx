"use client";

import { useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service (optional)" },
  { value: "saas-development", label: "SaaS Development" },
  { value: "consulting", label: "IT Consulting" },
  { value: "training", label: "Technology Training" },
  { value: "web-mobile", label: "Web & Mobile Development" },
];

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  );
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        // Reset form
        const form = document.querySelector('form') as HTMLFormElement;
        form?.reset();
      } else {
        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors);
        } else if (result.error) {
          toast.error(result.error);
        } else {
          toast.error("Failed to send message. Please try again.");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          Fill out the form below and we'll respond as soon as possible.
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
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              type="text"
              aria-invalid={fieldErrors.company ? true : undefined}
              aria-describedby={fieldErrors.company ? "company-error" : undefined}
            />
            {fieldErrors.company && (
              <p id="company-error" className="text-sm text-destructive">
                {fieldErrors.company[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              aria-invalid={fieldErrors.phone ? true : undefined}
              aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            />
            {fieldErrors.phone && (
              <p id="phone-error" className="text-sm text-destructive">
                {fieldErrors.phone[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceInterest">Service Interest</Label>
            <select
              id="serviceInterest"
              name="serviceInterest"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              aria-invalid={fieldErrors.serviceInterest ? true : undefined}
              aria-describedby={fieldErrors.serviceInterest ? "serviceInterest-error" : undefined}
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {fieldErrors.serviceInterest && (
              <p id="serviceInterest-error" className="text-sm text-destructive">
                {fieldErrors.serviceInterest[0]}
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

