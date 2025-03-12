import React from "react";
import { Clock, MapPin, Award, Users, Dumbbell, Shield } from "lucide-react";

const NewDesignFeatures = () => {
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

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-20 bg-[#F26E21]"></div>
              <span className="text-gray-500 font-medium">
                POURQUOI NOUS CHOISIR
              </span>
            </div>
            <h2 className="text-4xl font-bold">
              L'EXPÉRIENCE <span className="text-[#F26E21]">CITY CLUB</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-xl mt-4 md:mt-0">
            Découvrez ce qui fait de City Club le leader incontesté du fitness
            au Maroc depuis plus de 20 ans avec plus de 230 000 membres
            satisfaits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl transition-all duration-300 hover:shadow-xl group hover:-translate-y-2 bg-white border border-gray-100"
            >
              <div className="mb-6 p-4 rounded-full bg-gray-50 inline-block group-hover:bg-[#F26E21]/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewDesignFeatures;
