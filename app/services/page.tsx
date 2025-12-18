import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Bot, Code, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 flex flex-col items-center justify-center text-center overflow-hidden min-h-[50vh]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background/60 dark:bg-slate-950/60 z-10" />
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0 opacity-70 dark:opacity-70"
                        style={{ backgroundImage: "url('/finance-hero-services.png')" }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background/60 to-background z-20" />
                </div>

                <div className="container relative z-30 px-4 md:px-6">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 tracking-tight">
                        Our Expertise
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Delivering research, investment ideas, AI automation, and digital solutions for modern capital markets.
                    </p>
                </div>
            </section>

            {/* Services Split Layout */}
            <section className="py-20 md:py-32 space-y-20 md:space-y-32 container px-4 md:px-6">
                {SERVICES.map((service, index) => (
                    <div
                        key={service.id}
                        className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}
                    >
                        {/* Content */}
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold">{service.title}</h2>
                            <h3 className="text-xl text-brand-cyan font-medium">{service.subtitle}</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                            <div className="pt-4">
                                <Link href={service.link}>
                                    <Button variant="outline" size="lg" className="group">
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex-1 w-full">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-muted/30 border-y border-border/50">
                <div className="container text-center px-4 md:px-6">
                    <h2 className="text-3xl font-serif font-bold mb-6">Request a Consultation</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                        Discover how ABCG Research can support your firm with macro research, AI automation, and bespoke investment solutions.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="h-12 px-8 text-base">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
