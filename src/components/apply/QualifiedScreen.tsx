import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { CalendarCheck, Send } from 'lucide-react';
import ResourceLinks from './ResourceLinks';

export default function QualifiedScreen() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'launchpad' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <div className="text-center">
      {/* Pre-call video gate */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
        Your application isn't confirmed yet. Watch this video in full before booking your call.
      </h2>

      <div className="max-w-3xl mx-auto mb-3">
        <div
          className="relative w-full bg-black/40 border border-white/10 rounded-xl overflow-hidden"
          style={{ paddingBottom: '56.25%', height: 0 }}
        >
          <iframe
            src="https://www.tella.tv/video/vid_cmo2ointn01iz04jl1awr0uko/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0&o=0"
            allow="autoplay; fullscreen"
            allowTransparency
            title="A.I.P.A. Launchpad — Pre-call briefing"
            className="absolute top-0 left-0 w-full h-full border-0"
          />
        </div>
      </div>
      <p className="text-xs text-gray-500 max-w-xl mx-auto mb-12">
        Once you have watched the video in full and you understand the program and pricing, please book your call.
      </p>

      {/* Calendar */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
        <CalendarCheck className="w-8 h-8 text-green-400" />
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
        Pick a time that works for you.
      </h3>
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

      {/* Telegram shortcut */}
      <div className="mt-10 flex flex-col items-center gap-2">
        <a
          href="https://t.me/moonin1984"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#229ED9]/15 border border-[#229ED9]/40 text-[#7ec6e7] hover:text-white hover:bg-[#229ED9]/25 transition-colors text-sm font-medium"
        >
          <Send className="w-4 h-4" />
          Skip the queue — DM me on Telegram
        </a>
      </div>

      <ResourceLinks heading="Free resources" />
    </div>
  );
}
