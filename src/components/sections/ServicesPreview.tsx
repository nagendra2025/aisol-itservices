import Link from "next/link";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <Card className="group h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 text-4xl">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-base">
                    {service.description}
                  </CardDescription>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:underline group-hover:text-primary/80"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}



