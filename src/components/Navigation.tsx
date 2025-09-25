import { Globe, Menu, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <div className="sticky inset-x-0 top-4 z-40 w-full">
      {/* Desktop Navigation */}
      <div className="relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-2.5 py-2 lg:flex" style={{ minWidth: '800px' }}>
        <a className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black" href="/">
          <CapalyzeLogo />
        </a>
        
        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2">
          <a className="nav-button-active" href="/">
            <div className="absolute inset-0 h-full w-full rounded-full bg-gray-800/30"></div>
            <span className="relative z-20">Features</span>
          </a>
          <a className="nav-button" href="/membership">
            <span className="relative z-20">Pricing</span>
            <sup className="absolute top-0 right-0 h-4 w-fit translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-1 text-gray-700 shadow-sm">
              <span className="flex h-full items-center justify-center text-gradient">Limited</span>
            </sup>
          </a>
          <a className="nav-button" href="/blog" target="_blank" rel="noopener noreferrer">
            <span className="relative z-20">
              Blog
              <ExternalLink className="relative -top-1.5 left-1 inline-block size-3" />
            </span>
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white">
            <Globe className="size-4" />
          </Button>
          <Button className="hero-button hero-button-small bg-white text-white rounded-2xl">
            Get Started
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden">
        <div className="flex w-full flex-row items-center justify-between">
          <a className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black" href="/">
            <CapalyzeLogo />
          </a>
          <Menu className="text-white" />
        </div>
      </div>
    </div>
  );
};

const CapalyzeLogo = () => (
  <svg width="72" height="71" viewBox="0 0 72 71" fill="none" className="h-8 w-8">
    <path d="M23.6852 34.6568V35.1329L0 43.7314V55.0379L30.6538 43.1687C32.6776 42.3906 34.0129 40.4483 34.0129 38.2827V0H23.6845V34.6568H23.6852Z" fill="white"/>
    <path d="M71.0164 43.7314V55.0379L39.7419 43.1686C37.7182 42.3905 36.3828 40.4482 36.3828 38.2827V30.8726C36.3828 28.7071 37.7182 26.7648 39.7419 25.9867L71.0164 14.1831V26.4712L46.7112 34.6568V35.1328L71.0164 43.7314Z" fill="white"/>
    <path d="M34.0139 44.3257V70.9224H23.6855L23.6882 48.2641L34.0139 44.3257Z" fill="white"/>
    <path d="M21.3103 34.2763L0 25.5701V14.1172L21.3057 22.8267L21.3103 34.2763Z" fill="white"/>
  </svg>
);

export default Navigation;