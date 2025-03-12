import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ModernHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "ACCUEIL", href: "/" },
    { label: "NOS CLUBS", href: "/clubs", hasSubmenu: true },
    { label: "ACTIVITÉS", href: "/activites", hasSubmenu: true },
    { label: "COACHING", href: "/coaching" },
    { label: "CITY LADY", href: "/city-lady" },
    { label: "ENTREPRISES", href: "/entreprises" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <div className="flex items-center space-x-4 text-sm">
            <a
              href="/localisations"
              className="text-gray-600 hover:text-[#F26E21]"
            >
              Localisations
            </a>
            <a
              href="/recrutement"
              className="text-gray-600 hover:text-[#F26E21]"
            >
              Recrutement
            </a>
            <a href="/franchise" className="text-gray-600 hover:text-[#F26E21]">
              Devenir franchisé
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm text-gray-600 hover:text-[#F26E21]">
                Français <ChevronDown size={14} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>العربية</DropdownMenuItem>
                <DropdownMenuItem>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href="/login"
              className="text-sm text-gray-600 hover:text-[#F26E21]"
            >
              Espace membre
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="font-bold text-3xl">
                City<span className="text-[#F26E21]">Club</span>
                <sup className="text-[#F26E21] text-xs ml-0.5">®</sup>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.href}
                  className="text-gray-800 font-semibold hover:text-[#F26E21] transition-colors flex items-center"
                >
                  {item.label}
                  {item.hasSubmenu && (
                    <ChevronDown size={14} className="ml-1" />
                  )}
                </a>
                {item.hasSubmenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {item.label === "NOS CLUBS" ? (
                        <>
                          <a
                            href="/clubs/casablanca"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Casablanca
                          </a>
                          <a
                            href="/clubs/rabat"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Rabat
                          </a>
                          <a
                            href="/clubs/marrakech"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Marrakech
                          </a>
                          <a
                            href="/clubs/tanger"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Tanger
                          </a>
                          <a
                            href="/clubs/agadir"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Agadir
                          </a>
                        </>
                      ) : (
                        <>
                          <a
                            href="/activites/aquagym"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Aquagym
                          </a>
                          <a
                            href="/activites/boxe"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Boxe & MMA
                          </a>
                          <a
                            href="/activites/cardio"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Cardio
                          </a>
                          <a
                            href="/activites/musculation"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Musculation
                          </a>
                          <a
                            href="/activites/zenfit"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Zen-Fit
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-[#F26E21] hover:bg-[#D85A10] text-white font-bold px-6 py-2 rounded-md">
              ESSAI GRATUIT
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="block py-2 text-gray-800 font-semibold hover:text-[#F26E21]"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-[#F26E21] hover:bg-[#D85A10] text-white font-bold py-2 rounded-md">
                  ESSAI GRATUIT
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default ModernHeader;
