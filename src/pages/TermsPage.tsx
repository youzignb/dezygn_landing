import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

const TermsPage = () => {

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white flex flex-col">
      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap');
        
        .prose-invert {
          color: #d1d5db;
        }
        .prose-invert h1, .prose-invert h2, .prose-invert h3 {
          color: white;
        }
        .prose-invert strong {
          color: white;
        }
      `}</style>

      <HeaderV3 />

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 pt-24 pb-12 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-black text-white mb-8 tracking-tight">Terms of Service</h1>
        
        <div className="prose prose-invert prose-sm md:prose-base max-w-none space-y-8">
          <p className="text-gray-400">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using Dezygn services provided by Wosho LLC, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Company Information</h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <p className="font-bold text-white">Wosho LLC</p>
              <p className="text-gray-400">1209 Mountain Road Pl NE, Suite R</p>
              <p className="text-gray-400">Albuquerque, NM 87110</p>
              <p className="text-gray-400">United States</p>
              <p className="mt-2">Email: <a href="mailto:support@dezygn.com" className="text-purple-400 hover:text-purple-300">support@dezygn.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Description of Service</h2>
            <p className="mb-4">
              Dezygn is an AI-powered design platform that enables users to create visual content including images, videos, and designs. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>AI-powered image and video generation</li>
              <li>Brand DNA™ training for consistent branding</li>
              <li>Template libraries and design tools</li>
              <li>Team collaboration features</li>
              <li>White-label delivery options</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. User Accounts</h2>
            <h3 className="text-lg font-bold text-white mt-6 mb-3">Account Creation</h3>
            <p>
              You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials.
            </p>
            
            <h3 className="text-lg font-bold text-white mt-6 mb-3">Account Responsibilities</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>You are responsible for all activities under your account</li>
              <li>You must notify us immediately of any security breach</li>
              <li>You may not share your account with others</li>
              <li>You must be at least 18 years old to create an account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Acceptable Use</h2>
            <p className="mb-4">
              You may use our services for lawful business and personal purposes. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Create content that infringes intellectual property rights</li>
              <li>Generate harmful, illegal, or offensive material</li>
              <li>Attempt to reverse engineer our AI models</li>
              <li>Use the service to compete with us directly</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">Your Content</h3>
                <p className="text-sm text-gray-400">
                  You retain ownership of content you upload. You grant us a license to use this content solely to provide our services.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">Generated Content</h3>
                <p className="text-sm text-gray-400">
                  You own the rights to content generated using our platform, subject to these terms and applicable law.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Payment & Cancellation</h2>
            <p className="mb-4">
              Subscription fees are billed in advance. You may cancel your subscription at any time, effective at the end of your current billing period. Fees are non-refundable except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of New Mexico, United States. Any disputes will be resolved in the courts of New Mexico.
            </p>
          </section>
        </div>
      </main>

      <FooterV3 className="border-t border-white/5" />
    </div>
  );
};

export default TermsPage;
