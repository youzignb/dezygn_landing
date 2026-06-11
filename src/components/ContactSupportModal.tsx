import { useEffect, useState } from 'react';
import { X, Send, CheckCircle, Mail } from 'lucide-react';

const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";

const inputClasses =
  'w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#F7F5F0] px-4 py-3 text-[15px] text-[#1A1A1A] placeholder:text-[#8B867B] outline-none transition focus:border-[#8B5CF6] focus:bg-white';

/**
 * Support contact modal — posts to the support-contact Supabase edge function,
 * which forwards the message to support@youzign.com via Resend (same stack as
 * lead-magnet-capture).
 */
function ContactSupportModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      if (!supabaseUrl || !supabaseAnonKey) throw new Error('Missing Supabase environment variables.');

      const response = await fetch(`${supabaseUrl}/functions/v1/support-contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${supabaseAnonKey}`,
          apikey: supabaseAnonKey,
        },
        body: JSON.stringify({
          email,
          subject,
          message,
          page: typeof window !== 'undefined' ? window.location.pathname : '',
        }),
      });
      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-label="Contact support"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-[#1A1A1A]/55 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-lg rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-7 shadow-[0_40px_100px_rgba(26,26,26,0.35)] sm:p-9">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-[#1A1A1A]/10 text-[#6B6459] transition hover:bg-[#F7F5F0] hover:text-[#1A1A1A]"
        >
          <X className="h-4 w-4" />
        </button>

        {status === 'success' ? (
          <div className="py-6 text-center">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#8B5CF6] text-white">
              <CheckCircle className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[#1A1A1A]">Message sent.</h2>
            <p className="mx-auto mt-3 max-w-sm text-[15px] leading-7 text-[#6B6459]">
              Thanks — we read everything. You'll hear back at <span className="font-medium text-[#1A1A1A]">{email}</span>{' '}
              within 24 hours on business days.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-[#1A1A1A] px-7 text-sm font-semibold text-[#EDEBE6] transition hover:bg-black"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <p className={`${mono} inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>
                <Mail className="h-3.5 w-3.5" />
                Contact support
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1A1A1A]">How can we help?</h2>
              <p className="mt-2 text-sm leading-6 text-[#6B6459]">
                Goes straight to a human at support@youzign.com. Replies within 24 hours on business days.
              </p>
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email (use your Dezygn account email)"
              className={inputClasses}
            />
            <input
              type="text"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder="Subject (optional)"
              className={inputClasses}
            />
            <textarea
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="What happened, and what did you expect instead?"
              rows={5}
              className={`${inputClasses} resize-y`}
            />
            {status === 'error' ? (
              <p className="text-sm text-[#B3261E]">
                Something went wrong sending your message. Please retry, or email support@youzign.com directly.
              </p>
            ) : null}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#8B5CF6] px-8 text-sm font-semibold text-white transition hover:bg-[#7C3AED] disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending…' : 'Send message'}
              <Send className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactSupportModal;
