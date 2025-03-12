import React from "react";
import { Button } from "../ui/button";

const CoachesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=800&q=80"
              alt="City Club Coach"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              PLUS DE 600
            </h2>
            <h1 className="text-4xl font-extrabold text-orange-500 mb-6">
              COACHS CERTIFIÉS
            </h1>
            <p className="text-gray-700 mb-6">
              Nos coachs certifiés possèdent une expertise approfondie dans
              divers domaines du fitness et de la santé. Ils sont dédiés à
              fournir un entraînement personnalisé et efficace, adapté à vos
              objectifs personnels.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium">
              RENCONTRER NOS COACHS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
