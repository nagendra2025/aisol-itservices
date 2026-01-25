import Link from "next/link";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CareersForm } from "@/components/forms/CareersForm";
import { COMPANY_INFO } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { ArrowRight, Users, Briefcase, Heart, Shield, GraduationCap, Award, DollarSign } from "lucide-react";

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

      {/* Bug Bounty Program Section */}
      <section className="border-y border-border/40 bg-muted/20 py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="mb-12 text-center">
                <div className="mb-4 flex justify-center">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Bug Bounty Program
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  Help us build more secure applications while earning rewards and recognition
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Join Our Security Testing Community</CardTitle>
                  <CardDescription className="text-base">
                    AISOL invites security researchers, developers, and testing enthusiasts to participate in our Bug Bounty Program. Help us identify vulnerabilities in our in-house applications and contribute to building more secure digital platforms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                        <Shield className="h-5 w-5 text-primary" />
                        How It Works
                      </h3>
                      <p className="mb-4 text-justify text-muted-foreground">
                        When we open testing windows for our in-house applications, anyone can register to participate. 
                        Test the application in your environment, document your findings with complete details including 
                        testing environment specifications, steps to reproduce, and potential impact. Our security team 
                        will review each submission following industry-standard evaluation processes.
                      </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="rounded-lg border border-border/40 bg-card p-6">
                        <div className="mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Rewards & Recognition</h4>
                        </div>
                        <p className="text-justify text-sm text-muted-foreground">
                          Valid bugs are rewarded with monetary bounties based on severity and impact. 
                          All verified contributors receive a professional certificate of recognition, 
                          acknowledging their contribution to application security.
                        </p>
                      </div>

                      <div className="rounded-lg border border-border/40 bg-card p-6">
                        <div className="mb-3 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Professional Benefits</h4>
                        </div>
                        <p className="text-justify text-sm text-muted-foreground">
                          Build your security testing portfolio, gain real-world experience with modern 
                          applications, and receive professional recognition that enhances your credibility 
                          in the cybersecurity and software testing community.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-lg border-l-4 border-l-primary bg-muted/20 p-6">
                      <h4 className="mb-2 font-semibold">What We're Looking For</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-justify">Complete documentation of testing environment (OS, browser, device specifications)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-justify">Detailed steps to reproduce identified issues</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-justify">Clear explanation of potential security impact</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-justify">Professional and ethical testing practices</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Internships & Co-ops Program Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="mb-12 text-center">
                <div className="mb-4 flex justify-center">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Internships & Co-op Programs
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  Gain real-world experience in cutting-edge app development and testing with short-term, intensive programs
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Accelerate Your Career with Hands-On Experience</CardTitle>
                  <CardDescription className="text-base">
                    AISOL offers short-term internship and co-op opportunities (1-2 weeks) for university students 
                    passionate about software development and testing. Work on real projects, learn industry best 
                    practices, and build your professional portfolio while contributing to innovative digital solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        Program Overview
                      </h3>
                      <p className="mb-4 text-justify text-muted-foreground">
                        Our intensive internship and co-op programs are designed to provide university students with 
                        practical, hands-on experience in the latest app development and testing methodologies. As a 
                        company in its inception stage, we offer reasonable stipends and a collaborative environment 
                        where your contributions make a real impact. The selection and evaluation process follows 
                        industry standards, ensuring a professional learning experience.
                      </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="rounded-lg border border-border/40 bg-card p-6">
                        <div className="mb-3 flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Compensation & Benefits</h4>
                        </div>
                        <p className="text-justify text-sm text-muted-foreground">
                          Receive a reasonable stipend for your contribution. Gain exposure to modern development 
                          stacks, testing frameworks, and industry-standard tools. Work on real projects that 
                          enhance your portfolio and demonstrate your capabilities to future employers.
                        </p>
                      </div>

                      <div className="rounded-lg border border-border/40 bg-card p-6">
                        <div className="mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Professional Recognition</h4>
                        </div>
                        <p className="text-justify text-sm text-muted-foreground">
                          Upon successful completion, receive an official Letter of Completion certifying your 
                          internship experience. This professional document validates your skills and can be 
                          included in your resume, LinkedIn profile, and academic records.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="rounded-lg border-l-4 border-l-primary bg-muted/20 p-6">
                        <h4 className="mb-3 font-semibold">What You'll Learn</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span className="text-justify">Latest app development frameworks and technologies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span className="text-justify">Professional testing methodologies and quality assurance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span className="text-justify">Industry best practices and coding standards</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span className="text-justify">Collaborative development workflows and team dynamics</span>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-lg border-l-4 border-l-primary bg-muted/20 p-6">
                        <h4 className="mb-3 font-semibold">Selection Process</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span className="text-justify">Application review and initial screening</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span className="text-justify">Technical assessment aligned with industry standards</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span className="text-justify">Interview to assess fit and motivation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span className="text-justify">Evaluation based on performance and contribution</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                      <h4 className="mb-2 font-semibold">Mutual Benefits</h4>
                      <p className="text-justify text-sm text-muted-foreground">
                        This program creates value for both students and AISOL. Students gain practical experience, 
                        professional recognition, and portfolio-building opportunities. AISOL benefits from fresh 
                        perspectives, innovative ideas, and contributions to our development projects. Together, we 
                        build a learning ecosystem that drives innovation and professional growth.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
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

