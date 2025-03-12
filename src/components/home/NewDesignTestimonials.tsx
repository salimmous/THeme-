import React from "react";
import { Button } from "../ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const NewDesignTestimonials = () => {
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
    <section className="py-24 bg-[#F26E21]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-20 bg-white"></div>
            <span className="text-white/80 font-medium">TÉMOIGNAGES</span>
            <div className="h-1 w-20 bg-white"></div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            CE QUE DISENT NOS MEMBRES
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Découvrez les histoires inspirantes de nos membres qui ont
            transformé leur vie grâce à City Club
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 border-white text-white hover:bg-white/20 rounded-full hidden md:flex"
          >
            <ChevronLeft size={24} />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 border-white text-white hover:bg-white/20 rounded-full hidden md:flex"
          >
            <ChevronRight size={24} />
          </Button>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl p-8 transform transition-transform duration-300 hover:-translate-y-2"
              >
                <Quote className="text-[#F26E21]/20 w-12 h-12 mb-4" />

                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 italic mb-6 min-h-[120px]">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[#F26E21]">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-xs text-[#F26E21] font-medium">
                      {testimonial.club}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {[0, 1, 2].map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === 0 ? "bg-white" : "bg-white/30"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewDesignTestimonials;
