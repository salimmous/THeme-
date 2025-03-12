import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const ProTestimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Amina Benali",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amina",
      role: "Membre depuis 2020",
      quote:
        "City Club a complètement transformé mon parcours fitness. Les coachs sont exceptionnels et les installations sont de classe mondiale. J'ai atteint des résultats que je n'aurais jamais cru possibles !",
      rating: 5,
      club: "City Club Casablanca",
    },
    {
      id: 2,
      name: "Karim Tazi",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karim",
      role: "Membre depuis 2019",
      quote:
        "La variété des cours et la communauté solidaire font que City Club se démarque des autres salles de sport. J'attends avec impatience mes entraînements chaque jour !",
      rating: 5,
      club: "City Club Rabat",
    },
    {
      id: 3,
      name: "Leila Mansouri",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leila",
      role: "Membre depuis 2021",
      quote:
        "En tant que professionnelle occupée, j'apprécie les horaires flexibles et la qualité des équipements chez City Club. C'est devenu une partie essentielle de ma routine bien-être.",
      rating: 5,
      club: "City Club Marrakech",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-32 bg-[#F26E21]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-20 bg-white"></div>
            <span className="text-white/80 font-medium tracking-wider">
              TÉMOIGNAGES
            </span>
            <div className="h-1 w-20 bg-white"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            CE QUE DISENT NOS MEMBRES
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Découvrez les histoires inspirantes de nos membres qui ont
            transformé leur vie grâce à City Club
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 hidden md:block"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="bg-white/10 border-white text-white hover:bg-white/20 rounded-full shadow-lg w-12 h-12"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 hidden md:block"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="bg-white/10 border-white text-white hover:bg-white/20 rounded-full shadow-lg w-12 h-12"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </Button>
          </motion.div>

          {/* Testimonial Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 30,
                  scale: activeIndex === index ? 1.05 : 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  scale: { duration: 0.3 },
                }}
                whileHover={{ y: -10 }}
              >
                <Quote className="text-[#F26E21]/20 w-12 h-12 mb-4" />

                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <Star
                        size={18}
                        className="text-yellow-500 fill-yellow-500"
                      />
                    </motion.div>
                  ))}
                </div>

                <blockquote className="text-gray-700 italic mb-6 min-h-[120px]">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[#F26E21] shadow-md">
                    <motion.img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-xs text-[#F26E21] font-medium">
                      {testimonial.club}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <motion.div
          className="flex justify-center mt-10 space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              className={`w-3 h-3 rounded-full ${i === activeIndex ? "bg-white" : "bg-white/30"}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={
                i === activeIndex ? { scale: [1, 1.2, 1] } : { scale: 1 }
              }
              transition={
                i === activeIndex
                  ? { duration: 0.5, repeat: Infinity, repeatDelay: 2 }
                  : {}
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProTestimonials;
