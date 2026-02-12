import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (format: country code + number, no spaces or special chars)
    const phoneNumber = "27760202710"; // South Africa country code (27) + 0760202710
    const message = encodeURIComponent(
      "Hi Umcebo Consultants, I'm interested in learning more about your compliance services."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Info Tooltip */}
      {isExpanded && (
        <div className="absolute bottom-full right-0 mb-4 animate-in slide-in-from-bottom-2 fade-in">
          <div className="bg-white rounded-lg shadow-2xl p-4 max-w-xs border border-slate-200">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-slate-900 mb-1">Chat with us!</h4>
                <p className="text-sm text-slate-600">
                  Get instant answers about our compliance services
                </p>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-slate-400 hover:text-slate-600 flex-shrink-0"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-slate-200 transform rotate-45"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center gap-2"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        
        {/* Icon */}
        <MessageCircle className="w-6 h-6 relative z-10" />
        
        {/* Optional: Show "Chat" text on hover on larger screens */}
        <span className="hidden group-hover:inline-block relative z-10 pr-1 animate-in slide-in-from-left-2 fade-in">
          Chat
        </span>
      </button>
    </div>
  );
}
