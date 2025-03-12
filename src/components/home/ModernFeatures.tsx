import React from "react";
import { Clock, MapPin, Award, Users, Dumbbell, Shield } from "lucide-react";

const ModernFeatures = () => {
  const features = [
    {
      icon: <Clock className="w-10 h-10 text-[#F26E21]" />,
      title: "OUVERT 24/7",
      description:
        "Accès non-stop à tous nos clubs, 7 jours sur 7, pour s'adapter à votre emploi du temps",
    },
    {
      icon: <MapPin className="w-10 h-10 text-[#F26E21]" />,
      title: "50+ CLUBS",
      description:
        "Un réseau national de plus de 50 clubs dans toutes les grandes villes du Royaume",
    },
    {
      icon: <Award className="w-10 h-10 text-[#F26E21]" />,
      title: "COACHS CERTIFIÉS",
      description:
        "Plus de 600 coachs professionnels pour vous accompagner dans votre parcours fitness",
    },
    {
      icon: <Users className="w-10 h-10 text-[#F26E21]" />,
      title: "CITY LADY",
      description:
        "Des espaces 100% dédiés aux femmes avec des coachs féminines et des programmes adaptés",
    },
    {
      icon: <Dumbbell className="w-10 h-10 text-[#F26E21]" />,
      title: "ÉQUIPEMENT PREMIUM",
      description:
        "Des machines de dernière génération pour des entraînements efficaces et sécurisés",
    },
    {
      icon: <Shield className="w-10 h-10 text-[#F26E21]" />,
      title: "BILAN MÉDICO-SPORTIF",
      description:
        "Évaluation complète de votre condition physique pour des programmes personnalisés",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            POURQUOI CHOISIR <span className="text-[#F26E21]">CITY CLUB</span> ?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez ce qui fait de City Club le leader incontesté du fitness
            au Maroc depuis plus de 20 ans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-[#F26E21]"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;
