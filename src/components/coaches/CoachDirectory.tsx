import React, { useState } from "react";
import { Search, Filter, MapPin } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CoachCard from "./CoachCard";

interface CoachDirectoryProps {
  coaches?: Coach[];
  locations?: string[];
  specializations?: string[];
  onFilterChange?: (filters: CoachFilters) => void;
}

interface Coach {
  id: string;
  name: string;
  image: string;
  specializations: string[];
  certifications: string[];
  experience: number;
  rating: number;
  location: string;
}

interface CoachFilters {
  search: string;
  location: string;
  specialization: string;
  view: "grid" | "list";
}

const CoachDirectory = ({
  coaches = [
    {
      id: "1",
      name: "Sarah Johnson",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=coach1",
      specializations: ["Strength Training", "HIIT", "Yoga"],
      certifications: ["NASM Certified", "Yoga Alliance RYT-200"],
      experience: 5,
      rating: 4.8,
      location: "Casablanca",
    },
    {
      id: "2",
      name: "Mohammed Ali",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=coach2",
      specializations: ["Boxing", "Functional Training", "Nutrition"],
      certifications: ["ISSA Certified", "Boxing Federation Certified"],
      experience: 8,
      rating: 4.9,
      location: "Rabat",
    },
    {
      id: "3",
      name: "Leila Benali",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=coach3",
      specializations: ["Pilates", "Barre", "Rehabilitation"],
      certifications: ["Pilates Method Alliance", "Physical Therapy Cert"],
      experience: 6,
      rating: 4.7,
      location: "Marrakech",
    },
    {
      id: "4",
      name: "Karim Tazi",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=coach4",
      specializations: ["CrossFit", "Olympic Lifting", "Endurance"],
      certifications: ["CrossFit Level 2", "USAW Sports Performance"],
      experience: 7,
      rating: 4.6,
      location: "Casablanca",
    },
    {
      id: "5",
      name: "Yasmine Idrissi",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=coach5",
      specializations: ["Zumba", "Dance Fitness", "Aerobics"],
      certifications: ["Zumba Instructor", "AFAA Group Fitness"],
      experience: 4,
      rating: 4.9,
      location: "Tangier",
    },
    {
      id: "6",
      name: "Omar Berrada",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=coach6",
      specializations: ["Swimming", "Triathlon", "Endurance"],
      certifications: ["ASCA Level 2", "Triathlon Coach Certified"],
      experience: 9,
      rating: 4.7,
      location: "Agadir",
    },
  ],
  locations = [
    "All Locations",
    "Casablanca",
    "Rabat",
    "Marrakech",
    "Tangier",
    "Agadir",
  ],
  specializations = [
    "All Specializations",
    "Strength Training",
    "HIIT",
    "Yoga",
    "Boxing",
    "Pilates",
    "CrossFit",
    "Zumba",
    "Swimming",
  ],
  onFilterChange = () => console.log("Filter changed"),
}: CoachDirectoryProps) => {
  const [filters, setFilters] = useState<CoachFilters>({
    search: "",
    location: "All Locations",
    specialization: "All Specializations",
    view: "grid",
  });

  const handleFilterChange = (key: keyof CoachFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const filteredCoaches = coaches.filter((coach) => {
    // Filter by search term
    if (
      filters.search &&
      !coach.name.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    // Filter by location
    if (
      filters.location !== "All Locations" &&
      coach.location !== filters.location
    ) {
      return false;
    }

    // Filter by specialization
    if (
      filters.specialization !== "All Specializations" &&
      !coach.specializations.includes(filters.specialization)
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="w-full bg-gray-50 p-6 rounded-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Our Expert Coaches</h2>
        <p className="text-gray-600">
          Discover our certified fitness professionals ready to help you achieve
          your goals
        </p>
      </div>

      {/* Filters Section */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search coaches..."
            className="pl-10"
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-48">
            <Select
              value={filters.location}
              onValueChange={(value) => handleFilterChange("location", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full sm:w-56">
            <Select
              value={filters.specialization}
              onValueChange={(value) =>
                handleFilterChange("specialization", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Specialization" />
              </SelectTrigger>
              <SelectContent>
                {specializations.map((spec) => (
                  <SelectItem key={spec} value={spec}>
                    {spec}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* View Toggle */}
      <div className="mb-6">
        <Tabs
          defaultValue="grid"
          value={filters.view}
          onValueChange={(value) =>
            handleFilterChange("view", value as "grid" | "list")
          }
          className="w-full"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Filter className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-500">
                {filteredCoaches.length} coaches found
              </span>
            </div>
            <TabsList>
              <TabsTrigger value="grid">Grid</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="grid" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCoaches.map((coach) => (
                <CoachCard
                  key={coach.id}
                  name={coach.name}
                  image={coach.image}
                  specializations={coach.specializations}
                  certifications={coach.certifications}
                  experience={coach.experience}
                  rating={coach.rating}
                  location={coach.location}
                  onViewProfile={() =>
                    console.log(`View profile for ${coach.name}`)
                  }
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-6">
            <div className="space-y-4">
              {filteredCoaches.map((coach) => (
                <div
                  key={coach.id}
                  className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="w-full md:w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-lg font-bold">{coach.name}</h3>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>{coach.location}</span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {coach.specializations.map((spec, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">
                        {coach.experience} years experience • {coach.rating}{" "}
                        rating
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        console.log(`View profile for ${coach.name}`)
                      }
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CoachDirectory;
