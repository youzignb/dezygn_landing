import { Check, Mail, Key, Info, Copy, ExternalLink } from 'lucide-react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SuccessPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSubject, setCopiedSubject] = useState(false);

  const emailAddress = "payments@checkoutpage.com";
  const emailSubject = "Payment confirmation";

  const copyToClipboard = async (text: string, type: 'email' | 'subject') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedSubject(true);
        setTimeout(() => setCopiedSubject(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const emailServices = [
    { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox' },
    { name: 'Outlook', url: 'https://outlook.live.com/mail/' },
    { name: 'Yahoo', url: 'https://mail.yahoo.com/' },
    { name: 'Apple Mail', url: 'mailto:' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/">
            <Logo variant="default" size="md" />
          </Link>
        </div>
      </nav>

      {/* Success Content */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-black text-gray-900 mb-2">Thank You!</h1>
            <p className="text-gray-600">Your purchase was successful</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-blue-900">Check Your Email</h3>
              </div>
              
              <p className="text-blue-800 text-sm mb-3">Look for an email from:</p>
              
              <div className="bg-white border border-blue-200 rounded-lg p-2 mb-3 flex items-center justify-between">
                <span className="font-mono text-xs text-gray-700">{emailAddress}</span>
                <button
                  onClick={() => copyToClipboard(emailAddress, 'email')}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-xs"
                >
                  {copiedEmail ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <p className="text-blue-800 text-sm mb-2">Subject starts with:</p>
              
              <div className="bg-white border border-blue-200 rounded-lg p-2 mb-4 flex items-center justify-between">
                <span className="font-mono text-xs text-gray-700">"{emailSubject}"</span>
                <button
                  onClick={() => copyToClipboard(emailSubject, 'subject')}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-xs"
                >
                  {copiedSubject ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copiedSubject ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {emailServices.map((service) => (
                  <a
                    key={service.name}
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-white border border-blue-200 text-blue-700 px-2 py-1 rounded text-xs hover:bg-blue-50"
                  >
                    {service.name}
                    <ExternalLink className="w-2 h-2" />
                  </a>
                ))}
              </div>

              <p className="text-blue-700 text-xs mb-2">This email contains your license keys.</p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2">
                <p className="text-yellow-800 text-xs">
                  <strong>Note:</strong> If you purchased both the one-time upgrade and subscription, you'll receive separate emails with different license keys for each purchase.
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Key className="w-5 h-5 text-purple-600" />
                Next Steps
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xs">1</span>
                  <span className="text-gray-700">Find the email with your license keys</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xs">2</span>
                  <span className="text-gray-700">Copy your license key(s)</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">3</span>
                  <span className="text-gray-700">Activate your account below</span>
                </div>
              </div>

              <a 
                href="https://chat.dezygn.com/activation"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Activate Your Account →
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              Need help? Contact us at <span className="font-medium">support@youzign.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <Logo variant="light" size="md" />
              <div className="flex flex-col sm:flex-row gap-6 text-white/70">
                <Link to="/terms" className="hover:text-white transition">Terms</Link>
                <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
              </div>
            </div>
            <div className="text-white/50 text-sm">
              © 2025 Youzign SPRL. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}