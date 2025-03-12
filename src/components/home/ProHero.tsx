import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Play, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const ProHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Preload video
    if (videoRef.current) {
      videoRef.current.preload = "auto";
    }
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background with Parallax Effect */}
      <div className="absolute inset-0 z-0 scale-110">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-people-exercising-in-a-gym-23401-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-10 flex items-center">
        <div className="max-w-3xl">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-1 w-20 bg-[#F26E21]"></div>
            <span className="text-white font-medium tracking-wider">
              LEADER DU FITNESS AU MAROC
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-extrabold text-white mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            DÉPASSEZ <br />
            <span className="text-[#F26E21] drop-shadow-lg">VOS LIMITES</span>
          </motion.h1>

          <motion.p
            className="text-white/90 text-xl mb-10 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Rejoignez plus de 230 000 membres dans notre réseau de plus de 50
            clubs à travers le Maroc et transformez votre corps et votre vie.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button className="bg-[#F26E21] hover:bg-[#D85A10] text-white font-bold px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              COMMENCER MAINTENANT
            </Button>

            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-6 py-6 flex items-center gap-3 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Play size={16} className="text-[#F26E21] ml-1" />
              </div>
              <span>VOIR LA VIDÉO</span>
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center mt-16 gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="text-center">
              <div className="text-[#F26E21] text-4xl font-bold">50+</div>
              <div className="text-white text-sm uppercase tracking-wider">
                Clubs
              </div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-[#F26E21] text-4xl font-bold">600+</div>
              <div className="text-white text-sm uppercase tracking-wider">
                Coachs
              </div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-[#F26E21] text-4xl font-bold">24/7</div>
              <div className="text-white text-sm uppercase tracking-wider">
                Accès
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2 uppercase tracking-widest">
            Découvrir
          </span>
          <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="mt-2"
          >
            <ChevronDown className="text-white" />
          </motion.div>
        </div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-0"></div>
    </section>
  );
};

export default ProHero;
