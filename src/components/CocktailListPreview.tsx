import React from 'react';
import { CocktailItem, ThemeColors } from '../types';
import { Wine, Sparkles, Flame, Snowflake, Star, Shrub } from 'lucide-react';
import CoastersLogo from './CoastersLogo';

interface CocktailListPreviewProps {
  cocktails: CocktailItem[];
  theme: ThemeColors;
  venueName: string;
}

export default function CocktailListPreview({ cocktails, theme, venueName }: CocktailListPreviewProps) {
  
  // Custom flavor indicator renderer
  const renderProfilePoints = (points: number, iconType: 'fire' | 'sugar' | 'spice') => {
    const dots = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= points;
      let dotColor = 'bg-stone-700';
      if (isFilled) {
        if (iconType === 'fire') dotColor = 'bg-red-500';
        if (iconType === 'sugar') dotColor = 'bg-amber-400';
        if (iconType === 'spice') dotColor = 'bg-orange-500';
      }

      dots.push(
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-full transition-colors ${dotColor} ${
            isFilled ? 'shadow-sm animate-pulse' : 'opacity-30'
          }`}
          id={`flavor-dot-${iconType}-${i}`}
        />
      );
    }
    return <div className="flex gap-1" id={`flavor-dots-${iconType}`}>{dots}</div>;
  };

  return (
    <div className="flex flex-col gap-4 w-full" id="cocktails-root">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2" id="cocktails-preview-header">
        <div id="cocktails-description-sub">
          <h3 className="text-sm font-semibold text-stone-200 flex items-center gap-2">
            <Wine className="w-4 h-4 text-amber-400" /> Mid-Winter Cocktails &amp; Libations
          </h3>
          <p className="text-xs text-stone-400">Specially crafted lounge beverage list. Each cocktail features custom sensory spice matrices</p>
        </div>
        <div className="text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/20 px-3 py-1 rounded-full font-mono shrink-0 max-w-max" id="cocktails-lounge-badge">
          ✦ ALPINE APERITIF LIME &amp; SPICE SELECTION
        </div>
      </div>

      {/* Cocktails list layout */}
      <div className={`rounded-2xl p-6 sm:p-8 flex flex-col gap-8 transition-all duration-500 text-stone-100 ${theme.bgClass}`} id="cocktails-chamber">
        
        {/* Header Ribbon ornaments */}
        <div className="text-center pb-2 border-b border-white/10 flex flex-col items-center" id="cocktails-chamber-header">
          {theme.id === 'coasters-tavern' ? (
            <>
              <CoastersLogo size={62} variant="gold" className="mb-2" />
              <p className={`text-[10px] tracking-[0.35em] font-mono ${theme.accentClass} font-bold`}>
                COASTERS SALOON &amp; CELLAR
              </p>
            </>
          ) : (
            <p className={`text-[10px] tracking-[0.35em] font-mono ${theme.accentClass} font-bold`}>
              THE ALPINE BAR &amp; CELLAR
            </p>
          )}
          <h2 className="text-lg sm:text-xl font-serif font-black tracking-widest mt-1 uppercase" id="cocktails-headline-title">
            <span className={theme.gradientText}>❅ MID-WINTER APERITIFS ❅</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-1 text-[10px] text-stone-400 italic">
            <span>Infused over blazing fires &amp; frosty pines</span>
          </div>
        </div>

        {/* 2x2 grid representing individual recipes cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="cocktails-grid">
          {cocktails.map((cocktail) => (
            <div 
              key={cocktail.id} 
              className={`rounded-xl p-5 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden border ${theme.cardClass}`}
              id={`cocktail-card-${cocktail.id}`}
            >
              {/* Corner abstract glass glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-amber-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div id="cocktail-card-top-content">
                {/* Title and price lines */}
                <div className="flex items-start justify-between gap-2" id={`cocktail-title-row-${cocktail.id}`}>
                  <div className="flex flex-col gap-1 text-left" id={`cocktail-title-left-${cocktail.id}`}>
                    <div className="flex items-center gap-2" id={`cocktail-title-inner-${cocktail.id}`}>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide">
                        {cocktail.name}
                      </h4>
                      {cocktail.tag && (
                        <span className={`text-[8px] tracking-wider font-mono px-1.5 py-0.5 rounded uppercase font-bold shrink-0 ${theme.badgeClass}`}>
                          {cocktail.tag}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className={`font-mono text-xs sm:text-sm font-black text-amber-300 shrink-0 ${theme.accentClass}`}>
                    {cocktail.price}
                  </span>
                </div>

                {/* Narrative story of the cocktail formulation */}
                <p className="text-[10px] sm:text-xs text-stone-300 italic leading-relaxed my-3 text-left border-l-2 border-white/10 pl-2.5" id={`cocktail-story-${cocktail.id}`}>
                  &ldquo;{cocktail.story}&ldquo;
                </p>

                {/* Ingredients tag wrap */}
                <div className="flex flex-col gap-1.5 text-left mb-4" id={`cocktail-recipe-${cocktail.id}`}>
                  <span className="text-[9px] font-mono tracking-wider text-stone-400 uppercase font-semibold">Ingredients:</span>
                  <div className="flex flex-wrap gap-1.5" id={`cocktail-ing-chips-${cocktail.id}`}>
                    {cocktail.ingredients.map((ing, iIdx) => (
                      <span 
                        key={iIdx} 
                        className="text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/5 hover:bg-white/10 transition text-stone-300 font-sans"
                        id={`ing-chip-${cocktail.id}-${iIdx}`}
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom taste profile indices and garnishing details */}
              <div className="pt-3 border-t border-white/5 flex flex-col gap-3" id="cocktail-card-bottom-content">
                
                {/* Visual sliders depicting flavor scales */}
                <div className="grid grid-cols-3 gap-2" id={`taste-grid-${cocktail.id}`}>
                  
                  <div className="flex flex-col items-start gap-1" id={`sensory-sweetness-${cocktail.id}`}>
                    <span className="text-[8px] font-mono tracking-wider text-stone-400 uppercase">🍯 SWEETNESS</span>
                    {renderProfilePoints(cocktail.tasteProfile.sweetness, 'sugar')}
                  </div>

                  <div className="flex flex-col items-start gap-1" id={`sensory-warmth-${cocktail.id}`}>
                    <span className="text-[8px] font-mono tracking-wider text-stone-400 uppercase">🔥 WARMTH</span>
                    {renderProfilePoints(cocktail.tasteProfile.warmth, 'fire')}
                  </div>

                  <div className="flex flex-col items-start gap-1" id={`sensory-spiciness-${cocktail.id}`}>
                    <span className="text-[8px] font-mono tracking-wider text-stone-400 uppercase">🌶️ SPICINESS</span>
                    {renderProfilePoints(cocktail.tasteProfile.spiciness, 'spice')}
                  </div>

                </div>

                {/* Garnish footer label */}
                <div className="flex items-center gap-1.5 bg-black/15 py-1 px-2 rounded border border-white/5 text-left" id={`garnish-row-${cocktail.id}`}>
                  <span className="text-[8px] font-mono text-amber-400 uppercase font-bold shrink-0">✨ GARNISH:</span>
                  <span className="text-[9px] text-stone-300 font-sans italic truncate">{cocktail.garnish}</span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Chamber footer disclaimer */}
        <div className="text-center pt-2 border-t border-white/10 text-[9px] text-stone-400 font-mono" id="cocktails-chamber-footer">
          Please ask your host for additional holiday gin selections, fine scotch listings and hot spiced toddy options.
        </div>

      </div>
    </div>
  );
}
