import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, ExternalLink, HelpCircle, Star, Zap, DollarSign, Shield, Video, Palette } from 'lucide-react';
import HeaderV4 from '../components/HeaderV4';
import FooterV4 from '../components/FooterV4';

const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
const serif = "font-['Instrument_Serif',Georgia,serif]";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-[#1A1A1A]/[0.12] bg-white shadow-[0_24px_60px_rgba(26,26,26,0.08)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-4 p-6 text-left text-[#1A1A1A] transition-colors hover:bg-[#F7F5F0]"
      >
        <span className="text-lg font-semibold tracking-tight">{question}</span>
        <ChevronDown className={`h-5 w-5 flex-shrink-0 text-[#8B867B] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="whitespace-pre-line leading-7 text-[#6B6459]">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}

function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'getting-started', label: 'Getting Started', icon: Star },
    { id: 'features', label: 'Features & Tools', icon: Zap },
    { id: 'pricing', label: 'Pricing & Plans', icon: DollarSign },
    { id: 'business', label: 'Building Business', icon: Video },
    { id: 'technical', label: 'Technical', icon: Palette },
    { id: 'support', label: 'Support & Billing', icon: Shield }
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: 'Do I need design experience to use Dezygn?',
      answer: `No! Dezygn is specifically built for entrepreneurs and business owners, not professional designers. 

Our AI handles all the technical design work while you focus on serving clients and growing your business. Most users start earning within their first week, regardless of their design background.

The platform includes pre-built workflows for the most in-demand creative services, so you can deliver professional results from day one.`
    },
    {
      category: 'getting-started',
      question: 'How quickly can I start making money with Dezygn?',
      answer: `Most users start earning within their first week. Here's the typical timeline:

• Day 1-3: Complete the AI Creative Agency Academy training
• Day 4-7: Set up your first client profiles and start prospecting
• Week 2: Land your first 1-3 clients
• Month 2: Scale to 6+ clients through referrals
• Month 3+: Add premium video services for higher rates

Our users average $2,400/month working part-time, with many reaching $10,000+ by month 6.`
    },
    {
      category: 'features',
      question: 'How is Dezygn different from Midjourney, DALL-E, or Canva?',
      answer: `Dezygn is a complete business system, not just an image generator:

VS MIDJOURNEY/DALL-E:
• They create "AI-looking" images from prompts
• Dezygn creates professional designs that look agency-made
• We include business tools: client management, brand consistency, delivery systems

VS CANVA:
• Canva has templates that look "template-y"
• Dezygn uses AI to create custom, on-brand designs
• We specialize in high-value services like Brand DNA and AI video

VS TRADITIONAL DESIGNERS:
• Deliver in 5 minutes vs 2-5 days
• Unlimited revisions vs charging for changes
• Scale infinitely vs being limited by time`
    },
    {
      category: 'features',
      question: 'What is Brand DNA and why is it important?',
      answer: `Brand DNA is our character consistency technology that creates the same person, product, or brand element across unlimited designs.

This unlocks premium services:
• Product photography series ($500-2000 projects)
• Brand ambassador campaigns ($1000+ monthly retainers)
• Social media character consistency ($300-800/month)

Example: A client says "Make our model look the same in all 50 product shots" - that's a $2,000 project you can complete in one afternoon with Brand DNA.

Without this technology, agencies charge $10K+ for the same consistency.`
    },
    {
      category: 'features',
      question: 'Can I really create professional videos with AI?',
      answer: `Yes! Our AI video generation includes:

ANIMATE: Turn any image into engaging motion
• Product demos: $800 average project value
• Social media content: $200-600 per video
• Website backgrounds: $300-500 add-on service

LIPSYNC: Make any person speak any script
• AI spokespersons: $1,200 average project value
• Training content: $2,500+ retainer clients
• Testimonial videos: $400-800 per video

Video work pays 3.6x more than static design ($688 vs $188 average). Only 12% of creators offer video services, giving you a massive competitive advantage.`
    },
    {
      category: 'pricing',
      question: 'What do the different pricing plans include?',
      answer: `We offer flexible pricing plans to match your needs and goals. Visit our pricing page at /pricing to see all available plans with current features and pricing details.`
    },
    {
      category: 'pricing',
      question: 'Is there a free trial?',
      answer: `Yes! We offer a 7-day free trial with full access to all features.

No credit card required to start. You can:
• Create unlimited designs
• Test all AI features including video
• Access the complete training academy
• Use the website audit tool
• Experience the full platform

After 7 days, choose the plan that fits your needs. Most users upgrade to Pro to unlock video capabilities and unlimited brands.`
    },
    {
      category: 'pricing',
      question: 'What\'s your refund policy?',
      answer: `We offer an industry-leading 365-day money-back guarantee.

If you don't earn at least 3x your investment using Dezygn, we'll refund every penny. That's how confident we are in the platform.

Most users earn back their subscription cost in their first week, but we give you a full year to see results.

To request a refund, simply email support@youzign.com with your earnings report, and we'll process it immediately.`
    },
    {
      category: 'business',
      question: 'What if I don\'t have clients yet?',
      answer: `We include the AI Creative Agency Academy ($4,997 value) free with every subscription.

This complete training system shows you:
• How to find high-paying clients on Upwork, Fiverr, and other platforms
• Exact pricing strategies for maximum profit
• Copy-paste proposals that win projects
• How to scale from $0 to $10K/month
• Client management and retention systems

The academy includes the "$10K Hit List" - analysis of 1,050 real jobs showing exactly what's selling right now and how to position yourself to win those projects.

Many users land their first client within 48 hours of completing the training.`
    },
    {
      category: 'business',
      question: 'How much can I realistically make?',
      answer: `Our users' average earnings by timeline:

MONTH 1: $900-1,500
• 3-5 basic design clients
• $200-300 average project value
• Focus on building portfolio and reviews

MONTH 2: $1,800-3,000
• 6-8 clients through referrals
• Mix of design and basic video work
• Higher rates due to proven results

MONTH 3: $2,700-5,000
• 8-12 clients
• Premium video services added
• Some monthly retainer clients

MONTH 6+: $5,000-15,000+
• 10-20 active clients
• Mostly video and premium services
• Multiple monthly retainers
• Established reputation and referral network

Top 10% of users earn $25,000+ per month by offering full-service creative agency solutions powered by Dezygn.`
    },
    {
      category: 'business',
      question: 'Can I use this to start an agency?',
      answer: `Absolutely! Many users scale into full agencies:

SOLO TO TEAM:
• Start alone, add team members as you grow
• TeamSpace collaboration tools included
• White-label delivery system for professional presentation

AGENCY BENEFITS:
• Deliver 10x faster than traditional agencies
• 90% profit margins (no designer salaries)
• Unlimited revisions without extra costs
• Scale to hundreds of clients

AGENCY PLAN FEATURES:
• Unlimited team members
• Custom branding and domains
• Advanced client management
• Automation workflows
• Dedicated success manager

Several users have built 7-figure agencies using Dezygn as their core production engine.`
    },
    {
      category: 'technical',
      question: 'Do I need any special software or hardware?',
      answer: `No! Dezygn runs entirely in your web browser.

REQUIREMENTS:
• Modern web browser (Chrome, Firefox, Safari, Edge)
• Stable internet connection
• Any computer, tablet, or smartphone

NO DOWNLOADS NEEDED:
• No software to install
• No updates to manage
• Access from anywhere in the world
• Works on Mac, PC, Linux, mobile

CLOUD-POWERED:
• All processing happens in the cloud
• Your projects sync across all devices
• Automatic backups and version history
• Professional-grade infrastructure`
    },
    {
      category: 'technical',
      question: 'How does the AI video generation work?',
      answer: `Our AI video technology transforms static images into dynamic content:

ANIMATE FEATURE:
• Upload any product or person image
• AI analyzes and creates natural motion
• Customizable movement styles and speeds
• Export in multiple formats and resolutions

LIPSYNC FEATURE:
• Upload a portrait photo
• Provide text script or audio file
• AI creates realistic lip movements
• Perfect synchronization with speech

TECHNICAL SPECS:
• HD quality output (1080p)
• Multiple aspect ratios (16:9, 9:16, 1:1)
• MP4 format compatible with all platforms
• Average processing time: 2-5 minutes

The AI is trained on millions of video samples to create natural, professional-looking motion that clients love.`
    },
    {
      category: 'technical',
      question: 'Can I integrate Dezygn with other tools?',
      answer: `Yes! We offer several integration options:

DIRECT INTEGRATIONS:
• Youzign template library
• Google Drive and Dropbox
• Social media platforms
• Email marketing tools

API ACCESS (Agency Plan):
• Custom integrations with your existing tools
• Automate workflows and client delivery
• Connect to CRM and project management systems
• White-label the entire experience

EXPORT OPTIONS:
• High-resolution files (PNG, JPG, PDF, MP4)
• Print-ready formats
• Web-optimized versions
• Bulk download capabilities

TEAMSPACE FEATURES:
• Client collaboration portals
• Real-time review and approval
• Version control and feedback loops
• Automated delivery notifications`
    },
    {
      category: 'support',
      question: 'What support do you provide?',
      answer: `We provide comprehensive support at every level:

SELF-SERVICE:
• Extensive knowledge base
• Video tutorials and walkthroughs
• AI Creative Agency Academy training
• Community forums and networking

DIRECT SUPPORT:
• Email support (24-48 hour response)
• Live chat during business hours
• Screen sharing assistance
• Priority support for Pro+ plans

PREMIUM SUPPORT (Agency Plan):
• Dedicated success manager
• Monthly strategy calls
• Custom training sessions
• Direct phone support

We're committed to your success and will help you maximize your earnings with Dezygn.`
    },
    {
      category: 'support',
      question: 'How do billing and payments work?',
      answer: `Simple, transparent billing:

PAYMENT METHODS:
• All major credit cards accepted
• PayPal for international users
• Secure processing through Stripe
• Annual plans available (2 months free)

BILLING CYCLE:
• Monthly or annual subscriptions
• Automatic renewal (can cancel anytime)
• Invoices emailed immediately
• Detailed usage tracking included

INTERNATIONAL:
• Accepts payments from 195+ countries
• Local currency support
• VAT/tax handling included
• No hidden fees or foreign transaction charges

PLAN CHANGES:
• Upgrade/downgrade anytime
• Prorated billing adjustments
• Immediate access to new features
• No penalty for changes`
    },
    {
      category: 'support',
      question: 'Do you offer training and onboarding?',
      answer: `Yes! Every subscription includes comprehensive training:

AI CREATIVE AGENCY ACADEMY:
• 8 core modules + 3 bonus workshops
• Step-by-step $0-to-$10K roadmap
• Client acquisition strategies
• Pricing and positioning frameworks
• Live Q&A sessions with experts

ONBOARDING PROCESS:
• Welcome email with getting started guide
• Video walkthrough of all features
• Sample projects and templates
• Direct access to success team

ONGOING EDUCATION:
• Weekly feature updates and training
• Monthly masterclasses with top users
• Case studies and success stories
• Advanced technique workshops

COMMUNITY ACCESS:
• Private Facebook group
• Monthly networking calls
• Peer mentorship program
• Success story celebrations

We ensure you have everything needed to build a successful creative business.`
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <Helmet>
        <title>Frequently Asked Questions | Dezygn</title>
        <meta
          name="description"
          content="Answers to common questions about Dezygn: getting started, features, pricing, building a creative business, and support."
        />
        <link rel="canonical" href="https://dezygn.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          })}
        </script>
      </Helmet>
      <HeaderV4 />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden px-5 pb-12 pt-32 sm:pt-40">
          <span aria-hidden className={`${serif} pointer-events-none absolute -right-4 top-28 hidden rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}>
            ✦
          </span>
          <div className="mx-auto max-w-3xl text-center">
            <p className={`${mono} mb-6 inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
              <HelpCircle className="h-3.5 w-3.5" />
              Frequently Asked Questions
            </p>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-6xl">
              Get Answers <span className={`${serif} italic font-normal text-[#7C3AED]`}>Fast.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B6459]">
              Everything you need to know about building a successful creative business with Dezygn
            </p>

            {/* Search Bar */}
            <div className="relative mx-auto mt-8 max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8B867B]" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-[#1A1A1A]/[0.12] bg-white py-4 pl-12 pr-4 text-[15px] text-[#1A1A1A] shadow-sm placeholder:text-[#8B867B] focus:border-[#8B5CF6] focus:outline-none"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-5 pb-20">
          <div className="mx-auto max-w-4xl">
            {/* Category Filter */}
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${mono} inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] transition-all ${
                    selectedCategory === category.id
                      ? 'border-[#7C3AED] bg-[#8B5CF6] text-white shadow-md'
                      : 'border-[#1A1A1A]/[0.12] bg-white text-[#6B6459] hover:border-[#8B5CF6]/40 hover:text-[#1A1A1A]'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))
              ) : (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#1A1A1A]/10 bg-white shadow-sm">
                    <Search className="h-8 w-8 text-[#8B867B]" />
                  </div>
                  <p className="text-lg text-[#6B6459]">No questions found matching your search.</p>
                  <p className={`${mono} mt-2 text-xs text-[#8B867B]`}>Try a different search term or browse all categories.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="relative overflow-hidden bg-[#1A1A1A] px-5 py-20 text-[#E8E4DB] sm:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(232,228,219,0.06)_1px,transparent_1px)] [background-size:26px_26px]"
          />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Still Have <span className={`${serif} italic font-normal text-[#8B5CF6]`}>Questions?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#E8E4DB]/65">
              Our support team is here to help you succeed with Dezygn
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#8B5CF6] px-8 text-[15px] font-semibold text-white transition hover:bg-[#7C3AED]"
              >
                Contact Support
              </Link>
              <a
                href="https://chat.dezygn.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#E8E4DB]/25 px-8 text-[15px] font-semibold text-[#E8E4DB] transition hover:bg-[#2B2B2B]"
              >
                Live Chat
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterV4 />
    </div>
  );
}

export default FAQPage;