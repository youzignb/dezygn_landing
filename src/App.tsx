import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SpecialPage from './pages/SpecialPage';
import PricingPage from './pages/PricingPage';
import ReportPage from './pages/ReportPage';
import ReportDownloadPage from './pages/ReportDownloadPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import UpgradePage from './pages/UpgradePage';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/special" element={<SpecialPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/state-of-ai" element={<ReportDownloadPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/upgrade" element={<UpgradePage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;