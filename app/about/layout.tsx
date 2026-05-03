import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | DevsDroid",
  description: "Learn about DevsDroid, our engineering excellence, AI-first mindset, and the unified team model driving our successful software deliveries worldwide.",
  keywords: ["about DevsDroid", "software agency", "AI engineers", "developer team"],
  openGraph: {
    title: "About Us | DevsDroid",
    description: "Learn about DevsDroid, our engineering excellence, AI-first mindset, and the unified team model driving our successful software deliveries worldwide.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
