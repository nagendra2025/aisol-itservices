import Link from "next/link";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICE_DETAILS } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { Check, ArrowRight } from "lucide-react";

export const metadata = generateMetadata({
  title: "Services",
  description:
    "Comprehensive technology services: SaaS Development, IT Consulting, Technology Training, and Web & Mobile Development. Transform your business with AISOL.",
  path: "/services",
});

export default function Services() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-muted/20 py-16 md:py-24">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Our Services
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SaaS Development */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="mb-8 flex items-center gap-4">
                <span className="text-5xl">{SERVICE_DETAILS["saas-development"].icon}</span>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {SERVICE_DETAILS["saas-development"].title}
                  </h2>
                  <p className="mt-2 text-lg text-muted-foreground">
                    {SERVICE_DETAILS["saas-development"].description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="grid gap-6 md:grid-cols-2">
                {SERVICE_DETAILS["saas-development"].features.map((feature, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <CardTitle className="text-xl">{feature}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        {feature === "Subscription platforms" &&
                          "Build robust subscription management systems with billing, invoicing, and customer lifecycle management."}
                        {feature === "Multi-tenant architecture" &&
                          "Design scalable multi-tenant systems that efficiently serve multiple customers from a single codebase."}
                        {feature === "AI-powered tools" &&
                          "Integrate AI and machine learning capabilities to automate processes and provide intelligent insights."}
                        {feature === "API integrations" &&
                          "Seamlessly connect with third-party services, payment gateways, and external systems via robust APIs."}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* IT Consulting */}
      <section className="border-y border-border/40 bg-muted/20 py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="mb-8 flex items-center gap-4">
                <span className="text-5xl">{SERVICE_DETAILS.consulting.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {SERVICE_DETAILS.consulting.title}
                  </h2>
                  <p className="mt-2 text-lg text-muted-foreground">
                    {SERVICE_DETAILS.consulting.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="grid gap-6 md:grid-cols-2">
                {SERVICE_DETAILS.consulting.features.map((feature, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <CardTitle className="text-xl">{feature}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        {feature === "Cloud modernization" &&
                          "Migrate legacy systems to modern cloud architectures, improving scalability, security, and cost-efficiency."}
                        {feature === "Architecture advisory" &&
                          "Get expert guidance on system architecture, technology stack selection, and best practices for your industry."}
                        {feature === "Migration planning" &&
                          "Plan and execute smooth migrations with minimal downtime, comprehensive testing, and rollback strategies."}
                        {feature === "Engineering leadership" &&
                          "Access senior engineering expertise to guide your team, establish best practices, and accelerate delivery."}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technology Training */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="mb-8 flex items-center gap-4">
                <span className="text-5xl">{SERVICE_DETAILS.training.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {SERVICE_DETAILS.training.title}
                  </h2>
                  <p className="mt-2 text-lg text-muted-foreground">
                    {SERVICE_DETAILS.training.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {SERVICE_DETAILS.training.features.map((feature, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <CardTitle className="text-xl">{feature}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        {feature === "AI & ML" &&
                          "Comprehensive training on artificial intelligence and machine learning, from fundamentals to advanced applications."}
                        {feature === "DevOps" &&
                          "Learn CI/CD pipelines, containerization, infrastructure as code, and modern DevOps practices."}
                        {feature === "Spring Boot" &&
                          "Master Spring Boot framework for building enterprise Java applications with best practices and patterns."}
                        {feature === "Modern JS" &&
                          "Stay current with modern JavaScript frameworks, TypeScript, and frontend development best practices."}
                        {feature === "Testing & automation" &&
                          "Learn comprehensive testing strategies, test automation, and quality assurance practices."}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Web & Mobile Development */}
      <section className="border-y border-border/40 bg-muted/20 py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="mb-8 flex items-center gap-4">
                <span className="text-5xl">{SERVICE_DETAILS["web-mobile"].icon}</span>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {SERVICE_DETAILS["web-mobile"].title}
                  </h2>
                  <p className="mt-2 text-lg text-muted-foreground">
                    {SERVICE_DETAILS["web-mobile"].description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="grid gap-6 md:grid-cols-2">
                {SERVICE_DETAILS["web-mobile"].features.map((feature, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <CardTitle className="text-xl">{feature}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        {feature === "Landing pages" &&
                          "Create high-converting landing pages optimized for SEO, performance, and user experience."}
                        {feature === "Web apps" &&
                          "Build full-featured web applications with modern frameworks, responsive design, and optimal performance."}
                        {feature === "React Native apps" &&
                          "Develop cross-platform mobile applications using React Native for iOS and Android from a single codebase."}
                        {feature === "SEO optimized builds" &&
                          "Ensure your web presence is discoverable with SEO-optimized code, meta tags, and performance best practices."}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <AnimatedSection>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Let's discuss how our services can help transform your business.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get in Touch
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



