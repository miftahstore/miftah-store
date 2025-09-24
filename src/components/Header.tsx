import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="ShopPro"
              className="h-12 w-auto"
            />
          </div>

          {/* Call to Action */}
          <a
            href="tel:092218897"
            className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 phone-pulse shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Now:</span>
            <span className="font-bold">092218897</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;