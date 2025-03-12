import React from "react";
import ActivitySection from "./ActivitySection";

const ActivitiesShowcase = () => {
  const activities = [
    {
      title: "AQUAGYM",
      description: "L'ACTIVITÉ PHYSIQUE AUX MULTIPLES BIENFAITS",
      image:
        "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?w=800&q=80",
      backgroundColor: "bg-blue-800",
      textColor: "text-white",
    },
    {
      title: "BOXE & MMA",
      description:
        "COACHING - COURS COLLECTIFS - COURS INDIVIDUELS - APPRENTISSAGE",
      image:
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
      backgroundColor: "bg-red-800",
      textColor: "text-white",
    },
    {
      title: "CARDIO",
      description:
        "MAÎTRISE DU RYTHME CARDIAQUE ET AMÉLIORATION DE L'ENDURANCE",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      backgroundColor: "bg-green-800",
      textColor: "text-white",
    },
    {
      title: "DANSE",
      description: "L'ART DE COMPOSER DES CHORÉGRAPHIES",
      image:
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&q=80",
      backgroundColor: "bg-pink-800",
      textColor: "text-white",
    },
    {
      title: "FUNCTIONAL TRAINING",
      description:
        "RETROUVEZ VOTRE BIEN-ÊTRE EN AMÉLIORANT VOS EXPÉRIENCES SPORTIVES",
      image:
        "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&q=80",
      backgroundColor: "bg-yellow-700",
      textColor: "text-white",
    },
    {
      title: "MUSCULATION",
      description:
        "INDISPENSABLE POUR AFFINER SA TAILLE ET SOLIDIFIER SES MUSCLES",
      image:
        "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=800&q=80",
      backgroundColor: "bg-red-700",
      textColor: "text-white",
    },
    {
      title: "ZEN-FIT",
      description:
        "RETROUVEZ VOTRE BIEN-ÊTRE EN AMÉLIORANT VOS EXPÉRIENCES SPORTIVES",
      image:
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
      backgroundColor: "bg-purple-700",
      textColor: "text-white",
    },
  ];

  return (
    <div className="w-full">
      {activities.map((activity, index) => (
        <ActivitySection
          key={index}
          title={activity.title}
          description={activity.description}
          image={activity.image}
          backgroundColor={activity.backgroundColor}
          textColor={activity.textColor}
        />
      ))}
    </div>
  );
};

export default ActivitiesShowcase;
