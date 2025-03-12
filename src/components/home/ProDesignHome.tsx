import React from "react";
import ProHeader from "../layout/ProHeader";
import ProHero from "./ProHero";
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
      </motion.main>

      {/* Footer */}
      <ProFooter />
    </div>
  );
};

export default ProDesignHome;
