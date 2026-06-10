import { ArrowRight, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import HeaderV4 from '../components/HeaderV4';
import FooterV4 from '../components/FooterV4';

const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
const serif = "font-['Instrument_Serif',Georgia,serif]";

const SIGNUP_URL = 'https://chat.dezygn.com/signup';

type Plan = {
  name: string;
  subtitle: string;
  price: string;
  compareAt?: string;
  suffix: string;
  credits: string;
  output: string;
  scale: string;
  badge: string | null;
  savings?: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: 'Agency',
    subtitle: 'For agencies scaling production and systems.',
    price: '$99',
    compareAt: '$149',
    suffix: '/mo',
    credits: '2,500 credits/month',
    output: '~1,250 Nano Banana or ~625 Nano Banana Pro images',
    scale: 'Enough for 3-4 clients/month',
    badge: 'Most popular',
    savings: 'Save 34%',
    features: ['Unlimited use of Awa AI Creative Director', 'Course, community, and business resources', 'Free founder strategy call (1-on-1 setup + guidance)', 'Priority access to new features'],
  },
  {
    name: 'Studio',
    subtitle: 'For high-volume studios and production teams.',
    price: '$399',
    suffix: '/mo',
    credits: '10,000 credits/month',
    output: '~5,000 Nano Banana or ~2,500 Nano Banana Pro images',
    scale: 'Unlimited scale — 7+ clients/month',
    badge: null,
    features: ['Unlimited use of Awa AI Creative Director', 'Course, community, and business resources', 'Free founder strategy call (1-on-1 setup + guidance)', 'Priority access to new features', 'Dedicated onboarding & support'],
  },
];

const PricingPage = () => {
  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <Helmet>
        <title>Pricing - Simple Plans | Dezygn</title>
      </Helmet>

      <HeaderV4 />

      <main>
        <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:pb-28 sm:pt-40">
          <span aria-hidden className={`${serif} pointer-events-none absolute -left-6 top-32 hidden -rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}>
            ✦
          </span>

          <div className="mx-auto max-w-2xl text-center">
            <p className={`${mono} mb-5 inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
              Pricing
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#1A1A1A] sm:text-6xl">
              Simple, Transparent <span className={`${serif} italic font-normal`}>Pricing.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#6B6459] sm:text-base">
              Scale from client-ready AI photography to a full production studio.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl items-stretch gap-6 lg:grid-cols-2">
            {plans.map((plan) => {
              const featured = plan.name === 'Agency';
              return (
                <article
                  key={plan.name}
                  className={`relative flex h-full flex-col rounded-3xl border p-8 transition-transform duration-500 ease-out sm:p-10 sm:hover:rotate-0 ${
                    featured
                      ? 'border-[#1A1A1A] bg-[#1A1A1A] text-[#E8E4DB] shadow-[0_32px_80px_rgba(26,26,26,0.28)] sm:-rotate-1'
                      : 'border-[#1A1A1A]/12 bg-white shadow-[0_24px_60px_rgba(26,26,26,0.08)] sm:rotate-1'
                  }`}
                >
                  {plan.badge ? (
                    <div className={`${mono} absolute -top-4 right-8 rotate-3 rounded-full bg-[#8B5CF6] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white shadow-md`}>
                      {plan.badge}
                    </div>
                  ) : null}

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className={`text-3xl font-semibold tracking-tight ${featured ? 'text-[#E8E4DB]' : 'text-[#1A1A1A]'}`}>{plan.name}</h2>
                      <p className={`mt-2 text-sm ${featured ? 'text-[#E8E4DB]/60' : 'text-[#6B6459]'}`}>{plan.subtitle}</p>
                    </div>
                    {plan.savings ? (
                      <span className={`${mono} -rotate-2 whitespace-nowrap rounded-full border border-[#7C3AED]/40 bg-[#8B5CF6]/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] ${featured ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`}>
                        ✦ {plan.savings}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-10 flex flex-wrap items-baseline gap-x-3">
                    {plan.compareAt ? (
                      <span className={`${mono} text-xl text-[#8B867B] line-through`}>{plan.compareAt}</span>
                    ) : null}
                    <span className={`${serif} text-7xl italic tracking-tight ${featured ? 'text-[#E8E4DB]' : 'text-[#1A1A1A]'}`}>{plan.price}</span>
                    <span className={`${mono} text-sm ${featured ? 'text-[#E8E4DB]/60' : 'text-[#6B6459]'}`}>{plan.suffix}</span>
                  </div>

                  <div className={`mt-8 rounded-2xl border p-5 ${featured ? 'border-[#E8E4DB]/14 bg-[#2B2B2B]' : 'border-[#1A1A1A]/10 bg-[#F7F5F0]'}`}>
                    <p className={`text-lg font-semibold ${featured ? 'text-[#E8E4DB]' : 'text-[#1A1A1A]'}`}>{plan.credits}</p>
                    <p className={`${mono} mt-2 text-[11px] leading-5 ${featured ? 'text-[#8B867B]' : 'text-[#6B6459]'}`}>{plan.output}</p>
                    <p className={`${mono} mt-1.5 text-[11px] leading-5 ${featured ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`}>✦ {plan.scale}</p>
                  </div>

                  <p className={`${mono} mt-8 text-[10px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>Includes</p>
                  <ul className="mt-3 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className={`flex items-start gap-3 text-[15px] leading-6 ${featured ? 'text-[#E8E4DB]/85' : 'text-[#2B2B2B]'}`}>
                        <Check className={`mt-1 h-4 w-4 shrink-0 ${featured ? 'text-[#8B5CF6]' : 'text-[#7C3AED]'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={SIGNUP_URL}
                    className={`mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition ${
                      featured
                        ? 'bg-[#8B5CF6] text-white hover:bg-[#7C3AED]'
                        : 'border border-[#1A1A1A]/16 text-[#1A1A1A] hover:bg-[#EDEBE6]'
                    }`}
                  >
                    Get Started Free
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              );
            })}
          </div>

          {/* Onboarding Callout */}
          <p className={`${mono} mt-10 text-center text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>
            Need hands-on help? Ask about{' '}
            <a
              href="https://cal.com/bertrand-6hbdyx/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7C3AED] underline-offset-4 transition hover:underline"
            >
              Done-With-You Onboarding
            </a>
          </p>
        </section>
      </main>

      <FooterV4 />
    </div>
  );
};

export default PricingPage;
