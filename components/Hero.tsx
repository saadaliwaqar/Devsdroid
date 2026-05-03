"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const terminalLines = [
    { text: "> Initializing_Core...", delay: 0 },
    { text: "> Stack: React + Python + AI...", delay: 0.5 },
    { text: "> Loading_Agents: CrewAI, LangGraph...", delay: 1.0 },
    { text: "> Deploying_Automation_Pipeline...", delay: 1.5 },
    { text: "> Status: Ready.", delay: 2.0 },
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
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid opacity-40" />
                {/* Gradient orbs */}
                <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] animate-pulse-glow" />
                <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
                {/* Top gradient fade */}
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent" />
            </div>

            <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* TEXT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-primary font-mono text-xs tracking-widest uppercase">System_Online</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] font-sans tracking-tight">
                        Your Vision.{" "}
                        <br />
                        <span className="text-gradient-white">
                            Developed to Scale.
                        </span>
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="text-primary inline-block ml-1"
                        >
                            _
                        </motion.span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                        Elite developers & AI engineers building scalable software,
                        intelligent agents, and automation pipelines that transform businesses.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-primary text-primary-foreground font-mono font-bold rounded-lg hover:bg-white hover:text-[#0B0F19] transition-all duration-300 glow-primary glow-primary-hover"
                        >
                            Deploy_Vision
                        </Link>
                        <Link
                            href="/services"
                            className="px-8 py-4 border border-white/15 text-white font-mono font-bold rounded-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                        >
                            {"// View_Services"}
                        </Link>
                    </div>

                    {/* Mini stats */}
                    <div className="flex gap-8 pt-6 border-t border-white/5">
                        {[
                            { value: "50+", label: "Projects" },
                            { value: "30+", label: "AI Agents" },
                            { value: "95%", label: "Retention" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + i * 0.15 }}
                                className="text-center"
                            >
                                <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
                                <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* VISUAL / TERMINAL */}
                <div className="relative z-10 lg:h-[600px] flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="w-full max-w-lg aspect-[4/3] bg-[#0a0e18]/95 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl p-6 relative group overflow-hidden"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/60" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                            <div className="w-3 h-3 rounded-full bg-green-500/60" />
                            <div className="ml-auto text-xs font-mono text-slate-600">
                                devsdroid — init
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div className="font-mono text-sm md:text-base space-y-3">
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
                                    className="text-slate-600 mt-2"
                                >
                                    <span className="text-slate-400">{">"}</span>{" "}
                                    <span className="animate-pulse">_</span>
                                </motion.div>
                            )}
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-blue-500/10 blur-3xl opacity-0 pointer-events-none group-hover:opacity-30 transition-opacity duration-700" />
                    </motion.div>

                    {/* Floating decorative elements */}
                    <div className="absolute inset-0 -z-10 pointer-events-none">
                        <div className="absolute top-8 right-8 w-32 h-32 border border-primary/10 rounded-2xl rotate-12 animate-float opacity-30" />
                        <div className="absolute bottom-12 left-4 w-20 h-20 border border-white/5 rounded-full animate-float-delayed opacity-20" />
                    </div>
                </div>
            </div>
        </section>
    );
};
