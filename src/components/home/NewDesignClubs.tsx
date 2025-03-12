import React from "react";
import { Button } from "../ui/button";
import { MapPin, Star, Clock, ChevronRight } from "lucide-react";

const NewDesignClubs = () => {
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

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Column - Map */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-20 bg-[#F26E21]"></div>
              <span className="text-gray-500 font-medium">NOTRE RÉSEAU</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              TROUVEZ VOTRE <span className="text-[#F26E21]">CLUB</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Avec plus de 50 clubs dans tout le Maroc, il y a toujours un City
              Club près de chez vous. Utilisez notre carte interactive pour
              trouver le club le plus proche.
            </p>

            <div className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden mb-6">
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
              {[
                { name: "Casablanca", count: 15, top: "40%", left: "20%" },
                { name: "Rabat", count: 8, top: "30%", left: "25%" },
                { name: "Marrakech", count: 6, top: "55%", left: "30%" },
                { name: "Tanger", count: 5, top: "15%", left: "22%" },
                { name: "Agadir", count: 4, top: "65%", left: "15%" },
              ].map((city, index) => (
                <div
                  key={index}
                  className="absolute group cursor-pointer"
                  style={{ top: city.top, left: city.left }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-[#F26E21] rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-[#F26E21] rounded-full relative z-10"></div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-white text-gray-900 rounded-md p-2 text-xs font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 shadow-lg">
                      <div className="text-center">
                        <div className="font-bold">{city.name}</div>
                        <div className="text-[#F26E21]">{city.count} clubs</div>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full bg-[#F26E21] hover:bg-[#D85A10] text-white font-bold py-4 rounded-full">
              TROUVER MON CLUB
            </Button>
          </div>

          {/* Right Column - Featured Clubs */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              {featuredClubs.map((club, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-2/5 relative">
                      <img
                        src={club.image}
                        alt={club.name}
                        className="w-full h-full object-cover"
                      />
                      {club.isNew && (
                        <div className="absolute top-4 left-4 bg-[#F26E21] text-white text-xs font-bold px-3 py-1 rounded-full">
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
                          className="text-[#F26E21] hover:text-[#D85A10] p-0 h-auto"
                        >
                          Détails <ChevronRight size={16} className="ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className="border-[#F26E21] text-[#F26E21] hover:bg-[#F26E21] hover:text-white rounded-full px-8 py-3"
              >
                VOIR TOUS LES CLUBS <ChevronRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewDesignClubs;
