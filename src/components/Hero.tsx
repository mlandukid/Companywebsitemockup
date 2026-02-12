import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedStat } from "./AnimatedStat";
import logo from "figma:asset/4a62b928b7bd9b71bb18865ee7bc541016a7ac51.png";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(234, 179, 8) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Logo and Text */}
          <div className="space-y-8">
            <div className="inline-block">
              <img 
                src={logo} 
                alt="Umcebo Consultants" 
                className="w-full max-w-md mx-auto md:mx-0"
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl italic">
                Paragons of Virtue Begins with Compliance
              </h1>
              <p className="text-lg text-slate-300 max-w-xl">
                A 100% black-owned professional consultation company delivering innovative solutions, 
                measurable results and excellent services in ensuring compliance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-6 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-slate-900 px-8 py-6 backdrop-blur-sm"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
              <AnimatedStat end={100} suffix="%" label="Black Owned" />
              <AnimatedStat end={8} suffix="+" label="Industries Served" />
              <AnimatedStat end={2025} label="Est. Founded" />
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-yellow-600/20 rounded-lg blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1665072204431-b3ba11bd6d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjBoYW5kc2hha2UlMjBwYXJ0bmVyc2hpcHxlbnwxfHx8fDE3NjMzNzU4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Diverse business partnership handshake"
              className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="relative">
        <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" 
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
