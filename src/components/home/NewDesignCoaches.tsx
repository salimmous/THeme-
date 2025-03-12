import React from "react";
import { Button } from "../ui/button";
import { Star, Award, ChevronRight } from "lucide-react";

const NewDesignCoaches = () => {
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

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-20 bg-[#F26E21]"></div>
              <span className="text-gray-400 font-medium">NOTRE ÉQUIPE</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              NOS <span className="text-[#F26E21]">COACHS CERTIFIÉS</span>
            </h2>
            <p className="text-gray-300 max-w-xl">
              Plus de 600 coachs professionnels à votre service pour vous
              accompagner dans votre parcours fitness et vous aider à atteindre
              vos objectifs.
            </p>
          </div>

          <Button
            variant="outline"
            className="mt-6 md:mt-0 border-white text-white hover:bg-white/10 rounded-full px-6 py-3"
          >
            TOUS NOS COACHS <ChevronRight className="ml-2" size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden group hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="p-6">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#F26E21] mb-4">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute top-0 right-0 flex items-center gap-1 bg-gray-900/80 text-white px-2 py-1 rounded-full text-xs">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{coach.rating}</span>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold">{coach.name}</h3>
                  <p className="text-gray-400 text-sm">
                    {coach.experience} ans d'expérience • {coach.location}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2 uppercase">
                    Spécialisations
                  </p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {coach.specializations.map((spec, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-gray-400 mb-2 uppercase">
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

                <Button className="w-full bg-[#F26E21] hover:bg-[#D85A10] text-white rounded-full">
                  VOIR PROFIL
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewDesignCoaches;
