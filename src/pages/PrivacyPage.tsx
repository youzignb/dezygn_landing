import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

const PrivacyPage = () => {

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
        <h1 className="text-4xl font-black text-white mb-8 tracking-tight">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-sm md:prose-base max-w-none space-y-8">
          <p className="text-gray-400">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Company Information</h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <p className="font-bold text-white">Wosho LLC</p>
              <p className="text-gray-400">1209 Mountain Road Pl NE, Suite R</p>
              <p className="text-gray-400">Albuquerque, NM 87110</p>
              <p className="text-gray-400">United States</p>
              <p className="mt-2">Email: <a href="mailto:support@dezygn.com" className="text-purple-400 hover:text-purple-300">support@dezygn.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">Personal Information</h3>
                <ul className="list-disc pl-4 space-y-1 text-sm text-gray-400">
                  <li>Name and email address</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">Usage Information</h3>
                <ul className="list-disc pl-4 space-y-1 text-sm text-gray-400">
                  <li>Tool usage & analytics</li>
                  <li>Uploaded brand assets</li>
                  <li>Device & browser data</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Provide and improve our AI design services</li>
              <li>Process payments and manage your subscription</li>
              <li>Train AI models for Brand DNA™ functionality (your private models)</li>
              <li>Send important service updates and communications</li>
              <li>Provide customer support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
            <p className="mb-4">
              We do not sell your personal information. We share it only with service providers helping us operate our platform, or when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p>
              We implement robust technical and organizational measures (encryption, secure transmission) to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="mb-4">
              You have the right to access, correct, or delete your personal information. You can manage most settings directly in your account or contact support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-gray-400">
              For privacy questions, contact us at <a href="mailto:support@dezygn.com" className="text-purple-400 hover:text-purple-300">support@dezygn.com</a>.
            </p>
          </section>
        </div>
      </main>

      <FooterV3 className="border-t border-white/5" />
    </div>
  );
};

export default PrivacyPage;
