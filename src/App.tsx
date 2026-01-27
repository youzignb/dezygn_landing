import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import HomeArchivePage from './pages/HomeArchivePage';
import SpecialPage from './pages/SpecialPage';
import ShortcutsPage from './pages/ShortcutsPage';
import PricingPage from './pages/PricingPage';
import ReportPage from './pages/ReportPage';
import ReportDownloadPage from './pages/ReportDownloadPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import UpgradePage from './pages/UpgradePage';
import SuccessPage from './pages/SuccessPage';
import AuditPage from './pages/AuditPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import HelpPage from './pages/HelpPage';
import FeaturesPage from './pages/FeaturesPage';
import AccessibilityPage from './pages/AccessibilityPage';
import V1AccessPage from './pages/V1AccessPage';
import LandingPage from './pages/LandingPage';
import LandingPageNew from './pages/LandingPageNew';
import LandingPageV3 from './pages/LandingPageV3';
import PromptographyPage from './pages/PromptographyPage';
import PromptographyPageV2 from './pages/PromptographyPageV2';
import BusinessPage from './pages/BusinessPage';
import AgencyPage from './pages/AgencyPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CoursePage from './pages/CoursePage';
import CommunityPage from './pages/CommunityPage';
import AwaAgentPage from './pages/features/AwaAgentPage';
import StudioPage from './pages/features/StudioPage';
import BrandImportPage from './pages/features/BrandImportPage';

// Programmatic SEO pages
import UseCasePage from './pages/seo/UseCasePage';
import UseCaseIndexPage from './pages/seo/UseCaseIndexPage';
import ShotTypePage from './pages/seo/ShotTypePage';
import ComparisonPage from './pages/seo/ComparisonPage';
import ComparisonIndexPage from './pages/seo/ComparisonIndexPage';
import AlternativePage from './pages/seo/AlternativePage';
import ResourcePage from './pages/seo/ResourcePage';
import IndustryPage from './pages/seo/IndustryPage';
import GlossaryPage from './pages/seo/GlossaryPage';
import GlossaryIndexPage from './pages/seo/GlossaryIndexPage';
import ResourceIndexPage from './pages/seo/ResourceIndexPage';
import IndustryIndexPage from './pages/seo/IndustryIndexPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPageV3 />} />
        <Route path="/home-old" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/landing-new" element={<LandingPageNew />} />
        <Route path="/v3" element={<LandingPageV3 />} />
        <Route path="/landing-v3" element={<LandingPageV3 />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/agency" element={<AgencyPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/promptography" element={<PromptographyPage />} />
        <Route path="/secrets" element={<PromptographyPageV2 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="/special" element={<SpecialPage />} />
        <Route path="/shortcuts" element={<ShortcutsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/state-of-ai" element={<ReportDownloadPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/upgrade" element={<UpgradePage />} />
        <Route path="/home-archive" element={<HomeArchivePage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/audit" element={<AuditPage />} />
        <Route path="/v1" element={<V1AccessPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/features/awa" element={<AwaAgentPage />} />
        <Route path="/features/studio" element={<StudioPage />} />
        <Route path="/features/brand-import" element={<BrandImportPage />} />

        {/* Programmatic SEO routes */}
        <Route path="/use-cases" element={<UseCaseIndexPage />} />
        <Route path="/use-cases/:slug" element={<UseCasePage />} />
        <Route path="/shot-types/:slug" element={<ShotTypePage />} />
        <Route path="/compare" element={<ComparisonIndexPage />} />
        <Route path="/compare/:slug" element={<ComparisonPage />} />
        <Route path="/alternatives/:slug" element={<AlternativePage />} />
        <Route path="/resources" element={<ResourceIndexPage />} />
        <Route path="/resources/:slug" element={<ResourcePage />} />
        <Route path="/industries" element={<IndustryIndexPage />} />
        <Route path="/industries/:slug" element={<IndustryPage />} />
        <Route path="/glossary" element={<GlossaryIndexPage />} />
        <Route path="/glossary/:slug" element={<GlossaryPage />} />
      </Routes>
    </Router>
    </HelmetProvider>
  );
}

export default App;
