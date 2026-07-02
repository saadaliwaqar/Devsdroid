"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import { useState } from "react";

// Real client reviews (Fiverr, Saad Ali, 5.0 rating / Level 2 Seller).
const REVIEWS = [
    {
        handle: "danielmorale651",
        country: "United States",
        repeat: true,
        text: "Saad did an outstanding job installing OpenClaw on my server. The process involved multiple steps and required real technical expertise, and he handled everything smoothly from start to finish. He was patient, communicative, and made sure everything was properly configured and secure.",
    },
    {
        handle: "jackellison",
        country: "United States",
        repeat: false,
        text: "Saad and Haseeb were great in helping us work through this project, taking a concept from idea to reality. Their patience during the process was great, and we will work with them again in the near future. Great and trustworthy team.",
    },
    {
        handle: "psychicmkt",
        country: "South Korea",
        repeat: false,
        text: "Outstanding work! He set up my OpenClaw on Oracle Cloud perfectly. Very professional, fast communication, and everything works 24/7 as promised. 5 stars all the way!",
    },
    {
        handle: "lemonzester",
        country: "United States",
        repeat: true,
        text: "Saad went above and beyond what I asked of him in a professional and cogent manner. I will recommend him to anyone who wants clarity, professionalism and a work ethic that goes beyond expectations. Well done Saad!",
    },
    {
        handle: "whatsskill",
        country: "Germany",
        repeat: false,
        text: "I can recommend Saad 100%. He was helping beyond his service and was very patient. I will definitely work with him again. Thanks again!",
    },
    {
        handle: "dan_hanoumis",
        country: "Australia",
        repeat: false,
        text: "Saad was great to work with, took time to understand my needs and delivered accordingly. Explained everything in lay terms and executed perfectly.",
    },
    {
        handle: "flyguy1",
        country: "United States",
        repeat: false,
        text: "Great to work with. Having very minimal understanding, they are able to provide details along the entire way. It's much better when you have a knowledgeable person on the other end who can make ideas come to reality. Will continue to build more in the future.",
    },
    {
        handle: "michaellaure934",
        country: "United Kingdom",
        repeat: false,
        text: "Really great! Smart and quick with solutions to complex problems, much appreciated. Would work with again!",
    },
    {
        handle: "joesykes536",
        country: "Netherlands",
        repeat: false,
        text: "Great, great service. Persisted even though there were several unexpected challenges with the Windows version. Great work!",
    },
    {
        handle: "dkaysixoh4",
        country: "Canada",
        repeat: false,
        text: "Was very capable and proactive. Will be working with him more in the future!",
    },
    {
        handle: "ajaysharma326",
        country: "India",
        repeat: false,
        text: "Very professional, quick and effective service provided by Saad! Highly recommended him.",
    },
    {
        handle: "nyctimene_glaux",
        country: "United States",
        repeat: false,
        text: "Exceeded all expectations. Very knowledgeable and helpful, would definitely recommend.",
    },
    {
        handle: "horatio14",
        country: "United States",
        repeat: false,
        text: "Saad was a pleasure to work with. Knowledgeable and efficient.",
    },
    {
        handle: "shie023",
        country: "Philippines",
        repeat: false,
        text: "It was good working with him! Very flexible and communicative!",
    },
    {
        handle: "briankeit1",
        country: "United States",
        repeat: false,
        text: "Mussadiq was patient with my limited tech skills and stuck with me while I worked through the issues together to install an OpenClaw bot.",
    },
    {
        handle: "prabusathan",
        country: "United Kingdom",
        repeat: false,
        text: "Great job. Will use again.",
    },
];

const INITIAL = 6;

function Stars() {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
            ))}
        </div>
    );
}

function ReviewCard({ r, i }: { r: (typeof REVIEWS)[number]; i: number }) {
    return (
        <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.06 }}
            className="surface hover-lift rounded-2xl p-6 flex flex-col hover:border-primary/25"
        >
            <div className="flex items-center justify-between mb-4">
                <Stars />
                {r.repeat && (
                    <span className="text-[0.6rem] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border border-primary/30 text-primary">
                        Repeat Client
                    </span>
                )}
            </div>
            <blockquote className="text-sm text-foreground/80 leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
            </blockquote>
            <figcaption className="mt-5 pt-4 border-t border-foreground/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm uppercase">
                    {r.handle[0]}
                </div>
                <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">@{r.handle}</div>
                    <div className="text-xs text-muted-foreground">{r.country}</div>
                </div>
            </figcaption>
        </motion.figure>
    );
}

export const TestimonialsSection = () => {
    const [expanded, setExpanded] = useState(false);
    const visible = expanded ? REVIEWS : REVIEWS.slice(0, INITIAL);

    return (
        <section className="py-24 md:py-32 relative bg-muted border-y border-foreground/5 overflow-hidden">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="eyebrow">Client_Feedback</span>
                    </div>
                    <h2 className="display text-4xl md:text-5xl lg:text-6xl">
                        What clients{" "}
                        <span className="em-serif text-primary">actually say.</span>
                    </h2>

                    {/* Rating strip */}
                    <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-5 py-3 rounded-full surface">
                        <span className="flex items-center gap-2">
                            <Stars />
                            <span className="font-bold text-foreground">5.0</span>
                        </span>
                        <span className="w-px h-4 bg-foreground/10 hidden sm:block" />
                        <span className="text-sm text-muted-foreground font-mono">32 reviews</span>
                        <span className="w-px h-4 bg-foreground/10 hidden sm:block" />
                        <span className="text-sm text-muted-foreground font-mono">Level 2 Seller</span>
                        <span className="w-px h-4 bg-foreground/10 hidden sm:block" />
                        <span className="text-sm text-muted-foreground font-mono">1hr avg response</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <AnimatePresence initial={false}>
                        {visible.map((r, i) => (
                            <ReviewCard key={r.handle + i} r={r} i={i} />
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-10 flex justify-center">
                    <button
                        onClick={() => setExpanded((v) => !v)}
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl surface font-mono font-bold text-sm text-foreground hover:border-primary/30 hover:text-primary transition-colors"
                        aria-expanded={expanded}
                    >
                        {expanded ? "Show fewer" : `Show all ${REVIEWS.length} reviews`}
                        <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                        />
                    </button>
                </div>

                <p className="mt-8 text-center text-xs text-muted-foreground font-mono">
                    &#47;&#47; Verified reviews from delivered Fiverr orders.
                </p>
            </div>
        </section>
    );
};
