"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Users, Zap, Globe, BrainCircuit, Layers, Target, Rocket } from "lucide-react";
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
            <section className="relative py-32 md:py-40 flex flex-col items-center justify-center text-center overflow-hidden min-h-[50vh]">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
                    <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "0.7s" }} />
                    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent" />
                </div>

                <div className="container relative z-10 px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <Target className="w-4 h-4 text-primary" />
                        <span className="text-primary font-mono text-xs tracking-widest uppercase">About_Us</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans tracking-tight mb-8 max-w-5xl mx-auto leading-tight"
                    >
                        We Build the{" "}
                        <span className="text-gradient-primary">Future</span>
                        <br />
                        of Software
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        DevsDroid is a premium software development agency specializing in AI-powered applications, autonomous agents, and scalable digital products.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="container px-4 md:px-6 py-16 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0a0e18]/80 border border-white/5 rounded-2xl p-8 md:p-10 hover:border-primary/20 transition-all duration-500"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <span className="text-primary font-mono text-xs tracking-widest uppercase">Our_Story</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6">
                            From Code to{" "}
                            <span className="text-gradient-white">Intelligence</span>
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
                    <div className="space-y-8">
                        {/* Timeline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#0a0e18]/80 border border-white/5 rounded-2xl p-8 hover:border-primary/20 transition-all duration-500"
                        >
                            <div className="text-xs font-mono text-primary tracking-widest uppercase mb-6">Timeline</div>
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
                                    className="bg-[#0a0e18]/80 border border-white/5 rounded-xl p-6 text-center hover:border-primary/20 transition-all duration-300"
                                >
                                    <div className="text-3xl font-bold text-white font-mono">{stat.value}</div>
                                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="container px-4 md:px-6 py-20 md:py-32">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 mb-6"
                    >
                        <Layers className="w-4 h-4 text-primary" />
                        <span className="text-primary font-mono text-xs tracking-widest uppercase">Principles</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold font-sans mb-4"
                    >
                        How We Operate
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-2xl mx-auto"
                    >
                        Three non-negotiable principles that define everything we build.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {coreValues.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-[#0a0e18]/80 border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-primary/20 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:scale-110 transition-all duration-300">
                                <item.icon className="w-7 h-7 text-slate-400 group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold font-sans text-white mb-3">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{item.desc}</p>

                            {/* Bottom glow */}
                            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/3 pointer-events-none" />
                <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

                <div className="container relative z-10 px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-sans mb-6">
                            Let&apos;s build your{" "}
                            <span className="text-primary">next product</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                            Whether it&apos;s an AI agent, a full-stack platform, or a design system — we&apos;re ready to ship.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white font-mono font-bold rounded-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                            >
                                {"// View_Services"}
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono font-bold rounded-lg hover:bg-white hover:text-[#0B0F19] transition-all duration-300 glow-primary glow-primary-hover"
                            >
                                Start_Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
