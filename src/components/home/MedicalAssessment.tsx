import React from "react";

const MedicalAssessment = () => {
  const steps = [
    {
      number: 1,
      title: "DEMANDEZ VOTRE BILAN",
      description:
        "Approchez votre coach dans l'espace dédié au Bilan Médico-Sportif et demandez de remplir votre planning de réservation digitalisé.",
    },
    {
      number: 2,
      title: "PASSEZ VOS TESTS",
      description:
        "En vous faisant assister et évaluer par le coach, passez l'ensemble des tests physiques chronométrés du programme.",
    },
    {
      number: 3,
      title: "RECEVEZ VOTRE PROGRAMME",
      description:
        "Sur la base des résultats de votre test médico-sportif, recevez vos programmes personnalisés sur place et par email.",
    },
  ];

  return (
    <section className="w-full py-16 bg-teal-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-2/5">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
              alt="City Club Coaches"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-full md:w-3/5">
            <div className="flex items-center gap-2 mb-4">
              <div>
                <h2 className="text-xl font-bold">
                  REPRENEZ EN MAIN VOTRE SANTÉ
                </h2>
                <h1 className="text-3xl font-extrabold">
                  AVEC LE{" "}
                  <span className="text-white">BILAN MÉDICO-SPORTIF</span>
                </h1>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#F26E21] flex items-center justify-center font-bold text-white">
                      #{step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-100">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-block bg-white text-teal-800 font-bold px-6 py-2">
              DÈS VOTRE ARRIVÉE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalAssessment;
