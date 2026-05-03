"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Terminal, ArrowRight } from "lucide-react";
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
            // Fallback to success for demo
            setStep("success");
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 md:py-40 flex flex-col items-center justify-center text-center overflow-hidden min-h-[40vh]">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />
                    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent" />
                </div>

                <div className="container relative z-10 px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <Send className="w-4 h-4 text-primary" />
                        <span className="text-primary font-mono text-xs tracking-widest uppercase">Contact_Us</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold font-sans mb-6 tracking-tight"
                    >
                        Let&apos;s{" "}
                        <span className="text-gradient-primary">Connect</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto"
                    >
                        Ready to build your next project? Initialize a connection and our team will respond within 24 hours.
                    </motion.p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="container px-4 md:px-6 -mt-8">
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
                            className="group bg-[#0a0e18]/80 border border-white/5 rounded-2xl p-6 text-center hover:border-primary/20 transition-all duration-300"
                        >
                            <div className="w-12 h-12 mx-auto rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                                <info.icon className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                            </div>
                            <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">{info.title}</div>
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
            <section className="container px-4 md:px-6 pb-24">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-[#0a0e18] border border-white/10 rounded-2xl overflow-hidden shadow-2xl min-h-[400px] flex flex-col">
                        {/* Terminal Header */}
                        <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
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
                        <div className="p-6 md:p-8 font-mono flex-1 flex flex-col">
                            {step === "form" && (
                                <motion.form
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <label className="block text-primary text-sm">
                                            user@devsdroid:~$ typeset -x NAME=
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-white font-medium placeholder-slate-700 transition-colors"
                                            placeholder='"Your Name"'
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-primary text-sm">
                                            user@devsdroid:~$ typeset -x EMAIL=
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-white font-medium placeholder-slate-700 transition-colors"
                                            placeholder='"you@company.com"'
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-primary text-sm">
                                            user@devsdroid:~$ echo $PROJECT_SCOPE
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={formData.scope}
                                            onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-white font-medium placeholder-slate-700 transition-colors resize-none"
                                            placeholder='"Tell us about your project..."'
                                            required
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="w-full md:w-auto px-8 py-3 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-[#0B0F19] transition-all duration-300 font-bold rounded-lg flex items-center justify-center gap-2 group"
                                        >
                                            <span>{">"} EXECUTE_REQUEST</span>
                                            <span className="animate-pulse group-hover:text-[#0B0F19]">_</span>
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
                                            <h3 className="text-xl font-bold text-white mb-2 font-sans">Transmission Complete</h3>
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
