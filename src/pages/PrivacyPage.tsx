import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap');

        .prose-invert { color: #d1d5db; }
        .prose-invert h1, .prose-invert h2, .prose-invert h3 { color: white; }
        .prose-invert strong { color: white; }
      `}</style>

      <HeaderV3 />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 pt-24 pb-12 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-black text-white mb-8 tracking-tight">
          Privacy Policy
        </h1>

        <div className="prose prose-invert prose-sm md:prose-base max-w-none space-y-8">
          <p className="text-gray-400">
            <strong>Last updated:</strong> 25 April 2026
          </p>

          <section>
            <p>
              This Privacy Policy explains how Wosho LLC (&ldquo;Wosho&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses,
              and protects your personal data when you use our websites, Dezygn SaaS
              platform, A.I.P.A. Launchpad program, and related services (collectively,
              the &ldquo;Services&rdquo;).
            </p>
            <p>
              We are committed to protecting your privacy and complying with applicable
              data protection laws, including, where applicable, the EU/EEA General
              Data Protection Regulation (GDPR) and similar laws in other jurisdictions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Data controller</h2>
            <p>For the purposes of this Privacy Policy, the data controller is:</p>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <p className="font-bold text-white">Wosho LLC</p>
              <p className="text-gray-400">1209 Mountain Road Pl NE, Suite R</p>
              <p className="text-gray-400">Albuquerque, NM 87110</p>
              <p className="text-gray-400">United States</p>
              <p className="mt-2">
                Email:{' '}
                <a href="mailto:support@dezygn.com" className="text-purple-400 hover:text-purple-300">
                  support@dezygn.com
                </a>
              </p>
            </div>
            <p>
              If you are located in the EU/EEA or UK, we process your personal data in
              accordance with GDPR where it applies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Personal data we collect</h2>
            <p>We may collect the following categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account and contact data:</strong> name, email address, company name, job title, billing address, shipping/address details, phone number.</li>
              <li><strong>Payment data:</strong> partial payment card details, transaction IDs, and billing information processed via third-party payment processors (e.g., Stripe). We do not store full card numbers.</li>
              <li><strong>Usage data:</strong> IP address, device type, browser type, operating system, time zone, pages viewed, referral URLs, and interactions with our websites and apps.</li>
              <li><strong>Service data:</strong> information related to your use of Dezygn and A.I.P.A. Launchpad, including project names, prompts, uploaded reference assets, generated images/videos, and coaching notes.</li>
              <li><strong>Communications:</strong> emails, messages, and support inquiries you send us; call or meeting recordings where we notify you that a session is being recorded.</li>
              <li><strong>Marketing data:</strong> your marketing preferences, responses to campaigns, and participation in surveys or webinars.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. How we collect personal data</h2>
            <p>We collect personal data in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Directly from you</strong> when you create an account, purchase a program, complete a form, submit support requests, or communicate with us.</li>
              <li><strong>Automatically</strong> through cookies and similar technologies when you browse our websites or use our apps.</li>
              <li><strong>From third-party service providers</strong> (e.g., payment processors, email service providers, analytics tools) where permitted by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Legal bases for processing (GDPR)</h2>
            <p>Where GDPR applies, we rely on the following legal bases to process your personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Performance of a contract</strong> &mdash; to provide the Services you purchase or request.</li>
              <li><strong>Legitimate interests</strong> &mdash; to operate, secure, and improve our Services, prevent fraud, and communicate with you about similar services (where permitted).</li>
              <li><strong>Consent</strong> &mdash; for certain marketing communications, use of non-essential cookies, and specific activities where required by law.</li>
              <li><strong>Legal obligations</strong> &mdash; to comply with tax, accounting, and other legal requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. How we use personal data</h2>
            <p>We use your personal data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain the Services you access or purchase.</li>
              <li>Process payments and manage subscriptions or installment plans.</li>
              <li>Deliver coaching, support, and product updates.</li>
              <li>Personalize content, recommendations, and communications.</li>
              <li>Communicate with you about your account, security issues, system updates, and administrative messages.</li>
              <li>Send marketing emails about our products, services, and promotions (where permitted and with an opt-out option).</li>
              <li>Monitor and analyse usage trends to improve our products and user experience.</li>
              <li>Detect, prevent, and address technical issues, abuse, or violations of our Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cookies and tracking technologies</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep you logged in and maintain session information.</li>
              <li>Remember your preferences.</li>
              <li>Analyse traffic and usage patterns (e.g., through analytics tools).</li>
            </ul>
            <p>
              Where required by law, we will ask for your consent before placing
              non-essential cookies and you can withdraw consent at any time via your
              browser or our cookie controls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. How we share personal data</h2>
            <p>We may share your personal data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service providers and processors:</strong> such as payment processors (e.g., Stripe), email and CRM providers, cloud hosting providers, analytics tools, customer support tools, and video conferencing platforms (e.g., Zoom).</li>
              <li><strong>Professional advisors:</strong> such as lawyers, accountants, and auditors where necessary for business operations and legal compliance.</li>
              <li><strong>Authorities:</strong> where required by law, regulation, court order, or to protect our rights or those of others.</li>
            </ul>
            <p><strong>We do not sell your personal data to third parties.</strong></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. International data transfers</h2>
            <p>
              Because we operate globally and use third-party service providers, your
              personal data may be transferred to and processed in countries outside of
              your own, including the United States and other jurisdictions that may
              have different data protection laws.
            </p>
            <p>
              Where required, we implement appropriate safeguards, such as standard
              contractual clauses, to protect your data during such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Data retention</h2>
            <p>
              We retain personal data for as long as necessary to fulfill the purposes
              described in this Privacy Policy, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>For as long as you have an active account or ongoing relationship with us.</li>
              <li>For the period required by tax, accounting, or other legal obligations.</li>
              <li>For a reasonable period to maintain records of transactions, resolve disputes, and enforce our agreements.</li>
            </ul>
            <p>
              When we no longer need your personal data, we will delete or anonymize it
              in a secure manner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Data security</h2>
            <p>
              We implement technical and organisational measures designed to protect
              your personal data against unauthorised access, alteration, disclosure, or
              destruction, including encryption in transit for payments and limiting
              access to personnel who need it to perform their duties.
            </p>
            <p>
              However, no method of transmission or storage is completely secure, and
              we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Your rights</h2>
            <p>Depending on your location and applicable law, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your personal data, subject to legal obligations.</li>
              <li>Object to or restrict the processing of your data in certain circumstances.</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Port your data to another provider, where technically feasible and legally required.</li>
            </ul>
            <p>
              To exercise these rights, contact us at{' '}
              <a href="mailto:support@dezygn.com" className="text-purple-400 hover:text-purple-300">
                support@dezygn.com
              </a>
              . We may need to verify your identity before responding.
            </p>
            <p>
              If you are in the EU/EEA or UK, you also have the right to lodge a
              complaint with your local data protection authority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Marketing communications</h2>
            <p>
              If you opt in to receive marketing communications, we may send you emails
              about programs, features, and promotions. You can opt out at any time by
              clicking the &ldquo;unsubscribe&rdquo; link in our emails or by contacting
              us directly.
            </p>
            <p>
              Even if you opt out of marketing, we may still send you non-promotional
              messages about your account and transactions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Children&rsquo;s privacy</h2>
            <p>
              The Services are not directed to children under 18, and we do not
              knowingly collect personal data from anyone under 18. If you believe a
              child has provided us with personal data, contact us so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">14. Changes to this privacy policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material
              changes, we will notify you by updating the &ldquo;Last updated&rdquo;
              date and, where appropriate, by additional notice (e.g., email or in-app
              notification).
            </p>
            <p>
              Your continued use of the Services after the effective date of the revised
              Privacy Policy constitutes your acceptance of the changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">15. Contact us</h2>
            <p>
              For questions about this Privacy Policy or our data practices, contact:
            </p>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <p className="font-bold text-white">Wosho LLC</p>
              <p className="text-gray-400">1209 Mountain Road Pl NE, Suite R</p>
              <p className="text-gray-400">Albuquerque, NM 87110</p>
              <p className="text-gray-400">United States</p>
              <p className="mt-2">
                Email:{' '}
                <a href="mailto:support@dezygn.com" className="text-purple-400 hover:text-purple-300">
                  support@dezygn.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <FooterV3 />
    </div>
  );
};

export default PrivacyPage;
