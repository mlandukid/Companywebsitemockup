import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import logo from "figma:asset/4a62b928b7bd9b71bb18865ee7bc541016a7ac51.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900 shadow-lg py-3"
            : "bg-slate-900/95 backdrop-blur-md py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center"
            >
              <img
                src={logo}
                alt="Umcebo Consultants"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-10" : "h-12"
                }`}
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-white hover:text-yellow-500 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Contact Info & CTA - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:0790506594"
                className="flex items-center gap-2 text-white hover:text-yellow-500 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>079 050 6594</span>
              </a>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-yellow-600 hover:bg-yellow-700 text-white"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-slate-900/95 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="relative h-full flex flex-col pt-20 pb-6 px-4">
            <div className="flex flex-col gap-1 mb-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors text-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Contact Info */}
            <div className="space-y-3 pt-6 border-t border-white/20">
              <a
                href="tel:0790506594"
                className="flex items-center gap-3 text-white hover:text-yellow-500 transition-colors px-4 py-2"
              >
                <Phone className="w-5 h-5" />
                <span>079 050 6594</span>
              </a>
              <a
                href="mailto:Umceboconsultant@gmail.com"
                className="flex items-center gap-3 text-white hover:text-yellow-500 transition-colors px-4 py-2"
              >
                <Mail className="w-5 h-5" />
                <span>Umceboconsultant@gmail.com</span>
              </a>
            </div>

            <div className="mt-6 px-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-6"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}