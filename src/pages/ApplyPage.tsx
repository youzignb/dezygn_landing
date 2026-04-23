import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import QualifiedScreen from '../components/apply/QualifiedScreen';
import NotQualifiedScreen from '../components/apply/NotQualifiedScreen';
import { supabase } from '../lib/supabase';
import aipaLogo from '../assets/images/logos/aipa-logo.png';

// ---------------------------------------------------------------------------
// Types & config
// ---------------------------------------------------------------------------

interface FormData {
  name: string;
  email: string;
  situation: string;
  situationOther: string;
  sold_before: string;
  ai_experience: string;
  revenue: string;
  investment: string;
  timeline: string;
  confidence: string;
}

const INITIAL: FormData = {
  name: '',
  email: '',
  situation: '',
  situationOther: '',
  sold_before: '',
  ai_experience: '',
  revenue: '',
  investment: '',
  timeline: '',
  confidence: '',
};

const SITUATION_OPTIONS = [
  'Freelancer / solo service provider',
  'Small agency owner (1-5 people)',
  'Graphic designer or web designer',
  'Digital marketer / consultant',
  'Employed full-time, looking to start something on the side',
  'Other',
];

const SOLD_BEFORE_OPTIONS = [
  'Yes, I do it regularly',
  "Yes, but it's been a while",
  'A few times',
  'Never',
];

const AI_EXPERIENCE_OPTIONS = [
  "I've never used AI image generation tools",
  "I've played around with ChatGPT, Midjourney, Flux, etc.",
  'I use AI tools regularly but struggle with consistency and quality',
  "I'm proficient — I already create quality AI images for myself or clients",
];

const REVENUE_OPTIONS = [
  "$0 — I haven't started generating revenue yet",
  'Under $1k/month',
  '$1k-$3k/month',
  '$3k-$10k/month',
  '$10k+/month',
];

const INVESTMENT_OPTIONS = [
  '$2,000-$5,000 available to invest',
  '$1,000-$2,000 available to invest',
  '$500-$1,000 available to invest',
  'Less than $500 available',
];

const TIMELINE_OPTIONS = [
  'ASAP — next available cohort',
  'Later in 2026 — I’m planning ahead',
];

const CONFIDENCE_OPTIONS = [
  "100% confident — that's why I'm applying. I'm ready to invest in myself and go all-in.",
  "80% confident — I just need to clear up a few things, but I'm basically ready to go.",
  "40% confident — I need more info before I commit. I'm not ready to decide on the first call.",
  "Not confident yet — I'm just exploring my options for now.",
];

const QUALIFIED_INVESTMENTS = new Set([
  '$2,000-$5,000 available to invest',
  '$1,000-$2,000 available to invest',
  '$500-$1,000 available to invest',
]);

