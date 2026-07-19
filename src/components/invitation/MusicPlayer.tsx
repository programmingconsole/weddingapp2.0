'use client';

import React, { useState, useRef } from 'react';
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer({ audioUrl }: { audioUrl?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!audioUrl) return null;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio ref={audioRef} src={audioUrl} loop />
      <button
        onClick={togglePlay}
        className={`p-3.5 rounded-full shadow-2xl backdrop-blur-xl border transition-all duration-300 flex items-center justify-center gap-2 group ${
          isPlaying
            ? 'bg-amber-500 text-slate-950 border-amber-300 ring-4 ring-amber-500/30 animate-pulse-subtle'
            : 'bg-slate-950/80 text-amber-400 border-amber-500/40 hover:bg-amber-500 hover:text-slate-950'
        }`}
        title={isPlaying ? 'Mute Music' : 'Play Background Music'}
      >
        {isPlaying ? (
          <>
            <Pause className="w-5 h-5 fill-slate-950" />
            <span className="text-[10px] font-bold uppercase tracking-wider pr-1 hidden group-hover:inline">Playing</span>
          </>
        ) : (
          <>
            <Music className="w-5 h-5 animate-bounce" />
            <span className="text-[10px] font-bold uppercase tracking-wider pr-1 hidden group-hover:inline">Play Audio</span>
          </>
        )}
      </button>
    </div>
  );
}
