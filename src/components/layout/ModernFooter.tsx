import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import { Button } from "../ui/button";

const ModernFooter = () => {
  const footerLinks = [
    {
      title: "City Club",
      links: [
        { label: "À propos", href: "/about" },
        { label: "Nos clubs", href: "/clubs" },
        { label: "Activités", href: "/activites" },
        { label: "Coaching", href: "/coaching" },
        { label: "City Lady", href: "/city-lady" },
        { label: "Entreprises", href: "/entreprises" },
      ],
    },
    {
      title: "Informations",
      links: [
        { label: "Tarifs & Abonnements", href: "/tarifs" },
        { label: "Horaires d'ouverture", href: "/horaires" },
        { label: "FAQ", href: "/faq" },
        { label: "Blog fitness", href: "/blog" },
        { label: "Recrutement", href: "/recrutement" },
        { label: "Devenir franchisé", href: "/franchise" },
      ],
    },
    {
      title: "Légal",
      links: [
        { label: "Conditions générales", href: "/conditions" },
        { label: "Politique de confidentialité", href: "/confidentialite" },
        { label: "Mentions légales", href: "/mentions-legales" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "https://facebook.com/cityclub" },
    { icon: <Instagram size={18} />, href: "https://instagram.com/cityclub" },
    { icon: <Twitter size={18} />, href: "https://twitter.com/cityclub" },
    { icon: <Youtube size={18} />, href: "https://youtube.com/cityclub" },
    {
      icon: <Linkedin size={18} />,
      href: "https://linkedin.com/company/cityclub",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Pre-Footer */}
      <div className="bg-[#F26E21] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white font-bold text-lg mb-4 md:mb-0">
              RESTEZ INFORMÉ DE NOS DERNIÈRES ACTUALITÉS
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="px-4 py-2 w-full md:w-64 rounded-l-md focus:outline-none"
              />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-l-none rounded-r-md">
                S'ABONNER
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div>
            <div className="font-bold text-3xl mb-6">
              City<span className="text-[#F26E21]">Club</span>
              <sup className="text-[#F26E21] text-xs ml-0.5">®</sup>
            </div>
            <p className="text-gray-400 mb-6">
              Le leader du fitness au Maroc avec plus de 50 clubs à travers le
              Royaume.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-[#F26E21] mr-3 mt-1" size={18} />
                <span className="text-gray-300">
                  123 Avenue Mohammed V, Casablanca, Maroc
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="text-[#F26E21] mr-3" size={18} />
                <a
                  href="tel:+212522123456"
                  className="text-gray-300 hover:text-white"
                >
                  +212 522 123 456
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="text-[#F26E21] mr-3" size={18} />
                <a
                  href="mailto:contact@cityclub.ma"
                  className="text-gray-300 hover:text-white"
                >
                  contact@cityclub.ma
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white flex items-center"
                    >
                      <ChevronRight size={14} className="mr-2" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#F26E21] hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} City Club. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
