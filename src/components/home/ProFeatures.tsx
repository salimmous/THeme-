import React, { useRef } from "react";
import { Clock, MapPin, Award, Users, Dumbbell, Shield } from "lucide-react";
import { motion, useInView } from "framer-motion";

const ProFeatures = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <Clock className="w-12 h-12 text-[#F26E21]" />,
      title: "ACCÈS 24/7",
      description:
        "Entraînez-vous quand vous voulez, tous les jours de la semaine",
    },
    {
      icon: <MapPin className="w-12 h-12 text-[#F26E21]" />,
      title: "50+ CLUBS",
      description: "Un réseau national dans toutes les grandes villes du Maroc",
    },
    {
      icon: <Award className="w-12 h-12 text-[#F26E21]" />,
      title: "COACHS CERTIFIÉS",
      description: "Des professionnels qualifiés pour vous accompagner",
    },
    {
      icon: <Users className="w-12 h-12 text-[#F26E21]" />,
      title: "CITY LADY",
      description:
        "Des espaces 100% dédiés aux femmes avec des coachs féminines",
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-[#F26E21]" />,
      title: "ÉQUIPEMENT PREMIUM",
      description: "Des machines de dernière génération pour vos entraînements",
    },
    {
      icon: <Shield className="w-12 h-12 text-[#F26E21]" />,
      title: "BILAN MÉDICO-SPORTIF",
      description: "Évaluation complète pour des programmes personnalisés",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-32 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-20 bg-[#F26E21]"></div>
              <span className="text-gray-500 font-medium tracking-wider">
                POURQUOI NOUS CHOISIR
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              L'EXPÉRIENCE <span className="text-[#F26E21]">CITY CLUB</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-xl mt-4 md:mt-0 text-lg">
            Découvrez ce qui fait de City Club le leader incontesté du fitness
            au Maroc depuis plus de 20 ans avec plus de 230 000 membres
            satisfaits.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl group hover:-translate-y-2 bg-white border border-gray-100 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background gradient that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F26E21]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-full bg-gray-50 inline-block group-hover:bg-[#F26E21]/10 transition-colors duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#F26E21] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#F26E21]/0 group-hover:bg-[#F26E21]/10 transform rotate-45 transition-all duration-500 rounded-lg"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProFeatures;
