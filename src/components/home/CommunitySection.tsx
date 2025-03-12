import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">
              REJOIGNEZ UNE COMMUNAUTÉ DE PLUS DE
            </h2>
            <h1 className="text-5xl font-extrabold text-[#F26E21] mb-6">
              +200.000 ADHÉRENTS ACTIFS !
            </h1>

            <div className="bg-[#F26E21] rounded-lg p-6 text-white relative">
              <div className="absolute -left-2 top-4 w-4 h-4 bg-[#F26E21] rotate-45"></div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=800&q=80"
                  alt="City Club Members"
                  className="w-full h-auto rounded-lg mb-4"
                />

                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"}`}
                    />
                  ))}
                </div>

                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <ChevronLeft size={20} />
                  </button>
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <p className="italic text-sm mt-4">
                Les programmes que j'ai reçu correspondent bien à ma structure
                corporelle, je suis très content de pouvoir suivre mon évolution
              </p>

              <p className="font-bold mt-2">Zakaria</p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-[#F26E21] mb-6">
              FOIRE AUX QUESTIONS !
            </h2>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="flex justify-between items-center p-4 bg-gray-50">
                  <h3 className="font-bold">
                    Avez-Vous Un Espace 100% Femmes ?
                  </h3>
                  <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-600">
                    -
                  </button>
                </div>
                <div className="p-4">
                  <p>
                    Oui, City Club propose un espace entièrement dédié aux
                    femmes, offrant un environnement confortable et privé pour
                    s'entraîner.
                  </p>
                </div>
              </div>

              {[
                "Quels Sont Vos Horaires D'ouverture ?",
                "Offrez-Vous Des Programmes D'entraînement Personnalisés ?",
                "Quels Types D'équipements Proposez-Vous ?",
                "Avez-Vous Des Piscines Et Des Terrains ?",
              ].map((question, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div className="flex justify-between items-center p-4 bg-gray-50">
                    <h3 className="font-bold">{question}</h3>
                    <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-600">
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-4xl font-extrabold text-[#F26E21] mb-4">
            JE VEUX DÉMARRER !
          </h2>
          <p className="text-xl mb-8">
            Faites Le Nouveau Pas Vers Le Nouveau Vous, Démarrez Votre
            Entraînement Dès Aujourd'hui !
          </p>
          <button className="bg-[#F26E21] hover:bg-[#D85A10] text-white px-8 py-3 rounded-md font-medium text-lg">
            CONTACTER UN REPRÉSENTANT CITY CLUB
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
