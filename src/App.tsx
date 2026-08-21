import React, { useState, useEffect } from 'react';
import { INITIAL_TEMPLATE_DATA, THEMES } from './data/defaultTemplates';
import { ThemeId, TemplateData } from './types';

// Importing Custom Component Previews
import ThemeSelector from './components/ThemeSelector';
import SlideshowPreview from './components/SlideshowPreview';
import MenuPreview from './components/MenuPreview';
import PosterPreview from './components/PosterPreview';
import TvAdvertsPreview from './components/TvAdvertsPreview';
import CocktailListPreview from './components/CocktailListPreview';
import CustomizerPanel from './components/CustomizerPanel';
import SnowConfetti from './components/SnowConfetti';
import GoldIcicles from './components/GoldIcicles';

import { 
  Compass, Sliders, Snowflake, Tv, Wine, Sparkles, Star, Printer, Layout, RotateCcw, Copy, Check
} from 'lucide-react';

export default function App() {
  const [currentThemeId, setCurrentThemeId] = useState<ThemeId>('coasters-funky');
  const [templateData, setTemplateData] = useState<TemplateData>(INITIAL_TEMPLATE_DATA);
  const [activeFormat, setActiveFormat] = useState<'slideshow' | 'menu' | 'poster' | 'tv-ads' | 'cocktails'>('slideshow');
  const [copied, setCopied] = useState(false);
  const [snowConfig, setSnowConfig] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);
  const [confettiTrigger, setConfettiTrigger] = useState(0);

  // Find currently active theme values
  const activeTheme = THEMES.find((t) => t.id === currentThemeId) || THEMES[0];

  // Initialize beautiful floating snowfall stars across preview
  useEffect(() => {
    const snowList = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      delay: Math.random() * 5,  // seconds
      duration: 6 + Math.random() * 10, // seconds to fall
      size: 4 + Math.random() * 12 // pixels
    }));
    setSnowConfig(snowList);
  }, []);

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all modifications to default mid-winter values?")) {
      setTemplateData(INITIAL_TEMPLATE_DATA);
    }
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(templateData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formats = [
    { id: 'slideshow', label: 'Web Slideshow', icon: <Compass className="w-4 h-4" />, desc: '16:9 Interactive Deck' },
    { id: 'menu', label: 'A4 Menu', icon: <Sliders className="w-4 h-4" />, desc: 'Print-ready Restaurant Menu' },
    { id: 'poster', label: 'A3 Poster', icon: <Snowflake className="w-4 h-4" />, desc: 'High-Impact Notice board' },
    { id: 'tv-ads', label: '1080p TV Adverts', icon: <Tv className="w-4 h-4" />, desc: 'Digital signage looping promos' },
    { id: 'cocktails', label: 'Cocktail List', icon: <Wine className="w-4 h-4" />, desc: 'Cozy lounge sensory menu' },
  ] as const;

  const isDisplayMode = window.location.search.includes('display=true');

  if (isDisplayMode) {
    return (
      <div className="w-screen h-screen bg-black overflow-hidden flex items-center justify-center">
        <SlideshowPreview 
          slides={templateData.slides} 
          theme={activeTheme} 
          venueName={templateData.generalSettings.venueName} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans relative overflow-hidden" id="app-root-container">
      
      {/* Background ambient snowflakes looping */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20" id="snowfall-ambient-viewport">
        {snowConfig.map((s) => (
          <div
            key={s.id}
            className="snowflake font-serif select-none"
            style={{
              left: `${s.left}%`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
              fontSize: `${s.size}px`,
              opacity: 0.15 + (s.size / 30),
            }}
          >
            ❆
          </div>
        ))}
      </div>

      {/* Main Top Header Strip */}
      <header className="bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-30" id="main-global-header">
        <div id="header-brand-title">
          <div className="flex items-center gap-2" id="header-logo-row">
            <span className="p-1 rounded bg-amber-500/10 text-amber-400 font-bold text-lg">❆</span>
            <h1 className="text-base font-black tracking-widest font-serif uppercase animate-pulse">
              <span className={activeTheme.gradientText}>MID-WINTER CHRISTMAS CREATOR</span>
            </h1>
          </div>
          <p className="text-xs text-zinc-400 font-sans mt-0.5">
            Synchronized styling and contents builder for five winter marketing layout formats
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center" id="global-header-actions">
          <button
            onClick={() => setConfettiTrigger(prev => prev + 1)}
            className="bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/10 hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer"
            title="Throw a celebratory burst of winter snow confetti!"
            id="btn-throw-confetti"
          >
            <span className="text-[14px] leading-none shrink-0 animate-pulse">❄️</span>
            <span>Let It Snow!</span>
          </button>
          <button
            onClick={() => window.print()}
            className="bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-900 border border-zinc-700 text-stone-100 hover:text-white px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer"
            title="Open print preview of active template format"
            id="btn-global-print"
          >
            <Printer className="w-3.5 h-3.5 text-blue-400" />
            <span>Print Preview</span>
          </button>
          <button
            onClick={handleCopyJson}
            className="bg-zinc-800 hover:bg-zinc-700 text-stone-300 hover:text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 border border-zinc-700 transition cursor-pointer"
            title="Copy current templates tree in full JSON format"
            id="btn-copy-config"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Data!' : 'Copy JSON Configuration'}</span>
          </button>
          <button
            onClick={handleReset}
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-red-400 px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 border border-zinc-700 transition"
            title="Reset default template values"
            id="btn-reset-config"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo Data</span>
          </button>
        </div>
      </header>

      {/* Grid containing Sidebar, theme picker, visualizer, and form editor */}
      <div className="flex-1 flex flex-col lg:flex-row relative z-20" id="main-application-frame">
        
        {/* Left Side: Formats Selector & Large live previews visualizer panel */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col gap-6 overflow-y-auto max-w-5xl mx-auto w-full" id="workspace-center-canvas">
          
          {/* Layout visual theme control dots block */}
          <div id="section-theme-widget">
            <ThemeSelector currentThemeId={currentThemeId} onChange={setCurrentThemeId} />
          </div>

          {/* Quick toggle tab buttons for the 5 requested assets  */}
          <div className="flex flex-col gap-2" id="format-selection-container">
            <div className="flex items-center justify-between px-1" id="format-header-meta">
              <label className="text-[10px] font-mono tracking-widest font-black text-amber-200/90 uppercase flex items-center gap-1">
                <Layout className="w-3.5 h-3.5" /> SELECT EXPORT FORMAT TEMPLATE
              </label>
              <span className="text-[10px] text-zinc-500 font-mono italic">
                Synced to active theme: <b className="text-zinc-300 font-semibold">{activeTheme.name}</b>
              </span>
            </div>

            {/* Formats Grid Row */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2" id="formats-grid">
              {formats.map((f) => {
                const isActive = activeFormat === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setActiveFormat(f.id)}
                    className={`relative flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all duration-350 cursor-pointer ${
                      isActive
                        ? 'bg-zinc-900 border-amber-400 text-white shadow-lg ring-1 ring-amber-400/20'
                        : 'bg-zinc-900/40 border-zinc-850 text-zinc-400 hover:bg-zinc-900/80 hover:text-zinc-200 hover:border-zinc-750'
                    }`}
                    id={`format-tab-btn-${f.id}`}
                  >
                    <div 
                      className={`p-1.5 rounded-lg mb-1.5 transition-colors ${
                        isActive ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-zinc-500'
                      }`}
                      id={`format-icon-bg-${f.id}`}
                    >
                      {f.icon}
                    </div>
                    <span className="text-xs font-bold leading-none">{f.label}</span>
                    <span className="text-[9px] text-zinc-500 mt-1 opacity-80 truncate max-w-full font-mono">{f.desc}</span>
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Core Interactive Preview Canvas Slot */}
          <div className="bg-zinc-900/50 rounded-2xl p-4 sm:p-6 pt-10 sm:pt-12 border border-zinc-850 flex items-center justify-center transition-all shadow-inner relative overflow-hidden" id="interactive-canvas-slot">
            <GoldIcicles />
            {activeFormat === 'slideshow' && (
              <SlideshowPreview 
                slides={templateData.slides} 
                theme={activeTheme} 
                venueName={templateData.generalSettings.venueName} 
              />
            )}
            
            {activeFormat === 'menu' && (
              <MenuPreview 
                menuItems={templateData.menuItems} 
                theme={activeTheme} 
                venueName={templateData.generalSettings.venueName}
                tagline={templateData.generalSettings.tagline}
                contactInfo={templateData.generalSettings.contactInfo}
                onUpdateGeneralSettings={(field, val) => {
                  setTemplateData(prev => ({
                    ...prev,
                    generalSettings: {
                      ...prev.generalSettings,
                      [field]: val
                    }
                  }));
                }}
                onUpdateMenuItem={(id, field, val) => {
                  const updatedItems = templateData.menuItems.map(item => 
                    item.id === id ? { ...item, [field]: val } : item
                  );
                  setTemplateData(prev => ({
                    ...prev,
                    menuItems: updatedItems
                  }));
                }}
              />
            )}

            {activeFormat === 'poster' && (
              <PosterPreview 
                data={templateData.poster} 
                theme={activeTheme} 
                onUpdatePoster={(field, val) => {
                  setTemplateData(prev => ({
                    ...prev,
                    poster: {
                      ...prev.poster,
                      [field]: val
                    }
                  }));
                }}
              />
            )}

            {activeFormat === 'tv-ads' && (
              <TvAdvertsPreview 
                ads={templateData.tvAds} 
                theme={activeTheme} 
                venueName={templateData.generalSettings.venueName}
              />
            )}

            {activeFormat === 'cocktails' && (
              <CocktailListPreview 
                cocktails={templateData.cocktails} 
                theme={activeTheme} 
                venueName={templateData.generalSettings.venueName}
              />
            )}
          </div>

          {/* Quick tips about synchronization */}
          <div className="p-3 bg-zinc-900/30 border border-zinc-850 rounded-xl flex items-center gap-3 text-left" id="hint-box">
             <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 shrink-0 font-bold text-xs">💡</div>
             <p className="text-[11px] text-zinc-400 leading-normal">
              <b>Synchronization Master:</b> Notice how changing any item in the right sidebar auto-updates the text content of its layout instantly, while changing the <b>Active Theme</b> updates the color palette, background filters, star accents, and borders across all five screens cohesively. Try editing custom prices or ingredients!
             </p>
          </div>

        </main>

        {/* Right Side: The content Customizer panel */}
        <aside className="w-full lg:w-96 shrink-0 lg:h-[calc(100vh-77px)] relative z-10" id="customizer-panel-aside">
          <CustomizerPanel data={templateData} onChange={setTemplateData} />
        </aside>

      </div>

      {/* Dynamic Celebration Snowy Confetti Layer */}
      <SnowConfetti triggerCount={confettiTrigger} />
    </div>
  );
}
