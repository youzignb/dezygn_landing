import { MessageCircle, Clock, Globe, ExternalLink, Mail, BookOpen, ArrowRight } from 'lucide-react';
import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <HeaderV3 />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,80,200,0.15),transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-8">
            <MessageCircle className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300 text-sm">We're here to help</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get in{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about Dezygn? Need help getting started? 
            We're ready to help you build your AI photography business.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Live Chat */}
            <a
              href="https://chat.dezygn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-green-500/30 transition-all text-center"
            >
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <MessageCircle className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Live Chat</h3>
              <p className="text-gray-400 mb-5">
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
              className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-blue-500/30 transition-all text-center"
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Mail className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email Support</h3>
              <p className="text-gray-400 mb-5">
                Detailed help for complex questions. Include screenshots if you can.
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-400 text-sm">
                <Clock className="w-4 h-4" />
                <span>Response within 24 hours</span>
              </div>
            </a>

            {/* Documentation */}
            <a
              href="https://intercom.help/dezygn"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-purple-500/30 transition-all text-center"
            >
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <BookOpen className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Help Center</h3>
              <p className="text-gray-400 mb-5">
                Tutorials, guides, and FAQs. Most questions are answered here.
              </p>
              <div className="flex items-center justify-center gap-2 text-purple-400 text-sm">
                <ExternalLink className="w-4 h-4" />
                <span>Browse articles</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Support Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Support Hours</h3>
              <p className="text-gray-400">
                Monday – Friday<br />
                9:00 AM – 6:00 PM EST
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Support</h3>
              <p className="text-gray-400">
                Supporting creators in<br />
                195+ countries worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Jump in and start creating. If you need anything, we're just a chat away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.dezygn.com"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all text-lg"
            >
              Start Creating <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://chat.dezygn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all text-lg"
            >
              <MessageCircle className="w-5 h-5" /> Open Chat
            </a>
          </div>
        </div>
      </section>

      <FooterV3 />
    </div>
  );
}

export default ContactPage;
