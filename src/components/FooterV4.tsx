import { Link } from 'react-router-dom';
import Logo from './Logo';

const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";

const SIGNUP_URL = 'https://chat.dezygn.com/signup';

type FooterLink = { label: string; href: string; external?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Platform Tour', href: '/#flows' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Start Free', href: SIGNUP_URL, external: true },
      { label: 'Sign In', href: 'https://chat.dezygn.com', external: true },
      { label: 'Help Center', href: '/help' },
    ],
  },
  {
    title: 'AI Photography',
    links: [
      { label: 'Lifestyle Shots', href: '/shot-types/lifestyle' },
      { label: 'Studio Shots', href: '/shot-types/studio' },
      { label: 'Hero Shots', href: '/shot-types/hero-shots' },
      { label: 'UGC Style', href: '/shot-types/ugc' },
      { label: 'Guides', href: '/resources' },
      { label: 'Glossary', href: '/glossary' },
    ],
  },
  {
    title: 'Use Cases',
    links: [
      { label: 'Skincare', href: '/use-cases/skincare' },
      { label: 'Supplements', href: '/use-cases/supplements' },
      { label: 'Jewelry', href: '/use-cases/jewelry' },
      { label: 'Freelancers', href: '/industries/freelancers' },
      { label: 'Agencies', href: '/industries/agencies' },
      { label: 'All Use Cases', href: '/use-cases' },
    ],
  },
  {
    title: 'Learn & Programs',
    links: [
      { label: 'Free Report', href: '/free-report' },
      { label: 'Free Training', href: '/webinar' },
      { label: 'AIPA Launchpad', href: '/aipa' },
      { label: 'Community', href: '/community' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

const legalLinks: FooterLink[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Earnings Disclaimer', href: '/earnings-disclaimer' },
  { label: 'Accessibility', href: '/accessibility' },
];

function FooterAnchor({ link, className }: { link: FooterLink; className: string }) {
  if (link.external || link.href.includes('#')) {
    return (
      <a href={link.href} className={className} {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {link.label}
      </a>
    );
  }
  return (
    <Link to={link.href} className={className}>
      {link.label}
    </Link>
  );
}

/** Dark editorial footer for the v4 site — hub links over the giant wordmark. */
const FooterV4 = () => {
  return (
    <footer className="overflow-hidden bg-[#1A1A1A] px-5 pt-16 text-[#E8E4DB]">
      <div className="mx-auto grid max-w-6xl gap-10 border-b border-[#E8E4DB]/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#EDEBE6]">
              <Logo variant="dark" size="sm" showText={false} />
            </span>
            <span className="text-lg font-semibold tracking-tight">dezygn</span>
          </div>
          <p className="mt-4 max-w-[230px] text-sm leading-6 text-[#E8E4DB]/55">
            The AI Photography Studio OS. Find clients, get work, and deliver faster.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className={`${mono} text-[10px] font-medium uppercase tracking-[0.14em] text-[#8B867B]`}>{column.title}</p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <FooterAnchor link={link} className="text-sm text-[#E8E4DB]/70 transition hover:text-[#E8E4DB]" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 py-8 text-sm text-[#E8E4DB]/50 md:flex-row md:items-center md:justify-between">
        <span className={`${mono} text-xs`}>© 2026 Wosho LLC. All rights reserved.</span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {legalLinks.map((link) => (
            <FooterAnchor key={link.label} link={link} className={`${mono} text-xs text-[#E8E4DB]/50 transition hover:text-[#E8E4DB]`} />
          ))}
        </div>
      </div>
      <div aria-hidden className="mx-auto max-w-7xl select-none">
        <div className="-mb-[0.23em] text-center text-[24vw] font-semibold leading-none tracking-tight text-[#E8E4DB]/[0.07] lg:text-[20rem]">
          dezygn
        </div>
      </div>
    </footer>
  );
};

export default FooterV4;
