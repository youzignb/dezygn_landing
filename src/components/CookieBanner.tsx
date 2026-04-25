import { useEffect, useState } from 'react';
import {
  getCookieConsent,
  initAnalytics,
  setCookieConsent,
  type CookieConsent,
} from '../lib/analytics';

/**
 * Discreet bottom-right cookie consent banner.
 * Renders only on first visit (until visitor picks Accept or Decline).
 * Accept → init Clarity now. Decline → silently skip analytics.
 * Choice persists in localStorage; main.tsx reads it on subsequent visits.
 */
export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (getCookieConsent() !== null) return;
    // Defer slightly so the banner doesn't flash in on first paint
    const id = window.setTimeout(() => setShow(true), 800);
    return () => window.clearTimeout(id);
  }, []);

  const handle = (consent: CookieConsent) => {
    setCookieConsent(consent);
    if (consent === 'accepted') initAnalytics();
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="cookie-banner"
    >
      <style>{COOKIE_BANNER_STYLES}</style>
      <p className="cookie-banner__copy">
        We use cookies to analyse site usage and improve your experience.{' '}
        <a href="/privacy" className="cookie-banner__link">
          Learn more
        </a>
      </p>
      <div className="cookie-banner__actions">
        <button
          type="button"
          onClick={() => handle('declined')}
          className="cookie-banner__btn cookie-banner__btn--ghost"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => handle('accepted')}
          className="cookie-banner__btn cookie-banner__btn--primary"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

const COOKIE_BANNER_STYLES = `
  .cookie-banner {
    position: fixed; right: 16px; bottom: 16px; z-index: 9999;
    max-width: 340px; width: calc(100% - 32px);
    background: rgba(10, 10, 10, 0.94); backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px;
    padding: 14px 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    font-family: 'DM Sans', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    color: #d1d5db;
    animation: cookie-banner-in 0.35s ease-out;
  }
  @keyframes cookie-banner-in {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .cookie-banner__copy {
    font-size: 12px; line-height: 1.55; margin: 0;
    color: #d1d5db;
  }
  .cookie-banner__link {
    color: #c9a84c; text-decoration: underline;
  }
  .cookie-banner__link:hover { color: #fff; }
  .cookie-banner__actions {
    display: flex; gap: 8px; margin-top: 10px;
  }
  .cookie-banner__btn {
    flex: 1; font-family: inherit; font-size: 12px; font-weight: 600;
    padding: 7px 12px; border-radius: 8px; cursor: pointer;
    border: 1px solid transparent; transition: all 0.15s;
  }
  .cookie-banner__btn--ghost {
    background: transparent; border-color: rgba(255, 255, 255, 0.15);
    color: #aaaaaa;
  }
  .cookie-banner__btn--ghost:hover {
    background: rgba(255, 255, 255, 0.05); color: #fff;
  }
  .cookie-banner__btn--primary {
    background: #c9a84c; color: #0a0a0a;
  }
  .cookie-banner__btn--primary:hover { opacity: 0.9; }
`;
