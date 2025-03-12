import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { MapPin, Star, Clock, ChevronRight, Search } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Input } from "../ui/input";

const ProClubs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCity, setHoveredCity] = useState<number | null>(null);
  const [hoveredClub, setHoveredClub] = useState<number | null>(null);

  const featuredClubs = [
    {
      name: "City Club Casablanca - Maârif",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      location: "Casablanca, Maroc",
      rating: 4.8,
      features: ["Piscine", "Spa", "Musculation", "Cardio", "Cours collectifs"],
      hours: "6:00 - 23:00",
      isNew: true,
    },
    {
      name: "City Club Rabat - Agdal",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
      location: "Rabat, Maroc",
      rating: 4.7,
      features: ["Musculation", "Cardio", "Cours collectifs", "Boxe"],
      hours: "6:00 - 23:00",
      isNew: false,
    },
    {
      name: "City Club Marrakech - Guéliz",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
      location: "Marrakech, Maroc",
      rating: 4.9,
      features: [
        "Piscine",
        "Spa",
        "Musculation",
        "Cardio",
        "Cours collectifs",
        "Tennis",
      ],
      hours: "6:00 - 23:00",
      isNew: true,
    },
  ];

  const cities = [
    { name: "Casablanca", count: 15, top: "40%", left: "20%" },
    { name: "Rabat", count: 8, top: "30%", left: "25%" },
    { name: "Marrakech", count: 6, top: "55%", left: "30%" },
    { name: "Tanger", count: 5, top: "15%", left: "22%" },
    { name: "Agadir", count: 4, top: "65%", left: "15%" },
  ];

  const filteredClubs = featuredClubs.filter(
    (club) =>
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
    <section className="py-32 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Column - Map */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={headerVariants}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-20 bg-[#F26E21]"></div>
                <span className="text-gray-500 font-medium tracking-wider">
                  NOTRE RÉSEAU
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">
                TROUVEZ VOTRE <span className="text-[#F26E21]">CLUB</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Avec plus de 50 clubs dans tout le Maroc, il y a toujours un
                City Club près de chez vous. Utilisez notre carte interactive
                pour trouver le club le plus proche.
              </p>
            </motion.div>

            <motion.div
              className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="/morocco-map.png"
                alt="Morocco Map"
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80";
                }}
              />

              {/* City Markers */}
              {cities.map((city, index) => (
                <motion.div
                  key={index}
                  className="absolute group cursor-pointer"
                  style={{ top: city.top, left: city.left }}
                  onHoverStart={() => setHoveredCity(index)}
                  onHoverEnd={() => setHoveredCity(null)}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="relative">
                    <motion.div
                      className="w-4 h-4 bg-[#F26E21] rounded-full absolute"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0.4, 0.7],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="w-4 h-4 bg-[#F26E21] rounded-full relative z-10"></div>

                    {/* Tooltip */}
                    <motion.div
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-white text-gray-900 rounded-md p-2 text-xs font-medium z-20 shadow-lg"
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{
                        opacity: hoveredCity === index ? 1 : 0,
                        y: hoveredCity === index ? 0 : 10,
                        scale: hoveredCity === index ? 1 : 0.9,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-center">
                        <div className="font-bold">{city.name}</div>
                        <div className="text-[#F26E21]">{city.count} clubs</div>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="relative mb-6">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <Input
                  type="text"
                  placeholder="Rechercher par ville ou quartier"
                  className="w-full bg-gray-100 border-none pl-12 pr-4 py-3 rounded-full focus:ring-2 focus:ring-[#F26E21]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Button
                className="w-full bg-[#F26E21] hover:bg-[#D85A10] text-white font-bold py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                TROUVER MON CLUB
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Featured Clubs */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="space-y-6">
              {filteredClubs.map((club, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  onHoverStart={() => setHoveredClub(index)}
                  onHoverEnd={() => setHoveredClub(null)}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-2/5 relative overflow-hidden">
                      <motion.img
                        src={club.image}
                        alt={club.name}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        animate={{ scale: hoveredClub === index ? 1.05 : 1 }}
                        transition={{ duration: 0.4 }}
                      />
                      {club.isNew && (
                        <div className="absolute top-4 left-4 bg-[#F26E21] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          NOUVEAU
                        </div>
                      )}
                    </div>

                    <div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{club.name}</h3>

                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <MapPin size={16} className="mr-1 text-[#F26E21]" />
                          <span>{club.location}</span>
                        </div>

                        <div className="flex items-center mb-4">
                          <div className="flex mr-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={
                                  i < Math.floor(club.rating)
                                    ? "text-yellow-500 fill-yellow-500"
                                    : "text-gray-300"
                                }
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium">
                            {club.rating}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {club.features.map((feature, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm">
                          <Clock size={16} className="mr-1 text-[#F26E21]" />
                          <span>{club.hours}</span>
                        </div>

                        <Button
                          variant="ghost"
                          className="text-[#F26E21] hover:text-[#D85A10] p-0 h-auto group"
                        >
                          Détails
                          <motion.span
                            initial={{ x: 0 }}
                            animate={{ x: hoveredClub === index ? 5 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronRight size={16} className="ml-1" />
                          </motion.span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                variant="outline"
                className="border-[#F26E21] text-[#F26E21] hover:bg-[#F26E21] hover:text-white rounded-full px-8 py-3 shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VOIR TOUS LES CLUBS <ChevronRight className="ml-2" size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProClubs;
