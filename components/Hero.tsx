"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const terminalLines = [
    { text: "> Initializing_Core...", delay: 0 },
    { text: "> Stack: React + Python + AI...", delay: 0.5 },
    { text: "> Loading_Agents: CrewAI, LangGraph...", delay: 1.0 },
    { text: "> Deploying_Automation_Pipeline...", delay: 1.5 },
    { text: "> Status: Ready.", delay: 2.0 },
];

const stats = [
    { value: "50+", label: "Projects" },
    { value: "30+", label: "AI Agents" },
    { value: "95%", label: "Retention" },
];

export const Hero = () => {
    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleLines((prev) => {
                if (prev >= terminalLines.length) {
                    clearInterval(timer);
                    return prev;
                }
                return prev + 1;
            });
        }, 600);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-grid opacity-50" />
                <div className="absolute top-[-10%] right-[-5%] w-[620px] h-[620px] bg-primary/12 rounded-full blur-[160px] animate-pulse-glow" />
                <div className="absolute bottom-[-15%] left-[-10%] w-[460px] h-[460px] bg-secondary/25 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
                {/* Vignette / fade to background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--color-background)_95%)]" />
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent" />
            </div>

            <div className="container mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-12 items-center">
                {/* TEXT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/[0.07] backdrop-blur-sm mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-70 animate-ping" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        <span className="eyebrow !text-primary/90">System_Online</span>
                    </div>

                    <h1 className="display text-[3.25rem] leading-[0.95] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                        <span className="block text-white">Your Vision.</span>
                        <span className="block text-white/90">Developed to</span>
                        <span className="block">
                            <span className="text-primary text-glow">Scale.</span>
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="text-primary inline-block ml-2 align-baseline"
                            >
                                _
                            </motion.span>
                        </span>
                    </h1>

                    <p className="mt-7 text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
                        Elite developers &amp; AI engineers building scalable software,
                        intelligent agents, and automation pipelines that transform businesses.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-mono font-bold rounded-xl hover:bg-primary-strong transition-all duration-300 glow-primary glow-primary-hover"
                        >
                            Deploy_Vision
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center px-7 py-3.5 border border-white/15 text-white font-mono font-bold rounded-xl hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300"
                        >
                            {"// View_Services"}
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 flex items-stretch gap-6 md:gap-10">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + i * 0.12 }}
                                className="flex flex-col"
                            >
                                <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{stat.value}</span>
                                <span className="mt-1 text-[0.7rem] text-muted-foreground font-mono uppercase tracking-[0.18em]">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* TERMINAL PANEL */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
                    className="relative z-10 hidden sm:block"
                >
                    {/* Gradient ring wrapper */}
                    <div className="relative rounded-2xl p-px bg-gradient-to-b from-white/15 via-white/5 to-transparent">
                        <div className="absolute -inset-6 -z-10 bg-primary/15 blur-[90px] rounded-full" />
                        <div className="relative rounded-2xl bg-[#0A0D15]/95 backdrop-blur-xl overflow-hidden">
                            {/* Terminal Header */}
                            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                                <div className="ml-auto text-xs font-mono text-slate-500">
                                    devsdroid — init
                                </div>
                            </div>

                            {/* Terminal Body */}
                            <div className="p-6 md:p-7 font-mono text-sm md:text-[0.95rem] space-y-3 min-h-[280px]">
                                {terminalLines.slice(0, visibleLines).map((line, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={
                                            line.text.includes("Ready")
                                                ? "text-primary font-bold"
                                                : "text-slate-300"
                                        }
                                    >
                                        {line.text}
                                    </motion.div>
                                ))}
                                {visibleLines < terminalLines.length && (
                                    <motion.div
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.6 }}
                                        className="w-2.5 h-5 bg-primary inline-block"
                                    />
                                )}
                                {visibleLines >= terminalLines.length && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-slate-500 pt-1"
                                    >
                                        <span className="text-slate-400">{">"}</span>{" "}
                                        <span className="animate-pulse">_</span>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Floating accent frames */}
                    <div className="absolute inset-0 -z-10 pointer-events-none">
                        <div className="absolute -top-6 -right-6 w-28 h-28 border border-primary/15 rounded-2xl rotate-12 animate-float opacity-40" />
                        <div className="absolute -bottom-8 -left-8 w-20 h-20 border border-white/10 rounded-full animate-float-delayed opacity-30" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
