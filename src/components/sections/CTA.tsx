import Link from "next/link";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-24 md:py-32">
      <div className="container px-4">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Let's build something impactful.
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Ready to transform your business with intelligent technology
              solutions? Get in touch and let's discuss how we can help.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}



