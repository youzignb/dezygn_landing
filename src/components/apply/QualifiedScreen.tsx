import { useEffect, useState } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { CheckCircle, CalendarCheck } from 'lucide-react';
import ResourceLinks from './ResourceLinks';

export default function QualifiedScreen() {
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (!confirmed) return;
    (async function () {
      const cal = await getCalApi({ namespace: 'launchpad' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, [confirmed]);

  // -- Show-up confirmation gate --
  if (!confirmed) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Nice. Let's talk.
        </h2>
        <p className="text-gray-400 text-lg max-w-md mx-auto mb-8">
          I'd love to hop on a quick 15-minute call to learn more about your
          situation and see if the Launchpad is a good fit.
        </p>

        <p className="text-gray-300 text-sm max-w-sm mx-auto mb-8">
          To respect everyone's time, please confirm you'll show up at your
          selected time slot.
        </p>

        <div className="flex flex-col items-center gap-3">
          <button
            onClick={() => setConfirmed(true)}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
          >
            <CalendarCheck className="w-5 h-5" />
            Yes, I'll be there. Let me book a time.
          </button>

          <a
            href="/"
            className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            I can't commit right now
          </a>
        </div>
      </div>
    );
  }

  // -- Cal.com booking --
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
        <CalendarCheck className="w-8 h-8 text-green-400" />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Pick a time that works for you.
      </h2>
      <Cal
        namespace="launchpad"
        calLink="bertrand-6hbdyx/launchpad"
        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
        config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
      />

      {/* Fallback link */}
      <a
        href="https://cal.com/bertrand-6hbdyx/launchpad"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 text-sm text-gray-500 hover:text-purple-400 transition-colors"
      >
        Calendar not loading? Book directly here
      </a>

      <ResourceLinks heading="While you wait — free resources to get started" />
    </div>
  );
}
