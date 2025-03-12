import React from "react";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";

const NewDesignCTA = () => {
  const benefits = [
    "Accès à plus de 50 clubs dans tout le Maroc",
    "Coachs certifiés et programmes personnalisés",
    "Équipements de pointe et installations modernes",
    "Cours collectifs variés et dynamiques",
    "Suivi de progression et bilan médico-sportif",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
              alt="City Club Training"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-transparent to-transparent lg:bg-gradient-to-t lg:from-gray-900/80 lg:via-transparent lg:to-transparent"></div>

            <div className="absolute bottom-8 left-8 bg-[#F26E21] text-white font-bold text-xl sm:text-3xl p-4 sm:p-6 rounded-lg">
              PREMIER MOIS
              <br />
              <span className="text-4xl sm:text-6xl">-50%</span>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-20 bg-[#F26E21]"></div>
              <span className="text-[#F26E21] font-medium">OFFRE SPÉCIALE</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              COMMENCEZ VOTRE TRANSFORMATION DÈS AUJOURD'HUI
            </h2>

            <div className="mb-8">
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#F26E21] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nom complet"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F26E21] focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Téléphone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F26E21] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F26E21] focus:border-transparent"
                />
              </div>

              <div>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#F26E21] focus:border-transparent appearance-none">
                  <option value="">Sélectionnez votre ville</option>
                  <option value="casablanca">Casablanca</option>
                  <option value="rabat">Rabat</option>
                  <option value="marrakech">Marrakech</option>
                  <option value="tanger">Tanger</option>
                  <option value="agadir">Agadir</option>
                </select>
              </div>

              <Button className="w-full bg-[#F26E21] hover:bg-[#D85A10] text-white font-bold py-4 rounded-lg text-lg">
                RÉSERVER MON ESSAI GRATUIT
              </Button>

              <p className="text-xs text-gray-400 text-center">
                En soumettant ce formulaire, vous acceptez nos conditions
                d'utilisation et notre politique de confidentialité.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewDesignCTA;
