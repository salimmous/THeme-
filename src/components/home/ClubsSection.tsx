import React from "react";
import { Button } from "../ui/button";

const ClubsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              UN RÉSEAU NATIONAL DE
            </h2>
            <h1 className="text-4xl font-extrabold text-orange-500 mb-6">
              PLUS DE 50 CLUBS
            </h1>
            <p className="text-gray-700 mb-6">
              Avec une seule carte, accédez à un réseau national de plus de 50
              clubs dans toutes les grandes villes du Royaume. Entraînez-vous là
              où vous êtes sans avoir à prendre d'abonnement supplémentaire.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium">
              TROUVER UN CLUB
            </Button>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
              alt="City Club Location"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
