import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface FooterProps {
  logoSrc?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  quickLinks?: Array<{
    title: string;
    href: string;
  }>;
  legalLinks?: Array<{
    title: string;
    href: string;
  }>;
}

const Footer = ({
  logoSrc = "/logo.png",
  socialLinks = {
    facebook: "https://facebook.com/cityclub",
    instagram: "https://instagram.com/cityclub",
    twitter: "https://twitter.com/cityclub",
    youtube: "https://youtube.com/cityclub",
  },
  contactInfo = {
    email: "contact@cityclub.ma",
    phone: "+212 522 123 456",
    address: "123 Avenue Mohammed V, Casablanca, Morocco",
  },
  quickLinks = [
    { title: "Find a Club", href: "/clubs" },
    { title: "Activities", href: "/activities" },
    { title: "Coaches", href: "/coaches" },
    { title: "Membership", href: "/membership" },
    { title: "About Us", href: "/about" },
    { title: "Careers", href: "/careers" },
  ],
  legalLinks = [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Cookie Policy", href: "/cookies" },
  ],
}: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <img
                src={logoSrc}
                alt="City Club Logo"
                className="h-10 w-auto mr-2"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://via.placeholder.com/150x50?text=City+Club";
                }}
              />
              <span className="text-xl font-bold">City Club</span>
            </div>
            <p className="text-gray-400 text-sm">
              Morocco's premier fitness network with over 50 clubs nationwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
              )}
              {socialLinks.youtube && (
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Youtube size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.email && (
                <li className="flex items-start">
                  <Mail size={18} className="text-gray-400 mr-2 mt-0.5" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              )}
              {contactInfo.phone && (
                <li className="flex items-start">
                  <Phone size={18} className="text-gray-400 mr-2 mt-0.5" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
              )}
              {contactInfo.address && (
                <li className="flex items-start">
                  <MapPin size={18} className="text-gray-400 mr-2 mt-0.5" />
                  <span className="text-gray-400 text-sm">
                    {contactInfo.address}
                  </span>
                </li>
              )}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the latest news and promotions.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} City Club. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
