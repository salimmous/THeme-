import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Newsletter Section */}
      <div className="bg-orange-500 py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-4">
            S'INSCRIRE À NOTRE NEWSLETTER
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="px-4 py-2 rounded focus:outline-none text-gray-800"
            />
            <Button className="bg-gray-800 hover:bg-gray-700 text-white">
              S'inscrire
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">My Blog</h2>
            <p className="text-gray-400 mb-4">
              Le leader du fitness au Maroc avec plus de 50 clubs à travers le
              Royaume.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Clubs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Activities
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Coaches
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Avenue Mohammed V, Casablanca</li>
              <li>+212 522 123 456</li>
              <li>contact@cityclub.ma</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} City Club. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
