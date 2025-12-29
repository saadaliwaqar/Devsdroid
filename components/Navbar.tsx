"use client";

import Link from "next/link";
import Image from "next/image";
import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
            <div className="rounded-xl border border-white/10 bg-card/50 backdrop-blur-xl max-w-7xl mx-auto flex items-center justify-between p-4">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-80 h-20 transition-transform group-hover:scale-105">
                        <Image
                            src="/logo-transparent.png"
                            alt="DevsDroid Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-8">
                    {["Capabilities", "Methodology", "Vision"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors font-mono"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="px-6 py-2.5 bg-primary text-primary-foreground font-mono font-bold text-sm rounded hover:bg-white hover:text-secondary transition-all flex items-center gap-2 shadow-[0_0_15px_-3px_var(--color-primary)] hover:shadow-[0_0_20px_-3px_rgba(255,255,255,0.5)]"
                    >
                        Start_Project
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-300 hover:text-white"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-4 right-4 bg-[#0B0F19] border border-white/10 rounded-xl p-6 shadow-2xl md:hidden flex flex-col gap-4 z-50"
                    >
                        {["Capabilities", "Methodology", "Vision"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-slate-300 hover:text-primary font-mono"
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 w-full text-center px-6 py-3 bg-primary text-primary-foreground font-mono font-bold rounded hover:bg-white hover:text-secondary transition-all"
                        >
                            Start_Project
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
