"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe } from "lucide-react";

type StoreLinks = {
    ios?: string;
    android?: string;
    web?: string;
};

type App = {
    slug: string;
    name: string;
    category: string;
    blurb: string;
    shot: boolean; // whether a real screenshot exists in /public/apps
    links: StoreLinks;
};

// Real, live apps DevsDroid shipped for clients. Icons + screenshots pulled
// directly from the App Store / Play Store listings.
const APPS: App[] = [
    {
        slug: "calonic",
        name: "Calonic",
        category: "Health & Fitness",
        blurb: "Track what you eat without the hassle. Log meals in seconds and build habits that stick.",
        shot: true,
        links: {
            ios: "https://apps.apple.com/de/app/calonic/id6448844605",
            android: "https://play.google.com/store/apps/details?id=com.certyfactug.calonic",
            web: "https://calonic.com",
        },
    },
    {
        slug: "veteye",
        name: "VetEye",
        category: "AI · Veterinary",
        blurb: "Upload an eye image and get an instant, AI-guided diagnosis. Built for vets and clinics.",
        shot: true,
        links: {
            ios: "https://apps.apple.com/fi/app/veteye/id6593688499",
            android: "https://play.google.com/store/apps/details?id=com.veteye.android",
            web: "https://veteyeapp.com",
        },
    },
    {
        slug: "mind-nourishment",
        name: "Mind Nourishment",
        category: "Wellness",
        blurb: "Guided meditation and daily mood check-ins that help build a calmer routine.",
        shot: true,
        links: {
            ios: "https://apps.apple.com/pk/app/mind-nourishment/id6463170850",
            android: "https://play.google.com/store/apps/details?id=com.mindnourishmentapp",
        },
    },
    {
        slug: "askjaqq",
        name: "AskJaQQ",
        category: "Legal Tech",
        blurb: "Affordable legal help, made simple. Clear answers from verified lawyers for one flat fee.",
        shot: false,
        links: {
            ios: "https://apps.apple.com/app/askjaqq/id6753747516",
            android: "https://play.google.com/store/apps/details?id=com.askjaqq.v2",
        },
    },
    {
        slug: "sea-captain-date",
        name: "Sea Captain Date",
        category: "Dating",
        blurb: "A swipe-to-match dating app built for maritime professionals to find their first mate.",
        shot: true,
        links: {
            ios: "https://apps.apple.com/ar/app/sea-captain-date/id6471925110",
            android: "https://play.google.com/store/apps/details?id=com.seacaptain",
        },
    },
    {
        slug: "waytogo",
        name: "WayToGo",
        category: "Navigation",
        blurb: "A personal travel assistant that plans the fastest multi-stop routes and saves you time.",
        shot: true,
        links: {
            ios: "https://apps.apple.com/us/app/waytogo-simplify-your-drive/id6468564078",
        },
    },
    {
        slug: "slo-speed-camera",
        name: "SLO: Speed Cameras",
        category: "Navigation",
        blurb: "Real-time speed-camera alerts that help New York drivers stay safe and avoid fines.",
        shot: false,
        links: {
            ios: "https://apps.apple.com/us/app/slo-speed-cameras-nyc/id6751276246",
        },
    },
];

const AppStoreGlyph = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
);

const GooglePlayGlyph = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M3.6 2.3c-.24.25-.38.63-.38 1.13v17.14c0 .5.14.88.38 1.13l.06.05L13.24 12v-.02L3.66 2.25l-.06.05zM17.02 15.28l-3.2-3.2v-.16l3.2-3.2.07.04 3.79 2.15c1.08.61 1.08 1.62 0 2.24l-3.79 2.15-.07.04zM13.82 12.08L3.6 22.3c.36.38.94.42 1.6.05l11.3-6.42-2.68-2.85zM4.13 1.65l12.37 7.03-2.68 2.85L3.6 1.7c.24-.15.53-.15.53-.05z" />
    </svg>
);

