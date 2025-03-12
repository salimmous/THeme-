import React from "react";
import Logo from "./Logo";
import { Button } from "../ui/button";

const MainNavbar = () => {
  const navItems = [
    { label: "Les clubs", href: "/clubs" },
    { label: "Activités", href: "/activites" },
    { label: "Coaching", href: "/coaching" },
    { label: "Bilan Médico-Sportif", href: "/bilan" },
    { label: "Témoignages", href: "/temoignages" },
    { label: "Plannings", href: "/plannings" },
    { label: "Animations", href: "/animations" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo variant="dark" size="medium" />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-[#F26E21] font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div>
            <Button className="bg-[#F26E21] hover:bg-[#D85A10] text-white font-medium">
              S'inscrire
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MainNavbar;
