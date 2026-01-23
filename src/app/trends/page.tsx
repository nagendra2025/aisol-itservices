import Link from "next/link";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TREND_TOPICS } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { Calendar, Tag } from "lucide-react";

export const metadata = generateMetadata({
  title: "Latest Trends",
  description:
    "Stay informed about the latest trends in AI, microservices, SaaS monetization, DevOps, and technology. Insights from AISOL IT SERVICES.",
  path: "/trends",
});

export default function Trends() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-muted/20 py-16 md:py-24">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Latest Trends
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Insights on AI, technology, and business transformation
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trends Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {TREND_TOPICS.map((topic, index) => (
                <AnimatedSection key={topic.id} delay={index * 0.1}>
                  <Card className="group h-full transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-3 flex items-center gap-2">
                        <Badge variant="outline" className="gap-1">
                          <Tag className="h-3 w-3" />
                          {topic.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {topic.date}
                        </div>
                      </div>
                      <CardTitle className="text-2xl">{topic.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 text-base">
                        {topic.description}
                      </CardDescription>
                      <Link
                        href={`/trends/${topic.id}`}
                        className="text-sm font-medium text-primary transition-colors hover:underline"
                      >
                        Read more →
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-muted/20 py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <AnimatedSection>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Want to Learn More?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Explore our services or get in touch to discuss how these trends
                can transform your business.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:underline"
                >
                  View Services →
                </Link>
                <span className="text-muted-foreground">or</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:underline"
                >
                  Contact Us →
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}



