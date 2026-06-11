import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Camera, TrendingUp, Users, Sparkles } from 'lucide-react';
import HeaderV4 from '../components/HeaderV4';
import FooterV4 from '../components/FooterV4';

const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
const serif = "font-['Instrument_Serif',Georgia,serif]";

const chapters = [
  {
    title: 'The Beginning',
    paragraphs: [
      'I started in digital marketing back in 2011. Fresh out of a contract job at Google, longing to be free. Free to spend time with my family, travel, live on my own terms.',
      'So I got hustling. Late nights. Failed attempts. Then I found a coach who taught me how to build an email list and create products. Within a few months, I was financially free.',
      'I started selling digital products — PDFs, resources, marketing tools. Eventually I got into software. When I was younger I had a small web design agency, so I knew graphic design. But I hated Photoshop.',
    ],
  },
  {
    title: 'The First Run',
    paragraphs: [
      'So I conceptualized Youzign — a graphic design tool for everyone. Hired a developer to build it with me. It took off. Over 200,000 users signed up.',
      'From 2015 to 2020, I branched out. Created 8 more software products. Hired 15 people. Up to 4 developers at some points.',
      "But here's the thing — I sold lifetime licenses at low prices. Slowly but surely, the business eroded. I couldn't afford the team. And I was competing with Canva. Without the VC money.",
    ],
  },
  {
    title: 'The Hard Years',
    paragraphs: [
      'Then life hit hard. A series of setbacks knocked me down. I went into a long depression from 2021 to 2025, watching my business crumble to nothing until I was, once again, the only employee. Doing everything myself.',
      'Most people would have walked away. Sometimes I almost did.',
    ],
  },
  {
    title: 'The Rebuild',
    paragraphs: [
      "Then vibe coding happened. And I dedicated 2025 to creating the vision I always had — but this time, I wasn't going to repeat my mistakes.",
      'No more building for "everyone." No more competing with billion-dollar companies on their turf. Youzign was a graphic tool for the masses. Dezygn would be a weapon for freelancers and agencies.',
      "But I also realized something: I can't sell a platform for freelancers without understanding what they go through. So I took my courage in both hands.",
    ],
    callout: {
      lead: 'I signed up to Upwork. Fresh account. Zero history. Zero reviews.',
      body: "I hadn't sold a service since 2009 when I was a freelance web designer in Manchester. But I needed to feel what our users feel.",
    },
  },
  {
    title: 'What I Found',
    paragraphs: [
      'First gig: $50. Then a couple of $100 jobs. Then a $400 client with a big e-commerce brand. Then $639/month for 12 images for a French retro eyewear brand.',
      '$53 per AI-generated image. Let that sink in.',
      "What I found is that there's a massive, unmet need for AI photography that's actually accurate, realistic, and on-brand. Not slop. Not the kind of images that get you 2-star reviews on TrustPilot because they don't represent the actual product.",
      'Clients keep coming back. I got repeat clients within weeks. Always 5 stars. Because I invested in the craft — understanding visual syntax, image transfer, prompt engineering — the hard stuff nobody teaches.',
      "Every day, dozens of e-commerce businesses post on Upwork looking for this exact service. Most can't do it themselves. They tried ChatGPT. They tried Midjourney. The results weren't good enough. That's where skilled creators come in.",
    ],
  },
  {
    title: 'Why Dezygn Exists',
    paragraphs: [
      'Dezygn is everything I wish I had when I started freelancing. The tools, the training, the AI assistant that actually understands photography.',
      'I built Awa — the AI Creative Director inside Dezygn — with everything I learned on the ground. She can think, reason, search the internet, understand your brand, and create visuals that actually convert. Not perfect yet — she needs steering — but way above anything else out there.',
      "AI Photography is the new web design service. Remember when selling web design or SEO services was hot? This is the next wave. And the competition is still incredibly low. The skill ceiling is high enough that it won't be commoditized anytime soon.",
    ],
  },
];

const values = [
  {
    icon: Target,
    title: 'Niche Beats Mass',
    body: 'We tried building for everyone. Lost to Canva. Now we build the best tool for one job: AI product photography for freelancers and agencies.',
  },
  {
    icon: Users,
    title: 'Eat Our Own Cooking',
    body: 'Our founder freelances on Upwork using Dezygn. Every feature is battle-tested on real client work before it ships.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue, Not Vanity',
    body: 'We measure success by how much money our users make. Not downloads. Not sign-ups. Real income from real clients.',
  },
  {
    icon: Zap,
    title: 'Speed Wins Deals',
    body: "5-minute delivery times. Your clients used to wait weeks for studio shoots. Now you deliver the same day. That's your competitive edge.",
  },
  {
    icon: Sparkles,
    title: 'Craft Over Slop',
    body: "Anyone can generate an AI image. Creating one that's accurate, realistic, and on-brand — that's a skill. We teach it and build tools for it.",
  },
  {
    icon: Camera,
    title: 'Bootstrap or Die',
    body: 'No VC. No board. One founder, 200K+ users, 11 years of building. We grow because the product works, not because someone wrote a check.',
  },
];

