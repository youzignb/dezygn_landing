import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, ExternalLink, HelpCircle, Star, Zap, DollarSign, Shield, Video, Palette } from 'lucide-react';
import Layout from '../components/Layout';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-start gap-4 p-6 text-white hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="text-white/80 leading-relaxed whitespace-pre-line">
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
      answer: `STARTER ($49/month):
• Core AI design tools
• 3 brands, 5 team members
• 100 AI generations/month
• Basic templates and workflows

PRO ($97/month):
• Everything in Starter
• Unlimited brands and team members
• AI Video generation (Animate + Lipsync)
• Brand DNA character consistency
• 500 AI generations/month
• Priority support

AGENCY ($197/month):
• Everything in Pro
• White-label delivery system
• Advanced automation tools
• 1,500 AI generations/month
• Custom integrations
• Dedicated success manager

All plans include the AI Creative Agency Academy ($4,997 value) and website audit tool ($297/month value).`
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
    <Layout>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-purple-400/30 mb-6">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span className="text-white text-sm font-medium">Frequently Asked Questions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Answers</span> Fast
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Everything you need to know about building a successful creative business with Dezygn
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-purple-400/50 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 border border-white/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
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
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white/40" />
                </div>
                <p className="text-white/60 text-lg">No questions found matching your search.</p>
                <p className="text-white/40 text-sm mt-2">Try a different search term or browse all categories.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Our support team is here to help you succeed with Dezygn
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-2xl"
            >
              Contact Support
            </Link>
            <a
              href="https://chat.dezygn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Live Chat
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export default FAQPage;