import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-24 right-6 z-50 bg-slate-900 hover:bg-yellow-600 text-white rounded-full w-11 h-11 flex items-center justify-center shadow-lg hover:shadow-yellow-600/30 transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-yellow-600"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
