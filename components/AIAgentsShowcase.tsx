"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Zap, MessageSquare, Database, GitBranch, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const agentCapabilities = [
    {
        icon: Bot,
        title: "Autonomous AI Agents",
        description: "AI assistants that handle repetitive work on their own. They plan the steps, get it done, and free up your team.",
        tags: ["LangGraph", "CrewAI", "AutoGen", "OpenClaw", "Hermes"],
        color: "from-primary/20 to-emerald-500/10",
    },
    {
        icon: Workflow,
        title: "Workflow Automation",
        description: "Connect your tools so work happens automatically. Fewer manual steps, fewer errors, more time back.",
        tags: ["n8n", "Zapier", "Custom APIs"],
        color: "from-blue-500/20 to-cyan-500/10",
    },
    {
        icon: MessageSquare,
        title: "Intelligent Chatbots",
        description: "Chatbots that actually know your business and can take action. Ready to help with support, sales, and daily ops.",
        tags: ["RAG", "OpenAI", "Vercel AI SDK"],
        color: "from-violet-500/20 to-purple-500/10",
    },
    {
        icon: Database,
        title: "Data Pipelines & ETL",
        description: "Move data between your apps without manual effort. Always in sync, always up to date, always accurate.",
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
        <section className="py-24 md:py-32 relative overflow-hidden bg-muted border-y border-foreground/5">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-6"
                    >
                        <Bot className="w-4 h-4 text-primary" />
                        <span className="eyebrow">AI_Agents</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="display text-4xl md:text-5xl lg:text-6xl"
                    >
                        AI Agents &amp;{" "}
                        <span className="em-serif text-primary text-glow">Automation</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Put AI to work on the tasks that slow your team down.
                        We build assistants that run your busywork so you can focus on growth.
                    </motion.p>
                </div>

                {/* Agent Workflow Visualizer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="mb-16"
                >
                    <div className="max-w-3xl mx-auto surface rounded-2xl p-8">
                        <div className="eyebrow text-muted-foreground/70 mb-6 text-center">Agent Pipeline</div>
                        <div className="grid grid-cols-2 gap-6 sm:flex sm:items-center sm:justify-between sm:gap-4">
                            {workflowSteps.map((step, i) => (
                                <div key={i} className="flex items-center justify-center gap-2 md:gap-4 sm:flex-1">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                                        className="flex flex-col items-center gap-2 flex-1"
                                    >
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors">
                                            <step.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xs md:text-sm font-bold text-foreground">{step.label}</div>
                                            <div className="text-[10px] md:text-xs text-muted-foreground font-mono">{step.sublabel}</div>
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
                <div className="grid md:grid-cols-2 gap-5">
                    {agentCapabilities.map((cap, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onMouseEnter={() => setActiveCard(idx)}
                            className={`group surface hover-lift relative rounded-2xl p-8 overflow-hidden cursor-default ${
                                activeCard === idx
                                    ? "border-primary/30 shadow-[0_0_40px_-12px_rgba(124,226,63,0.25)]"
                                    : "hover:border-foreground/15"
                            }`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300 shrink-0">
                                        <cap.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-foreground mb-1.5">
                                            {cap.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {cap.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-5 pl-16">
                                    {cap.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-mono bg-foreground/5 border border-foreground/10 rounded-full text-muted-foreground group-hover:border-primary/20 group-hover:text-foreground/80 transition-all"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-14"
                >
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-primary/10 border border-primary/30 text-primary font-mono font-bold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                        Build_Your_Agent
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
