import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import DarkPatternsExamples from "@/components/DarkPatternsExamples";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <DarkPatternsExamples />
      <CTASection />
    </main>
  );
};

export default Index;
