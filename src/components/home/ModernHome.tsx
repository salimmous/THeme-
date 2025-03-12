import React from "react";
import ModernHeader from "../layout/ModernHeader";
import ModernHero from "./ModernHero";
import ModernFeatures from "./ModernFeatures";
import ModernActivities from "./ModernActivities";
import ModernClubMap from "./ModernClubMap";
import ModernTestimonials from "./ModernTestimonials";
import ModernCTA from "./ModernCTA";
import ModernFooter from "../layout/ModernFooter";

const ModernHome = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <ModernHeader />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <ModernHero />

        {/* Features Section */}
        <ModernFeatures />

        {/* Activities Section */}
        <ModernActivities />

        {/* Club Map Section */}
        <ModernClubMap />

        {/* Testimonials Section */}
        <ModernTestimonials />

        {/* CTA Section */}
        <ModernCTA />
      </main>

      {/* Footer */}
      <ModernFooter />
    </div>
  );
};

export default ModernHome;
