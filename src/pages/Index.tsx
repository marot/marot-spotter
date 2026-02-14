import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import TrustSignals from "@/components/TrustSignals";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <TrustSignals />
      <Footer />
    </div>
  );
};

export default Index;
