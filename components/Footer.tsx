import Link from "next/link";
import Image from "next/image";
import { FOOTER_INFO } from "@/lib/constants";
import { Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t bg-muted/40 py-12 md:py-16 lg:py-24">
            <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-3">
                <div className="space-y-4 lg:col-span-1">
                    <h2 className="text-2xl font-serif font-bold tracking-tight">ABCG Research</h2>
                    <p className="text-sm text-muted-foreground">
                        Institutional Intelligence. Macro Research, AI-driven analysis, and Global Capital Markets.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div>
                </div>

                <div className="space-y-4 lg:col-span-1">
                    <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                        {FOOTER_INFO.locations.map((loc, idx) => (
                            <p key={idx} className="leading-relaxed">{loc}</p>
                        ))}
                    </div>
                    <div className="flex flex-col space-y-1 text-sm pt-2">
                        <a href={`mailto:${FOOTER_INFO.contact.email}`} className="hover:text-primary transition-colors">
                            {FOOTER_INFO.contact.email}
                        </a>
                        <a href={`tel:${FOOTER_INFO.contact.phone.replace(/ /g, '')}`} className="hover:text-primary transition-colors">
                            {FOOTER_INFO.contact.phone}
                        </a>
                    </div>
                </div>

                <div className="space-y-4 lg:col-span-1">
                    <h3 className="text-sm font-semibold uppercase tracking-wider">Partners</h3>
                    <div className="flex flex-wrap gap-6 items-center">
                        <div className="relative h-8 w-24 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            <Image
                                src="/odoo-logo.png"
                                alt="Odoo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <div className="relative h-10 w-10 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            <Image
                                src="/independent-research-forum-logo.png"
                                alt="Independent Research Forum"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="font-bold text-lg text-slate-500/70 hover:text-slate-500 transition-colors cursor-default">
                            Optiquant
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-12 border-t pt-8 px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {FOOTER_INFO.copyright} All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                        <Link href="/research" className="hover:text-primary transition-colors">Research</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
