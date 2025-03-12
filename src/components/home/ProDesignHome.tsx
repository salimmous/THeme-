import React from "react";
import ProHeader from "../layout/ProHeader";
import ProHero from "./ProHero";
import ProFeatures from "./ProFeatures";
import ProActivities from "./ProActivities";
import ProClubs from "./ProClubs";
import ProCoaches from "./ProCoaches";
import ProTestimonials from "./ProTestimonials";
import ProCTA from "./ProCTA";
import ProFooter from "../layout/ProFooter";
import { motion } from "framer-motion";

const ProDesignHome = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-auto">
      {/* Header */}
      <ProHeader />

      {/* Main Content */}
      <motion.main
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <ProHero />

        {/* Features Section */}
        <ProFeatures />

        {/* Activities Section */}
        <ProActivities />

        {/* Clubs Section */}
        <ProClubs />

        {/* Coaches Section */}
        <ProCoaches />

        {/* Testimonials Section */}
        <ProTestimonials />

        {/* CTA Section */}
        <ProCTA />
      </motion.main>

      {/* Footer */}
      <ProFooter />
    </div>
  );
};

export default ProDesignHome;
