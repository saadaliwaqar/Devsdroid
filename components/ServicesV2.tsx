"use client";

import { motion } from "framer-motion";
import { BrainCircuit, AppWindow, CloudCog, CheckCircle2 } from "lucide-react";

const services = [
    {
        title: "AI & Generative AI",
        icon: BrainCircuit,
        description: "Architecting intelligent systems that think, adapt, and scale.",
        features: [
            "Custom LLM fine-tuning & hosting (Llama 3, Mistral, Phi-3)",
            "Advanced RAG pipelines with private data integration",
            "LangChain / LlamaIndex multi-agent systems",
            "Autonomous agents (LangGraph, CrewAI)",
            "Vercel AI SDK, OpenAI Assistants, & Tool-calling",
            "Prompt engineering & LLM evals (RAGAS, DeepEval)",
            "Vector DBs: Pinecone, Weaviate, Chroma, Qdrant",
            "Fine-tuning: LoRA/QLoRA, Unsloth, Axolotl, vLLM",
        ],
    },
    {
        title: "Full-Stack Web & Mobile",
        icon: AppWindow,
        description: "High-performance applications built for speed and seo dominance.",
        features: [
            "Next.js 14+ (App Router, Server Actions)",
            "React + TypeScript + Tailwind CSS",
            "Node.js • NestJS • Express • Ruby on Rails",
            "Remix framework & Modern SSR",
            "React Native & Flutter Cross-platform",
            "SaaS, Dashboards, CRM, & E-commerce",
            "Real-time functionality & WebSockets",
        ],
    },
    {
        title: "Cloud & DevOps",
        icon: CloudCog,
        description: "Resilient infrastructure designed for elastic scalability.",
        features: [
            "Google Cloud Platform (GCP) – Cloud Run, GKE, Vertex AI",
            "AWS – Lambda, EC2, RDS, Bedrock",
            "Vercel, Railway, & Netlify Deployments",
            "Docker & Kubernetes Containerization",
            "CI/CD Pipelines (GitHub Actions, GitLab CI)",
            "Infrastructure as Code (Terraform, CDK)",
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
                <h2 className="text-3xl md:text-5xl font-bold font-sans mb-6">
                    Capabilities_V2.0
                </h2>
                <p className="text-slate-400 text-lg">
                    Versatile stacks. Specialized expertise. One cohesive team.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative bg-[#0B0F19]/80 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-8 pb-4 relative z-10">
                            <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                                <service.icon className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold font-sans text-white mb-2">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed min-h-[40px]">
                                {service.description}
                            </p>
                        </div>

                        {/* List */}
                        <div className="p-8 pt-0 flex-1">
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                            <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 opacity-70" />
                                        <span className="font-mono text-xs md:text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
