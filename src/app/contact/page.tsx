import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { generateMetadata } from "@/lib/seo";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata = generateMetadata({
  title: "Contact",
  description:
    "Get in touch with AISOL IT SERVICES INC. Contact us for SaaS development, IT consulting, technology training, and web & mobile solutions.",
  path: "/contact",
});

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-muted/20 py-16 md:py-24">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Let's discuss how we can help transform your business
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Fill out the form below or reach us directly
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Contact Form */}
              <AnimatedSection delay={0.1}>
                <ContactForm />
              </AnimatedSection>

              {/* Contact Information */}
              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Mail className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a
                            href={`mailto:${COMPANY_INFO.email}`}
                            className="text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {COMPANY_INFO.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MapPin className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground">{COMPANY_INFO.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border/40 bg-muted/30 p-6">
                    <h4 className="mb-3 font-semibold">Response Time</h4>
                    <p className="text-sm text-muted-foreground">
                      We typically respond to inquiries within 24-48 hours during
                      business days. For urgent matters, please mention it in your
                      message.
                    </p>
                  </div>

                  <div className="rounded-lg border border-border/40 bg-muted/30 p-6">
                    <h4 className="mb-3 font-semibold">What Happens Next?</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">1.</span>
                        <span>We'll review your message and requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">2.</span>
                        <span>Our team will reach out to discuss your needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">3.</span>
                        <span>We'll provide a tailored solution proposal</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



