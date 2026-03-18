import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ExpertsSection from "@/components/ExpertsSection";
import ServicesPreview from "@/components/ServicesPreview";
import BentoAttributes from "@/components/BentoAttributes";
import PartnerMarquee from "@/components/PartnerMarquee";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PartnerMarquee />
      <AboutPreview />
      <ExpertsSection />
      <ServicesPreview />
      <BentoAttributes />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
