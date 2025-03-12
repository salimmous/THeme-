import React from "react";
import { Button } from "../ui/button";

const CTASection = () => {
  return (
    <section className="py-12 bg-orange-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          PRÊT À COMMENCER VOTRE TRANSFORMATION ?
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Rejoignez-nous dès aujourd'hui et commencez votre parcours vers une
          meilleure santé et forme physique.
        </p>
        <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 text-lg font-bold">
          ESSAI GRATUIT
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
