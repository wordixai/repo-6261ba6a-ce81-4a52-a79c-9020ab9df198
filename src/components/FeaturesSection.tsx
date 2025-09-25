import { Button } from '@/components/ui/button';

const FeaturesSection = () => {
  const brandLogos = [
    { name: "Google Map", src: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=80&h=80&fit=crop&auto=format", opacity: 1 },
    { name: "Amazon", src: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=80&h=80&fit=crop&auto=format", opacity: 1 },
    { name: "Reddit", src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=80&h=80&fit=crop&auto=format", opacity: 1 },
    { name: "TikTok", src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=80&h=80&fit=crop&auto=format", opacity: 1 },
    { name: "LinkedIn", src: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=80&h=80&fit=crop&auto=format", opacity: 0.6 },
    { name: "Youtube", src: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=80&h=80&fit=crop&auto=format", opacity: 0.6 },
    { name: "X", src: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=80&h=80&fit=crop&auto=format", opacity: 0.6 },
    { name: "Facebook", src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=80&h=80&fit=crop&auto=format", opacity: 0.6 },
    { name: "Ebay", src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop&auto=format", opacity: 0.3 },
    { name: "Instagram", src: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=80&h=80&fit=crop&auto=format", opacity: 0.3 },
    { name: "Google Play", src: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=80&h=80&fit=crop&auto=format", opacity: 0.3 },
    { name: "Yelp", src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=80&h=80&fit=crop&auto=format", opacity: 0.3 },
  ];

  const features = [
    {
      title: "Turn any website into a report you can fully trust",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&auto=format",
      isVideo: true,
      alignment: "left"
    },
    {
      title: "Collect and analyze data in seconds — just ask",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=600&fit=crop&auto=format",
      alignment: "right"
    },
    {
      title: "Need data from multiple pages? We've got your back",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&auto=format",
      alignment: "left"
    },
    {
      title: "Dozens of chart styles, tailored to your team's needs",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&auto=format",
      alignment: "right"
    },
    {
      title: "Report Mode: Bridge the last mile from raw data to professional reports",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=600&fit=crop&auto=format",
      alignment: "left"
    }
  ];

  return (
    <div className="relative container mx-auto p-4 md:p-0">
      <section className="mb-32 md:mb-64">
        <div className="grid gap-16 lg:gap-40">
          {/* First feature with brand logos */}
          <div className="grid w-full items-center gap-12 md:grid-cols-12">
            <div className="feature-card">
              <div className="relative aspect-[1014/570] w-full bg-gray-100">
                {features[0].isVideo ? (
                  <video 
                    className="size-full object-cover" 
                    loop 
                    autoPlay 
                    muted 
                    playsInline
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  />
                ) : (
                  <img 
                    src={features[0].image} 
                    alt="feature" 
                    className="size-full object-cover"
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 md:col-span-5">
              <h3 className="mb-8 text-center text-xl font-bold text-white lg:text-3xl">
                {features[0].title}
              </h3>
              <div className="grid grid-cols-4 gap-8 select-none">
                {brandLogos.map((logo, index) => (
                  <div key={index}>
                    <img 
                      alt={logo.name} 
                      src={logo.src}
                      className="mx-auto size-12 transition-all hover:-translate-y-0.5 lg:size-14 xl:size-20 rounded-lg"
                      style={{ opacity: logo.opacity }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Remaining features */}
          {features.slice(1).map((feature, index) => (
            <div key={index} className="grid w-full items-center gap-12 md:grid-cols-12">
              {feature.alignment === "right" && (
                <div className="order-last flex w-full flex-col justify-center gap-4 md:order-first md:col-span-5">
                  <h3 className="mb-8 text-center text-xl font-bold text-white lg:text-left lg:text-3xl">
                    {feature.title}
                  </h3>
                  <footer className="text-center md:text-left">
                    <Button className="hero-button hero-button-large">
                      <span className="relative z-1 text-white">Get started for free</span>
                      <div className="absolute inset-0 origin-center translate-z-0 scale-105 bg-primary-gradient opacity-20 blur-md"></div>
                    </Button>
                  </footer>
                </div>
              )}
              
              <div className="bg-card-gradient feature-card">
                <div className="relative aspect-[1014/570] w-full">
                  <img 
                    src={feature.image} 
                    alt="feature" 
                    className="size-full object-cover"
                  />
                </div>
              </div>

              {feature.alignment === "left" && (
                <div className="flex flex-col justify-center gap-4 md:col-span-5">
                  <h3 className="mb-8 text-center text-xl font-bold text-white lg:text-right lg:text-3xl">
                    {feature.title}
                  </h3>
                  <footer className="text-center md:text-right">
                    <Button className="hero-button hero-button-large">
                      <span className="relative z-1 text-white">Get started for free</span>
                      <div className="absolute inset-0 origin-center translate-z-0 scale-105 bg-primary-gradient opacity-20 blur-md"></div>
                    </Button>
                  </footer>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;