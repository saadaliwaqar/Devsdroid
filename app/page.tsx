import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { ProblemSection } from "@/components/ProblemSection";
import { OutcomesSection } from "@/components/OutcomesSection";
import { AIAgentsShowcase } from "@/components/AIAgentsShowcase";
import { ServicesV2 } from "@/components/ServicesV2";
import { ProcessSection } from "@/components/ProcessSection";
import { ProofSection } from "@/components/ProofSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
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
    url: "https://devsdroid.com",
    siteName: "DevsDroid",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-x-hidden">
      <Hero />
      <TrustedBy />
      <ProblemSection />
      <OutcomesSection />
      <AIAgentsShowcase />
      <ServicesV2 />
      <ProcessSection />
      <ProofSection />
      <TestimonialsSection />
      <FoundersNote />
      <ContactTerminal />
      <Footer />
    </div>
  );
}
