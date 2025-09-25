import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="mb-32 flex flex-col items-center justify-center md:mb-64">
      <div className="relative mb-10 md:mb-12">
        <div className="absolute top-12 left-1/2 rounded-xl opacity-70">
          <div className="min-h-52 min-w-52 items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-48 -right-100 size-160 animate-blurry-blob rounded-full p-8 opacity-45 mix-blend-multiply blur-[100px] filter bg-indigo-400" />
              <div className="absolute -top-64 -left-120 size-120 animate-blurry-blob rounded-full p-8 opacity-45 mix-blend-multiply blur-[100px] filter bg-blue-600" />
            </div>
          </div>
        </div>
        
        <h2 className="relative mx-auto mb-6 gap-2 text-center tracking-wider md:mb-8 md:max-w-[800px]">
          <span className="text-[32px]/tight font-bold text-white md:text-6xl/tight">
            <CapalyzeLogo className="relative -top-1 mr-2 inline size-8 shrink-0 md:-top-1.5 md:mr-4 md:size-12" />
            Let's Capalyze it
            <ArrowIcon className="relative ml-2 inline size-5 md:ml-4 md:size-8" />
          </span>
          <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-[64%] -translate-x-1/2 rounded-full bg-gradient-to-r from-white/12 via-white/60 to-white/12" />
        </h2>
        
        <p className="relative text-center text-sm font-medium text-white md:text-[20px]">
          Pull content from any site and turn it into insights in minutes.
        </p>
      </div>
      
      <div className="relative">
        <Button className="hero-button hero-button-large">
          <span className="relative z-1">Get started for free</span>
          <span className="absolute inset-0 origin-center translate-z-0 scale-105 bg-primary-gradient opacity-20 blur-md" />
        </Button>
      </div>
    </section>
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

export default CtaSection;