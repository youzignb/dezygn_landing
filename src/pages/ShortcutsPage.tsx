import { useState, useEffect } from 'react';
import { Clock, Users, Zap, Shield, Plus, Minus, ExternalLink, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Logo from '../components/Logo';

// Intercom integration
declare global {
  interface Window {
    Intercom: any;
  }
}

// Import video clips
import betterDesignsVideo from '/assets/updates/shortcuts/video-clips/better-designs.mp4?url';
import betterTextVideo from '/assets/updates/shortcuts/video-clips/better-text.mp4?url';
import betterAdherenceVideo from '/assets/updates/shortcuts/video-clips/better-adherence.mp4?url';
import betterImageEditingVideo from '/assets/updates/shortcuts/video-clips/better-image-editing.mp4?url';
import recipesVideo from '/assets/updates/shortcuts/video-clips/recipes.mp4?url';
import instantAvatarsVideo from '/assets/updates/shortcuts/video-clips/instant-avatars.mp4?url';
import collageVideo from '/assets/updates/shortcuts/video-clips/collage.mp4?url';
import templatesVideo from '/assets/updates/shortcuts/video-clips/templates.mp4?url';
import dezygnEyeVideo from '/assets/updates/shortcuts/video-clips/dezygn-eye.mp4?url';
import variationsVideo from '/assets/updates/shortcuts/video-clips/variations.mp4?url';
import ingredientsPanelVideo from '/assets/updates/shortcuts/video-clips/ingredients-panel.mp4?url';
import studioFastVideo from '/assets/updates/shortcuts/video-clips/studio-fast.mp4?url';
import studioSceneVideo from '/assets/updates/shortcuts/video-clips/studio-scene-from-frame.mp4?url';
import ugcAdVideo from '/assets/updates/shortcuts/video-clips/ugc-ad.mov?url';
import betterTrainingVideo from '/assets/updates/shortcuts/video-clips/better-training.mp4?url';

// Import images - Better Designs
import bagWoman from '/assets/updates/shortcuts/images/better-designs/bag-and-woman.jpg';
import bagMultiple from '/assets/updates/shortcuts/images/better-designs/bag-multiple-angles.jpg';
import bagOriginal from '/assets/updates/shortcuts/images/better-designs/bag-original.png';

// Import images - Better Prompt Adherence
import ingredientsUsed from '/assets/updates/shortcuts/images/better-prompt-adherence/ingredient-used-collage-of-accessories.png';
import promptAdherence from '/assets/updates/shortcuts/images/better-prompt-adherence/prompt.png';
import resultManWithCar from '/assets/updates/shortcuts/images/better-prompt-adherence/result-man-standing-in-front-of-car-with-accessories.png';

// Import images - Better Image Editing
import manGoldenOriginal from '/assets/updates/shortcuts/images/better-image-editing/man-with-golden-retriever-original.jpg';
import manMountainTransformed from '/assets/updates/shortcuts/images/better-image-editing/man-with-mountain-dog-transformed.jpg';
import editingPrompt from '/assets/updates/shortcuts/images/better-image-editing/prompt.png';

// Import images - Better Text Fidelity
import text4Lines from '/assets/updates/shortcuts/images/better-text-fidelity/4-lines-of-text.png';
import text11Lines from '/assets/updates/shortcuts/images/better-text-fidelity/11-lines-of-text.png';
import text20Lines from '/assets/updates/shortcuts/images/better-text-fidelity/20-lines-of-text.png';
import textInfographics from '/assets/updates/shortcuts/images/better-text-fidelity/better-text-infographics.jpg';

// Import images - Recipes
import recipeOptionsBook from '/assets/updates/shortcuts/images/recipes/recipe-options-book-cover.png';
import recipeResultBook from '/assets/updates/shortcuts/images/recipes/recipe-result-book-cover.jpg';
import recipeResultProduct from '/assets/updates/shortcuts/images/recipes/recipe-result-product-in-scene.jpg';
import recipeSettingsBook from '/assets/updates/shortcuts/images/recipes/recipe-settings-book-cover.png';

// Import images - Instant Avatars
import instantAvatarExample from '/assets/updates/shortcuts/images/instant-avatars/instant-avatar-example-woman-in-9-poses.png';
import instantAvatarResult from '/assets/updates/shortcuts/images/instant-avatars/instant-avatar-result.png';

// Import images - Collage
import collageExample from '/assets/updates/shortcuts/images/collage/collage-example.png';
import collagePromptImg from '/assets/updates/shortcuts/images/collage/collage-prompt.png';
import collageResult from '/assets/updates/shortcuts/images/collage/collage-result.jpg';
import collageSettings from '/assets/updates/shortcuts/images/collage/collage-settings.png';

// Import images - Templates
import template1Result from '/assets/updates/shortcuts/images/templates/template-1-result.jpg';
import template1Selection from '/assets/updates/shortcuts/images/templates/template-1-selection.png';
import template1Settings from '/assets/updates/shortcuts/images/templates/template-1-settings.png';
import template2Result from '/assets/updates/shortcuts/images/templates/template-2-result.jpg';

// Import images - Dezygn Eye
import dezygnEyeHero from '/assets/updates/shortcuts/images/dezygn-eye/dezygn-eye-hero.jpg';

// Import images - Variations
import variationsResult1 from '/assets/updates/shortcuts/images/variations/variations-result-1.png';
import variationsResult2 from '/assets/updates/shortcuts/images/variations/variations-results-2.png';
import variationsSettings from '/assets/updates/shortcuts/images/variations/variations-settings.png';

// Import images - Ingredients Panel
import ingredientsSettings from '/assets/updates/shortcuts/images/ingredients-panel/ingredients-settings.png';
import ingredientsPanel from '/assets/updates/shortcuts/images/ingredients-panel/ingredients-panel.png';

// Import images - Studio
import ugcAdCreating from '/assets/updates/shortcuts/images/ugc-ad/ugc-ad-creating-in-dezygn-studio.png';
import ugcAdWomanProduct from '/assets/updates/shortcuts/images/ugc-ad/ugc-ad-woman-plus-product-image.png';

// Import images - Training
import betterChatbot from '/assets/updates/shortcuts/images/training/better-chatbot.png';
import newAcademy from '/assets/updates/shortcuts/images/training/new-academy-training.png';
import newArticles from '/assets/updates/shortcuts/images/training/new-articles-in-helpdesk.png';


// FAQ Item Component
interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-2 hover:text-purple-600 transition-colors"
      >
        <span className="font-semibold text-lg">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-purple-600" />
        ) : (
          <Plus className="w-5 h-5 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

// Media Modal Component (handles both images and videos)
interface MediaItem {
  src: string;
  alt: string;
  label: string;
  tag: string;
  tagColor: string;
  type: 'image' | 'video' | 'iframe';
}

interface MediaModalProps {
  items: MediaItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

function MediaModal({ items, currentIndex, isOpen, onClose, onPrevious, onNext }: MediaModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  if (!isOpen) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Previous Button */}
      {items.length > 1 && (
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>
      )}

      {/* Next Button */}
      {items.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
        >
          <ChevronRight className="w-12 h-12" />
        </button>
      )}

      {/* Media Content */}
      <div className={`max-h-[90vh] relative ${currentItem.type === 'iframe' ? 'max-w-7xl' : 'max-w-6xl'}`}>
        {currentItem.type === 'video' ? (
          <video
            src={currentItem.src}
            controls
            autoPlay
            loop
            muted
            className="max-w-full max-h-full rounded-lg"
          />
        ) : currentItem.type === 'iframe' ? (
          <div className="w-full bg-black rounded-lg overflow-hidden" style={{ width: '1120px', height: '630px' }}>
            <iframe
              src={currentItem.src}
              title={currentItem.alt}
              className="w-full h-full"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <img
            src={currentItem.src}
            alt={currentItem.alt}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        )}
        
        {/* Media Labels */}
        <div className="absolute top-4 left-4 flex items-center gap-3">
          {/* Tag */}
          <div className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${currentItem.tagColor}`}>
            {currentItem.tag}
          </div>
          {/* Label */}
          <div className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
            <span className="font-semibold">{currentItem.label}</span>
            <span className="text-white/70 ml-2">({currentIndex + 1} of {items.length})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShortcutsPage() {
  const [mediaModal, setMediaModal] = useState({
    isOpen: false,
    currentIndex: 0,
    items: [] as MediaItem[]
  });

  // Initialize Intercom
  useEffect(() => {
    // Load Intercom script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://widget.intercom.io/widget/iqtdthxx';
    
    script.onload = () => {
      if (window.Intercom) {
        window.Intercom('boot', {
          app_id: 'iqtdthxx'
        });
      }
    };
    
    document.head.appendChild(script);
    
    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
    };
  }, []);

  // Add custom styles for animations
  const customStyles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(3deg); }
      50% { transform: translateY(-20px) rotate(3deg); }
    }
    
    @keyframes float-reverse {
      0%, 100% { transform: translateY(0px) rotate(-3deg); }
      50% { transform: translateY(-20px) rotate(-3deg); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-float-reverse {
      animation: float-reverse 6s ease-in-out infinite;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `;

  const handleModalClose = () => setMediaModal({ ...mediaModal, isOpen: false });
  const handleModalPrevious = () => {
    const newIndex = mediaModal.currentIndex === 0 ? mediaModal.items.length - 1 : mediaModal.currentIndex - 1;
    setMediaModal({ ...mediaModal, currentIndex: newIndex });
  };
  const handleModalNext = () => {
    const newIndex = mediaModal.currentIndex === mediaModal.items.length - 1 ? 0 : mediaModal.currentIndex + 1;
    setMediaModal({ ...mediaModal, currentIndex: newIndex });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Helmet>
        <title>Dezygn 4.5 Updates - September Special: 30% OFF | AI Creative Suite</title>
        <meta name="description" content="Discover Dezygn 4.5's latest features: AI Video Studio, UGC Ad Creation, Brand DNA technology, and Smart Text Vision. September Special: 30% OFF annual plans. Perfect for freelancers and agencies." />
        <meta name="keywords" content="AI video creation, UGC ad creation, brand DNA, AI design tool, video studio, freelancer tools, September special, discount" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Dezygn 4.5 - September Special: 30% OFF AI Creative Suite" />
        <meta property="og:description" content="Get instant access to Dezygn 4.5 with groundbreaking features: Video Studio, UGC Ad Creation, Brand DNA, and Smart Text Vision. September Special: 30% OFF annual plans. Transform your creative workflow with AI." />
        <meta property="og:image" content="/assets/updates/shortcuts/images/instant-avatars/instant-avatar-result.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Dezygn 4.5 AI Creative Suite - Video Studio and UGC Ad Creation" />
        <meta property="og:url" content="https://dezygn.com/shortcuts" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dezygn" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dezygn 4.5 - September Special: 30% OFF AI Creative Suite" />
        <meta name="twitter:description" content="Get instant access to Dezygn 4.5 with groundbreaking features: Video Studio, UGC Ad Creation, Brand DNA, and Smart Text Vision. September Special: 30% OFF annual plans." />
        <meta name="twitter:image" content="/assets/updates/shortcuts/images/instant-avatars/instant-avatar-result.png" />
        <meta name="twitter:image:alt" content="Dezygn 4.5 AI Creative Suite - Video Studio and UGC Ad Creation" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://dezygn.com/shortcuts" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      {/* Media Modal */}
      <MediaModal
        items={mediaModal.items}
        currentIndex={mediaModal.currentIndex}
        isOpen={mediaModal.isOpen}
        onClose={handleModalClose}
        onPrevious={handleModalPrevious}
        onNext={handleModalNext}
      />
      
      {/* Header */}
      <nav className="relative z-50 px-6 py-6 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/">
            <Logo variant="default" size="md" showText={true} />
          </Link>
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
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Geometric Shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full filter blur-xl"></div>
          <div className="absolute top-40 right-40 w-24 h-24 bg-gradient-to-br from-indigo-400/25 to-purple-500/25 rounded-full filter blur-lg"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-blue-400/15 to-indigo-500/15 rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full filter blur-xl"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float"></div>
          <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-float-reverse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-blue-400 rounded-full animate-float animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[1.2] tracking-tight">
            <span className="block text-gray-900">
              Become a{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-yellow-300 -skew-y-2 transform"></span>
                <span className="relative z-10 px-2 text-gray-900">one-man-marketing machine</span>
              </span>
            </span>
            <span className="block text-gray-900 mt-2">
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600">Dezygn: Shortcuts!</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Introducing the Dezygn Shortcuts update (4.5): better designs, templates, recipes, collage, <b>100% free for Dezygn users!</b>
          </p>
          
          {/* CTA Section */}
          <div className="flex flex-col items-center gap-6 mb-12">
            <button 
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                pricingSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Get Dezygn Shortcuts</span>
              <span className="text-xl">→</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
          </div>
          
          {/* YouTube Video Embed */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-3xl aspect-video shadow-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/63bEtRKsQwA"
                title="Dezygn Shortcuts Introduction"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps Section - Redesigned */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200/40 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-200/40 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" />
              <span>How it works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              3 steps to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">marketing mastery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From inspiration to publication in minutes, not hours
            </p>
          </div>
          
          {/* 3 Column Grid */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Step 1 */}
            <div className="flex-1 relative group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 h-full hover:border-purple-200 hover:shadow-xl transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  01
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">Import</h3>
                  <p className="text-gray-600 mb-4">
                    Import designs from any site with the new Dezygn Eye Chrome extension
                  </p>
                  <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                    ⏱️ 5 sec
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex-1 relative group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 h-full hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  02
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">Remix</h3>
                  <p className="text-gray-600 mb-4">
                    Remix designs using our innovative recipes and templates
                  </p>
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    ⏱️ 30 sec
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex-1 relative group">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-purple-600 font-bold text-lg shadow-lg">
                  03
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">Publish</h3>
                  <p className="text-white/90 mb-4">
                    Publish to your site, social media or turn into a video
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ⏱️ Instant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 right-40 w-96 h-96 bg-purple-200/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-40 left-40 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>New Features</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              What's new with Dezygn 4.5?<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Everything.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We've rebuilt everything from the ground up. Better AI, smarter workflows, and features that turn you into a creative powerhouse.
            </p>
          </div>

          {/* Better Designs - Enhanced Layout */}
          <div className="mb-32 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Text Column - 1/3 */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm font-semibold mb-6 w-fit">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Core Enhancement</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                  Better <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Designs</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Your products deserve perfection. No more distorted bags, warped logos, or uncanny models. Every angle, every detail, every pixel — exactly as it should be.
                </p>
                <p className="text-base text-gray-500 leading-relaxed mb-6">
                  From a single product photo, create unlimited lifestyle shots that look like you hired a photography studio. Except you didn't. You just clicked once.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="bg-green-50 text-green-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    ✨ 10x Better Quality
                  </div>
                  <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    🚀 Instant Results
                  </div>
                </div>
              </div>
              
              {/* Video Column - 2/3 */}
              <div className="lg:col-span-2 bg-gradient-to-br from-purple-50 to-blue-50 p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-full">
                  <button
                    onClick={() => setMediaModal({
                      isOpen: true,
                      currentIndex: 0,
                      items: [
                        { src: betterDesignsVideo, alt: "Better Designs Demo", label: "Demo - Better Designs in Action", tag: "Demo", tagColor: "bg-gradient-to-r from-purple-500 to-blue-500", type: "video" },
                        { src: bagOriginal, alt: "Original bag design", label: "Before - Original Product Photo", tag: "Before", tagColor: "bg-black/70", type: "image" },
                        { src: bagWoman, alt: "Bag with woman", label: "After - Lifestyle Shot with Model", tag: "After", tagColor: "bg-purple-500", type: "image" },
                        { src: bagMultiple, alt: "Multiple bag angles", label: "Variants - Different Angles & Styles", tag: "Variants", tagColor: "bg-blue-500", type: "image" }
                      ]
                    })}
                    className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 w-full group transition-all duration-300 hover:shadow-3xl"
                  >
                    <video
                      src={betterDesignsVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Video label */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Click to enlarge
                    </div>
                  </button>
                  
                  {/* Clickable Image Gallery */}
                  <div className="grid grid-cols-3 gap-4">
                    <button
                      onClick={() => setMediaModal({
                        isOpen: true,
                        currentIndex: 1,
                        items: [
                          { src: betterDesignsVideo, alt: "Better Designs Demo", label: "Demo - Better Designs in Action", tag: "Demo", tagColor: "bg-gradient-to-r from-purple-500 to-blue-500", type: "video" },
                          { src: bagOriginal, alt: "Original bag design", label: "Before - Original Product Photo", tag: "Before", tagColor: "bg-black/70", type: "image" },
                          { src: bagWoman, alt: "Bag with woman", label: "After - Lifestyle Shot with Model", tag: "After", tagColor: "bg-purple-500", type: "image" },
                          { src: bagMultiple, alt: "Multiple bag angles", label: "Variants - Different Angles & Styles", tag: "Variants", tagColor: "bg-blue-500", type: "image" }
                        ]
                      })}
                      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <img
                        src={bagOriginal}
                        alt="Original bag design"
                        className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        Before
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setMediaModal({
                        isOpen: true,
                        currentIndex: 2,
                        items: [
                          { src: betterDesignsVideo, alt: "Better Designs Demo", label: "Demo - Better Designs in Action", tag: "Demo", tagColor: "bg-gradient-to-r from-purple-500 to-blue-500", type: "video" },
                          { src: bagOriginal, alt: "Original bag design", label: "Before - Original Product Photo", tag: "Before", tagColor: "bg-black/70", type: "image" },
                          { src: bagWoman, alt: "Bag with woman", label: "After - Lifestyle Shot with Model", tag: "After", tagColor: "bg-purple-500", type: "image" },
                          { src: bagMultiple, alt: "Multiple bag angles", label: "Variants - Different Angles & Styles", tag: "Variants", tagColor: "bg-blue-500", type: "image" }
                        ]
                      })}
                      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <img
                        src={bagWoman}
                        alt="Bag with woman"
                        className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                        After
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setMediaModal({
                        isOpen: true,
                        currentIndex: 3,
                        items: [
                          { src: betterDesignsVideo, alt: "Better Designs Demo", label: "Demo - Better Designs in Action", tag: "Demo", tagColor: "bg-gradient-to-r from-purple-500 to-blue-500", type: "video" },
                          { src: bagOriginal, alt: "Original bag design", label: "Before - Original Product Photo", tag: "Before", tagColor: "bg-black/70", type: "image" },
                          { src: bagWoman, alt: "Bag with woman", label: "After - Lifestyle Shot with Model", tag: "After", tagColor: "bg-purple-500", type: "image" },
                          { src: bagMultiple, alt: "Multiple bag angles", label: "Variants - Different Angles & Styles", tag: "Variants", tagColor: "bg-blue-500", type: "image" }
                        ]
                      })}
                      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <img
                        src={bagMultiple}
                        alt="Multiple bag angles"
                        className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        Variants
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Better Prompt Adherence - Enhanced Layout */}
          <div className="mb-32 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Video Column - 2/3 (Left side) */}
              <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 lg:p-12 flex flex-col justify-center lg:order-1">
                <div className="w-full">
                  <button
                    onClick={() => setMediaModal({
                      isOpen: true,
                      currentIndex: 0,
                      items: [
                        { src: betterAdherenceVideo, alt: "Better Prompt Adherence Demo", label: "Demo - Perfect Prompt Understanding", tag: "Demo", tagColor: "bg-gradient-to-r from-blue-500 to-indigo-500", type: "video" },
                        { src: promptAdherence, alt: "Prompt interface", label: "Interface - Prompt Input Screen", tag: "Interface", tagColor: "bg-gray-600", type: "image" },
                        { src: ingredientsUsed, alt: "Ingredients collage of accessories", label: "Process - Accessories Collage Input", tag: "Process", tagColor: "bg-orange-500", type: "image" },
                        { src: resultManWithCar, alt: "Final result man with car and accessories", label: "Result - Man with Car & Accessories", tag: "Result", tagColor: "bg-green-500", type: "image" }
                      ]
                    })}
                    className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 w-full group transition-all duration-300 hover:shadow-3xl"
                  >
                    <video
                      src={betterAdherenceVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Video label */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Click to enlarge
                    </div>
                  </button>
                  
                  {/* Clickable Image Gallery */}
                  <div className="grid grid-cols-3 gap-4">
                    <button
                      onClick={() => setMediaModal({
                        isOpen: true,
                        currentIndex: 1,
                        items: [
                          { src: betterAdherenceVideo, alt: "Better Prompt Adherence Demo", label: "Demo - Perfect Prompt Understanding", tag: "Demo", tagColor: "bg-gradient-to-r from-blue-500 to-indigo-500", type: "video" },
                          { src: promptAdherence, alt: "Prompt interface", label: "Interface - Prompt Input Screen", tag: "Interface", tagColor: "bg-gray-600", type: "image" },
                          { src: ingredientsUsed, alt: "Ingredients collage of accessories", label: "Process - Accessories Collage Input", tag: "Process", tagColor: "bg-orange-500", type: "image" },
                          { src: resultManWithCar, alt: "Final result man with car and accessories", label: "Result - Man with Car & Accessories", tag: "Result", tagColor: "bg-green-500", type: "image" }
                        ]
                      })}
                      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <img
                        src={promptAdherence}
                        alt="Prompt interface"
                        className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-gray-600 text-white text-xs px-2 py-1 rounded">
                        Interface
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setMediaModal({
                        isOpen: true,
                        currentIndex: 2,
                        items: [
                          { src: betterAdherenceVideo, alt: "Better Prompt Adherence Demo", label: "Demo - Perfect Prompt Understanding", tag: "Demo", tagColor: "bg-gradient-to-r from-blue-500 to-indigo-500", type: "video" },
                          { src: promptAdherence, alt: "Prompt interface", label: "Interface - Prompt Input Screen", tag: "Interface", tagColor: "bg-gray-600", type: "image" },
                          { src: ingredientsUsed, alt: "Ingredients collage of accessories", label: "Process - Accessories Collage Input", tag: "Process", tagColor: "bg-orange-500", type: "image" },
                          { src: resultManWithCar, alt: "Final result man with car and accessories", label: "Result - Man with Car & Accessories", tag: "Result", tagColor: "bg-green-500", type: "image" }
                        ]
                      })}
                      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <img
                        src={ingredientsUsed}
                        alt="Ingredients collage of accessories"
                        className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Process
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setMediaModal({
                        isOpen: true,
                        currentIndex: 3,
                        items: [
                          { src: betterAdherenceVideo, alt: "Better Prompt Adherence Demo", label: "Demo - Perfect Prompt Understanding", tag: "Demo", tagColor: "bg-gradient-to-r from-blue-500 to-indigo-500", type: "video" },
                          { src: promptAdherence, alt: "Prompt interface", label: "Interface - Prompt Input Screen", tag: "Interface", tagColor: "bg-gray-600", type: "image" },
                          { src: ingredientsUsed, alt: "Ingredients collage of accessories", label: "Process - Accessories Collage Input", tag: "Process", tagColor: "bg-orange-500", type: "image" },
                          { src: resultManWithCar, alt: "Final result man with car and accessories", label: "Result - Man with Car & Accessories", tag: "Result", tagColor: "bg-green-500", type: "image" }
                        ]
                      })}
                      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <img
                        src={resultManWithCar}
                        alt="Final result man with car and accessories"
                        className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        Result
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Text Column - 1/3 (Right side) */}
              <div className="p-8 lg:p-12 flex flex-col justify-center lg:order-2">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-semibold mb-6 w-fit">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>AI Enhancement</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                  Better <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Prompt Adherence</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Say exactly what you want. Get exactly what you meant. No more AI guessing games or creative interpretations you didn't ask for.
                </p>
                <p className="text-base text-gray-500 leading-relaxed mb-6">
                  When you say "red dress, blue background, holding my product," that's precisely what appears. Your vision, realized instantly. Every single time.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    🎯 Perfect Accuracy
                  </div>
                  <div className="bg-green-50 text-green-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    🚀 Zero Guesswork
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Better Image Editing - Enhanced Layout */}
          <div className="mb-32 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Text Column - 1/3 */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-semibold mb-6 w-fit">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Smart Editing</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                  Better <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Image Editing</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Change your mind without starting over. See something that needs tweaking? Just tell Dezygn.
                </p>
                <p className="text-base text-gray-500 leading-relaxed mb-6">
                  "Make the background warmer." Done. "Add our logo to the corner." There it is. Edit with words, not tools.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="bg-green-50 text-green-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    💬 Voice Commands
                  </div>
                  <div className="bg-teal-50 text-teal-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    ⚡ Instant Edits
                  </div>
                </div>
              </div>
              
              {/* Video & Images Column - 2/3 */}
              <div className="lg:col-span-2 bg-gradient-to-br from-green-50 to-teal-50 p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-full">
                  <button
                    onClick={() => setMediaModal({
                      isOpen: true,
                      currentIndex: 0,
                      items: [
                        { src: betterImageEditingVideo, alt: "Better Image Editing Demo", label: "Demo - Voice-Powered Image Editing", tag: "Demo", tagColor: "bg-gradient-to-r from-green-500 to-teal-500", type: "video" },
                        { src: manGoldenOriginal, alt: "Original image", label: "Before - Original Image", tag: "Before", tagColor: "bg-gray-600", type: "image" },
                        { src: manMountainTransformed, alt: "Transformed image", label: "After - AI Enhanced Result", tag: "After", tagColor: "bg-green-500", type: "image" },
                        { src: editingPrompt, alt: "Editing prompt", label: "Command - Voice Editing Prompt", tag: "Command", tagColor: "bg-blue-500", type: "image" }
                      ]
                    })}
                    className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 w-full group transition-all duration-300 hover:shadow-3xl"
                  >
                    <video
                      src={betterImageEditingVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Click to enlarge
                    </div>
                  </button>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { src: manGoldenOriginal, alt: "Original image", tag: "Before", color: "bg-gray-600", index: 1 },
                      { src: manMountainTransformed, alt: "Transformed image", tag: "After", color: "bg-green-500", index: 2 },
                      { src: editingPrompt, alt: "Editing prompt", tag: "Command", color: "bg-blue-500", index: 3 }
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setMediaModal({
                          isOpen: true,
                          currentIndex: item.index,
                          items: [
                            { src: betterImageEditingVideo, alt: "Better Image Editing Demo", label: "Demo - Voice-Powered Image Editing", tag: "Demo", tagColor: "bg-gradient-to-r from-green-500 to-teal-500", type: "video" },
                            { src: manGoldenOriginal, alt: "Original image", label: "Before - Original Image", tag: "Before", tagColor: "bg-gray-600", type: "image" },
                            { src: manMountainTransformed, alt: "Transformed image", label: "After - AI Enhanced Result", tag: "After", tagColor: "bg-green-500", type: "image" },
                            { src: editingPrompt, alt: "Editing prompt", label: "Command - Voice Editing Prompt", tag: "Command", tagColor: "bg-blue-500", type: "image" }
                          ]
                        })}
                        className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className={`absolute top-2 left-2 ${item.color} text-white text-xs px-2 py-1 rounded`}>
                          {item.tag}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Better Text Fidelity - Enhanced Layout */}
          <div className="mb-32 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Video & Images Column - 2/3 (Left side) */}
              <div className="lg:col-span-2 bg-gradient-to-br from-yellow-50 to-orange-50 p-8 lg:p-12 flex flex-col justify-center lg:order-1">
                <div className="w-full">
                  <button
                    onClick={() => setMediaModal({
                      isOpen: true,
                      currentIndex: 0,
                      items: [
                        { src: betterTextVideo, alt: "Better Text Fidelity Demo", label: "Demo - Perfect Text Rendering", tag: "Demo", tagColor: "bg-gradient-to-r from-yellow-500 to-orange-500", type: "video" },
                        { src: text4Lines, alt: "4 lines of text", label: "Basic - 4 Lines Perfect", tag: "Basic", tagColor: "bg-yellow-500", type: "image" },
                        { src: text11Lines, alt: "11 lines of text", label: "Advanced - 11 Lines Perfect", tag: "Advanced", tagColor: "bg-orange-500", type: "image" },
                        { src: text20Lines, alt: "20 lines of text", label: "Expert - 20 Lines Perfect", tag: "Expert", tagColor: "bg-red-500", type: "image" },
                        { src: textInfographics, alt: "Text infographics", label: "Master - Infographic Text", tag: "Master", tagColor: "bg-purple-500", type: "image" }
                      ]
                    })}
                    className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 w-full group transition-all duration-300 hover:shadow-3xl"
                  >
                    <video
                      src={betterTextVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Video label */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Click to enlarge
                    </div>
                  </button>
                  
                  {/* Clickable Image Gallery */}
                  <div className="grid grid-cols-2 gap-4">
                  {[
                    { src: text4Lines, alt: "4 lines of text", tag: "Basic", color: "bg-yellow-500", index: 0 },
                    { src: text11Lines, alt: "11 lines of text", tag: "Advanced", color: "bg-orange-500", index: 1 },
                    { src: text20Lines, alt: "20 lines of text", tag: "Expert", color: "bg-red-500", index: 2 },
                    { src: textInfographics, alt: "Text infographics", tag: "Master", color: "bg-purple-500", index: 3 }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMediaModal({
                        isOpen: true,
                        currentIndex: item.index + 1,
                        items: [
                          { src: betterTextVideo, alt: "Better Text Fidelity Demo", label: "Demo - Perfect Text Rendering", tag: "Demo", tagColor: "bg-gradient-to-r from-yellow-500 to-orange-500", type: "video" },
                          { src: text4Lines, alt: "4 lines of text", label: "Basic - 4 Lines Perfect Text", tag: "Basic", tagColor: "bg-yellow-500", type: "image" },
                          { src: text11Lines, alt: "11 lines of text", label: "Advanced - 11 Lines Complex Layout", tag: "Advanced", tagColor: "bg-orange-500", type: "image" },
                          { src: text20Lines, alt: "20 lines of text", label: "Expert - 20 Lines Multi-Column", tag: "Expert", tagColor: "bg-red-500", type: "image" },
                          { src: textInfographics, alt: "Text infographics", label: "Master - Full Infographic Design", tag: "Master", tagColor: "bg-purple-500", type: "image" }
                        ]
                      })}
                      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute top-2 left-2 ${item.color} text-white text-xs px-2 py-1 rounded`}>
                        {item.tag}
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  ))}
                  </div>
                </div>
              </div>
              
              {/* Text Column - 1/3 (Right side) */}
              <div className="p-8 lg:p-12 flex flex-col justify-center lg:order-2">
                <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 rounded-full px-3 py-1 text-sm font-semibold mb-6 w-fit">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>Text Engine</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                  Better <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">Text Fidelity</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Your words matter. Every letter, every line, perfectly rendered. Where others stumble at three words, Dezygn handles sixty.
                </p>
                <p className="text-base text-gray-500 leading-relaxed mb-6">
                  Create infographics that inform. Headers that command attention. Call-to-actions that actually work. Because typos don't convert.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="bg-yellow-50 text-yellow-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    📝 60+ Words Perfect
                  </div>
                  <div className="bg-orange-50 text-orange-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    🎯 Zero Typos
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recipes - Enhanced Layout */}
          <div className="mb-32 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Text Column - 1/3 */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm font-semibold mb-6 w-fit">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Guided Creation</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Recipes</span>: The End of Prompt Paralysis
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Stop staring at blank screens. Start creating instantly. Professional designers know the thousand little decisions that make great design — now you do too.
                </p>
                <p className="text-base text-gray-500 leading-relaxed mb-6">
                  Choose a recipe. Customize it. Ship it. From book covers to product shots, we've encoded decades of design expertise into simple, guided workflows.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="bg-purple-50 text-purple-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    🧪 Design Expertise
                  </div>
                  <div className="bg-pink-50 text-pink-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    ⚡ Instant Creation
                  </div>
                </div>
              </div>
              
              {/* Video & Images Column - 2/3 */}
              <div className="lg:col-span-2 bg-gradient-to-br from-purple-50 to-pink-50 p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-full">
                  <button
                    onClick={() => setMediaModal({
                      isOpen: true,
                      currentIndex: 0,
                      items: [
                        { src: recipesVideo, alt: "Recipes Demo", label: "Demo - Recipe-Based Design Creation", tag: "Demo", tagColor: "bg-gradient-to-r from-purple-500 to-pink-500", type: "video" },
                        { src: recipeOptionsBook, alt: "Recipe options", label: "Options - Available Design Recipes", tag: "Options", tagColor: "bg-purple-600", type: "image" },
                        { src: recipeSettingsBook, alt: "Recipe settings", label: "Settings - Customization Controls", tag: "Settings", tagColor: "bg-blue-500", type: "image" },
                        { src: recipeResultBook, alt: "Recipe book result", label: "Result - Book Cover Design", tag: "Result", tagColor: "bg-green-500", type: "image" },
                        { src: recipeResultProduct, alt: "Recipe product result", label: "Result - Product Shot Design", tag: "Result", tagColor: "bg-green-500", type: "image" }
                      ]
                    })}
                    className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 w-full group transition-all duration-300 hover:shadow-3xl"
                  >
                    <video
                      src={recipesVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Video label */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Click to enlarge
                    </div>
                  </button>
                  
                  {/* Clickable Image Gallery */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { src: recipeOptionsBook, alt: "Recipe options", tag: "Options", color: "bg-purple-600" },
                      { src: recipeSettingsBook, alt: "Recipe settings", tag: "Settings", color: "bg-blue-500" },
                      { src: recipeResultBook, alt: "Recipe book result", tag: "Book", color: "bg-green-500" },
                      { src: recipeResultProduct, alt: "Recipe product result", tag: "Product", color: "bg-green-500" }
                    ].map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setMediaModal({
                          isOpen: true,
                          currentIndex: index + 1,
                          items: [
                            { src: recipesVideo, alt: "Recipes Demo", label: "Demo - Recipe-Based Design Creation", tag: "Demo", tagColor: "bg-gradient-to-r from-purple-500 to-pink-500", type: "video" },
                            { src: recipeOptionsBook, alt: "Recipe options", label: "Options - Available Design Recipes", tag: "Options", tagColor: "bg-purple-600", type: "image" },
                            { src: recipeSettingsBook, alt: "Recipe settings", label: "Settings - Customization Controls", tag: "Settings", tagColor: "bg-blue-500", type: "image" },
                            { src: recipeResultBook, alt: "Recipe book result", label: "Result - Book Cover Design", tag: "Result", tagColor: "bg-green-500", type: "image" },
                            { src: recipeResultProduct, alt: "Recipe product result", label: "Result - Product Shot Design", tag: "Result", tagColor: "bg-green-500", type: "image" }
                          ]
                        })}
                        className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className={`absolute top-2 left-2 ${item.color} text-white text-xs px-2 py-1 rounded`}>
                          {item.tag}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instant Avatars - Enhanced Layout */}
          <div className="mb-32 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Video & Images Column - 2/3 */}
              <div className="lg:col-span-2 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 lg:p-12 flex flex-col justify-center lg:order-1">
                <div className="w-full">
                  <button
                    onClick={() => setMediaModal({
                      isOpen: true,
                      currentIndex: 0,
                      items: [
                        { src: instantAvatarsVideo, alt: "Instant Avatars Demo", label: "Demo - 30-Second Avatar Creation", tag: "Demo", tagColor: "bg-gradient-to-r from-cyan-500 to-blue-500", type: "video" },
                        { src: instantAvatarExample, alt: "Avatar example", label: "Example - Avatar Pose Gallery", tag: "Example", tagColor: "bg-cyan-600", type: "image" },
                        { src: instantAvatarResult, alt: "Avatar result", label: "Result - Perfect Brand Ambassador", tag: "Result", tagColor: "bg-green-500", type: "image" }
                      ]
                    })}
                    className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 w-full group transition-all duration-300 hover:shadow-3xl"
                  >
                    <video
                      src={instantAvatarsVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Video label */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Click to enlarge
                    </div>
                  </button>
                  
                  {/* Clickable Image Gallery */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { src: instantAvatarExample, alt: "Avatar example", tag: "Gallery", color: "bg-cyan-600" },
                      { src: instantAvatarResult, alt: "Avatar result", tag: "Result", color: "bg-green-500" }
                    ].map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setMediaModal({
                          isOpen: true,
                          currentIndex: index + 1,
                          items: [
                            { src: instantAvatarsVideo, alt: "Instant Avatars Demo", label: "Demo - 30-Second Avatar Creation", tag: "Demo", tagColor: "bg-gradient-to-r from-cyan-500 to-blue-500", type: "video" },
                            { src: instantAvatarExample, alt: "Avatar example", label: "Example - Avatar Pose Gallery", tag: "Example", tagColor: "bg-cyan-600", type: "image" },
                            { src: instantAvatarResult, alt: "Avatar result", label: "Result - Perfect Brand Ambassador", tag: "Result", tagColor: "bg-green-500", type: "image" }
                          ]
                        })}
                        className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className={`absolute top-2 left-2 ${item.color} text-white text-xs px-2 py-1 rounded`}>
                          {item.tag}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Text Column - 1/3 (Right side) */}
              <div className="p-8 lg:p-12 flex flex-col justify-center lg:order-2">
                <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 rounded-full px-3 py-1 text-sm font-semibold mb-6 w-fit">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  <span>Virtual Models</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Instant Avatars</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Meet your new brand ambassador. Created in 30 seconds. Consistent across infinite scenarios.
                </p>
                <p className="text-base text-gray-500 leading-relaxed mb-6">
                  No photographer. No model fees. No scheduling conflicts. Just upload a photo and watch as your virtual model appears in nine perfect poses, ready for any campaign.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="bg-cyan-50 text-cyan-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    ⚡ 30-Second Creation
                  </div>
                  <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    🎭 Infinite Scenarios
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collage - Enhanced Layout */}
          <div className="mb-32 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Text Column - 1/3 */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 rounded-full px-3 py-1 text-sm font-semibold mb-6 w-fit">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span>Multi-Product</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Collage</span>: Unlocking Possibilities
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  One model. Five products. Infinite combinations. Upload your entire collection and watch Dezygn orchestrate the perfect scene.
                </p>
                <p className="text-base text-gray-500 leading-relaxed mb-6">
                  Your model wearing your jeans, holding your bag, showcasing your sunglasses — all in one coherent, beautiful image. It's not composite work. It's compositional magic.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="bg-amber-50 text-amber-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    🎨 Perfect Scenes
                  </div>
                  <div className="bg-orange-50 text-orange-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    ✨ Compositional Magic
                  </div>
                </div>
              </div>
              
              {/* Video & Images Column - 2/3 */}
              <div className="lg:col-span-2 bg-gradient-to-br from-amber-50 to-orange-50 p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-full">
                  <button
                    onClick={() => setMediaModal({
                      isOpen: true,
                      currentIndex: 0,
                      items: [
                        { src: collageVideo, alt: "Collage Demo", label: "Demo - Multi-Product Scene Creation", tag: "Demo", tagColor: "bg-gradient-to-r from-amber-500 to-orange-500", type: "video" },
                        { src: collageExample, alt: "Collage example", label: "Example - Product Collection", tag: "Example", tagColor: "bg-amber-600", type: "image" },
                        { src: collagePromptImg, alt: "Collage prompt", label: "Process - Scene Prompt", tag: "Prompt", tagColor: "bg-blue-500", type: "image" },
                        { src: collageSettings, alt: "Collage settings", label: "Settings - Configuration Panel", tag: "Settings", tagColor: "bg-gray-600", type: "image" },
                        { src: collageResult, alt: "Collage result", label: "Result - Perfect Scene Composition", tag: "Result", tagColor: "bg-green-500", type: "image" }
                      ]
                    })}
                    className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 w-full group transition-all duration-300 hover:shadow-3xl"
                  >
                    <video
                      src={collageVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Video label */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Click to enlarge
                    </div>
                  </button>
                  
                  {/* Clickable Image Gallery */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { src: collageExample, alt: "Collage example", tag: "Example", color: "bg-amber-600" },
                      { src: collagePromptImg, alt: "Collage prompt", tag: "Prompt", color: "bg-blue-500" },
                      { src: collageSettings, alt: "Collage settings", tag: "Settings", color: "bg-gray-600" },
                      { src: collageResult, alt: "Collage result", tag: "Result", color: "bg-green-500" }
                    ].map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setMediaModal({
                          isOpen: true,
                          currentIndex: index + 1,
                          items: [
                            { src: collageVideo, alt: "Collage Demo", label: "Demo - Multi-Product Scene Creation", tag: "Demo", tagColor: "bg-gradient-to-r from-amber-500 to-orange-500", type: "video" },
                            { src: collageExample, alt: "Collage example", label: "Example - Product Collection", tag: "Example", tagColor: "bg-amber-600", type: "image" },
                            { src: collagePromptImg, alt: "Collage prompt", label: "Process - Scene Prompt", tag: "Prompt", tagColor: "bg-blue-500", type: "image" },
                            { src: collageSettings, alt: "Collage settings", label: "Settings - Configuration Panel", tag: "Settings", tagColor: "bg-gray-600", type: "image" },
                            { src: collageResult, alt: "Collage result", label: "Result - Perfect Scene Composition", tag: "Result", tagColor: "bg-green-500", type: "image" }
                          ]
                        })}
                        className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className={`absolute top-2 left-2 ${item.color} text-white text-xs px-2 py-1 rounded`}>
                          {item.tag}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Templates - Enhanced Layout */}
          <div className="mb-32 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Video & Images Column - 2/3 */}
              <div className="lg:col-span-2 bg-gradient-to-br from-emerald-50 to-green-50 p-8 lg:p-12 flex flex-col justify-center lg:order-1">
                <div className="w-full">
                  <button
                    onClick={() => setMediaModal({
                      isOpen: true,
                      currentIndex: 0,
                      items: [
                        { src: templatesVideo, alt: "Templates Demo", label: "Demo - High-Converting Template System", tag: "Demo", tagColor: "bg-gradient-to-r from-emerald-500 to-green-500", type: "video" },
                        { src: template1Selection, alt: "Template selection", label: "Selection - Proven Winners Library", tag: "Selection", tagColor: "bg-emerald-600", type: "image" },
                        { src: template1Settings, alt: "Template settings", label: "Settings - Customization Panel", tag: "Settings", tagColor: "bg-blue-500", type: "image" },
                        { src: template1Result, alt: "Template result 1", label: "Result - Your Brand Version", tag: "Result", tagColor: "bg-green-500", type: "image" },
                        { src: template2Result, alt: "Template result 2", label: "Result - Alternative Version", tag: "Result", tagColor: "bg-green-500", type: "image" }
                      ]
                    })}
                    className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 w-full group transition-all duration-300 hover:shadow-3xl"
                  >
                    <video
                      src={templatesVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Video label */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Click to enlarge
                    </div>
                  </button>
                  
                  {/* Clickable Image Gallery */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { src: template1Selection, alt: "Template selection", tag: "Selection", color: "bg-emerald-600" },
                      { src: template1Settings, alt: "Template settings", tag: "Settings", color: "bg-blue-500" },
                      { src: template1Result, alt: "Template result 1", tag: "Result 1", color: "bg-green-500" },
                      { src: template2Result, alt: "Template result 2", tag: "Result 2", color: "bg-green-500" }
                    ].map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setMediaModal({
                          isOpen: true,
                          currentIndex: index + 1,
                          items: [
                            { src: templatesVideo, alt: "Templates Demo", label: "Demo - High-Converting Template System", tag: "Demo", tagColor: "bg-gradient-to-r from-emerald-500 to-green-500", type: "video" },
                            { src: template1Selection, alt: "Template selection", label: "Selection - Proven Winners Library", tag: "Selection", tagColor: "bg-emerald-600", type: "image" },
                            { src: template1Settings, alt: "Template settings", label: "Settings - Customization Panel", tag: "Settings", tagColor: "bg-blue-500", type: "image" },
                            { src: template1Result, alt: "Template result 1", label: "Result - Your Brand Version", tag: "Result", tagColor: "bg-green-500", type: "image" },
                            { src: template2Result, alt: "Template result 2", label: "Result - Alternative Version", tag: "Result", tagColor: "bg-green-500", type: "image" }
                          ]
                        })}
                        className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className={`absolute top-2 left-2 ${item.color} text-white text-xs px-2 py-1 rounded`}>
                          {item.tag}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Text Column - 1/3 (Right side) */}
              <div className="p-8 lg:p-12 flex flex-col justify-center lg:order-2">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-3 py-1 text-sm font-semibold mb-6 w-fit">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span>Proven Winners</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Templates</span>: Changing the Game
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Start with winners. We analyzed thousands of high-converting Facebook ads from billion-dollar brands. Their proven formulas, now yours.
                </p>
                <p className="text-base text-gray-500 leading-relaxed mb-6">
                  Swap their products for yours. Their models for yours. Their success for yours. Why guess what works when you can know?
                </p>
                <div className="flex flex-col gap-3">
                  <div className="bg-emerald-50 text-emerald-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    🏆 High-Converting
                  </div>
                  <div className="bg-green-50 text-green-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    💎 Billion-Dollar Brands
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dezygn Eye - Enhanced Layout */}
          <div className="mb-32 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Text Column - 1/3 */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-3 py-1 text-sm font-semibold mb-6 w-fit">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  <span>Web Integration</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Dezygn Eye</span>: Import Images from Any Website
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  See it. Grab it. Create with it. The entire internet becomes your mood board.
                </p>
                <p className="text-base text-gray-500 leading-relaxed mb-6">
                  No downloading, no organizing, no file management. Click any image on any website and it's instantly in your Dezygn workspace. Inspiration to creation in one click.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="bg-indigo-50 text-indigo-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    🌐 Entire Internet
                  </div>
                  <div className="bg-purple-50 text-purple-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    ⚡ One Click Import
                  </div>
                </div>
              </div>
              
              {/* Video & Images Column - 2/3 */}
              <div className="lg:col-span-2 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-full">
                  <button
                    onClick={() => setMediaModal({
                      isOpen: true,
                      currentIndex: 0,
                      items: [
                        { src: dezygnEyeVideo, alt: "Dezygn Eye Demo", label: "Demo - One-Click Web Import", tag: "Demo", tagColor: "bg-gradient-to-r from-indigo-500 to-purple-500", type: "video" },
                        { src: dezygnEyeHero, alt: "Dezygn Eye hero", label: "Interface - Browser Extension", tag: "Interface", tagColor: "bg-indigo-600", type: "image" }
                      ]
                    })}
                    className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 w-full group transition-all duration-300 hover:shadow-3xl"
                  >
                    <video
                      src={dezygnEyeVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Video label */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Click to enlarge
                    </div>
                  </button>
                  
                  {/* Clickable Image Gallery */}
                  <div className="grid grid-cols-1 gap-4">
                    <button
                      onClick={() => setMediaModal({
                        isOpen: true,
                        currentIndex: 1,
                        items: [
                          { src: dezygnEyeVideo, alt: "Dezygn Eye Demo", label: "Demo - One-Click Web Import", tag: "Demo", tagColor: "bg-gradient-to-r from-indigo-500 to-purple-500", type: "video" },
                          { src: dezygnEyeHero, alt: "Dezygn Eye hero", label: "Interface - Browser Extension", tag: "Interface", tagColor: "bg-indigo-600", type: "image" }
                        ]
                      })}
                      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <img
                        src={dezygnEyeHero}
                        alt="Dezygn Eye hero"
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                        Interface
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Variations - Enhanced Layout */}
          <div className="mb-32 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Video & Images Column - 2/3 */}
              <div className="lg:col-span-2 bg-gradient-to-br from-rose-50 to-pink-50 p-8 lg:p-12 flex flex-col justify-center lg:order-1">
                <div className="w-full">
                  <button
                    onClick={() => setMediaModal({
                      isOpen: true,
                      currentIndex: 0,
                      items: [
                        { src: variationsVideo, alt: "Variations Demo", label: "Demo - Rapid Creative Iteration", tag: "Demo", tagColor: "bg-gradient-to-r from-rose-500 to-pink-500", type: "video" },
                        { src: variationsSettings, alt: "Variations settings", label: "Settings - Variation Controls", tag: "Settings", tagColor: "bg-gray-600", type: "image" },
                        { src: variationsResult1, alt: "Variations result 1", label: "Result - Version A", tag: "Version A", tagColor: "bg-rose-500", type: "image" },
                        { src: variationsResult2, alt: "Variations result 2", label: "Result - Version B", tag: "Version B", tagColor: "bg-pink-500", type: "image" }
                      ]
                    })}
                    className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 w-full group transition-all duration-300 hover:shadow-3xl"
                  >
                    <video
                      src={variationsVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Video label */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Click to enlarge
                    </div>
                  </button>
                  
                  {/* Clickable Image Gallery */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { src: variationsSettings, alt: "Variations settings", tag: "Settings", color: "bg-gray-600" },
                      { src: variationsResult1, alt: "Variations result 1", tag: "Version A", color: "bg-rose-500" },
                      { src: variationsResult2, alt: "Variations result 2", tag: "Version B", color: "bg-pink-500" }
                    ].map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setMediaModal({
                          isOpen: true,
                          currentIndex: index + 1,
                          items: [
                            { src: variationsVideo, alt: "Variations Demo", label: "Demo - Rapid Creative Iteration", tag: "Demo", tagColor: "bg-gradient-to-r from-rose-500 to-pink-500", type: "video" },
                            { src: variationsSettings, alt: "Variations settings", label: "Settings - Variation Controls", tag: "Settings", tagColor: "bg-gray-600", type: "image" },
                            { src: variationsResult1, alt: "Variations result 1", label: "Result - Version A", tag: "Version A", tagColor: "bg-rose-500", type: "image" },
                            { src: variationsResult2, alt: "Variations result 2", label: "Result - Version B", tag: "Version B", tagColor: "bg-pink-500", type: "image" }
                          ]
                        })}
                        className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className={`absolute top-2 left-2 ${item.color} text-white text-xs px-2 py-1 rounded`}>
                          {item.tag}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Text Column - 1/3 (Right side) */}
              <div className="p-8 lg:p-12 flex flex-col justify-center lg:order-2">
                <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 rounded-full px-3 py-1 text-sm font-semibold mb-6 w-fit">
                  <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                  <span>Iteration Engine</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Variations</span>: Quickly Iterate
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  One winner. Twenty versions. Different colors, angles, messages — all from your perfect original.
                </p>
                <p className="text-base text-gray-500 leading-relaxed mb-6">
                  Test everything. Ship the best. What used to take days of back-and-forth now happens in minutes of pure creative flow.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="bg-rose-50 text-rose-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    🧪 Test Everything
                  </div>
                  <div className="bg-pink-50 text-pink-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    🚀 Creative Flow
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients Panel - Enhanced Layout */}
          <div className="mb-32 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Text Column - 1/3 */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 rounded-full px-3 py-1 text-sm font-semibold mb-6 w-fit">
                  <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
                  <span>Workflow</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-gray-600">Ingredients Panel</span>: Speeding Up Your Workflow
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Your creative assets, always at hand. No more hunting through folders or scrolling through uploads.
                </p>
                <p className="text-base text-gray-500 leading-relaxed mb-6">
                  Everything you need lives in a smart sidebar that knows what you're working on. Drag, drop, create. Repeat at the speed of thought.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="bg-slate-50 text-slate-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    📁 Smart Organization
                  </div>
                  <div className="bg-gray-50 text-gray-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    ⚡ Speed of Thought
                  </div>
                </div>
              </div>
              
              {/* Video & Images Column - 2/3 */}
              <div className="lg:col-span-2 bg-gradient-to-br from-slate-50 to-gray-50 p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-full">
                  <button
                    onClick={() => setMediaModal({
                      isOpen: true,
                      currentIndex: 0,
                      items: [
                        { src: ingredientsPanelVideo, alt: "Ingredients Panel Demo", label: "Demo - Smart Workflow Management", tag: "Demo", tagColor: "bg-gradient-to-r from-slate-500 to-gray-500", type: "video" },
                        { src: ingredientsPanel, alt: "Ingredients Panel Interface", label: "Interface - Main Panel View", tag: "Interface", tagColor: "bg-slate-600", type: "image" },
                        { src: ingredientsSettings, alt: "Ingredients Settings", label: "Settings - Panel Configuration", tag: "Settings", tagColor: "bg-gray-600", type: "image" }
                      ]
                    })}
                    className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 w-full group transition-all duration-300 hover:shadow-3xl"
                  >
                    <video
                      src={ingredientsPanelVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Video label */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Click to enlarge
                    </div>
                  </button>
                  
                  {/* Clickable Image Gallery */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { src: ingredientsPanel, alt: "Ingredients Panel Interface", tag: "Interface", color: "bg-slate-600" },
                      { src: ingredientsSettings, alt: "Ingredients Settings", tag: "Settings", color: "bg-gray-600" }
                    ].map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setMediaModal({
                          isOpen: true,
                          currentIndex: index + 1,
                          items: [
                            { src: ingredientsPanelVideo, alt: "Ingredients Panel Demo", label: "Demo - Smart Workflow Management", tag: "Demo", tagColor: "bg-gradient-to-r from-slate-500 to-gray-500", type: "video" },
                            { src: ingredientsPanel, alt: "Ingredients Panel Interface", label: "Interface - Main Panel View", tag: "Interface", tagColor: "bg-slate-600", type: "image" },
                            { src: ingredientsSettings, alt: "Ingredients Settings", label: "Settings - Panel Configuration", tag: "Settings", tagColor: "bg-gray-600", type: "image" }
                          ]
                        })}
                        className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className={`absolute top-2 left-2 ${item.color} text-white text-xs px-2 py-1 rounded`}>
                          {item.tag}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to enlarge
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller Updates */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Smaller Updates That Make Everything Better</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                These aren't features. They're time you get back. Minutes saved become hours earned become days reclaimed.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Simultaneous Generation</h4>
                    <p className="text-gray-600 leading-relaxed">Generate five designs while your coffee brews — simultaneously. No more waiting in queues.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">URL Import</h4>
                    <p className="text-gray-600 leading-relaxed">Import from URLs instantly. See an image online? One click brings it into your workspace.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Progressive Loading</h4>
                    <p className="text-gray-600 leading-relaxed">Watch images appear progressively, not painfully. Visual feedback that keeps you in the flow.</p>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-8">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Folder Upload</h4>
                    <p className="text-gray-600 leading-relaxed">Upload entire folders at once. Drag hundreds of assets and they'll organize themselves smartly.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Enhanced Performance</h4>
                    <p className="text-gray-600 leading-relaxed">Everything runs faster. Smoother animations, quicker responses, less waiting.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Smarter Organization</h4>
                    <p className="text-gray-600 leading-relaxed">Auto-categorization, intelligent tagging, and contextual suggestions that learn your workflow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Studio - Enhanced Layout */}
          <div className="mb-32 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Text Column - 1/3 */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 rounded-full px-3 py-1 text-sm font-semibold mb-6 w-fit">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>Video Creation</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Video Studio</span>: The Future Arrives Early
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Ten seconds to video. Not rendering time — total time. Test ideas at the speed of thought with Fast Gen.
                </p>
                <p className="text-base text-gray-500 leading-relaxed mb-6">
                  Create Hollywood-quality scenes with Veo 3. Build episodic content with scene continuity. Video creation that once required a studio now requires a sentence.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="bg-red-50 text-red-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    ⚡ 10-Second Creation
                  </div>
                  <div className="bg-orange-50 text-orange-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    🎬 Hollywood Quality
                  </div>
                </div>
              </div>
              
              {/* Video & Gallery Column - 2/3 */}
              <div className="lg:col-span-2 bg-gradient-to-br from-red-50 to-orange-50 p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-full">
                  {/* Main Video - Scene Continuity */}
                  <button
                    onClick={() => setMediaModal({
                      isOpen: true,
                      currentIndex: 0,
                      items: [
                        { src: ugcAdVideo, alt: "UGC Ad Creation Demo", label: "Demo - UGC Ad Creation (Turn volume on!)", tag: "UGC Ads", tagColor: "bg-gradient-to-r from-red-500 to-orange-500", type: "video" },
                        { src: studioSceneVideo, alt: "Scene Continuity Demo", label: "Demo - Scene Continuity Magic", tag: "Scene Continuity", tagColor: "bg-red-500", type: "video" },
                        { src: ugcAdCreating, alt: "UGC Ad Creation", label: "Process - Creating in Dezygn Studio", tag: "Creation", tagColor: "bg-blue-600", type: "image" },
                        { src: ugcAdWomanProduct, alt: "UGC Ad Result", label: "Result - Woman Plus Product Image", tag: "Result", tagColor: "bg-green-600", type: "image" },
                        { src: "https://www.youtube.com/embed/jg1y178k8TU", alt: "Studio Creation Example 1", label: "Example - Professional Creation", tag: "YouTube", tagColor: "bg-red-600", type: "iframe" },
                        { src: "https://www.youtube.com/embed/8Tx9q4jrnGs", alt: "Studio Creation Example 2", label: "Example - Advanced Techniques", tag: "YouTube", tagColor: "bg-red-600", type: "iframe" }
                      ]
                    })}
                    className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 w-full group transition-all duration-300 hover:shadow-3xl"
                  >
                    <video
                      src={ugcAdVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Video label */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Click to enlarge
                    </div>
                    
                    {/* Main tag */}
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Scene Continuity
                    </div>
                  </button>
                  
                  {/* Gallery Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Fast Gen Video */}
                    <button
                      onClick={() => setMediaModal({
                        isOpen: true,
                        currentIndex: 0,
                        items: [
                          { src: ugcAdVideo, alt: "UGC Ad Creation Demo", label: "Demo - UGC Ad Creation (Turn volume on!)", tag: "UGC Ads", tagColor: "bg-gradient-to-r from-red-500 to-orange-500", type: "video" },
                          { src: studioSceneVideo, alt: "Scene Continuity Demo", label: "Demo - Scene Continuity Magic", tag: "Scene Continuity", tagColor: "bg-red-500", type: "video" },
                          { src: ugcAdCreating, alt: "UGC Ad Creation", label: "Process - Creating in Dezygn Studio", tag: "Creation", tagColor: "bg-blue-600", type: "image" },
                          { src: ugcAdWomanProduct, alt: "UGC Ad Result", label: "Result - Woman Plus Product Image", tag: "Result", tagColor: "bg-green-600", type: "image" },
                          { src: "https://www.youtube.com/embed/jg1y178k8TU", alt: "Studio Creation Example 1", label: "Example - Professional Creation", tag: "YouTube", tagColor: "bg-red-600", type: "iframe" },
                          { src: "https://www.youtube.com/embed/8Tx9q4jrnGs", alt: "Studio Creation Example 2", label: "Example - Advanced Techniques", tag: "YouTube", tagColor: "bg-red-600", type: "iframe" }
                        ]
                      })}
                      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group aspect-video"
                    >
                      <video
                        src={studioFastVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Fast Gen
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                    {/* Settings Images */}
                    <button
                      onClick={() => setMediaModal({
                        isOpen: true,
                        currentIndex: 2,
                        items: [
                          { src: ugcAdVideo, alt: "UGC Ad Creation Demo", label: "Demo - UGC Ad Creation (Turn volume on!)", tag: "UGC Ads", tagColor: "bg-gradient-to-r from-red-500 to-orange-500", type: "video" },
                          { src: studioSceneVideo, alt: "Scene Continuity Demo", label: "Demo - Scene Continuity Magic", tag: "Scene Continuity", tagColor: "bg-red-500", type: "video" },
                          { src: ugcAdCreating, alt: "UGC Ad Creation", label: "Process - Creating in Dezygn Studio", tag: "Creation", tagColor: "bg-blue-600", type: "image" },
                          { src: ugcAdWomanProduct, alt: "UGC Ad Result", label: "Result - Woman Plus Product Image", tag: "Result", tagColor: "bg-green-600", type: "image" },
                          { src: "https://www.youtube.com/embed/jg1y178k8TU", alt: "Studio Creation Example 1", label: "Example - Professional Creation", tag: "YouTube", tagColor: "bg-red-600", type: "iframe" },
                          { src: "https://www.youtube.com/embed/8Tx9q4jrnGs", alt: "Studio Creation Example 2", label: "Example - Advanced Techniques", tag: "YouTube", tagColor: "bg-red-600", type: "iframe" }
                        ]
                      })}
                      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group aspect-video"
                    >
                      <img
                        src={ugcAdCreating}
                        alt="UGC Ad Creation"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        Creation
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setMediaModal({
                        isOpen: true,
                        currentIndex: 3,
                        items: [
                          { src: ugcAdVideo, alt: "UGC Ad Creation Demo", label: "Demo - UGC Ad Creation (Turn volume on!)", tag: "UGC Ads", tagColor: "bg-gradient-to-r from-red-500 to-orange-500", type: "video" },
                          { src: studioSceneVideo, alt: "Scene Continuity Demo", label: "Demo - Scene Continuity Magic", tag: "Scene Continuity", tagColor: "bg-red-500", type: "video" },
                          { src: ugcAdCreating, alt: "UGC Ad Creation", label: "Process - Creating in Dezygn Studio", tag: "Creation", tagColor: "bg-blue-600", type: "image" },
                          { src: ugcAdWomanProduct, alt: "UGC Ad Result", label: "Result - Woman Plus Product Image", tag: "Result", tagColor: "bg-green-600", type: "image" },
                          { src: "https://www.youtube.com/embed/jg1y178k8TU", alt: "Studio Creation Example 1", label: "Example - Professional Creation", tag: "YouTube", tagColor: "bg-red-600", type: "iframe" },
                          { src: "https://www.youtube.com/embed/8Tx9q4jrnGs", alt: "Studio Creation Example 2", label: "Example - Advanced Techniques", tag: "YouTube", tagColor: "bg-red-600", type: "iframe" }
                        ]
                      })}
                      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group aspect-video"
                    >
                      <img
                        src={ugcAdWomanProduct}
                        alt="UGC Ad Result"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                        Result
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                    {/* YouTube Examples */}
                    <button
                      onClick={() => setMediaModal({
                        isOpen: true,
                        currentIndex: 4,
                        items: [
                          { src: ugcAdVideo, alt: "UGC Ad Creation Demo", label: "Demo - UGC Ad Creation (Turn volume on!)", tag: "UGC Ads", tagColor: "bg-gradient-to-r from-red-500 to-orange-500", type: "video" },
                          { src: studioSceneVideo, alt: "Scene Continuity Demo", label: "Demo - Scene Continuity Magic", tag: "Scene Continuity", tagColor: "bg-red-500", type: "video" },
                          { src: ugcAdCreating, alt: "UGC Ad Creation", label: "Process - Creating in Dezygn Studio", tag: "Creation", tagColor: "bg-blue-600", type: "image" },
                          { src: ugcAdWomanProduct, alt: "UGC Ad Result", label: "Result - Woman Plus Product Image", tag: "Result", tagColor: "bg-green-600", type: "image" },
                          { src: "https://www.youtube.com/embed/jg1y178k8TU", alt: "Studio Creation Example 1", label: "Example - Professional Creation", tag: "YouTube", tagColor: "bg-red-600", type: "iframe" },
                          { src: "https://www.youtube.com/embed/8Tx9q4jrnGs", alt: "Studio Creation Example 2", label: "Example - Advanced Techniques", tag: "YouTube", tagColor: "bg-red-600", type: "iframe" }
                        ]
                      })}
                      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group aspect-video bg-black flex items-center justify-center"
                    >
                      <iframe
                        src="https://www.youtube.com/embed/jg1y178k8TU"
                        title="Studio Example 1"
                        style={{ border: 0, pointerEvents: 'none' }}
                        className="w-full h-full"
                      ></iframe>
                      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                        YouTube
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setMediaModal({
                        isOpen: true,
                        currentIndex: 5,
                        items: [
                          { src: ugcAdVideo, alt: "UGC Ad Creation Demo", label: "Demo - UGC Ad Creation (Turn volume on!)", tag: "UGC Ads", tagColor: "bg-gradient-to-r from-red-500 to-orange-500", type: "video" },
                          { src: studioSceneVideo, alt: "Scene Continuity Demo", label: "Demo - Scene Continuity Magic", tag: "Scene Continuity", tagColor: "bg-red-500", type: "video" },
                          { src: ugcAdCreating, alt: "UGC Ad Creation", label: "Process - Creating in Dezygn Studio", tag: "Creation", tagColor: "bg-blue-600", type: "image" },
                          { src: ugcAdWomanProduct, alt: "UGC Ad Result", label: "Result - Woman Plus Product Image", tag: "Result", tagColor: "bg-green-600", type: "image" },
                          { src: "https://www.youtube.com/embed/jg1y178k8TU", alt: "Studio Creation Example 1", label: "Example - Professional Creation", tag: "YouTube", tagColor: "bg-red-600", type: "iframe" },
                          { src: "https://www.youtube.com/embed/8Tx9q4jrnGs", alt: "Studio Creation Example 2", label: "Example - Advanced Techniques", tag: "YouTube", tagColor: "bg-red-600", type: "iframe" }
                        ]
                      })}
                      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group aspect-video bg-black flex items-center justify-center"
                    >
                      <iframe
                        src="https://www.youtube.com/embed/8Tx9q4jrnGs"
                        title="Studio Example 2"
                        style={{ border: 0, pointerEvents: 'none' }}
                        className="w-full h-full"
                      ></iframe>
                      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                        YouTube
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Training & Support - Enhanced Layout */}
          <div className="mb-32 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Text Column - 1/3 */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 rounded-full px-3 py-1 text-sm font-semibold mb-6 w-fit">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  <span>Learning Hub</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Training & Support</span>: Never Create Alone
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Learn in minutes, master in hours. Every feature has a video. Every video has a guide. Every question has an answer — instantly.
                </p>
                <p className="text-base text-gray-500 leading-relaxed mb-6">
                  This isn't documentation. It's your personal creative coach, available 24/7, getting smarter every day.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="bg-teal-50 text-teal-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    🎓 Personal Coach
                  </div>
                  <div className="bg-emerald-50 text-emerald-700 px-3 py-2 rounded-full text-sm font-semibold w-fit">
                    🤖 AI Assistant
                  </div>
                </div>
              </div>
              
              {/* Video Column - 2/3 */}
              <div className="lg:col-span-2 bg-gradient-to-br from-teal-50 to-emerald-50 p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-full space-y-6">
                  {/* Main Video */}
                  <button
                    onClick={() => setMediaModal({
                      isOpen: true,
                      currentIndex: 0,
                      items: [
                        { src: betterTrainingVideo, alt: "Better Training Demo", label: "Demo - Enhanced Training & Support", tag: "Demo", tagColor: "bg-gradient-to-r from-teal-500 to-emerald-500", type: "video" },
                        { src: betterChatbot, alt: "Better chatbot", label: "Interface - AI Support Assistant", tag: "AI Assistant", tagColor: "bg-teal-600", type: "image" },
                        { src: newAcademy, alt: "New academy", label: "Platform - Learning Academy", tag: "Academy", tagColor: "bg-blue-500", type: "image" },
                        { src: newArticles, alt: "New articles", label: "Content - Tutorial Articles", tag: "Articles", tagColor: "bg-emerald-500", type: "image" }
                      ]
                    })}
                    className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group w-full"
                  >
                    <video
                      src={betterTrainingVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Demo
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to play
                    </div>
                  </button>
                  
                  {/* Supporting Images Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {[
                      { src: betterChatbot, alt: "Better chatbot", tag: "AI Assistant", color: "bg-teal-600", label: "Interface - AI Support Assistant", tagColor: "bg-teal-600" },
                      { src: newAcademy, alt: "New academy", tag: "Academy", color: "bg-blue-500", label: "Platform - Learning Academy", tagColor: "bg-blue-500" },
                      { src: newArticles, alt: "New articles", tag: "Articles", color: "bg-emerald-500", label: "Content - Tutorial Articles", tagColor: "bg-emerald-500" }
                    ].map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setMediaModal({
                          isOpen: true,
                          currentIndex: index + 1,
                          items: [
                            { src: betterTrainingVideo, alt: "Better Training Demo", label: "Demo - Enhanced Training & Support", tag: "Demo", tagColor: "bg-gradient-to-r from-teal-500 to-emerald-500", type: "video" },
                            { src: betterChatbot, alt: "Better chatbot", label: "Interface - AI Support Assistant", tag: "AI Assistant", tagColor: "bg-teal-600", type: "image" },
                            { src: newAcademy, alt: "New academy", label: "Platform - Learning Academy", tag: "Academy", tagColor: "bg-blue-500", type: "image" },
                            { src: newArticles, alt: "New articles", label: "Content - Tutorial Articles", tag: "Articles", tagColor: "bg-emerald-500", type: "image" }
                          ]
                        })}
                        className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className={`absolute top-2 left-2 ${item.color} text-white text-xs px-2 py-1 rounded`}>
                          {item.tag}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zM8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 4l-2.5-3L6 12h7z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About This Update Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-300 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-28 h-28 bg-pink-300 rounded-full blur-xl animate-bounce"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Version 4.5 Now Live</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200">
              About This Update
            </h2>
            <p className="text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              The 4.5 update is <span className="text-yellow-300 font-bold">100% free</span> for all existing Dezygn users. 
              Just login to <span className="text-white font-semibold">chat.dezygn.com</span> and everything on this page is already yours.
            </p>
          </div>
          
          {/* Main Content Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Free Update Card */}
            <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">For Existing Users</h3>
                  <p className="text-green-600 font-semibold">100% Free Forever</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Already have Dezygn? You're all set! Every feature, every improvement, every shortcut on this page is automatically yours. 
                No upgrade fees, no hidden costs, no subscriptions required.
              </p>
              <div className="bg-green-50 rounded-2xl p-4">
                <p className="text-green-800 font-semibold text-center">
                  🎉 Just login and start creating with 4.5 today!
                </p>
              </div>
            </div>

            {/* New Users Card */}
            <div className="bg-gradient-to-br from-white/95 to-purple-50/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">For New Users</h3>
                  <p className="text-purple-600 font-semibold">Multiple Options Available</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                New to Dezygn? Welcome! We have flexible options to get you started, from one-time purchases to subscription plans. 
                Choose what works best for your creative journey.
              </p>
              <div className="bg-purple-50 rounded-2xl p-4">
                <p className="text-purple-800 font-semibold text-center">
                  💫 See pricing options below to get started!
                </p>
              </div>
            </div>
          </div>

          {/* Options Overview Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Legacy Special",
                subtitle: "If you haven't bought Dezygn yet",
                description: "Get lifetime access to Dezygn with 750 monthly image credits. This pricing ends soon when we move to subscription-only.",
                color: "from-amber-500 to-orange-500",
                bgColor: "from-amber-50 to-orange-50",
                icon: "🏆"
              },
              {
                title: "Credit Packs", 
                subtitle: "If you own Legacy Special but need more credits",
                description: "Your 750 monthly credits not enough? Grab extra packs as needed. Credits never expire.",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
                icon: "⚡"
              },
              {
                title: "Freelancer/Agency",
                subtitle: "If you want unlimited everything",
                description: "Whether you're new or a Legacy owner, these plans give you unlimited image generation plus video studio access. Try free for 7 days, cancel anytime.",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
                icon: "🚀"
              }
            ].map((option, index) => (
              <div key={index} className={`bg-gradient-to-br ${option.bgColor} backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{option.icon}</span>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{option.title}</h4>
                    <div className={`inline-block bg-gradient-to-r ${option.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      Available Below
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 font-medium mb-3">{option.subtitle}</p>
                <p className="text-gray-700 leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>

          {/* Guidance Section */}
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z"/>
                </svg>
              </div>
              <h4 className="font-bold text-2xl text-gray-900">Not sure which is right for you?</h4>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { 
                  title: "Casual Users",
                  recommendation: "Legacy Special is perfect",
                  icon: "🎨",
                  color: "bg-green-100 text-green-800"
                },
                {
                  title: "Growing Freelancers", 
                  recommendation: "Start with Legacy + credit packs, upgrade when ready",
                  icon: "📈",
                  color: "bg-blue-100 text-blue-800"
                },
                {
                  title: "Serious About Client Work",
                  recommendation: "Jump straight to Freelancer/Agency with the free trial", 
                  icon: "💼",
                  color: "bg-purple-100 text-purple-800"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h5 className="font-bold text-gray-900 mb-2">{item.title}</h5>
                  <div className={`${item.color} px-3 py-2 rounded-xl text-sm font-medium`}>
                    {item.recommendation}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-semibold text-gray-900">No pressure.</span> The update is yours regardless.
              </p>
              <p className="text-gray-500">
                These options just help you scale when you're ready. ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-60 right-32 w-32 h-32 bg-emerald-300 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-green-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-teal-300 rounded-full blur-2xl animate-bounce"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-white/95 to-green-50/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
            <div className="p-12 text-center">
              {/* Header with Shield Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.5V11.5C15.4,11.5 16,12.4 16,13V16C16,16.6 15.6,17 15,17H9C8.4,17 8,16.6 8,16V13C8,12.4 8.4,11.5 9,11.5V10.5C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,8.7 10.2,10.5V11.5H13.8V10.5C13.8,8.7 12.8,8.2 12,8.2Z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-xs">✓</span>
                  </div>
                </div>
              </div>

              {/* Main Headline */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Risk-Free Promise</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">100-Day</span><br/>
                  "Make Money or Your Money Back"<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Guarantee</span>
                </h2>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Left Side - Promise */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                  <div className="text-6xl mb-4">💰</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise to You</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Use Dezygn for <span className="font-bold text-green-600">100 full days</span>. Create unlimited designs. 
                    Land your first clients. Build your portfolio. If you haven't made back at least what you paid, 
                    email us for a <span className="font-bold text-green-600">full refund</span>.
                  </p>
                </div>

                {/* Right Side - Process */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <div className="text-6xl mb-4">✨</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Simple Process</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                      <span className="text-gray-700">No forms to fill out</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                      <span className="text-gray-700">No questions asked</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                      <span className="text-gray-700">Just your money back</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Statement */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why We Can Make This Promise</h3>
                <p className="text-xl text-green-100 mb-4">
                  We know Dezygn works. We've seen thousands of users transform their creative workflows, 
                  land better clients, and build successful design businesses.
                </p>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-2xl">🚀</span>
                  <span className="font-semibold text-lg">You just need time to prove it to yourself.</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl mb-2">🔒</div>
                  <div className="text-sm font-semibold text-gray-600">100% Secure</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-sm font-semibold text-gray-600">Instant Access</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💎</div>
                  <div className="text-sm font-semibold text-gray-600">Premium Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Enhanced Primary Focus */}
      <section id="pricing" className="py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-purple-300 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-1/2 left-10 w-64 h-64 bg-blue-300 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white rounded-full px-6 py-3 text-sm font-semibold mb-8">
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
              <span>🚀 Launch Your Creative Empire</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200">
              Get Instant Access to<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Dezygn 4.5</span>
            </h2>
            <p className="text-2xl text-purple-200 mb-12 max-w-4xl mx-auto">
              September Special: 30% OFF Annual Plans
            </p>
          </div>

          {/* Modern Card-Based Pricing */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Legacy Special Card */}
            <div className="relative bg-gradient-to-br from-white/95 to-orange-50/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  🏆 Best Value
                </div>
              </div>
              
              <div className="text-center mb-8 mt-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🥇</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Legacy Special</h3>
                <p className="text-orange-600 font-semibold mb-4">Perfect for beginners & casual creators</p>
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-5xl font-black text-gray-900">$79</div>
                    <div className="text-2xl font-bold text-gray-400 line-through">$149</div>
                  </div>
                  <div className="text-orange-600 font-semibold">one-time payment</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700"><span className="line-through text-gray-400">500</span> 750 image credits</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Video studio access</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Email support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Lifetime access</span>
                </div>
              </div>

              <button
                onClick={() => window.open('https://dezygn.checkoutpage.com/dezygn-legacy-upgrade', '_blank')}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Legacy Special
              </button>
            </div>

            {/* Freelancer Card */}
            <div className="relative bg-gradient-to-br from-white/95 to-purple-50/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 transform lg:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  🚀 Most Popular
                </div>
              </div>
              
              <div className="text-center mb-8 mt-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Freelancer</h3>
                <p className="text-purple-600 font-semibold mb-4">For serious creators & freelancers</p>
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-2xl font-bold text-gray-400 line-through">$588</div>
                    <div className="text-5xl font-black text-gray-900">$399</div>
                  </div>
                  <div className="text-purple-600 font-semibold">per year</div>
                  <div className="text-purple-600 text-sm">(only $33/month)</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">1000 Images every month</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">40 Video Clips every month</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Unlimited Brands</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Unlimited Campaign</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">5 Team members</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">7</span>
                  </div>
                  <span className="text-purple-700 font-semibold">7-day free trial</span>
                </div>
              </div>

              <button
                onClick={() => window.open('https://dezygn.checkoutpage.com/dezygn-yearly', '_blank')}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </button>
            </div>

            {/* Agency Card */}
            <div className="relative bg-gradient-to-br from-white/95 to-indigo-50/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                  💼 Enterprise
                </div>
              </div>
              
              <div className="text-center mb-8 mt-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Agency</h3>
                <p className="text-indigo-600 font-semibold mb-4">For agencies & high-volume creators</p>
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-2xl font-bold text-gray-400 line-through">$1,119</div>
                    <div className="text-5xl font-black text-gray-900">$799</div>
                  </div>
                  <div className="text-indigo-600 font-semibold">per year</div>
                  <div className="text-indigo-600 text-sm">(only $67/month)</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">2500 Images every month</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">100 Video Clips every month</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Unlimited Brands</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Unlimited Campaigns</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Unlimited Team members</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Conversionzign</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">AI Creative Agency access</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">★</span>
                  </div>
                  <span className="text-indigo-700 font-semibold">Priority support</span>
                </div>
              </div>

              <button
                onClick={() => window.open('https://dezygn.checkoutpage.com/dezygn-yearly', '_blank')}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </button>
            </div>
          </div>

          {/* New Feature Announcement */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-2 border-green-200 rounded-2xl px-8 py-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white text-lg font-bold">✨</span>
                </div>
                <span className="font-bold text-lg">NEW:</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="font-black text-xl tracking-wide text-green-900">DOUBLE THE CREDITS</span>
                <span className="font-semibold text-lg text-green-700">on all subscriptions</span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4">
              <div className="flex items-center gap-2 text-white">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">100-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Packs Section - Enhanced Secondary Focus */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-purple-50/50 relative">
        <div className="max-w-6xl mx-auto">
          {/* Understated Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Flex Credits</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Need Extra Credits?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Already own Legacy Special? Grab additional credits when you need them. 
              Credits never expire and stack with your monthly allowance.
            </p>
          </div>

          {/* Credit Packs Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Starter Pack",
                price: "$29",
                imageCredits: "500",
                videoClips: "5",
                bestFor: "Testing new ideas, small projects",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
                icon: "🌱"
              },
              {
                name: "Pro Pack", 
                price: "$99",
                imageCredits: "2,000",
                videoClips: "20", 
                bestFor: "Active freelancers, monthly needs",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
                icon: "🚀",
                popular: true
              },
              {
                name: "Studio Pack",
                price: "$299", 
                imageCredits: "7,500",
                videoClips: "75",
                bestFor: "Agencies, high-volume creators", 
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
                icon: "💎"
              }
            ].map((pack, index) => (
              <div key={index} className={`relative bg-gradient-to-br ${pack.bgColor} rounded-2xl p-6 shadow-lg border border-white/50 ${pack.popular ? 'ring-2 ring-blue-300' : ''}`}>
                {pack.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-3xl mb-3">{pack.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{pack.name}</h4>
                  <div className="text-3xl font-black text-gray-900 mb-1">{pack.price}</div>
                  <p className="text-sm text-gray-600">{pack.bestFor}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between bg-white/60 rounded-lg p-3">
                    <span className="text-gray-700 font-medium">Image Credits</span>
                    <span className="font-bold text-gray-900">{pack.imageCredits}</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/60 rounded-lg p-3">
                    <span className="text-gray-700 font-medium">Video Clips</span>
                    <span className="font-bold text-gray-900">{pack.videoClips}</span>
                  </div>
                </div>

                <button 
                  onClick={() => window.open('https://dezygn.checkoutpage.com/dezygn-credits', '_blank')}
                  className={`w-full bg-gradient-to-r ${pack.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Get {pack.name}
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-2xl font-bold text-center mb-8 text-gray-900">Frequently Asked Questions</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <FAQItem
                  question="Do I get both images AND video clips?"
                  answer="Yes! Each pack includes both image credits and video clips. For example, the Starter Pack gives you 500 image credits AND 5 video clips for $29."
                />
                
                <FAQItem
                  question="How long do credits last?"
                  answer="Credits never expire. Buy them when you need them, use them at your own pace."
                />
                
                <FAQItem
                  question="What counts as one image credit?"
                  answer="• 1 credit = 1 image generation
• 1 credit = 1 image edit  
• 1 credit = 1 Brand DNA generation"
                />

                <FAQItem
                  question="Can I buy multiple packs?"
                  answer="Yes, credits stack. Buy as many packs as you need."
                />
              </div>

              <div className="space-y-4">
                <FAQItem
                  question="What's included in a video clip?"
                  answer="• 1 video clip = up to 8 seconds of Veo3 Fast video
• 1 video clip = up to 5 seconds of Kling 2.1 Standard
• You choose which model to use per clip"
                />
                
                <FAQItem
                  question="I'm on Freelancer/Agency plan. Do I need these?"
                  answer="No, you already have unlimited images and included video clips with your subscription."
                />
                
                <FAQItem
                  question="How do these compare to subscription pricing?"
                  answer="These packs are exclusively for Legacy Special members who want to keep their one-time purchase but need extra credits occasionally."
                />
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-purple-50 rounded-2xl px-6 py-4">
                <span className="text-2xl">💡</span>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Need help choosing?</div>
                  <div className="text-sm text-gray-600">Start with the Pro Pack - it's our most popular option for active creators.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Questions Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-purple-300 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-300 rounded-full blur-xl animate-bounce"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full px-6 py-3 text-sm font-semibold mb-8 border border-purple-200">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            <span>🤝 We're Here to Help</span>
          </div>
          
          {/* Better Headline */}
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Still Have Questions?</span><br/>
            Let's Talk!
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you need help choosing the right plan, want to see a demo, or just have questions about how Dezygn 4.5 can transform your creative workflow - we're here for you.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            {/* Chat with AI Button */}
            <button
              onClick={() => {
                // Try to open Intercom if available, otherwise fallback to email
                if (typeof (window as any).Intercom !== 'undefined') {
                  (window as any).Intercom('show');
                } else {
                  // Fallback if Intercom isn't loaded yet
                  alert('Chat widget is loading... Please try again in a moment or use the email option.');
                }
              }}
              className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.4 0-2.72-.35-3.88-.97L7 19.5l.5-1.12C6.85 17.72 6.5 16.4 6.5 15c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z"/>
                  <circle cx="9" cy="12" r="1"/>
                  <circle cx="12" cy="12" r="1"/>
                  <circle cx="15" cy="12" r="1"/>
                </svg>
              </div>
              <span>Chat with our AI Assistant</span>
              <div className="text-xs bg-white/20 px-2 py-1 rounded-full">Instant</div>
            </button>
            
            {/* Email Button */}
            <button
              onClick={() => {
                window.location.href = 'mailto:support@youzign.com?subject=Question about Dezygn 4.5&body=Hi! I have a question about Dezygn 4.5:%0D%0A%0D%0A';
              }}
              className="group flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg border border-gray-200 hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span>Send us an Email</span>
              <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">24h response</div>
            </button>
          </div>
          
          {/* Support Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Instant Chat</h3>
              <p className="text-gray-600 text-sm">AI-powered support available 24/7. Get answers to common questions immediately.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl mb-3">👨‍💻</div>
              <h3 className="font-bold text-gray-900 mb-2">Human Support</h3>
              <p className="text-gray-600 text-sm">Need personalized help? Our team responds to emails within 24 hours.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600 text-sm">Get recommendations on plans, features, and how to maximize your creative output.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-6">
              <Logo className="h-8" />
            </div>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Dezygn 4.5 - The most powerful creative update we've ever released. 
              Everything you need to bring your ideas to life, faster than ever.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 rounded-full px-4 py-2 text-sm font-semibold">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Now Available</span>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
                <div className="text-gray-400">
                  © 2024 Dezygn. All rights reserved.
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://intercom.help/dezygn/en/articles/12168504-dezygn-shortcuts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors underline"
                  >
                    📖 Read Update Article
                  </a>
                  <a
                    href="https://chat.dezygn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    🚀 Login to Dezygn
                  </a>
                </div>
              </div>
              <div className="text-gray-400 text-sm">
                Made with ❤️ for creators everywhere
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ShortcutsPage;