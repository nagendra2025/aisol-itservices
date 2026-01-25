import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { COMPANY_INFO } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { MapPin, Target, Lightbulb, Heart } from "lucide-react";

export const metadata = generateMetadata({
  title: "About",
  description:
    "Learn about AISOL IT SERVICES INC - Our vision, philosophy, and commitment to engineering intelligent digital platforms. Based in Burlington, ON.",
  path: "/about",
});

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-muted/20 py-16 md:py-24">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                About AISOL
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Engineering Intelligent Digital Platforms
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Company Overview
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="mb-4 text-lg text-muted-foreground text-justify">
                  {COMPANY_INFO.name} is a forward-thinking technology company
                  dedicated to transforming businesses through intelligent digital
                  solutions. With over 25 years of combined experience, we
                  specialize in SaaS development, IT consulting, technology
                  training, and web & mobile development.
                </p>
                <p className="mb-4 text-lg text-muted-foreground text-justify">
                  Based in {COMPANY_INFO.location}, we serve clients across
                  North America, helping small businesses and enterprises alike
                  leverage cutting-edge technology to achieve their goals.
                </p>
                <p className="text-lg text-muted-foreground text-justify">
                  Our mission is to bridge the gap between complex technology
                  and business needs, delivering solutions that are not just
                  functional, but transformative.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder Vision */}
      <section className="border-y border-border/40 bg-muted/20 py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="mb-8 flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Founder Vision
                </h2>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="mb-4 text-lg text-muted-foreground text-justify">
                  AISOL was founded with a clear vision: to democratize access to
                  enterprise-grade technology solutions. We believe that every
                  business, regardless of size, deserves access to intelligent,
                  scalable, and cost-effective digital platforms.
                </p>
                <div className="mb-6 rounded-lg border border-border/40 bg-card p-6">
                  <h3 className="mb-4 text-2xl font-semibold">About the Founder</h3>
                  <p className="mb-3 text-base text-muted-foreground text-justify">
                    <strong className="text-foreground">Nagendra Kumar Adapala</strong> brings over 25 years of 
                    extensive experience in software development, IT consulting, and technology leadership. 
                    With a strong educational foundation—holding a Master of Engineering in Computer Science 
                    from BITS, Pilani, Rajasthan, and a Bachelor of Technology in Computer Science Engineering 
                    from S.V. University, Tirupati, Andhra Pradesh—Nagendra has built a reputation for delivering 
                    scalable, intelligent digital solutions that drive real business value.
                  </p>
                  <p className="mb-3 text-base text-muted-foreground text-justify">
                    His distinguished career includes working with top multinational corporations such as Philips, 
                    Oracle, TCS, and Hewlett Packard, as well as several innovative startups in India. 
                    In Canada, Nagendra has worked with prestigious clients including Citi and ScotiaBank, 
                    delivering enterprise-grade solutions for the financial services sector. His expertise spans 
                    SaaS platform development, cloud architecture, AI/ML integration, and modern web technologies. 
                    Throughout his career, he has successfully led numerous projects from conception to deployment, 
                    helping businesses transform their operations through innovative technology solutions.
                  </p>
                  <p className="mb-4 text-base text-muted-foreground text-justify">
                    As the founder of AISOL IT SERVICES, Nagendra combines deep technical knowledge with 
                    business acumen, ensuring that every solution not only meets technical standards but 
                    also aligns with client objectives and delivers measurable ROI. His commitment to 
                    continuous learning and staying at the forefront of technology trends, combined with 
                    his diverse experience across global markets and industries, enables AISOL to offer 
                    cutting-edge solutions that help clients stay competitive in today's digital landscape.
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://www.linkedin.com/in/nagendrakumaradapala/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <span>View LinkedIn Profile</span>
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="mb-4 text-lg text-muted-foreground text-justify">
                  Our founder envisioned a company that combines deep technical
                  expertise with business acumen, creating solutions that not
                  only work but drive real business value. This vision continues
                  to guide every project we undertake.
                </p>
                <p className="text-lg text-muted-foreground text-justify">
                  We see technology as an enabler of innovation, not just a tool.
                  Every platform we build, every consultation we provide, and
                  every training session we conduct is designed to empower our
                  clients to achieve more.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="mb-8 flex items-center gap-3">
                <Lightbulb className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Our Philosophy
                </h2>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Innovation First</h3>
                  <p className="text-muted-foreground">
                    We stay at the forefront of technology, continuously learning
                    and adapting to bring the latest innovations to our clients.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Client-Centric</h3>
                  <p className="text-muted-foreground">
                    Every solution is tailored to our client's unique needs. We
                    listen, understand, and deliver exactly what's needed.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Quality Driven</h3>
                  <p className="text-muted-foreground">
                    We don't compromise on quality. Every line of code, every
                    consultation, and every training session meets our high
                    standards.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why AISOL */}
      <section className="border-y border-border/40 bg-muted/20 py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="mb-8 flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Why AISOL
                </h2>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Deep Technical Expertise
                  </h3>
                  <p className="text-muted-foreground">
                    Our team brings decades of combined experience in SaaS
                    development, cloud architecture, AI/ML, and modern web
                    technologies. We're not just developers—we're architects of
                    digital transformation.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Business-Focused Approach
                  </h3>
                  <p className="text-muted-foreground">
                    We understand that technology is a means to an end. Every
                    solution we build is designed with your business goals in
                    mind, ensuring ROI and long-term value.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Scalable Solutions
                  </h3>
                  <p className="text-muted-foreground">
                    Whether you're a startup or an enterprise, we build
                    solutions that grow with you. Our multi-tenant architectures
                    and cloud-native approaches ensure your platform can scale
                    seamlessly.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Continuous Support
                  </h3>
                  <p className="text-muted-foreground">
                    Our relationship doesn't end at launch. We provide ongoing
                    support, training, and consultation to ensure your success
                    long-term.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedSection>
              <div className="mb-4 flex justify-center">
                <MapPin className="h-12 w-12 text-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Based in {COMPANY_INFO.location}
              </h2>
              <p className="text-lg text-muted-foreground">
                Serving clients across North America with remote-first
                capabilities and on-site consultation when needed.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}



