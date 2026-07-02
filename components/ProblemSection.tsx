"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const leaks = [
    "Your team copies data between apps by hand, all day",
    "Your information is scattered, so no one has the full picture",
    "Slow, fragile launches that break when it matters most",
    "AI is doing nothing to help your daily work",
    "Your best people spend their time on upkeep, not new ideas",
];

export const ProblemSection = () => {
    return (
        <section className="py-24 md:py-32 container mx-auto max-w-7xl px-4 md:px-6 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center mb-14">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="eyebrow">The_Problem</span>
                </div>
                <h2 className="display text-4xl md:text-5xl lg:text-6xl">
                    Growth stalls when work depends on{" "}
                    <span className="em-serif text-primary">manual effort.</span>
                </h2>
                <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                    Every week, small delays add up and cost you time. Here&apos;s where it slips away.
                </p>
            </div>

            {/* Diagnostic terminal */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto surface rounded-2xl overflow-hidden shadow-2xl"
            >
                <div className="bg-foreground/[0.03] px-4 py-3 flex items-center gap-2 border-b border-foreground/5">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <span className="ml-3 flex items-center gap-2 text-xs font-mono text-muted-foreground">
                        <Terminal className="w-3.5 h-3.5" /> capacity-audit
                    </span>
                </div>
                <div className="p-6 md:p-8 font-mono text-sm md:text-[0.95rem] space-y-3">
                    <div className="text-muted-foreground">
                        <span className="text-primary">$</span> run capacity_audit --scan
                    </div>
                    {leaks.map((leak, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 + i * 0.12 }}
                            className="flex items-start gap-3 text-foreground/80"
                        >
                            <span className="text-amber-400/90 font-bold shrink-0">[LEAK]</span>
                            <span>{leak}</span>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + leaks.length * 0.12 }}
                        className="pt-2 text-muted-foreground"
                    >
                        <span className="text-red-400/90">✗</span> 5 bottlenecks found. Time lost:{" "}
                        <span className="text-foreground font-bold">dozens of hours / week</span>
                        <span className="ml-1 inline-block w-2 h-4 bg-primary align-middle animate-pulse" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};
