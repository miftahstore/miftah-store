import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">ShopPro</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Your trusted destination for premium electronics and accessories. 
              We offer the latest technology with exceptional quality and customer service.
            </p>
            <div className="flex items-center gap-2 text-accent font-semibold">
              <Phone className="w-4 h-4" />
              <span>Call us: 092218897</span>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="tel:092218897" className="hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Product Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>092218897</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@shoppro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Available Nationwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2024 ShopPro. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;