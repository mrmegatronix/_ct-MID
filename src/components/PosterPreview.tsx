import React from 'react';
import { PosterData, ThemeColors } from '../types';
import { Calendar, Clock, MapPin, Ticket, Flame, Printer, Snowflake, Star } from 'lucide-react';
import CoastersLogo from './CoastersLogo';

interface PosterPreviewProps {
  data: PosterData;
  theme: ThemeColors;
}

export default function PosterPreview({ data, theme }: PosterPreviewProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col gap-4 w-full" id="poster-root">
      <div className="flex items-center justify-between" id="poster-preview-header">
        <div id="poster-description-sub">
          <h3 className="text-sm font-semibold text-stone-200 flex items-center gap-2">
            <Snowflake className="w-4 h-4 text-amber-400" /> A3 Event Poster (1:1.414 Vertical)
          </h3>
          <p className="text-xs text-stone-400">High-impact vertical display poster designed to be printed for lounge noticeboards or guest flyers</p>
        </div>
        <button
          onClick={handlePrint}
          className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-stone-950 font-medium px-4 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors shadow-md"
          id="poster-print-btn"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print Poster / Save PDF</span>
        </button>
      </div>

      {/* Backdrop board simulating wood or dark masonry to frame the poster */}
      <div className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-850 via-stone-900 to-zinc-950 p-6 sm:p-10 rounded-2xl border border-stone-800 flex justify-center items-center shadow-inner" id="poster-frame-ambient">
        
        {/* Poster structure conforming strictly to A3 ratios */}
        <div 
          className={`w-full max-w-sm a3-ratio relative transition-all duration-500 rounded-lg shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden text-stone-100 ${theme.bgClass}`}
          id="poster-canvas"
        >
          {/* Subtle snowflake layout pattern in the backgrounds */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1.2px,transparent_1.2px)] [background-size:16px_16px] pointer-events-none" />
          
          {/* Fine gold vector lines forming classic thin borders */}
          <div className="absolute inset-3 border border-white/10" />
          <div className="absolute inset-4 sm:inset-5 border border-white/5" />
          
          {/* Ornate corner brackets decoration */}
          <div className={`absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 ${theme.borderClass}`} />
          <div className={`absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 ${theme.borderClass}`} />
          <div className={`absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 ${theme.borderClass}`} />
          <div className={`absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 ${theme.borderClass}`} />

          {/* Header Solstice Emblem */}
          <div className="flex flex-col items-center pt-2 gap-1 relative z-10" id="poster-emblem">
            {theme.id === 'coasters-tavern' ? (
              <CoastersLogo size={75} variant="gold" className="mb-1" />
            ) : (
              <div className="relative" id="poster-star-wrapper">
                <Star className="w-8 h-8 fill-amber-400 text-amber-400 animate-pulse" style={{ filter: 'drop-shadow(0 0 12px rgba(245, 158, 11, 0.5))' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-stone-900 text-[10px] font-bold font-mono">✦</span>
                </div>
              </div>
            )}
            <div className={`text-[9px] tracking-[0.35em] font-mono hover:scale-102 transition ${theme.accentClass} font-bold mt-1.5`}>
              THE WINTER SOLSTICE BANQUET
            </div>
          </div>

          {/* Central Typography & Headline section */}
          <div className="text-center my-auto py-4 relative z-10" id="poster-hero-text">
            <h1 className="text-2xl sm:text-3.5xl font-serif font-black tracking-widest leading-none" id="poster-title-line">
              <span className={theme.gradientText}>{data.title || "MID-WINTER CHRISTMAS"}</span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 my-3" id="poster-headline-divider">
              <span className={`w-12 h-[1px] bg-gradient-to-r from-transparent to-white/40`} />
              <span className="text-[10px] uppercase tracking-widest font-mono text-stone-300">FEAST &amp; FESTIVITIES</span>
              <span className={`w-12 h-[1px] bg-gradient-to-l from-transparent to-white/40`} />
            </div>

            <p className="text-xs sm:text-sm text-stone-200 font-sans italic max-w-sm mx-auto font-medium px-4 leading-relaxed" id="poster-subtitle">
              &ldquo;{data.subtitle || "A Solstice Feast of Fine Spices & Roaring Candles"}&rdquo;
            </p>
          </div>

          {/* Key Event Details Grid */}
          <div className="flex flex-col gap-3 my-2 relative z-10" id="poster-details-container">
            
            {/* Boxed detail modules */}
            <div className={`rounded-xl p-3 flex items-center gap-3 ${theme.cardClass}`} id="poster-module-date">
              <div className="p-2 rounded bg-white/10" id="poster-date-icon">
                <Calendar className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-left" id="poster-date-text-block">
                <div className="text-[9px] font-mono text-stone-400 tracking-wider">EVENT DATE</div>
                <div className="text-xs sm:text-sm font-semibold text-white">{data.dateText || "Saturday, July 25th"}</div>
              </div>
            </div>

            <div className={`rounded-xl p-3 flex items-center gap-3 ${theme.cardClass}`} id="poster-module-time">
              <div className="p-2 rounded bg-white/10" id="poster-time-icon">
                <Clock className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-left" id="poster-time-text-block">
                <div className="text-[9px] font-mono text-stone-400 tracking-wider font-semibold">ARRIVAL CEREMONY</div>
                <div className="text-xs sm:text-sm font-semibold text-white">{data.timeText || "6:30 PM Onwards"}</div>
              </div>
            </div>

            <div className={`rounded-xl p-3 flex items-center gap-3 ${theme.cardClass}`} id="poster-module-location">
              <div className="p-2 rounded bg-white/10" id="poster-loc-icon">
                <MapPin className="w-4 h-4 text-red-400" />
              </div>
              <div className="text-left" id="poster-loc-text-block">
                <div className="text-[9px] font-mono text-stone-400 tracking-wider font-semibold">THE CHALET VENTURE</div>
                <div className="text-xs sm:text-sm font-semibold text-white">{data.venueName || "Alpine Chalet & Meadows"}</div>
                <div className="text-[10px] text-stone-400 leading-tight">{data.venueAddress || "15 Golden Peak Road"}</div>
              </div>
            </div>

          </div>

          {/* Ticket pricing & CTA section */}
          <div className="flex flex-col items-center gap-1.5 pb-2 text-center relative z-10" id="poster-booking-footer">
            
            <div className={`text-[10px] sm:text-xs font-mono font-bold tracking-wider px-4 py-1.5 rounded-full ${theme.badgeClass}`} id="poster-ticket-badge">
              <span className="flex items-center gap-1 justify-center">
                <Ticket className="w-3.5 h-3.5" />
                {data.ticketInfo}
              </span>
            </div>

            <p className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-amber-400 mt-1 uppercase" id="poster-cta">
              ★ {data.ctaText || "TABLES HIGHLY RESERVED"} ★
            </p>

            <p className="text-[8px] sm:text-[9px] text-stone-300 italic max-w-[90%] mx-auto mt-1 leading-normal" id="poster-tagline">
              {data.tagline || "Escape the dark and bask in our gilded holiday lodge warmth."}
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}
