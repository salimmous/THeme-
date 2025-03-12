import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const ModernCTA = () => {
  return (
    <section className="py-20 bg-[#F26E21]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              PRÊT À COMMENCER <br />
              VOTRE TRANSFORMATION ?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              Rejoignez City Club dès aujourd'hui et bénéficiez d'un essai
              gratuit, de l'accès à plus de 50 clubs et de programmes
              personnalisés pour atteindre vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-[#F26E21] hover:bg-gray-100 font-bold px-8 py-3 rounded-md text-lg">
                ESSAI GRATUIT
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-md text-lg"
              >
                NOUS CONTACTER <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>

          <div className="w-full md:w-2/5">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                DEMANDEZ VOTRE ESSAI GRATUIT
              </h3>
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F26E21]"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F26E21]"
                      placeholder="06XXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F26E21]"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Club le plus proche
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F26E21]">
                      <option value="">Sélectionnez un club</option>
                      <option value="casablanca">Casablanca</option>
                      <option value="rabat">Rabat</option>
                      <option value="marrakech">Marrakech</option>
                      <option value="tanger">Tanger</option>
                      <option value="agadir">Agadir</option>
                    </select>
                  </div>
                  <Button className="w-full bg-[#F26E21] hover:bg-[#D85A10] text-white font-bold py-3 rounded-md">
                    RÉSERVER MON ESSAI
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  En soumettant ce formulaire, vous acceptez nos conditions
                  d'utilisation et notre politique de confidentialité.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernCTA;
