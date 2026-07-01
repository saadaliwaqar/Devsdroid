"use client";

import { motion } from "framer-motion";
import { Server, Cpu, Database, Network } from "lucide-react";

const stats = [
    {
        index: "01",
        label: "ARCHITECTURE",
        value: "Unified Team",
        icon: Network,
        desc: "End-to-end development under one roof.",
    },
    {
        index: "02",
        label: "RESPONSE TIME",
        value: "< 24h",
        icon: Server,
        desc: "Rapid project staffing and kick-off.",
    },
    {
        index: "03",
        label: "CAPACITY",
        value: "Elastic",
        icon: Database,
        desc: "Scale resources up or down based on load.",
    },
];

export const ModelSection = () => {
    return (
        <section id="methodology" className="py-24 md:py-32 container mx-auto max-w-7xl px-4 md:px-6 relative">
            <div className="absolute left-1/4 top-0 w-[600px] h-[300px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10">
                <div className="mb-16 max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-6"
                    >
                        <Cpu className="w-4 h-4 text-primary" />
                        <span className="eyebrow">How_We_Work</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="display text-4xl md:text-5xl lg:text-6xl"
                    >
                        Technical Excellence,{" "}
                        <span className="text-primary">Delivered.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-slate-400 text-lg leading-relaxed"
                    >
                        We are not just a dev shop. We are a full-service technical partner.
                        A versatile team of senior engineers and designers, unified under one
                        architectural standard.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group surface hover-lift relative p-8 rounded-2xl overflow-hidden hover:border-primary/25 hover:shadow-[0_0_40px_-12px_rgba(124,226,63,0.25)]"
                        >
                            {/* Big faint index */}
                            <div className="absolute top-4 right-5 font-mono text-5xl font-bold text-white/[0.04] group-hover:text-primary/10 transition-colors">
                                {stat.index}
                            </div>

                            <div className="relative z-10 space-y-5">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                    <stat.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <div className="eyebrow mb-2">{stat.label}</div>
                                    <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                                        {stat.value}
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-primary/25 pl-4">
                                    {stat.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
