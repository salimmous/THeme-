import React from "react";
import MainNavbar from "./layout/MainNavbar";
import HeroBanner from "./home/HeroBanner";
import CityClubIntro from "./home/CityClubIntro";
import ClubNetwork from "./home/ClubNetwork";
import ActivitiesShowcase from "./home/ActivitiesShowcase";
import CertifiedCoaches from "./home/CertifiedCoaches";
import MedicalAssessment from "./home/MedicalAssessment";
import CommunitySection from "./home/CommunitySection";
import MainFooter from "./layout/MainFooter";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <MainNavbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Banner */}
        <HeroBanner />

        {/* City Club Intro */}
        <CityClubIntro />

        {/* Club Network */}
        <ClubNetwork />

        {/* Activities Showcase */}
        <ActivitiesShowcase />

        {/* Certified Coaches */}
        <CertifiedCoaches />

        {/* Medical Assessment */}
        <MedicalAssessment />

        {/* Community Section */}
        <CommunitySection />
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  );
};

export default Home;
