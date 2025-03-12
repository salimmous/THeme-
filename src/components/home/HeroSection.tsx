import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
          alt="Fitness Equipment"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Join Morocco's Premier Fitness Network
        </h1>
        <p className="text-white text-lg mb-8 max-w-2xl">
          Over 50 clubs nationwide with state-of-the-art facilities
        </p>
        <div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
            Find Your Club
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
