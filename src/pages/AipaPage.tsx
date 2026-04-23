import { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import example1 from '../assets/images/AIPA/examples/example1.jpg';
import example2 from '../assets/images/AIPA/examples/example2.jpeg';
import example3 from '../assets/images/AIPA/examples/French_Retro_LILY-G139-O_4325.png';
import upworkGigScreenshot from '../assets/images/AIPA/upwork-gig-screenshot.webp';
import earningEmailInterest from '../assets/images/AIPA/Earnings/email-client-showing-interest.jpg';
import earningEmailAgreement from '../assets/images/AIPA/Earnings/email-agreement-$1500-per-month-sportswear-client.png';
import earningUpworkBiggest from '../assets/images/AIPA/Earnings/upwork-biggest-client-$993.png';
import earningUpworkApparel from '../assets/images/AIPA/Earnings/upwork-apparel-client-earning-$290.png';
import earningUpworkCosmetic from '../assets/images/AIPA/Earnings/upwork-cosmetic-client-$100.png';
import earningUpworkToyEarning from '../assets/images/AIPA/Earnings/upwork-toy-client-earning-$200.png';
import earningUpworkToyHourly from '../assets/images/AIPA/Earnings/upwork-toy-client-$50-per-hour.png';

const EARNINGS_PROOF = [
  { src: earningEmailInterest, alt: 'Email from a prospective client showing interest' },
  { src: earningEmailAgreement, alt: '$1,500/month retainer agreement with a sportswear client' },
  { src: earningUpworkBiggest, alt: 'Upwork earnings: biggest client — $993' },
  { src: earningUpworkApparel, alt: 'Upwork earnings: apparel client — $290' },
  { src: earningUpworkCosmetic, alt: 'Upwork earnings: cosmetic client — $100' },
  { src: earningUpworkToyEarning, alt: 'Upwork earnings: toy client — $200' },
  { src: earningUpworkToyHourly, alt: 'Upwork earnings: toy client — $50/hour' },
];

const EXAMPLE_IMAGES = [example1, example2, example3];

const FAQ_ITEMS = [
  {
    q: "I'm not a designer or photographer. Can I really do this?",
    a: "Yes. What you need is a creative eye — the ability to look at an image and know whether it works. If you've ever cared about what something looks like, you have enough to start. The technical side is learnable in days, not months.",
  },
  {
    q: 'What if I have a full-time job?',
    a: "The daily execution block is 60 minutes. The live calls are scheduled in advance so you can plan around them. This program is designed for people who don't have unlimited time.",
  },
  {
    q: "I've bought courses before and got nothing from them. How is this different?",
    a: "A course gives you information. This gives you a constrained structure, live accountability, direct feedback, and a cohort of people executing alongside you. The failure mode of most courses is that nobody checks whether you're doing the work. Here, I do.",
  },
  {
    q: 'What if I have no existing clients or network?',
    a: "That's the whole point of this program. You start from zero. The outreach system is designed to generate clients from scratch — not by leveraging an existing audience, but by leading with value and proof.",
  },
  {
    q: 'What exactly is Dezygn?',
    a: "Dezygn is an AI photography platform built specifically for this type of client work. It has specialized AI agents that understand product photography, a quality control layer, and brand memory so your output stays consistent. Three months of the Agency plan is included in the program.",
  },
  {
    q: "What if I apply and it's not a fit?",
    a: "I'll tell you honestly — and point you somewhere more useful. No hard selling. No pressure on the call. I would rather turn someone away than take their investment and not be able to help them.",
  },
  {
    q: 'How long before I can realistically make my first money?',
    a: "The program is built around landing clients within 6 weeks. Some people land their first client in week 2 or 3. It depends on your execution — but the structure is specifically designed to compress the timeline as much as possible.",
  },
];

const DISCOVER_ITEMS = [
  'My Proof-Before-Pitch method to land clients without ever having to be salesy or pushy',
  'My secret weapon for finding unlimited leads which desperately need your services via email, IG, and LinkedIn',
  'The Upwork strategy I have used to systematically get a 10%+ interview rate and outperform 15 competitors at once',
  'My 30-minute "Bull\u2019s Eye" portfolio method to instantly give you confidence and credibility to sell AI Photography',
  'The ICP positioning custom GPT to make sure your prospects feel instantly related to your services',
  'My low-effort 60-min-a-day outreach strategy to ensure a steady pipeline of deals coming your way, regardless of market conditions',
  'The upsell to downsell "start high, go low" pricing strategy I have used multiple times to save deals which were nearly lost',
  'The exact script I use to sell to clients word for word, so there\u2019s no hard selling and no guessing needed',
  'How to frame discovery calls so that you unearth untapped service opportunities from prospects',
  'How to deal with the most common objections and turn them to your advantage',
  'All my SOPs and processes I used to outsource my agency work to my VA (so you can have the agency run without you)',
  'My Visual Syntax process for deconstructing and creating any AI Photography you can imagine',
  'All my Visual Syntax cheatsheets I always keep next to my desk to never have to guess styles, camera angles, lenses, and more',
  'My 6-step proprietary AI Photography workflow that allows me to create high-quality creatives for my clients',
  'My Dezygn delivery process to ensure revisions with clients go fast and smooth',
  'Dezygn access (Agency level): the exact software I use to get, serve, and wow clients',
  'My Responsible AI Visuals Policy that I now send to every lead and client to help them alleviate any doubts about AI photography',
  'My prompt library and training to go from AI Photography to Creative Strategy and 10x your earnings',
  'My AI video framework to create winning ads and social media shorts that don\u2019t look uncanny',
  'Access to me via Slack, weekly group calls, and unlimited DMs to help you never get stuck',
  'A step-by-step 90-day plan beyond the 6 weeks to help you scale your agency',
];

const WEEKS = [
  {
    num: '01',
    title: 'Positioning & Proof',
    items: [
      'Lock in your niche with the Find Your Tribe Process™',
      'Build 10 AI proof visuals in under 15 minutes using Dezygn',
      'Set up a lean LinkedIn profile targeting your ICP',
      'Send your first 10 Proof-Before-Pitch messages',
    ],
    outcome: "By Friday: You are launched. You have an offer. You've taken action.",
  },
  {
    num: '02',
    title: 'The Outreach Engine',
    items: [
      'Send 20 Proof-Before-Pitch messages per day for 5 consecutive days',
      'Track everything with the Outreach Scorecard™',
      'Publish your first niche-relevant LinkedIn post',
    ],
    outcome: "By Friday: Outreach is no longer emotional. It's mechanical.",
  },
  {
    num: '03',
    title: 'Momentum & Conversion',
    items: [
      'Maintain daily outreach + 10 follow-ups per day',
      'Review pipeline data to replace doubt with math',
      'Lock in your Simple Starter Pricing Model™',
      'Learn the Discovery Call Framework™',
    ],
    outcome: "By Friday: You're booking calls. You know exactly what to charge.",
  },
  {
    num: '04',
    title: 'Close Your First Client',
    items: [
      'Run your first discovery calls',
      'Handle objections using the live call framework',
      'Send your first invoice',
    ],
    outcome: 'By Friday: Revenue is real — or extremely close.',
  },
  {
    num: '05',
    title: 'Deliver & Build Confidence',
    items: [
      'Deliver first campaign using the Dezygn Workflow Blueprint™',
      'Use the structured Client Brief Framework™',
      'Request your first testimonial',
    ],
    outcome: 'By Friday: You are no longer trying. You are operating.',
  },
  {
    num: '06',
    title: 'Stabilize & Scale',
    items: [
      'Build your 90-Day Continuation Plan™',
      'Refine pricing if needed',
      'Map your path to $3k–$5k/month',
    ],
    outcome: "By Friday: You don't just have a client. You have a system.",
  },
];

/* ── Fade-up observer hook ── */
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return ref;
}

const AipaPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const rootRef = useFadeUp();

  const toggleFaq = useCallback(
    (i: number) => setOpenFaq((prev) => (prev === i ? null : i)),
    [],
  );

  return (
    <div ref={rootRef} className="aipa-page">
      <Helmet>
        <title>A.I.P.A. Launchpad™ — Land Your First AI Photography Clients in 6 Weeks</title>
        <meta
          name="description"
          content="How the Proof-Before-Pitch Method™ lands your first 1–3 paying AI Photography clients in 6 weeks — without a website, portfolio, or months of preparation."
        />
        <link rel="canonical" href="https://dezygn.com/aipa" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="A.I.P.A. Launchpad" />
        <meta property="og:url" content="https://dezygn.com/aipa" />
        <meta property="og:title" content="A.I.P.A. Launchpad™ — Land Your First AI Photography Clients in 6 Weeks" />
        <meta
          property="og:description"
          content="A cohort-based 6-week sprint for landing your first 1–3 paying AI Photography clients — using the Proof-Before-Pitch Method™. No website, portfolio, or months of prep."
        />
        <meta property="og:image" content="https://dezygn.com/aipa-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="A.I.P.A. Launchpad — 6-week sprint to land AI Photography clients" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="A.I.P.A. Launchpad™ — Land Your First AI Photography Clients in 6 Weeks" />
        <meta
          name="twitter:description"
          content="A cohort-based 6-week sprint for landing your first 1–3 paying AI Photography clients — using the Proof-Before-Pitch Method™."
        />
        <meta name="twitter:image" content="https://dezygn.com/aipa-og.jpg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* scoped styles */}
      <style>{AIPA_STYLES}</style>

      {/* NAV */}
      <nav className="aipa-nav">
        <div className="nav-logo">
          A.I.P.A<span>.</span>
        </div>
        <a href="https://www.dezygn.com/apply" className="nav-cta">
          Apply Now
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <span className="hero-eyebrow">A.I.P.A. Launchpad™ — By Application. Rolling Cohorts.</span>
        <h1>
          My Weird Little AI Side Hustle That's Currently Making Me{' '}
          <em>$26,838/Year</em> On Just <em>23 Hours A Month</em>…
        </h1>
        <p className="hero-sub">
          And how to ETHICALLY copy my exact system in the next 6 weeks — without cold calling,
          a portfolio, or being salesy.
        </p>
      </section>

      {/* VIDEO */}
      <section className="video-section">
        <div className="container">
          <div className="video-wrap">
            <iframe
              className="video-iframe"
              src="https://www.tella.tv/video/vid_cmo2l35qt00o504jv4smsfjb4/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0&o=0"
              allow="autoplay; fullscreen"
              allowTransparency
              title="A.I.P.A. Launchpad — VSL"
            />
          </div>
        </div>
      </section>

      {/* CTA #1 */}
      <section className="cta-block" id="apply">
        <a href="https://www.dezygn.com/apply" className="btn-primary">
          Apply for a Seat &rarr;
        </a>
        <span className="cta-micro">
          Takes 2 minutes. I review every application personally. Payment plans available.
        </span>
      </section>

      <div className="divider" />

      {/* 3 STEPS */}
      <section className="steps-section">
        <div className="container-wide">
          <div className="steps-header fade-up">
            <span className="section-label">How It Works</span>
            <h2>Three moves. One outcome.</h2>
          </div>
          <div className="steps-grid">
            {[
              {
                n: '01',
                t: 'Build Your Proof Asset',
                d: 'Generate personalized AI visuals for your target clients in under 15 minutes — before you ever reach out.',
              },
              {
                n: '02',
                t: 'Lead With Value, Not a Pitch',
                d: 'Send your visual first. Let the work speak. Watch reply rates go up and sales anxiety disappear.',
              },
              {
                n: '03',
                t: 'Land Your First Client in 6 Weeks',
                d: 'Follow the structured daily system until a real brand pays you for real work — then repeat.',
              },
            ].map((s) => (
              <div key={s.n} className="step-card fade-up">
                <span className="step-num">Step {s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="story-section">
        <div className="container">
          <span className="section-label">The Story</span>
          <h2 className="fade-up">How I stumbled into this — and why I'm sharing it</h2>

          <p className="fade-up">
            Hi, I'm Bertrand. I'm not a business guru. I don't have a massive audience or a course
            empire. What I have is a side hustle that quietly grew to $27,000 a year — working
            part-time hours — doing something most people don't even know exists yet.
          </p>
          <p className="fade-up">
            <strong>AI Photography for e-commerce brands.</strong>
          </p>
          <p className="fade-up">
            Here's what that actually looks like. A brand needs product images for their store, their
            ads, their social. They try to generate them with ChatGPT or Midjourney. The results look
            wrong — distorted products, plastic-looking people, completely off-brand. So they go to
            Upwork and LinkedIn, looking for someone who knows how to do this properly.
          </p>
          <p className="fade-up">
            Every single day, dozens of those posts go up. Real brands. Real budgets. Actively
            looking.
          </p>

          <img
            src={upworkGigScreenshot}
            alt="Upwork gigs for AI product photography — real brands actively hiring"
            loading="lazy"
            className="upwork-screenshot fade-up"
          />

          <p className="fade-up">
            <strong>What they're looking for is this.</strong>
          </p>

          <div className="example-grid fade-up">
            {EXAMPLE_IMAGES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`AI photography example ${i + 1}`}
                loading="lazy"
                className="example-img"
              />
            ))}
          </div>

          <p className="fade-up">
            AI-generated product and lifestyle visuals that are accurate to the product, realistic,
            and on-brand. The kind of images that used to require a photographer, a studio, and a
            full day of shooting. Brands use them for their store pages, their Meta ads, their
            social content — anywhere they need fresh creative at scale.
          </p>
          <p className="fade-up">
            Most business owners try to generate them with ChatGPT or Midjourney and quickly
            discover it's harder than it looks. The product dimensions come out wrong. The model
            looks plastic. The brand feel is completely off. So they hire someone who actually
            knows how to do it properly.
          </p>
          <p className="fade-up">
            <strong>That someone can be you.</strong>
          </p>

          <div className="earnings-grid fade-up">
            {[
              { amount: '$2,237/m', label: 'From 3 clients' },
              { amount: '23 hrs', label: 'Work per month' },
              { amount: '$97.24/hr', label: 'Effective hourly rate' },
            ].map((e) => (
              <div key={e.label} className="earning-card">
                <div className="amount">{e.amount}</div>
                <div className="label">{e.label}</div>
              </div>
            ))}
          </div>

          <div className="earnings-proof fade-up">
            {EARNINGS_PROOF.map((p) => (
              <img
                key={p.src}
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="earnings-proof-img"
              />
            ))}
          </div>

          <p className="fade-up">
            And I built this quietly. <strong>No cold calls.</strong> No pushy pitches. No
            blasting strangers with spam DMs at 11pm. No chasing. No hustle-bro energy.{' '}
            <strong>One hour of outreach per day. 23 hours of actual client work per month.</strong>{' '}
            A side income that respects my time — and the people I reach out to.
          </p>
          <p className="fade-up">
            When I started sharing the method publicly, hundreds of people said they'd try it.
          </p>
          <p className="fade-up">
            In the weeks that followed, almost none of them replicated it.
          </p>
          <p className="fade-up">
            Not because the information was wrong.{' '}
            <strong>Because information without structure is just entertainment.</strong>
          </p>

          <div className="pull-quote fade-up">
            The gap between knowing what to do and actually doing it every day — that's where almost
            every online business ambition goes to die.
          </div>

          <div className="problem-box fade-up">
            <h3>You don't have an information problem.</h3>
            <p>
              You've bought courses. Watched tutorials. Learned tools. You're not lazy and you're not
              clueless. What you don't have is a constrained, structured, accountable system that
              produces a real win fast enough to keep you going.
            </p>
            <p>
              Without that, motivation runs out in week two. Every time. And the evidence piles up
              that maybe — just maybe — you're not the kind of person who makes this work.
            </p>
            <p>
              <strong>
                That belief is wrong. And the A.I.P.A. Launchpad™ is designed to prove it.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCING */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-header fade-up">
            <span className="section-label">The Program</span>
            <h2>
              Introducing the
              <br />
              A.I.P.A. Launchpad™
            </h2>
            <p>
              A cohort-based, 6-week implementation sprint for landing your first 1–3 paying AI
              Photography clients — with structure, accountability, and someone alongside you who
              just built this from zero.
            </p>
          </div>

          <div className="discover-block fade-up">
            <h3 className="discover-title">Inside A.I.P.A. you will discover:</h3>
            <ul className="discover-list">
              {DISCOVER_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="course-not-course fade-up">
            <strong>This is not a course.</strong> Courses give you information. You already have
            plenty of that. This is a sprint — six weeks, fifteen people maximum, weekly live calls,
            daily execution, and direct feedback from me on your positioning, pipeline, and outreach
            in real time.
          </div>

          {/* WEEKS */}
          <div className="weeks fade-up">
            {WEEKS.map((w) => (
              <div key={w.num} className="week-row">
                <div className="week-label">
                  <span className="wnum">WEEK {w.num}</span>
                  <span className="wtitle">{w.title}</span>
                </div>
                <div className="week-body">
                  <ul>
                    {w.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="week-outcome">{w.outcome}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA after weeks */}
          <div className="cta-block" style={{ background: 'transparent', padding: '40px 0 64px' }}>
            <a href="https://www.dezygn.com/apply" className="btn-primary">
              Apply for a Seat &rarr;
            </a>
            <span className="cta-micro">15 seats per cohort. Applications reviewed personally.</span>
          </div>

          {/* WHAT'S INCLUDED */}
          <span className="included-header">Everything that's included</span>
          <div className="included-grid fade-up">
            <div className="included-card full">
              <h4>The 6-Week Live Cohort</h4>
              <ul>
                <li>Weekly live implementation calls</li>
                <li>Direct positioning and pipeline reviews</li>
                <li>Closing &amp; pricing framework walkthroughs</li>
                <li>Live objection handling practice</li>
                <li>Structured milestone progression — week by week</li>
              </ul>
            </div>
            <div className="included-card">
              <h4>Complete Playbook Stack</h4>
              <ul>
                <li>Proof-Before-Pitch Method™</li>
                <li>Find Your Tribe Process™</li>
                <li>15-Minute Portfolio™</li>
                <li>20x5 Sprint™ System</li>
                <li>10x5 Follow-Up System™</li>
                <li>Simple Starter Pricing Model™</li>
                <li>Discovery Call Framework™</li>
                <li>Dezygn Workflow Blueprint™</li>
                <li>90-Day Continuation Plan™</li>
              </ul>
            </div>
            <div className="included-card">
              <h4>Tools &amp; Access</h4>
              <ul>
                <li>Niche GPT</li>
                <li>LinkedIn GPT</li>
                <li>Outreach Tracker</li>
                <li>Scripts &amp; Templates</li>
              </ul>
            </div>
            <div className="included-card">
              <h4>Bonus #1</h4>
              <ul>
                <li>3 Months Dezygn Agency Plan</li>
                <li>Capacity for up to 2 active clients</li>
                <li>No extra software needed from day one</li>
              </ul>
            </div>
            <div className="included-card">
              <h4>Bonus #2</h4>
              <ul>
                <li>12-Month Alumni Community Access</li>
                <li>Playbooks &amp; templates for a full year</li>
                <li>Peer accountability &amp; future cohort wins</li>
              </ul>
            </div>
            <div className="included-card full">
              <h4>Bonus #3</h4>
              <ul>
                <li>Direct 1:1 reviews of your LinkedIn positioning</li>
                <li>Live pipeline data review with Bertrand</li>
                <li>Personal feedback on outreach and discovery calls throughout the sprint</li>
              </ul>
            </div>
          </div>

          {/* CTA after included */}
          <div className="cta-block" style={{ background: 'transparent', padding: '48px 0 0' }}>
            <a href="https://www.dezygn.com/apply" className="btn-primary">
              Apply for a Seat &rarr;
            </a>
            <span className="cta-micro">Next cohort opens on a rolling basis. No commitment to apply.</span>
          </div>

        </div>
      </section>

      {/* WHO IT'S FOR / NOT FOR */}
      <section className="fit-section">
        <div className="container">
          <span className="section-label">Is This For You?</span>
          <h2 className="fade-up">
            This is not for everyone.
            <br />
            It's for the right one.
          </h2>
          <div className="fit-grid fade-up">
            <div className="fit-col yes">
              <h3>This is for you if</h3>
              <ul className="fit-list">
                <li>
                  You've been learning digital skills for years and never made consistent money from
                  any of it
                </li>
                <li>You're in a professional or income transition and need results, fast</li>
                <li>You have a creative eye — you can tell when something looks right</li>
                <li>
                  You want a structured system with someone alongside you, not more content to
                  consume alone
                </li>
                <li>You can commit 60 minutes of focused execution per day for 6 weeks</li>
              </ul>
            </div>
            <div className="fit-col no">
              <h3>This is NOT for you if</h3>
              <ul className="fit-list">
                <li>You want push-button income with no real work involved</li>
                <li>You're not willing to do actual client work</li>
                <li>You have no creative instinct whatsoever</li>
                <li>You want to buy something and never open it</li>
                <li>You're looking for a passive income scheme</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA #2 */}
      <section
        className="cta-block"
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <a href="https://www.dezygn.com/apply" className="btn-primary">
          Apply for a Seat &rarr;
        </a>
        <span className="cta-micro">
          Takes 2 minutes. No commitment. I read every application personally.
        </span>
      </section>

      {/* URGENCY */}
      <section className="urgency-section">
        <div className="container">
          <span className="section-label">Limited Cohort</span>
          <h2 className="fade-up">Each cohort is capped at 15 people.</h2>
          <p className="fade-up">
            Not as a marketing tactic. Because I'm personally reviewing every member's positioning
            and pipeline throughout six weeks. Once a cohort fills, applications close and the
            next one opens. No waitlist — just a fresh start.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <span className="section-label">Questions</span>
          <h2 className="fade-up">Frequently asked</h2>
          <div className="faq-list fade-up">
            {FAQ_ITEMS.map((item, i) => (
              <div key={item.q} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => toggleFaq(i)}>
                  {item.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <span className="section-label">Ready to Apply?</span>
          <h2 className="fade-up">
            If you got this far,
            <br />
            you already know.
          </h2>
          <p className="fade-up">
            Apply now. Two minutes. I'll read it personally. If it's a fit — you'll hear from me. If
            it's not — I'll tell you honestly and point you somewhere more useful.
          </p>
          <a href="https://www.dezygn.com/apply" className="btn-primary fade-up">
            Apply for a Seat &rarr;
          </a>
          <span className="cta-micro" style={{ marginTop: 20 }}>
            Each cohort closes once 15 seats are filled. Payment plans available.
          </span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="aipa-footer">
        <p>
          &copy; 2025 A.I.P.A. Launchpad™ &middot; Built by Bertrand &middot;{' '}
          <a href="/privacy" style={{ color: 'var(--gray-3)' }}>
            Privacy
          </a>
        </p>
      </footer>
    </div>
  );
};

/* ── All scoped CSS ── */
const AIPA_STYLES = `
  .aipa-page {
    --black: #0A0A0A;
    --surface: #111111;
    --surface-2: #181818;
    --surface-3: #1E1E1E;
    --gold: #C9A84C;
    --gold-dim: rgba(201,168,76,0.15);
    --white: #FFFFFF;
    --gray-1: #F5F5F5;
    --gray-2: #AAAAAA;
    --gray-3: #555555;
    --border: rgba(255,255,255,0.07);
    --font: 'DM Sans', system-ui, sans-serif;

    font-family: var(--font);
    background: var(--black);
    color: var(--white);
    font-size: 17px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  .aipa-page *, .aipa-page *::before, .aipa-page *::after { box-sizing: border-box; }

  .aipa-page .container { max-width: 900px; margin: 0 auto; padding: 0 24px; }
  .aipa-page .container-wide { max-width: 1080px; margin: 0 auto; padding: 0 24px; }
  .aipa-page .section-label {
    font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
    text-transform: uppercase; color: var(--gold); margin-bottom: 20px; display: block;
  }
  .aipa-page .divider { width: 100%; height: 1px; background: var(--border); margin: 0; }

  /* NAV */
  .aipa-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(10,10,10,0.92); backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border); padding: 0 24px;
    height: 60px; display: flex; align-items: center; justify-content: space-between;
  }
  .aipa-page .nav-logo {
    font-size: 13px; font-weight: 600; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--white);
  }
  .aipa-page .nav-logo span { color: var(--gold); }
  .aipa-page .nav-cta {
    background: var(--gold); color: var(--black); font-family: var(--font);
    font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
    text-transform: uppercase; padding: 9px 20px; border: none; cursor: pointer;
    text-decoration: none; transition: opacity 0.2s;
  }
  .aipa-page .nav-cta:hover { opacity: 0.85; }

  /* HERO */
  .aipa-page .hero {
    padding: 160px 24px 48px; text-align: center; background: var(--black);
    position: relative; overflow: hidden;
  }
  .aipa-page .hero::before {
    content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
    width: 600px; height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent); opacity: 0.4;
  }
  .aipa-page .hero-eyebrow {
    font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--gold); margin-bottom: 28px; display: block;
  }
  .aipa-page .hero h1 {
    font-size: clamp(32px, 5vw, 54px); font-weight: 700; line-height: 1.15;
    letter-spacing: -0.02em; color: var(--white); max-width: 860px; margin: 0 auto 28px;
  }
  .aipa-page .hero h1 em { font-style: normal; color: var(--gold); }
  .aipa-page .hero-sub {
    font-size: clamp(16px, 2vw, 20px); color: var(--gray-2); max-width: 660px;
    margin: 0 auto; line-height: 1.6; font-weight: 300;
  }

  /* VIDEO */
  .aipa-page .video-section { background: var(--black); padding: 32px 24px 0; }
  .aipa-page .video-wrap {
    max-width: 900px; margin: 0 auto; background: var(--surface-3);
    border: 1px solid var(--border); aspect-ratio: 16/9;
    position: relative; overflow: hidden;
  }
  .aipa-page .video-iframe {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;
  }

  /* CTA BLOCK */
  .aipa-page .cta-block { padding: 52px 24px; text-align: center; background: var(--black); }
  .aipa-page .btn-primary {
    display: inline-block; background: var(--gold); color: var(--black); font-family: var(--font);
    font-size: 14px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    padding: 18px 48px; border: none; cursor: pointer; text-decoration: none; transition: opacity 0.2s;
  }
  .aipa-page .btn-primary:hover { opacity: 0.88; }
  .aipa-page .cta-micro { display: block; margin-top: 14px; font-size: 13px; color: var(--gray-3); }

  /* 3 STEPS */
  .aipa-page .steps-section {
    padding: 100px 24px; background: var(--surface);
    border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  }
  .aipa-page .steps-header { text-align: center; margin-bottom: 64px; }
  .aipa-page .steps-header h2 {
    font-size: clamp(26px, 3.5vw, 38px); font-weight: 700; letter-spacing: -0.02em;
  }
  .aipa-page .steps-grid {
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2px; max-width: 900px; margin: 0 auto;
  }
  .aipa-page .step-card { background: var(--surface-2); padding: 40px 32px; position: relative; }
  .aipa-page .step-num {
    font-size: 11px; font-weight: 700; letter-spacing: 0.15em; color: var(--gold);
    margin-bottom: 20px; display: block;
  }
  .aipa-page .step-card h3 { font-size: 18px; font-weight: 600; margin-bottom: 12px; letter-spacing: -0.01em; }
  .aipa-page .step-card p { font-size: 14px; color: var(--gray-2); line-height: 1.65; }
  @media (max-width: 700px) { .aipa-page .steps-grid { grid-template-columns: 1fr; } }

  /* STORY */
  .aipa-page .story-section { padding: 120px 24px; background: var(--black); }
  .aipa-page .example-grid {
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2px; margin: 32px 0;
  }
  .aipa-page .example-img {
    width: 100%; aspect-ratio: 1; object-fit: cover; display: block;
    background: var(--surface-2);
  }
  @media (max-width: 600px) { .aipa-page .example-grid { grid-template-columns: 1fr; } }
  .aipa-page .upwork-screenshot {
    width: 100%; height: auto; display: block; margin: 32px 0;
    border: 1px solid var(--border); background: var(--surface-2);
  }
  .aipa-page .story-section h2 {
    font-size: clamp(26px, 3.5vw, 38px); font-weight: 700; letter-spacing: -0.02em;
    margin-bottom: 40px; line-height: 1.2;
  }
  .aipa-page .story-section p { color: var(--gray-2); margin-bottom: 24px; font-size: 17px; line-height: 1.8; }
  .aipa-page .story-section strong { color: var(--white); font-weight: 600; }
  .aipa-page .pull-quote {
    border-left: 2px solid var(--gold); padding: 4px 0 4px 28px; margin: 48px 0;
    font-size: clamp(20px, 2.5vw, 26px); font-weight: 600; color: var(--white);
    line-height: 1.4; letter-spacing: -0.01em;
  }
  .aipa-page .earnings-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2px; margin: 52px 0; }
  .aipa-page .earning-card { background: var(--surface-2); padding: 28px 24px; border-top: 2px solid var(--gold); }
  .aipa-page .earning-card .amount {
    font-size: 30px; font-weight: 700; color: var(--white); letter-spacing: -0.02em; margin-bottom: 6px;
  }
  .aipa-page .earning-card .label { font-size: 13px; color: var(--gray-2); }
  @media (max-width: 600px) { .aipa-page .earnings-grid { grid-template-columns: 1fr; } }
  .aipa-page .earnings-proof {
    display: flex; flex-direction: column; gap: 14px; margin: 0 0 52px;
  }
  .aipa-page .earnings-proof-img {
    width: 100%; height: auto; display: block;
    border: 1px solid var(--border); background: var(--surface-2);
  }
  .aipa-page .problem-box {
    background: var(--surface-2); border: 1px solid var(--border); padding: 40px 36px; margin-top: 60px;
  }
  .aipa-page .problem-box h3 { font-size: 22px; font-weight: 700; margin-bottom: 20px; letter-spacing: -0.01em; }
  .aipa-page .problem-box p { margin-bottom: 16px; }
  .aipa-page .problem-box p:last-child { margin-bottom: 0; }

  /* INTRODUCING */
  .aipa-page .intro-section {
    padding: 120px 24px; background: var(--surface); border-top: 1px solid var(--border);
  }
  .aipa-page .intro-header { margin-bottom: 72px; }
  .aipa-page .intro-header h2 {
    font-size: clamp(28px, 4vw, 46px); font-weight: 700; letter-spacing: -0.025em;
    line-height: 1.15; margin-bottom: 20px;
  }
  .aipa-page .intro-header p { font-size: 17px; color: var(--gray-2); max-width: 600px; line-height: 1.75; }
  .aipa-page .course-not-course {
    background: var(--surface-3); border-left: 2px solid var(--gold);
    padding: 28px 32px; margin-bottom: 72px; font-size: 16px; color: var(--gray-2); line-height: 1.75;
  }
  .aipa-page .course-not-course strong { color: var(--white); }

  /* DISCOVER */
  .aipa-page .discover-block { margin-bottom: 72px; }
  .aipa-page .discover-title {
    font-size: clamp(20px, 2.5vw, 26px); font-weight: 700; letter-spacing: -0.01em;
    color: var(--white); margin-bottom: 28px;
  }
  .aipa-page .discover-list {
    list-style: none; padding: 0; margin: 0;
    display: grid; grid-template-columns: 1fr 1fr; gap: 0 32px;
  }
  .aipa-page .discover-list li {
    font-size: 15px; color: var(--gray-2); line-height: 1.55;
    padding: 14px 0 14px 28px; position: relative;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  .aipa-page .discover-list li::before {
    content: '\\2713'; position: absolute; left: 0; top: 14px;
    color: var(--gold); font-weight: 700; font-size: 13px;
  }
  @media (max-width: 700px) {
    .aipa-page .discover-list { grid-template-columns: 1fr; gap: 0; }
  }

  /* WEEKS */
  .aipa-page .weeks { display: flex; flex-direction: column; gap: 2px; margin-bottom: 80px; }
  .aipa-page .week-row { display: grid; grid-template-columns: 140px 1fr; gap: 0; background: var(--surface-2); }
  .aipa-page .week-label {
    background: var(--surface-3); padding: 28px 24px;
    display: flex; flex-direction: column; justify-content: center;
  }
  .aipa-page .week-label .wnum {
    font-size: 10px; font-weight: 700; letter-spacing: 0.15em; color: var(--gold); margin-bottom: 4px;
  }
  .aipa-page .week-label .wtitle { font-size: 13px; font-weight: 600; color: var(--white); line-height: 1.3; }
  .aipa-page .week-body { padding: 28px 32px; border-left: 1px solid var(--border); }
  .aipa-page .week-body ul { list-style: none; margin-bottom: 12px; padding: 0; }
  .aipa-page .week-body ul li {
    font-size: 16px; color: var(--gray-2); padding: 6px 0 6px 18px; position: relative;
  }
  .aipa-page .week-body ul li::before {
    content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%);
    width: 4px; height: 4px; background: var(--gold); border-radius: 50%;
  }
  .aipa-page .week-outcome { font-size: 15px; color: var(--white); font-weight: 500; margin-top: 12px; }
  @media (max-width: 600px) {
    .aipa-page .week-row { grid-template-columns: 1fr; }
    .aipa-page .week-body { border-left: none; border-top: 1px solid var(--border); }
  }

  /* INCLUDED */
  .aipa-page .included-header {
    font-size: 11px; font-weight: 700; letter-spacing: 0.18em;
    text-transform: uppercase; color: var(--gold); margin-bottom: 32px; display: block;
  }
  .aipa-page .included-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-bottom: 2px; }
  .aipa-page .included-card { background: var(--surface-2); padding: 32px 28px; }
  .aipa-page .included-card.full { grid-column: 1 / -1; }
  .aipa-page .included-card h4 { font-size: 18px; font-weight: 600; margin-bottom: 18px; color: var(--white); }
  .aipa-page .included-card h4 .tag {
    font-size: 11px; font-weight: 600; color: var(--gold); background: var(--gold-dim);
    padding: 2px 8px; margin-left: 8px; letter-spacing: 0.05em;
  }
  .aipa-page .included-card ul { list-style: none; padding: 0; margin: 0; }
  .aipa-page .included-card ul li {
    font-size: 16px; color: var(--gray-2); padding: 7px 0 7px 18px; position: relative;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  .aipa-page .included-card ul li:last-child { border-bottom: none; }
  .aipa-page .included-card ul li::before {
    content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%);
    width: 4px; height: 4px; background: var(--gold); border-radius: 50%;
  }
  @media (max-width: 600px) {
    .aipa-page .included-grid { grid-template-columns: 1fr; }
    .aipa-page .included-card.full { grid-column: 1; }
  }

  /* VALUE STACK */
  .aipa-page .value-stack {
    background: var(--surface-3); border: 1px solid var(--border); padding: 40px 36px; margin-top: 2px;
  }
  .aipa-page .value-rows { margin-bottom: 24px; }
  .aipa-page .value-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 12px 0; border-bottom: 1px solid var(--border); font-size: 14px;
  }
  .aipa-page .value-row:last-child { border-bottom: none; }
  .aipa-page .value-row .vname { color: var(--gray-2); }
  .aipa-page .value-row .vprice { color: var(--white); font-weight: 600; }
  .aipa-page .value-total {
    display: flex; justify-content: space-between; align-items: center;
    padding-top: 20px; border-top: 1px solid var(--gold); margin-top: 4px;
  }
  .aipa-page .value-total .vtlabel {
    font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--white);
  }
  .aipa-page .value-total .vtamount { font-size: 22px; font-weight: 700; color: var(--gold); }

  /* SOCIAL PROOF */
  .aipa-page .proof-section {
    padding: 100px 24px; background: var(--black); border-top: 1px solid var(--border);
  }
  .aipa-page .proof-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-top: 48px; }
  .aipa-page .proof-placeholder {
    background: var(--surface-2); border: 1px dashed var(--gray-3);
    padding: 48px 32px; text-align: center; color: var(--gray-3); font-size: 13px;
  }
  @media (max-width: 600px) { .aipa-page .proof-grid { grid-template-columns: 1fr; } }

  /* FOR / NOT FOR */
  .aipa-page .fit-section {
    padding: 120px 24px; background: var(--surface); border-top: 1px solid var(--border);
  }
  .aipa-page .fit-section h2 {
    font-size: clamp(26px, 3.5vw, 38px); font-weight: 700; letter-spacing: -0.02em;
    margin-bottom: 56px; line-height: 1.2;
  }
  .aipa-page .fit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
  .aipa-page .fit-col { background: var(--surface-2); padding: 40px 36px; }
  .aipa-page .fit-col h3 {
    font-size: 14px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 28px;
  }
  .aipa-page .fit-col.yes h3 { color: var(--gold); }
  .aipa-page .fit-col.no h3 { color: var(--gray-3); }
  .aipa-page .fit-list { list-style: none; padding: 0; margin: 0; }
  .aipa-page .fit-list li {
    font-size: 15px; color: var(--gray-2); padding: 10px 0 10px 24px; position: relative;
    border-bottom: 1px solid rgba(255,255,255,0.04); line-height: 1.5;
  }
  .aipa-page .fit-list li:last-child { border-bottom: none; }
  .aipa-page .fit-col.yes .fit-list li::before {
    content: '\\2713'; position: absolute; left: 0; color: var(--gold); font-weight: 700; font-size: 12px; top: 12px;
  }
  .aipa-page .fit-col.no .fit-list li::before {
    content: '\\2715'; position: absolute; left: 0; color: var(--gray-3); font-weight: 700; font-size: 12px; top: 12px;
  }
  @media (max-width: 600px) { .aipa-page .fit-grid { grid-template-columns: 1fr; } }

  /* URGENCY */
  .aipa-page .urgency-section {
    padding: 80px 24px; background: var(--black); border-top: 1px solid var(--border); text-align: center;
  }
  .aipa-page .urgency-section h2 {
    font-size: clamp(22px, 3vw, 32px); font-weight: 700; letter-spacing: -0.02em; margin-bottom: 20px;
  }
  .aipa-page .urgency-section p {
    color: var(--gray-2); max-width: 540px; margin: 0 auto; font-size: 16px; line-height: 1.75;
  }

  /* FAQ */
  .aipa-page .faq-section {
    padding: 120px 24px; background: var(--surface); border-top: 1px solid var(--border);
  }
  .aipa-page .faq-section h2 {
    font-size: clamp(26px, 3.5vw, 36px); font-weight: 700; letter-spacing: -0.02em; margin-bottom: 56px;
  }
  .aipa-page .faq-list { display: flex; flex-direction: column; gap: 2px; }
  .aipa-page .faq-item { background: var(--surface-2); }
  .aipa-page .faq-q {
    width: 100%; background: none; border: none; color: var(--white); font-family: var(--font);
    font-size: 16px; font-weight: 500; text-align: left; padding: 24px 28px; cursor: pointer;
    display: flex; justify-content: space-between; align-items: center; gap: 16px;
  }
  .aipa-page .faq-q:hover { background: rgba(255,255,255,0.02); }
  .aipa-page .faq-icon {
    width: 20px; height: 20px; min-width: 20px; border: 1px solid var(--gray-3);
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 14px; color: var(--gold); transition: transform 0.25s;
  }
  .aipa-page .faq-item.open .faq-icon { transform: rotate(45deg); }
  .aipa-page .faq-a {
    padding: 0 28px; max-height: 0; overflow: hidden; transition: max-height 0.3s ease, padding 0.3s ease;
    font-size: 15px; color: var(--gray-2); line-height: 1.75;
  }
  .aipa-page .faq-item.open .faq-a { max-height: 300px; padding: 0 28px 28px; }

  /* FINAL CTA */
  .aipa-page .final-cta {
    padding: 140px 24px; background: var(--black); border-top: 1px solid var(--border);
    text-align: center; position: relative; overflow: hidden;
  }
  .aipa-page .final-cta::after {
    content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
    width: 600px; height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent); opacity: 0.3;
  }
  .aipa-page .final-cta h2 {
    font-size: clamp(28px, 4vw, 48px); font-weight: 700; letter-spacing: -0.025em;
    line-height: 1.15; max-width: 580px; margin: 0 auto 20px;
  }
  .aipa-page .final-cta p {
    color: var(--gray-2); font-size: 16px; max-width: 440px; margin: 0 auto 48px; line-height: 1.7;
  }

  /* FOOTER */
  .aipa-footer {
    padding: 40px 24px; border-top: 1px solid var(--border); background: var(--surface);
    text-align: center; font-size: 12px; color: var(--gray-3);
  }

  /* ANIMATIONS */
  .aipa-page .fade-up {
    opacity: 0; transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .aipa-page .fade-up.visible { opacity: 1; transform: translateY(0); }
`;

export default AipaPage;
