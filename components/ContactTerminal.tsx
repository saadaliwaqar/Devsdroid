"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export const ContactTerminal = () => {
    return (
        <section id="contact" className="py-24 container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8 text-center md:text-left">
                    <h2 className="text-3xl font-bold font-sans mb-2">Initialize Protocol</h2>
                    <p className="text-slate-400">Enter your parameters to start the project.</p>
                </div>

                <div className="bg-[#0B0F19] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                    {/* Terminal Header */}
                    <div className="bg-white/5 p-3 flex items-center gap-2 border-b border-white/5">
                        <Terminal className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-mono text-slate-400">contact-shell — 80x24</span>
                    </div>

                    {/* Terminal Body / Form */}
                    <div className="p-6 md:p-8 font-mono space-y-6">
                        <div className="space-y-2">
                            <label className="block text-primary text-sm group-focus-within:text-white transition-colors">
                                user@devsdroid:~$ typeset -x NAME=
                            </label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-white font-medium placeholder-slate-700 transition-colors"
                                placeholder='"John Doe"'
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-primary text-sm group-focus-within:text-white transition-colors">
                                user@devsdroid:~$ typeset -x EMAIL=
                            </label>
                            <input
                                type="email"
                                className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-white font-medium placeholder-slate-700 transition-colors"
                                placeholder='"john@company.com"'
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-primary text-sm group-focus-within:text-white transition-colors">
                                user@devsdroid:~$ echo $PROJECT_SCOPE
                            </label>
                            <textarea
                                rows={4}
                                className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-white font-medium placeholder-slate-700 transition-colors resize-none"
                                placeholder='"Describe your requirements..."'
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                className="w-full md:w-auto px-6 py-3 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-[#0B0F19] transition-all font-bold flex items-center justify-center gap-2 group"
                            >
                                <span>{`>`} EXECUTE_REQUEST</span>
                                <span className="animate-pulse group-hover:text-[#0B0F19]">_</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
