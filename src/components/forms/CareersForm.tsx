"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { submitCareersForm } from "@/app/actions/careers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
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
  const [state, formAction] = useActionState(submitCareersForm, null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Application submitted successfully! We'll review your information and get back to you soon.");
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

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
            <Label htmlFor="linkedinUrl">LinkedIn Profile URL (Optional)</Label>
            <Input
              id="linkedinUrl"
              name="linkedinUrl"
              type="url"
              placeholder="https://linkedin.com/in/yourprofile"
              defaultValue={state?.fieldErrors?.linkedinUrl ? "" : undefined}
              aria-invalid={state?.fieldErrors?.linkedinUrl ? true : undefined}
              aria-describedby={state?.fieldErrors?.linkedinUrl ? "linkedinUrl-error" : undefined}
            />
            {state?.fieldErrors?.linkedinUrl && (
              <p id="linkedinUrl-error" className="text-sm text-destructive">
                {state.fieldErrors.linkedinUrl[0]}
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

