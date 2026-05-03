import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | DevsDroid",
  description: "Get in touch with DevsDroid to build your next AI agent, full-stack platform, or design system. Our team responds within 24 hours.",
  keywords: ["contact DevsDroid", "hire developers", "hire AI engineers", "software project estimate"],
  openGraph: {
    title: "Contact | DevsDroid",
    description: "Get in touch with DevsDroid to build your next AI agent, full-stack platform, or design system. Our team responds within 24 hours.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
