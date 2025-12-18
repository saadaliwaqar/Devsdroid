import Image from "next/image";
import Link from "next/link";
import { StatsGrid } from "@/components/StatsGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Brain, Globe, LineChart, ShieldCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background/60 dark:bg-slate-950/60 z-10" />
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0 opacity-70 dark:opacity-70"
                        style={{ backgroundImage: "url('/finance-hero-about.png')" }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background/60 to-background z-20" />
                </div>

                <div className="container relative z-30 px-4 md:px-6">
                    <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
                        Our Philosophy
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 max-w-4xl mx-auto">
                        "The business we operate in is like an <span className="text-primary">intricate game of chess</span>."
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Every move counts, and you keep score with money. We provide the strategic foresight you need to checkmate uncertainty.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="container px-4 md:px-6 py-12 md:py-16">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div className="space-y-6">
                        <Badge variant="secondary" className="w-fit">Start Your Move</Badge>
                        <h2 className="text-3xl font-bold font-serif">Our Mission</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Founded in <strong className="text-foreground">2019</strong>, ABCG Research began as a macro-focused investment research firm, specializing in North American and European markets with a strong emphasis on alternative investment classes.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            After achieving rapid success in a short span, we entered our next chapter in <strong className="text-foreground">2022</strong>, evolving into a next-generation <strong className="text-primary">ResTech firm</strong>. This transformation expanded our capabilities beyond research into <strong className="text-foreground">AI automation, real-time market intelligence, and scalable technology solutions</strong>.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Today, we partner with <strong className="text-foreground">investment banks, hedge funds, brokerage houses, and research providers</strong>, helping them unlock smarter insights, enhance efficiency, and scale their research delivery. At the intersection of <strong className="text-foreground">macroeconomics, capital markets, and artificial intelligence</strong>, ABCG Research is shaping the future of institutional research.
                        </p>
                        <Separator />
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-serif">Our Vision</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                To transform the way the world’s leading investors and researchers <strong>access, analyze, and apply insights</strong>. We aim to bridge the gap between traditional macroeconomic research and cutting-edge artificial intelligence, enabling financial institutions to make faster, smarter, and more resilient investment decisions.
                            </p>
                        </div>
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-primary" /> Institutional Grade Integrity
                        </h3>
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <Brain className="w-5 h-5 text-primary" /> Data-Driven Objectivity
                        </h3>

                        <Separator className="my-6" />

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold font-serif">Professional Affiliations</h3>
                            <div className="flex flex-wrap gap-6 items-center">
                                <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                                    <Image
                                        src="/odoo-logo.png"
                                        alt="Odoo"
                                        fill
                                        className="object-contain object-left"
                                    />
                                </div>
                                <div className="relative h-16 w-16 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                                    <Image
                                        src="/independent-research-forum-logo.png"
                                        alt="Independent Research Forum"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex items-center justify-center font-bold text-lg text-slate-500 hover:text-primary transition-colors">
                                    Optiquant
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Column: Advantage Card */}
                    <Card className="bg-muted/30 border-none shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8" />
                        <CardHeader>
                            <CardTitle>The ABCG Advantage</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                Traditional macro research is often slow and biased. Pure AI models can lack context. We combine the best of both worlds.
                            </p>
                            <p className="text-muted-foreground">
                                Our proprietary <strong>AlphaLens AI</strong> platform processes millions of data points in real-time, which our expert analysts then scrutinize to form actionable strategic frameworks.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Stats Section */}
            <div className="bg-muted/30">
                <StatsGrid />
            </div>

            {/* Core Pillars */}
            <section className="container px-4 md:px-6 py-16 md:py-24">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif">Core Pillars of Research</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our methodology is built on three unshakeable foundations.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
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
                        <Card key={idx} className="group hover:border-primary/50 transition-colors duration-300">
                            <CardHeader>
                                <div className="p-3 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 bg-primary/5 border-t border-primary/10">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold font-serif mb-6">Ready to see the market differently?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/research">
                            <Button size="lg" className="w-full sm:w-auto">
                                Explore Our Research <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                Contact Our Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
