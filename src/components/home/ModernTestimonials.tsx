import React from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "../ui/button";

const ModernTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amina Benali",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amina",
      role: "Membre depuis 2020",
      quote:
        "City Club a complètement transformé mon parcours fitness. Les coachs sont exceptionnels et les installations sont de classe mondiale. J'ai atteint des résultats que je n'aurais jamais cru possibles !",
      rating: 5,
      club: "City Club Casablanca",
    },
    {
      id: 2,
      name: "Karim Tazi",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karim",
      role: "Membre depuis 2019",
      quote:
        "La variété des cours et la communauté solidaire font que City Club se démarque des autres salles de sport. J'attends avec impatience mes entraînements chaque jour !",
      rating: 5,
      club: "City Club Rabat",
    },
    {
      id: 3,
      name: "Leila Mansouri",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leila",
      role: "Membre depuis 2021",
      quote:
        "En tant que professionnelle occupée, j'apprécie les horaires flexibles et la qualité des équipements chez City Club. C'est devenu une partie essentielle de ma routine bien-être.",
      rating: 5,
      club: "City Club Marrakech",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            CE QUE DISENT <span className="text-[#F26E21]">NOS MEMBRES</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos membres qui ont transformé leur vie
            grâce à City Club
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full border-2 border-[#F26E21]"
                      />
                      <div className="ml-3">
                        <h3 className="font-bold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < testimonial.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="text-[#F26E21] text-sm font-medium">
                    {testimonial.club}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - For larger screens */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white border-gray-200 hover:bg-gray-100 rounded-full shadow-md"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white border-gray-200 hover:bg-gray-100 rounded-full shadow-md"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-[#F26E21] hover:bg-[#D85A10] text-white font-bold px-6 py-3 rounded-md">
            VOIR TOUS LES TÉMOIGNAGES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModernTestimonials;
