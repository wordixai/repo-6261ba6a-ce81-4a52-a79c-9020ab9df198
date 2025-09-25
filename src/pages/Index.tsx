import Navigation from '@/components/Navigation';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import HeroSection from '@/components/HeroSection';
import Marquee from '@/components/Marquee';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DataTypesSection from '@/components/DataTypesSection';
import CtaSection from '@/components/CtaSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="text-white antialiased">
      <Navigation />
      
      <div className="relative -mt-13 overflow-hidden">
        <BackgroundBlobs />
        
        <div className="relative z-[100]">
          <HeroSection />
          <Marquee />
        </div>
      </div>
      
      <FeaturesSection />
      <HowItWorksSection />
      <DataTypesSection />
      <CtaSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;