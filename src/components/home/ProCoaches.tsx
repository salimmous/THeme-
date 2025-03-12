import React, { useRef } from "react";
import { Button } from "../ui/button";
import { Star, Award, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const ProCoaches = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const coaches = [
    {
      name: "Sarah Benali",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      specializations: ["Musculation", "Fitness", "Nutrition"],
      experience: 5,
      rating: 4.9,
      certifications: ["NASM Certified", "Nutrition Expert"],
      location: "Casablanca",
    },
    {
      name: "Karim Tazi",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karim",
      specializations: ["CrossFit", "HIIT", "Functional Training"],
      experience: 7,
      rating: 4.8,
      certifications: ["CrossFit Level 2", "TRX Certified"],
      location: "Rabat",
    },
    {
      name: "Leila Mansouri",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leila",
      specializations: ["Yoga", "Pilates", "Méditation"],
      experience: 6,
      rating: 4.9,
      certifications: ["Yoga Alliance RYT-200", "Pilates Certified"],
      location: "Marrakech",
    },
    {
      name: "Youssef El Amrani",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Youssef",
      specializations: ["Boxe", "MMA", "Kickboxing"],
      experience: 8,
      rating: 4.7,
      certifications: ["Boxing Federation Certified", "MMA Coach"],
      location: "Tanger",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-32 bg-gray-900 text-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-start justify-between mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-20 bg-[#F26E21]"></div>
              <span className="text-gray-400 font-medium tracking-wider">
                NOTRE ÉQUIPE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              NOS <span className="text-[#F26E21]">COACHS CERTIFIÉS</span>
            </h2>
            <p className="text-gray-300 max-w-xl">
              Plus de 600 coachs professionnels à votre service pour vous
              accompagner dans votre parcours fitness et vous aider à atteindre
              vos objectifs.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="mt-6 md:mt-0 border-white text-white hover:bg-white/10 rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300"
            >
              TOUS NOS COACHS <ChevronRight className="ml-2" size={16} />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden group hover:bg-gray-700 transition-all duration-500 shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="p-6">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#F26E21] mb-4 shadow-lg">
                    <motion.img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  <motion.div
                    className="absolute top-0 right-0 flex items-center gap-1 bg-gray-900/80 text-white px-2 py-1 rounded-full text-xs shadow-md"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{coach.rating}</span>
                  </motion.div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold">{coach.name}</h3>
                  <p className="text-gray-400 text-sm">
                    {coach.experience} ans d'expérience • {coach.location}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                    Spécialisations
                  </p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {coach.specializations.map((spec, i) => (
                      <motion.span
                        key={i}
                        className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full"
                        whileHover={{ scale: 1.1, backgroundColor: "#F26E21" }}
                        transition={{ duration: 0.2 }}
                      >
                        {spec}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                    Certifications
                  </p>
                  <ul className="space-y-1">
                    {coach.certifications.map((cert, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-center gap-1 text-xs text-gray-300"
                      >
                        <Award className="w-3 h-3 text-[#F26E21]" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full bg-[#F26E21] hover:bg-[#D85A10] text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                    VOIR PROFIL
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProCoaches;
