import React, { useState, useRef } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const ProActivities = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const activities = [
    {
      title: "AQUAGYM",
      image:
        "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?w=800&q=80",
      category: "aquatic",
      description: "Activité physique complète aux multiples bienfaits",
      color: "#3B82F6", // blue-500
    },
    {
      title: "BOXE & MMA",
      image:
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
      category: "combat",
      description: "Techniques de combat et cardio intensif",
      color: "#EF4444", // red-500
    },
    {
      title: "MUSCULATION",
      image:
        "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=800&q=80",
      category: "strength",
      description: "Développement musculaire et force",
      color: "#1F2937", // gray-800
    },
    {
      title: "CARDIO",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      category: "cardio",
      description: "Amélioration de l'endurance et perte de poids",
      color: "#10B981", // green-500
    },
    {
      title: "YOGA",
      image:
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
      category: "wellness",
      description: "Flexibilité, équilibre et relaxation",
      color: "#8B5CF6", // purple-500
    },
    {
      title: "ZUMBA",
      image:
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&q=80",
      category: "dance",
      description: "Danse fitness et chorégraphies dynamiques",
      color: "#EC4899", // pink-500
    },
  ];

  const tabs = [
    { id: "all", label: "TOUTES" },
    { id: "cardio", label: "CARDIO" },
    { id: "strength", label: "MUSCULATION" },
    { id: "wellness", label: "BIEN-ÊTRE" },
    { id: "aquatic", label: "AQUATIQUE" },
    { id: "combat", label: "COMBAT" },
    { id: "dance", label: "DANSE" },
  ];

  const filteredActivities =
    activeTab === "all"
      ? activities
      : activities.filter((activity) => activity.category === activeTab);

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
    <section className="py-32 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-20 bg-[#F26E21]"></div>
            <span className="text-gray-500 font-medium tracking-wider">
              NOS PROGRAMMES
            </span>
            <div className="h-1 w-20 bg-[#F26E21]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            DÉCOUVREZ NOS <span className="text-[#F26E21]">ACTIVITÉS</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Une large gamme d'activités pour tous les niveaux et tous les
            objectifs, encadrées par nos coachs professionnels
          </p>
        </motion.div>

        {/* Activity Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === tab.id ? "bg-[#F26E21] text-white shadow-lg" : "bg-white text-gray-700 hover:bg-gray-100"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredActivities.map((activity, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-96 shadow-xl"
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Image with Parallax Effect */}
              <motion.img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{
                  scale: hoveredCard === index ? 1.15 : 1.1,
                }}
                transition={{ duration: 0.8 }}
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, ${activity.color}CC, ${activity.color}66, transparent)`,
                }}
              ></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500">
                <motion.h3
                  className="text-white text-3xl font-bold mb-3 drop-shadow-md"
                  initial={{ y: 0 }}
                  animate={{ y: hoveredCard === index ? -10 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {activity.title}
                </motion.h3>

                <motion.p
                  className="text-white/90 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0,
                    y: hoveredCard === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {activity.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0,
                    y: hoveredCard === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Button
                    className="w-full bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-full shadow-lg"
                    style={{ color: activity.color }}
                  >
                    DÉCOUVRIR
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            variant="outline"
            className="border-[#F26E21] text-[#F26E21] hover:bg-[#F26E21] hover:text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VOIR TOUTES LES ACTIVITÉS{" "}
            <ChevronRight className="ml-2" size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProActivities;
