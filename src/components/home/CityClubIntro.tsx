import React from "react";
import { Button } from "../ui/button";

const CityClubIntro = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              PLUS DE 42
            </h2>
            <h1 className="text-5xl font-extrabold text-[#F26E21] mb-6">
              CITY CLUB
            </h1>
            <p className="text-gray-700 mb-6">
              Le club de fitness le plus connu au Maroc. Disposant de machines
              High-Tech, de coachs certifiés et ouvert dans plus de 10 villes au
              Maroc.
            </p>
            <Button className="bg-[#F26E21] hover:bg-[#D85A10] text-white px-6 py-3 rounded-md font-medium">
              PROGRAMMER UNE VISITE
            </Button>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
              alt="City Club Fitness Equipment"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityClubIntro;
