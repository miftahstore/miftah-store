import { useState, useCallback } from "react";
import { Search, X } from "lucide-react";
import { z } from "zod";

// Input validation schema
const searchSchema = z.object({
  query: z.string()
    .trim()
    .max(50, "Search query must be less than 50 characters")
});

interface SearchBarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const SearchBar = ({ onSearch, searchQuery }: SearchBarProps) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const [error, setError] = useState<string>("");

  const handleSearch = useCallback((value: string) => {
    try {
      // Validate input
      const validatedInput = searchSchema.parse({ query: value });
      const sanitizedQuery = validatedInput.query;
      
      setError("");
      setLocalQuery(sanitizedQuery);
      onSearch(sanitizedQuery);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        setError(validationError.errors[0]?.message || "Invalid search query");
      } else {
        setError("Invalid search query");
      }
    }
  }, [onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalQuery(value);
    
    // Debounced search
    const timeoutId = setTimeout(() => {
      handleSearch(value);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  };

  const handleClear = () => {
    setLocalQuery("");
    setError("");
    onSearch("");
  };

  return (
    <div className="flex-1 max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <input
          type="text"
          value={localQuery}
          onChange={handleInputChange}
          placeholder="Search products..."
          maxLength={50}
          className="w-full pl-10 pr-10 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          aria-label="Search products"
        />
        {localQuery && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      {error && (
        <p className="text-destructive text-sm mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default SearchBar;