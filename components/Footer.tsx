"use client";

import Link from "next/link";
import Image from "next/image";
import { FOOTER_INFO } from "@/lib/constants";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative w-full border-t border-foreground/5 bg-muted pt-16 pb-8">
            {/* Top Gradient */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-4 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="relative w-[80px] h-12">
                                <Image
                                    src="/logo-devsdroid-light.png"
                                    alt="DevsDroid Logo"
                                    fill
                                    sizes="80px"
                                    className="object-contain object-left dark:hidden"
                                />
                                <Image
                                    src="/logo-devsdroid.png"
                                    alt="DevsDroid Logo"
                                    fill
                                    sizes="80px"
                                    className="object-contain object-left hidden dark:block"
                                />
                            </div>

                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            We build the software, AI assistants, and automation that help your business run faster and grow.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-mono font-bold text-primary tracking-widest uppercase">
                            Navigation
                        </h3>
                        <div className="flex flex-col gap-3">
                            {[
                                { label: "Services", href: "/services" },
                                { label: "About", href: "/about" },
                                { label: "Contact", href: "/contact" },
                            ].map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                                >
                                    {link.label}
                                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-mono font-bold text-primary tracking-widest uppercase">
                            Services
                        </h3>
                        <div className="flex flex-col gap-3">
                            {[
                                "Custom AI for Your Business",
                                "AI Assistants & Automation",
                                "Web & Mobile Apps",
                                "UI/UX Design",
                            ].map((service) => (
                                <span
                                    key={service}
                                    className="text-sm text-muted-foreground"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-mono font-bold text-primary tracking-widest uppercase">
                            Contact
                        </h3>
                        <div className="space-y-4">
                            <a
                                href={`mailto:${FOOTER_INFO.contact.email}`}
                                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Mail className="w-4 h-4 shrink-0" />
                                {FOOTER_INFO.contact.email}
                            </a>
                            <a
                                href={`tel:${FOOTER_INFO.contact.phone.replace(/ /g, "")}`}
                                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Phone className="w-4 h-4 shrink-0" />
                                {FOOTER_INFO.contact.phone}
                            </a>
                            <a
                                href={`https://wa.me/${FOOTER_INFO.contact.phone.replace(/\D/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-medium text-foreground hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-colors"
                            >
                                <svg viewBox="0 0 24 24" fill="#25D366" aria-hidden="true" className="w-4 h-4 shrink-0">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-foreground/5 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-muted-foreground/60 font-mono">
                            &copy; {FOOTER_INFO.copyright}. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-xs text-muted-foreground/60">
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
