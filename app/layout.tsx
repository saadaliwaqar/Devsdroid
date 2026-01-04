import type { Metadata } from "next";
import { plusJakartaSans, jetbrainsMono } from "./fonts";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "DevsDroid | Premium Software Development Agency",
  description: "Your Vision. Developed to Scale. Your Strategic Partner for Scalable Software Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground font-sans antialiased bg-grid min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
