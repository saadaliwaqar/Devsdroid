"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Mirrors the 5 leaks 1:1, each pain sealed.
const outcomes = [
    { gain: "Work that happens automatically", was: "manual busywork" },
    { gain: "All your tools connected, one place to trust", was: "scattered data" },
    { gain: "Fast, reliable launches", was: "shaky releases" },
    { gain: "AI built in from day one", was: "no AI advantage" },
    { gain: "Your best people freed for real work", was: "endless upkeep" },
];

export const OutcomesSection = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-muted border-y border-foreground/5">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/6 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="eyebrow">Outcomes</span>
                    </div>
                    <h2 className="display text-4xl md:text-5xl lg:text-6xl">
                        From bottlenecks to{" "}
                        <span className="em-serif text-primary text-glow">momentum.</span>
                    </h2>
                    <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                        Five common problems, solved. Here&apos;s what changes when you build with us.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3">
                    {outcomes.map((o, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="group surface rounded-xl p-5 md:p-6 flex items-center gap-5 hover:border-primary/25 transition-colors"
                        >
                            <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                                <ArrowRight className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-lg md:text-xl font-bold text-foreground leading-tight">{o.gain}</div>
                                <div className="mt-1 text-sm text-muted-foreground font-mono">
                                    <span className="line-through decoration-foreground/20">{o.was}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
