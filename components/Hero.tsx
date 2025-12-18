import { Button } from "@/components/ui/button";
import { HERO_CONTENT } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden bg-background text-foreground pt-16">
            {/* Abstract Background Effect */}
            <div className="absolute inset-0 z-0">
                {/* Light Mode: White/Off-white overlay. Dark Mode: Dark Slate overlay */}
                <div className="absolute inset-0 bg-background/60 dark:bg-slate-950/60 z-10" />

                {/* Background Image Texture */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-70 dark:opacity-70"
                    style={{ backgroundImage: "url('/finance-hero-main.png')" }}
                />

                {/* Gradient: Subtle in Light, Deep in Dark */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background/80 to-background dark:from-brand-navy/60 z-20" />
            </div>

            <div className="container relative z-10 flex w-full flex-col items-center gap-8 text-center px-4 md:px-6">
                <div className="inline-flex items-center rounded-full border border-border bg-background/50 backdrop-blur px-3 py-1 text-sm text-muted-foreground shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-brand-cyan mr-2 animate-pulse" />
                    Powered by AlphaLens AI
                </div>

                <h1 className="font-serif text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    {HERO_CONTENT.headline}
                </h1>

                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Navigate the markets with real-time AI analysis through <span className="text-brand-cyan font-bold">AlphaLens AI</span>, powered by our research models.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link href="/about">
                        <Button size="lg" className="h-12 px-8 text-base">
                            {HERO_CONTENT.ctaPrimary} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                            {HERO_CONTENT.ctaSecondary}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
