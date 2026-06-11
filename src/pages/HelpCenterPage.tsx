import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Info,
  Lightbulb,
  List,
  MessageCircle,
  Search,
  AlertTriangle,
  X,
} from 'lucide-react';
import HeaderV4 from '../components/HeaderV4';
import FooterV4 from '../components/FooterV4';
import ContactSupportModal from '../components/ContactSupportModal';
import {
  allHelpArticles,
  findHelpArticle,
  helpCategories,
  type HelpArticle,
  type HelpBlock,
  type HelpCategory,
} from '../data/help';
import { crumbLink, crumbNav, EditorialTitle, mono, pageWrap, serif } from './seo/v4Theme';

/* ── Search ───────────────────────────────────────────── */

function searchArticles(query: string): { article: HelpArticle; category: HelpCategory }[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return allHelpArticles.filter(
    ({ article }) =>
      article.title.toLowerCase().includes(q) || article.description.toLowerCase().includes(q),
  );
}

/* ── Sidebar ──────────────────────────────────────────── */

function SidebarTree({
  activeSlug,
  onNavigate,
  onContact,
}: {
  activeSlug: string | null;
  onNavigate?: () => void;
  onContact: () => void;
}) {
  const [query, setQuery] = useState('');
  const results = useMemo(() => searchArticles(query), [query]);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8B867B]" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles…"
          aria-label="Search help articles"
          className="w-full rounded-full border border-[#1A1A1A]/[0.12] bg-white py-2.5 pl-10 pr-4 text-sm text-[#1A1A1A] placeholder:text-[#8B867B] shadow-sm outline-none transition focus:border-[#8B5CF6]"
        />
      </div>

      {query.trim() ? (
        <div>
          <p className={`${mono} text-[10px] font-medium uppercase tracking-[0.14em] text-[#8B867B]`}>
            {results.length} result{results.length === 1 ? '' : 's'}
          </p>
          <ul className="mt-2 space-y-1">
            {results.map(({ article }) => (
              <li key={article.slug}>
                <Link
                  to={`/help/${article.slug}`}
                  onClick={onNavigate}
                  className="block rounded-xl px-3 py-2 text-sm text-[#6B6459] transition hover:bg-white hover:text-[#1A1A1A]"
                >
                  {article.title}
                </Link>
              </li>
            ))}
            {results.length === 0 ? (
              <li className="px-3 py-2 text-sm text-[#8B867B]">No matches. Try another word, or contact us below.</li>
            ) : null}
          </ul>
        </div>
      ) : (
        <nav aria-label="Help articles" className="space-y-6">
          {helpCategories.map((category) => (
            <div key={category.id}>
              <p className={`${mono} text-[10px] font-medium uppercase tracking-[0.14em] text-[#8B867B]`}>
                {category.title}
              </p>
              <ul className="mt-2 space-y-0.5 border-l border-[#1A1A1A]/10">
                {category.articles.map((article) => {
                  const active = article.slug === activeSlug;
                  return (
                    <li key={article.slug}>
                      <Link
                        to={`/help/${article.slug}`}
                        onClick={onNavigate}
                        aria-current={active ? 'page' : undefined}
                        className={`-ml-px block border-l-2 py-1.5 pl-4 pr-2 text-sm leading-5 transition ${
                          active
                            ? 'border-[#8B5CF6] font-medium text-[#1A1A1A]'
                            : 'border-transparent text-[#6B6459] hover:border-[#1A1A1A]/25 hover:text-[#1A1A1A]'
                        }`}
                      >
                        {article.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      )}

      <div className="mt-auto pt-2">
        <button
          type="button"
          onClick={onContact}
          className="inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-full border border-[#1A1A1A]/15 bg-white px-5 text-sm font-semibold text-[#1A1A1A] shadow-sm transition hover:border-[#8B5CF6] hover:text-[#7C3AED]"
        >
          <MessageCircle className="h-4 w-4" />
          Contact support
        </button>
      </div>
    </div>
  );
}

/* ── Article blocks ───────────────────────────────────── */

const calloutStyles = {
  tip: { label: 'Tip', icon: Lightbulb },
  note: { label: 'Note', icon: Info },
  warning: { label: 'Heads up', icon: AlertTriangle },
} as const;

function ArticleBlock({ block }: { block: HelpBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-10 text-xl font-semibold tracking-tight text-[#1A1A1A] sm:text-2xl">{block.text}</h2>;
    case 'p':
      return <p className="mt-4 text-[15px] leading-7 text-[#6B6459] sm:text-base">{block.text}</p>;
    case 'ul':
      return (
        <ul className="mt-4 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#6B6459] sm:text-base">
              <Check className="mt-1.5 h-4 w-4 shrink-0 text-[#7C3AED]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'steps':
      return (
        <ol className="mt-4 space-y-4">
          {block.items.map((item, index) => (
            <li key={item} className="flex items-start gap-4 text-[15px] leading-7 text-[#6B6459] sm:text-base">
              <span
                className={`${mono} mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#1A1A1A]/15 bg-white text-xs font-medium text-[#7C3AED] shadow-sm`}
              >
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case 'img':
      return (
        <figure className="mt-8">
          <div className="rounded-2xl border border-[#1A1A1A]/[0.12] bg-white p-2 shadow-[0_24px_60px_rgba(26,26,26,0.08)]">
            <img src={block.src} alt={block.alt} loading="lazy" className="w-full rounded-[10px]" />
          </div>
          {block.caption ? (
            <figcaption className={`${mono} mt-3 text-center text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    case 'callout': {
      const { label, icon: Icon } = calloutStyles[block.variant];
      return (
        <aside className="mt-6 rounded-2xl border border-[#8B5CF6]/25 bg-[#8B5CF6]/[0.06] p-5">
          <p className={`${mono} inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>
            <Icon className="h-3.5 w-3.5" />
            {label}
          </p>
          <p className="mt-2 text-[15px] leading-7 text-[#2B2B2B]">{block.text}</p>
        </aside>
      );
    }
  }
}

/* ── Article view ─────────────────────────────────────── */

function PrevNextLink({
  direction,
  article,
}: {
  direction: 'prev' | 'next';
  article: HelpArticle;
}) {
  return (
    <Link
      to={`/help/${article.slug}`}
      className={`group flex flex-1 flex-col gap-1 rounded-2xl border border-[#1A1A1A]/[0.12] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(26,26,26,0.1)] ${
        direction === 'next' ? 'items-end text-right' : 'items-start'
      }`}
    >
      <span className={`${mono} inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8B867B]`}>
        {direction === 'prev' ? <ArrowLeft className="h-3 w-3" /> : null}
        {direction === 'prev' ? 'Previous' : 'Next'}
        {direction === 'next' ? <ArrowRight className="h-3 w-3" /> : null}
      </span>
      <span className="text-sm font-semibold text-[#1A1A1A] transition group-hover:text-[#7C3AED]">{article.title}</span>
    </Link>
  );
}

function ArticleView({ slug, onContact }: { slug: string; onContact: () => void }) {
  const lookup = findHelpArticle(slug);
  if (!lookup) return <Navigate to="/help" replace />;
  const { article, category, prev, next } = lookup;

  const relatedArticles = (article.related ?? [])
    .map((relatedSlug) => findHelpArticle(relatedSlug))
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

  return (
    <article key={article.slug}>
      <Helmet>
        <title>{article.title} — Dezygn Help Center</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={`https://dezygn.com/help/${article.slug}`} />
      </Helmet>

      <nav aria-label="Breadcrumb" className={crumbNav}>
        <Link to="/" className={crumbLink}>
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/help" className={crumbLink}>
          Help Center
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-[#6B6459]">{category.title}</span>
      </nav>

      <h1 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-4xl">
        <EditorialTitle text={article.title} />
      </h1>
      <p className="mt-4 text-base leading-7 text-[#6B6459] sm:text-lg">{article.description}</p>
      <p className={`${mono} mt-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>
        Updated {article.updatedAt}
      </p>

      <div className="mt-2 border-t border-[#1A1A1A]/10 pt-2">
        {article.blocks.map((block, index) => (
          <ArticleBlock key={index} block={block} />
        ))}
      </div>

      {relatedArticles.length > 0 ? (
        <div className="mt-12">
          <p className={`${mono} text-[10px] font-medium uppercase tracking-[0.14em] text-[#8B867B]`}>Related articles</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {relatedArticles.map(({ article: related }) => (
              <li key={related.slug}>
                <Link
                  to={`/help/${related.slug}`}
                  className="group flex items-center gap-2 rounded-xl border border-[#1A1A1A]/10 bg-white px-4 py-3 text-sm font-medium text-[#1A1A1A] shadow-sm transition hover:border-[#8B5CF6]/40 hover:text-[#7C3AED]"
                >
                  <BookOpen className="h-4 w-4 text-[#8B867B] transition group-hover:text-[#8B5CF6]" />
                  {related.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        {prev ? <PrevNextLink direction="prev" article={prev.article} /> : <div className="flex-1" />}
        {next ? <PrevNextLink direction="next" article={next.article} /> : <div className="flex-1" />}
      </div>

      <div className="mt-12 rounded-3xl border border-[#1A1A1A]/[0.12] bg-[#EDEBE6] p-7 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-[#1A1A1A]">
          Didn't find what you <span className={`${serif} italic font-normal`}>needed?</span>
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-[#6B6459]">
          Tell us what you're stuck on — a real human reads every message and replies within 24 hours on business days.
        </p>
        <button
          type="button"
          onClick={onContact}
          className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#8B5CF6] px-6 text-sm font-semibold text-white transition hover:bg-[#7C3AED]"
        >
          <MessageCircle className="h-4 w-4" />
          Contact support
        </button>
      </div>
    </article>
  );
}

/* ── Home view (/help) ────────────────────────────────── */

function HomeView({ onContact }: { onContact: () => void }) {
  const [query, setQuery] = useState('');
  const results = useMemo(() => searchArticles(query), [query]);

  return (
    <div>
      <Helmet>
        <title>Help Center — Dezygn Documentation & Support</title>
        <meta
          name="description"
          content="Everything about Dezygn, the AI Photography Studio OS: getting started, Awa, ingredients, creating images, client feedback, outreach, and billing."
        />
        <link rel="canonical" href="https://dezygn.com/help" />
      </Helmet>

      <nav aria-label="Breadcrumb" className={crumbNav}>
        <Link to="/" className={crumbLink}>
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-[#6B6459]">Help Center</span>
      </nav>

      <div className="relative mt-6">
        <span aria-hidden className={`${serif} pointer-events-none absolute -right-2 -top-10 hidden rotate-12 text-[110px] italic leading-none text-[#8B5CF6]/15 lg:block`}>
          ✦
        </span>
        <p className={`${mono} inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
          <BookOpen className="h-3.5 w-3.5" />
          Help Center
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-5xl">
          <EditorialTitle text="Every part of Dezygn, explained." />
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#6B6459] sm:text-lg">
          Documentation for the new Dezygn interface — from your first image to client feedback loops and outreach at
          volume.
        </p>

        <div className="relative mt-8 max-w-xl">
          <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8B867B]" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search the docs — try “credits” or “feedback”…"
            aria-label="Search help articles"
            className="w-full rounded-full border border-[#1A1A1A]/[0.12] bg-white py-4 pl-[3.25rem] pr-5 text-[15px] text-[#1A1A1A] placeholder:text-[#8B867B] shadow-[0_24px_60px_rgba(26,26,26,0.08)] outline-none transition focus:border-[#8B5CF6]"
          />
        </div>
      </div>

      {query.trim() ? (
        <ul className="mt-8 space-y-2">
          {results.map(({ article, category }) => (
            <li key={article.slug}>
              <Link
                to={`/help/${article.slug}`}
                className="group block rounded-2xl border border-[#1A1A1A]/[0.12] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(26,26,26,0.1)]"
              >
                <p className={`${mono} text-[10px] font-medium uppercase tracking-[0.14em] text-[#8B867B]`}>
                  {category.title}
                </p>
                <p className="mt-1 text-base font-semibold text-[#1A1A1A] transition group-hover:text-[#7C3AED]">
                  {article.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-[#6B6459]">{article.description}</p>
              </Link>
            </li>
          ))}
          {results.length === 0 ? (
            <li className="rounded-2xl border border-[#1A1A1A]/[0.12] bg-white p-6 text-sm leading-6 text-[#6B6459]">
              No articles match “{query}”. Try another word, or{' '}
              <button type="button" onClick={onContact} className="font-semibold text-[#7C3AED] underline-offset-2 hover:underline">
                ask us directly
              </button>
              .
            </li>
          ) : null}
        </ul>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {helpCategories.map((category) => (
            <section
              key={category.id}
              className="rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-6 shadow-[0_24px_60px_rgba(26,26,26,0.08)] sm:p-7"
            >
              <h2 className="text-lg font-semibold tracking-tight text-[#1A1A1A]">{category.title}</h2>
              <p className="mt-1.5 text-sm leading-6 text-[#6B6459]">{category.description}</p>
              <ul className="mt-4 space-y-1 border-t border-[#1A1A1A]/[0.08] pt-4">
                {category.articles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      to={`/help/${article.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 text-sm text-[#6B6459] transition hover:bg-[#F7F5F0] hover:text-[#1A1A1A]"
                    >
                      {article.title}
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#8B867B] opacity-0 transition group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Page shell ───────────────────────────────────────── */

function HelpCenterPage() {
  const { slug } = useParams<{ slug: string }>();
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <div className={pageWrap}>
      <HeaderV4 />

      <main className="mx-auto max-w-6xl px-5 pb-20 pt-28 sm:pb-28">
        {/* Mobile article browser toggle */}
        <div className="mb-6 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileNavOpen((value) => !value)}
            className="inline-flex min-h-11 w-full items-center justify-between rounded-full border border-[#1A1A1A]/[0.12] bg-white px-5 text-sm font-semibold text-[#1A1A1A] shadow-sm"
            aria-expanded={mobileNavOpen}
          >
            <span className="inline-flex items-center gap-2">
              <List className="h-4 w-4 text-[#7C3AED]" />
              Browse all articles
            </span>
            {mobileNavOpen ? <X className="h-4 w-4" /> : <ChevronRight className="h-4 w-4 rotate-90" />}
          </button>
          {mobileNavOpen ? (
            <div className="mt-3 rounded-3xl border border-[#1A1A1A]/[0.12] bg-[#EDEBE6] p-5">
              <SidebarTree activeSlug={slug ?? null} onNavigate={() => setMobileNavOpen(false)} onContact={openContact} />
            </div>
          ) : null}
        </div>

        <div className="lg:grid lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-6 pr-1">
              <SidebarTree activeSlug={slug ?? null} onContact={openContact} />
            </div>
          </aside>

          <div className="min-w-0">
            {slug ? <ArticleView slug={slug} onContact={openContact} /> : <HomeView onContact={openContact} />}
          </div>
        </div>
      </main>

      <FooterV4 />
      <ContactSupportModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

export default HelpCenterPage;
