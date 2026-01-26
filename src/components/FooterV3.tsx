import { Link } from 'react-router-dom';
import Logo from './Logo';

interface FooterV3Props {
  className?: string;
}

const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', to: '/features' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Shot Types', to: '/shot-types' },
      { label: 'Course', to: '/course' },
      { label: 'Community', to: '/community' },
    ],
  },
  {
    heading: 'Use Cases',
    links: [
      { label: 'Golf Brands', to: '/use-cases/golf-brands' },
      { label: 'Skincare', to: '/use-cases/skincare' },
      { label: 'Supplements', to: '/use-cases/supplements' },
      { label: 'Agencies', to: '/industries/agencies' },
      { label: 'Freelancers', to: '/industries/freelancers' },
      { label: 'View All', to: '/use-cases' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Guides', to: '/resources' },
      { label: 'Blog', to: '/blog' },
      { label: 'Glossary', to: '/glossary' },
      { label: 'Help Center', to: 'https://intercom.help/dezygn/en/', external: true },
      { label: 'Compare', to: '/compare' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
] as const;

const FooterV3 = ({ className = '' }: FooterV3Props) => {
  return (
    <footer className={`bg-[#050507] border-t border-white/5 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col">
                {col.links.map((link) => (
                  <li key={link.to} className="mb-2.5">
                    {'external' in link && link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Logo + tagline */}
          <div className="flex items-center gap-3">
            <Logo variant="light" size="sm" showText={false} />
            <span className="text-sm text-gray-500">
              AI Photography Suite for Agencies &amp; Freelancers
            </span>
          </div>

          {/* Right: Copyright */}
          <span className="text-sm text-gray-600">
            &copy; 2026 Wosho LLC &middot; All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterV3;
