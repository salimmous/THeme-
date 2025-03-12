import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const ModernActivities = () => {
  const activities = [
    {
      title: "AQUAGYM",
      image:
        "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?w=800&q=80",
      color: "bg-blue-600",
      description: "Activité physique complète aux multiples bienfaits",
    },
    {
      title: "BOXE & MMA",
      image:
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
      color: "bg-red-600",
      description: "Techniques de combat et cardio intensif",
    },
    {
      title: "MUSCULATION",
      image:
        "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=800&q=80",
      color: "bg-gray-800",
      description: "Développement musculaire et force",
    },
    {
      title: "CARDIO",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      color: "bg-green-600",
      description: "Amélioration de l'endurance et perte de poids",
    },
    {
      title: "ZEN-FIT",
      image:
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
      color: "bg-purple-600",
      description: "Yoga, pilates et relaxation",
    },
    {
      title: "DANSE",
      image:
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&q=80",
      color: "bg-pink-600",
      description: "Zumba, danse orientale et chorégraphies",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              NOS <span className="text-[#F26E21]">ACTIVITÉS</span>
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Découvrez notre large gamme d'activités pour tous les niveaux et
              tous les objectifs
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 border-[#F26E21] text-[#F26E21] hover:bg-[#F26E21] hover:text-white"
          >
            TOUTES LES ACTIVITÉS <ChevronRight className="ml-2" size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg h-80"
            >
              {/* Background Image */}
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className={`${activity.color} w-12 h-1 mb-3`}></div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  {activity.title}
                </h3>
                <p className="text-white/80 mb-4">{activity.description}</p>
                <Button
                  className="w-full bg-white/20 hover:bg-white text-white hover:text-black border border-white transition-colors"
                  variant="outline"
                >
                  DÉCOUVRIR
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernActivities;
