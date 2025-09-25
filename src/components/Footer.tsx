const Footer = () => {
  return (
    <footer className="relative bottom-0 z-1 container mx-auto px-6">
      <div className="mb-3 flex justify-end">
        <CapalyzeLogo className="size-8" />
      </div>
      
      <div className="grid grid-flow-row gap-4 border-t border-white/25 py-5 md:grid-cols-12">
        <div className="grid gap-4 md:col-span-4">
          <CapalyzeLogo />
          <p className="text-sm text-white/80">
            Capalyze is a data analytics tool that empowers businesses with insights through multi-source integration and web data crawling, driving smarter decisions.
          </p>
          <div className="flex items-center gap-6">
            <a className="size-6 transition-opacity hover:opacity-80" title="Discord" href="#">
              <DiscordIcon />
            </a>
            <a className="size-6 transition-opacity hover:opacity-80" title="X" href="#">
              <XIcon />
            </a>
            <a className="size-6 transition-opacity hover:opacity-80" title="Youtube" href="#">
              <YoutubeIcon />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 md:col-span-7 md:col-start-6 md:grid-cols-4 md:gap-4">
          <div className="text-sm">
            <label className="mb-2 block font-semibold text-white">Product</label>
            <ul className="grid gap-2 text-white/80">
              <li><a href="/">Features</a></li>
              <li><a href="/membership">Pricing</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <label className="mb-2 block font-semibold text-white">Resources</label>
            <ul className="grid gap-2 text-white/80">
              <li><a href="/blog">Blog Posts</a></li>
              <li><a href="#">Chrome Extension</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <label className="mb-2 block font-semibold text-white">Support</label>
            <ul className="grid gap-2 text-white/80">
              <li><a href="#">User Guide</a></li>
              <li><button className="cursor-pointer">Customer Service</button></li>
            </ul>
          </div>
          <div className="text-sm">
            <label className="mb-2 block font-semibold text-white">Company</label>
            <ul className="grid gap-2 text-white/80">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/25 pt-5 pb-9 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="flex items-center gap-4 text-sm text-white/80">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <button className="cursor-pointer border-b border-dotted">Cookies</button>
          </div>
        </div>
        <div className="text-center text-xs text-white/60 md:text-right">
          Copyright © 2025 DreamNum Co,Ltd.<br />
          All Rights Reserved.
        </div>
      </div>
    </footer>
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

const DiscordIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-white">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-white">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-white">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default Footer;