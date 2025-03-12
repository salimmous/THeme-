import React from "react";
import MainNavbar from "../layout/MainNavbar";
import HeroSection from "./HeroSection";
import ClubsSection from "./ClubsSection";
import CoachesSection from "./CoachesSection";
import CTASection from "./CTASection";
import Footer from "../layout/Footer";

const CityClubHomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <main className="flex-grow">
        <HeroSection />
        <ClubsSection />
        <CoachesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default CityClubHomePage;
