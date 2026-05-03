import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { ModelSection } from "@/components/ModelSection";
import { ServicesV2 } from "@/components/ServicesV2";
import { AIAgentsShowcase } from "@/components/AIAgentsShowcase";
import { FoundersNote } from "@/components/FoundersNote";
import { ContactTerminal } from "@/components/ContactTerminal";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevsDroid | Elite AI & Software Development Agency",
  description: "DevsDroid is a premium software development agency specializing in AI agents, generative AI, full-stack applications, and enterprise workflow automation.",
  keywords: ["DevsDroid", "AI agency", "software development", "AI agents", "automation", "LangGraph", "CrewAI", "Next.js", "full-stack development"],
  openGraph: {
    title: "DevsDroid | Elite AI & Software Development Agency",
    description: "DevsDroid is a premium software development agency specializing in AI agents, generative AI, full-stack applications, and enterprise workflow automation.",
    type: "website",
    url: "https://devsdroid.com", // Assuming this is the future domain
    siteName: "DevsDroid",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-x-hidden">
      <Hero />
      <TrustedBy />
      <ModelSection />
      <AIAgentsShowcase />
      <ServicesV2 />
      <FoundersNote />
      <ContactTerminal />
      <Footer />
    </div>
  );
}
