import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

export function generateMetadata({
  title = "AISOL IT SERVICES INC",
  description = "Engineering Intelligent Digital Platforms. SaaS development, IT consulting, technology training, and web & mobile solutions.",
  path = "",
}: SEOProps = {}): Metadata {
  const url = `https://aisol-itservices.vercel.app${path}`;
  const fullTitle = path ? `${title} | AISOL IT SERVICES` : title;

  return {
    title: fullTitle,
    description,
    keywords: [
      "SaaS development",
      "IT consulting",
      "technology training",
      "web development",
      "mobile development",
      "AI solutions",
      "cloud services",
      "Burlington IT services",
    ],
    authors: [{ name: "AISOL IT SERVICES INC" }],
    creator: "AISOL IT SERVICES INC",
    publisher: "AISOL IT SERVICES INC",
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "AISOL IT SERVICES INC",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@aisolitservices",
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

