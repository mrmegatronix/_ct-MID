import React, { useState, useEffect } from 'react';
import { TvAd, ThemeColors } from '../types';
import { Play, Pause, Tv, Bell, Sparkles, Flame, Volume2, ShieldAlert } from 'lucide-react';
import CoastersLogo from './CoastersLogo';
import ConfettiSnow from './ConfettiSnow';

interface TvAdvertsPreviewProps {
  ads: TvAd[];
  theme: ThemeColors;
  venueName: string;
}

export default function TvAdvertsPreview({ ads, theme, venueName }: TvAdvertsPreviewProps) {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const currentAd = ads[currentAdIndex] || ads[0];
    const durationMs = (currentAd?.duration || 8) * 1000;

    const timeout = setTimeout(() => {
      setCurrentAdIndex((prev) => (prev + 1) % ads.length);
    }, durationMs);

    return () => clearTimeout(timeout);
  }, [isPlaying, currentAdIndex, ads]);

  const activeAd = ads[currentAdIndex] || ads[0] || {
    headline: "Welcome to the Chalet",
    subheadline: "YULETIDE COMMENCES SOON",
    accentText: "Warm mulled wine steaming every evening.",
    duration: 8
  };

  return (
    <div className="flex flex-col gap-4 w-full" id="tvads-root">
      <div className="flex items-center justify-between" id="tvads-preview-header">
        <div id="tvads-description-sub">
          <h3 className="text-sm font-semibold text-stone-200 flex items-center gap-2">
            <Tv className="w-4 h-4 text-amber-400" /> 1080p Lobby TV Advertiser (16:9)
          </h3>
          <p className="text-xs text-stone-400">Digital signage mock for restaurant flat screens or entrance monitors. Features automated rotation</p>
        </div>
        <div className="flex items-center gap-2 bg-stone-900 border border-stone-800 px-3 py-1 rounded-full text-xs" id="tvads-status">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-stone-300 hover:text-white transition flex items-center gap-1.5"
            id="tvads-play-pause-btn"
          >
            {isPlaying ? (
              <>
                <div className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />
                <span className="text-[10px] font-mono tracking-wider font-semibold">TICKING PREVIEW ({activeAd.duration}s cycles)</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 text-stone-300" />
                <span className="text-[10px] font-mono tracking-wider font-semibold text-stone-400">SIGNAGE PAUSED</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Elegant 16:9 Monitor casing with wall shadow simulation */}
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-8 border-stone-800 shadow-2xl bg-zinc-950 flex flex-col group" id="tvads-case">
        {/* Wall mounting ambient light reflection */}
        <div className="absolute -inset-10 bg-amber-500/10 blur-3xl opacity-30 pointer-events-none" />

        {/* Outer TV Screen Panel */}
        <div className={`relative flex-1 flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden transition-all duration-700 ${theme.bgClass}`} id="tvads-screen">
          {/* Subtle horizontal CRT TV scanlines */}
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] [background-size:100%_4px,6px_100%]" />
          
          {/* Snowflake fall vector backdrop */}
          <div className="absolute top-0 inset-x-0 bottom-0 pointer-events-none opacity-[0.08] bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:32px_32px]" />

          {/* Dynamic Gold Confetti & Snow falling flakes */}
          <ConfettiSnow />

          {/* TV Upper Logo/Header Panel */}
          <div className="flex items-center justify-between relative z-10" id="tvads-topbar">
            <div className="flex items-center gap-2" id="tvads-venue-group">
              {theme.id === 'coasters-tavern' ? (
                <CoastersLogo size={32} variant="gold" className="shrink-0 -my-1" />
              ) : (
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              )}
              <span className="font-display font-black tracking-widest text-xs md:text-sm text-stone-100 uppercase">
                {venueName || "COASTERS TAVERN"} DIGITAL
              </span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 border border-white/10 px-3 py-1 rounded-full text-[10px] text-stone-300" id="tvads-weather-widget">
              <span className="text-amber-400 font-bold">❅ OUTDOORS: -4°C</span>
              <span className="text-stone-500 font-mono">|</span>
              <span className="font-mono">SNOWING HEAVILY</span>
            </div>
          </div>

          {/* Main Advert Slide Centerpiece */}
          <div className="flex flex-col items-center justify-center my-auto text-center max-w-3xl mx-auto gap-4 relative z-10" id="tvads-center-body">
            
            {/* Dynamic visual badge */}
            <div className={`text-[10px] tracking-[0.4em] font-mono font-black uppercase text-amber-400 flex items-center justify-center gap-1 bg-white/5 py-1 px-4 rounded-full border border-white/10 max-w-max mx-auto filter drop-shadow`} id="tvads-intro-chip">
              🎙️ HOUSE ANNOUNCEMENT
            </div>

            {/* Headline with incredible size and text gradient styling */}
            <h1 className="text-3xl sm:text-4.5xl md:text-5xl font-serif font-black tracking-widest leading-none my-1 uppercase" id="tvads-headline">
              <span className={theme.gradientText}>
                {activeAd.headline}
              </span>
            </h1>

            {/* Underline solstice separator */}
            <div className="flex items-center justify-center gap-6" id="tvads-accent-divider">
              <span className="w-16 h-[2px] bg-amber-400" />
              <Flame className="w-5 h-5 text-amber-300 animate-pulse" />
              <span className="w-16 h-[2px] bg-amber-400" />
            </div>

            {/* Subheadline description font */}
            <p className="text-xs sm:text-sm md:text-base font-mono tracking-wider text-white font-medium bg-black/25 px-4 py-1.5 rounded border border-white/5 inline-block" id="tvads-subheadline">
              {activeAd.subheadline}
            </p>

            {/* Beautiful accent tagline text */}
            <p className="text-xs sm:text-sm max-w-xl text-stone-300 italic px-6" id="tvads-accent-text">
              &ldquo;{activeAd.accentText}&rdquo;
            </p>

          </div>

          {/* Bottom TV Signage Marquee Ticker Tape */}
          <div className="absolute bottom-0 inset-x-0 bg-stone-950 font-mono text-[10px] md:text-xs py-2 border-t border-white/10 flex items-center overflow-hidden whitespace-nowrap z-20" id="tvads-ticker">
            <div className="bg-red-600 text-white font-bold px-3 py-1 text-[10px] absolute left-0 top-0 bottom-0 flex items-center z-30 uppercase tracking-widest" id="tvads-news-flash">
              LATEST NEWS
            </div>
            
            <div className="ticker-container pl-[120px] flex gap-20 animate-[marquee_25s_linear_infinite]" id="tvads-scrolling-ribbon">
              <span className="text-stone-300 flex items-center gap-1">
                ★ COZY UP BY THE HEARTH INDOORS WITH A CINNAMON MULLED NEGRONI AT ONLY $22.
              </span>
              <span className="text-amber-400 font-bold flex items-center gap-1">
                ★ JULY SOLSTICE FESTIVAL BOOKINGS REMAINING: ONLY 4 ALCOVES AVAILABLE! CALL +1 (555) 720-YULE.
              </span>
              <span className="text-stone-300 flex items-center gap-1">
                ★ LIVE ACOUSTIC HARP RECITAL & WINTER JAZZ DUO EVERY FRIDAY FROM 7:00 PM.
              </span>
              <span className="text-stone-300 flex items-center gap-1">
                ★ TRADITIONAL THREE-COURSE DEVASTATION STARTS FROM $115 PER HEAD.
              </span>
            </div>
          </div>

          {/* CSS Animation injected contextually to control the marquee scroll */}
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-spin-slow {
              animation: spin 8s linear infinite;
            }
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>

        </div>

        {/* TV Bottom Indicator Light bar */}
        <div className="bg-stone-900 border-t border-stone-950 py-1 flex items-center justify-between px-6 shrink-0 relative" id="tvads-bezel-bottom">
          <span className="text-[9px] font-mono text-stone-600 uppercase tracking-widest" id="tvads-panel-brand">
            ❅ MID-WINTER 1080P DIGITAL SIGNAGE
          </span>
          <div className="flex items-center gap-3" id="tv-indicator-led-panel">
            <span className="text-[8px] font-mono text-stone-700">1920 x 1080 PX</span>
            <div className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} id="tv-led-light" />
          </div>
        </div>

      </div>

      {/* TV Advert selector dots */}
      <div className="flex justify-center gap-1.5 mt-1" id="tv-ads-manual-navbar">
        {ads.map((ad, idx) => (
          <button
            key={ad.id}
            onClick={() => {
              setCurrentAdIndex(idx);
              setIsPlaying(false);
            }}
            className={`px-3 py-1 rounded text-xs font-mono font-medium border transition-all ${
              idx === currentAdIndex
                ? 'bg-amber-400 border-amber-400 text-stone-950 font-bold'
                : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-white'
            }`}
            id={`tv-ad-select-${idx}`}
          >
            AD {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
