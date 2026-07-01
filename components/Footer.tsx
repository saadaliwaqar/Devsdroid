"use client";

import Link from "next/link";
import Image from "next/image";
import { FOOTER_INFO } from "@/lib/constants";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative w-full border-t border-white/5 bg-[#090C13] pt-16 pb-8">
            {/* Top Gradient */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-4 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="relative w-[80px] h-12">
                                <Image
                                    src="/logo-devsdroid.png"
                                    alt="DevsDroid Logo"
                                    fill
                                    sizes="80px"
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                            Your strategic partner for scalable software solutions, AI agents, and automation systems.
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
                                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
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
                                "AI & Generative AI",
                                "AI Agents & Automation",
                                "Full-Stack Development",
                                "UI/UX Design",
                            ].map((service) => (
                                <span
                                    key={service}
                                    className="text-sm text-slate-400"
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
                                className="flex items-center gap-3 text-sm text-slate-400 hover:text-primary transition-colors"
                            >
                                <Mail className="w-4 h-4 shrink-0" />
                                {FOOTER_INFO.contact.email}
                            </a>
                            <a
                                href={`tel:${FOOTER_INFO.contact.phone.replace(/ /g, "")}`}
                                className="flex items-center gap-3 text-sm text-slate-400 hover:text-primary transition-colors"
                            >
                                <Phone className="w-4 h-4 shrink-0" />
                                {FOOTER_INFO.contact.phone}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-slate-600 font-mono">
                            &copy; {FOOTER_INFO.copyright}. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-xs text-slate-600">
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
