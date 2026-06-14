import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PricingPage from './pages/PricingPage';
import PlaybookPage from './pages/PlaybookPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SuccessPage from './pages/SuccessPage';
import AuditPage from './pages/AuditPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import HelpCenterPage from './pages/HelpCenterPage';
import FeaturesPage from './pages/FeaturesPage';
import AccessibilityPage from './pages/AccessibilityPage';
import LandingPageV3 from './pages/LandingPageV3';
import LandingPageV4 from './pages/LandingPageV4';
import WebinarPage from './pages/WebinarPage';
import ReportThankYouPage from './pages/ReportThankYouPage';
import FreeReportPage from './pages/FreeReportPage';
import ScrollToTop from './components/ScrollToTop';
import ExitIntentReportModal from './components/ExitIntentReportModal';
import AipaPage from './pages/AipaPage';
import EarningsDisclaimerPage from './pages/EarningsDisclaimerPage';
import CookieBanner from './components/CookieBanner';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CommunityPage from './pages/CommunityPage';
import AwaAgentPage from './pages/features/AwaAgentPage';
import StudioPage from './pages/features/StudioPage';
import BrandImportPage from './pages/features/BrandImportPage';
import RecipesPage from './pages/features/RecipesPage';
import OutreachPage from './pages/features/OutreachPage';
import OpportunitiesPage from './pages/features/OpportunitiesPage';
import ConceptsPage from './pages/features/ConceptsPage';
import FeatureFeedbackPage from './pages/features/FeedbackPage';
import GeneratedFeaturePage from './pages/features/GeneratedFeaturePage';

// Programmatic SEO pages
import UseCasePage from './pages/seo/UseCasePage';
import UseCaseIndexPage from './pages/seo/UseCaseIndexPage';
import ShotTypePage from './pages/seo/ShotTypePage';
import ShotTypeIndexPage from './pages/seo/ShotTypeIndexPage';
import ComparisonPage from './pages/seo/ComparisonPage';
import ComparisonIndexPage from './pages/seo/ComparisonIndexPage';
import AlternativePage from './pages/seo/AlternativePage';
import ResourcePage from './pages/seo/ResourcePage';
import IndustryPage from './pages/seo/IndustryPage';
import GlossaryPage from './pages/seo/GlossaryPage';
import GlossaryIndexPage from './pages/seo/GlossaryIndexPage';
import ResourceIndexPage from './pages/seo/ResourceIndexPage';
import IndustryIndexPage from './pages/seo/IndustryIndexPage';
import ApplyPage from './pages/ApplyPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPageV4 />} />
        {/* Temporary archive of the previous homepage */}
        <Route path="/v3" element={<LandingPageV3 />} />
        <Route path="/v4" element={<Navigate to="/" replace />} />
        <Route path="/aipa" element={<AipaPage />} />
        <Route path="/earnings-disclaimer" element={<EarningsDisclaimerPage />} />
        {/* Retired pages — SEO equity flows to their hub equivalents */}
        <Route path="/business" element={<Navigate to="/industries/ecommerce" replace />} />
        <Route path="/agency" element={<Navigate to="/industries/agencies" replace />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/promptography" element={<Navigate to="/resources" replace />} />
        <Route path="/secrets" element={<Navigate to="/resources" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Help center / knowledge base (replaces the retired Intercom helpdesk) */}
        <Route path="/help" element={<HelpCenterPage />} />
        <Route path="/help/:slug" element={<HelpCenterPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/report" element={<Navigate to="/resources" replace />} />
        <Route path="/playbook" element={<PlaybookPage />} />
        <Route path="/state-of-ai" element={<Navigate to="/resources" replace />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/upgrade" element={<Navigate to="/pricing" replace />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/audit" element={<AuditPage />} />
        <Route path="/webinar" element={<WebinarPage />} />
        {/* Lead magnet squeeze + thank-you pages (Proof Before Pitch report; /cheatsheet was its old home) */}
        <Route path="/free-report" element={<FreeReportPage />} />
        <Route path="/proof-before-pitch" element={<ReportThankYouPage />} />
        <Route path="/cheatsheet" element={<Navigate to="/proof-before-pitch" replace />} />
        {/* TEMPORARY: /client-system tripwire page is not ready — redirect to the lead magnet
            thank-you page until the real checkout page ships. Restore ClientSystemPage then. */}
        <Route path="/client-system" element={<Navigate to="/proof-before-pitch" replace />} />
        {/* Course is retired — its SEO equity flows to the webinar funnel. */}
        <Route path="/course" element={<Navigate to="/webinar" replace />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/features/awa" element={<AwaAgentPage />} />
        <Route path="/features/studio" element={<StudioPage />} />
        <Route path="/features/brand-import" element={<BrandImportPage />} />
        <Route path="/features/recipes" element={<RecipesPage />} />
        <Route path="/features/outreach" element={<OutreachPage />} />
        <Route path="/features/opportunities" element={<OpportunitiesPage />} />
        <Route path="/features/concepts" element={<ConceptsPage />} />
        <Route path="/features/feedback" element={<FeatureFeedbackPage />} />

        {/* Compiler-generated feature pages — one dynamic route covers every generated slug
           (prompt-canvas, awa-chat, awa-video, brands, gallery, recipes, …). Static /features/*
           routes above take precedence; GeneratedFeaturePage redirects unknown slugs to /features. */}
        <Route path="/features/:slug" element={<GeneratedFeaturePage />} />

        {/* Programmatic SEO routes */}
        <Route path="/use-cases" element={<UseCaseIndexPage />} />
        <Route path="/use-cases/:slug" element={<UseCasePage />} />
        <Route path="/shot-types" element={<ShotTypeIndexPage />} />
        <Route path="/shot-types/:slug" element={<ShotTypePage />} />
        <Route path="/compare" element={<ComparisonIndexPage />} />
        <Route path="/compare/:slug" element={<ComparisonPage />} />
        <Route path="/alternatives/:slug" element={<AlternativePage />} />
        <Route path="/resources" element={<ResourceIndexPage />} />
        {/* Retired guides — equity flows to the rewritten pillar guides */}
        <Route path="/resources/ai-product-photography-guide-2026" element={<Navigate to="/resources/ai-product-photography-guide" replace />} />
        <Route path="/resources/shopify-product-photography" element={<Navigate to="/resources/ai-product-photography-guide" replace />} />
        <Route path="/resources/ecommerce-photography-roi" element={<Navigate to="/resources/ai-photography-pricing" replace />} />
        <Route path="/resources/conversion-photography" element={<Navigate to="/resources/visual-syntax" replace />} />
        <Route path="/resources/brand-consistency-ai" element={<Navigate to="/resources/visual-syntax" replace />} />
        <Route path="/resources/:slug" element={<ResourcePage />} />
        <Route path="/industries" element={<IndustryIndexPage />} />
        <Route path="/industries/:slug" element={<IndustryPage />} />
        <Route path="/glossary" element={<GlossaryIndexPage />} />
        <Route path="/glossary/:slug" element={<GlossaryPage />} />
      </Routes>
      <ExitIntentReportModal />
      <CookieBanner />
    </Router>
    </HelmetProvider>
  );
}

export default App;
