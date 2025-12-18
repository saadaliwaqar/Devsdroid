import { Zap, TrendingUp, Brain } from "lucide-react";

const FEATURES = [
    {
        title: "Proven, Repeatable Process",
        description: "Our macro-framework delivers consistent results across market cycles.",
        icon: TrendingUp,
    },
    {
        title: "High-Conviction Ideas",
        description: "Alpha-generating strategies focused on asymmetric risk-reward opportunities.",
        icon: Zap,
    },
    {
        title: "Psychology-Driven Trading",
        description: "Understanding market sentiment and behavioral economics to time entries.",
        icon: Brain,
    },
];

export function FeatureGrid() {
    return (
        <section className="container py-12 md:py-24 lg:py-32">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                {FEATURES.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border border-border/50 bg-background/50 hover:bg-muted/50 transition-colors">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <feature.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold font-serif">{feature.title}</h3>
                        <p className="text-muted-foreground">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
