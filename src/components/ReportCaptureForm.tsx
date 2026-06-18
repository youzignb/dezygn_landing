import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { track } from '../lib/growthAnalytics';

const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";

/**
 * Shared opt-in form for the Proof Before Pitch report lead magnet.
 * Posts to the Supabase lead-magnet-capture function, then routes to the
 * thank-you page. Used by the homepage section, /free-report, and the
 * exit-intent popup.
 */
const ReportCaptureForm = ({
  label = 'Get the report',
  buttonLabel = 'Send Me the Report',
  onSubmitted,
}: {
  label?: string;
  buttonLabel?: string;
  /** Called right before navigating to the thank-you page (e.g. to dismiss a modal). */
  onSubmitted?: () => void;
}) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      if (!supabaseUrl || !supabaseAnonKey) throw new Error('Missing Supabase environment variables.');

      const response = await fetch(`${supabaseUrl}/functions/v1/lead-magnet-capture`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${supabaseAnonKey}`,
          apikey: supabaseAnonKey,
        },
        body: JSON.stringify({ name, email, lead_magnet: 'proof_before_pitch' }),
      });
      if (!response.ok) throw new Error('Request failed');
      // Fire-and-forget analytics. Domain-only (no raw email/PII); track() is
      // internally try/catch'd so a failure here can never break the form.
      track('lead_magnet_submit', {
        lead_magnet: 'proof_before_pitch',
        email_domain: email.includes('@') ? email.split('@')[1].toLowerCase() : undefined,
      });
      onSubmitted?.();
      navigate('/proof-before-pitch');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <p className={`${mono} text-[10px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>{label}</p>
      <input
        type="text"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="First name"
        className="h-12 rounded-xl border border-[#1A1A1A]/[0.12] bg-[#F7F5F0] px-4 text-[15px] text-[#1A1A1A] placeholder:text-[#8B867B] focus:border-[#8B5CF6] focus:outline-none"
      />
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
        className="h-12 rounded-xl border border-[#1A1A1A]/[0.12] bg-[#F7F5F0] px-4 text-[15px] text-[#1A1A1A] placeholder:text-[#8B867B] focus:border-[#8B5CF6] focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-6 text-sm font-semibold text-[#EDEBE6] transition hover:bg-black disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : buttonLabel}
        <ArrowRight className="h-4 w-4" />
      </button>
      {status === 'error' ? (
        <p className="text-sm text-[#B3261E]">Something went wrong. Please try again.</p>
      ) : (
        <p className={`${mono} text-[10px] leading-4 text-[#8B867B]`}>No spam. Unsubscribe anytime.</p>
      )}
    </form>
  );
};

export default ReportCaptureForm;
