import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Target, Camera, TrendingUp, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <HeaderV3 />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,80,200,0.15),transparent_60%)]" />
        <div className="max-w-4xl mx-auto relative">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-8">
                <Camera className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300 text-sm">The story behind Dezygn</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                From $700K Launch to Rock Bottom.{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Then Back Again.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Dezygn wasn't built in a boardroom. It was built by someone who lost everything, 
                picked himself up, and decided to do it differently this time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12 text-gray-300 text-lg leading-relaxed">

            {/* Chapter 1 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                THE BEGINNING
              </h2>
              <p className="mb-4">
                I started in digital marketing back in 2011. Fresh out of a contract job at Google, 
                longing to be free. Free to spend time with my family, travel, live on my own terms.
              </p>
              <p className="mb-4">
                So I got hustling. Late nights. Failed attempts. Then I found a coach who taught me 
                how to build an email list and create products. Within a few months, I was financially free.
              </p>
              <p>
                I started selling digital products — PDFs, resources, marketing tools. 
                Eventually I got into software. When I was younger I had a small web design agency, 
                so I knew graphic design. But I hated Photoshop.
              </p>
            </div>

            {/* Chapter 2 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                THE $700K WEEK
              </h2>
              <p className="mb-4">
                So I conceptualized Youzign — a graphic design tool for everyone. 
                Hired a developer to build it with me.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 my-6">
                <p className="text-xl font-semibold text-white">
                  When Youzign launched in 2015, it grossed $700K in its first week.
                </p>
                <p className="text-gray-400 mt-2">A home run from the start.</p>
              </div>
              <p className="mb-4">
                From 2015 to 2020, I branched out. Created 8 more software products. 
                Hired 15 people. Up to 4 developers at some points. 
                My overheads ballooned to $40K a month.
              </p>
              <p>
                But here's the thing — I sold lifetime licenses at low prices. 
                Slowly but surely, the business eroded. I couldn't afford the team. 
                By 2020 I was down to 6-7 people. And I was competing with Canva. Without the VC money.
              </p>
            </div>

            {/* Chapter 3 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                THE HARD YEARS
              </h2>
              <p className="mb-4">
                Then life hit hard. A series of setbacks knocked me down. I went into a long depression 
                from 2021 to 2025, watching my business crumble to nothing until I was, once again, the only employee. 
                Doing everything myself.
              </p>
              <p>
                Most people would have walked away. Sometimes I almost did.
              </p>
            </div>

            {/* Chapter 4 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                THE REBUILD
              </h2>
              <p className="mb-4">
                Then vibe coding happened. And I dedicated 2025 to creating the vision I always had — 
                but this time, I wasn't going to repeat my mistakes.
              </p>
              <p className="mb-4">
                No more building for "everyone." No more competing with billion-dollar companies on their turf. 
                Youzign was a graphic tool for the masses. Dezygn would be a weapon for freelancers and agencies.
              </p>
              <p className="mb-4">
                But I also realized something: I can't sell a platform for freelancers without 
                understanding what they go through. So I took my courage in both hands.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 my-6">
                <p className="text-xl font-semibold text-white mb-3">
                  I signed up to Upwork. Fresh account. Zero history. Zero reviews.
                </p>
                <p className="text-gray-400">
                  I hadn't sold a service since 2009 when I was a freelance web designer in Manchester. 
                  But I needed to feel what our users feel.
                </p>
              </div>
            </div>

            {/* Chapter 5 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                WHAT I FOUND
              </h2>
              <p className="mb-4">
                First gig: $50. Then a couple of $100 jobs. Then a $400 client with a big 
                e-commerce brand. Then $639/month for 12 images for a French retro eyewear brand.
              </p>
              <p className="mb-4">
                $53 per AI-generated image. Let that sink in.
              </p>
              <p className="mb-4">
                What I found is that there's a massive, unmet need for AI photography 
                that's actually accurate, realistic, and on-brand. Not slop. Not the kind of images that get 
                you 2-star reviews on TrustPilot because they don't represent the actual product.
              </p>
              <p className="mb-4">
                Clients keep coming back. I got repeat clients within weeks. Always 5 stars. 
                Because I invested in the craft — understanding visual syntax, image transfer, 
                prompt engineering — the hard stuff nobody teaches.
              </p>
              <p>
                Every day, dozens of e-commerce businesses post on Upwork looking for this exact service. 
                Most can't do it themselves. They tried ChatGPT. They tried Midjourney. 
                The results weren't good enough. That's where skilled creators come in.
              </p>
            </div>

            {/* Chapter 6 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                WHY DEZYGN EXISTS
              </h2>
              <p className="mb-4">
                Dezygn is everything I wish I had when I started freelancing. 
                The tools, the training, the AI assistant that actually understands photography.
              </p>
              <p className="mb-4">
                I built Awa — the AI Creative Director inside Dezygn — with everything I learned 
                on the ground. She can think, reason, search the internet, understand your brand, 
                and create visuals that actually convert. Not perfect yet — she needs steering — 
                but way above anything else out there.
              </p>
              <p>
                AI Photography is the new web design service. Remember when selling web design 
                or SEO services was hot? This is the next wave. And the competition is still incredibly low. 
                The skill ceiling is high enough that it won't be commoditized anytime soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values / What We Believe */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Believe
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Built from real experience, not pitch decks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-purple-500/30 transition-colors">
              <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Niche Beats Mass</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We tried building for everyone. Lost to Canva. Now we build the best tool for one job: 
                AI product photography for freelancers and agencies.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-blue-500/30 transition-colors">
              <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Eat Our Own Cooking</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our founder freelances on Upwork using Dezygn. Every feature is battle-tested 
                on real client work before it ships.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-green-500/30 transition-colors">
              <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Revenue, Not Vanity</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We measure success by how much money our users make. Not downloads. 
                Not sign-ups. Real income from real clients.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-yellow-500/30 transition-colors">
              <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Speed Wins Deals</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                5-minute delivery times. Your clients used to wait weeks for studio shoots. 
                Now you deliver the same day. That's your competitive edge.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-pink-500/30 transition-colors">
              <div className="w-10 h-10 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Craft Over Slop</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Anyone can generate an AI image. Creating one that's accurate, realistic, 
                and on-brand — that's a skill. We teach it and build tools for it.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-cyan-500/30 transition-colors">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
                <Camera className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Bootstrap or Die</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                No VC. No board. One founder, 200K+ users, 11 years of building. 
                We grow because the product works, not because someone wrote a check.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              By The Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                11
              </div>
              <div className="text-sm text-gray-500 mt-1">Years Building</div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                214K+
              </div>
              <div className="text-sm text-gray-500 mt-1">Users</div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                9
              </div>
              <div className="text-sm text-gray-500 mt-1">Products Shipped</div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                $53
              </div>
              <div className="text-sm text-gray-500 mt-1">Per AI Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your AI Photography Business?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Everything you need — the tools, the training, and the AI assistant — 
            in one platform built by someone who does this for a living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.dezygn.com"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all text-lg"
            >
              Start Creating <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/features"
              className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all text-lg"
            >
              See Features
            </Link>
          </div>
        </div>
      </section>

      <FooterV3 />
    </div>
  );
}

export default AboutPage;
