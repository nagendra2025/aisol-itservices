import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { TREND_TOPICS } from "@/lib/constants";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return TREND_TOPICS.map((topic) => ({
        slug: topic.id,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const topic = TREND_TOPICS.find((t) => t.id === slug);

    if (!topic) {
        return generateSEOMetadata({
            title: "Trend Not Found",
            description: "The requested trend article could not be found.",
            path: "/trends",
        });
    }

    return generateSEOMetadata({
        title: topic.title,
        description: topic.description,
        path: `/trends/${slug}`,
    });
}

export default async function TrendArticle({ params }: Props) {
    const { slug } = await params;
    const topic = TREND_TOPICS.find((t) => t.id === slug);

    if (!topic) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="border-b border-border/40 bg-muted/20 py-16 md:py-24">
                <div className="container px-4">
                    <AnimatedSection>
                        <div className="mx-auto max-w-4xl">
                            <Link
                                href="/trends"
                                className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Latest Trends
                            </Link>

                            <div className="mb-6 flex items-center gap-2">
                                <Badge variant="outline" className="gap-1">
                                    <Tag className="h-3 w-3" />
                                    {topic.category}
                                </Badge>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Calendar className="h-3 w-3" />
                                    {topic.date}
                                </div>
                            </div>

                            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                {topic.title}
                            </h1>
                            <p className="text-lg text-muted-foreground sm:text-xl">
                                {topic.description}
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-16 md:py-24">
                <div className="container px-4">
                    <div className="mx-auto max-w-4xl">
                        <AnimatedSection>
                            {topic.content ? (
                                <>
                                    <div
                                        className="prose prose-invert max-w-none dark:prose-invert prose-headings:font-bold prose-p:leading-relaxed prose-ul:list-disc prose-li:marker:text-muted-foreground"
                                        dangerouslySetInnerHTML={{ __html: topic.content }}
                                    />

                                    {/* Further Reading Section */}
                                    {topic.furtherReading && topic.furtherReading.length > 0 && (
                                        <div className="mt-12 rounded-lg border border-border/40 bg-muted/20 p-8">
                                            <h2 className="mb-4 text-2xl font-bold">Further Reading</h2>
                                            <p className="mb-6 text-muted-foreground">
                                                For a deeper industry perspective, explore these additional resources:
                                            </p>
                                            <ul className="space-y-3">
                                                {topic.furtherReading.map((item, index) => (
                                                    <li key={index}>
                                                        <a
                                                            href={item.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-primary hover:underline font-medium"
                                                        >
                                                            {item.title}
                                                        </a>
                                                        <span className="text-muted-foreground text-sm ml-2">— {item.source}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="rounded-lg border border-border/40 bg-muted/20 p-12 text-center">
                                    <h2 className="mb-4 text-2xl font-bold">Article Coming Soon</h2>
                                    <p className="mb-6 text-muted-foreground">
                                        We're working on bringing you detailed insights on this topic. Check back soon!
                                    </p>
                                    <Link
                                        href="/trends"
                                        className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:underline"
                                    >
                                        ← Back to Latest Trends
                                    </Link>
                                </div>
                            )}
                        </AnimatedSection>
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
                                Explore our services or get in touch to discuss how these trends can transform your business.
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

