'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';
import { Share2, Copy, Download, Check, Sparkles, ExternalLink } from 'lucide-react';

export default function Step7Publish({ data, updateData }: { data: any; updateData: (fields: any) => void }) {
  const [copied, setCopied] = React.useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const slug = data.slug || 'shahal-and-fathima';
  const liveUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/i/${slug}`
    : `https://weddinginvite.ai/i/${slug}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(liveUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQr = () => {
    if (!qrRef.current) return;
    const svg = qrRef.current.querySelector('svg');
    if (!svg) return;
    const svgString = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = 300;
      canvas.height = 300;
      ctx?.drawImage(img, 0, 0, 300, 300);
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.download = `${slug}-invitation-qr.png`;
      a.href = url;
      a.click();
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(svgString);
  };

  return (
    <div className="space-y-8">
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce">
          <Sparkles className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">Congratulations!</h2>
        <p className="text-xs text-slate-400">Your digital invitation website is design-ready and published live.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Link Card */}
        <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-6">
          <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Live Invitation Link</h3>

          <div className="space-y-3">
            <label className="block text-xs font-medium text-slate-300">Custom URL Slug</label>
            <div className="flex gap-2">
              <span className="px-3 py-2.5 bg-slate-900 border border-slate-850 rounded-xl text-xs text-slate-500 flex items-center">
                /i/
              </span>
              <input
                type="text"
                value={slug}
                onChange={(e) => updateData({ slug: e.target.value.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase() })}
                placeholder="shahal-and-fathima"
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>
            <p className="text-[10px] text-slate-500">Only letters, numbers, and dashes are allowed.</p>
          </div>

          <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-850 flex items-center justify-between gap-3">
            <div className="truncate text-xs text-slate-300 font-mono">
              {liveUrl}
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={handleCopy}
                className="p-2 bg-slate-950 hover:bg-slate-800 rounded-xl border border-slate-800 text-slate-300"
                title="Copy Link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
              <Link
                href={`/i/${slug}`}
                target="_blank"
                className="p-2 bg-slate-950 hover:bg-slate-800 rounded-xl border border-slate-800 text-slate-300"
                title="Open Link"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="pt-2">
            <a
              href={`https://api.whatsapp.com/send?text=You are cordially invited to the wedding! View the details and RSVP here: ${encodeURIComponent(liveUrl)}`}
              target="_blank"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <Share2 className="w-4 h-4 text-slate-950" />
              <span>Share via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* QR Code Card */}
        <div className="glass-card p-6 rounded-3xl border border-slate-800 flex flex-col items-center justify-between gap-6">
          <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-widest text-center self-stretch">
            Printable Invitation QR Code
          </h3>

          <div ref={qrRef} className="p-4 bg-white rounded-2xl shadow-inner flex items-center justify-center">
            <QRCodeSVG value={liveUrl} size={130} level="H" includeMargin={true} />
          </div>

          <button
            type="button"
            onClick={handleDownloadQr}
            className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-850 text-xs font-semibold rounded-xl flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download High-Res QR Code</span>
          </button>
        </div>
      </div>
    </div>
  );
}
