import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <Logo variant="dark" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="https://chat.dezygn.com/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full font-medium border border-gray-300 hover:border-gray-400 transition-all duration-300"
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
