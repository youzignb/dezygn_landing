import Layout from '../components/Layout';

const TermsPage = () => {
  return (
    <Layout variant="light">

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700">
              By accessing or using Dezygn services provided by Youzign SPRL, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Company Information</h2>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="font-bold">Youzign SPRL</p>
              <p>16 rue de la Glaciere</p>
              <p>1060 Saint-Gilles</p>
              <p>Belgium</p>
              <p>Email: <a href="mailto:support@youzign.com" className="text-purple-600 hover:underline">support@youzign.com</a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Dezygn is an AI-powered design platform that enables users to create visual content including images, videos, and designs. Our services include:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>AI-powered image and video generation</li>
              <li>Brand DNA™ training for consistent branding</li>
              <li>Template libraries and design tools</li>
              <li>Team collaboration features</li>
              <li>White-label delivery options</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Accounts</h2>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Account Creation</h3>
            <p className="text-gray-700 mb-4">
              You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">Account Responsibilities</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>You are responsible for all activities under your account</li>
              <li>You must notify us immediately of any security breach</li>
              <li>You may not share your account with others</li>
              <li>You must be at least 18 years old to create an account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use</h2>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Permitted Uses</h3>
            <p className="text-gray-700 mb-4">
              You may use our services for lawful business and personal purposes, including creating marketing materials, social media content, and other visual designs.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">Prohibited Uses</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Creating content that infringes intellectual property rights</li>
              <li>Generating harmful, illegal, or offensive material</li>
              <li>Attempting to reverse engineer our AI models</li>
              <li>Using the service to compete with us directly</li>
              <li>Violating any applicable laws or regulations</li>
              <li>Creating deepfakes or misleading content without proper disclosure</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Your Content</h3>
            <p className="text-gray-700 mb-4">
              You retain ownership of content you upload for Brand DNA™ training and other inputs. You grant us a license to use this content solely to provide our services.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">Generated Content</h3>
            <p className="text-gray-700 mb-4">
              You own the rights to content generated using our platform, subject to these terms and applicable law. However, you are responsible for ensuring your use complies with all relevant laws and third-party rights.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Platform</h3>
            <p className="text-gray-700">
              Our platform, AI models, and underlying technology remain our property. You may not copy, modify, or create derivative works of our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment and Billing</h2>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Subscription Fees</h3>
            <p className="text-gray-700 mb-4">
              Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">Price Changes</h3>
            <p className="text-gray-700 mb-4">
              We may change our pricing with 30 days' notice. Changes will not affect your current billing cycle.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">Payment Methods</h3>
            <p className="text-gray-700">
              We accept major credit cards and other payment methods as displayed during checkout. You authorize us to charge your payment method for all fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cancellation and Termination</h2>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Your Right to Cancel</h3>
            <p className="text-gray-700 mb-4">
              You may cancel your subscription at any time. Cancellation will be effective at the end of your current billing period.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Right to Terminate</h3>
            <p className="text-gray-700">
              We may suspend or terminate your account for violations of these terms, non-payment, or other reasons with appropriate notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Service Availability</h2>
            <p className="text-gray-700">
              We strive to maintain high service availability but cannot guarantee uninterrupted access. We may perform maintenance that temporarily affects service availability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimers and Limitation of Liability</h2>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Service Disclaimers</h3>
            <p className="text-gray-700 mb-4">
              Our services are provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or suitability of generated content.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">Limitation of Liability</h3>
            <p className="text-gray-700">
              To the maximum extent permitted by law, our liability is limited to the amount you paid for the services in the preceding 12 months.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify and hold us harmless from claims arising from your use of our services, violation of these terms, or infringement of third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700">
              These terms are governed by Belgian law. Any disputes will be resolved in the courts of Belgium.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700">
              We may update these terms periodically. We will notify you of significant changes and your continued use constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p>Email: <a href="mailto:support@youzign.com" className="text-purple-600 hover:underline">support@youzign.com</a></p>
              <p>Address: 16 rue de la Glaciere, 1060 Saint-Gilles, Belgium</p>
            </div>
          </section>
        </div>
      </div>

    </Layout>
  );
};

export default TermsPage;