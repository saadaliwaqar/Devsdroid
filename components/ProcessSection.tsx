"use client";

import { motion } from "framer-motion";
import { Search, PenTool, FlaskConical, Hammer, Rocket, LineChart } from "lucide-react";

const steps = [
    { n: "01", icon: Search, title: "Discovery", desc: "We map how your team works and find exactly where AI can save you time." },
    { n: "02", icon: PenTool, title: "Plan", desc: "A clear plan you can see and approve, before any work starts." },
    { n: "03", icon: FlaskConical, title: "Prototype", desc: "A working demo fast, so you can see the results before you fully commit." },
    { n: "04", icon: Hammer, title: "Build", desc: "We build it properly: tested, reliable, and ready to grow with you." },
    { n: "05", icon: Rocket, title: "Launch", desc: "We go live smoothly, with no downtime and full monitoring in place." },
    { n: "06", icon: LineChart, title: "Improve", desc: "We measure results and keep tuning, so the value keeps growing over time." },
];

export const ProcessSection = () => {
    return (
        <section id="methodology" className="py-24 md:py-32 container mx-auto max-w-7xl px-4 md:px-6 relative">
            <div className="absolute right-1/4 top-0 w-[500px] h-[300px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="eyebrow">How_We_Work</span>
                </div>
                <h2 className="display text-4xl md:text-5xl lg:text-6xl">
                    No black boxes. Just a{" "}
                    <span className="em-serif text-primary">clear path.</span>
                </h2>
                <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                    A proven, end-to-end process, from first look to lasting results.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (i % 3) * 0.08 }}
                        className="group surface hover-lift relative p-8 rounded-2xl overflow-hidden hover:border-primary/25"
                    >
                        <div className="absolute top-4 right-5 font-mono text-5xl font-bold text-foreground/[0.04] group-hover:text-primary/10 transition-colors">
                            {step.n}
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                                <step.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
