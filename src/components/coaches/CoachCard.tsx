import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Award, Calendar } from "lucide-react";

interface CoachCardProps {
  name?: string;
  image?: string;
  specializations?: string[];
  certifications?: string[];
  experience?: number;
  rating?: number;
  location?: string;
  onViewProfile?: () => void;
}

const CoachCard = ({
  name = "Sarah Johnson",
  image = "https://api.dicebear.com/7.x/avataaars/svg?seed=coach1",
  specializations = ["Strength Training", "HIIT", "Yoga"],
  certifications = ["NASM Certified", "Yoga Alliance RYT-200"],
  experience = 5,
  rating = 4.8,
  location = "Casablanca",
  onViewProfile = () => console.log("View profile clicked"),
}: CoachCardProps) => {
  return (
    <Card className="w-[280px] h-[380px] overflow-hidden flex flex-col bg-white">
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={`Coach ${name}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span>{rating}</span>
        </div>
      </div>

      <CardHeader className="pb-2">
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>{experience} years experience</span>
        </div>
        <div className="text-sm text-gray-600">{location}</div>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="mb-3">
          <p className="text-xs text-gray-500 mb-1">Specializations</p>
          <div className="flex flex-wrap gap-1">
            {specializations.map((spec, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {spec}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-500 mb-1">Certifications</p>
          <ul className="text-xs text-gray-700">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-center gap-1 mb-1">
                <Award className="w-3 h-3 text-primary" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="pt-2">
        <Button onClick={onViewProfile} className="w-full">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CoachCard;
