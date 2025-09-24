import { cn } from "@/lib/utils";
import SearchBar from "./SearchBar";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange, onSearch, searchQuery }: CategoryFilterProps) => {
  return (
    <div className="container mx-auto px-4 py-6 border-b border-border bg-card">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <SearchBar onSearch={onSearch} searchQuery={searchQuery} />
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap",
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
    </div>
  );
};

export default CategoryFilter;