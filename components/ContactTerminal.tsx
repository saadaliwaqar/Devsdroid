"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useState } from "react";

export const ContactTerminal = () => {
    const [step, setStep] = useState<"form" | "processing" | "success">("form");
    const [logs, setLogs] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        scope: "",
    });

    const addLog = (log: string) => {
        setLogs((prev) => [...prev, log]);
    };

    const handleExecute = async () => {
        if (!formData.name || !formData.email || !formData.scope) {
            alert("Please complete all fields.");
            return;
        }

        setStep("processing");
        setLogs([]);

        const sequence = [
            { text: "> Initializing secure channel...", delay: 800 },
            { text: "> Handshaking with core servs...", delay: 1200 },
            { text: "> Encrypting payload [AES-256]...", delay: 1000 },
            { text: "> Uploading parameters to DevsDroid HQ...", delay: 1500 },
        ];

        for (const seq of sequence) {
            addLog(seq.text);
            await new Promise((r) => setTimeout(r, seq.delay));
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    projectScope: formData.scope,
                }),
            });

            if (res.ok) {
                addLog("> Status: CONFIRMED.");
                addLog("> Ticket ID generated.");
                await new Promise((r) => setTimeout(r, 800));
                setStep("success");
            } else {
                addLog("> Error: Transmission failed.");
                setStep("form");
                alert("Transmission failed. Please try again.");
            }
        } catch (error) {
            console.error(error);
            addLog("> CRITICAL_FAILURE: Connection lost.");
        }
    };

    return (
        <section id="contact" className="py-24 md:py-32 container mx-auto max-w-7xl px-4 md:px-6 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="mb-10 text-center">
                    <div className="flex items-center justify-center gap-2 mb-5">
                        <Terminal className="w-4 h-4 text-primary" />
                        <span className="eyebrow">Start_A_Project</span>
                    </div>
                    <h2 className="display text-4xl md:text-5xl lg:text-6xl mb-4">
                        Initialize <span className="text-primary">Protocol</span>
                    </h2>
                    <p className="text-slate-400 text-lg">Enter your parameters — our architects respond within 24 hours.</p>
                </div>

                <div className="surface rounded-2xl overflow-hidden shadow-2xl min-h-[420px] flex flex-col">
                    {/* Terminal Header */}
                    <div className="bg-white/[0.03] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/60" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                            <div className="w-3 h-3 rounded-full bg-green-500/60" />
                        </div>
                        <span className="ml-3 text-xs font-mono text-slate-500">contact-shell — devsdroid</span>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                        {step === "form" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <label htmlFor="ct-name" className="flex items-center gap-2 text-sm font-mono text-slate-300">
                                        <span className="text-primary">~$</span> Full name
                                    </label>
                                    <input
                                        id="ct-name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-white font-medium placeholder-slate-600 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="ct-email" className="flex items-center gap-2 text-sm font-mono text-slate-300">
                                        <span className="text-primary">~$</span> Work email
                                    </label>
                                    <input
                                        id="ct-email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-white font-medium placeholder-slate-600 transition-colors"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="ct-scope" className="flex items-center gap-2 text-sm font-mono text-slate-300">
                                        <span className="text-primary">~$</span> Project scope
                                    </label>
                                    <textarea
                                        id="ct-scope"
                                        rows={4}
                                        value={formData.scope}
                                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-white font-medium placeholder-slate-600 transition-colors resize-none"
                                        placeholder="Describe your requirements..."
                                    />
                                </div>

                                <div className="pt-4">
                                    <button
                                        onClick={handleExecute}
                                        className="w-full md:w-auto px-7 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-strong transition-all font-mono font-bold flex items-center justify-center gap-2 group glow-primary glow-primary-hover"
                                    >
                                        <span>{`>`} EXECUTE_REQUEST</span>
                                        <span className="animate-pulse">_</span>
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step !== "form" && (
                            <div className="flex flex-col h-full justify-between">
                                <div className="space-y-2 font-mono text-sm md:text-base">
                                    {logs.map((log, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className={`${log.includes("Error") || log.includes("CRITICAL") ? "text-red-400" : "text-primary"}`}
                                        >
                                            {log}
                                        </motion.div>
                                    ))}
                                    {step === "processing" && (
                                        <motion.div
                                            animate={{ opacity: [0, 1] }}
                                            transition={{ repeat: Infinity, duration: 0.8 }}
                                            className="text-primary w-2 h-4 bg-primary inline-block ml-1"
                                        />
                                    )}
                                </div>

                                {step === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-8 p-6 border border-primary/20 bg-primary/5 rounded-lg text-center"
                                    >
                                        <h3 className="text-xl font-bold text-white mb-2">Transmission Complete</h3>
                                        <p className="text-slate-400 mb-6">Your parameters have been received. Our architects will decode the signal and respond shortly.</p>
                                        <p className="text-xs text-slate-600 font-mono">SESSION_TERMINATED. RELOAD TO RESET.</p>
                                    </motion.div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