function StoreLink({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-foreground/5 border border-foreground/10 text-foreground/75 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-colors"
        >
            {children}
        </a>
    );
}

function AppCard({ app, index }: { app: App; index: number }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
            className="group surface hover-lift w-full sm:w-[340px] rounded-3xl p-5 flex flex-col hover:border-primary/40"
        >
            {/* Phone mockup */}
            <div className="relative mx-auto w-full max-w-[210px]">
                <div className="relative rounded-[1.9rem] bg-[#0a0c12] p-[7px] shadow-xl shadow-black/20 ring-1 ring-white/5 border border-black/40">
                    {/* notch */}
                    <div className="absolute left-1/2 top-[10px] z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/15" />
                    <div className="relative overflow-hidden rounded-[1.5rem] aspect-[392/696] bg-gradient-to-b from-primary/15 via-surface to-background">
                        {app.shot ? (
                            <Image
                                src={`/apps/${app.slug}-shot1.jpg`}
                                alt={`${app.name} app screenshot`}
                                fill
                                sizes="210px"
                                className="object-cover"
                            />
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">
                                <Image
                                    src={`/apps/${app.slug}.png`}
                                    alt={`${app.name} icon`}
                                    width={104}
                                    height={104}
                                    className="rounded-[1.4rem] shadow-lg shadow-black/25 ring-1 ring-foreground/10"
                                />
                                <span className="text-sm font-semibold text-foreground/80">{app.name}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Meta */}
            <div className="mt-6 flex items-start gap-3">
                <Image
                    src={`/apps/${app.slug}.png`}
                    alt={`${app.name} icon`}
                    width={44}
                    height={44}
                    className="rounded-xl border border-foreground/10 shrink-0"
                />
                <div className="min-w-0">
                    <h3 className="text-base font-bold text-foreground leading-tight truncate">{app.name}</h3>
                    <span className="text-[0.65rem] font-mono uppercase tracking-[0.14em] text-primary">
                        {app.category}
                    </span>
                </div>
            </div>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{app.blurb}</p>

            {/* Store links */}
            <div className="mt-5 flex flex-wrap gap-2">
                {app.links.ios && (
                    <StoreLink href={app.links.ios} label={`${app.name} on the App Store`}>
                        <AppStoreGlyph className="w-3.5 h-3.5" />
                        App Store
                    </StoreLink>
                )}
                {app.links.android && (
                    <StoreLink href={app.links.android} label={`${app.name} on Google Play`}>
                        <GooglePlayGlyph className="w-3.5 h-3.5" />
                        Google Play
                    </StoreLink>
                )}
                {app.links.web && (
                    <StoreLink href={app.links.web} label={`${app.name} website`}>
                        <Globe className="w-3.5 h-3.5" />
                        Web
                    </StoreLink>
                )}
            </div>
        </motion.article>
    );
}

export const AppShowcase = () => {
    return (
        <section className="py-24 md:py-32 container mx-auto max-w-7xl px-4 md:px-6 relative">
            <div className="absolute right-1/4 top-0 w-96 h-96 bg-primary/6 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="eyebrow">Shipped</span>
                </div>
                <h2 className="display text-4xl md:text-5xl lg:text-6xl">
                    Live in the{" "}
                    <span className="em-serif text-primary text-glow">App Stores.</span>
                </h2>
                <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                    Not mockups or maybes. Real products we designed and built, downloadable right now on the App Store and Google Play.
                </p>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center gap-6">
                {APPS.map((app, i) => (
                    <AppCard key={app.slug} app={app} index={i} />
                ))}
            </div>

            <div className="relative z-10 mt-14 text-center">
                <p className="text-muted-foreground">
                    Have an app idea?{" "}
                    <a href="/contact" className="text-primary font-semibold hover:text-primary-strong transition-colors">
                        Let&apos;s build it together.
                    </a>
                </p>
            </div>
        </section>
    );
};
