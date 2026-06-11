import { Link } from 'react-router-dom';
import { MessageCircle, Clock, Globe, Mail, BookOpen, ArrowRight } from 'lucide-react';
import HeaderV4 from '../components/HeaderV4';
import FooterV4 from '../components/FooterV4';

const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
const serif = "font-['Instrument_Serif',Georgia,serif]";

function ContactPage() {
  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <HeaderV4 />

      <main className="pt-28">
        {/* Breadcrumbs */}
        <div className="mx-auto max-w-6xl px-5 py-4">
          <nav aria-label="Breadcrumb" className={`${mono} text-xs text-[#8B867B]`}>
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="transition hover:text-[#1A1A1A]">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#6B6459]">Contact</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden px-5 py-16 text-center sm:py-20">
          <span aria-hidden className={`${serif} pointer-events-none absolute -right-4 top-8 hidden rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}>
            ✦
          </span>
          <div className="mx-auto max-w-3xl">
            <p className={`${mono} mb-6 inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
              <MessageCircle className="h-3.5 w-3.5" />
              We're here to help
            </p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-6xl">
              Get in <span className={`${serif} italic font-normal text-[#7C3AED]`}>Touch.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B6459]">
              Have questions about Dezygn? Need help getting started?
              We're ready to help you build your AI photography business.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {/* Live Chat */}
            <a
              href="https://chat.dezygn.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="-rotate-1 rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-8 text-center shadow-[0_24px_60px_rgba(26,26,26,0.08)] transition-transform duration-500 ease-out hover:rotate-0"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[#8B5CF6] text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold tracking-tight text-[#1A1A1A]">Live Chat</h2>
              <p className="mt-2 text-sm leading-6 text-[#6B6459]">
                Get instant help from our support team. Fastest way to get answers.
              </p>
              <div className={`${mono} mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#E3F0E6] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[#1F6B3A]`}>
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#1F6B3A]" />
                Usually responds in minutes
              </div>
            </a>

            {/* Email Support */}
            <a
              href="mailto:support@dezygn.com"
              className="rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-8 text-center shadow-[0_24px_60px_rgba(26,26,26,0.08)] transition-transform duration-500 ease-out hover:rotate-0 md:rotate-1"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[#1A1A1A] text-[#EDEBE6]">
                <Mail className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold tracking-tight text-[#1A1A1A]">Email Support</h2>
              <p className="mt-2 text-sm leading-6 text-[#6B6459]">
                Detailed help for complex questions. Include screenshots if you can.
              </p>
              <div className={`${mono} mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#EEE8FF] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[#7C3AED]`}>
                <Clock className="h-3.5 w-3.5" />
                Response within 24 hours
              </div>
            </a>

            {/* Help Center */}
            <Link
              to="/help"
              className="-rotate-1 rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-8 text-center shadow-[0_24px_60px_rgba(26,26,26,0.08)] transition-transform duration-500 ease-out hover:rotate-0"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[#8B5CF6] text-white">
                <BookOpen className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold tracking-tight text-[#1A1A1A]">Help Center</h2>
              <p className="mt-2 text-sm leading-6 text-[#6B6459]">
                Guides and documentation for every part of Dezygn. Most questions are answered here.
              </p>
              <div className={`${mono} mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#EEE8FF] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[#7C3AED]`}>
                <ArrowRight className="h-3.5 w-3.5" />
                Browse articles
              </div>
            </Link>
          </div>
        </section>

        {/* Support Info */}
        <section className="px-5 py-20 sm:py-24">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-8 text-center shadow-[0_24px_60px_rgba(26,26,26,0.08)]">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[#1A1A1A] text-[#EDEBE6]">
                <Clock className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold tracking-tight text-[#1A1A1A]">Support Hours</h2>
              <p className={`${mono} mt-2 text-xs leading-6 text-[#6B6459]`}>
                Monday – Friday<br />
                9:00 AM – 6:00 PM EST
              </p>
            </div>

            <div className="rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-8 text-center shadow-[0_24px_60px_rgba(26,26,26,0.08)]">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[#8B5CF6] text-white">
                <Globe className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold tracking-tight text-[#1A1A1A]">Global Support</h2>
              <p className={`${mono} mt-2 text-xs leading-6 text-[#6B6459]`}>
                Supporting creators in<br />
                195+ countries worldwide
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-20 sm:pb-28">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-[#7C3AED] p-10 text-center text-white shadow-[0_40px_100px_rgba(124,58,237,0.35)] sm:p-16">
            <span aria-hidden className={`${serif} absolute -left-4 -top-8 rotate-[-12deg] text-[160px] italic leading-none text-white/10`}>
              ✳
            </span>
            <span aria-hidden className={`${serif} absolute -bottom-12 -right-2 rotate-12 text-[180px] italic leading-none text-white/10`}>
              ✦
            </span>
            <h2 className="relative z-10 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Ready to get <span className={`${serif} italic font-normal`}>started?</span>
            </h2>
            <p className="relative z-10 mx-auto mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Jump in and start creating. If you need anything, we're just a chat away.
            </p>
            <a
              href="https://chat.dezygn.com/signup"
              className="relative z-10 mt-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-9 text-[15px] font-semibold text-[#EDEBE6] transition hover:bg-black"
            >
              Start Free
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <FooterV4 />
    </div>
  );
}

export default ContactPage;
