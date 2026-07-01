"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Bot, AppWindow, Palette, CheckCircle2, Workflow } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

const SERVICES = [
    {
        id: "ai-generative",
        title: "AI & Generative AI",
        subtitle: "Intelligent Systems That Scale",
        description: "We architect custom AI solutions — from LLM fine-tuning and RAG pipelines to multi-agent systems. Whether it's a private GPT, an AI-powered search engine, or a generative content platform, we build the intelligence layer for your product.",
        icon: BrainCircuit,
        features: [
            "Custom LLM fine-tuning & hosting (Llama 3, Mistral, Phi-3)",
            "Advanced RAG pipelines with private data integration",
            "LangChain / LlamaIndex multi-agent systems",
            "Vercel AI SDK, OpenAI Assistants, & Tool-calling",
            "Prompt engineering & LLM evals (RAGAS, DeepEval)",
            "Vector DBs: Pinecone, Weaviate, Chroma, Qdrant",
        ],
        gradient: "from-emerald-500/20 to-primary/5",
    },
    {
        id: "ai-agents",
        title: "AI Agents & Automation",
        subtitle: "Autonomous Workflows, Zero Manual Effort",
        description: "Deploy intelligent agents that reason, plan, and execute complex tasks autonomously. We build multi-agent systems, workflow automation pipelines, and AI-powered chatbots that transform how your business operates.",
        icon: Bot,
        features: [
            "Autonomous agents (LangGraph, CrewAI, AutoGen)",
            "Multi-agent orchestration & task delegation",
            "Workflow automation (n8n, Zapier, custom pipelines)",
            "Intelligent chatbots with RAG & tool-calling",
            "Business process automation & ETL pipelines",
            "Custom API integrations & webhook orchestration",
        ],
        gradient: "from-blue-500/20 to-cyan-500/5",
    },
    {
        id: "web-mobile",
        title: "Full-Stack Web & Mobile",
        subtitle: "High-Performance Apps Built for Scale",
        description: "From SaaS platforms to mobile apps, we build production-grade applications using modern frameworks. Server-rendered, SEO-optimized, and blazing fast — with real-time features and cloud-native architecture.",
        icon: AppWindow,
        features: [
            "Next.js 14+ (App Router, Server Actions)",
            "React + TypeScript + Tailwind CSS",
            "Node.js • NestJS • Express • Python/FastAPI",
            "React Native & Flutter Cross-platform",
            "SaaS, Dashboards, CRM, & E-commerce",
            "Cloud deployment: AWS, GCP, Vercel",
        ],
        gradient: "from-violet-500/20 to-purple-500/5",
    },
    {
        id: "design",
        title: "UI/UX & Product Design",
        subtitle: "Pixel-Perfect Experiences That Convert",
        description: "We design intuitive interfaces and full design systems that drive user engagement. From wireframes to interactive prototypes, our design process is research-driven, collaborative, and obsessed with detail.",
        icon: Palette,
        features: [
            "Figma – Collaborative Interface Design & Prototyping",
            "Design Systems & Component Libraries",
            "User Research, Wireframing & User Flows",
            "Interactive Prototypes (Framer, Protopie)",
            "Responsive Web & Mobile App Design",
            "Brand Identity & Visual Language",
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
                        <span className="text-primary text-glow">Build</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        AI-powered software, intelligent agents, full-stack applications, and product design — delivered by one unified team.
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
                            <div className="absolute top-6 right-8 font-mono text-6xl md:text-7xl font-bold text-white/[0.03] group-hover:text-primary/10 transition-colors select-none">
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

                                    <h2 className="display text-2xl md:text-3xl lg:text-4xl text-white mb-4">
                                        {service.title}
                                    </h2>

                                    <p className="text-slate-400 leading-relaxed mb-6">
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
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                                                <span className="leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
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
            <section className="py-24 md:py-32 relative overflow-hidden border-t border-white/5 bg-[#090C13]">
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
                            <span className="text-primary">something great?</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
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
