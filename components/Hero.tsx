"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Hero = () => {
    const [codeLines, setCodeLines] = useState([
        "> Initializing_Core...",
        "> Stack: React + Python...",
    ]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCodeLines((prev) => [...prev, "> Status: Ready."]);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* TEXT CONTENT */}
                <div className="space-y-8 relative z-10">
                    <div className="inline-block px-3 py-1 rounded bg-secondary/30 border border-secondary text-primary font-mono text-xs mb-4">
                        SYSTEM_STATUS: ONLINE
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight font-sans tracking-tight">
                        Your Vision. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
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
                        A unified team of elite developers building scalable software.
                        From complex architecture to high-performance code.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-4 bg-white text-secondary font-mono font-bold rounded hover:bg-slate-200 transition-colors">
                            Deploy_Vision
                        </button>
                        <button className="px-8 py-4 border border-white/20 text-white font-mono font-bold rounded hover:bg-white/5 transition-colors">
              // Read_Methodology
                        </button>
                    </div>
                </div>

                {/* VISUAL / TERMINAL */}
                <div className="relative z-10 lg:h-[600px] flex items-center justify-center">
                    <motion.div
                        initial={{ rotateY: 15, rotateX: 5, opacity: 0 }}
                        animate={{ rotateY: 0, rotateX: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full max-w-lg aspect-square lg:aspect-[4/3] bg-[#0B0F19]/90 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl p-6 relative group overflow-hidden"
                        style={{ perspective: 1000 }}
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            <div className="ml-auto text-xs font-mono text-slate-500">
                                bash -- devsdroid-init
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div className="font-mono text-sm md:text-base space-y-4">
                            {codeLines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.5 }}
                                    className={`${line.includes("Ready") ? "text-primary" : "text-slate-300"
                                        }`}
                                >
                                    {line}
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2.5, duration: 0.1 }}
                                className="text-slate-500"
                            >
                                <span className="text-secondary-foreground">{`>`}</span> <span className="animate-pulse">_</span>
                            </motion.div>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500" />
                    </motion.div>

                    {/* Floating Elements Background */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                        <div className="absolute bottom-0 left-10 w-48 h-48 bg-secondary/40 rounded-full blur-[80px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};
