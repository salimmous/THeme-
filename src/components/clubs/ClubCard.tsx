import React from "react";
import { MapPin, Clock, Star, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface ClubCardProps {
  id?: string;
  name?: string;
  image?: string;
  location?: string;
  rating?: number;
  openingHours?: string;
  features?: string[];
  isNew?: boolean;
  onClick?: () => void;
}

const ClubCard = ({
  id = "1",
  name = "City Club Casablanca",
  image = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
  location = "Casablanca, Morocco",
  rating = 4.8,
  openingHours = "6:00 AM - 11:00 PM",
  features = ["Pool", "Spa", "Fitness"],
  isNew = false,
  onClick = () => console.log("Club card clicked"),
}: ClubCardProps) => {
  return (
    <Card className="w-[350px] h-[200px] overflow-hidden flex flex-col bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="flex h-full">
        {/* Club Image */}
        <div className="w-1/3 relative">
          <img src={image} alt={name} className="h-full w-full object-cover" />
          {isNew && (
            <Badge
              variant="default"
              className="absolute top-2 left-2 bg-red-500"
            >
              New
            </Badge>
          )}
        </div>

        {/* Club Info */}
        <div className="w-2/3 flex flex-col justify-between">
          <CardHeader className="p-3 pb-0">
            <CardTitle className="text-lg font-bold">{name}</CardTitle>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin size={14} className="mr-1" />
              <span>{location}</span>
            </div>
          </CardHeader>

          <CardContent className="p-3 pt-0 pb-0">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Clock size={14} className="mr-1" />
              <span>{openingHours}</span>
            </div>
            <div className="flex items-center text-sm mb-2">
              <Star size={14} className="text-yellow-500 mr-1" />
              <span className="font-medium">{rating}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="p-3 pt-0 justify-end">
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 p-0 h-auto"
              onClick={onClick}
            >
              View Details <ChevronRight size={16} className="ml-1" />
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default ClubCard;
