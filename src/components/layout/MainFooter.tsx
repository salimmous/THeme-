import React from "react";
import Logo from "./Logo";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const MainFooter = () => {
  const navigationLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Les clubs", href: "/clubs" },
        { label: "Activités", href: "/activites" },
        { label: "Coaching", href: "/coaching" },
        { label: "Bilan Médico-Sportif", href: "/bilan" },
        { label: "Témoignages", href: "/temoignages" },
        { label: "Plannings", href: "/plannings" },
      ],
    },
    {
      title: "Liens Utiles",
      links: [
        { label: "Entreprises", href: "/entreprises" },
        { label: "Devenir franchisé", href: "/franchise" },
        { label: "Localisations", href: "/localisations" },
        { label: "Politique de confidentialité", href: "/confidentialite" },
        { label: "Louez-nous votre local", href: "/location" },
        { label: "Faire une réclamation", href: "/reclamation" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com/cityclub" },
    { icon: <Instagram size={20} />, href: "https://instagram.com/cityclub" },
    { icon: <Youtube size={20} />, href: "https://youtube.com/cityclub" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/cityclub" },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/company/cityclub",
    },
  ];

  return (
    <footer className="w-full">
      <div className="bg-[#F26E21] py-4 text-center text-white font-bold text-xl">
        ACCÈS NON STOP 7 JOURS SUR 7 !
      </div>

      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Logo variant="light" size="large" />
              <p className="mt-2 text-gray-400">
                Le leader incontestable de la remise en forme au Maroc.
              </p>
            </div>

            {navigationLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Suivez-Nous !</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[#F26E21] flex items-center justify-center text-white hover:bg-[#D85A10] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} City Club. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
