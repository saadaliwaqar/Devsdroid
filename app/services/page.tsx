import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Bot, Code, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SERVICES = [
    {
        id: "research",
        title: "Expert Research & Investment Ideas",
        subtitle: "FX | Commodities | Crypto Currency",
        description: "Leveraging 36 years of expertise, we provide research reports and alpha-focused investment ideas across FX, Commodities, and Crypto. Our blend of qualitative insights and quantitative models is designed to deliver Sharpe ratios above 2.",
        image: "/service-research.png",
        icon: BarChart3,
        link: "/research"
    },
    {
        id: "alphalens",
        title: "AlphaLens AI",
        subtitle: "AI-Powered Real-Time Market Navigation",
        description: "AlphaLens is our proprietary AI-based platform that delivers real-time analysis across FX, Commodities, and Crypto, backed by ABCG's research models. By combining macroeconomic indicators, technical signals, and qualitative developments, AlphaLens empowers investors to nowcast markets and identify alpha opportunities.",
        image: "/service-alphalens.png",
        icon: Cpu,
        link: "/contact"
    },
    {
        id: "custom-ai",
        title: "AI Custom Solutions",
        subtitle: "Tailored AI Assistants for Financial Institutions",
        description: "Our AI Custom Solutions help research firms and investment teams transform their own methodologies into private AI-driven assistants. By understanding your data points, frameworks, and workflows, we design chatbots that operate within your environment – enabling analysts to access insights instantly and scale decision-making.",
        image: "/service-custom-ai.png",
        icon: Bot,
        link: "/contact"
    },
    {
        id: "web-dev",
        title: "Website Development",
        subtitle: "Digital Platforms Built for Financial Institutions",
        description: "We design and develop professional websites tailored for financial institutions and investment firms. With a deep understanding of the financial research landscape, we build platforms that showcase your insights, enhance client engagement, and integrate seamlessly with your research delivery workflows.",
        image: "/service-web-dev.png",
        icon: Code,
        link: "/contact"
    }
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-32 flex flex-col items-center justify-center text-center overflow-hidden min-h-[60vh]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background/80 dark:bg-slate-950/80 z-10" />
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0 opacity-50 blur-sm scale-110"
                        style={{ backgroundImage: "url('/finance-hero-services.png')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-20" />
                    {/* Abstract Shapes */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
                </div>

                <div className="container relative z-30 px-4 md:px-6">
                    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
                        Research 2.0
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8 tracking-tight max-w-4xl mx-auto">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/70">
                            Our Expertise
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Delivering research, investment ideas, AI automation, and digital solutions for modern capital markets.
                    </p>
                </div>
            </section>

            {/* Services Grid Layout */}
            <section className="py-20 md:py-32 container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-md shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/10 hover:border-primary/20"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 z-20 h-12 w-12 flex items-center justify-center rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                                    <service.icon className="w-6 h-6" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-8">
                                <h3 className="text-sm font-medium tracking-wide text-primary mb-2 uppercase">
                                    {service.subtitle.split('|')[0].trim()}
                                </h3>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                                    {service.description}
                                </p>

                                <div className="mt-auto">
                                    <Link href={service.link} className="inline-flex items-center text-sm font-semibold transition-colors hover:text-primary group/link">
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 container px-4 md:px-6 my-20">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
                        Ready to elevate your <span className="text-primary">investment strategy?</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Discover how ABCG Research can support your firm with macro research, AI automation, and bespoke investment solutions.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                            Request a Consultation
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
