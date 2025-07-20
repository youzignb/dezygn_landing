import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <Logo variant="light" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-white/80 hover:text-white transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-white/80 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/audit" className="text-white/80 hover:text-white transition-colors">
              Audit
            </Link>
            <a 
              href="https://chat.dezygn.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Login
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}