const TOTAL_STEPS = 9;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function canAdvance(step: number, data: FormData): boolean {
  switch (step) {
    case 0: return data.name.trim().length > 0;
    case 1: return isValidEmail(data.email);
    case 2: return data.situation !== '' && (data.situation !== 'Other' || data.situationOther.trim().length > 0);
    case 3: return data.sold_before !== '';
    case 4: return data.ai_experience !== '';
    case 5: return data.revenue !== '';
    case 6: return data.investment !== '';
    case 7: return data.timeline !== '';
    case 8: return data.confidence !== '';
    default: return false;
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<'qualified' | 'not_qualified' | null>(null);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const focusInput = () => {
    setTimeout(() => inputRef.current?.focus(), 150);
  };

  const next = () => {
    if (!canAdvance(step, data)) return;
    if (step < TOTAL_STEPS - 1) {
      setDirection('forward');
      setStep((s) => s + 1);
      focusInput();
    } else {
      submit();
    }
  };

  const back = () => {
    if (step > 0) {
      setDirection('back');
      setStep((s) => s - 1);
      focusInput();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      next();
    }
  };

  const submit = async () => {
    setSubmitting(true);
    setError(null);

    const qualified = QUALIFIED_INVESTMENTS.has(data.investment);
    const situation =
      data.situation === 'Other' ? data.situationOther : data.situation;

    const { error: dbError } = await supabase
      .from('apa_applications')
      .insert({
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        situation,
        sold_before: data.sold_before,
        ai_experience: data.ai_experience,
        revenue: data.revenue,
        timeline: data.timeline,
        investment: data.investment,
        confidence: data.confidence,
        qualified,
      });

    setSubmitting(false);

    if (dbError) {
      setError('Something went wrong. Please try again.');
      return;
    }

    setResult(qualified ? 'qualified' : 'not_qualified');
  };

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  // ---------------------------------------------------------------------------
  // Post-submit screens
  // ---------------------------------------------------------------------------

  if (result) {
    return (
      <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
        <div className="flex items-center justify-center gap-2 pt-10 pb-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={aipaLogo} alt="A.I.P.A. Launchpad" className="w-9 h-9 rounded-full" />
            <span className="text-lg font-normal text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>A.I.P.A. Launchpad</span>
          </Link>
        </div>
        <main className="pb-20 px-6">
          <div className="max-w-2xl mx-auto">
            {result === 'qualified' ? (
              <QualifiedScreen />
            ) : (
              <NotQualifiedScreen />
            )}
          </div>
        </main>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // Progress bar & animation
  // ---------------------------------------------------------------------------

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  const animClass =
    direction === 'forward'
      ? 'animate-[slideInRight_0.25s_ease-out]'
      : 'animate-[slideInLeft_0.25s_ease-out]';

  // ---------------------------------------------------------------------------
  // Step content
  // ---------------------------------------------------------------------------

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <StepShell key={0} label="What's your name?" className={animClass}>
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="text"
              value={data.name}
              onChange={(e) => update('name', e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Your full name"
              autoFocus
              className="step-input"
            />
          </StepShell>
        );

      case 1:
        return (
          <StepShell key={1} label="Best email to reach you?" className={animClass}>
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="email"
              value={data.email}
              onChange={(e) => update('email', e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="you@email.com"
              autoFocus
              className="step-input"
            />
          </StepShell>
        );

      case 2:
        return (
          <StepShell
            key={2}
            label="What best describes your current situation?"
            className={animClass}
          >
            <RadioCards
              options={SITUATION_OPTIONS}
              value={data.situation}
              onChange={(v) => update('situation', v)}
            />
            {data.situation === 'Other' && (
              <input
                type="text"
                value={data.situationOther}
                onChange={(e) => update('situationOther', e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tell us what you do..."
                autoFocus
                className="step-input mt-4"
              />
            )}
          </StepShell>
        );

      case 3:
        return (
          <StepShell
            key={3}
            label="Have you ever sold a service to a client before?"
            className={animClass}
          >
            <RadioCards
              options={SOLD_BEFORE_OPTIONS}
              value={data.sold_before}
              onChange={(v) => update('sold_before', v)}
            />
          </StepShell>
        );

      case 4:
        return (
          <StepShell
            key={4}
            label="What's your current experience with AI image generation?"
            className={animClass}
          >
            <RadioCards
              options={AI_EXPERIENCE_OPTIONS}
              value={data.ai_experience}
              onChange={(v) => update('ai_experience', v)}
            />
          </StepShell>
        );

      case 5:
        return (
          <StepShell
            key={5}
            label="What is your current monthly revenue?"
            className={animClass}
          >
            <RadioCards
              options={REVENUE_OPTIONS}
              value={data.revenue}
              onChange={(v) => update('revenue', v)}
            />
          </StepShell>
        );

      case 6:
        return (
          <StepShell
            key={6}
            label="This is a hands-on mentorship program, not a course. It requires a real financial commitment. Which best describes where you're at?"
            className={animClass}
          >
            <RadioCards
              options={INVESTMENT_OPTIONS}
              value={data.investment}
              onChange={(v) => update('investment', v)}
            />
          </StepShell>
        );

      case 7:
        return (
          <StepShell
            key={7}
            label="How soon are you looking to take action?"
            className={animClass}
          >
            <RadioCards
              options={TIMELINE_OPTIONS}
              value={data.timeline}
              onChange={(v) => update('timeline', v)}
            />
          </StepShell>
        );

      case 8:
        return (
          <StepShell
            key={8}
            label="How confident are you that you're ready to go all-in on building your APA?"
            className={animClass}
          >
            <RadioCards
              options={CONFIDENCE_OPTIONS}
              value={data.confidence}
              onChange={(v) => update('confidence', v)}
            />
          </StepShell>
        );

      default:
        return null;
    }
  };

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Apply to the APA Launchpad | Dezygn</title>
        <meta
          name="description"
          content="Apply to the APA Launchpad program. Build your AI photography agency with expert guidance."
        />
      </Helmet>

      <div className="flex items-center justify-center gap-2 pt-10 pb-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={aipaLogo} alt="A.I.P.A. Launchpad" className="w-9 h-9 rounded-full" />
          <span className="text-lg font-normal text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>A.I.P.A. Launchpad</span>
        </Link>
      </div>

      <main className="pb-20 px-6">
        <div className="max-w-[560px] mx-auto">
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>
                Step {step + 1} of {TOTAL_STEPS}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Step content */}
          <div className="min-h-[320px] flex flex-col">{renderStep()}</div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm text-center mt-4">{error}</p>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {step > 0 ? (
              <button
                onClick={back}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <span />
            )}

            <button
              onClick={next}
              disabled={!canAdvance(step, data) || submitting}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium transition-colors"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : step === TOTAL_STEPS - 1 ? (
                'Submit Application'
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function StepShell({
  label,
  subtitle,
  className = '',
  children,
}: {
  label: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
        {label}
      </h2>
      {subtitle && (
        <p className="text-sm text-gray-500 mb-6">{subtitle}</p>
      )}
      {!subtitle && <div className="mb-6" />}
      {children}
    </div>
  );
}

function RadioCards({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-150 ${
              selected
                ? 'bg-purple-600/15 border-purple-500/50 text-white'
                : 'bg-white/[0.03] border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.05]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${
                  selected
                    ? 'border-purple-500 bg-purple-500'
                    : 'border-gray-600'
                }`}
              >
                {selected && (
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </div>
              <span className="text-sm font-medium">{opt}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
