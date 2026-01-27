import { Link } from 'react-router-dom';
import { MessageCircle, Clock, Globe, ExternalLink, Mail, BookOpen, ArrowRight } from 'lucide-react';
import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <HeaderV3 />

      <main className="pt-24">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300">Contact</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
            <MessageCircle className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">We're here to help</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Get in{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about Dezygn? Need help getting started?
            We're ready to help you build your AI photography business.
          </p>
        </section>

        {/* Contact Options */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Live Chat */}
            <a
              href="https://chat.dezygn.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-green-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Get instant help from our support team. Fastest way to get answers.
              </p>
              <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Usually responds in minutes</span>
              </div>
            </a>

            {/* Email Support */}
            <a
              href="mailto:support@dezygn.com"
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Detailed help for complex questions. Include screenshots if you can.
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-400 text-sm">
                <Clock className="w-4 h-4" />
                <span>Response within 24 hours</span>
              </div>
            </a>

            {/* Help Center */}
            <a
              href="https://intercom.help/dezygn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Help Center</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Tutorials, guides, and FAQs. Most questions are answered here.
              </p>
              <div className="flex items-center justify-center gap-2 text-purple-400 text-sm">
                <ExternalLink className="w-4 h-4" />
                <span>Browse articles</span>
              </div>
            </a>
          </div>
        </section>

        {/* Support Info */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-blue-400">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Support Hours</h3>
              <p className="text-gray-400 text-sm">
                Monday – Friday<br />
                9:00 AM – 6:00 PM EST
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-green-400">
                  <Globe className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Support</h3>
              <p className="text-gray-400 text-sm">
                Supporting creators in<br />
                195+ countries worldwide
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Jump in and start creating. If you need anything, we're just a chat away.
            </p>
            <a
              href="https://chat.dezygn.com/signup"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <FooterV3 />
    </div>
  );
}

export default ContactPage;
