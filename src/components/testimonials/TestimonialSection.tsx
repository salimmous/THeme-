import React from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface TestimonialProps {
  id?: string;
  name?: string;
  avatar?: string;
  role?: string;
  quote?: string;
  rating?: number;
  club?: string;
}

interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialProps[];
}

const TestimonialSection = ({
  title = "What Our Members Say",
  subtitle = "Hear from the people who have transformed their lives with City Club",
  testimonials = [
    {
      id: "1",
      name: "Amina Benali",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amina",
      role: "Member since 2020",
      quote:
        "City Club has completely transformed my fitness journey. The trainers are exceptional and the facilities are world-class. I've achieved results I never thought possible!",
      rating: 5,
      club: "City Club Casablanca",
    },
    {
      id: "2",
      name: "Karim Tazi",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karim",
      role: "Member since 2019",
      quote:
        "The variety of classes and the supportive community make City Club stand out from other gyms. I look forward to my workouts every day!",
      rating: 4,
      club: "City Club Rabat",
    },
    {
      id: "3",
      name: "Leila Mansouri",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leila",
      role: "Member since 2021",
      quote:
        "As a busy professional, I appreciate the flexible hours and the quality of equipment at City Club. It's become an essential part of my wellness routine.",
      rating: 5,
      club: "City Club Marrakech",
    },
    {
      id: "4",
      name: "Youssef El Amrani",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Youssef",
      role: "Member since 2018",
      quote:
        "The personal training sessions at City Club have helped me reach my fitness goals faster than I expected. The coaches are knowledgeable and motivating.",
      rating: 5,
      club: "City Club Tangier",
    },
    {
      id: "5",
      name: "Fatima Zahra",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
      role: "Member since 2022",
      quote:
        "I love the community atmosphere at City Club. The staff remembers your name and the other members are friendly and supportive.",
      rating: 4,
      club: "City Club Agadir",
    },
  ],
}: TestimonialSectionProps) => {
  return (
    <section className="py-16 px-4 bg-gray-50 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative px-10"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialProps;
}) => {
  const { name, avatar, role, quote, rating, club } = testimonial;

  return (
    <Card className="h-full bg-white">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 flex justify-between items-start">
          <Quote className="text-primary w-10 h-10 opacity-20" />
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < (rating || 0) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
              />
            ))}
          </div>
        </div>

        <p className="text-gray-700 flex-grow mb-6 italic">"{quote}"</p>

        <div className="flex items-center mt-auto">
          <Avatar className="h-12 w-12 border-2 border-primary">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name?.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
            <p className="text-xs text-primary">{club}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialSection;
