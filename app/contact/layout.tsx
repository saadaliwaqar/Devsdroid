import { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell DevsDroid about your project: web apps, AI assistants, or automation, built by one expert team. We reply within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact DevsDroid",
    description:
      "Tell us about your project: web apps, AI assistants, or automation. We reply within 24 hours.",
    url: `${SITE.url}/contact`,
    siteName: SITE.name,
    type: "website",
    images: [{ url: SITE.ogImage, width: 1200, height: 630 }],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
