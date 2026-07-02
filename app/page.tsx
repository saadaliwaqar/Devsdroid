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
