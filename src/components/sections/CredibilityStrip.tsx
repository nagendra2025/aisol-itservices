import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { CREDIBILITY_STATS } from "@/lib/constants";

export function CredibilityStrip() {
  return (
    <section className="border-b border-border/40 bg-muted/30 py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {CREDIBILITY_STATS.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

