import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    alert("Thank you for your interest! We will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900">Get In Touch</h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Ready to transform your compliance challenges into opportunities? Contact us today for a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6 text-slate-900">Contact Information</h3>
              <p className="text-slate-600 mb-8">
                We're here to help your business achieve compliance excellence. Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-yellow-600 transition-colors">
                <div className="bg-yellow-600 p-3 rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Call Us</div>
                  <a href="tel:0714117521" className="text-slate-900 hover:text-yellow-600 transition-colors">
                    071 411 7521
                  </a>
                  <br />
                  <a href="tel:0712865406" className="text-slate-900 hover:text-yellow-600 transition-colors">
                    071 286 5406
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-yellow-600 transition-colors">
                <div className="bg-yellow-600 p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Email Us</div>
                  <a href="mailto:Umceboconsultant@gmail.com" className="text-slate-900 hover:text-yellow-600 transition-colors break-all">
                    Umceboconsultant@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-yellow-600 transition-colors">
                <div className="bg-yellow-600 p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Visit Us</div>
                  <div className="text-slate-900">
                    62 van Santen Drive<br />
                    Horizon View, Roodepoort<br />
                    South Africa
                  </div>
                </div>
              </div>

              {/* Registration */}
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="text-sm text-slate-600">
                  <span className="text-slate-900">Registration Number:</span> 2025/793132/07
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aWN1bHR1cmFsJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDF8fHx8MTc2MzM3NjE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Multicultural business team"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-lg">
            <h3 className="text-2xl mb-6 text-slate-900">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-slate-700">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-slate-700">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-slate-700">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="076 123 4567"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm mb-2 text-slate-700">
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-slate-700">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your compliance needs..."
                  className="w-full min-h-32"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-6 group"
              >
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>

        {/* Full-Width Dark Map */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-600 p-2 rounded-lg">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl text-slate-900">Our Location</h3>
            <div className="flex-1 h-px bg-slate-200 ml-2"></div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-yellow-600/40"
               style={{ boxShadow: "0 0 0 1px rgb(202 138 4 / 0.4), 0 25px 50px -12px rgb(0 0 0 / 0.4)" }}>
            {/* Dark overlay gradient at bottom for address card */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />

            {/* Address card overlay */}
            <div className="absolute bottom-5 left-5 z-20 bg-slate-900/95 backdrop-blur-sm border border-yellow-600/50 rounded-xl px-5 py-4 shadow-xl">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium leading-snug">
                    62 van Santen Drive
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">Horizon View, Roodepoort, South Africa</p>
                </div>
              </div>
            </div>

            <iframe
              title="Umcebo Consultants Location"
              src="https://maps.google.com/maps?q=62+van+Santen+Drive,+Horizon+View,+Roodepoort,+South+Africa&output=embed"
              width="100%"
              height="480"
              style={{
                border: 0,
                display: "block",
                filter: "grayscale(20%) contrast(1.05) brightness(0.92)"
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}