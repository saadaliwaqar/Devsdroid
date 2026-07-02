"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { siReact, siPython, siTypescript, siDocker, siPostgresql, siNodedotjs } from "simple-icons";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false, loading: () => <HeroFallback /> });

const stats = [
    { value: "5.0★", label: "Fiverr Rating" },
    { value: "32", label: "Client Reviews" },
    { value: "1hr", label: "Avg Response" },
];

// Static logo cluster, shown on mobile / reduced-motion / while WebGL loads.
const FALLBACK = [
    { icon: siReact, x: 120, y: 120 },
    { icon: siPython, x: 300, y: 100 },
    { icon: siTypescript, x: 230, y: 230 },
    { icon: siNodedotjs, x: 90, y: 280 },
    { icon: siDocker, x: 340, y: 300 },
    { icon: siPostgresql, x: 190, y: 360 },
];
const FALLBACK_EDGES = [[0, 2], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5]];

function HeroFallback() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-72 h-72 rounded-full bg-primary/15 blur-[90px]" />
            <svg viewBox="0 0 440 460" className="w-full h-full max-w-[480px]">
                <g className="stroke-primary/25" strokeWidth="1" fill="none">
                    {FALLBACK_EDGES.map(([a, b], i) => (
                        <line key={i} x1={FALLBACK[a].x} y1={FALLBACK[a].y} x2={FALLBACK[b].x} y2={FALLBACK[b].y} />
                    ))}
                </g>
                {FALLBACK.map(({ icon, x, y }, i) => (
                    <g key={i} transform={`translate(${x - 18} ${y - 18}) scale(1.5)`}>
                        <circle cx="12" cy="12" r="18" className="fill-primary/10" />
                        <path d={icon.path} className="fill-foreground/70" />
                    </g>
                ))}
            </svg>
        </div>
    );
}

export const Hero = () => {
    const [enable3D, setEnable3D] = useState(false);

    useEffect(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setEnable3D(!reduced);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-grid opacity-50" />
                <div className="absolute top-[-10%] right-[-5%] w-[640px] h-[640px] bg-primary/12 rounded-full blur-[170px] animate-pulse-glow" />
                <div className="absolute bottom-[-15%] left-[-10%] w-[460px] h-[460px] bg-secondary/25 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--color-background)_95%)]" />
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent" />
            </div>

            <div className="container mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-8 items-center">
                {/* TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative z-10 order-2 lg:order-1"
                >
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/[0.07] backdrop-blur-sm mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-70 animate-ping" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        <span className="eyebrow !text-primary/90">AI Engineering Studio</span>
                    </div>

                    <h1 className="display-xl">
                        <span className="block text-foreground">Your Vision.</span>
                        <span className="block text-foreground/90">
                            Developed to{" "}
                            <span className="em-serif text-primary text-glow">Scale.</span>
                        </span>
                    </h1>

                    <p className="mt-8 text-lg md:text-xl text-foreground/75 max-w-xl leading-relaxed">
                        We build software, AI assistants, and automation that
                        save your team time and help your business grow.
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
                            className="inline-flex items-center px-7 py-3.5 border border-foreground/15 text-foreground font-mono font-bold rounded-xl hover:bg-foreground/[0.06] hover:border-foreground/30 transition-all duration-300"
                        >
                            {"// View_Services"}
                        </Link>
                    </div>

                    <div className="mt-12 flex items-stretch gap-6 md:gap-10">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + i * 0.12 }}
                                className="flex flex-col"
                            >
                                <span className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">{stat.value}</span>
                                <span className="mt-1 text-[0.7rem] text-muted-foreground font-mono uppercase tracking-[0.18em]">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 3D SCENE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative z-10 order-1 lg:order-2 h-[340px] sm:h-[460px] lg:h-[620px]"
                >
                    <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                        <div className="w-[440px] h-[440px] bg-primary/12 rounded-full blur-[120px]" />
                    </div>
                    {enable3D ? <HeroScene /> : <HeroFallback />}
                </motion.div>
            </div>
        </section>
    );
};
