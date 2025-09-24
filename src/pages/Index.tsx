import { useState } from "react";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const CATEGORIES = ["All", "Audio", "Computing", "Mobile", "Wearables"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <main>
        <ProductGrid selectedCategory={selectedCategory} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
