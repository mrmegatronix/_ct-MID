import React, { useState } from 'react';
import { PosterData, ThemeColors } from '../types';
import { Calendar, Clock, MapPin, Ticket, Printer, Snowflake, Star, Edit3 } from 'lucide-react';
import CoastersLogo from './CoastersLogo';

interface PosterPreviewProps {
  data: PosterData;
  theme: ThemeColors;
  onUpdatePoster?: (field: keyof PosterData, value: string) => void;
}

export default function PosterPreview({ data, theme, onUpdatePoster }: PosterPreviewProps) {
  const [editingId, setEditingId] = useState<string | null>(null);

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
          <p className="text-[11px] text-amber-400/95 font-semibold mt-1 flex items-center gap-1">
            <Edit3 className="w-3.5 h-3.5" /> 
            <span>Click directly on any text or event block on the poster below to edit in place!</span>
          </p>
        </div>
        <button
          onClick={handlePrint}
          className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-stone-950 font-medium px-4 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors shadow-md cursor-pointer"
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
          <div className="text-center my-auto py-4 relative z-10 w-full" id="poster-hero-text">
            {editingId === 'title' ? (
              <div className="flex justify-center w-full my-1">
                <input
                  type="text"
                  value={data.title}
                  onChange={(e) => onUpdatePoster?.('title', e.target.value)}
                  onBlur={() => setEditingId(null)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setEditingId(null);
                  }}
                  autoFocus
                  className="text-center font-serif text-lg sm:text-xl font-black tracking-widest uppercase bg-stone-850 text-white border border-amber-500/50 rounded px-2 py-1 w-full max-w-sm focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>
            ) : (
              <h1 
                onClick={() => setEditingId('title')}
                className="text-2xl sm:text-3.5xl font-serif font-black tracking-widest leading-none cursor-pointer hover:bg-white/5 hover:ring-1 hover:ring-amber-500/30 rounded p-1 transition-all group flex items-center justify-center gap-1.5" 
                id="poster-title-line"
                title="Click to edit poster title"
              >
                <span className={theme.gradientText}>{data.title || "MID-WINTER CHRISTMAS"}</span>
                <span className="text-[10px] text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">✏️</span>
              </h1>
            )}
            
            <div className="flex items-center justify-center gap-2 my-2" id="poster-headline-divider">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/40" />
              <span className="text-[10px] uppercase tracking-widest font-mono text-stone-300">FEAST &amp; FESTIVITIES</span>
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/40" />
            </div>

            {editingId === 'subtitle' ? (
              <div className="flex justify-center w-full">
                <input
                  type="text"
                  value={data.subtitle}
                  onChange={(e) => onUpdatePoster?.('subtitle', e.target.value)}
                  onBlur={() => setEditingId(null)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setEditingId(null);
                  }}
                  autoFocus
                  className="text-center font-sans text-xs italic bg-stone-850 text-stone-200 border border-amber-500/50 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-amber-400 w-full max-w-sm"
                />
              </div>
            ) : (
              <p 
                onClick={() => setEditingId('subtitle')}
                className="text-xs sm:text-sm text-stone-200 font-sans italic max-w-sm mx-auto font-medium px-4 leading-relaxed cursor-pointer hover:bg-white/5 hover:ring-1 hover:ring-amber-400/20 rounded p-1 transition-all group flex items-center justify-center gap-1.5" 
                id="poster-subtitle"
                title="Click to edit poster subtitle"
              >
                <span>&ldquo;{data.subtitle || "A Solstice Feast of Fine Spices & Roaring Candles"}&rdquo;</span>
                <span className="text-[10px] text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">✏️</span>
              </p>
            )}
          </div>

          {/* Key Event Details Grid */}
          <div className="flex flex-col gap-3 my-2 relative z-10 w-full" id="poster-details-container">
            
            {/* Boxed detail modules */}
            <div className={`rounded-xl p-3 flex items-center gap-3 ${theme.cardClass}`} id="poster-module-date">
              <div className="p-2 rounded bg-white/10" id="poster-date-icon">
                <Calendar className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-left flex-1" id="poster-date-text-block">
                <div className="text-[9px] font-mono text-stone-400 tracking-wider">EVENT DATE</div>
                {editingId === 'dateText' ? (
                  <input
                    type="text"
                    value={data.dateText}
                    onChange={(e) => onUpdatePoster?.('dateText', e.target.value)}
                    onBlur={() => setEditingId(null)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') setEditingId(null);
                    }}
                    autoFocus
                    className="font-semibold text-xs bg-stone-850 text-white border border-amber-500/40 rounded px-1.5 py-0.5 focus:outline-none focus:ring-1 focus:ring-amber-400 w-full"
                  />
                ) : (
                  <div 
                    onClick={() => setEditingId('dateText')}
                    className="text-xs sm:text-sm font-semibold text-white cursor-pointer hover:bg-white/5 hover:ring-1 hover:ring-amber-400/20 rounded px-1 py-0.5 flex items-center justify-between group transition-all"
                  >
                    <span>{data.dateText || "Saturday, July 25th"}</span>
                    <span className="text-[9px] text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">✏️</span>
                  </div>
                )}
              </div>
            </div>

            <div className={`rounded-xl p-3 flex items-center gap-3 ${theme.cardClass}`} id="poster-module-time">
              <div className="p-2 rounded bg-white/10" id="poster-time-icon">
                <Clock className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-left flex-1" id="poster-time-text-block">
                <div className="text-[9px] font-mono text-stone-400 tracking-wider font-semibold">ARRIVAL CEREMONY</div>
                {editingId === 'timeText' ? (
                  <input
                    type="text"
                    value={data.timeText}
                    onChange={(e) => onUpdatePoster?.('timeText', e.target.value)}
                    onBlur={() => setEditingId(null)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') setEditingId(null);
                    }}
                    autoFocus
                    className="font-semibold text-xs bg-stone-850 text-white border border-amber-500/40 rounded px-1.5 py-0.5 focus:outline-none focus:ring-1 focus:ring-amber-400 w-full"
                  />
                ) : (
                  <div 
                    onClick={() => setEditingId('timeText')}
                    className="text-xs sm:text-sm font-semibold text-white cursor-pointer hover:bg-white/5 hover:ring-1 hover:ring-amber-400/20 rounded px-1 py-0.5 flex items-center justify-between group transition-all"
                  >
                    <span>{data.timeText || "6:30 PM Onwards"}</span>
                    <span className="text-[9px] text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">✏️</span>
                  </div>
                )}
              </div>
            </div>

            <div className={`rounded-xl p-3 flex items-center gap-3 ${theme.cardClass}`} id="poster-module-location">
              <div className="p-2 rounded bg-white/10" id="poster-loc-icon">
                <MapPin className="w-4 h-4 text-red-400" />
              </div>
              <div className="text-left flex-1" id="poster-loc-text-block">
                <div className="text-[9px] font-mono text-stone-400 tracking-wider font-semibold">THE CHALET VENTURE</div>
                {editingId === 'venueName' ? (
                  <input
                    type="text"
                    value={data.venueName}
                    onChange={(e) => onUpdatePoster?.('venueName', e.target.value)}
                    onBlur={() => setEditingId(null)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') setEditingId(null);
                    }}
                    autoFocus
                    className="font-semibold text-xs bg-stone-850 text-white border border-amber-500/40 rounded px-1.5 py-0.5 focus:outline-none focus:ring-1 focus:ring-amber-400 w-full"
                  />
                ) : (
                  <div 
                    onClick={() => setEditingId('venueName')}
                    className="text-xs sm:text-sm font-semibold text-white cursor-pointer hover:bg-white/5 hover:ring-1 hover:ring-amber-400/20 rounded px-1 py-0.5 flex items-center justify-between group transition-all"
                  >
                    <span>{data.venueName || "Alpine Chalet & Meadows"}</span>
                    <span className="text-[9px] text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">✏️</span>
                  </div>
                )}
                {editingId === 'venueAddress' ? (
                  <input
                    type="text"
                    value={data.venueAddress}
                    onChange={(e) => onUpdatePoster?.('venueAddress', e.target.value)}
                    onBlur={() => setEditingId(null)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') setEditingId(null);
                    }}
                    autoFocus
                    className="text-[10px] bg-stone-850 text-stone-300 border border-amber-500/40 rounded px-1.5 py-0.5 focus:outline-none focus:ring-1 focus:ring-amber-400 w-full mt-1"
                  />
                ) : (
                  <div 
                    onClick={() => setEditingId('venueAddress')}
                    className="text-[10px] text-stone-300 leading-tight cursor-pointer hover:bg-white/5 hover:ring-1 hover:ring-amber-400/20 rounded px-1 py-0.5 flex items-center justify-between group mt-0.5 transition-all"
                  >
                    <span>{data.venueAddress || "15 Golden Peak Road"}</span>
                    <span className="text-[8px] text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">✏️</span>
                  </div>
                )}
              </div>
            </div>

            {/* Mid-Winter Special Events & Promos on the Poster */}
            <div className="grid grid-cols-2 gap-2 my-1.5 relative z-10" id="poster-events-grid">
              <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 text-left" id="poster-event-quiz">
                <span className={`text-[8px] font-mono font-black tracking-widest block uppercase ${theme.accentClass}`}>🎙️ QUIZ SHOWDOWN</span>
                <span className="text-[10px] font-serif font-extrabold text-white block mt-0.5">Quiz Nite • Wed 15th July</span>
                <span className="text-[8px] text-stone-300 block leading-tight mt-0.5">Wednesday, July 15th — Trivia battles by the guest fire, spot prizes & bar tabs. <b className="text-amber-400 font-bold block mt-0.5">🏆 Prizes for best dressed!</b></span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 text-left" id="poster-event-karaoke">
                <span className={`text-[8px] font-mono font-black tracking-widest block uppercase ${theme.accentClass}`}>🎵 GOLDEN MIC STAGE</span>
                <span className="text-[10px] font-serif font-extrabold text-white block mt-0.5">Karaoke • Sat 18th July</span>
                <span className="text-[8px] text-stone-300 block leading-tight mt-0.5">Saturday, July 18th at 8:00 PM — Sing classics next to roaring firewood. <b className="text-amber-400 font-bold block mt-0.5">🏆 Prizes for best dressed!</b></span>
              </div>
            </div>

            {/* Special Menu Advertisement banner on Poster */}
            <div className={`border rounded-lg py-2 px-3 text-center my-1 relative z-10 bg-white/5 ${theme.borderClass}`} id="poster-special-menu-box">
              <span className="text-[8px] font-mono uppercase tracking-widest text-amber-400 block font-bold animate-pulse">❄️ SEVEN DAY WINTER FESTIVAL FESTIVITIES ❄️</span>
              <p className="text-[10px] sm:text-[11px] font-bold text-white leading-tight font-serif mt-0.5">
                Mid-Winter Special Set Menu
              </p>
              <span className="text-[8px] text-stone-300 uppercase font-mono tracking-widest block mt-0.5">Running July 13th until 19th</span>
            </div>

          </div>

          {/* Ticket pricing & CTA section */}
          <div className="flex flex-col items-center gap-1.5 pb-2 text-center relative z-10" id="poster-booking-footer">
            
            {editingId === 'ticketInfo' ? (
              <input
                type="text"
                value={data.ticketInfo}
                onChange={(e) => onUpdatePoster?.('ticketInfo', e.target.value)}
                onBlur={() => setEditingId(null)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setEditingId(null);
                }}
                autoFocus
                className="font-mono text-center text-xs bg-stone-850 text-white border border-amber-500/50 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-amber-400 w-full max-w-xs"
              />
            ) : (
              <div 
                onClick={() => setEditingId('ticketInfo')}
                className={`text-[10px] sm:text-xs font-mono font-bold tracking-wider px-4 py-1.5 rounded-full ${theme.badgeClass} cursor-pointer hover:bg-white/10 hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5 group`}
                id="poster-ticket-badge"
                title="Click to edit ticket info"
              >
                <Ticket className="w-3.5 h-3.5 text-amber-400" />
                <span>{data.ticketInfo}</span>
                <span className="text-[10px] text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">✏️</span>
              </div>
            )}

            {editingId === 'ctaText' ? (
              <input
                type="text"
                value={data.ctaText}
                onChange={(e) => onUpdatePoster?.('ctaText', e.target.value)}
                onBlur={() => setEditingId(null)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setEditingId(null);
                }}
                autoFocus
                className="font-bold text-center text-xs bg-stone-850 text-amber-400 border border-amber-500/50 rounded px-2 py-0.5 focus:outline-none focus:ring-1 focus:ring-amber-400 w-full max-w-xs uppercase"
              />
            ) : (
              <p 
                onClick={() => setEditingId('ctaText')}
                className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-amber-400 mt-1 uppercase cursor-pointer hover:bg-white/5 hover:ring-1 hover:ring-amber-400/20 rounded px-1.5 py-0.5 flex items-center gap-1.5 group transition-all"
                id="poster-cta"
                title="Click to edit CTA text"
              >
                <span>★ {data.ctaText || "TABLES HIGHLY RESERVED"} ★</span>
                <span className="text-[10px] text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">✏️</span>
              </p>
            )}

            {editingId === 'tagline' ? (
              <input
                type="text"
                value={data.tagline}
                onChange={(e) => onUpdatePoster?.('tagline', e.target.value)}
                onBlur={() => setEditingId(null)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setEditingId(null);
                }}
                autoFocus
                className="font-mono text-center text-[10px] bg-stone-850 text-stone-200 border border-amber-500/50 rounded px-2 py-0.5 focus:outline-none focus:ring-1 focus:ring-amber-400 w-full max-w-xs"
              />
            ) : (
              <p 
                onClick={() => setEditingId('tagline')}
                className="text-[8px] sm:text-[9px] text-stone-300 italic max-w-[90%] mx-auto mt-1 leading-normal cursor-pointer hover:bg-white/5 hover:ring-1 hover:ring-amber-400/20 rounded p-1 transition-all group flex items-center justify-center gap-1.5"
                id="poster-tagline"
                title="Click to edit tagline"
              >
                <span>{data.tagline || "Escape the dark and bask in our gilded holiday lodge warmth."}</span>
                <span className="text-[9px] text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 pl-1">✏️</span>
              </p>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
