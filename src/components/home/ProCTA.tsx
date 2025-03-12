import React, { useRef } from "react";
import { Button } from "../ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const ProCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const benefits = [
    "Accès à plus de 50 clubs dans tout le Maroc",
    "Coachs certifiés et programmes personnalisés",
    "Équipements de pointe et installations modernes",
    "Cours collectifs variés et dynamiques",
    "Suivi de progression et bilan médico-sportif",
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-32 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row items-center bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
              alt="City Club Training"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={isInView ? { scale: 1 } : { scale: 1.1 }}
              transition={{ duration: 1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-transparent to-transparent lg:bg-gradient-to-t lg:from-gray-900/80 lg:via-transparent lg:to-transparent"></div>

            <motion.div
              className="absolute bottom-8 left-8 bg-[#F26E21] text-white font-bold text-xl sm:text-3xl p-4 sm:p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0, x: -30, rotate: -5 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0, rotate: 0 }
                  : { opacity: 0, x: -30, rotate: -5 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              PREMIER MOIS
              <br />
              <span className="text-4xl sm:text-6xl">-50%</span>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-20 bg-[#F26E21]"></div>
                <span className="text-[#F26E21] font-medium tracking-wider">
                  OFFRE SPÉCIALE
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
                COMMENCEZ VOTRE TRANSFORMATION DÈS AUJOURD'HUI
              </h2>
            </motion.div>

            <motion.div
              className="mb-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2 text-gray-300"
                    variants={itemVariants}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#F26E21] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.form
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    placeholder="Nom complet"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F26E21] focus:border-transparent"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="tel"
                    placeholder="Téléphone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F26E21] focus:border-transparent"
                  />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F26E21] focus:border-transparent"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#F26E21] focus:border-transparent appearance-none">
                  <option value="">Sélectionnez votre ville</option>
                  <option value="casablanca">Casablanca</option>
                  <option value="rabat">Rabat</option>
                  <option value="marrakech">Marrakech</option>
                  <option value="tanger">Tanger</option>
                  <option value="agadir">Agadir</option>
                </select>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button className="w-full bg-[#F26E21] hover:bg-[#D85A10] text-white font-bold py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  RÉSERVER MON ESSAI GRATUIT
                </Button>
              </motion.div>

              <p className="text-xs text-gray-400 text-center">
                En soumettant ce formulaire, vous acceptez nos conditions
                d'utilisation et notre politique de confidentialité.
              </p>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProCTA;
