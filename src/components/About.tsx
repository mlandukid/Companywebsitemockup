import { Target, Eye, Award } from "lucide-react";

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900">About Umcebo Consultants</h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Founded in 2025 with Mr Mlandu being the chairperson of the company in question.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-600 p-3 rounded-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl mb-4 text-slate-900">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  "To empower organizations to operate with integrity and confidence by providing 
                  expert compliance solutions that ensures adherence to regulatory standards and 
                  promote ethical business practices"
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-600 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl mb-4 text-slate-900">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  "To be the leading compliance partner nationally recognised for transforming
                  regulatory challenges into opportunities for excellence and growth for emerging and established companies"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Advantage */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-6 max-w-4xl mx-auto">
            <div className="bg-white/20 p-4 rounded-lg hidden md:block">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl mb-4">Our Competitive Advantage</h3>
              <p className="text-lg leading-relaxed opacity-95">
                Umcebo consultations does not only advise their customers, but they also assist in 
                facilitating the processes of compliance. We provide transparent, excellent and 
                customised strategies tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
