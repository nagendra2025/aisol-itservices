import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UPCOMING_SAAS } from "@/lib/constants";
import { Clock } from "lucide-react";

export function UpcomingSaaS() {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Coming Soon
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Exciting new SaaS solutions in development
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
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
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}



