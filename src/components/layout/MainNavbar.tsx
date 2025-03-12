import React from "react";
import { Button } from "../ui/button";

const MainNavbar = () => {
  return (
    <header className="w-full bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">CITY CLUB</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-orange-400">
            Home
          </a>
          <a href="#" className="hover:text-orange-400">
            Clubs
          </a>
          <a href="#" className="hover:text-orange-400">
            Activities
          </a>
          <a href="#" className="hover:text-orange-400">
            Coaches
          </a>
          <a href="#" className="hover:text-orange-400">
            About
          </a>
        </nav>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          Join Now
        </Button>
      </div>
    </header>
  );
};

export default MainNavbar;
