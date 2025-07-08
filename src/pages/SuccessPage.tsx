import { Check, Mail, Key } from 'lucide-react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

export default function SuccessPage() {
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
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-12 h-12 text-green-600" />
          </div>

          {/* Thank You Message */}
          <h1 className="text-5xl font-black text-gray-900 mb-6">
            Thank You for Your Purchase!
          </h1>

          {/* Instructions */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-xl text-gray-700">
                Please check your email for your license key(s)
              </p>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Key className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-xl text-gray-700">
                Copy your license key(s) from the email
              </p>
            </div>

            <div className="border-t pt-6">
              <p className="text-lg text-gray-600 mb-6">
                Then click the button below to activate your account
              </p>

              {/* Activation Button */}
              <a 
                href="https://chat.dezygn.com/activation"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Activate Your Account →
              </a>
            </div>
          </div>

          {/* Support Note */}
          <p className="text-gray-600">
            Need help? Contact us at support@youzign.com
          </p>
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