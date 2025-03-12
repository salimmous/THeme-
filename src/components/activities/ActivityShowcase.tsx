import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Search, Filter, ArrowUpDown } from "lucide-react";
import ActivityCard from "./ActivityCard";

interface ActivityShowcaseProps {
  activities?: Activity[];
  title?: string;
  description?: string;
}

interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
}

const ActivityShowcase = ({
  activities = defaultActivities,
  title = "Our Fitness Activities",
  description = "Discover a wide range of fitness activities designed to help you achieve your health and wellness goals.",
}: ActivityShowcaseProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  // Get unique categories from activities
  const categories = [
    "all",
    ...new Set(activities.map((activity) => activity.category)),
  ];

  // Filter activities based on search term, category, and difficulty
  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || activity.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "all" ||
      activity.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  // Sort activities based on sort order
  const sortedActivities = [...filteredActivities].sort((a, b) => {
    if (sortOrder === "name-asc") return a.title.localeCompare(b.title);
    if (sortOrder === "name-desc") return b.title.localeCompare(a.title);
    if (sortOrder === "difficulty-asc") {
      const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };
      return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    }
    if (sortOrder === "difficulty-desc") {
      const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };
      return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
    }
    return 0; // Default order (as provided)
  });

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-64">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              placeholder="Search activities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-500" />
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Select
                value={selectedDifficulty}
                onValueChange={setSelectedDifficulty}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <ArrowUpDown size={18} className="text-gray-500" />
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="difficulty-asc">
                    Difficulty (Low-High)
                  </SelectItem>
                  <SelectItem value="difficulty-desc">
                    Difficulty (High-Low)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Activity Categories Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="flex flex-wrap justify-center mb-6">
            <TabsTrigger value="all">All Activities</TabsTrigger>
            <TabsTrigger value="cardio">Cardio</TabsTrigger>
            <TabsTrigger value="strength">Strength</TabsTrigger>
            <TabsTrigger value="wellness">Wellness</TabsTrigger>
            <TabsTrigger value="aquatic">Aquatic</TabsTrigger>
            <TabsTrigger value="group">Group Classes</TabsTrigger>
          </TabsList>

          {/* All Activities Tab Content */}
          <TabsContent value="all" className="mt-0">
            {sortedActivities.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sortedActivities.map((activity) => (
                  <ActivityCard
                    key={activity.id}
                    id={activity.id}
                    title={activity.title}
                    description={activity.description}
                    image={activity.image}
                    category={activity.category}
                    difficulty={activity.difficulty}
                    duration={activity.duration}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No activities found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedDifficulty("all");
                    setSortOrder("default");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Other category tabs would filter by category */}
          <TabsContent value="cardio" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedActivities
                .filter(
                  (activity) => activity.category.toLowerCase() === "cardio",
                )
                .map((activity) => (
                  <ActivityCard
                    key={activity.id}
                    id={activity.id}
                    title={activity.title}
                    description={activity.description}
                    image={activity.image}
                    category={activity.category}
                    difficulty={activity.difficulty}
                    duration={activity.duration}
                  />
                ))}
            </div>
          </TabsContent>

          {/* Similar TabsContent blocks for other categories */}
          <TabsContent value="strength" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedActivities
                .filter(
                  (activity) => activity.category.toLowerCase() === "strength",
                )
                .map((activity) => (
                  <ActivityCard key={activity.id} {...activity} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="wellness" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedActivities
                .filter(
                  (activity) => activity.category.toLowerCase() === "wellness",
                )
                .map((activity) => (
                  <ActivityCard key={activity.id} {...activity} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="aquatic" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedActivities
                .filter(
                  (activity) => activity.category.toLowerCase() === "aquatic",
                )
                .map((activity) => (
                  <ActivityCard key={activity.id} {...activity} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="group" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedActivities
                .filter(
                  (activity) =>
                    activity.category.toLowerCase() === "group classes",
                )
                .map((activity) => (
                  <ActivityCard key={activity.id} {...activity} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button size="lg" className="px-8">
            View All Activities
          </Button>
        </div>
      </div>
    </div>
  );
};

// Default activities data
const defaultActivities: Activity[] = [
  {
    id: "1",
    title: "Yoga Flow",
    description:
      "Improve flexibility and mindfulness with our expert-led yoga sessions suitable for all levels.",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&q=80",
    category: "Wellness",
    difficulty: "beginner",
    duration: "60 min",
  },
  {
    id: "2",
    title: "HIIT Workout",
    description:
      "High-intensity interval training to maximize calorie burn and improve cardiovascular fitness.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",
    category: "Cardio",
    difficulty: "advanced",
    duration: "45 min",
  },
  {
    id: "3",
    title: "Strength Training",
    description:
      "Build muscle and increase strength with our comprehensive weight training program.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
    category: "Strength",
    difficulty: "intermediate",
    duration: "50 min",
  },
  {
    id: "4",
    title: "Aqua Aerobics",
    description:
      "Low-impact water exercises perfect for joint health and overall fitness improvement.",
    image:
      "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?w=400&q=80",
    category: "Aquatic",
    difficulty: "beginner",
    duration: "55 min",
  },
  {
    id: "5",
    title: "Spin Class",
    description:
      "High-energy indoor cycling class set to motivating music for an effective cardio workout.",
    image:
      "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=400&q=80",
    category: "Cardio",
    difficulty: "intermediate",
    duration: "45 min",
  },
  {
    id: "6",
    title: "Pilates",
    description:
      "Core-strengthening exercises that improve posture, balance, and overall body awareness.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",
    category: "Wellness",
    difficulty: "beginner",
    duration: "50 min",
  },
  {
    id: "7",
    title: "Boxing",
    description:
      "Learn boxing techniques while getting a full-body workout that improves strength and agility.",
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&q=80",
    category: "Strength",
    difficulty: "advanced",
    duration: "60 min",
  },
  {
    id: "8",
    title: "Zumba",
    description:
      "Dance-based fitness class that's fun, energetic, and makes you feel amazing.",
    image:
      "https://images.unsplash.com/photo-1517130038641-a774d04afb3c?w=400&q=80",
    category: "Group Classes",
    difficulty: "beginner",
    duration: "45 min",
  },
];

export default ActivityShowcase;
