import { useState } from "react";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="container mx-auto px-4 py-6 border-b border-border bg-card">
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105",
              selectedCategory === category
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;