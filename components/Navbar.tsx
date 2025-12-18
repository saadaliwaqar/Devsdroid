"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS, NAVBAR_CTA } from "@/lib/constants";
import { ModeToggle } from "@/components/mode-toggle";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Image
                        src="/logo-v2.png"
                        alt="ABCG Research Logo"
                        width={200}
                        height={64}
                        className="h-16 w-auto object-contain"
                        priority
                    />
                </Link>
                <div className="hidden md:flex md:flex-1">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {NAV_LINKS.map((link) => (
                                <NavigationMenuItem key={link.title}>
                                    {link.items ? (
                                        <>
                                            <NavigationMenuTrigger className="bg-transparent">
                                                {link.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                    {link.items.map((item) => (
                                                        <li key={item.title}>
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href={item.href}
                                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                                >
                                                                    <div className="text-sm font-medium leading-none">
                                                                        {item.title}
                                                                    </div>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <NavigationMenuLink asChild>
                                            <Link href={link.href} className={navigationMenuTriggerStyle()}>
                                                {link.title}
                                            </Link>
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <ModeToggle />
                    <Link href="/contact">
                        <Button>Contact Us</Button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <nav className="flex flex-col gap-4 mt-8">
                            {NAV_LINKS.map((link) => (
                                <div key={link.title} className="flex flex-col gap-2">
                                    {link.items ? (
                                        <>
                                            <h4 className="font-semibold text-lg">{link.title}</h4>
                                            {link.items.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    className="text-muted-foreground hover:text-primary transition-colors pl-4"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="font-semibold text-lg hover:text-primary transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.title}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Link href="/contact">
                                <Button className="mt-4 w-full">Contact Us</Button>
                            </Link>
                            <div className="mt-4 flex justify-center"> {/* Added ModeToggle to mobile menu */}
                                <ModeToggle />
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
