"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, NAVBAR_CTA } from "@/lib/constants";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`rounded-2xl border max-w-7xl mx-auto flex items-center justify-between px-5 py-3 transition-all duration-500 ${
                    scrolled
                        ? "border-white/10 bg-[#0B0F19]/90 backdrop-blur-xl shadow-lg shadow-black/20"
                        : "border-white/5 bg-card/30 backdrop-blur-md"
                }`}
            >
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-56 h-14 md:w-64 md:h-16 transition-transform group-hover:scale-105">
                        <Image
                            src="/logo-transparent.png"
                            alt="DevsDroid Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors font-mono group"
                        >
                            {item.title}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-300 group-hover:w-3/4" />
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 bg-primary text-primary-foreground font-mono font-bold text-sm rounded-lg hover:bg-white hover:text-[#0B0F19] transition-all duration-300 flex items-center gap-2 glow-primary glow-primary-hover"
                    >
                        {NAVBAR_CTA}
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </motion.div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 bg-[#0B0F19]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl md:hidden flex flex-col gap-3 max-w-7xl mx-auto"
                    >
                        {NAV_LINKS.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-slate-300 hover:text-primary font-mono px-3 py-2 rounded-lg hover:bg-white/5 transition-all"
                            >
                                {item.title}
                            </Link>
                        ))}
                        <div className="h-px bg-white/10 my-2" />
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="w-full text-center px-6 py-3 bg-primary text-primary-foreground font-mono font-bold rounded-lg hover:bg-white hover:text-[#0B0F19] transition-all"
                        >
                            {NAVBAR_CTA}
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
