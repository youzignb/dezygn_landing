import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function HeaderV3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-gradient-to-b from-[#050507] to-transparent">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer hover:opacity-90 transition-opacity">
          <Logo variant="light" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link to="/business" className="hover:text-white transition-colors">Business</Link>
          <Link to="/agency" className="hover:text-white transition-colors">Agency</Link>
          <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
          <Link to="/features" className="hover:text-white transition-colors">Features</Link>
          <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <a href="https://chat.dezygn.com/login" className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
            Sign In
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#050507] z-40 flex flex-col items-center justify-center gap-8 text-2xl font-serif-display animate-in fade-in duration-200">
          <Link to="/business" className="hover:text-purple-400" onClick={() => setIsMenuOpen(false)}>Business</Link>
          <Link to="/agency" className="hover:text-purple-400" onClick={() => setIsMenuOpen(false)}>Agency</Link>
          <Link to="/case-studies" className="hover:text-purple-400" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
          <Link to="/features" className="hover:text-purple-400" onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link to="/pricing" className="hover:text-purple-400" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          <a href="https://chat.dezygn.com/login" className="hover:text-purple-400">Sign In</a>
        </div>
      )}
    </>
  );
}
