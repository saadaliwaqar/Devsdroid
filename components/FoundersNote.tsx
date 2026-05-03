"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const FoundersNote = () => {
    return (
        <section id="vision" className="py-24 md:py-32 container px-4 md:px-6 relative flex justify-center">
            {/* Background Blur */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl w-full bg-[#0a0e18]/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl"
            >
                <Quote className="w-10 h-10 text-primary mb-8 opacity-40" />

                <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6">
                    The Architect&apos;s Vision
                </h2>

                <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
                    <p>
                        &ldquo;The traditional outsourcing model is broken. It relies on disjointed teams
                        and misaligned incentives. This leads to technical debt, missed deadlines,
                        and suboptimal products.&rdquo;
                    </p>
                    <p>
                        &ldquo;We built DevsDroid to solve this. We are a dedicated technical partner
                        that couples high-level strategy with precise execution. We define the
                        blueprint, then deploy the ideal cross-functional team — engineers, AI
                        specialists, and designers — to bring it to life.&rdquo;
                    </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-white/10 flex items-center justify-center text-primary font-bold text-lg">
                        S
                    </div>
                    <div>
                        <div className="font-bold text-white font-sans">Saad Ali</div>
                        <div className="text-sm text-slate-500 font-mono">Founder, DevsDroid</div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
