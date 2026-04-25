import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

const TermsPage = () => {
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
          Terms of Use &amp; Program Agreement
        </h1>

        <div className="prose prose-invert prose-sm md:prose-base max-w-none space-y-8">
          <p className="text-gray-400">
            <strong>Last updated:</strong> 25 April 2026
          </p>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Company and scope</h2>
            <p>
              These Terms of Use (the &ldquo;Terms&rdquo;) govern your access to and use
              of the websites, products, and services operated by Wosho LLC, including
              the A.I.P.A. Launchpad coaching program and the Dezygn AI-powered SaaS
              platform (collectively, the &ldquo;Services&rdquo;).
            </p>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <p className="font-bold text-white">Wosho LLC</p>
              <p className="text-gray-400">A New Mexico limited liability company</p>
              <p className="text-gray-400">1209 Mountain Road Pl NE, Suite R</p>
              <p className="text-gray-400">Albuquerque, NM 87110, USA</p>
              <p className="mt-2 text-gray-400">
                (&ldquo;Wosho&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
              </p>
            </div>
            <p>
              By purchasing, accessing, or using any of our Services, you agree to be
              bound by these Terms. If you do not agree, you must not use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
            <p>
              You must be at least 18 years old and have the legal capacity to enter
              into a binding contract to use the Services.
            </p>
            <p>
              If you access the Services on behalf of a business or other entity, you
              represent that you are authorised to accept these Terms on its behalf and
              that the entity accepts responsibility for your use of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Description of services</h2>
            <h3 className="text-xl font-semibold mb-2">3.1 A.I.P.A. Launchpad program</h3>
            <p>
              A.I.P.A. Launchpad is a 6-week implementation and coaching program designed
              to help freelancers and creatives add AI photography as a service line and
              land their first paying clients during or shortly after the program. It
              includes live group calls, 1:1 feedback, access to training materials, and
              community features as described on the applicable sales page at the time
              of purchase.
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">3.2 Dezygn SaaS platform</h3>
            <p>
              Dezygn is an AI-powered SaaS platform that enables users to generate
              professional-quality visual content, including images, videos, and
              marketing materials, and to manage workflows related to these assets.
              Features, plans, and usage limits are described on the Dezygn website and
              may change from time to time.
            </p>
            <p>
              We may update, modify, or discontinue any part of the Services at our
              discretion, provided that such changes do not materially breach existing
              paid commitments without offering you a reasonable alternative or
              pro-rated refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Nature of services and professional scope</h2>
            <p>
              The A.I.P.A. Launchpad program provides coaching, education, and
              implementation support related to business, marketing, and creative
              workflows. It does not provide legal, tax, investment, medical, or
              psychological advice.
            </p>
            <p>
              Nothing in the Services should be construed as financial, legal, tax, or
              investment advice. You are solely responsible for your own decisions and
              should consult appropriate professionals regarding your specific
              situation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. User responsibilities</h2>
            <p>You are solely responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your actions, business decisions, and results.</li>
              <li>The accuracy of all information you provide to us.</li>
              <li>Ensuring that your use of AI-generated content complies with applicable laws, platform rules, and third-party rights (including intellectual property and publicity rights).</li>
            </ul>
            <p>
              For A.I.P.A. Launchpad, you understand that your progress and results
              depend heavily on your own effort, implementation, and consistency.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Performance guarantee (Launchpad)</h2>
            <p>
              If you enroll in A.I.P.A. Launchpad, the following Performance Guarantee
              applies, subject to strict conditions:
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-6">6.1 Conditions</h3>
            <p>You will be eligible for the Performance Guarantee only if, by the end of the 6-week cohort, you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Complete every weekly milestone as outlined in the program materials.</li>
              <li>Send at least 10 outreach messages or applications per day during weeks 2 through 6 (business days), using methods consistent with the program&rsquo;s frameworks.</li>
              <li>Attend at least 6 live group calls and/or 1:1 calls during the cohort.</li>
              <li>Make a good-faith effort to follow the frameworks and processes taught in the program.</li>
            </ul>
            <p>
              You must document your outreach and implementation activities (e.g., logs,
              CRM exports, screenshots) and provide them upon request so we can verify
              that the conditions have been met.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-6">6.2 Remedy</h3>
            <p>
              If you meet all of the above conditions and still have not landed a paying
              client for AI photography services by the end of the 6-week cohort, you
              may choose one of the following remedies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Join the next available A.I.P.A. Launchpad cohort at no additional cost; or</li>
              <li>Receive ongoing 1:1 support from us until you close your first paying AI photography client, at no additional cost.</li>
            </ul>
            <p>
              To claim the Performance Guarantee, you must email us at{' '}
              <a href="mailto:support@dezygn.com" className="text-purple-400 hover:text-purple-300">
                support@dezygn.com
              </a>{' '}
              within 7 days after the end of the cohort, attaching the requested
              documentation.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-6">6.3 Exclusive remedy</h3>
            <p>
              The Performance Guarantee is your exclusive remedy for not obtaining a
              client result through the program. <strong>No refunds are provided under
              this guarantee.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. No earnings or results guarantee</h2>
            <p>
              Aside from the specific Performance Guarantee above, we do not guarantee
              that you will earn any particular income, secure any particular number of
              clients, or achieve any specific business outcome through the Services.
            </p>
            <p>
              Any testimonials, case studies, or examples of earnings and client results
              are illustrative of specific individuals and do not represent typical
              results for all users. Your outcomes will vary based on your skills,
              experience, market conditions, and effort.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Payments, fees, and refunds</h2>
            <p>
              Prices, payment plans, and available options for the Services are
              displayed on the applicable sales or checkout page at the time of
              purchase.
            </p>
            <p>
              By submitting payment information, you authorise us and our payment
              processors (such as Stripe) to charge the applicable amount, including any
              agreed-upon installment payments.
            </p>
            <p>
              <strong>Unless expressly stated otherwise on the sales page, all sales
              are final and non-refundable</strong>, except where required by law or
              under the explicit terms of the Performance Guarantee above.
            </p>
            <p>
              You agree not to initiate chargebacks without first contacting us to
              attempt in good faith to resolve the issue. If you initiate a chargeback
              in violation of these Terms, we reserve the right to suspend or terminate
              your access to the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Installment plans and default</h2>
            <p>
              If you select a payment plan, you must ensure that each installment is
              paid on time. Failure to complete installment payments may result in
              immediate suspension or termination of your access to the Services.
            </p>
            <p>
              We may use third-party services to assist with payment collection. You
              remain responsible for all amounts due regardless of your level of
              participation in the program.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Intellectual property</h2>
            <p>
              All content and materials provided through the Services&mdash;including
              but not limited to text, videos, frameworks, playbooks, templates,
              workflows, scripts, designs, software, and AI models&mdash;are owned by
              Wosho LLC or its licensors and are protected by copyright, trademark, and
              other intellectual property laws.
            </p>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to use the
              materials for your personal or internal business purposes only. You may
              not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Share, resell, sublicense, or distribute the materials to third parties.</li>
              <li>Use the materials to create competing courses, coaching programs, or SaaS services that substantially replicate our proprietary frameworks.</li>
              <li>Remove proprietary notices or claim the materials as your own.</li>
            </ul>
            <p>
              You retain ownership of the original content you create and upload to the
              Services, subject to any license you grant us to host or display that
              content as needed to provide the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Acceptable use</h2>
            <p>You agree not to use the Services to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable law or regulation.</li>
              <li>Infringe or misappropriate the intellectual property or privacy rights of others.</li>
              <li>Send spam, harassment, or misleading communications.</li>
              <li>Upload malicious code or interfere with the operation or security of the Services.</li>
            </ul>
            <p>
              We may suspend or terminate your access if we reasonably believe you have
              violated this acceptable use section.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Confidentiality</h2>
            <p>
              In the context of coaching programs and community spaces, both you and we
              may share non-public business information. Each party agrees to treat such
              information as confidential and not disclose it to third parties, except
              as required by law or with the other party&rsquo;s consent.
            </p>
            <p>
              Group programs involve multiple participants, and we cannot control what
              other participants do with information shared in group settings. You
              should only share information you are comfortable disclosing in a group
              environment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Third-party services</h2>
            <p>
              The Services may integrate with third-party tools (e.g., Stripe, Zoom,
              email platforms, AI providers, and hosting services). Your use of those
              tools is subject to their own terms and privacy policies, and we are not
              responsible for their acts or omissions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">14. Disclaimers</h2>
            <p>
              The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis. To the fullest extent permitted by law, we
              disclaim all warranties, express or implied, including implied warranties
              of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p>
              We do not warrant that the Services will be uninterrupted, error-free, or
              free of harmful components, nor that any particular result will be
              achieved through their use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">15. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, in no event will Wosho LLC, its
              members, employees, or contractors be liable for any indirect, incidental,
              consequential, special, or punitive damages, including loss of profits,
              revenue, or data, arising out of or in connection with your use of the
              Services.
            </p>
            <p>
              Our total aggregate liability for any claim arising out of or relating to
              the Services will not exceed the amount you paid to us for the Services
              giving rise to the claim in the twelve (12) months preceding the event.
            </p>
            <p>
              Some jurisdictions do not allow certain limitations of liability, so these
              limitations may not apply to you to the extent prohibited by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">16. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Wosho LLC and its
              members, employees, and contractors from and against any claims,
              liabilities, damages, losses, and expenses (including reasonable
              attorneys&rsquo; fees) arising out of or related to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use of the Services.</li>
              <li>Your violation of these Terms.</li>
              <li>Your infringement of any third-party rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">17. Governing law and dispute resolution</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of
              the State of New Mexico, USA, without regard to its conflict-of-law rules,
              except that mandatory consumer protection laws in your country of
              residence may also apply.
            </p>
            <p>
              Any dispute arising out of or relating to these Terms or the Services
              shall first be addressed through good-faith informal negotiations. If the
              dispute is not resolved within 30 days, it shall be brought exclusively in
              the state or federal courts located in New Mexico, USA, and you consent
              to their jurisdiction and venue.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">18. Changes to these terms</h2>
            <p>
              We may update these Terms from time to time. If we make material changes,
              we will notify you by updating the &ldquo;Last updated&rdquo; date and,
              where appropriate, by additional notice (e.g., email or in-app
              notification). Your continued use of the Services after changes take
              effect constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">19. Contact</h2>
            <p>For questions about these Terms, contact:</p>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <p className="font-bold text-white">Wosho LLC</p>
              <p className="text-gray-400">1209 Mountain Road Pl NE, Suite R</p>
              <p className="text-gray-400">Albuquerque, NM 87110, USA</p>
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

export default TermsPage;
