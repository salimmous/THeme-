import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, User, Globe } from "lucide-react";
import { Button } from "../ui/button";

const NewDesignHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "ACCUEIL", href: "/" },
    { label: "CLUBS", href: "/clubs" },
    { label: "ACTIVITÉS", href: "/activites" },
    { label: "COACHING", href: "/coaching" },
    { label: "CITY LADY", href: "/city-lady" },
    { label: "ENTREPRISES", href: "/entreprises" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center z-10">
            <div
              className={`font-bold text-3xl ${isScrolled ? "text-black" : "text-white"}`}
            >
              City<span className="text-[#F26E21]">Club</span>
              <sup className="text-[#F26E21] text-xs ml-0.5">®</sup>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-semibold hover:text-[#F26E21] transition-colors ${isScrolled ? "text-gray-800" : "text-white"}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className={`${isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            >
              <Search size={20} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`${isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            >
              <Globe size={20} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`${isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            >
              <User size={20} />
            </Button>

            <Button className="bg-[#F26E21] hover:bg-[#D85A10] text-white font-bold px-6 py-2 rounded-full">
              ESSAI GRATUIT
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? "text-gray-800" : "text-white"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 z-50">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block py-2 text-gray-800 font-semibold hover:text-[#F26E21]"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-[#F26E21] hover:bg-[#D85A10] text-white font-bold py-2 rounded-full">
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

export default NewDesignHeader;
