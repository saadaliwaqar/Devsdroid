"use client";

import { motion } from "framer-motion";

const clients = [
    "Enterprise Corp",
    "TechFlow AI",
    "NexGen Labs",
    "DataPrime",
    "CloudScale",
    "InnoSoft",
    "QuantumEdge",
    "AlphaStack",
];

export const TrustedBy = () => {
    return (
        <section className="py-16 border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#070a12]/50" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <span className="text-xs font-mono text-slate-600 tracking-widest uppercase">
                        Trusted by innovative teams
                    </span>
                </motion.div>

                {/* Scrolling Ticker */}
                <div className="relative overflow-hidden">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

                    <div className="flex animate-ticker">
                        {[...clients, ...clients].map((client, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
                            >
                                <span className="text-lg md:text-xl font-bold text-slate-700 hover:text-slate-400 transition-colors duration-300 whitespace-nowrap font-sans tracking-tight">
                                    {client}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
