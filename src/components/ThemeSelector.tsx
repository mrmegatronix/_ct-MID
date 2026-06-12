import React from 'react';
import { THEMES } from '../data/defaultTemplates';
import { ThemeId } from '../types';

interface ThemeSelectorProps {
  currentThemeId: ThemeId;
  onChange: (id: ThemeId) => void;
}

export default function ThemeSelector({ currentThemeId, onChange }: ThemeSelectorProps) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-black/20 rounded-xl border border-white/5" id="theme-selector-container">
      <div className="flex items-center justify-between mb-1" id="theme-selector-header">
        <label className="text-xs font-mono font-semibold tracking-wider text-amber-200/80 uppercase">
          ✦ Cohesive Solstice Theme
        </label>
        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full font-mono text-stone-300">
          Syncs all content layout formats
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" id="theme-grid">
        {THEMES.map((t) => {
          const isActive = t.id === currentThemeId;
          // Determine sample preview circles based on theme colors
          let circleColors = '';
          if (t.id === 'coasters-tavern') circleColors = 'from-stone-900 to-[#c5a059]';
          if (t.id === 'nordic-pine') circleColors = 'from-emerald-800 to-amber-500';
          if (t.id === 'frosted-ice') circleColors = 'from-slate-900 to-cyan-400';
          if (t.id === 'cozy-hearth') circleColors = 'from-rose-900 to-amber-300';

          return (
            <button
              key={t.id}
              onClick={() => onChange(t.id)}
              className={`relative flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-300 border text-left ${
                isActive
                  ? 'bg-white/15 border-amber-400 text-white shadow-md shadow-black/20'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-stone-400'
              }`}
              id={`theme-btn-${t.id}`}
            >
              <div className="flex flex-col" id={`theme-text-${t.id}`}>
                <span className="font-sans leading-tight font-medium">{t.name}</span>
                <span className="text-[9px] text-stone-500 font-mono mt-0.5 capitalize">
                  {t.id.replace('-', ' ')}
                </span>
              </div>
              <div
                className={`w-4 h-4 rounded-full bg-gradient-to-tr ${circleColors} shadow-inner border border-white/10 shrink-0 ml-2`}
                id={`theme-indicator-${t.id}`}
              />
              {isActive && (
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-black animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
