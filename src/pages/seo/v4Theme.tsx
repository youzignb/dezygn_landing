/**
 * Shared tokens + helpers for the v4 editorial paper-and-ink theme,
 * used by every page in src/pages/seo. Mirrors LandingPageV4:
 * ink #1A1A1A · inkWarm #2B2B2B · paper #EDEBE6 · vellum #F7F5F0
 * muted #6B6459 · dim #8B867B · accent #8B5CF6 · accentDeep #7C3AED
 * Purple is the only accent.
 */
export const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
export const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
export const serif = "font-['Instrument_Serif',Georgia,serif]";

export const SIGNUP_URL = 'https://chat.dezygn.com/signup';

/** Page wrapper classes. */
export const pageWrap = `${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`;

/** White pill eyebrow with slight rotation. */
export const eyebrowPill = `${mono} inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`;

/** Standard white card. */
export const card = 'rounded-3xl border border-[#1A1A1A]/12 bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.08)]';

/** Interactive card (links). */
export const cardLink = 'group rounded-3xl border border-[#1A1A1A]/12 bg-white shadow-[0_24px_60px_rgba(26,26,26,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_70px_rgba(26,26,26,0.14)]';

/** Primary CTA button. */
export const ctaButton = 'inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#8B5CF6] px-8 text-sm font-semibold text-white transition hover:bg-[#7C3AED]';

/** Mono breadcrumb nav classes. */
export const crumbNav = `${mono} flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`;
export const crumbLink = 'transition-colors hover:text-[#1A1A1A]';

/** Sets the last word of a headline in italic serif — the editorial counterpoint to Inter. */
export function EditorialTitle({ text }: { text: string }) {
  const trailing = text.match(/[.?!]+$/)?.[0] ?? '';
  const clean = trailing ? text.slice(0, -trailing.length) : text;
  const words = clean.trim().split(' ');
  const last = words.pop();
  return (
    <>
      {words.length > 0 ? `${words.join(' ')} ` : ''}
      <span className={`${serif} italic font-normal`}>
        {last}
        {trailing}
      </span>
    </>
  );
}
