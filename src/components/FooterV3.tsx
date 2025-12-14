import { Link } from 'react-router-dom';

interface FooterV3Props {
  className?: string;
}

const FooterV3 = ({ className = "" }: FooterV3Props) => {
  return (
    <footer className={`w-full px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 z-40 ${className}`}>
      
      {/* Left: Copyright */}
      <div className="flex items-center gap-4">
        <span className="font-medium">© 2025 Wosho LLC</span>
        <span className="hidden md:inline text-gray-800">•</span>
        <span className="hidden md:inline">Albuquerque, NM</span>
      </div>

      {/* Center: Links */}
      <div className="flex items-center gap-6">
        <Link to="/privacy" className="hover:text-gray-400 transition-colors">Privacy</Link>
        <Link to="/terms" className="hover:text-gray-400 transition-colors">Terms</Link>
        <a 
          href="https://intercom.help/dezygn/en/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-400 transition-colors"
        >
          Help Desk
        </a>
      </div>

      {/* Right: Status */}
      <div className="hidden md:flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span>Systems Normal</span>
      </div>
    </footer>
  );
};

export default FooterV3;
