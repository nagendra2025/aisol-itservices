export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/trends", label: "Latest Trends" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "saas-development",
    title: "SaaS Development",
    description: "Build scalable subscription platforms with multi-tenant architecture and AI-powered tools.",
    icon: "💻",
  },
  {
    id: "consulting",
    title: "IT Consulting",
    description: "Cloud modernization, architecture advisory, and engineering leadership for your business.",
    icon: "🎯",
  },
  {
    id: "training",
    title: "Technology Training",
    description: "Expert training in AI & ML, DevOps, Spring Boot, and modern JavaScript frameworks.",
    icon: "📚",
  },
  {
    id: "web-mobile",
    title: "Web & Mobile Development",
    description: "Landing pages, web apps, React Native apps, and SEO-optimized builds.",
    icon: "📱",
  },
] as const;

export const CREDIBILITY_STATS = [
  { label: "20+ Years Experience", value: "20+" },
  { label: "AI & Cloud Focused", value: "AI" },
  { label: "Enterprise & SMB Solutions", value: "Enterprise" },
] as const;

export const COMPANY_INFO = {
  name: "AISOL IT SERVICES INC",
  tagline: "Engineering Intelligent Digital Platforms",
  location: "Burlington, ON",
  email: "aisol2k25@gmail.com",
} as const;

export const UPCOMING_SAAS = [
  {
    id: "ai-home-suite",
    title: "AI Home Suite",
    description: "Intelligent home automation platform powered by AI.",
    status: "Coming Soon",
  },
  {
    id: "edusuite",
    title: "EduSuite",
    description: "Comprehensive educational management system with AI insights.",
    status: "Coming Soon",
  },
] as const;

export const SERVICE_DETAILS = {
  "saas-development": {
    title: "SaaS Development",
    description: "Build scalable subscription platforms with multi-tenant architecture and AI-powered tools.",
    features: [
      "Subscription platforms",
      "Multi-tenant architecture",
      "AI-powered tools",
      "API integrations",
    ],
    icon: "💻",
  },
  consulting: {
    title: "IT Consulting",
    description: "Cloud modernization, architecture advisory, and engineering leadership for your business.",
    features: [
      "Cloud modernization",
      "Architecture advisory",
      "Migration planning",
      "Engineering leadership",
    ],
    icon: "🎯",
  },
  training: {
    title: "Technology Training",
    description: "Expert training in AI & ML, DevOps, Spring Boot, and modern JavaScript frameworks.",
    features: [
      "AI & ML",
      "DevOps",
      "Spring Boot",
      "Modern JS",
      "Testing & automation",
    ],
    icon: "📚",
  },
  "web-mobile": {
    title: "Web & Mobile Development",
    description: "Landing pages, web apps, React Native apps, and SEO-optimized builds.",
    features: [
      "Landing pages",
      "Web apps",
      "React Native apps",
      "SEO optimized builds",
    ],
    icon: "📱",
  },
} as const;

export const TREND_TOPICS = [
  {
    id: "ai-small-business",
    title: "AI in Small Business",
    description: "How artificial intelligence is transforming small business operations, from automation to customer insights.",
    category: "AI & Technology",
    date: "2024",
  },
  {
    id: "modern-microservices",
    title: "Modern Microservices",
    description: "Best practices for building scalable microservices architectures in the cloud era.",
    category: "Architecture",
    date: "2024",
  },
  {
    id: "saas-monetization",
    title: "SaaS Monetization",
    description: "Strategies for successful SaaS product monetization and subscription model optimization.",
    category: "Business",
    date: "2024",
  },
  {
    id: "devops-evolution",
    title: "DevOps Evolution",
    description: "The evolution of DevOps practices and how modern teams are accelerating software delivery.",
    category: "DevOps",
    date: "2024",
  },
] as const;

