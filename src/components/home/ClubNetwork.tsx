import React from "react";
import { Button } from "../ui/button";

const ClubNetwork = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="/morocco-map.png"
              alt="Morocco Map with City Club Locations"
              className="w-full h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80";
              }}
            />
            <div className="mt-4 p-4 border border-orange-200 rounded-lg bg-orange-50">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-800">VOUS RECHERCHEZ</h3>
                  <h2 className="text-2xl font-bold text-white bg-[#F26E21] inline-block px-2 py-1 rounded">
                    UN CLUB ?
                  </h2>
                </div>
                <div className="text-right">
                  <h3 className="font-bold text-gray-800">42 Clubs</h3>
                  <h2 className="text-xl font-bold text-[#F26E21]">OUVERTS</h2>
                  <p className="text-sm text-gray-600">
                    et 8 ouvertures cette année
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="inline-block bg-[#F26E21] text-white rounded-full px-4 py-2 font-bold">
                  DÉJÀ 230.000 ADHÉRENTS AU MAROC
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              UN RÉSEAU NATIONAL DE
            </h2>
            <h1 className="text-5xl font-extrabold text-[#F26E21] mb-6">
              PLUS DE 50 CLUBS
            </h1>
            <p className="text-gray-700 mb-6">
              Avec une seule carte, accédez à un réseau national de plus de 50
              clubs dans toutes les grandes villes du Royaume. Entraînez-vous là
              où vous êtes sans avoir à prendre d'abonnement supplémentaire. Un
              luxe que SEUL City Club vous procure.
            </p>
            <Button className="bg-[#F26E21] hover:bg-[#D85A10] text-white px-6 py-3 rounded-md font-medium">
              PROGRAMMER UNE VISITE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubNetwork;
