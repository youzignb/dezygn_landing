import Clarity from '@microsoft/clarity';

/**
 * Initialise analytics providers. Called from main.tsx if the visitor has
 * already accepted cookies, or from CookieBanner when they accept now.
 *
 * Safe to call multiple times — providers are no-ops or idempotent on repeat init.
 */
export function initAnalytics(): void {
  const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID;
  if (import.meta.env.PROD && clarityProjectId) {
    Clarity.init(clarityProjectId);
  }
}

export const COOKIE_CONSENT_KEY = 'cookie-consent';
export type CookieConsent = 'accepted' | 'declined';

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  const v = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return v === 'accepted' || v === 'declined' ? v : null;
}

export function setCookieConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(COOKIE_CONSENT_KEY, consent);
}