const numbers = [
  { value: '11', label: 'Years Building' },
  { value: '214K+', label: 'Users' },
  { value: '9', label: 'Products Shipped' },
  { value: '$53', label: 'Per AI Image' },
];

function AboutPage() {
  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <HeaderV4 />

      <main className="pt-28">
        {/* Breadcrumbs */}
        <div className="mx-auto max-w-6xl px-5 py-4">
          <nav aria-label="Breadcrumb" className={`${mono} text-xs text-[#8B867B]`}>
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="transition hover:text-[#1A1A1A]">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#6B6459]">About</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden px-5 py-16 text-center sm:py-20">
          <span aria-hidden className={`${serif} pointer-events-none absolute -right-4 top-8 hidden rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}>
            ✳
          </span>
          <div className="mx-auto max-w-3xl">
            <p className={`${mono} mb-6 inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
              <Camera className="h-3.5 w-3.5" />
              The story behind Dezygn
            </p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-6xl">
              Built by a Freelancer. <span className={`${serif} italic font-normal text-[#7C3AED]`}>For Freelancers.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B6459]">
              Dezygn wasn't built in a boardroom. It was built by someone who lost everything,
              picked himself up, and decided to do it differently this time.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl space-y-14">
            {chapters.map((chapter, index) => (
              <div key={chapter.title}>
                <p className={`${mono} text-xs font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#1A1A1A] sm:text-3xl">
                  {chapter.title.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className={`${serif} italic font-normal`}>{chapter.title.split(' ').slice(-1)}.</span>
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-8 text-[#2B2B2B]">
                  {chapter.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {chapter.callout ? (
                  <div className="mt-8 -rotate-1 rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.08)] transition-transform duration-500 ease-out hover:rotate-0">
                    <p className="text-xl font-semibold tracking-tight text-[#1A1A1A]">{chapter.callout.lead}</p>
                    <p className="mt-3 leading-7 text-[#6B6459]">{chapter.callout.body}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="px-5 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className={`${mono} mb-5 inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
              Values
            </p>
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#1A1A1A] sm:text-5xl">
              What We <span className={`${serif} italic font-normal`}>Believe.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#6B6459] sm:text-base">
              Built from real experience, not pitch decks
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.08)]"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#8B5CF6] text-white">
                    <value.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-[#1A1A1A]">{value.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#6B6459]">{value.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* By The Numbers */}
        <section className="relative overflow-hidden bg-[#1A1A1A] px-5 py-20 text-[#E8E4DB] sm:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(232,228,219,0.06)_1px,transparent_1px)] [background-size:26px_26px]"
          />
          <div className="relative z-10 mx-auto max-w-6xl">
            <h2 className="text-center text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              By the <span className={`${serif} italic font-normal text-[#8B5CF6]`}>Numbers.</span>
            </h2>
            <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
              {numbers.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-[#E8E4DB]/[0.14] bg-[#2B2B2B] p-6 text-center">
                  <div className={`${serif} text-4xl italic tracking-tight text-[#8B5CF6] md:text-5xl`}>{stat.value}</div>
                  <div className={`${mono} mt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-20 sm:py-28">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-[#7C3AED] p-10 text-center text-white shadow-[0_40px_100px_rgba(124,58,237,0.35)] sm:p-16">
            <span aria-hidden className={`${serif} absolute -left-4 -top-8 rotate-[-12deg] text-[160px] italic leading-none text-white/10`}>
              ✳
            </span>
            <span aria-hidden className={`${serif} absolute -bottom-12 -right-2 rotate-12 text-[180px] italic leading-none text-white/10`}>
              ✦
            </span>
            <h2 className="relative z-10 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Ready to build your AI photography <span className={`${serif} italic font-normal`}>business?</span>
            </h2>
            <p className="relative z-10 mx-auto mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Everything you need — the tools, the training, and the AI assistant —
              in one platform built by someone who does this for a living.
            </p>
            <a
              href="https://chat.dezygn.com/signup"
              className="relative z-10 mt-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-9 text-[15px] font-semibold text-[#EDEBE6] transition hover:bg-black"
            >
              Start Free
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <FooterV4 />
    </div>
  );
}

export default AboutPage;
