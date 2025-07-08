import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Logo from '../components/Logo';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo variant="default" size="md" />
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600 transition">Home</Link>
            <Link to="/special" className="text-gray-600 hover:text-purple-600 transition">Special</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-purple-600 transition">Pricing</Link>
            <Link to="/report" className="text-gray-600 hover:text-purple-600 transition">Report</Link>
            <a 
              href="https://chat.dezygn.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-300"
            >
              Login
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Company Information</h2>
            <p className="text-gray-700 mb-4">
              This Privacy Policy is provided by:
            </p>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="font-bold">Youzign SPRL</p>
              <p>16 rue de la Glaciere</p>
              <p>1060 Saint-Gilles</p>
              <p>Belgium</p>
              <p>Email: <a href="mailto:support@youzign.com" className="text-purple-600 hover:underline">support@youzign.com</a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Name and email address when you create an account</li>
              <li>Payment information for subscription processing</li>
              <li>Communication preferences and support requests</li>
            </ul>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">Usage Information</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>How you use our AI design tools and features</li>
              <li>Content you create and upload for Brand DNA™ training</li>
              <li>Technical information about your device and browser</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Provide and improve our AI design services</li>
              <li>Process payments and manage your subscription</li>
              <li>Train AI models for Brand DNA™ functionality</li>
              <li>Send important service updates and communications</li>
              <li>Provide customer support and technical assistance</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share information only in these limited circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>With service providers who help us operate our platform</li>
              <li>When required by law or to protect our legal rights</li>
              <li>In connection with a business transfer or acquisition</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure data transmission, and regular security assessments.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your personal information</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-700">
              We use cookies and similar technologies to improve your experience, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Transfers</h2>
            <p className="text-gray-700">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. We will notify you of significant changes by email or through our platform. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p>Email: <a href="mailto:support@youzign.com" className="text-purple-600 hover:underline">support@youzign.com</a></p>
              <p>Address: 16 rue de la Glaciere, 1060 Saint-Gilles, Belgium</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <Logo variant="light" size="md" />
              <div className="flex flex-col sm:flex-row gap-6 text-white/70">
                <Link to="/privacy" className="text-white font-bold">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <a 
                  href="mailto:support@youzign.com" 
                  className="hover:text-white transition-colors"
                >
                  Contact Support
                </a>
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
};

export default PrivacyPage;