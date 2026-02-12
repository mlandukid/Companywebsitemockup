import { 
  Leaf, 
  Award, 
  Calculator, 
  FileCheck, 
  GraduationCap,
  Shield 
} from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Environmental Compliance Consultation",
    description: "Expert guidance on environmental regulations and sustainability practices to ensure your operations meet all environmental standards and requirements.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Award,
    title: "Certification Consultation",
    description: "Comprehensive support in obtaining and maintaining industry certifications, quality standards, and compliance credentials for your organization.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Calculator,
    title: "Financial & Accounting Consultation",
    description: "Professional financial compliance services ensuring adherence to accounting standards, financial regulations, and best practices.",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance Consultation",
    description: "Navigate complex regulatory landscapes with confidence. We ensure your business stays compliant with all relevant laws and regulations.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: GraduationCap,
    title: "Education & Training Consultation",
    description: "Empower your team with comprehensive training programs on compliance, regulatory requirements, and industry best practices.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Shield,
    title: "Compliance Related Queries",
    description: "Expert answers and guidance for any compliance-related questions or challenges your organization may face.",
    color: "from-slate-500 to-slate-600"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900">Our Services</h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We specialize in comprehensive compliance solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-200 group hover:-translate-y-1"
              >
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
