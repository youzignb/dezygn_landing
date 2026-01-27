import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  Brain,
  Search,
  Wand2,
  Eye,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Shield,
  Layers,
  Globe,
  Lightbulb,
  Target,
} from 'lucide-react';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';

const SKILLS = [
  {
    title: 'Prompt Enhancement',
    description: 'Transforms basic ideas into detailed, production-ready prompts using Visual Syntax.',
    icon: <Wand2 className="w-5 h-5" />,
  },
  {
    title: 'Vision-Based Refinement',
    description: 'Analyzes generated images and iterates with targeted corrections — no guesswork.',
    icon: <Eye className="w-5 h-5" />,
  },
  {
    title: 'Internet Search',
    description: 'Pulls real-time references, trends, and competitor visuals to inform creative direction.',
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: 'Claude Reasoning',
    description: 'Uses advanced reasoning to plan multi-step shoots and solve complex briefs logically.',
    icon: <Brain className="w-5 h-5" />,
  },
  {
    title: 'Brand Memory',
    description: 'Remembers your brand guidelines, color palettes, and style preferences across sessions.',
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: 'Composition Planning',
    description: 'Structures scenes with deliberate lighting, angles, and prop placement before generation.',
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: 'Conversational Direction',
    description: 'Chat naturally to refine shots — "make it warmer", "add a plant", "try a top-down angle".',
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    title: 'Multi-Skill Execution',
    description: '12+ specialized skills that chain together automatically for end-to-end creative work.',
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: 'Web Intelligence',
    description: 'Researches competitor imagery and market trends to keep your visuals current.',
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: 'Creative Strategy',
    description: 'Suggests shot types, angles, and styles based on your product category and goals.',
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    title: 'Quality Verification',
    description: 'Evaluates every output against brand standards before presenting final results.',
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
  {
    title: 'On-Brand Execution',
    description: 'Plans, verifies, and executes — delivering consistent results that match your brand every time.',
    icon: <Target className="w-5 h-5" />,
  },
];

const AwaAgentPage = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Awa — AI Creative Director | Dezygn</title>
        <meta
          name="description"
          content="Meet Awa, your AI Creative Director with 12+ specialized skills. Internet search, prompt enhancement, vision-based refinement, and Claude reasoning — she plans, verifies, and executes on brand every time."
        />
        <link rel="canonical" href="https://dezygn.com/features/awa" />
      </Helmet>

      <HeaderV3 />

      <main className="pt-24">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/features" className="hover:text-gray-300 transition-colors">
                  Features
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300">Awa AI Agent</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
            <Brain className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">AI Creative Director</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Meet{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Awa
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Your AI creative director with 12+ specialized skills. She plans,
            verifies, and executes on brand — every single time.
          </p>
          <a
            href="https://chat.dezygn.com/signup"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            Try Awa Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-10">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <p className="text-xs tracking-[0.3em] text-purple-400 uppercase mb-2">Awa Orchestrator</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Live Creative Command Center</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300">
                  8 subagents
                </span>
                <span className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300">
                  12+ skills
                </span>
                <span className="px-3 py-1.5 rounded-full text-xs bg-green-500/10 border border-green-500/20 text-green-300">
                  all systems ready
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Subagents</p>
                    <p className="text-xs text-gray-500">Specialized modules Awa routes to</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { icon: Globe, label: 'Brand Analyst', note: 'Extracts identity' },
                    { icon: Wand2, label: 'Prompt Engineer', note: 'Builds Visual Syntax' },
                    { icon: Eye, label: 'Vision Critic', note: 'Finds inconsistencies' },
                    { icon: Search, label: 'Trend Scout', note: 'Finds references' },
                    { icon: Layers, label: 'Composition Planner', note: 'Maps scene layout' },
                    { icon: MessageSquare, label: 'Chat Director', note: 'Guides revisions' },
                    { icon: Shield, label: 'Brand Guardian', note: 'Protects consistency' },
                    { icon: CheckCircle2, label: 'QA Verifier', note: 'Approves output' },
                  ].map((agent) => (
                    <div key={agent.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-2">
                      <div className="flex items-center gap-3">
                        <agent.icon className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-200">{agent.label}</span>
                      </div>
                      <span className="text-[10px] text-gray-500">{agent.note}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Active Mission</p>
                    <p className="text-xs text-gray-500">Campaign: Summer launch</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 mb-4">
                  <p className="text-sm text-gray-300 mb-3">
                    Create 8 hero images for a skincare line. Keep it bright, premium, and on-brand.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['studio softbox', 'marble surface', 'cool daylight', 'macro texture', 'subtle mist'].map((chip) => (
                      <span
                        key={chip}
                        className="px-2 py-1 rounded-full text-[10px] bg-white/5 border border-white/10 text-gray-400"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    'Tool call: brand_profile.extract(brand_url)',
                    'Tool call: prompt.enhance(visual_syntax)',
                    'Tool call: generate.batch(8, 4K)',
                    'Tool call: vision.verify(brand_score>92)',
                  ].map((log) => (
                    <div key={log} className="rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-[11px] text-purple-300">
                      {log}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Skill Stack</p>
                    <p className="text-xs text-gray-500">Auto-chained in real time</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Prompt Enhancement',
                    'Vision Refinement',
                    'Internet Search',
                    'Claude Reasoning',
                    'Brand Memory',
                    'Composition Planning',
                    'Creative Strategy',
                    'Quality Verification',
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs text-gray-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/50 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-500">Output Preview</span>
                    <span className="text-xs text-green-400">Brand score: 94</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="h-16 rounded-lg bg-gradient-to-br from-purple-500/30 to-blue-400/20 border border-white/10"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Awa Works */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Awa works
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-14">
            Awa isn't a single tool — she's an orchestrator. Internet search,
            prompt enhancement, vision-based refinement, and Claude reasoning
            chain together so you get the right result, not just a result.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              {
                step: '01',
                title: 'Plans',
                description:
                  'Awa researches references, analyzes your brand guidelines, and structures a creative brief before generating anything.',
              },
              {
                step: '02',
                title: 'Executes',
                description:
                  'She chains the right skills together — prompt building, composition, generation, editing — to produce exactly what you described.',
              },
              {
                step: '03',
                title: 'Verifies',
                description:
                  'Every output is evaluated against your brand standards using vision analysis. Off-brand results are caught and corrected automatically.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 12 Skills Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            12+ Specialized Skills
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-14">
            Each skill is purpose-built for product photography workflows and
            chains with others automatically.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill) => (
              <div
                key={skill.title}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let Awa direct your next shoot
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Stop prompting blindly. Work with an AI creative director who
              plans, executes, and verifies — so every image is on brand.
            </p>
            <a
              href="https://chat.dezygn.com/signup"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <FooterV3 />
    </div>
  );
};

export default AwaAgentPage;
