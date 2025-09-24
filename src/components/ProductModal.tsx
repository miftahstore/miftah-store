import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

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
  if (!product) return null;

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
    </Dialog>
  );
};

export default ProductModal;