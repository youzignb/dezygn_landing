import { ExternalLink, Youtube, MessageSquare } from 'lucide-react';

const RESOURCES = [
  {
    title: 'YouTube: AI Photography Tutorials',
    description:
      'My full playlist on creating AI photography for e-commerce brands.',
    url: 'https://www.youtube.com/playlist?list=PLDWnj8EaOunb22xH4H2ges3KNQyDFtpWa',
    icon: Youtube,
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/20',
  },
  {
    title: 'How to Create AI Product Photography',
    description:
      'A step-by-step breakdown of creating AI product photos that don\'t look like slop.',
    url: 'https://www.reddit.com/r/ecommercemarketing/comments/1qvkxng/how_to_create_ai_product_photography_that/',
    icon: MessageSquare,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
  },
  {
    title: 'How to Make Money with AI Photography',
    description:
      'The post that got 250,000 views. The full business model explained.',
    url: 'https://www.reddit.com/r/OnlineIncomeHustle/comments/1pobzp4/how_to_make_money_with_nano_banana_stepbystep/',
    icon: MessageSquare,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
  },
  {
    title: 'How I Actually Create AI Photography for Clients',
    description: 'Behind the scenes of my actual workflow.',
    url: 'https://www.reddit.com/r/OnlineIncomeHustle/comments/1qvk95c/how_i_actually_create_ai_photography_for/',
    icon: MessageSquare,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
  },
  {
    title: 'How to Sell AI Photography Services',
    description: 'Pricing, positioning, and landing your first client.',
    url: 'https://www.reddit.com/r/nanobanana/comments/1r32q9s/how_to_sell_nano_banana_ai_photography_services/',
    icon: MessageSquare,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
  },
];

export default function NotQualifiedScreen() {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Thanks for your interest.
      </h2>
      <p className="text-gray-400 text-lg max-w-lg mx-auto mb-3">
        The APA Launchpad isn't the right fit for everyone right now, and
        that's totally fine.
      </p>
      <p className="text-gray-400 max-w-lg mx-auto mb-10">
        In the meantime, here are some free resources to help you get started
        with AI photography on your own. When you're ready to go deeper,
        we'll be here.
      </p>

      <div className="flex flex-col gap-3 max-w-lg mx-auto text-left mb-10">
        {RESOURCES.map((r) => (
          <a
            key={r.url}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all group"
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-lg ${r.bg} border shrink-0 mt-0.5`}
            >
              <r.icon className={`w-5 h-5 ${r.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {r.title}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-600 shrink-0" />
              </div>
              <p className="text-sm text-gray-500 mt-0.5">{r.description}</p>
            </div>
          </a>
        ))}
      </div>

      <p className="text-gray-500 text-sm max-w-md mx-auto">
        When you're ready to invest in launching your APA, reply to the email
        that brought you here or come back to this page. We'd love to have
        you.
      </p>
    </div>
  );
}
