import React from "react";

const CertifiedCoaches = () => {
  const coachBenefits = [
    {
      title: "FORMATIONS CONTINUES",
      description:
        "Nos coachs suivent 8 formations par an pour vous accompagner",
    },
    {
      title: "COACHS SPÉCIALISÉS",
      description: "Faites vous coacher par activité selon vos objectifs",
    },
    {
      title: "CONSEILS DIÉTÉTIQUES",
      description: "Faites vous conseiller par des experts de la nutrition",
    },
    {
      title: "COACHS POUR LES 100% FEMMES",
      description: "Des coachs femmes pour des centres City Lady 100% femmes",
    },
    {
      title: "SUIVIS PERSONNALISÉS",
      description: "Nos programmes s'adaptent aux besoins de chaque adhérent",
    },
    {
      title: "ÉVALUATIONS & PLANIFICATIONS",
      description:
        "Nos Coachs et nutritionnistes veillent à vous suivre de très près",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              PLUS DE 600
            </h2>
            <h1 className="text-5xl font-extrabold text-[#F26E21] mb-6">
              COACHS CERTIFIÉS
            </h1>
            <p className="text-gray-700 mb-6">
              Nos coachs certifiés possèdent une expertise approfondie dans
              divers domaines du fitness et de la santé. Ils sont dédiés à
              fournir un entraînement personnalisé et efficace, adapté à vos
              objectifs personnels, que ce soit pour perdre du poids, gagner en
              force, améliorer votre condition physique ou simplement mener une
              vie plus saine.
            </p>
            <div className="mt-4">
              <img
                src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=800&q=80"
                alt="Coach training client"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 gap-6">
              {coachBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 w-4 h-4 rounded-full bg-[#F26E21] flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F26E21]">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertifiedCoaches;
