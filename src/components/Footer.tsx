import logo from "figma:asset/4a62b928b7bd9b71bb18865ee7bc541016a7ac51.png";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Umcebo Consultants" 
              className="w-48"
            />
            <p className="text-slate-400 text-sm">
              Transforming regulatory challenges into opportunities for excellence and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Our Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Environmental Compliance</li>
              <li>Certification Consultation</li>
              <li>Financial Consultation</li>
              <li>Regulatory Compliance</li>
              <li>Training & Education</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>
              © {new Date().getFullYear()} Umcebo Consultants (PTY) LTD. All rights reserved.
            </div>
            <div>
              Reg No: 2025/793132/07
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
