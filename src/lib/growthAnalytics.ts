/**
 * First-party growth analytics for the LANDING site (dezygn.com).
 *
 * Mirror of the app's client (source: 'landing'). Posts events to the shared
 * `track` edge function on the same Supabase project the app uses, keyed by a
 * first-party `dz_vid` cookie scoped to `.dezygn.com` so the visitor id is the
 * SAME across the landing and the app (chat.dezygn.com) subdomains.
 *
 * Never throws — tracking must never break the page.
 */

const FALLBACK_SUPABASE_URL = 'https://vpklpenoffkvztqosbds.supabase.co';

/** Functions base URL — reuse the repo's Supabase URL env var, fall back to the shared project. */
const SUPABASE_URL: string =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined) || FALLBACK_SUPABASE_URL;
const FUNCTIONS_BASE = `${SUPABASE_URL}/functions/v1`;

const COOKIE_NAME = 'dz_vid';
const TWO_YEARS_SECONDS = 60 * 60 * 24 * 365 * 2;

const isBrowser = (): boolean =>
  typeof window !== 'undefined' && typeof document !== 'undefined';

interface UtmParams {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
}

interface TrackPayload {
  event_name: string;
  visitor_id: string;
  source: 'landing';
  path?: string;
  referrer?: string;
  utm?: UtmParams;
  props?: Record<string, unknown>;
}

const readCookie = (name: string): string | null => {
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : null;
};

const generateUuid = (): string => {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
  } catch {
    // fall through to manual generation
  }
  // RFC4122-ish fallback for environments without crypto.randomUUID.
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * Read or create the first-party `dz_vid` cookie.
 * Set on Domain=.dezygn.com so landing + app subdomains share the id.
 * On localhost the Domain attribute is dropped so it still works.
 */
export const getVisitorId = (): string => {
  if (!isBrowser()) return generateUuid();

  const existing = readCookie(COOKIE_NAME);
  if (existing) return existing;

  const id = generateUuid();
  try {
    const host = window.location.hostname;
    const isLocal =
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '::1' ||
      host.endsWith('.local');
    const isHttps = window.location.protocol === 'https:';

    let cookie = `${COOKIE_NAME}=${encodeURIComponent(id)}; Max-Age=${TWO_YEARS_SECONDS}; Path=/; SameSite=Lax`;
    if (!isLocal) cookie += '; Domain=.dezygn.com';
    if (isHttps) cookie += '; Secure';
    document.cookie = cookie;
  } catch {
    // If cookies are unavailable, still return a usable (in-memory) id.
  }
  return id;
};

const getUtmParams = (): UtmParams | undefined => {
  try {
    const params = new URLSearchParams(window.location.search);
    const utm: UtmParams = {};
    const source = params.get('utm_source');
    const medium = params.get('utm_medium');
    const campaign = params.get('utm_campaign');
    const term = params.get('utm_term');
    const content = params.get('utm_content');
    if (source) utm.source = source;
    if (medium) utm.medium = medium;
    if (campaign) utm.campaign = campaign;
    if (term) utm.term = term;
    if (content) utm.content = content;
    return Object.keys(utm).length > 0 ? utm : undefined;
  } catch {
    return undefined;
  }
};

/** Only forward the referrer when it's cross-origin (avoids noisy same-site nav data). */
const getCrossOriginReferrer = (): string | undefined => {
  try {
    const ref = document.referrer;
    if (!ref) return undefined;
    const refOrigin = new URL(ref).origin;
    if (refOrigin === window.location.origin) return undefined;
    return ref;
  } catch {
    return undefined;
  }
};

/**
 * Fire an analytics event. Never throws; no-ops outside the browser.
 */
export const track = async (
  eventName: string,
  props?: Record<string, unknown>
): Promise<void> => {
  if (!isBrowser()) return;

  try {
    const payload: TrackPayload = {
      event_name: eventName,
      visitor_id: getVisitorId(),
      source: 'landing',
      path: window.location.pathname,
    };

    const referrer = getCrossOriginReferrer();
    if (referrer) payload.referrer = referrer;

    const utm = getUtmParams();
    if (utm) payload.utm = utm;

    if (props && Object.keys(props).length > 0) payload.props = props;

    await fetch(`${FUNCTIONS_BASE}/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch {
    // Swallow — analytics must never break the page.
  }
};

/** Convenience wrapper for a page-view event. */
export const trackPageView = async (): Promise<void> => {
  await track('page_view');
};
