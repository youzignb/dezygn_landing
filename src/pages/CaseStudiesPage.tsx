import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

const caseStudies = [
  {
    id: 'jewelry-ecom',
    title: '2cm Accuracy for Jewelry',
    badge: 'Large E-commerce Store',
    badgeColor: 'purple' as const,
    goal: 'To reproduce accurate representation of chains and pendants in lifestyle photography settings.',
    challenge: 'Working with the company\'s stylist & photographer to create on-brand model/clothing styling. Reproducing 2 to 6cm high pendants and 40 to 80cm chains proved to be very challenging with AI.',
    solution: 'This project required upfront R&D to custom create models, outfits, and finding the right wording to accurately represent tiny pendants. It also required accurately measuring the products within the AI photography.',
    heroImage: 'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/0f74d57f-ec69-466a-bcf8-d4120c6f1745',
    samples: [
      'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/36115481-58bc-4820-9229-72556972c312',
      'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/03d053c3-8abc-4fa3-96aa-28b23dc7efec',
      'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/aa2361fe-471b-4044-a523-e1ef33c4711e'
    ]
  },
  {
    id: 'danish-toys',
    title: 'On-Brand Scandinavian Style',
    badge: 'Danish Toy Brand',
    badgeColor: 'blue' as const,
    goal: 'To create on-brand, premium AI photography showcasing children interacting with the brand\'s flagship product in a typical Danish interior.',
    challenge: 'Existing imagery was not on brand; a custom photoshoot would have been too expensive.',
    solution: 'Studied Danish interior design (flooring, furniture, light). The bigger challenge was to get a unique, foreign-to-LLMs product shown in the right dimensions, done using in-house image transfer technique.',
    heroImage: 'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/2d0e7669-28e9-44f3-87a2-b2e9670e5ea5',
    samples: [
      'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/57209dd4-dd14-4e4b-a274-c8bbb01a5b38',
      'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/89733176-9490-4a88-a0cd-54f5ed58ad5b',
      'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/9be563aa-b158-4041-aa55-1edf78c3593c'
    ]
  }
];

function CaseStudyCard({
  study
}: {
  study: typeof caseStudies[0];
}) {
  const [activeImage, setActiveImage] = useState(study.heroImage);
  const colorClasses = study.badgeColor === 'purple'
    ? 'bg-purple-500/10 border-purple-500/20 text-purple-300'
    : 'bg-blue-500/10 border-blue-500/20 text-blue-300';
  const iconColor = study.badgeColor === 'purple' ? 'text-purple-400' : 'text-blue-400';

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Content */}
        <div className="p-8 lg:p-10 flex flex-col justify-center order-last lg:order-first">
          <div className={`inline-flex items-center gap-2 ${colorClasses} rounded-full px-3 py-1 mb-4 w-fit border text-xs font-medium`}>
            <Target className={`w-3 h-3 ${iconColor}`} />
            {study.badge}
          </div>

          <h3 className="text-xl font-bold text-white mb-6">{study.title}</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">Goal</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{study.goal}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">Challenge</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{study.challenge}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Solution</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{study.solution}</p>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="bg-black/20 p-6 flex flex-col">
          <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-black/30 animate-pulse">
            <img
              src={activeImage}
              alt={study.title}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              onLoad={(e) => e.currentTarget.parentElement?.classList.remove('animate-pulse')}
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => setActiveImage(study.heroImage)}
              className={`aspect-square rounded-md overflow-hidden border-2 transition-all bg-black/30 ${activeImage === study.heroImage ? 'border-purple-500' : 'border-transparent opacity-60 hover:opacity-100'}`}
            >
              <img src={study.heroImage} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </button>
            {study.samples.map((sample, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(sample)}
                className={`aspect-square rounded-md overflow-hidden border-2 transition-all bg-black/30 ${activeImage === sample ? 'border-purple-500' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={sample} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white flex flex-col">
      <Helmet>
        <title>Case Studies - Real Results | Dezygn</title>
        <meta name="description" content="See how brands use Dezygn to create stunning AI photography. Real projects, real results." />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap');

        .text-gradient {
          background: linear-gradient(to right, #a855f7, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <HeaderV3 />

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 pt-24 pb-16 max-w-6xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase text-purple-400 mb-3">
            <span className="w-1 h-1 rounded-full bg-purple-500 animate-pulse"></span>
            Real Results
          </div>
          <h1 className="font-black text-3xl md:text-5xl text-white mb-3 tracking-tight">
            Case <span className="text-gradient">Studies</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            See how brands and agencies use Dezygn to create stunning AI photography.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Ready to create your own success story?</p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-xl transition-colors"
          >
            Get Started <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </main>

      <FooterV3 />
    </div>
  );
};

export default CaseStudiesPage;
