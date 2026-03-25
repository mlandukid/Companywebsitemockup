import {
  Factory,
  Building2,
  HardHat,
  Utensils,
  Hotel,
  GraduationCap,
  Heart
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Generic",
    description: "Comprehensive compliance solutions for general industrial operations"
  },
  {
    icon: Building2,
    name: "Manufacturing Industries",
    description: "Quality and regulatory compliance for manufacturing operations, including assistance with health and safety standards and legislation"
  },
  {
    icon: HardHat,
    name: "Construction Industries",
    description: "Safety standards and construction regulatory compliance. Assistance with adherence to health and safety compliance by referrals to the relevant authorities"
  },
  {
    icon: Hotel,
    name: "Hospitality Industries",
    description: "Health, safety, and operational compliance for hospitality"
  },
  {
    icon: GraduationCap,
    name: "Educational Facilities",
    description: "Compliance and certification for educational institutions, assisting early childhood centres to obtain the necessary certifications through compliance"
  },
  {
    icon: Utensils,
    name: "Food Handling Facilities",
    description: "Assisting with health education of food handlers and assist with obtaining relevant certification"
  },
  {
    icon: Heart,
    name: "Facilities Dealing with Human Remains",
    description: "Assisting businesses in obtaining the relevant certification"
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
