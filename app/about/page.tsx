"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Users, BrainCircuit, Layers, Target } from "lucide-react";
import { Footer } from "@/components/Footer";

const coreValues = [
    {
        icon: Code2,
        title: "Engineering Excellence",
        desc: "We write clean, scalable, production-grade code. No shortcuts, no technical debt."
    },
    {
        icon: BrainCircuit,
        title: "AI-First Mindset",
        desc: "We integrate AI into every solution — not as an afterthought, but as a core capability."
    },
    {
        icon: Users,
        title: "Unified Team Model",
        desc: "One team. One standard. Engineers, designers, and AI specialists working as a cohesive unit."
    },
];

const milestones = [
    { year: "2022", event: "DevsDroid founded in Lahore" },
    { year: "2023", event: "First AI agent deployed for enterprise client" },
    { year: "2024", event: "Expanded to UK operations, 30+ AI agents built" },
    { year: "2025", event: "50+ projects delivered across 5+ countries" },
];

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 md:py-44 flex flex-col items-center justify-center text-center overflow-hidden min-h-[55vh]">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-grid opacity-40" />
                    <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[130px] animate-pulse-glow" />
                    <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: "0.7s" }} />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-background)_92%)]" />
                    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent" />
                </div>

                <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 mb-7"
                    >
                        <Target className="w-4 h-4 text-primary" />
                        <span className="eyebrow">About_Us</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="display text-5xl md:text-7xl lg:text-8xl max-w-5xl mx-auto"
                    >
                        We Build the{" "}
                        <span className="text-primary text-glow">Future</span>{" "}
                        of Software
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        DevsDroid is a premium software development agency specializing in AI-powered applications, autonomous agents, and scalable digital products.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="container mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
                <div className="grid lg:grid-cols-2 gap-6 items-start">
                    {/* Left: Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="surface hover-lift rounded-2xl p-8 md:p-10 hover:border-primary/25"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="eyebrow">Our_Story</span>
                        </div>

                        <h2 className="display text-3xl md:text-4xl lg:text-5xl mb-6">
                            From Code to{" "}
                            <span className="text-primary">Intelligence</span>
                        </h2>

                        <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                            <p>
                                DevsDroid was founded with a clear mission: to bridge the gap between traditional software development and the AI revolution.
                            </p>
                            <p className="border-l-2 border-primary/30 pl-4">
                                We saw an industry full of fragmented teams, misaligned incentives, and missed deadlines. We built DevsDroid as the antidote — a{" "}
                                <span className="text-white font-medium">unified technical partner</span> that handles everything from system architecture to AI deployment.
                            </p>
                            <p>
                                Today, we work with startups and enterprises across{" "}
                                <span className="text-white font-medium">5+ countries</span>, delivering production-grade software infused with AI capabilities.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Timeline + Stats */}
                    <div className="space-y-6">
                        {/* Timeline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="surface hover-lift rounded-2xl p-8 hover:border-primary/25"
                        >
                            <div className="eyebrow mb-6">Timeline</div>
                            <div className="space-y-6">
                                {milestones.map((m, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="w-16 text-right">
                                            <span className="text-lg font-bold text-white font-mono">{m.year}</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-3 h-3 rounded-full bg-primary/50 border border-primary" />
                                            {i < milestones.length - 1 && (
                                                <div className="w-px h-8 bg-white/10 mt-1" />
                                            )}
                                        </div>
                                        <p className="text-slate-400 text-sm pt-0.5">{m.event}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Stats Mini Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: "50+", label: "Projects" },
                                { value: "30+", label: "AI Agents" },
                                { value: "95%", label: "Retention" },
                                { value: "5+", label: "Countries" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.05 }}
                                    className="surface rounded-xl p-6 text-center hover:border-primary/25 transition-colors duration-300"
                                >
                                    <div className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</div>
                                    <div className="text-xs text-muted-foreground font-mono uppercase tracking-[0.16em] mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="container mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-32">
                <div className="mb-16 max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-6"
                    >
                        <Layers className="w-4 h-4 text-primary" />
                        <span className="eyebrow">Principles</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="display text-4xl md:text-5xl lg:text-6xl mb-4"
                    >
                        How We <span className="text-primary">Operate</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-2xl"
                    >
                        Three non-negotiable principles that define everything we build.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {coreValues.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group surface hover-lift relative rounded-2xl p-8 overflow-hidden hover:border-primary/25"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{item.desc}</p>

                            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 relative overflow-hidden border-t border-white/5 bg-[#090C13]">
                <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />

                <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="display text-4xl md:text-5xl lg:text-6xl mb-6">
                            Let&apos;s build your{" "}
                            <span className="text-primary">next product</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                            Whether it&apos;s an AI agent, a full-stack platform, or a design system — we&apos;re ready to ship.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white font-mono font-bold rounded-xl hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300"
                            >
                                {"// View_Services"}
                            </Link>
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono font-bold rounded-xl hover:bg-primary-strong transition-all duration-300 glow-primary glow-primary-hover"
                            >
                                Start_Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
