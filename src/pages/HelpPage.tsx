import { useState } from 'react';
import { Mail, ExternalLink, MessageCircle, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';

function HelpPage() {
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailReveal = () => {
    setEmailRevealed(true);
    navigator.clipboard.writeText('support@youzign.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <Layout>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-purple-400/30 mb-6">
            <MessageCircle className="w-4 h-4 text-purple-400" />
            <span className="text-white text-sm font-medium">Need Help?</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Support</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Choose how you'd like to get help with Dezygn
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Email Support */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Email Support</h2>
              <p className="text-white/70 mb-8">
                Send us a detailed message and we'll get back to you within 24 hours
              </p>
              
              {!emailRevealed ? (
                <button
                  onClick={handleEmailReveal}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  Reveal Email Address
                </button>
              ) : (
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                    <div className="flex items-center justify-center gap-2 text-white font-mono text-lg">
                      {emailCopied ? (
                        <>
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-green-400">Copied to clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5 text-blue-400" />
                          <span>support@youzign.com</span>
                        </>
                      )}
                    </div>
                  </div>
                  <p className="text-white/60 text-sm">
                    Email address copied to your clipboard
                  </p>
                </div>
              )}
            </div>

            {/* Helpdesk */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Help Center</h2>
              <p className="text-white/70 mb-8">
                Browse our comprehensive help articles and tutorials for instant answers
              </p>
              
              <a
                href="https://intercom.help/dezygn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-xl"
              >
                <ExternalLink className="w-5 h-5" />
                Visit Help Center
              </a>
            </div>

          </div>
        </div>
      </section>

    </Layout>
  );
}

export default HelpPage;