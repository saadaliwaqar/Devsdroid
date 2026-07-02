"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Table2 } from "lucide-react";

const stats = [
    { display: "5.0", suffix: "★", label: "Fiverr Rating" },
    { value: 32, suffix: "", label: "Client Reviews" },
    { value: 7, suffix: "+", label: "Countries Served" },
    { display: "1hr", label: "Avg Response" },
];

const caseStudies = [
    {
        name: "VoiceLedger",
        logo: "/voiceledger.png",
        url: "https://voiceledger.fun",
        badge: "Live",
        tagline: "Track your money, just by speaking.",
        challenge:
            "Logging expenses by hand is a chore, so most people quit within days and lose track of where their money goes.",
        solution:
            "Just say what you spent and the app records it for you: sorted, categorized, and ready to review. Handles multiple currencies and accounts, plus khata and udhaar debt tracking.",
        features: ["Voice-first entry", "Multi-currency", "Khata / udhaar tracking", "Budgets & insights"],
    },
    {
        name: "Payroll Cockpit",
        icon: Table2,
        url: null,
        badge: "Shipped",
        tagline: "Payroll that runs itself, error-free.",
        challenge:
            "Weekly contractor payouts ran on a fragile manual spreadsheet. It was easy to get wrong, risky, and ate hours every single cycle.",
        solution:
            "We built a system that takes the raw invoice data, removes duplicates, applies the right rates, and gets it right every time. It keeps a clear record you can trust, and still hands back the familiar Google Sheets output your team already uses.",
        features: ["Multi-hour jobs now finish in 3 minutes", "Fast, reliable app", "No duplicate payments", "Record you can trust"],
    },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) {
            setDisplay(value);
            return;
        }
        let raf = 0;
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(eased * value));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, value]);

    return (
        <span ref={ref} className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight tabular-nums">
            {display}
            <span className="text-primary">{suffix}</span>
        </span>
    );
}

export const ProofSection = () => {
    return (
        <section className="py-24 md:py-32 container mx-auto max-w-7xl px-4 md:px-6 relative">
            <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-primary/6 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="eyebrow">Proof</span>
                </div>
                <h2 className="display text-4xl md:text-5xl lg:text-6xl">
                    Real systems.{" "}
                    <span className="em-serif text-primary text-glow">Real impact.</span>
                </h2>
                <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                    A 5.0-star track record on Fiverr. Working software and automation, not vanity metrics.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="surface rounded-2xl p-8 text-center"
                    >
                        {"value" in s ? (
                            <CountUp value={s.value as number} suffix={s.suffix ?? ""} />
                        ) : (
                            <span className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight">
                                {s.display}
                                <span className="text-primary">{s.suffix ?? ""}</span>
                            </span>
                        )}
                        <div className="mt-2 text-xs text-muted-foreground font-mono uppercase tracking-[0.16em]">{s.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Case studies */}
            <div className="grid md:grid-cols-2 gap-5 items-start">
                {caseStudies.map((cs, i) => {
                    const Icon = cs.icon;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group surface hover-lift relative rounded-2xl p-8 overflow-hidden border-primary/20 hover:border-primary/40"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-3">
                                    {cs.logo ? (
                                        <Image
                                            src={cs.logo}
                                            alt={cs.name}
                                            width={48}
                                            height={48}
                                            className="rounded-xl border border-foreground/10"
                                        />
                                    ) : Icon ? (
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                    ) : null}
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground leading-tight">{cs.name}</h3>
                                        <p className="text-xs text-muted-foreground">{cs.tagline}</p>
                                    </div>
                                </div>
                                <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-mono uppercase tracking-widest px-2 py-1 rounded border border-primary/30 text-primary">
                                    {cs.url && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                                    {cs.badge}
                                </span>
                            </div>

                            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed mb-6">
                                <p><span className="text-foreground/80 font-medium">Challenge: </span>{cs.challenge}</p>
                                <p><span className="text-foreground/80 font-medium">Solution: </span>{cs.solution}</p>
                            </div>

                            <div className="pt-5 border-t border-foreground/5">
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {cs.features.map((f, j) => (
                                        <span key={j} className="px-3 py-1 text-xs font-mono bg-foreground/5 border border-foreground/10 rounded-full text-foreground/80">
                                            {f}
                                        </span>
                                    ))}
                                </div>
                                {cs.url && (
                                    <a
                                        href={cs.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-primary hover:text-primary-strong transition-colors"
                                    >
                                        {cs.url.replace("https://", "")}
                                        <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                )}
                            </div>

                            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
