import { Link } from 'react-router-dom';
import { ChevronDown, ExternalLink } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo variant="light" size="md" />
            <p className="text-gray-400 text-sm mt-4 mb-6 max-w-sm leading-relaxed">
              The AI creative platform that turns ideas into income. Empowering creators worldwide since 2014.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <div className="space-y-3 text-sm">
              <Link to="/features" className="block text-gray-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/accessibility" className="block text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link to="/report" className="block text-gray-400 hover:text-white transition-colors">
                Market Report
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://chat.dezygn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Login
              </a>
              <a
                href="https://chat.dezygn.com/activation"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Account Activation
              </a>
              <a
                href="https://intercom.help/dezygn"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Help Desk
              </a>
              <a
                href="mailto:support@dezygn.com"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Email Support
              </a>

              {/* Legacy Customers */}
              <div className="relative group">
                <button className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-left">
                  Legacy Customers
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute left-0 bottom-full mb-2 w-56 bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-700">
                  <div className="p-2">
                    <Link
                      to="/v1"
                      className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors rounded text-sm"
                    >
                      Dezygn v1
                    </Link>
                    <div className="relative">
                      <span className="flex items-center gap-2 px-3 py-2 text-gray-500 cursor-not-allowed text-sm">
                        Dezygn v2
                        <span className="text-xs bg-gray-600 px-1.5 py-0.5 rounded">Unavailable</span>
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
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Legal */}
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>

            {/* Company Details */}
            <div className="text-center">
              <span className="text-sm text-gray-400">© 2025 Wosho LLC. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}