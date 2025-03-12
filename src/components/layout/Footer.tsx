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

const Footer = () => {
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
    <footer>
      {/* Newsletter Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h3 className="text-2xl font-bold mb-4">Restez informé</h3>
              <p className="text-gray-600">
                Inscrivez-vous à notre newsletter pour recevoir nos dernières
                actualités, promotions et conseils fitness.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F26E21] min-w-[300px]"
                />
                <Button className="bg-[#F26E21] hover:bg-[#D85A10] text-white font-bold rounded-lg">
                  S'ABONNER
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and Contact */}
            <div>
              <div className="font-bold text-3xl mb-6">
                City<span className="text-[#F26E21]">Club</span>
                <sup className="text-[#F26E21] text-xs ml-0.5">®</sup>
              </div>
              <p className="text-gray-400 mb-6">
                Le leader du fitness au Maroc avec plus de 50 clubs à travers le
                Royaume et plus de 230 000 membres satisfaits.
              </p>
              <div className="space-y-4">
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
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +212 522 123 456
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="text-[#F26E21] mr-3" size={18} />
                  <a
                    href="mailto:contact@cityclub.ma"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    contact@cityclub.ma
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      >
                        <ChevronRight
                          size={14}
                          className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"
                        />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} City Club. Tous droits réservés.
            </div>

            <div className="flex space-x-3">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
