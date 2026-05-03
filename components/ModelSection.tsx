"use client";

import { motion } from "framer-motion";
import { Server, Cpu, Database, Network, ArrowRight } from "lucide-react";

const stats = [
    {
        label: "ARCHITECTURE",
        value: "Unified Team",
        icon: Network,
        desc: "End-to-end development under one roof.",
    },
    {
        label: "RESPONSE TIME",
        value: "< 24h",
        icon: Server,
        desc: "Rapid project staffing and kick-off.",
    },
    {
        label: "CAPACITY",
        value: "Elastic",
        icon: Database,
        desc: "Scale resources up or down based on load.",
    },
];

export const ModelSection = () => {
    return (
        <section id="methodology" className="py-24 md:py-32 container px-4 md:px-6 relative">
            {/* Background */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10">
                <div className="mb-16 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 mb-6"
                    >
                        <Cpu className="w-4 h-4 text-primary" />
                        <span className="text-primary font-mono text-xs tracking-widest uppercase">How_We_Work</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold font-sans mb-6"
                    >
                        Technical Excellence,{" "}
                        <span className="text-gradient-white">Delivered.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg leading-relaxed"
                    >
                        We are not just a dev shop. We are a full-service technical partner.
                        A versatile team of senior engineers and designers, unified under one
                        architectural standard.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-[#0a0e18]/60 backdrop-blur-sm border border-white/5 p-8 rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-25 transition-opacity duration-300">
                                <stat.icon className="w-16 h-16 text-white" />
                            </div>

                            <div className="space-y-4 relative z-10">
                                <div className="text-xs font-mono text-primary tracking-widest uppercase">
                                    {stat.label}
                                </div>
                                <div className="text-4xl font-bold font-sans text-white">
                                    {stat.value}
                                </div>
                                <p className="text-sm text-slate-400 font-mono border-l-2 border-primary/20 pl-4">
                                    {stat.desc}
                                </p>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary/20 rounded-br-none group-hover:border-primary/50 transition-colors" />
                            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary/20 rounded-tl-none group-hover:border-primary/50 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
