"use client";

import { motion } from "framer-motion";
import { BrainCircuit, AppWindow, Palette, CheckCircle2, Bot, Workflow } from "lucide-react";

const services = [
    {
        title: "AI & Generative AI",
        icon: BrainCircuit,
        description: "Smart AI systems that learn your business and grow with it.",
        gradient: "from-emerald-500/20 to-primary/5",
        features: [
            "AI trained on your own data",
            "AI that answers questions using your documents",
            "Teams of AI assistants that work together",
            "AI features built right into your apps",
            "Answers you can trust, tested for accuracy",
            "Private and secure: your data stays yours",
            "Runs fast, priced to fit your budget",
        ],
    },
    {
        title: "AI Agents & Automation",
        icon: Bot,
        description: "AI assistants that run your busywork on autopilot, day and night.",
        gradient: "from-blue-500/20 to-cyan-500/5",
        features: [
            "AI assistants that handle repetitive work on their own",
            "Teams of AI assistants that work together to finish tasks",
            "Connect your tools so work happens automatically",
            "Chatbots that actually know your business and can take action",
            "Turn slow manual processes into hands-off ones",
            "Data updated the moment something changes",
            "All your apps working together, no manual effort",
        ],
    },
    {
        title: "Full-Stack Web & Mobile",
        icon: AppWindow,
        description: "Fast, reliable web and mobile apps that rank high on Google.",
        gradient: "from-violet-500/20 to-purple-500/5",
        features: [
            "Fast, reliable web apps",
            "Works perfectly on every device",
            "Built to handle growth as you scale",
            "One app for both iPhone and Android",
            "Online stores, dashboards, and customer portals",
            "Live updates without refreshing the page",
            "Launched on trusted, secure cloud hosting",
        ],
    },
    {
        title: "UI/UX & Product Design",
        icon: Palette,
        description: "Beautiful, easy-to-use designs that keep customers coming back.",
        gradient: "from-amber-500/20 to-orange-500/5",
        features: [
            "Clean, polished designs your customers love",
            "A consistent look across your whole product",
            "Designs shaped by real user feedback",
            "Clickable previews before we build a thing",
            "Looks great on phones, tablets, and desktops",
            "A brand identity that stands out",
            "Smooth, delightful animations",
        ],
    },
];

export const ServicesV2 = () => {
    return (
        <section id="capabilities" className="py-24 md:py-32 container mx-auto max-w-7xl px-4 md:px-6 relative">
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mb-16 max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-2 mb-6"
                >
                    <Workflow className="w-4 h-4 text-primary" />
                    <span className="eyebrow">Services</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="display text-4xl md:text-5xl lg:text-6xl"
                >
                    What We <span className="em-serif text-primary">Build</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-muted-foreground text-lg"
                >
                    Wide-ranging skills. Deep expertise. One dedicated team.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                {services.map((service, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08 }}
                        className="group surface hover-lift relative rounded-2xl overflow-hidden hover:border-primary/25 flex flex-col"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                        {/* Header */}
                        <div className="p-8 pb-4 relative z-10">
                            <div className="w-14 h-14 bg-foreground/5 rounded-xl flex items-center justify-center border border-foreground/10 mb-6 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                                <service.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed min-h-[40px]">
                                {service.description}
                            </p>
                        </div>

                        {/* List */}
                        <div className="p-8 pt-0 flex-1 relative z-10">
                            <div className="rule mb-6" />
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

                        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
