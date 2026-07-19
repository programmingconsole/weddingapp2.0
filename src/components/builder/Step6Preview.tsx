'use client';

import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Sparkles, ExternalLink } from 'lucide-react';
import InvitationRenderer from '../invitation/InvitationRenderer';

export default function Step6Preview({ data }: { data: any }) {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const previewFrameWidth = {
    desktop: 'w-full max-w-5xl h-[700px]',
    tablet: 'w-[640px] h-[750px]',
    mobile: 'w-[375px] h-[750px]',
  }[device];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100">Step 6: Live Device Preview</h2>
          <p className="text-xs text-slate-400 mt-1">Preview how your invitation renders across Desktop, Tablet, and Mobile devices.</p>
        </div>

        {/* Device Mode Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-2xl self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setDevice('desktop')}
            className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              device === 'desktop' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => setDevice('tablet')}
            className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              device === 'tablet' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Tablet className="w-4 h-4" />
            <span className="hidden sm:inline">Tablet</span>
          </button>
          <button
            type="button"
            onClick={() => setDevice('mobile')}
            className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              device === 'mobile' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>
      </div>

      {/* Frame Wrapper */}
      <div className="flex justify-center items-center py-4 bg-slate-950 rounded-3xl border border-slate-900 overflow-hidden min-h-[600px]">
        <div className={`${previewFrameWidth} bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-y-auto transition-all duration-300 relative`}>
          <InvitationRenderer invitation={data} isPreview={true} />
        </div>
      </div>
    </div>
  );
}
