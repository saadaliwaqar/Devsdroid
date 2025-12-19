import Image from "next/image";
import Link from "next/link";
import { StatsGrid } from "@/components/StatsGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Brain, Globe, LineChart, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden min-h-[50vh]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background/60 dark:bg-slate-950/60 z-10" />
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0 opacity-70 blur-sm scale-105"
                        style={{ backgroundImage: "url('/finance-hero-about.png')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-20" />
                    {/* Abstract Shapes */}
                    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
                    <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-[80px] animate-pulse delay-700" />
                </div>

                <div className="container relative z-30 px-4 md:px-6">
                    <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-primary/20 text-primary bg-primary/5 backdrop-blur-sm shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)] dark:shadow-primary/20">
                        Our Philosophy
                    </Badge>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-8 max-w-5xl mx-auto leading-tight">
                        "The business we operate in is like an <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">intricate game of chess</span>."
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed font-light">
                        Every move counts, and you keep score with money. We provide the strategic foresight you need to checkmate uncertainty.
                    </p>
                </div>
            </section>

            {/* Mission, Vision & Advantage Grid */}
            <section className="container px-4 md:px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Left Column: Mission */}
                    <div className="group relative flex flex-col h-full rounded-3xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-md p-8 md:p-10 shadow-xl transition-all hover:shadow-primary/10 hover:border-primary/20">
                        <div className="absolute top-0 right-0 p-6 opacity-20 transform translate-x-2 -translate-y-2">
                            <ShieldCheck className="w-24 h-24 text-primary" />
                        </div>
                        <Badge variant="secondary" className="w-fit mb-6 bg-primary/20 text-primary hover:bg-primary/30">Our Mission</Badge>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Start Your Move</h2>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Founded in <strong className="text-foreground text-primary">2019</strong>, ABCG Research began as a macro-focused investment research firm, specializing in North American and European markets.
                            </p>
                            <div className="pl-4 border-l-2 border-primary/30">
                                <p>
                                    In <strong className="text-foreground text-primary">2022</strong>, we evolved into a next-generation <strong className="text-foreground">ResTech firm</strong>. This transformation expanded our capabilities beyond research into <strong className="text-foreground">AI automation, real-time market intelligence, and scalable technology solutions</strong>.
                                </p>
                            </div>
                            <p>
                                Today, we partner with <strong className="text-foreground">investment banks, hedge funds, and brokerage houses</strong>, unlocking smarter insights at the intersection of <strong className="text-foreground">macroeconomics and AI</strong>.
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground/80 bg-background/20 px-3 py-1.5 rounded-full">
                                <ShieldCheck className="w-4 h-4 text-primary" /> Institutional Grade Integrity
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground/80 bg-background/20 px-3 py-1.5 rounded-full">
                                <Brain className="w-4 h-4 text-primary" /> Data-Driven Objectivity
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Vision & Advantage */}
                    <div className="flex flex-col gap-8">
                        {/* Vision Card */}
                        <div className="group relative rounded-3xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-md p-8 md:p-10 shadow-lg transition-all hover:shadow-primary/10 hover:border-primary/20 flex-1">
                            <div className="absolute top-0 right-0 p-6 opacity-20 transform translate-x-2 -translate-y-2">
                                <Globe className="w-20 h-20 text-blue-400" />
                            </div>
                            <Badge variant="secondary" className="w-fit mb-6 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">Our Vision</Badge>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Architecting the Future</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                To transform the way the world’s leading investors access, analyze, and apply insights. We bridge traditional macroeconomic research with cutting-edge AI, enabling institutions to make faster, smarter investment decisions.
                            </p>
                        </div>

                        {/* Advantage Card */}
                        <div className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-md p-8 md:p-10 shadow-lg transition-all hover:shadow-primary/10 hover:border-primary/20 flex-1">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 blur-xl" />
                            <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-primary" /> The ABCG Advantage
                            </h3>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Traditional macro research is often slow. Pure AI models lack context. We combine the best of both.
                                </p>
                                <p>
                                    Our proprietary <strong className="text-foreground">AlphaLens AI</strong> platform processes data in real-time, scrutinized by expert analysts to form actionable strategic frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Affiliations Section */}
            <section className="py-12 border-y border-border/40 bg-muted/20 backdrop-blur-sm">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <h3 className="text-xl font-serif font-bold text-muted-foreground whitespace-nowrap">Professional Affiliations</h3>
                        <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 items-center w-full">
                            <div className="relative h-10 w-28 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 contrast-50 hover:contrast-100 duration-300">
                                <Image
                                    src="/odoo-logo.png"
                                    alt="Odoo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative h-12 w-12 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300">
                                <Image
                                    src="/independent-research-forum-logo.png"
                                    alt="Independent Research Forum"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="font-bold text-xl text-slate-500/70 hover:text-slate-500 transition-colors cursor-default">
                                Optiquant
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <div className="py-2 bg-background border-b border-border/40">
                <StatsGrid />
            </div>

            {/* Core Pillars */}
            <section className="container px-4 md:px-6 py-20 md:py-32">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif">Core Pillars of Research</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our methodology is built on three unshakeable foundations, designed to withstand market volatility.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {[
                        {
                            icon: Globe,
                            title: "Global Macro",
                            desc: "Top-down analysis of geopolitical shifts, central bank policies, and cross-asset correlations."
                        },
                        {
                            icon: LineChart,
                            title: "Technical Precision",
                            desc: "Rigorous price action analysis to identify optimal entry and exit points with defined risk ratios."
                        },
                        {
                            icon: Brain,
                            title: "AI & Quant",
                            desc: "Proprietary models that detect market anomalies and sentiment shifts before they become consensus."
                        }
                    ].map((item, idx) => (
                        <Card key={idx} className="group relative border-white/10 bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                            <CardHeader>
                                <div className="p-3 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <CardTitle className="text-xl font-serif">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 z-0" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="container relative z-10 px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif mb-8 max-w-3xl mx-auto">Ready to see the market differently?</h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="/research">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105">
                                Explore Our Research <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-primary/20 hover:bg-primary/5 transition-all">
                                Contact Our Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
