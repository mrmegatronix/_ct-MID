import React from 'react';
import { MenuItem, ThemeColors } from '../types';
import { Printer, Sliders, AlertCircle, Sparkles } from 'lucide-react';
import CoastersLogo from './CoastersLogo';

interface MenuPreviewProps {
  menuItems: MenuItem[];
  theme: ThemeColors;
  venueName: string;
  tagline: string;
  contactInfo: string;
}

export default function MenuPreview({ menuItems, theme, venueName, tagline, contactInfo }: MenuPreviewProps) {
  // Group menu items by category
  const categories = {
    starters: menuItems.filter((i) => i.category === 'starters'),
    mains: menuItems.filter((i) => i.category === 'mains'),
    desserts: menuItems.filter((i) => i.category === 'desserts'),
  };

  const handlePrint = () => {
    // Elegant system print wrapper
    window.print();
  };

  return (
    <div className="flex flex-col gap-4 w-full" id="menu-root">
      <div className="flex items-center justify-between" id="menu-preview-header">
        <div id="menu-description-sub">
          <h3 className="text-sm font-semibold text-stone-200 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-amber-400" /> A4 Restaurant Menu (1:1.414)
          </h3>
          <p className="text-xs text-stone-400">Print-ready standard format. Layout scales perfectly to fit premium high-density cardstocks</p>
        </div>
        <button
          onClick={handlePrint}
          className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-stone-950 font-medium px-4 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors shadow-md"
          id="menu-print-btn"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print / Save PDF</span>
        </button>
      </div>

      {/* A4 Proportionate Outer Board */}
      <div className="w-full bg-stone-900/40 p-4 rounded-2xl border border-stone-800 flex justify-center" id="menu-a4-backing-board">
        {/* Actual A4 Container simulating paper */}
        <div 
          className={`w-full max-w-xl a4-ratio p-6 sm:p-10 flex flex-col justify-between relative shadow-2xl overflow-hidden transition-all duration-500 rounded-lg text-stone-100 ${theme.bgClass}`}
          id="menu-a4-canvas"
        >
          {/* Elegant Double Border Ornaments */}
          <div className="absolute inset-4 border border-white/10 pointer-events-none" />
          <div className="absolute inset-[18px] border-2 border-white/5 pointer-events-none" />
          
          {/* Top Corner Snowflake Ornaments */}
          <div className={`absolute top-6 left-6 text-xs select-none opacity-50 ${theme.accentClass}`}>❅</div>
          <div className={`absolute top-6 right-6 text-xs select-none opacity-50 ${theme.accentClass}`}>❅</div>
          <div className={`absolute bottom-6 left-6 text-xs select-none opacity-50 ${theme.accentClass}`}>❅</div>
          <div className={`absolute bottom-6 right-6 text-xs select-none opacity-50 ${theme.accentClass}`}>❅</div>

          {/* Menu Main Card Content */}
          <div className="relative z-10 flex flex-col h-full justify-between" id="menu-inner-layout">
            
            {/* Menu Header Section */}
            <div className="text-center pt-2 pb-4 flex flex-col items-center" id="menu-title-block">
              {theme.id === 'coasters-tavern' && (
                <CoastersLogo size={65} variant="gold" className="mb-2" />
              )}
              <div className={`text-[10px] tracking-[0.3em] font-display font-medium uppercase mb-1.5 ${theme.accentClass}`} id="menu-pre-title">
                YULETIDE CELEBRATIONS
              </div>
              <h1 className="text-xl sm:text-2xl font-serif font-black tracking-widest uppercase mb-1" id="menu-main-heading">
                <span className={theme.gradientText}>{venueName || "THE ALPINE SPRUCE"}</span>
              </h1>
              <div className="flex items-center justify-center gap-2 mb-2" id="menu-separator-header">
                <span className="w-4 h-[1px] bg-white/20" />
                <span className="text-xs italic font-serif opacity-75">Christmas Gastronomy Menu</span>
                <span className="w-4 h-[1px] bg-white/20" />
              </div>
              <p className="text-[10px] sm:text-xs text-stone-300 italic max-w-md mx-auto line-clamp-2" id="menu-tagline">
                &ldquo;{tagline || "Bask in our gilded winter warmth"}&rdquo;
              </p>
            </div>

            {/* Special Set Menu Promotional Banner */}
            <div className={`mt-1 mb-4 mx-4 p-3.5 rounded-xl border text-center transition-all duration-350 relative overflow-hidden bg-white/5 ${theme.borderClass}`} id="special-menu-promo-banner">
              <div className="absolute top-0 right-0 p-1 text-xs opacity-20 select-none">❅</div>
              <div className="absolute bottom-0 left-0 p-1 text-xs opacity-20 select-none">❅</div>
              <div className={`text-[10px] tracking-[0.3em] font-display font-black uppercase text-center flex items-center justify-center gap-1.5 mb-1 ${theme.accentClass}`} id="promo-banner-badge">
                <Sparkles className="w-3.5 h-3.5" /> SPECIAL $30.00 SET MENU • JULY 13TH - 19TH
              </div>
              <p className="text-[12px] text-white font-serif tracking-wide leading-relaxed font-bold">
                Enjoy a Premium <span className={theme.accentClass}>2-Course Roast Feast</span> for only <span className="text-amber-400 font-extrabold">$30.00</span> per head
              </p>
              <div className="mt-1.5 flex items-center justify-center gap-2 text-[9px] font-mono tracking-widest text-[#d6cfc5]/95">
                <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 font-extrabold uppercase animate-pulse">CHOOSE YOUR ROAST</span>
                <span>•</span>
                <span className="uppercase italic">Beef, Chicken, Pork + Christmas Pudding & Custard Included</span>
              </div>
            </div>

            {/* Menu Categories Grid / Layout */}
            <div className="flex-1 flex flex-col justify-around gap-6 py-2 my-auto" id="menu-sections-wrapper">
              
              {/* STARTERS CATEGORY */}
              {categories.starters.length > 0 && (
                <div className="flex flex-col gap-3" id="menu-starters-section">
                  <div className="flex flex-col items-center gap-1" id="menu-starters-header">
                    <h3 className="text-xs sm:text-sm font-serif font-black tracking-widest uppercase text-center" id="menu-starters-label">
                      <span className={theme.gradientText}>❅ LES ENTR&Eacute;ES ❅</span>
                    </h3>
                    <div className={`w-16 h-[1.5px] ${theme.dividerClass}`} />
                  </div>
                  <div className="grid grid-cols-1 gap-3.5" id="menu-starters-grid">
                    {categories.starters.map((item) => (
                      <div key={item.id} className="flex flex-col" id={`menu-item-${item.id}`}>
                        <div className="flex items-baseline justify-between gap-2" id={`menu-item-row-1-${item.id}`}>
                          <div className="flex items-center gap-1.5" id={`menu-item-name-block-${item.id}`}>
                            <span className="font-serif text-xs sm:text-sm font-semibold text-white tracking-wide">
                              {item.name}
                            </span>
                            {item.tag && (
                              <span className={`text-[8px] px-1.5 py-0.5 rounded font-mono uppercase shrink-0 font-bold ${theme.badgeClass}`}>
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <span className="w-3 mx-1 flex-1 border-b border-dotted border-white/20" />
                          <span className={`font-mono text-xs sm:text-sm font-semibold shrink-0 ${theme.accentClass}`}>
                            {item.price}
                          </span>
                        </div>
                        <p className="text-[10px] leading-relaxed text-stone-300 mt-0.5 max-w-[92%]" id={`menu-item-desc-${item.id}`}>
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MAINS CATEGORY */}
              {categories.mains.length > 0 && (
                <div className="flex flex-col gap-3" id="menu-mains-section">
                  <div className="flex flex-col items-center gap-1" id="menu-mains-header">
                    <h3 className="text-xs sm:text-sm font-serif font-black tracking-widest uppercase text-center" id="menu-mains-label">
                      <span className={theme.gradientText}>❅ LES PLATS PRINCIPAUX ❅</span>
                    </h3>
                    <div className={`w-16 h-[1.5px] ${theme.dividerClass}`} />
                  </div>
                  <div className="grid grid-cols-1 gap-3.5" id="menu-mains-grid">
                    {categories.mains.map((item) => (
                      <div key={item.id} className="flex flex-col" id={`menu-item-${item.id}`}>
                        <div className="flex items-baseline justify-between gap-2" id={`menu-item-row-1-${item.id}`}>
                          <div className="flex items-center gap-1.5" id={`menu-item-name-block-${item.id}`}>
                            <span className="font-serif text-xs sm:text-sm font-semibold text-white tracking-wide">
                              {item.name}
                            </span>
                            {item.tag && (
                              <span className={`text-[8px] px-1.5 py-0.5 rounded font-mono uppercase shrink-0 font-bold ${theme.badgeClass}`}>
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <span className="w-3 mx-1 flex-1 border-b border-dotted border-white/20" />
                          <span className={`font-mono text-xs sm:text-sm font-semibold shrink-0 ${theme.accentClass}`}>
                            {item.price}
                          </span>
                        </div>
                        <p className="text-[10px] leading-relaxed text-stone-300 mt-0.5 max-w-[92%]" id={`menu-item-desc-${item.id}`}>
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DESSERTS CATEGORY */}
              {categories.desserts.length > 0 && (
                <div className="flex flex-col gap-3" id="menu-desserts-section">
                  <div className="flex flex-col items-center gap-1" id="menu-desserts-header">
                    <h3 className="text-xs sm:text-sm font-serif font-black tracking-widest uppercase text-center" id="menu-desserts-label">
                      <span className={theme.gradientText}>❅ LES DESSERTS ❅</span>
                    </h3>
                    <div className={`w-16 h-[1.5px] ${theme.dividerClass}`} />
                  </div>
                  <div className="grid grid-cols-1 gap-3.5" id="menu-desserts-grid">
                    {categories.desserts.map((item) => (
                      <div key={item.id} className="flex flex-col" id={`menu-item-${item.id}`}>
                        <div className="flex items-baseline justify-between gap-2" id={`menu-item-row-1-${item.id}`}>
                          <div className="flex items-center gap-1.5" id={`menu-item-name-block-${item.id}`}>
                            <span className="font-serif text-xs sm:text-sm font-semibold text-white tracking-wide">
                              {item.name}
                            </span>
                            {item.tag && (
                              <span className={`text-[8px] px-1.5 py-0.5 rounded font-mono uppercase shrink-0 font-bold ${theme.badgeClass}`}>
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <span className="w-3 mx-1 flex-1 border-b border-dotted border-white/20" />
                          <span className={`font-mono text-xs sm:text-sm font-semibold shrink-0 ${theme.accentClass}`}>
                            {item.price}
                          </span>
                        </div>
                        <p className="text-[10px] leading-relaxed text-stone-300 mt-0.5 max-w-[92%]" id={`menu-item-desc-${item.id}`}>
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Menu Footer Block */}
            <div className="text-center pt-3 border-t border-white/10" id="menu-footer-block">
              <span className={`text-[8px] tracking-wider uppercase font-mono px-3 py-1 rounded-full ${theme.badgeClass}`}>
                ❅ Dietary Requirements available upon consultation ❅
              </span>
              <p className="text-[8px] text-stone-400 font-mono mt-2" id="menu-footer-contact">
                {contactInfo}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
