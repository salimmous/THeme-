import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

interface ActivitySectionProps {
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  textColor?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ActivitySection = ({
  title,
  description,
  image,
  backgroundColor,
  textColor = "text-white",
  buttonText = "ESSAYER L'ACTIVITÉ",
  onButtonClick = () => console.log("Activity button clicked"),
}: ActivitySectionProps) => {
  return (
    <section className={`w-full py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h2
              className={`text-4xl md:text-5xl font-extrabold mb-4 ${textColor}`}
            >
              {title}
            </h2>
            <p className={`text-lg mb-6 ${textColor} opacity-90`}>
              {description}
            </p>
            <Button
              onClick={onButtonClick}
              className="bg-[#F26E21] hover:bg-[#D85A10] text-white px-6 py-2 rounded-md font-medium"
            >
              {buttonText}
            </Button>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-black/30 text-white border-white hover:bg-black/50 rounded-full"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-black/30 text-white border-white hover:bg-black/50 rounded-full"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"}`}
                  />
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-4xl md:text-6xl font-bold tracking-wider">
                  {title.split(" ")[0]}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
