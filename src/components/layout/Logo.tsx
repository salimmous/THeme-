import React from "react";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "small" | "medium" | "large";
}

const Logo = ({ variant = "dark", size = "medium" }: LogoProps) => {
  const textColor = variant === "light" ? "text-white" : "text-black";
  const orangeColor = "text-[#F26E21]";

  const sizeClasses = {
    small: "text-xl",
    medium: "text-2xl",
    large: "text-4xl",
  };

  return (
    <div className="flex items-center">
      <span className={`font-bold ${sizeClasses[size]} ${textColor}`}>
        City<span className={orangeColor}>Club</span>
        <sup className={`${orangeColor} text-xs ml-0.5`}>®</sup>
      </span>
    </div>
  );
};

export default Logo;
