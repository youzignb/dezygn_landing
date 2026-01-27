import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Sparkles, User, Mail, Phone, Gift } from 'lucide-react';
import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

const PlaybookPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Missing Supabase environment variables.');
      }

      const response = await fetch(`${supabaseUrl}/functions/v1/lead-magnet-capture`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: supabaseAnonKey,
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          lead_magnet: 'lead_magnet_01',
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0118] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>The Personalized Visual Outreach System | Dezygn</title>
        <meta
          name="description"
          content="Get the free playbook: the exact system we use to turn cold prospects into paying clients using custom AI-generated product photos."
        />
      </Helmet>

      <HeaderV3 />

      <main className="relative pt-36 pb-24">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
            <section>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mb-8 shadow-sm">
                <Sparkles className="w-4 h-4 text-purple-300" />
                <span className="text-sm font-medium text-white">Free AI Photography Agency Playbook</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[1.05] tracking-tight">
                <span className="block text-white">The Personalized Visual Outreach System</span>
              </h1>

              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                This is the exact outreach playbook we use to land e-commerce clients for our AI photography agency.
              </p>

              <div className="space-y-4">
                {[
                  'The 3-Ingredient System for creating personalized outreach visuals in under an hour',
                  'The cold email templates we actually send to prospects',
                  'The Quality Gate checklist that ensures professional output every time',
                  'The offer structure that turns conversations into retainer clients',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/15 text-purple-300">
                      <Check className="w-4 h-4" />
                    </span>
                    <span className="text-sm md:text-base text-gray-200 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-purple-500/20 border border-purple-500/30 text-purple-200">
                  <Gift className="w-5 h-5" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold">Get the playbook</h2>
                  <p className="text-sm text-gray-400">Instant access in your inbox</p>
                </div>
              </div>

              {status === 'success' && (
                <div className="mb-6 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-emerald-300 text-sm">
                  ✅ Sent! Check your inbox
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-red-300 text-sm">
                  Something went wrong. Try again.
                </div>
              )}

              {status !== 'success' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="block">
                    <span className="text-xs text-gray-400">Name</span>
                    <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0b0b16] px-4 py-3 focus-within:border-purple-400/60">
                      <User className="w-4 h-4 text-purple-300" />
                      <input
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className="w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-xs text-gray-400">Email</span>
                    <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0b0b16] px-4 py-3 focus-within:border-purple-400/60">
                      <Mail className="w-4 h-4 text-purple-300" />
                      <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-xs text-gray-400">Phone</span>
                    <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0b0b16] px-4 py-3 focus-within:border-purple-400/60">
                      <Phone className="w-4 h-4 text-purple-300" />
                      <input
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        type="tel"
                        required
                        placeholder="+1 (555) 000-1234"
                        className="w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
                      />
                    </div>
                  </label>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 text-white text-base md:text-lg px-6 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Sending…' : 'Send Me The Playbook'}
                  </button>
                </form>
              )}

              <p className="mt-4 text-xs text-gray-500">We respect your privacy. Unsubscribe anytime.</p>
              <p className="mt-4 text-sm text-gray-300">
                Used by our agency to land $1,500+/month retainer clients
              </p>
            </section>
          </div>
        </div>
      </main>

      <FooterV3 />
    </div>
  );
};

export default PlaybookPage;
