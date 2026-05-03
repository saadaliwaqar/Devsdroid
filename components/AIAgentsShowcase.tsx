"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Zap, MessageSquare, Database, GitBranch, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const agentCapabilities = [
    {
        icon: Bot,
        title: "Autonomous AI Agents",
        description: "Self-directed agents that reason, plan, and execute complex multi-step tasks using LangGraph, CrewAI, and AutoGen.",
        tags: ["LangGraph", "CrewAI", "AutoGen"],
        color: "from-primary/20 to-emerald-500/10",
    },
    {
        icon: Workflow,
        title: "Workflow Automation",
        description: "End-to-end business process automation. From data ingestion to decision-making — fully autonomous pipelines.",
        tags: ["n8n", "Zapier", "Custom APIs"],
        color: "from-blue-500/20 to-cyan-500/10",
    },
    {
        icon: MessageSquare,
        title: "Intelligent Chatbots",
        description: "Context-aware conversational agents with RAG, tool-calling, and memory for customer support, sales, and ops.",
        tags: ["RAG", "OpenAI", "Vercel AI SDK"],
        color: "from-violet-500/20 to-purple-500/10",
    },
    {
        icon: Database,
        title: "Data Pipelines & ETL",
        description: "Automated data processing with vector embeddings, real-time sync, and intelligent data routing.",
        tags: ["Pinecone", "Weaviate", "Supabase"],
        color: "from-amber-500/20 to-orange-500/10",
    },
];

const workflowSteps = [
    { icon: Sparkles, label: "Input", sublabel: "Data / Query" },
    { icon: Bot, label: "Agent", sublabel: "Reasoning" },
    { icon: GitBranch, label: "Tools", sublabel: "Execution" },
    { icon: Zap, label: "Action", sublabel: "Output" },
];

export const AIAgentsShowcase = () => {
    const [activeCard, setActiveCard] = useState(0);

    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <Bot className="w-4 h-4 text-primary" />
                        <span className="text-primary font-mono text-xs tracking-widest uppercase">AI_Agents</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold font-sans mb-6"
                    >
                        AI Agents &{" "}
                        <span className="text-gradient-primary">Automation</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Deploy intelligent agents that think, decide, and act autonomously.
                        We build AI systems that automate your most complex workflows.
                    </motion.p>
                </div>

                {/* Agent Workflow Visualizer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="mb-20"
                >
                    <div className="max-w-3xl mx-auto bg-[#0a0e18]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <div className="text-xs font-mono text-slate-500 mb-6 text-center uppercase tracking-widest">Agent Pipeline</div>
                        <div className="flex items-center justify-between gap-2 md:gap-4">
                            {workflowSteps.map((step, i) => (
                                <div key={i} className="flex items-center gap-2 md:gap-4 flex-1">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                                        className="flex flex-col items-center gap-2 flex-1"
                                    >
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group hover:bg-primary/20 transition-colors">
                                            <step.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xs md:text-sm font-bold text-white font-mono">{step.label}</div>
                                            <div className="text-[10px] md:text-xs text-slate-500">{step.sublabel}</div>
                                        </div>
                                    </motion.div>
                                    {i < workflowSteps.length - 1 && (
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + i * 0.15 }}
                                            className="flex-shrink-0 hidden sm:block"
                                        >
                                            <ArrowRight className="w-4 h-4 text-primary/40" />
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {agentCapabilities.map((cap, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onMouseEnter={() => setActiveCard(idx)}
                            className={`group relative bg-[#0a0e18]/80 border rounded-2xl p-8 overflow-hidden cursor-default transition-all duration-500 ${
                                activeCard === idx
                                    ? "border-primary/30 shadow-lg shadow-primary/5"
                                    : "border-white/5 hover:border-white/15"
                            }`}
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                                        <cap.icon className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white font-sans mb-1">
                                            {cap.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {cap.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {cap.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-slate-400 group-hover:border-primary/20 group-hover:text-slate-300 transition-all"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Glow Line */}
                            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary/10 border border-primary/30 text-primary font-mono font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                    >
                        Build_Your_Agent
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
