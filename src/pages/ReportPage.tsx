import { Link } from 'react-router-dom';
import { ExternalLink, BarChart3, Download } from 'lucide-react';
import Logo from '../components/Logo';

const ReportPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/">
            <Logo variant="default" size="md" showText={false} />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600 transition">Home</Link>
            <Link to="/special" className="text-gray-600 hover:text-purple-600 transition">Special</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-purple-600 transition">Pricing</Link>
            <Link to="/report" className="text-gray-900 font-bold hover:text-purple-600 transition">Report</Link>
            <a 
              href="https://chat.dezygn.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-300"
            >
              Login
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative px-6 py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2 mb-8 shadow-sm">
                <div className="relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </div>
                <span className="text-sm font-medium text-gray-700">FREE Market Report</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
                <span className="block text-gray-900">State of AI Creative Work</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600">
                  H1 2025 Report
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                While most people are debating whether AI will replace creative work, we analyzed 1,050 real job postings to see what's actually happening RIGHT NOW. The results will surprise you...
              </p>

              {/* Download Button */}
              <div className="text-center">
                <a
                  href="https://claude.ai/public/artifacts/5d85b80c-6994-468f-a030-39bf75f0bf63"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl px-12 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-6 h-6" />
                  Download Free Report
                </a>
                <p className="text-gray-600 mt-3 text-sm">No email required :)</p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-3xl p-8 shadow-xl">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 mb-6">
                  <BarChart3 className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-black text-gray-900 mb-2">1,050+ Jobs Analyzed</h3>
                  <p className="text-gray-600">Real market data from H1 2025</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                    <span className="font-bold text-gray-700">New AI jobs posted daily</span>
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">320+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                    <span className="font-bold text-gray-700">Average project value</span>
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">$469</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                    <span className="font-bold text-gray-700">Completable with Dezygn</span>
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">78%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <Link to="/">
                <Logo variant="light" size="md" showText={false} />
              </Link>
              <div className="flex flex-col sm:flex-row gap-6 text-white/70">
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <a 
                  href="mailto:support@youzign.com" 
                  className="hover:text-white transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </div>
            <div className="text-white/50 text-sm">
              © 2025 Youzign SPRL. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ReportPage;