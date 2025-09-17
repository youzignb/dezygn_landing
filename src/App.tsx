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

function App() {
  return (
    <HelmetProvider>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
      </Routes>
    </Router>
    </HelmetProvider>
  );
}

export default App;