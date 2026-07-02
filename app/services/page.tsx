"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Bot, AppWindow, Palette, CheckCircle2, Workflow } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

const SERVICES = [
    {
        id: "ai-generative",
        title: "AI & Generative AI",
        subtitle: "AI That Grows With Your Business",
        description: "We build custom AI trained on your own data. A private assistant, a smart search tool, or a content engine: we give your product real intelligence, and it stays yours.",
        icon: BrainCircuit,
        features: [
            "AI trained on your business, running privately and securely",
            "Answers questions using your own documents",
            "Teams of AI assistants that work together",
            "Assistants that can take real actions, not just chat",
            "Tested for accuracy before it ever reaches your customers",
            "Your data stays private and under your control",
        ],
        gradient: "from-emerald-500/20 to-primary/5",
    },
    {
        id: "ai-agents",
        title: "AI Agents & Automation",
        subtitle: "Repetitive Work, Handled Automatically",
        description: "We build AI assistants that handle repetitive work on their own. They plan, decide, and get the job done, so your team stops doing busywork and your business runs faster.",
        icon: Bot,
        features: [
            "AI assistants that handle repetitive work on their own",
            "Teams of AI assistants that split up tasks and work together",
            "Connect your tools so work happens automatically",
            "Chatbots that actually know your business and can take action",
            "Move data between your apps without manual effort",
            "Every tool you use, working together in one flow",
        ],
        gradient: "from-blue-500/20 to-cyan-500/5",
    },
    {
        id: "web-mobile",
        title: "Full-Stack Web & Mobile",
        subtitle: "Fast, Reliable Apps Built to Grow",
        description: "From web platforms to mobile apps, we build software your customers love to use. Fast, reliable, easy to find on Google, and ready to handle growth from day one.",
        icon: AppWindow,
        features: [
            "Fast, reliable web and mobile apps",
            "Built to load quickly and rank well on Google",
            "Works smoothly on every device and screen size",
            "One app that runs on both iPhone and Android",
            "Online stores, dashboards, customer tools, and more",
            "Built to handle growth as your business scales",
        ],
        gradient: "from-violet-500/20 to-purple-500/5",
    },
    {
        id: "design",
        title: "UI/UX & Product Design",
        subtitle: "Designs That Turn Visitors Into Customers",
        description: "We design clean, easy-to-use products your customers enjoy. Every screen is planned around real people, backed by research, and polished down to the smallest detail.",
        icon: Palette,
        features: [
            "Clean, easy-to-use designs people love",
            "A consistent look across your whole product",
            "Design decisions backed by real user research",
            "Clickable previews so you see it before we build it",
            "Looks great on web, tablet, and mobile",
            "A brand and visual style that feels like you",
        ],
        gradient: "from-amber-500/20 to-orange-500/5",
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 md:py-44 flex flex-col items-center justify-center text-center overflow-hidden min-h-[50vh]">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-grid opacity-40" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-background)_92%)]" />
                    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent" />
                </div>

                <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 mb-7"
                    >
                        <Workflow className="w-4 h-4 text-primary" />
                        <span className="eyebrow">Our_Services</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="display text-5xl md:text-7xl lg:text-8xl max-w-4xl mx-auto"
                    >
                        What We{" "}
                        <span className="em-serif text-primary text-glow">Build</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
                    >
                        AI software, smart assistants, web and mobile apps, and product design, all from one team that ships.
                    </motion.p>
                </div>
            </section>

            {/* Services Detail Grid */}
            <section className="py-16 md:py-24 container mx-auto max-w-7xl px-4 md:px-6">
                <div className="space-y-6">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group surface hover-lift relative rounded-2xl overflow-hidden hover:border-primary/25"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            {/* Big faint index */}
                            <div className="absolute top-6 right-8 font-mono text-6xl md:text-7xl font-bold text-foreground/[0.03] group-hover:text-primary/10 transition-colors select-none">
                                0{index + 1}
                            </div>

                            <div className="relative z-10 p-8 md:p-10 grid md:grid-cols-2 gap-8 items-start">
                                {/* Left: Info */}
                                <div>
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 mb-6">
                                        <service.icon className="w-7 h-7 text-primary" />
                                    </div>

                                    <div className="eyebrow mb-3">
                                        {service.subtitle}
                                    </div>

                                    <h2 className="display text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                                        {service.title}
                                    </h2>

                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-sm font-mono font-bold text-primary hover:text-primary-strong transition-colors group/link"
                                    >
                                        Start_Project
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Right: Features */}
                                <div>
                                    <div className="rule mb-6 md:hidden" />
                                    <ul className="space-y-3">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                                                <span className="leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-32 relative overflow-hidden border-t border-foreground/5 bg-muted">
                <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />

                <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="display text-4xl md:text-5xl lg:text-6xl mb-6">
                            Ready to build{" "}
                            <span className="em-serif text-primary">something great?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Tell us about your project. We&apos;ll assemble the right team and start building within 48 hours.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-mono font-bold rounded-xl hover:bg-primary-strong transition-all duration-300 glow-primary glow-primary-hover text-lg"
                        >
                            Start_Your_Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
