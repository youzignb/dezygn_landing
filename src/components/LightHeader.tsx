import { Link, useLocation } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Logo from './Logo';

export default function LightHeader() {
  const location = useLocation();

  return (
    <nav className="relative z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <Logo variant="default" size="md" showText={false} />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/features" 
            className={`transition ${location.pathname === '/features' ? 'text-gray-900 font-bold' : 'text-gray-600 hover:text-purple-600'}`}
          >
            Features
          </Link>
          <Link 
            to="/pricing" 
            className={`transition ${location.pathname === '/pricing' ? 'text-gray-900 font-bold' : 'text-gray-600 hover:text-purple-600'}`}
          >
            Pricing
          </Link>
          <Link 
            to="/audit" 
            className={`transition ${location.pathname === '/audit' ? 'text-gray-900 font-bold' : 'text-gray-600 hover:text-purple-600'}`}
          >
            Audit
          </Link>
          <a 
            href="https://chat.dezygn.com/auth" 
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
  );
}
