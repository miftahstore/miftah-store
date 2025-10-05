import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  if (!product) return null;

  const handleVariantClick = (index: number) => {
    setSelectedVariantIndex(index);
    setIsGalleryOpen(true);
  };

  const handlePrevVariant = () => {
    setSelectedVariantIndex((prev) => 
      prev === 0 ? product.variants.length - 1 : prev - 1
    );
  };

  const handleNextVariant = () => {
    setSelectedVariantIndex((prev) => 
      prev === product.variants.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0">
        <DialogHeader className="p-6 pb-2">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold text-foreground">
              {product.name} - Color Options
            </DialogTitle>
            <button
              onClick={onClose}
              className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="px-6 pb-6">
          <div className="grid grid-cols-3 gap-4 mt-4">
            {product.variants.map((variant, index) => (
              <div
                key={index}
                onClick={() => handleVariantClick(index)}
                className="group cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square rounded-lg border-2 border-border hover:border-primary overflow-hidden bg-card">
                  <img
                    src={variant.image}
                    alt={`${product.name} - ${variant.color}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-center mt-2 text-muted-foreground font-medium">
                  {variant.color}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-2xl font-bold text-primary mb-2">{product.price}</p>
            <p className="text-sm text-muted-foreground">
              Call <a href="tel:092218897" className="text-accent font-medium hover:underline">092218897</a> to order
            </p>
          </div>
        </div>
      </DialogContent>

      {/* Gallery Modal */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="sm:max-w-[90vw] md:max-w-[800px] p-0">
          <DialogHeader className="p-4 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-lg font-semibold text-foreground">
                {product.name} - {product.variants[selectedVariantIndex].color}
              </DialogTitle>
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </DialogHeader>
          
          <div className="relative p-6">
            {/* Main variant image */}
            <div className="aspect-square max-h-[70vh] rounded-lg overflow-hidden bg-card border-2 border-border mb-6">
              <img
                src={product.variants[selectedVariantIndex].image}
                alt={`${product.name} - ${product.variants[selectedVariantIndex].color}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Navigation buttons */}
            {product.variants.length > 1 && (
              <>
                <button
                  onClick={handlePrevVariant}
                  className="absolute left-8 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-3 transition-all hover:scale-110"
                  aria-label="Previous variant"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextVariant}
                  className="absolute right-8 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-3 transition-all hover:scale-110"
                  aria-label="Next variant"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Thumbnail strip */}
            <div className="flex gap-3 justify-center">
              {product.variants.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVariantIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === selectedVariantIndex
                      ? 'border-primary scale-110'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img
                    src={variant.image}
                    alt={variant.color}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
};

export default ProductModal;