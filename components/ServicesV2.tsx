"use client";

import { motion } from "framer-motion";
import { BrainCircuit, AppWindow, Palette, CheckCircle2, Bot, Workflow } from "lucide-react";

const services = [
    {
        title: "AI & Generative AI",
        icon: BrainCircuit,
        description: "Architecting intelligent systems that think, adapt, and scale.",
        gradient: "from-emerald-500/20 to-primary/5",
        features: [
            "Custom LLM fine-tuning & hosting (Llama 3, Mistral, Phi-3)",
            "Advanced RAG pipelines with private data integration",
            "LangChain / LlamaIndex multi-agent systems",
            "Vercel AI SDK, OpenAI Assistants, & Tool-calling",
            "Prompt engineering & LLM evals (RAGAS, DeepEval)",
            "Vector DBs: Pinecone, Weaviate, Chroma, Qdrant",
            "Fine-tuning: LoRA/QLoRA, Unsloth, Axolotl, vLLM",
        ],
    },
    {
        title: "AI Agents & Automation",
        icon: Bot,
        description: "Autonomous agents and workflow automation that run your business on autopilot.",
        gradient: "from-blue-500/20 to-cyan-500/5",
        features: [
            "Autonomous agents (LangGraph, CrewAI, AutoGen)",
            "Multi-agent orchestration & task delegation",
            "Workflow automation (n8n, Zapier, custom pipelines)",
            "Intelligent chatbots with RAG & tool-calling",
            "Business process automation & ETL pipelines",
            "Real-time data processing & event-driven systems",
            "Custom API integrations & webhook orchestration",
        ],
    },
    {
        title: "Full-Stack Web & Mobile",
        icon: AppWindow,
        description: "High-performance applications built for speed and SEO dominance.",
        gradient: "from-violet-500/20 to-purple-500/5",
        features: [
            "Next.js 14+ (App Router, Server Actions)",
            "React + TypeScript + Tailwind CSS",
            "Node.js • NestJS • Express • Python/FastAPI",
            "React Native & Flutter Cross-platform",
            "SaaS, Dashboards, CRM, & E-commerce",
            "Real-time functionality & WebSockets",
            "Cloud deployment: AWS, GCP, Vercel",
        ],
    },
    {
        title: "UI/UX & Product Design",
        icon: Palette,
        description: "Crafting pixel-perfect experiences that drive user engagement.",
        gradient: "from-amber-500/20 to-orange-500/5",
        features: [
            "Figma – Collaborative Interface Design & Prototyping",
            "Design Systems & Component Libraries",
            "User Research, Wireframing & User Flows",
            "Interactive Prototypes (Framer, Protopie)",
            "Responsive Web & Mobile App Design",
            "Brand Identity & Visual Language",
            "Micro-animations & Motion Design",
        ],
    },
];

export const ServicesV2 = () => {
    return (
        <section id="capabilities" className="py-24 container px-4 md:px-6 relative">
            {/* Background Decor */}
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 mb-6"
                >
                    <Workflow className="w-4 h-4 text-primary" />
                    <span className="text-primary font-mono text-xs tracking-widest uppercase">Services</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold font-sans mb-6"
                >
                    What We Build
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-400 text-lg"
                >
                    Versatile stacks. Specialized expertise. One cohesive team.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative bg-[#0a0e18]/80 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-500 flex flex-col"
                    >
                        {/* Background Gradient on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                        {/* Header */}
                        <div className="p-8 pb-4 relative z-10">
                            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                                <service.icon className="w-7 h-7 text-slate-400 group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold font-sans text-white mb-2">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed min-h-[40px]">
                                {service.description}
                            </p>
                        </div>

                        {/* List */}
                        <div className="p-8 pt-0 flex-1 relative z-10">
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                            <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <span className="font-mono text-xs md:text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Bottom Glow Line */}
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
