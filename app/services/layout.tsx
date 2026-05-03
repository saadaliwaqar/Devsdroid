import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | DevsDroid Software Agency",
  description: "Explore DevsDroid's premium services: AI & Generative AI, Autonomous AI Agents & Automation, Full-Stack Web & Mobile Development, and UI/UX Design.",
  keywords: ["AI services", "software development services", "AI agents", "automation", "web development", "UI UX design"],
  openGraph: {
    title: "Services | DevsDroid Software Agency",
    description: "Explore DevsDroid's premium services: AI & Generative AI, Autonomous AI Agents & Automation, Full-Stack Web & Mobile Development, and UI/UX Design.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
