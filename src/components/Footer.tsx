import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12 sm:mt-16 md:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 text-black">
                <img src="/logo.svg" alt="OMNI Logo" className="w-full h-full" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-black">OMNI</span>
            </div>
            <p className="text-gray-600 text-sm">
              Operational Intelligence That Takes Action
            </p>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="font-semibold mb-2 sm:mb-4 text-black text-sm sm:text-base">What We Do</h4>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="text-gray-600 hover:text-black transition-colors text-sm">Solutions</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-black transition-colors text-sm">Our Approach</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-2 sm:mb-4 text-black text-sm sm:text-base">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-black transition-colors text-sm">About Us</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-black transition-colors text-sm">Consulting</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-black transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-2 sm:mb-4 text-black text-sm sm:text-base">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@omni.com"
                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-all text-black"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-all text-black"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} OMNI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-600 hover:text-black transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-600 hover:text-black transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
