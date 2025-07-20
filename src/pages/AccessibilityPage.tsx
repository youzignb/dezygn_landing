import { Link } from 'react-router-dom';
import { Eye, Keyboard, Volume2, MousePointer2, Smartphone, ExternalLink, CheckCircle, Mail, Heart, Shield, Users } from 'lucide-react';
import Layout from '../components/Layout';

function AccessibilityPage() {
  return (
    <Layout>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-blue-400/30 mb-6">
            <Eye className="w-4 h-4 text-blue-400" />
            <span className="text-white text-sm font-medium">Accessibility Statement</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Accessible</span> Design for Everyone
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            At Dezygn, we believe creative tools should be accessible to everyone. We're committed to making our platform usable by people of all abilities.
          </p>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Our Accessibility Commitment</h2>
              <p className="text-white/80 max-w-3xl mx-auto">
                We are dedicated to ensuring that Dezygn is accessible to users with disabilities. We continuously work to improve 
                the accessibility of our platform and strive to meet or exceed international accessibility standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">WCAG 2.1 AA</h3>
                <p className="text-white/70 text-sm">Compliant with Web Content Accessibility Guidelines</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Inclusive Design</h3>
                <p className="text-white/70 text-sm">Designed with diverse user needs in mind</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Continuous Improvement</h3>
                <p className="text-white/70 text-sm">Regular audits and user feedback integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Accessibility Features
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Dezygn includes numerous features designed to make the platform accessible to users with various needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visual Accessibility */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Visual Accessibility</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">High Contrast Support</h4>
                    <p className="text-white/70 text-sm">Strong color contrast ratios for better readability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Scalable Text</h4>
                    <p className="text-white/70 text-sm">Text can be zoomed up to 200% without loss of functionality</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Alternative Text</h4>
                    <p className="text-white/70 text-sm">Descriptive alt text for all images and visual elements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Focus Indicators</h4>
                    <p className="text-white/70 text-sm">Clear visual focus indicators for keyboard navigation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Keyboard Navigation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Keyboard className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Keyboard Navigation</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Full Keyboard Access</h4>
                    <p className="text-white/70 text-sm">All features accessible via keyboard navigation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Tab Order</h4>
                    <p className="text-white/70 text-sm">Logical tab order throughout the interface</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Keyboard Shortcuts</h4>
                    <p className="text-white/70 text-sm">Customizable shortcuts for common actions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Skip Navigation</h4>
                    <p className="text-white/70 text-sm">Skip links to jump to main content areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Screen Reader Support */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Volume2 className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Screen Reader Support</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">ARIA Labels</h4>
                    <p className="text-white/70 text-sm">Comprehensive ARIA labeling for screen readers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Semantic Structure</h4>
                    <p className="text-white/70 text-sm">Proper heading hierarchy and semantic markup</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Status Updates</h4>
                    <p className="text-white/70 text-sm">Live regions for dynamic content updates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Tested Compatibility</h4>
                    <p className="text-white/70 text-sm">Tested with NVDA, JAWS, and VoiceOver</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Motor Accessibility */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                  <MousePointer2 className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Motor Accessibility</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Large Click Targets</h4>
                    <p className="text-white/70 text-sm">Minimum 44px touch targets for easier interaction</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Drag & Drop Alternatives</h4>
                    <p className="text-white/70 text-sm">Alternative methods for drag and drop actions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Timeout Extensions</h4>
                    <p className="text-white/70 text-sm">Adjustable or extendable time limits</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Motion Controls</h4>
                    <p className="text-white/70 text-sm">Reduced motion options for vestibular disorders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Accessibility */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Mobile Accessibility</h2>
            </div>
            <p className="text-white/80 mb-6">
              Our mobile platform is designed with accessibility in mind, ensuring that users can create 
              professional designs on any device with the same level of accessibility support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Touch-friendly interface design</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Voice control compatibility</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Switch control support</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Screen reader optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Gesture alternatives</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Adjustable text sizing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Guidelines */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Standards & Guidelines
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We follow internationally recognized accessibility standards and guidelines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-xl font-bold text-white mb-4">WCAG 2.1 Level AA</h3>
              <p className="text-white/70 mb-4">
                We strive to meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards
              </p>
              <a 
                href="https://www.w3.org/WAI/WCAG21/quickref/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 text-sm"
              >
                Learn more <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Section 508</h3>
              <p className="text-white/70 mb-4">
                Compliance with Section 508 of the Rehabilitation Act for federal agency accessibility
              </p>
              <a 
                href="https://www.section508.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 text-sm"
              >
                Learn more <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-xl font-bold text-white mb-4">ADA Compliance</h3>
              <p className="text-white/70 mb-4">
                Aligned with Americans with Disabilities Act (ADA) requirements for digital accessibility
              </p>
              <a 
                href="https://www.ada.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 text-sm"
              >
                Learn more <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback & Support */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-green-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Help Us Improve
          </h2>
          <p className="text-xl text-white/80 mb-8">
            We're committed to continuous improvement. If you encounter any accessibility barriers 
            or have suggestions for making Dezygn more accessible, please let us know.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Accessibility Support</h3>
            <p className="text-white/80 mb-6">
              Our accessibility team is here to help. Contact us if you need assistance using Dezygn 
              or if you'd like to report an accessibility issue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                Contact Accessibility Team
              </Link>
              <a
                href="mailto:accessibility@youzign.com"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                accessibility@youzign.com
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="text-white/60 text-sm">
            Last updated: January 2025. We review and update our accessibility statement regularly 
            to reflect improvements and changes to our platform.
          </p>
        </div>
      </section>

    </Layout>
  );
}

export default AccessibilityPage;