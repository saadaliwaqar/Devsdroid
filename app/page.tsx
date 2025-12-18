import { Hero } from "@/components/Hero";
import { StatsGrid } from "@/components/StatsGrid";
import { FeatureGrid } from "@/components/FeatureGrid";
import { EngagementSection } from "@/components/EngagementSection";
import { ResearchCard } from "@/components/ResearchCard";
import { PERFORMANCE_HIGHLIGHT } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const recentResearch = [
    {
      title: "Trade Turbulence & Economic Recalibration: Q2 Outlook Under Pressure",
      date: "Oct 12, 2025",
      category: "Macro Strategy",
      excerpt: "Analyzing the escalating trade tensions and their direct impact on global supply chains and central bank policy recalibrations.",
      href: "/research/trading-turbulence",
      image: "/research/trading-turbulence.jpg",
    },
    {
      title: "Global Markets on Edge: Inflation, Trade Wars & Policy Shifts",
      date: "Oct 10, 2025",
      category: "Global Markets",
      excerpt: "An in-depth analysis of renewed inflationary pressures and the escalating trade tensions reshaping the global economic landscape.",
      href: "/research/global-markets-edge",
      image: "/research/global-markets-edge.jpg",
    },
    {
      title: "Global Markets in Flux: Dollar Slides, Euro Eyes Key Levels",
      date: "Oct 05, 2025",
      category: "FX Analysis",
      excerpt: "Technical and fundamental breakdown of the US Dollar's recent weakness and the critical resistance levels for the Euro.",
      href: "/research/global-markets-flux",
      image: "/research/global-markets-flux.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-12 md:gap-24 pb-20">
      <Hero />

      {/* Performance Highlight "Trust" Section */}
      <section className="container px-4 md:px-6">
        <div className="rounded-3xl bg-brand-navy p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-brand-gold/10 blur-[100px] rounded-full" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-serif">Unmatched Performance</h2>
              <p className="text-slate-300 md:text-lg">
                {PERFORMANCE_HIGHLIGHT.details}
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end">
              <div className="text-6xl font-black text-brand-gold md:text-8xl tracking-tighter">
                {PERFORMANCE_HIGHLIGHT.statistic}
              </div>
              <p className="text-xl font-medium mt-2 text-slate-300">
                {PERFORMANCE_HIGHLIGHT.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsGrid />

      <FeatureGrid />

      {/* Latest Research */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8 md:mb-12">
          <h2 className="text-3xl font-bold font-serif tracking-tight">Latest Research</h2>
          <p className="text-muted-foreground max-w-[42rem]">
            Insights from our desk to your screen.
          </p>
          <Link href="/research" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
            View All Research <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentResearch.map((item, idx) => (
            <ResearchCard key={idx} {...item} />
          ))}
        </div>
      </section>

      <EngagementSection />
    </div>
  );
}
