"use client";

import { motion } from "framer-motion";

export const FoundersNote = () => {
    return (
        <section id="vision" className="py-24 md:py-32 container mx-auto max-w-7xl px-4 md:px-6 relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[520px] h-[520px] bg-secondary/10 rounded-full blur-[130px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-4xl mx-auto"
            >
                <div className="flex items-center gap-2 mb-8 justify-center">
                    <span className="eyebrow">The_Vision</span>
                </div>

                {/* Oversized editorial quote mark */}
                <div className="text-primary/25 font-serif text-[7rem] leading-[0.5] h-16 text-center select-none">
                    &ldquo;
                </div>

                <blockquote className="text-center space-y-6">
                    <p className="display text-2xl md:text-3xl lg:text-[2.5rem] leading-[1.2] text-white">
                        The traditional outsourcing model is broken. We built DevsDroid as a
                        <span className="text-primary"> dedicated technical partner</span> that couples
                        high-level strategy with precise execution.
                    </p>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        We define the blueprint, then deploy the ideal cross-functional team —
                        engineers, AI specialists, and designers — to bring it to life. One team,
                        one standard, zero misaligned incentives.
                    </p>
                </blockquote>

                <div className="mt-10 flex items-center gap-4 justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/40 border border-white/10 flex items-center justify-center text-primary font-bold text-lg">
                        S
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-white">Saad Ali</div>
                        <div className="text-sm text-muted-foreground font-mono">Founder, DevsDroid</div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
