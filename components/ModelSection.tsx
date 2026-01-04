"use client";

import { motion } from "framer-motion";
import { Server, Cpu, Database, Network } from "lucide-react";

const stats = [
    {
        label: "ARCHITECTURE",
        value: "Unified Team",
        icon: Network,
        desc: "End-to-end development under one roof.",
    },
    {
        label: "LATENCY",
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
        <section id="methodology" className="py-24 container px-4 md:px-6">
            <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4">
                    Technical Excellence, Delivered.
                </h2>
                <p className="text-slate-400 max-w-2xl text-lg">
                    We are not just a dev shop. We are a full-service technical partner.
                    A versatile team of senior engineers and designers, unified under one
                    architectural standard.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative bg-card/40 backdrop-blur-sm border border-white/5 p-8 rounded-xl overflow-hidden hover:bg-card/60 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                            <stat.icon className="w-12 h-12 text-secondary-foreground" />
                        </div>

                        <div className="space-y-4 relative z-10">
                            <div className="text-xs font-mono text-primary tracking-widest uppercase">
                                {stat.label}
                            </div>
                            <div className="text-4xl font-bold font-sans text-white">
                                {stat.value}
                            </div>
                            <p className="text-sm text-slate-400 font-mono border-l-2 border-white/10 pl-4">
                                {stat.desc}
                            </p>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/50" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/50" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
