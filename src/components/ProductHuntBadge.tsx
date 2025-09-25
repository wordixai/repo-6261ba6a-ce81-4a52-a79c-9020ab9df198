import { ArrowUpRight } from 'lucide-react';

const ProductHuntBadge = () => {
  return (
    <a className="transition-all hover:scale-105" href="#" target="_blank" rel="noreferrer noopener">
      <span className="inline-flex w-fit shrink-0 items-center justify-center overflow-hidden border text-xs whitespace-nowrap focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 group max-w-full gap-2 rounded-full bg-background px-3 py-0.5 font-medium shadow-sm transition-all hover:shadow-md border-orange-500 text-[#FF6154] mb-4">
        <div className="-ml-2.5 shrink-0 truncate rounded-full px-2.5 py-1 text-xs group-[.announcement-themed]:bg-background/60 flex items-center gap-1 bg-orange-50">
          <ProductHuntIcon />
          Live on Product Hunt
        </div>
        <div className="flex items-center gap-1 truncate py-1">
          Check it out!
          <ArrowUpRight className="shrink-0 w-4 h-4" />
        </div>
      </span>
    </a>
  );
};

const ProductHuntIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="size-4">
    <title>Product Hunt</title>
    <path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z"/>
  </svg>
);

export default ProductHuntBadge;