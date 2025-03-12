import React from "react";
import NewDesignHeader from "../layout/NewDesignHeader";
import NewDesignHero from "./NewDesignHero";
import NewDesignFeatures from "./NewDesignFeatures";
import NewDesignActivities from "./NewDesignActivities";
import NewDesignClubs from "./NewDesignClubs";
import NewDesignCoaches from "./NewDesignCoaches";
import NewDesignTestimonials from "./NewDesignTestimonials";
import NewDesignCTA from "./NewDesignCTA";
import NewDesignFooter from "../layout/NewDesignFooter";

const NewDesignHome = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <NewDesignHeader />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <NewDesignHero />

        {/* Features Section */}
        <NewDesignFeatures />

        {/* Activities Section */}
        <NewDesignActivities />

        {/* Clubs Section */}
        <NewDesignClubs />

        {/* Coaches Section */}
        <NewDesignCoaches />

        {/* Testimonials Section */}
        <NewDesignTestimonials />

        {/* CTA Section */}
        <NewDesignCTA />
      </main>

      {/* Footer */}
      <NewDesignFooter />
    </div>
  );
};

export default NewDesignHome;
