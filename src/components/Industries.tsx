import { 
  Factory, 
  Building2, 
  ShoppingBag, 
  HardHat, 
  Truck, 
  Hotel, 
  GraduationCap,
  Mountain
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Generic Industry",
    description: "Comprehensive compliance solutions for general industrial operations"
  },
  {
    icon: Mountain,
    name: "Extractive Industries",
    description: "Specialized services for mining and resource extraction sectors"
  },
  {
    icon: Building2,
    name: "Manufacturing Industries",
    description: "Quality and regulatory compliance for manufacturing operations"
  },
  {
    icon: ShoppingBag,
    name: "Retail Industries",
    description: "Consumer protection and retail compliance guidance"
  },
  {
    icon: HardHat,
    name: "Construction Industries",
    description: "Safety standards and construction regulatory compliance"
  },
  {
    icon: Truck,
    name: "Transportation Industries",
    description: "Transport regulations and logistics compliance solutions"
  },
  {
    icon: Hotel,
    name: "Hospitality Industries",
    description: "Health, safety, and operational compliance for hospitality"
  },
  {
    icon: GraduationCap,
    name: "Educational Services",
    description: "Compliance and certification for educational institutions"
  }
];

export function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900">Industries We Serve</h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Looking ahead, Umcebo Consultants aims to expand its footprints across diverse sectors, 
            strengthening our consulting capabilities and continuing to provide solutions that address 
            the existing challenges of today's business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:border-yellow-600 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-yellow-600 p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-slate-900">{industry.name}</h3>
                    <p className="text-sm text-slate-600">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
