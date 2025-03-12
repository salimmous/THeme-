import React, { useState } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const NewDesignActivities = () => {
  const [activeTab, setActiveTab] = useState("all");

  const activities = [
    {
      title: "AQUAGYM",
      image:
        "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?w=800&q=80",
      category: "aquatic",
      description: "Activité physique complète aux multiples bienfaits",
    },
    {
      title: "BOXE & MMA",
      image:
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
      category: "combat",
      description: "Techniques de combat et cardio intensif",
    },
    {
      title: "MUSCULATION",
      image:
        "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=800&q=80",
      category: "strength",
      description: "Développement musculaire et force",
    },
    {
      title: "CARDIO",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      category: "cardio",
      description: "Amélioration de l'endurance et perte de poids",
    },
    {
      title: "YOGA",
      image:
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
      category: "wellness",
      description: "Flexibilité, équilibre et relaxation",
    },
    {
      title: "ZUMBA",
      image:
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&q=80",
      category: "dance",
      description: "Danse fitness et chorégraphies dynamiques",
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

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-20 bg-[#F26E21]"></div>
            <span className="text-gray-500 font-medium">NOS PROGRAMMES</span>
            <div className="h-1 w-20 bg-[#F26E21]"></div>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            DÉCOUVREZ NOS <span className="text-[#F26E21]">ACTIVITÉS</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une large gamme d'activités pour tous les niveaux et tous les
            objectifs, encadrées par nos coachs professionnels
          </p>
        </div>

        {/* Activity Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === tab.id ? "bg-[#F26E21] text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-96 shadow-lg"
            >
              {/* Background Image */}
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-300 group-hover:translate-y-0">
                <h3 className="text-white text-3xl font-bold mb-3">
                  {activity.title}
                </h3>
                <p className="text-white/80 mb-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {activity.description}
                </p>
                <Button className="w-full bg-[#F26E21] hover:bg-[#D85A10] text-white rounded-full transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  DÉCOUVRIR
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-[#F26E21] text-[#F26E21] hover:bg-[#F26E21] hover:text-white rounded-full px-8 py-6"
          >
            VOIR TOUTES LES ACTIVITÉS{" "}
            <ChevronRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewDesignActivities;
