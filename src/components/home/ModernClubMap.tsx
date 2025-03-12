import React from "react";
import { Button } from "../ui/button";
import { Search, MapPin } from "lucide-react";

const ModernClubMap = () => {
  const cities = [
    { name: "Casablanca", count: 15, position: { top: "40%", left: "20%" } },
    { name: "Rabat", count: 8, position: { top: "30%", left: "25%" } },
    { name: "Marrakech", count: 6, position: { top: "55%", left: "30%" } },
    { name: "Tanger", count: 5, position: { top: "15%", left: "22%" } },
    { name: "Agadir", count: 4, position: { top: "65%", left: "15%" } },
    { name: "Fès", count: 4, position: { top: "35%", left: "40%" } },
    { name: "Meknès", count: 3, position: { top: "38%", left: "35%" } },
    { name: "Oujda", count: 3, position: { top: "30%", left: "60%" } },
    { name: "Tétouan", count: 2, position: { top: "12%", left: "25%" } },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4">
                TROUVEZ VOTRE <span className="text-[#F26E21]">CLUB</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Avec plus de 50 clubs dans tout le Maroc, il y a toujours un
                City Club près de chez vous. Utilisez notre carte interactive
                pour trouver le club le plus proche.
              </p>

              <div className="relative mb-6">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Rechercher par ville ou quartier"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F26E21]"
                />
              </div>

              <Button className="bg-[#F26E21] hover:bg-[#D85A10] text-white font-bold px-6 py-3 rounded-md w-full">
                TROUVER MON CLUB
              </Button>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">CLUBS POPULAIRES</h3>
              <div className="space-y-4">
                {[
                  "City Club Casablanca - Maârif",
                  "City Club Rabat - Agdal",
                  "City Club Marrakech - Guéliz",
                  "City Club Tanger - Centre",
                ].map((club, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-md transition-colors cursor-pointer"
                  >
                    <MapPin className="text-[#F26E21]" size={18} />
                    <span>{club}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[500px] bg-gray-800 rounded-lg overflow-hidden">
              {/* Map Background */}
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
                <div
                  key={index}
                  className="absolute group cursor-pointer"
                  style={{ top: city.position.top, left: city.position.left }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-[#F26E21] rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-[#F26E21] rounded-full relative z-10"></div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-white text-gray-900 rounded-md p-2 text-xs font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                      <div className="text-center">
                        <div className="font-bold">{city.name}</div>
                        <div className="text-[#F26E21]">{city.count} clubs</div>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Legend */}
              <div className="absolute bottom-4 right-4 bg-gray-900/80 p-3 rounded-md">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-[#F26E21] rounded-full"></div>
                  <span>
                    City Club (
                    {cities.reduce((acc, city) => acc + city.count, 0)} clubs)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernClubMap;
