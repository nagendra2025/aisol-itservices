import Link from "next/link";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UPCOMING_SAAS } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { ExternalLink, Sparkles, Clock, ArrowRight } from "lucide-react";

export const metadata = generateMetadata({
  title: "Solutions",
  description:
    "Explore AISOL's SaaS solutions including Fampo - The Ultimate Family Organization App, and upcoming products. Discover intelligent platforms designed to help families and businesses stay organized.",
  path: "/solutions",
});

export default function Solutions() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-muted/20 py-16 md:py-24">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Our Solutions
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Intelligent SaaS platforms designed to transform how you organize and connect
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Product: Fampo */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="mb-8 text-center">
                <div className="mb-4 flex justify-center">
                  <Sparkles className="h-12 w-12 text-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Featured Solution
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our flagship SaaS platform
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="border-2 transition-all hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="mb-4 flex items-center gap-2">
                    <Badge className="gap-1 bg-primary text-primary-foreground">
                      <Sparkles className="h-3 w-3" />
                      Live Product
                    </Badge>
                  </div>
                  <CardTitle className="text-4xl">Fampo</CardTitle>
                  <CardDescription className="text-lg">
                    The Ultimate Family Organization App. A calm, modern, and secure digital family dashboard that helps families stay organized, connected, and informed — without chaos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-primary">✓</span>
                      <div>
                        <p className="font-medium">Shared Calendar</p>
                        <p className="text-sm text-muted-foreground">
                          Keep everyone in sync with a shared family calendar. Never miss important events with automated WhatsApp & SMS reminders.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-primary">✓</span>
                      <div>
                        <p className="font-medium">Task Management</p>
                        <p className="text-sm text-muted-foreground">
                          Assign and track tasks for family members. Stay on top of responsibilities with due dates and completion tracking.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-primary">✓</span>
                      <div>
                        <p className="font-medium">Family Memories</p>
                        <p className="text-sm text-muted-foreground">
                          Preserve special moments with a private family gallery. Upload photos and attach notes to create lasting memories.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-primary">✓</span>
                      <div>
                        <p className="font-medium">100% Secure</p>
                        <p className="text-sm text-muted-foreground">
                          Your family data is protected with row-level security. Private, encrypted, and accessible only to your family members.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button asChild size="lg" className="w-full sm:w-auto group">
                    <Link
                      href="https://fampo-marketing.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore Fampo
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Upcoming SaaS */}
      <section className="border-y border-border/40 bg-muted/20 py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Coming Soon
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Exciting new SaaS solutions currently in development
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-2">
              {UPCOMING_SAAS.map((product, index) => (
                <AnimatedSection key={product.id} delay={index * 0.1}>
                  <Card className="group h-full transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-4 flex items-center justify-between">
                        <Badge variant="secondary" className="gap-1">
                          <Clock className="h-3 w-3" />
                          {product.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl">{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 text-base">
                        {product.description}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground">
                        Stay tuned for updates on release dates and early access
                        opportunities.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Option */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <AnimatedSection>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Stay Updated
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Be the first to know when our new solutions launch. Get updates
                on product releases, features, and early access opportunities.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get Notified
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}

