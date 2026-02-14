import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FlowDiagram from "@/components/FlowDiagram";
import Features from "@/components/Features";
import ReviewImprovement from "@/components/ReviewImprovement";
import SpacedRepetition from "@/components/SpacedRepetition";
import HowItWorks from "@/components/HowItWorks";
import TrustSignals from "@/components/TrustSignals";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Problem />
      <FlowDiagram />
      <Features />
      <ReviewImprovement />
      <SpacedRepetition />
      <HowItWorks />
      <TrustSignals />
      <Footer />
    </div>
  );
};

export default Index;
