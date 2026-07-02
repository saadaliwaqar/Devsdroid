import type { Metadata, Viewport } from "next";
import { plusJakartaSans, jetbrainsMono, instrumentSerif } from "./fonts";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/StructuredData";
import { SITE } from "@/lib/constants";

const TITLE = "DevsDroid | Software, AI Assistants & Automation Agency";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: "%s | DevsDroid",
  },
  description: SITE.description,
  applicationName: "DevsDroid",
  keywords: [
    "software development agency",
    "web development",
    "mobile app development",
    "AI assistants",
    "business automation",
    "AI agency",
    "custom software",
    "DevsDroid",
  ],
  authors: [{ name: "DevsDroid", url: SITE.url }],
  creator: "DevsDroid",
  publisher: "DevsDroid",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: TITLE,
    description: SITE.description,
    locale: "en_US",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: "DevsDroid — software that grows with you" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F6FB" },
    { media: "(prefers-color-scheme: dark)", color: "#07090F" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground font-sans antialiased bg-grid min-h-screen flex flex-col" suppressHydrationWarning>
        <StructuredData />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {/* Film-grain texture overlay */}
          <div className="grain-overlay" aria-hidden />
          <Navbar />
          <main className="flex-1 w-full flex flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
