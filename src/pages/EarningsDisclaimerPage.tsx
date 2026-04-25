import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

const EarningsDisclaimerPage = () => {
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
          Earnings Disclaimer
        </h1>

        <div className="prose prose-invert prose-sm md:prose-base max-w-none space-y-8">
          <p className="text-gray-400">
            <strong>Last updated:</strong> 25 April 2026
          </p>

          <section>
            <p>
              The information, products, and services provided by Wosho LLC, including
              but not limited to the A.I.P.A. Launchpad program, Dezygn SaaS platform,
              websites, content, and marketing materials (collectively, the
              &ldquo;Offerings&rdquo;), may reference potential business results,
              including client wins, revenue, or income.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. No earnings or results guarantee</h2>
            <p>
              We make no guarantee that you will achieve any particular earnings, revenue,
              profit, number of clients, or business results through the use of our
              Offerings.
            </p>
            <p>
              Any income statements, case studies, or client examples shared on our
              websites, in our programs, or in our marketing materials represent
              exceptional or specific individual outcomes and should not be taken as
              typical, average, or guaranteed results for all users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Individual results vary</h2>
            <p>
              Your results will vary and depend on a variety of factors, including but
              not limited to your skills, experience, background, level of effort,
              implementation, market conditions, and the time and resources you dedicate
              to applying what you learn.
            </p>
            <p>
              We cannot and do not guarantee that you will earn any money or obtain any
              specific type of client using our Offerings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Assumption of risk</h2>
            <p>
              You agree that you are solely responsible for your own business decisions
              and actions and that you use our Offerings at your own risk.
            </p>
            <p>
              You understand that any business endeavour involves inherent risks, and you
              should perform your own due diligence and consult with professional
              advisors (such as legal, tax, or financial professionals) before making
              decisions based on information from our Offerings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. No professional advice</h2>
            <p>
              Nothing in our Offerings constitutes legal, tax, investment, or financial
              advice. Any information provided is for educational and informational
              purposes only and does not substitute for advice from qualified
              professionals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Wosho LLC and its members,
              employees, and contractors are not liable for any damages, losses, or
              negative outcomes you may experience as a result of using our Offerings,
              including but not limited to lost profits, lost revenue, or other
              consequential or incidental damages.
            </p>
            <p className="text-gray-400">
              If you do not agree with this Earnings Disclaimer, you should not use or
              purchase our Offerings.
            </p>
          </section>
        </div>
      </main>

      <FooterV3 />
    </div>
  );
};

export default EarningsDisclaimerPage;
