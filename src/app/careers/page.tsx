import Link from "next/link";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CareersForm } from "@/components/forms/CareersForm";
import { COMPANY_INFO } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { ArrowRight, Users, Briefcase, Heart } from "lucide-react";

export const metadata = generateMetadata({
  title: "Careers",
  description:
    "Join AISOL IT SERVICES INC. Explore career opportunities in SaaS development, IT consulting, and technology. Based in Burlington, ON.",
  path: "/careers",
});

export default function Careers() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-muted/20 py-16 md:py-24">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Join AISOL
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Build the future of intelligent digital platforms with us
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Why Join AISOL?
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Be part of a team that's shaping the future of technology
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-3">
              <AnimatedSection delay={0.1}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle>Collaborative Culture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Work with talented professionals in a supportive,
                      collaborative environment where your ideas matter.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <Briefcase className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle>Growth Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Continuous learning and professional development
                      opportunities in cutting-edge technologies.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <Heart className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle>Meaningful Work</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Build solutions that make a real impact on businesses and
                      help transform industries.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="border-y border-border/40 bg-muted/20 py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Open Roles
                </h2>
                <p className="text-muted-foreground">
                  We're always looking for talented individuals to join our team
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle>We're Growing!</CardTitle>
                  <CardDescription>
                    While we don't have specific openings listed at the moment,
                    we're always interested in connecting with talented
                    professionals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    If you're passionate about SaaS development, cloud
                    architecture, AI/ML, or technology consulting, we'd love to
                    hear from you. Send us your information and we'll keep you
                    in mind for future opportunities.
                  </p>
                  <p className="text-muted-foreground">
                    We're particularly interested in:
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Full-stack developers (React, Node.js, TypeScript)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Cloud architects (AWS, Azure, GCP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>DevOps engineers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>AI/ML engineers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Technology consultants</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Express Your Interest
                </h2>
                <p className="text-muted-foreground">
                  Tell us about yourself and your interest in joining AISOL
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <CareersForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="border-t border-border/40 bg-muted/20 py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <AnimatedSection>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Based in {COMPANY_INFO.location}
              </h2>
              <p className="text-lg text-muted-foreground">
                We support remote work and welcome candidates from across North
                America. On-site opportunities available in the Greater Toronto
                Area.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}

