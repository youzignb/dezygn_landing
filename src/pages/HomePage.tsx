import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ExternalLink, ChevronDown } from 'lucide-react';
import Logo from '../components/Logo';

const HomePage = () => {
  const [isLegacyDropdownOpen, setIsLegacyDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLegacyDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/">
            <Logo variant="default" size="md" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-900 font-bold hover:text-purple-600 transition">Home</Link>
            <Link to="/audit" className="text-gray-600 hover:text-purple-600 transition">Audit</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-purple-600 transition">Pricing</Link>
            <Link to="/report" className="text-gray-600 hover:text-purple-600 transition">Report</Link>
            <a 
              href="https://chat.dezygn.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-300"
            >
              Login
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-6 py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-9xl font-black text-gray-900 mb-8 leading-[0.85] tracking-tight">
            <span className="block bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent drop-shadow-2xl">
              The Only AI Creative Suite
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 animate-pulse drop-shadow-2xl">
              That Pays for Itself
            </span>
          </h1>
          
          <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Built for freelancers and agencies who make money with AI. 
            What takes others hours, you'll do before your coffee gets cold.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/special" 
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl px-12 py-6 rounded-full font-black shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Get Special Access
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/pricing" 
              className="inline-flex items-center gap-3 bg-white border-2 border-purple-600 text-purple-600 px-12 py-6 rounded-full font-black text-xl shadow-xl hover:bg-purple-50 transition-all duration-300"
            >
              <Zap className="w-6 h-6" />
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <Link to="/">
                <Logo variant="light" size="md" />
              </Link>
              <div className="flex flex-col sm:flex-row gap-6 text-white/70">
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <a 
                  href="mailto:support@youzign.com" 
                  className="hover:text-white transition-colors"
                >
                  Contact Support
                </a>
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsLegacyDropdownOpen(!isLegacyDropdownOpen)}
                    className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
                  >
                    Legacy customers
                    <ChevronDown className={`w-4 h-4 transition-transform ${isLegacyDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isLegacyDropdownOpen && (
                    <div className="absolute left-0 bottom-full mb-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-2 z-10">
                      <a
                        href="https://dezygn.glide.page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      >
                        Dezygn v1
                      </a>
                      <div className="relative group">
                        <span className="block px-4 py-2 text-sm text-gray-500 cursor-not-allowed">Dezygn v2</span>
                        <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 text-xs bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          Unavailable
                        </span>
                      </div>
                      <Link
                        to="/legacy"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      >
                        Dezygn v4 Upgrade
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="text-white/50 text-sm">
              © 2025 Youzign SPRL. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;