import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

interface HeroBannerProps {
  slides?: {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    ctaText: string;
    ctaLink: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
  onCtaClick?: (link: string) => void;
}

const HeroBanner = ({
  slides = [
    {
      id: "1",
      title: "Join Morocco's Premier Fitness Network",
      subtitle: "Over 50 clubs nationwide with state-of-the-art facilities",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
      ctaText: "Find Your Club",
      ctaLink: "/clubs",
    },
    {
      id: "2",
      title: "Summer Fitness Challenge",
      subtitle: "Join our 8-week transformation program with expert coaching",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
      ctaText: "Register Now",
      ctaLink: "/challenge",
    },
    {
      id: "3",
      title: "New Yoga & Mindfulness Studio",
      subtitle: "Experience our premium wellness spaces in select locations",
      image:
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1200&q=80",
      ctaText: "Explore Classes",
      ctaLink: "/classes",
    },
  ],
  autoPlay = true,
  interval = 5000,
  onCtaClick = (link) => console.log(`Navigating to: ${link}`),
}: HeroBannerProps) => {
  const [api, setApi] = React.useState<any>(null);
  const [current, setCurrent] = React.useState(0);

  // Handle auto-play functionality
  React.useEffect(() => {
    if (!autoPlay || !api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, interval);

    return () => clearInterval(intervalId);
  }, [api, autoPlay, interval]);

  // Update current slide index when carousel changes
  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full h-[600px] bg-gray-900 overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative w-full h-full">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white p-4 md:p-8 max-w-4xl mx-auto">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8">{slide.subtitle}</p>
                  <Button
                    onClick={() => onCtaClick(slide.ctaLink)}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-bold"
                  >
                    {slide.ctaText}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation Arrows */}
        <div className="absolute z-30 bottom-8 right-8 flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="bg-black/50 border-white text-white hover:bg-black/70 rounded-full"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-black/50 border-white text-white hover:bg-black/70 rounded-full"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute z-30 bottom-8 left-0 right-0">
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${current === index ? "bg-white" : "bg-white/50"}`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
