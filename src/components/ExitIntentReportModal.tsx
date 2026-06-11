import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import ReportCaptureForm from './ReportCaptureForm';

const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
const serif = "font-['Instrument_Serif',Georgia,serif]";

const STORAGE_KEY = 'dz_report_popup_seen';
const ARM_DELAY_MS = 8000;

// No popup on funnel/conversion pages or where it would be plain annoying.
const EXCLUDED_PREFIXES = [
  '/free-report',
  '/proof-before-pitch',
  '/cheatsheet',
  '/webinar',
  '/client-system',
  '/apply',
  '/audit',
  '/success',
  '/help',
  '/v3',
];

/**
 * Old-school exit-intent popup for the Proof Before Pitch report. Desktop
 * only (fires when the cursor leaves the top of the viewport), shows once
 * per browser, and stays quiet on funnel pages.
 */
const ExitIntentReportModal = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // Private mode — fine, the popup just stays once-per-pageload.
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (EXCLUDED_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, ARM_DELAY_MS);

    const onMouseOut = (event: MouseEvent) => {
      // Fires only when the cursor actually leaves the document through the top
      // edge — the classic exit-intent signal (heading for the URL bar / tabs).
      if (!armed || event.relatedTarget !== null || event.clientY > 0) return;
      setOpen(true);
      document.removeEventListener('mouseout', onMouseOut);
    };

    document.addEventListener('mouseout', onMouseOut);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') dismiss();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1A]/70 px-5 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Free report: How to Make Money Selling AI Images"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-lg -rotate-1 rounded-3xl border border-[#1A1A1A]/[0.12] bg-[#F7F5F0] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.45)] sm:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-[#1A1A1A]/10 text-[#6B6459] transition hover:bg-[#EDEBE6]"
        >
          <X className="h-4 w-4" />
        </button>
        <p className={`${mono} inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
          ✦ Before you go
        </p>
        <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-tight text-[#1A1A1A]">
          Leave With the Client-Getting <span className={`${serif} font-normal italic text-[#7C3AED]`}>Method.</span>
        </h2>
        <p className="mt-3 text-[15px] leading-7 text-[#6B6459]">
          One client pays me $639/month for 12 AI images. The free report shows the exact method I used to land
          him — no portfolio, no sales skills. Three steps, one hour.
        </p>
        <div className="mt-6">
          <ReportCaptureForm label="Free report · instant delivery" onSubmitted={dismiss} />
        </div>
      </div>
    </div>
  );
};

export default ExitIntentReportModal;
