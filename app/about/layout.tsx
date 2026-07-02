import { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet DevsDroid: one expert team building web and mobile apps, AI assistants, and automation for businesses worldwide. Rated 5.0 on Fiverr.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About DevsDroid",
    description:
      "One expert team building web and mobile apps, AI assistants, and automation for businesses worldwide.",
    url: `${SITE.url}/about`,
    siteName: SITE.name,
    type: "website",
    images: [{ url: SITE.ogImage, width: 1200, height: 630 }],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
