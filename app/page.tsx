import { Hero } from "@/components/Hero";
import { ModelSection } from "@/components/ModelSection";
import { ServicesV2 } from "@/components/ServicesV2";
import { FoundersNote } from "@/components/FoundersNote";
import { ContactTerminal } from "@/components/ContactTerminal";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-20 overflow-x-hidden">
      <Hero />
      <ModelSection />
      <ServicesV2 />
      <FoundersNote />
      <ContactTerminal />
    </div>
  );
}
