"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Sparkles } from "lucide-react";

export function FeaturedProduct() {
  return (
    <section className="border-y border-border/40 bg-muted/20 py-24 md:py-32">
      <div className="container px-4">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Solution
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Discover our flagship SaaS platform
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="mx-auto max-w-3xl border-2 transition-all hover:shadow-xl">
            <CardHeader className="pb-4">
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-sm font-semibold text-primary">Live Product</span>
              </div>
              <CardTitle className="text-3xl">Fampo</CardTitle>
              <CardDescription className="text-base">
                The Ultimate Family Organization App. A calm, modern, and secure digital family dashboard that helps families stay organized, connected, and informed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="mb-6 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Shared calendar with smart reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Task management and family coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Private family memories gallery</span>
                </li>
              </ul>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link
                  href="https://fampo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  Explore Fampo
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}

