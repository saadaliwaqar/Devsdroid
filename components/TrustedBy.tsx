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
        <section className="py-14 border-y border-foreground/5 relative overflow-hidden bg-muted">
            <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-9"
                >
                    <span className="eyebrow text-muted-foreground/70">
                        Trusted by innovative teams worldwide
                    </span>
                </motion.div>

                {/* Scrolling marquee */}
                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />

                    <div className="flex animate-marquee w-max">
                        {[...clients, ...clients].map((client, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
                            >
                                <span className="text-xl md:text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors duration-300 whitespace-nowrap tracking-tight">
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
