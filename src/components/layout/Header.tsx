import React, { useState } from "react";
import { Menu, Search, Globe, User, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface HeaderProps {
  logo?: string;
  isLoggedIn?: boolean;
  onLanguageChange?: (language: string) => void;
  onMenuToggle?: () => void;
  currentLanguage?: "fr" | "ar";
}

const Header = ({
  logo = "/vite.svg",
  isLoggedIn = false,
  onLanguageChange = () => {},
  onMenuToggle = () => {},
  currentLanguage = "fr",
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    onMenuToggle();
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Clubs", href: "/clubs" },
    { label: "Activities", href: "/activities" },
    { label: "Coaches", href: "/coaches" },
    { label: "Membership", href: "/membership" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <header className="w-full h-20 bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src={logo} alt="City Club" className="h-10 w-auto" />
            <span className="ml-2 text-xl font-bold text-primary hidden sm:inline-block">
              City Club
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={item.href}
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          {/* Search Button */}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search size={20} />
          </Button>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center">
                <Globe size={18} className="mr-1" />
                <span className="hidden sm:inline-block">
                  {currentLanguage === "fr" ? "Français" : "العربية"}
                </span>
                <ChevronDown size={16} className="ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onLanguageChange("fr")}>
                Français
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onLanguageChange("ar")}>
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu or Login Button */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <User size={18} className="mr-1" />
                  <span className="hidden sm:inline-block">My Account</span>
                  <ChevronDown size={16} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>My Bookings</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button size="sm" className="hidden sm:flex">
              Sign In
            </Button>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={handleMobileMenuToggle}
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-md py-4 px-6 z-50">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-800 hover:text-primary py-2 border-b border-gray-100 last:border-0"
              >
                {item.label}
              </a>
            ))}
            {!isLoggedIn && <Button className="w-full mt-2">Sign In</Button>}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
