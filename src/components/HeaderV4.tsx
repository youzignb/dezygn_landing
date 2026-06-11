import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const SIGNUP_URL = 'https://chat.dezygn.com/signup';

/**
 * v4 floating pill header (extracted from LandingPageV4's StudioHeader).
 * Dark pill, works on both dark and paper backgrounds. Hash links use "/#..."
 * so they behave on subpages too (same-document scroll when already on "/").
 */
const HeaderV4 = () => {
  const [open, setOpen] = useState(false);

  const nav = [
    ['Product', '/#flows'],
    ['Pricing', '/#pricing'],
    ['Free Training', '/webinar'],
    ['AIPA', '/aipa'],
  ];

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2">
      <div className="flex h-14 items-center justify-between rounded-full border border-[#E8E4DB]/15 bg-[#1A1A1A]/[0.92] pl-2 pr-2 shadow-[0_16px_44px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <Link to="/" className="flex items-center gap-2.5 pl-1" aria-label="Dezygn home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#EDEBE6]">
            <Logo variant="dark" size="sm" showText={false} />
          </span>
          <span className="text-[17px] font-semibold tracking-tight text-[#E8E4DB]">dezygn</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-[#E8E4DB]/70 transition hover:text-[#E8E4DB]">
              {label}
            </a>
          ))}
          <a
            href={SIGNUP_URL}
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#8B5CF6] px-5 text-sm font-semibold text-white transition hover:bg-[#7C3AED]"
          >
            Start Free
          </a>
        </nav>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-[#E8E4DB]/20 text-[#E8E4DB] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="mt-2 rounded-2xl border border-[#E8E4DB]/15 bg-[#1A1A1A]/95 p-3 shadow-[0_16px_44px_rgba(0,0,0,0.35)] backdrop-blur-md md:hidden">
          <div className="grid gap-2">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#E8E4DB]/85" onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a href={SIGNUP_URL} className="rounded-full bg-[#8B5CF6] px-4 py-3 text-center text-sm font-semibold text-white">
              Start Free
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default HeaderV4;
