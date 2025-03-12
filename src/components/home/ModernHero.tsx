import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const ModernHero = () => {
  return (
    <section className="relative h-[700px] overflow-hidden bg-black">
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="City Club Fitness"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <div className="bg-[#F26E21] text-white inline-block px-4 py-1 rounded-md mb-4 font-bold text-sm">
            PLUS DE 50 CLUBS AU MAROC
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            TRANSFORMEZ <br />
            <span className="text-[#F26E21]">VOTRE CORPS</span> <br />
            TRANSFORMEZ <br />
            <span className="text-[#F26E21]">VOTRE VIE</span>
          </h1>

          <p className="text-white text-xl mb-8 max-w-lg">
            Rejoignez le leader du fitness au Maroc avec des équipements de
            pointe et des coachs certifiés pour atteindre vos objectifs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#F26E21] hover:bg-[#D85A10] text-white font-bold px-8 py-6 rounded-md text-lg">
              ESSAI GRATUIT
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-bold px-8 py-6 rounded-md text-lg"
            >
              NOS CLUBS <ChevronRight className="ml-2" />
            </Button>
          </div>

          <div className="flex items-center mt-12 space-x-8">
            <div className="text-center">
              <div className="text-[#F26E21] text-4xl font-bold">50+</div>
              <div className="text-white text-sm">CLUBS</div>
            </div>
            <div className="text-center">
              <div className="text-[#F26E21] text-4xl font-bold">600+</div>
              <div className="text-white text-sm">COACHS</div>
            </div>
            <div className="text-center">
              <div className="text-[#F26E21] text-4xl font-bold">230K+</div>
              <div className="text-white text-sm">MEMBRES</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-0"></div>
    </section>
  );
};

export default ModernHero;
