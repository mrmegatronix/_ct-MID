import React, { useState, useEffect } from 'react';
import { Slide, ThemeColors } from '../types';
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink, Calendar, Compass, Star, Sparkles } from 'lucide-react';
import CoastersLogo from './CoastersLogo';
import ConfettiSnow from './ConfettiSnow';

interface SlideshowPreviewProps {
  slides: Slide[];
  theme: ThemeColors;
  venueName: string;
}

export default function SlideshowPreview({ slides, theme, venueName }: SlideshowPreviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide: Slide = slides[currentIndex] || slides[0] || {
    id: "fallback",
    title: "No slide configured",
    subtitle: "SETUP SLIDES",
    description: "Please add slide data in the configuration sidebar.",
    imageUrl: "",
    features: []
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full" id="slideshow-root">
      {!window.location.search.includes('display=true') && (
        <div className="flex items-center justify-between" id="slideshow-preview-header">
          <div id="slideshow-description-sub">
            <h3 className="text-sm font-semibold text-stone-200 flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" /> Interactive Web Slideshow
            </h3>
            <p className="text-xs text-stone-400">Perfect for event display screens, website landing sections or table-tablet displays</p>
          </div>
          <div className="flex items-center gap-2 bg-stone-900 border border-stone-800 px-3 py-1 rounded-full text-xs" id="slideshow-controls">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-stone-300 hover:text-white transition flex items-center gap-1.5"
              id="slideshow-play-pause-btn"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-stone-300 text-stone-300" />
                  <span className="text-[10px] font-mono">AUTOPLAYING</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-stone-300 text-stone-300" />
                  <span className="text-[10px] font-mono">PAUSED</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* 16:9 Display Frame with realistic TV bezel style */}
      <div 
        className={`relative w-full ${window.location.search.includes('display=true') ? 'h-full' : 'aspect-video rounded-2xl border border-stone-800 shadow-2xl'} overflow-hidden bg-zinc-950 flex flex-col group`} 
        id="slideshow-tv-frame"
      >
        {/* Ambient background glow matching current slide if available */}
        {currentSlide.imageUrl && (
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105 blur-2xl opacity-20 transition-all duration-1000"
            style={{ backgroundImage: `url(${currentSlide.imageUrl})` }}
            id="slideshow-blur-bg"
          />
        )}

        {/* Content canvas container referencing the theme styling */}
        <div className={`relative flex-1 flex flex-col justify-between p-8 sm:p-12 md:p-16 transition-all duration-500 ${theme.bgClass}`} id="slideshow-canvas">
          {/* Subtle snowflake/star elements overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
          
          {/* Gold & Snow falling confetti flakes */}
          <ConfettiSnow />
          
          {/* Top header navigation */}
          <div className="flex items-center justify-between border-b pb-4 border-white/10 relative z-10" id="slideshow-top-bar">
            <span className="font-display font-bold tracking-widest text-xs sm:text-sm text-stone-100 flex items-center gap-3">
              {theme.id === 'coasters-tavern' ? (
                <CoastersLogo size={34} variant="gold" className="shrink-0" />
              ) : (
                <Star className="w-4 h-4 fill-amber-400 text-amber-400 animate-spin-slow" />
              )}
              <span>{venueName || "COASTERS TAVERN"}</span>
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase font-mono bg-white/10 px-3 py-1 rounded-full text-stone-300">
              ❅ Mid-Winter Solstice ❅
            </span>
          </div>

          {/* Main Slide Split Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto relative z-10" id="slideshow-main-body">
            <div className="md:col-span-7 flex flex-col gap-4 text-left" id="slideshow-text-block">
              {currentSlide.subtitle && (
                <span className={`text-[10px] sm:text-xs tracking-widest font-mono font-bold uppercase ${theme.accentClass}`} id="slideshow-subtitle">
                  {currentSlide.subtitle}
                </span>
              )}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-widest leading-tight uppercase" id="slideshow-title">
                <span className={theme.gradientText}>{currentSlide.title}</span>
              </h2>
              <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${theme.textSecondary}`} id="slideshow-description">
                {currentSlide.description}
              </p>

              {/* Dynamic Feature list if available */}
              {currentSlide.features && currentSlide.features.length > 0 && (
                <div className="flex flex-col gap-2 mt-2" id="slideshow-features">
                  {currentSlide.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs" id={`feature-item-${fIdx}`}>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-stone-300 font-sans">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Slide Image inside beautiful framed design */}
            <div className="md:col-span-5 relative" id="slideshow-image-container">
              {currentSlide.imageUrl ? (
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/10 group-hover:scale-[1.02] transition-all duration-500 bg-black/30" id="slideshow-image-wrapper">
                  <img
                    src={currentSlide.imageUrl}
                    alt={currentSlide.title}
                    referrerPolicy="no-referrer"
                    className={`w-full aspect-4/3 select-none transition-all duration-300 ${
                      currentSlide.imageUrl.includes('coasterstavern.co.nz') || currentSlide.imageUrl.includes('coasters-new-600')
                        ? 'object-contain p-6 bg-black/45'
                        : 'object-cover'
                    }`}
                    id="slideshow-image-tag"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                <div className="w-full aspect-4/3 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-stone-500 italic text-sm" id="slideshow-image-placeholder">
                  No image specified
                </div>
              )}
            </div>
          </div>

          {/* Bottom Indicators & Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10" id="slideshow-footer">
            <div className="flex gap-1.5" id="slideshow-bullets-container">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={`w-7 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-amber-400 w-10' : 'bg-white/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  id={`slideshow-bullet-${idx}`}
                />
              ))}
            </div>
            
            <div className="text-[10px] md:text-xs font-mono text-stone-400" id="slideshow-index-tracker">
              DISPLAYING SLIDE <span className="text-amber-400 font-bold">{currentIndex + 1}</span> OF {slides.length}
            </div>
          </div>

          {/* Interactive Navigation Chevron buttons visible on hover */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/75 text-white/70 hover:text-white border border-white/10 transition-all opacity-0 group-hover:opacity-100 z-20"
            id="slideshow-prev-arrow"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/75 text-white/70 hover:text-white border border-white/10 transition-all opacity-0 group-hover:opacity-100 z-20"
            id="slideshow-next-arrow"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
