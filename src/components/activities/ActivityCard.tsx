import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface ActivityCardProps {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  category?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
  duration?: string;
  onClick?: () => void;
}

const ActivityCard = ({
  id = "1",
  title = "Yoga Flow",
  description = "Improve flexibility and mindfulness with our expert-led yoga sessions suitable for all levels.",
  image = "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&q=80",
  category = "Wellness",
  difficulty = "beginner",
  duration = "60 min",
  onClick = () => console.log("Activity clicked"),
}: ActivityCardProps) => {
  // Map difficulty to appropriate colors
  const difficultyColor = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-red-100 text-red-800",
  }[difficulty];

  return (
    <Card className="w-full max-w-[300px] overflow-hidden flex flex-col h-[350px] bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge
          className={`absolute top-2 right-2 ${difficultyColor}`}
          variant="outline"
        >
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <Badge variant="secondary" className="text-xs">
            {duration}
          </Badge>
        </div>
        <Badge variant="outline" className="mt-1 text-xs">
          {category}
        </Badge>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          onClick={onClick}
          className="w-full flex items-center justify-between bg-primary hover:bg-primary/90"
        >
          View Details
          <ArrowRight size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActivityCard;
