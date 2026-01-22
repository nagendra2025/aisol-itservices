"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/actions/contact";
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

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
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
  const [state, formAction] = useActionState(submitContactForm, null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Message sent successfully! We'll get back to you soon.");
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          Fill out the form below and we'll respond as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
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
              defaultValue={state?.fieldErrors?.name ? "" : undefined}
              aria-invalid={state?.fieldErrors?.name ? true : undefined}
              aria-describedby={state?.fieldErrors?.name ? "name-error" : undefined}
            />
            {state?.fieldErrors?.name && (
              <p id="name-error" className="text-sm text-destructive">
                {state.fieldErrors.name[0]}
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
              defaultValue={state?.fieldErrors?.email ? "" : undefined}
              aria-invalid={state?.fieldErrors?.email ? true : undefined}
              aria-describedby={state?.fieldErrors?.email ? "email-error" : undefined}
            />
            {state?.fieldErrors?.email && (
              <p id="email-error" className="text-sm text-destructive">
                {state.fieldErrors.email[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              type="text"
              defaultValue={state?.fieldErrors?.company ? "" : undefined}
              aria-invalid={state?.fieldErrors?.company ? true : undefined}
              aria-describedby={state?.fieldErrors?.company ? "company-error" : undefined}
            />
            {state?.fieldErrors?.company && (
              <p id="company-error" className="text-sm text-destructive">
                {state.fieldErrors.company[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              defaultValue={state?.fieldErrors?.phone ? "" : undefined}
              aria-invalid={state?.fieldErrors?.phone ? true : undefined}
              aria-describedby={state?.fieldErrors?.phone ? "phone-error" : undefined}
            />
            {state?.fieldErrors?.phone && (
              <p id="phone-error" className="text-sm text-destructive">
                {state.fieldErrors.phone[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceInterest">Service Interest</Label>
            <select
              id="serviceInterest"
              name="serviceInterest"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              defaultValue={state?.fieldErrors?.serviceInterest ? "" : undefined}
              aria-invalid={state?.fieldErrors?.serviceInterest ? true : undefined}
              aria-describedby={state?.fieldErrors?.serviceInterest ? "serviceInterest-error" : undefined}
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {state?.fieldErrors?.serviceInterest && (
              <p id="serviceInterest-error" className="text-sm text-destructive">
                {state.fieldErrors.serviceInterest[0]}
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
              defaultValue={state?.fieldErrors?.message ? "" : undefined}
              aria-invalid={state?.fieldErrors?.message ? true : undefined}
              aria-describedby={state?.fieldErrors?.message ? "message-error" : undefined}
            />
            {state?.fieldErrors?.message && (
              <p id="message-error" className="text-sm text-destructive">
                {state.fieldErrors.message[0]}
              </p>
            )}
          </div>

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}

