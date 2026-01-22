import { Hero } from "@/components/sections/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturedProduct } from "@/components/sections/FeaturedProduct";
import { UpcomingSaaS } from "@/components/sections/UpcomingSaaS";
import { CTA } from "@/components/sections/CTA";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Home",
  description:
    "Engineering Intelligent Digital Platforms. Transform your business with SaaS development, IT consulting, technology training, and web & mobile solutions.",
});

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <ServicesPreview />
      <FeaturedProduct />
      <UpcomingSaaS />
      <CTA />
    </>
  );
}
