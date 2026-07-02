import { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "What DevsDroid builds: fast web and mobile apps, custom AI and AI assistants, and automation that saves your team time. Delivered by one expert team.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | DevsDroid",
    description:
      "Web and mobile apps, custom AI and AI assistants, and automation that saves your team time.",
    url: `${SITE.url}/services`,
    siteName: SITE.name,
    type: "website",
    images: [{ url: SITE.ogImage, width: 1200, height: 630 }],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
