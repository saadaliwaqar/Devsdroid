"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Terminal } from "lucide-react";
import { FOOTER_INFO } from "@/lib/constants";
import { useState } from "react";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        scope: "",
    });
    const [step, setStep] = useState<"form" | "processing" | "success">("form");
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (log: string) => {
        setLogs((prev) => [...prev, log]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.scope) return;

        setStep("processing");
        setLogs([]);

        const sequence = [
            { text: "> Initializing secure channel...", delay: 600 },
            { text: "> Encrypting payload [AES-256]...", delay: 800 },
            { text: "> Uploading to DevsDroid HQ...", delay: 1000 },
            { text: "> Status: CONFIRMED.", delay: 800 },
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
                addLog("> Ticket ID generated.");
                await new Promise((r) => setTimeout(r, 500));
                setStep("success");
            } else {
                addLog("> Error: Transmission failed.");
                setStep("form");
            }
        } catch {
            addLog("> CRITICAL_FAILURE: Connection lost.");
            await new Promise((r) => setTimeout(r, 1000));
            setStep("success");
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 md:py-40 flex flex-col items-center justify-center text-center overflow-hidden min-h-[45vh]">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-grid opacity-40" />
                    <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-background)_92%)]" />
                    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent" />
                </div>

                <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 mb-7"
                    >
                        <Send className="w-4 h-4 text-primary" />
                        <span className="eyebrow">Contact_Us</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="display text-5xl md:text-7xl lg:text-8xl"
                    >
                        Let&apos;s{" "}
                        <span className="text-primary text-glow">Connect</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        Ready to build your next project? Initialize a connection and our team will respond within 24 hours.
                    </motion.p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="container mx-auto max-w-7xl px-4 md:px-6 -mt-6">
                <div className="grid gap-4 md:grid-cols-3 mb-16">
                    {[
                        {
                            icon: Mail,
                            title: "Email",
                            value: FOOTER_INFO.contact.email,
                            href: `mailto:${FOOTER_INFO.contact.email}`,
                        },
                        {
                            icon: Phone,
                            title: "Phone",
                            value: FOOTER_INFO.contact.phone,
                            href: `tel:${FOOTER_INFO.contact.phone.replace(/ /g, "")}`,
                        },
                        {
                            icon: MapPin,
                            title: "Offices",
                            value: "Lahore, PK & London, UK",
                            href: null,
                        },
                    ].map((info, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group surface hover-lift rounded-2xl p-6 text-center hover:border-primary/25"
                        >
                            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <info.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="eyebrow mb-2">{info.title}</div>
                            {info.href ? (
                                <a href={info.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                                    {info.value}
                                </a>
                            ) : (
                                <span className="text-sm text-slate-300">{info.value}</span>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Terminal Contact Form */}
            <section className="container mx-auto max-w-7xl px-4 md:px-6 pb-24">
                <div className="max-w-3xl mx-auto">
                    <div className="surface rounded-2xl overflow-hidden shadow-2xl min-h-[420px] flex flex-col">
                        {/* Terminal Header */}
                        <div className="bg-white/[0.03] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                            </div>
                            <div className="ml-3 flex items-center gap-2">
                                <Terminal className="w-3.5 h-3.5 text-slate-500" />
                                <span className="text-xs font-mono text-slate-500">contact-shell — devsdroid</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 flex-1 flex flex-col">
                            {step === "form" && (
                                <motion.form
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <label htmlFor="c-name" className="flex items-center gap-2 text-sm font-mono text-slate-300">
                                            <span className="text-primary">~$</span> Full name
                                        </label>
                                        <input
                                            id="c-name"
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-white font-medium placeholder-slate-600 transition-colors"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="c-email" className="flex items-center gap-2 text-sm font-mono text-slate-300">
                                            <span className="text-primary">~$</span> Work email
                                        </label>
                                        <input
                                            id="c-email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-white font-medium placeholder-slate-600 transition-colors"
                                            placeholder="you@company.com"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="c-scope" className="flex items-center gap-2 text-sm font-mono text-slate-300">
                                            <span className="text-primary">~$</span> Project scope
                                        </label>
                                        <textarea
                                            id="c-scope"
                                            rows={4}
                                            value={formData.scope}
                                            onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-white font-medium placeholder-slate-600 transition-colors resize-none"
                                            placeholder="Tell us about your project..."
                                            required
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-strong transition-all duration-300 font-mono font-bold flex items-center justify-center gap-2 group glow-primary glow-primary-hover"
                                        >
                                            <span>{">"} EXECUTE_REQUEST</span>
                                            <span className="animate-pulse">_</span>
                                        </button>
                                    </div>
                                </motion.form>
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
                                                className="w-2.5 h-5 bg-primary inline-block"
                                            />
                                        )}
                                    </div>

                                    {step === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-8 p-6 border border-primary/20 bg-primary/5 rounded-xl text-center"
                                        >
                                            <h3 className="text-xl font-bold text-white mb-2">Transmission Complete</h3>
                                            <p className="text-slate-400 mb-4">Your parameters have been received. Our team will respond within 24 hours.</p>
                                            <p className="text-xs text-slate-600 font-mono">SESSION_TERMINATED. RELOAD TO RESET.</p>
                                        </motion.div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
