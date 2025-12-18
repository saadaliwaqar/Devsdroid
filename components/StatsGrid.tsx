import { STATS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

export function StatsGrid() {
    return (
        <section className="container py-12 md:py-16">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-8">
                {STATS.map((stat, idx) => (
                    <Card key={idx} className="border-none bg-muted/20 shadow-none">
                        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                            <span className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                                {stat.value}
                            </span>
                            <span className="mt-2 text-sm font-medium text-muted-foreground">
                                {stat.label}
                            </span>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
