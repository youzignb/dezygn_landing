import { Link } from 'react-router-dom';
import { ChevronDown, ExternalLink, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo variant="light" size="md" />
            <p className="text-white/70 text-sm mt-4 mb-6 max-w-sm">
              The AI creative platform that turns ideas into income. Empowering creators worldwide since 2014.
            </p>
            
            {/* Platform Access */}
            <div className="space-y-3">
              <a 
                href="https://chat.dezygn.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm"
              >
                Login to Platform
                <ExternalLink className="w-4 h-4" />
              </a>
              
              <div className="flex flex-col gap-2 text-sm">
                <a 
                  href="https://chat.dezygn.com/activation"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Account Activation
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <div className="space-y-3 text-sm">
              <Link to="/features" className="block text-white/70 hover:text-white transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="block text-white/70 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/audit" className="block text-white/70 hover:text-white transition-colors">
                Audit Tool
              </Link>
              <Link to="/report" className="block text-white/70 hover:text-white transition-colors">
                Market Report
              </Link>
              <Link to="/state-of-ai" className="block text-white/70 hover:text-white transition-colors">
                State of AI Report
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="space-y-3 text-sm">
              <Link to="/about" className="block text-white/70 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/faq" className="block text-white/70 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="block text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/accessibility" className="block text-white/70 hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link to="/resources" className="block text-white/70 hover:text-white transition-colors">
                Resources
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:support@youzign.com" 
                className="block text-white/70 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <Mail className="w-3 h-3" />
                Email Support
              </a>
              
              {/* Legacy Customers */}
              <div className="relative group">
                <button className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 text-left">
                  Legacy Customers
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute left-0 bottom-full mb-2 w-56 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-700">
                  <div className="p-2">
                    <a 
                      href="https://dezygn.glide.page" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors rounded text-sm"
                    >
                      Dezygn v1
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <div className="relative">
                      <span className="flex items-center gap-2 px-3 py-2 text-gray-500 cursor-not-allowed text-sm">
                        Dezygn v2
                        <span className="text-xs bg-gray-600 px-1 rounded">Unavailable</span>
                      </span>
                    </div>
                    <a 
                      href="https://chat.dezygn.com/legacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors rounded text-sm"
                    >
                      Dezygn v4 Upgrade
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Legal */}
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>

            {/* Company Details */}
            <div className="text-center">
              <span className="text-sm text-white/60">© 2025 Youzign SPRL. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}