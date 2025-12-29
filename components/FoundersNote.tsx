"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const FoundersNote = () => {
    return (
        <section id="vision" className="py-24 container px-4 md:px-6 relative flex justify-center">
            {/* Background Blur */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl w-full bg-[#0B0F19]/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl"
            >
                <Quote className="w-12 h-12 text-primary mb-8 opacity-50" />

                <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6">
                    The Architect's Vision
                </h2>

                <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
                    <p>
                        "The traditional agency model is broken. It relies on generalized talent pools attempting to solve specialized problems. This leads to technical debt, missed deadlines, and suboptimal products."
                    </p>
                    <p>
                        "We built DevsDroid to solve fragmentation. We are not just a dev shop; we are an architecture layer that decouples high-level strategy from low-level execution. We define the blueprint, then spin up the precise engineering pod required to execute it."
                    </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-700/50 border border-white/10" />
                    <div>
                        <div className="font-bold text-white font-sans">Alex B.</div>
                        <div className="text-sm text-primary font-mono">Lead Architect & Founder</div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
