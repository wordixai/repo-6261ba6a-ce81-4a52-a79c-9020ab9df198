import { Asterisk } from 'lucide-react';
import ProductHuntBadge from './ProductHuntBadge';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <header className="relative flex min-h-screen flex-col items-center justify-center py-40 md:py-60">
      <div className="mb-6">
        <div className="flex gap-4">
          <a className="block max-w-36 opacity-80 transition-all hover:opacity-100" href="#" target="_blank" rel="noreferrer noopener">
            <img 
              alt="Product of the Day" 
              src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=200&h=60&fit=crop&auto=format" 
              className="w-full h-auto"
            />
          </a>
          <a className="block max-w-36 opacity-80 transition-all hover:opacity-100" href="#" target="_blank" rel="noreferrer noopener">
            <img 
              alt="Product of the Week" 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=60&fit=crop&auto=format" 
              className="w-full h-auto"
            />
          </a>
        </div>
      </div>

      <ProductHuntBadge />

      <h1 className="mx-auto mb-6 gap-2 px-4 text-center tracking-wider md:mb-8 md:max-w-[800px]">
        <span className="text-[32px]/tight font-bold text-white md:text-6xl/tight">
          <CapalyzeLogo className="relative -top-1 mr-2 inline size-8 shrink-0 md:-top-1.5 md:mr-4 md:size-12" />
          Ask, then get data, charts, and insights
          <ArrowIcon className="relative ml-2 inline size-5 md:ml-4 md:size-8" />
        </span>
      </h1>

      <p className="mb-6 w-full text-center text-sm font-medium text-white md:mb-8 md:max-w-180 md:text-[20px]">
        The First AI Agent for data collection, analysis, and report generation.
      </p>

      <div>
        <Button className="hero-button hero-button-large">
          <span className="relative z-1 text-white">Get started for free</span>
          <div className="absolute inset-0 origin-center translate-z-0 scale-105 bg-primary-gradient opacity-20 blur-md"></div>
        </Button>
      </div>

      <p className="mt-2 flex items-center gap-1 text-xs text-white/70 md:mt-3 md:text-sm">
        <Asterisk className="size-3 md:size-4" />
        No credit card required
      </p>
    </header>
  );
};

const CapalyzeLogo = ({ className }: { className?: string }) => (
  <svg width="72" height="71" viewBox="0 0 72 71" fill="none" className={className}>
    <path d="M23.6852 34.6568V35.1329L0 43.7314V55.0379L30.6538 43.1687C32.6776 42.3906 34.0129 40.4483 34.0129 38.2827V0H23.6845V34.6568H23.6852Z" fill="white"/>
    <path d="M71.0164 43.7314V55.0379L39.7419 43.1686C37.7182 42.3905 36.3828 40.4482 36.3828 38.2827V30.8726C36.3828 28.7071 37.7182 26.7648 39.7419 25.9867L71.0164 14.1831V26.4712L46.7112 34.6568V35.1328L71.0164 43.7314Z" fill="white"/>
    <path d="M34.0139 44.3257V70.9224H23.6855L23.6882 48.2641L34.0139 44.3257Z" fill="white"/>
    <path d="M21.3103 34.2763L0 25.5701V14.1172L21.3057 22.8267L21.3103 34.2763Z" fill="white"/>
  </svg>
);

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg width="37" height="43" viewBox="0 0 37 43" fill="none" className={className}>
    <path d="M-1.09586e-06 11.9002L-5.55185e-08 4.39475e-06L33.4114 12.4925C35.5734 13.3114 37 15.3557 37 17.635L37 25.4341C37 27.7134 35.5734 29.7577 33.4114 30.5767L-3.8147e-06 43L-2.68403e-06 30.0666L25.9659 21.4513L25.9659 20.9502L-1.09586e-06 11.9002Z" fill="white"/>
  </svg>
);

export default HeroSection;