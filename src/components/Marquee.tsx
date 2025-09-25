import { ExternalLink } from 'lucide-react';

interface MarqueeItem {
  text: string;
  platform: string;
  href: string;
}

const marqueeItems: MarqueeItem[] = [
  { text: "Analyze Reddit world news comments by sentiment", platform: "Reddit", href: "#" },
  { text: "Summarize pros and cons from TripAdvisor reviews of Malahini Kuda Bandos Resort", platform: "TripAdvisor", href: "#" },
  { text: "Summarize Amazon reviews of Sony WH-1000XM5 with improvement ideas", platform: "Amazon", href: "#" },
  { text: "Analyze over 300 Amazon dress listings to extract pricing strategies and product insights", platform: "Amazon", href: "#" },
  { text: "Summarize insights from comments on OpenAI's GPT-5 announcement", platform: "OpenAI's", href: "#" },
];

const MarqueeRow = ({ items, reverse = false }: { items: MarqueeItem[]; reverse?: boolean }) => (
  <div className="flex">
    <div className={`group flex [gap:var(--gap)] overflow-hidden p-2 [--gap:1rem] flex-row [--duration:80s] md:[--duration:240s]`}>
      <div className={`flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] ${reverse ? '[animation-direction:reverse]' : ''}`}>
        {[...items, ...items, ...items].map((item, index) => (
          <a key={index} className="marquee-card" href={item.href}>
            <span className="[&>em]:font-bold [&>em]:not-italic">
              {item.text.split(item.platform).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <em>{item.platform}</em>}
                </span>
              ))}
              <sup>
                <ExternalLink className="ml-1 inline size-2.5 text-current/70 md:size-3" />
              </sup>
            </span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Marquee = () => {
  const secondRowItems: MarqueeItem[] = [
    { text: "Collect productivity apps from Google Play and compare features", platform: "Google Play", href: "#" },
    { text: "Track pricing and seller ratings for Nintendo Switch 2 listings on eBay", platform: "eBay", href: "#" },
    { text: "Analyze DJI Mini 4K Amazon reviews for pain points and fixes", platform: "Amazon", href: "#" },
    { text: "Classify Reddit TSLA comments and summarize investor outlook", platform: "Reddit", href: "#" },
    { text: "Visualize Apple's financial data from the past 5 years", platform: "Apple's", href: "#" },
  ];

  return (
    <div className="relative w-screen">
      <div className="mt-10 grid md:mt-15">
        <MarqueeRow items={marqueeItems} reverse={true} />
        <MarqueeRow items={secondRowItems} />
      </div>
    </div>
  );
};

export default Marquee;