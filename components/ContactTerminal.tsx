"use client";

import { motion } from "framer-motion";
import { Terminal, Check } from "lucide-react";
import { useState } from "react";

const walkAway = [
    "A clear map of where AI and automation save you time and money",
    "A concrete plan with steps, timing, and costs",
    "Honest advice on what to build first (and what to skip)",
];

export const ContactTerminal = () => {
    const [step, setStep] = useState<"form" | "processing" | "success">("form");
    const [logs, setLogs] = useState<string[]>([]);
    const [formData, setFormData] = useState({ name: "", email: "", scope: "" });

    const addLog = (log: string) => setLogs((prev) => [...prev, log]);

    const handleExecute = async () => {
        if (!formData.name || !formData.email || !formData.scope) {
            alert("Please complete all fields.");
            return;
        }
        setStep("processing");
        setLogs([]);
        const sequence = [
            { text: "> Initializing secure channel...", delay: 800 },
            { text: "> Encrypting payload [AES-256]...", delay: 1000 },
            { text: "> Booking your audit slot...", delay: 1200 },
        ];
        for (const seq of sequence) {
            addLog(seq.text);
            await new Promise((r) => setTimeout(r, seq.delay));
        }
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: formData.name, email: formData.email, projectScope: formData.scope }),
            });
            if (res.ok) {
                addLog("> Status: CONFIRMED.");
                await new Promise((r) => setTimeout(r, 700));
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
            <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Offer pitch */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <Terminal className="w-4 h-4 text-primary" />
                        <span className="eyebrow">Start_Here</span>
                    </div>
                    <h2 className="display text-4xl md:text-5xl lg:text-6xl">
                        Book your{" "}
                        <span className="em-serif text-primary text-glow">AI Build Audit.</span>
                    </h2>
                    <p className="mt-6 text-foreground/80 text-lg leading-relaxed max-w-lg">
                        A short, no-fluff call where we show you exactly where software and AI
                        will save time and grow your business.
                    </p>

                    <ul className="mt-8 space-y-3">
                        {walkAway.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-foreground/80">
                                <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-primary" />
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-8 text-sm font-mono text-muted-foreground tracking-wide">
                        30 min · no obligation · practical
                    </p>
                </div>

                {/* Terminal form */}
                <div className="surface rounded-2xl overflow-hidden shadow-2xl min-h-[440px] flex flex-col">
                    <div className="bg-foreground/[0.03] px-4 py-3 flex items-center gap-2 border-b border-foreground/5">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/60" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                            <div className="w-3 h-3 rounded-full bg-green-500/60" />
                        </div>
                        <span className="ml-3 text-xs font-mono text-muted-foreground">audit-request - devsdroid</span>
                    </div>

                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                        {step === "form" && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="ct-name" className="flex items-center gap-2 text-sm font-mono text-foreground/80">
                                        <span className="text-primary">~$</span> Full name
                                    </label>
                                    <input
                                        id="ct-name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-transparent border-b border-foreground/10 focus:border-primary outline-none py-2 text-foreground font-medium placeholder:text-muted-foreground/60 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="ct-email" className="flex items-center gap-2 text-sm font-mono text-foreground/80">
                                        <span className="text-primary">~$</span> Work email
                                    </label>
                                    <input
                                        id="ct-email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-transparent border-b border-foreground/10 focus:border-primary outline-none py-2 text-foreground font-medium placeholder:text-muted-foreground/60 transition-colors"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="ct-scope" className="flex items-center gap-2 text-sm font-mono text-foreground/80">
                                        <span className="text-primary">~$</span> What do you want to build?
                                    </label>
                                    <textarea
                                        id="ct-scope"
                                        rows={3}
                                        value={formData.scope}
                                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                                        className="w-full bg-transparent border-b border-foreground/10 focus:border-primary outline-none py-2 text-foreground font-medium placeholder:text-muted-foreground/60 transition-colors resize-none"
                                        placeholder="Describe your project or challenge..."
                                    />
                                </div>
                                <div className="pt-2">
                                    <button
                                        onClick={handleExecute}
                                        className="w-full md:w-auto px-7 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-strong transition-all font-mono font-bold flex items-center justify-center gap-2 group glow-primary glow-primary-hover"
                                    >
                                        <span>{`>`} Book_My_Audit</span>
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
                                            className={log.includes("Error") || log.includes("CRITICAL") ? "text-red-400" : "text-primary"}
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
                                        <h3 className="text-xl font-bold text-foreground mb-2">Request Received</h3>
                                        <p className="text-muted-foreground mb-4">Thanks. We&apos;ll be in touch within 24 hours to lock in your call.</p>
                                        <p className="text-xs text-muted-foreground/60 font-mono">SESSION_TERMINATED. RELOAD TO RESET.</p>
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
