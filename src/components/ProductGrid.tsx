import { useState, useEffect } from "react";
import { ShuffleIcon } from "lucide-react";
import ProductModal from "./ProductModal";

// Import product images
import headphonesBlack from "@/assets/products/headphones-black.jpg";
import headphonesWhite from "@/assets/products/headphones-white.jpg";
import headphonesRed from "@/assets/products/headphones-red.jpg";
import laptopSilver from "@/assets/products/laptop-silver.jpg";
import smartphoneBlack from "@/assets/products/smartphone-black.jpg";
import smartwatchBlack from "@/assets/products/smartwatch-black.jpg";
import earbudsWhite from "@/assets/products/earbuds-white.jpg";
import tabletSilver from "@/assets/products/tablet-silver.jpg";

interface ProductVariant {
  color: string;
  image: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  variants: ProductVariant[];
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: "$299.99",
    image: headphonesBlack,
    variants: [
      { color: "Midnight Black", image: headphonesBlack },
      { color: "Pearl White", image: headphonesWhite },
      { color: "Ruby Red", image: headphonesRed },
    ]
  },
  {
    id: 2,
    name: "Professional Laptop",
    price: "$1,299.99",
    image: laptopSilver,
    variants: [
      { color: "Silver", image: laptopSilver },
      { color: "Space Gray", image: laptopSilver },
      { color: "Gold", image: laptopSilver },
    ]
  },
  {
    id: 3,
    name: "Flagship Smartphone",
    price: "$899.99",
    image: smartphoneBlack,
    variants: [
      { color: "Obsidian Black", image: smartphoneBlack },
      { color: "Arctic Silver", image: smartphoneBlack },
      { color: "Deep Blue", image: smartphoneBlack },
    ]
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    price: "$399.99",
    image: smartwatchBlack,
    variants: [
      { color: "Black Sport", image: smartwatchBlack },
      { color: "Silver Steel", image: smartwatchBlack },
      { color: "Rose Gold", image: smartwatchBlack },
    ]
  },
  {
    id: 5,
    name: "True Wireless Earbuds",
    price: "$179.99",
    image: earbudsWhite,
    variants: [
      { color: "Pure White", image: earbudsWhite },
      { color: "Charcoal Black", image: earbudsWhite },
      { color: "Sky Blue", image: earbudsWhite },
    ]
  },
  {
    id: 6,
    name: "Pro Tablet Device",
    price: "$699.99",
    image: tabletSilver,
    variants: [
      { color: "Silver", image: tabletSilver },
      { color: "Space Gray", image: tabletSilver },
      { color: "Rose Gold", image: tabletSilver },
    ]
  },
];

const ProductGrid = () => {
  const [products, setProducts] = useState(PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  // Shuffle products every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsShuffling(true);
      setTimeout(() => {
        setProducts(prev => {
          const shuffled = [...prev];
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }
          return shuffled;
        });
        setIsShuffling(false);
      }, 300);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
          {isShuffling && (
            <div className="flex items-center text-muted-foreground text-sm">
              <ShuffleIcon className="w-4 h-4 mr-2 animate-spin" />
              Refreshing...
            </div>
          )}
        </div>
        
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 transition-all duration-500 ${
          isShuffling ? 'opacity-70 scale-98' : 'opacity-100 scale-100'
        }`}>
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product)}
              className={`group cursor-pointer bg-card rounded-lg border border-border hover:border-primary shadow-product hover:shadow-product-hover transition-all duration-300 hover:-translate-y-1 ${
                isShuffling ? 'product-grid-animate' : ''
              }`}
            >
              <div className="aspect-square p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 pt-2">
                <h3 className="font-semibold text-sm text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-primary">{product.price}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Tap for color options
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
      />
    </>
  );
};

export default ProductGrid;