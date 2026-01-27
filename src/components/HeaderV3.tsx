import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Sparkles,
  Brain,
  Image,
  GraduationCap,
  Users,
  BookOpen,
  ChevronDown,
  ArrowRight,
  Camera,
  Star,
  Zap,
  Gem,
} from 'lucide-react';
import Logo from './Logo';

type DropdownKey = 'product' | 'usecases' | 'resources' | null;

interface NavItem {
  label: string;
  to: string;
  icon?: React.ReactNode;
  description?: string;
}

interface DropdownColumn {
  heading: string;
  items: NavItem[];
}

const PRODUCT_COLUMNS: DropdownColumn[] = [
  {
    heading: 'Platform',
    items: [
      {
        label: 'AI Creative Suite',
        to: '/features',
        icon: <Sparkles className="w-4 h-4" />,
        description: 'Generate on-brand images with AI',
      },
      {
        label: 'Awa AI Agent',
        to: '/features/awa',
        icon: <Brain className="w-4 h-4" />,
        description: 'Your AI creative director with 12+ skills',
      },
      {
        label: 'Studio & Gallery',
        to: '/features/studio',
        icon: <Image className="w-4 h-4" />,
        description: 'Review, compare, rate, and share',
      },
      {
        label: 'Brand Import',
        to: '/features/brand-import',
        icon: <Zap className="w-4 h-4" />,
        description: '1-click brand identity & product import',
      },
    ],
  },
  {
    heading: 'Shot Types',
    items: [
      { label: 'Lifestyle Photography', to: '/shot-types/lifestyle', icon: <Camera className="w-4 h-4" /> },
      { label: 'Studio Photography', to: '/shot-types/studio', icon: <Star className="w-4 h-4" /> },
      { label: 'Hero Shots', to: '/shot-types/hero-shots', icon: <Zap className="w-4 h-4" /> },
      { label: 'UGC Style', to: '/shot-types/ugc', icon: <Gem className="w-4 h-4" /> },
    ],
  },
];

const USECASES_COLUMNS: DropdownColumn[] = [
  {
    heading: 'By Niche',
    items: [
      { label: 'Golf Brands', to: '/use-cases/golf-brands' },
      { label: 'Skincare', to: '/use-cases/skincare' },
      { label: 'Supplements', to: '/use-cases/supplements' },
      { label: 'Jewelry', to: '/use-cases/jewelry' },
      { label: 'View All', to: '/use-cases' },
    ],
  },
  {
    heading: 'By Role',
    items: [
      { label: 'Freelancers', to: '/industries/freelancers' },
      { label: 'Agencies', to: '/industries/agencies' },
      { label: 'E-commerce Stores', to: '/industries/ecommerce' },
      { label: 'Amazon Sellers', to: '/industries/amazon-sellers' },
    ],
  },
];

const RESOURCES_COLUMNS: DropdownColumn[] = [
  {
    heading: 'Learn',
    items: [
      { label: 'Course', to: '/course', icon: <GraduationCap className="w-4 h-4" /> },
      { label: 'Community', to: '/community', icon: <Users className="w-4 h-4" /> },
{ label: 'Guides', to: '/resources', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    heading: 'Compare',
    items: [
      { label: 'vs Photoroom', to: '/compare/photoroom' },
      { label: 'vs Flair.ai', to: '/compare/flair-ai' },
      { label: 'vs Midjourney', to: '/compare/midjourney' },
      { label: 'All Comparisons', to: '/compare' },
    ],
  },
];

const DROPDOWN_MAP: Record<string, DropdownColumn[]> = {
  product: PRODUCT_COLUMNS,
  usecases: USECASES_COLUMNS,
  resources: RESOURCES_COLUMNS,
};

function DropdownItem({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  return (
    <Link
      to={item.to}
      onClick={onClick}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
    >
      {item.icon && (
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 shrink-0 group-hover:bg-purple-500/20 transition-colors">
          {item.icon}
        </span>
      )}
      <span className="flex flex-col">
        <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
          {item.label}
        </span>
        {item.description && (
          <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
            {item.description}
          </span>
        )}
      </span>
    </Link>
  );
}

export default function HeaderV3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close dropdown on route change / scroll
  useEffect(() => {
    const handleScroll = () => setOpenDropdown(null);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (key: DropdownKey) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const closeMobile = () => {
    setIsMenuOpen(false);
    setMobileExpanded(null);
  };

  const navItems: { key: DropdownKey; label: string }[] = [
    { key: 'product', label: 'Product' },
    { key: 'usecases', label: 'Use Cases' },
    { key: 'resources', label: 'Resources' },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="fixed w-full z-50 px-6 py-4 md:px-10 flex justify-between items-center bg-[#050507]/80 backdrop-blur-xl border-b border-white/5"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group cursor-pointer hover:opacity-90 transition-opacity shrink-0"
        >
          <Logo variant="light" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-400">
          {navItems.map(({ key, label }) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition-colors ${
                  openDropdown === key ? 'text-white bg-white/5' : 'hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    openDropdown === key ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                  openDropdown === key
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-5 min-w-[480px]">
                  <div className="grid grid-cols-2 gap-6">
                    {DROPDOWN_MAP[key!]?.map((col) => (
                      <div key={col.heading}>
                        <h4 className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-3 px-3">
                          {col.heading}
                        </h4>
                        <div className="flex flex-col">
                          {col.items.map((item) => (
                            <DropdownItem
                              key={item.to}
                              item={item}
                              onClick={() => setOpenDropdown(null)}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <a
            href="#pricing"
            className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            Pricing
          </a>

          <div className="w-px h-5 bg-white/10 mx-2" />

          <a
            href="https://chat.dezygn.com/login"
            className="px-4 py-2 rounded-full border border-white/15 hover:border-white/30 hover:text-white transition-all duration-200 text-gray-400"
          >
            Sign In
          </a>

          <a
            href="https://chat.dezygn.com/login"
            className="ml-2 flex items-center gap-1.5 px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors duration-200"
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#050507] z-40 pt-20 px-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-1 max-w-md mx-auto">
            {navItems.map(({ key, label }) => (
              <div key={key}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                  className="flex items-center justify-between w-full px-4 py-3.5 text-lg font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileExpanded === key ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {mobileExpanded === key && (
                  <div className="pl-2 pb-2 animate-in slide-in-from-top-2 duration-200">
                    {DROPDOWN_MAP[key!]?.map((col) => (
                      <div key={col.heading} className="mb-4">
                        <h4 className="text-[11px] font-semibold uppercase tracking-widest text-gray-600 mb-2 px-4">
                          {col.heading}
                        </h4>
                        {col.items.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={closeMobile}
                            className="flex items-center gap-3 px-4 py-2.5 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                          >
                            {item.icon && (
                              <span className="flex items-center justify-center w-7 h-7 rounded-md bg-purple-500/10 text-purple-400 shrink-0">
                                {item.icon}
                              </span>
                            )}
                            <span className="text-sm">{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="#pricing"
              onClick={closeMobile}
              className="px-4 py-3.5 text-lg font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Pricing
            </a>

            <div className="border-t border-white/10 mt-4 pt-4 flex flex-col gap-3">
              <a
                href="https://chat.dezygn.com/login"
                className="block text-center px-5 py-3 rounded-full border border-white/15 text-gray-300 hover:text-white hover:border-white/30 transition-all"
              >
                Sign In
              </a>
              <a
                href="https://chat.dezygn.com/login"
                onClick={closeMobile}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
