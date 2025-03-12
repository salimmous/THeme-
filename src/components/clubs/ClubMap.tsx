import React, { useState } from "react";
import { Search, Filter, MapPin, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ClubCard from "./ClubCard";

interface Club {
  id: string;
  name: string;
  image: string;
  location: string;
  coordinates: { lat: number; lng: number };
  rating: number;
  openingHours: string;
  features: string[];
  isNew: boolean;
}

interface ClubMapProps {
  clubs?: Club[];
  onClubSelect?: (clubId: string) => void;
  selectedRegion?: string;
}

const ClubMap = ({
  clubs = [
    {
      id: "1",
      name: "City Club Casablanca Central",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
      location: "Casablanca, Morocco",
      coordinates: { lat: 33.5731, lng: -7.5898 },
      rating: 4.8,
      openingHours: "6:00 AM - 11:00 PM",
      features: ["Pool", "Spa", "Fitness"],
      isNew: true,
    },
    {
      id: "2",
      name: "City Club Rabat",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=80",
      location: "Rabat, Morocco",
      coordinates: { lat: 34.0209, lng: -6.8416 },
      rating: 4.6,
      openingHours: "5:30 AM - 10:30 PM",
      features: ["Fitness", "Yoga", "CrossFit"],
      isNew: false,
    },
    {
      id: "3",
      name: "City Club Marrakech",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&q=80",
      location: "Marrakech, Morocco",
      coordinates: { lat: 31.6295, lng: -7.9811 },
      rating: 4.9,
      openingHours: "6:00 AM - 10:00 PM",
      features: ["Pool", "Spa", "Tennis", "Fitness"],
      isNew: false,
    },
    {
      id: "4",
      name: "City Club Tangier",
      image:
        "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&q=80",
      location: "Tangier, Morocco",
      coordinates: { lat: 35.7595, lng: -5.834 },
      rating: 4.7,
      openingHours: "6:30 AM - 10:30 PM",
      features: ["Fitness", "Boxing", "Group Classes"],
      isNew: true,
    },
  ],
  onClubSelect = (clubId) => console.log(`Club selected: ${clubId}`),
  selectedRegion = "",
}: ClubMapProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("all_cities");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // All available features from all clubs
  const allFeatures = Array.from(
    new Set(clubs.flatMap((club) => club.features)),
  ).sort();

  // All available cities from all clubs
  const allCities = Array.from(
    new Set(clubs.map((club) => club.location.split(", ")[0])),
  ).sort();

  // Filter clubs based on search term, selected features, and city
  const filteredClubs = clubs.filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFeatures =
      selectedFeatures.length === 0 ||
      selectedFeatures.every((feature) => club.features.includes(feature));

    const matchesCity =
      selectedCity === "all_cities" ||
      club.location.toLowerCase().includes(selectedCity.toLowerCase());

    return matchesSearch && matchesFeatures && matchesCity;
  });

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature],
    );
  };

  const clearFilters = () => {
    setSelectedFeatures([]);
    setSelectedCity("all_cities");
    setSearchTerm("");
  };

  return (
    <div className="w-full h-[700px] bg-gray-50 flex flex-col">
      {/* Header with search and filters */}
      <div className="bg-white p-4 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Find a City Club Near You</h2>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-grow">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              placeholder="Search by club name or location"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>

          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all_cities">All Cities</SelectItem>
              {allCities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={16} />
                <span>Filters</span>
                {selectedFeatures.length > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {selectedFeatures.length}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Club Features</h3>
                  {selectedFeatures.length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="h-auto py-1 px-2 text-xs"
                    >
                      Clear All
                    </Button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {allFeatures.map((feature) => (
                    <Badge
                      key={feature}
                      variant={
                        selectedFeatures.includes(feature)
                          ? "default"
                          : "outline"
                      }
                      className={cn(
                        "cursor-pointer",
                        selectedFeatures.includes(feature)
                          ? "bg-primary"
                          : "hover:bg-gray-100",
                      )}
                      onClick={() => toggleFeature(feature)}
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {(searchTerm || selectedFeatures.length > 0 || selectedCity) && (
            <Button
              variant="ghost"
              size="icon"
              onClick={clearFilters}
              className="h-10 w-10"
            >
              <X size={16} />
            </Button>
          )}
        </div>
      </div>

      {/* Map and club list container */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Interactive Map */}
        <div className="w-full md:w-2/3 h-[300px] md:h-full bg-gray-200 relative">
          {/* This would be replaced with an actual map component */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="mx-auto text-primary mb-2" />
              <p className="text-gray-600">Interactive Morocco Map</p>
              <p className="text-sm text-gray-500">
                Showing {filteredClubs.length} club locations
              </p>
            </div>
          </div>

          {/* Map markers would be rendered here */}
          {filteredClubs.map((club) => (
            <div
              key={club.id}
              className="absolute w-3 h-3 bg-primary rounded-full cursor-pointer hover:w-4 hover:h-4 transition-all"
              style={{
                left: `${(club.coordinates.lng + 10) * 3}%`,
                top: `${(club.coordinates.lat - 30) * 5}%`,
              }}
              onClick={() => onClubSelect(club.id)}
              title={club.name}
            />
          ))}
        </div>

        {/* Club List */}
        <div className="w-full md:w-1/3 bg-white overflow-y-auto p-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Club Locations</h3>
              <span className="text-sm text-gray-500">
                {filteredClubs.length} results
              </span>
            </div>

            {filteredClubs.length > 0 ? (
              <div className="space-y-4">
                {filteredClubs.map((club) => (
                  <div key={club.id} onClick={() => onClubSelect(club.id)}>
                    <ClubCard
                      id={club.id}
                      name={club.name}
                      image={club.image}
                      location={club.location}
                      rating={club.rating}
                      openingHours={club.openingHours}
                      features={club.features}
                      isNew={club.isNew}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  No clubs found matching your criteria
                </p>
                <Button variant="link" onClick={clearFilters} className="mt-2">
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubMap;
