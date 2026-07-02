"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Link2, Rocket, Sparkles, Users, ArrowRight } from "lucide-react";

// Mirrors the 5 leaks 1:1, each pain turned into an outcome.
const outcomes = [
    {
        icon: Zap,
        gain: "Work that happens automatically",
        was: "manual busywork",
        benefit: "Routine tasks run themselves, so nothing waits on a person.",
    },
    {
        icon: Link2,
        gain: "All your tools, one source of truth",
        was: "scattered data",
        benefit: "Everything lives in one place your whole team can trust.",
    },
    {
        icon: Rocket,
        gain: "Fast, reliable launches",
        was: "shaky releases",
        benefit: "Ship updates with confidence, without things breaking.",
    },
    {
        icon: Sparkles,
        gain: "AI built in from day one",
        was: "no AI advantage",
        benefit: "AI works for you from the first release, not as an afterthought.",
    },
    {
        icon: Users,
        gain: "Your best people freed for real work",
        was: "endless upkeep",
        benefit: "Your team spends its time creating, not just keeping the lights on.",
    },
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {outcomes.map((o, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i % 3) * 0.08 }}
                            className="group surface hover-lift relative rounded-2xl p-6 overflow-hidden hover:border-primary/25 flex flex-col"
                        >
                            <div className="flex items-start justify-between gap-3 mb-5">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <o.icon className="w-5 h-5 text-primary" />
                                </div>
                                <span className="flex flex-col items-end text-right">
                                    <span className="text-[0.6rem] font-mono uppercase tracking-widest text-muted-foreground/60">Before</span>
                                    <span className="text-xs font-mono text-muted-foreground/80 line-through decoration-foreground/25">{o.was}</span>
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-foreground leading-snug">{o.gain}</h3>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.benefit}</p>

                            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}

                    {/* Conversion card rounds out the grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.16 }}
                        className="relative rounded-2xl p-6 overflow-hidden border border-primary/30 bg-primary/[0.06] flex flex-col justify-center"
                    >
                        <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/15 rounded-full blur-[50px] pointer-events-none" />
                        <h3 className="text-lg font-bold text-foreground leading-snug relative z-10">
                            Ready to turn these into your reality?
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground relative z-10">
                            We map exactly where AI and automation pay off for your business.
                        </p>
                        <Link
                            href="/contact"
                            className="group mt-5 inline-flex items-center gap-2 text-sm font-mono font-bold text-primary hover:text-primary-strong transition-colors relative z-10"
                        >
                            Book_My_Audit
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
