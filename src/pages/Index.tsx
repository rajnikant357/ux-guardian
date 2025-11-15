import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import DarkPatternsExamples from "@/components/DarkPatternsExamples";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <DarkPatternsExamples />
      <CTASection />
    </div>
  );
};

export default Index;
