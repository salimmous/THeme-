import React from "react";
import { Button } from "../ui/button";
import { Play } from "lucide-react";

const NewDesignHero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-people-exercising-in-a-gym-23401-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-10 flex items-center">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-20 bg-[#F26E21]"></div>
            <span className="text-white font-medium">
              LEADER DU FITNESS AU MAROC
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 leading-tight">
            DÉPASSEZ <br />
            <span className="text-[#F26E21]">VOS LIMITES</span>
          </h1>

          <p className="text-white/90 text-xl mb-10 max-w-xl">
            Rejoignez plus de 230 000 membres dans notre réseau de plus de 50
            clubs à travers le Maroc et transformez votre corps et votre vie.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Button className="bg-[#F26E21] hover:bg-[#D85A10] text-white font-bold px-8 py-6 rounded-full text-lg">
              COMMENCER MAINTENANT
            </Button>

            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-6 py-6 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Play size={16} className="text-[#F26E21] ml-1" />
              </div>
              <span>VOIR LA VIDÉO</span>
            </Button>
          </div>

          <div className="flex items-center mt-16 gap-12">
            <div className="text-center">
              <div className="text-[#F26E21] text-4xl font-bold">50+</div>
              <div className="text-white text-sm uppercase">Clubs</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-[#F26E21] text-4xl font-bold">600+</div>
              <div className="text-white text-sm uppercase">Coachs</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-[#F26E21] text-4xl font-bold">24/7</div>
              <div className="text-white text-sm uppercase">Accès</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default NewDesignHero;
