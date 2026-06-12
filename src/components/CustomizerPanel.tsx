import React, { useState } from 'react';
import { TemplateData, Slide, MenuItem, CocktailItem, TvAd } from '../types';
import { 
  Settings, Film, UtensilsCrossed, Wine, Projector, Info, Plus, Trash2, ChevronDown, ChevronUp, AlertCircle 
} from 'lucide-react';

interface CustomizerPanelProps {
  data: TemplateData;
  onChange: (updatedData: TemplateData) => void;
}

type TabType = 'general' | 'slides' | 'menu' | 'cocktails' | 'poster' | 'tv-ads';

export default function CustomizerPanel({ data, onChange }: CustomizerPanelProps) {
  const [activeTab, setActiveTab] = useState<TabType>('general');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const updateGeneral = (field: string, value: string) => {
    onChange({
      ...data,
      generalSettings: {
        ...data.generalSettings,
        [field]: value,
      },
    });
  };

  const updatePoster = (field: string, value: string) => {
    onChange({
      ...data,
      poster: {
        ...data.poster,
        [field]: value,
      },
    });
  };

  // Slideshow management
  const updateSlide = (idx: number, field: keyof Slide, value: any) => {
    const updatedSlides = [...data.slides];
    updatedSlides[idx] = {
      ...updatedSlides[idx],
      [field]: value,
    };
    onChange({ ...data, slides: updatedSlides });
  };

  const addSlide = () => {
    const newSlide: Slide = {
      id: `slide-${Date.now()}`,
      title: "Newly Added Cozy Promotion",
      subtitle: "SEASONAL EVENT",
      description: "Customize this slide using the sidebar controls! Describe your delicious roasted chestnuts, log cabins or events.",
      features: ["Complimentary drinks", "Premium fireside lounge seats"],
      imageUrl: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&q=80&w=800"
    };
    onChange({
      ...data,
      slides: [...data.slides, newSlide],
    });
    setExpandedIndex(data.slides.length);
  };

  const deleteSlide = (idx: number) => {
    onChange({
      ...data,
      slides: data.slides.filter((_, i) => i !== idx),
    });
    setExpandedIndex(null);
  };

  // Menu items management
  const updateMenuItem = (idx: number, field: keyof MenuItem, value: any) => {
    const updatedMenuItems = [...data.menuItems];
    updatedMenuItems[idx] = {
      ...updatedMenuItems[idx],
      [field]: value,
    };
    onChange({ ...data, menuItems: updatedMenuItems });
  };

  const addMenuItem = () => {
    const newItem: MenuItem = {
      id: `menu-${Date.now()}`,
      name: "Spiced Roasted Chestnuts",
      price: "$14.00",
      description: "Oven-roasted premium chestnuts glazed with maple syrup, sea salt and freshly cracked rosemary needles.",
      tag: "Winter Special",
      category: "starters"
    };
    onChange({
      ...data,
      menuItems: [...data.menuItems, newItem],
    });
    setExpandedIndex(data.menuItems.length);
  };

  const deleteMenuItem = (idx: number) => {
    onChange({
      ...data,
      menuItems: data.menuItems.filter((_, i) => i !== idx),
    });
    setExpandedIndex(null);
  };

  // Cocktails management
  const updateCocktailItem = (idx: number, field: keyof CocktailItem, value: any) => {
    const updatedCocktails = [...data.cocktails];
    if (field === 'ingredients') {
      // split comma separated text
      updatedCocktails[idx] = {
        ...updatedCocktails[idx],
        ingredients: typeof value === 'string' ? value.split(',').map((x) => x.trim()) : value,
      };
    } else {
      updatedCocktails[idx] = {
        ...updatedCocktails[idx],
        [field]: value,
      };
    }
    onChange({ ...data, cocktails: updatedCocktails });
  };

  const updateTasteProfile = (idx: number, key: 'sweetness' | 'warmth' | 'spiciness', val: number) => {
    const updatedCocktails = [...data.cocktails];
    updatedCocktails[idx] = {
      ...updatedCocktails[idx],
      tasteProfile: {
        ...updatedCocktails[idx].tasteProfile,
        [key]: val,
      },
    };
    onChange({ ...data, cocktails: updatedCocktails });
  };

  const addCocktail = () => {
    const newCocktail: CocktailItem = {
      id: `cocktail-${Date.now()}`,
      name: "Spiced Rum Toddy",
      price: "$19.50",
      story: "A steaming cup of gold spiced Caribbean rum infused with honey direct from high gardens, boiled water, cinnamon wood, and clove crowns.",
      ingredients: ["Gold Jamaican Rum", "Fireside Honey", "Warm Winter Water", "Mull Spices"],
      tasteProfile: { sweetness: 4, warmth: 5, spiciness: 3 },
      garnish: "Lemon slice and star anise flower float",
      tag: "Hot"
    };
    onChange({
      ...data,
      cocktails: [...data.cocktails, newCocktail],
    });
    setExpandedIndex(data.cocktails.length);
  };

  const deleteCocktail = (idx: number) => {
    onChange({
      ...data,
      cocktails: data.cocktails.filter((_, i) => i !== idx),
    });
    setExpandedIndex(null);
  };

  // TV Signage Ads management
  const updateTvAd = (idx: number, field: keyof TvAd, value: any) => {
    const updatedAds = [...data.tvAds];
    updatedAds[idx] = {
      ...updatedAds[idx],
      [field]: value,
    };
    onChange({ ...data, tvAds: updatedAds });
  };

  const addTvAd = () => {
    const newAd: TvAd = {
      id: `tv-${Date.now()}`,
      headline: "Mulled Wine Happy Hour",
      subheadline: "4PM TO 6PM DAILY IN COSE LOBBY",
      accentText: "Grab premium warm cinnamon spiced goblets for only ten bucks.",
      duration: 8
    };
    onChange({
      ...data,
      tvAds: [...data.tvAds, newAd],
    });
    setExpandedIndex(data.tvAds.length);
  };

  const deleteTvAd = (idx: number) => {
    onChange({
      ...data,
      tvAds: data.tvAds.filter((_, i) => i !== idx),
    });
    setExpandedIndex(null);
  };

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'general', label: 'Venue Info', icon: <Settings className="w-3.5 h-3.5" /> },
    { id: 'slides', label: 'Web Slides', icon: <Film className="w-3.5 h-3.5" /> },
    { id: 'menu', label: 'Menu List', icon: <UtensilsCrossed className="w-3.5 h-3.5" /> },
    { id: 'cocktails', label: 'Cocktails', icon: <Wine className="w-3.5 h-3.5" /> },
    { id: 'poster', label: 'Poster Info', icon: <SettingIcon /> },
    { id: 'tv-ads', label: 'TV Adverts', icon: <Projector className="w-3.5 h-3.5" /> },
  ];

  function SettingIcon() {
    return <Info className="w-3.5 h-3.5" />;
  }

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col h-full bg-zinc-900 border-l border-zinc-800" id="customizer-sidebar">
      {/* Sidebar header */}
      <div className="p-4 border-b border-zinc-800" id="sidebar-header">
        <h2 className="text-sm font-bold text-white tracking-wider flex items-center gap-2 uppercase">
          🔧 Template Content Editor
        </h2>
        <p className="text-[11px] text-zinc-400 mt-1 leading-normal">
          Change any text content, prices or slides below in real time to view changes instantly on all templates.
        </p>
      </div>

      {/* Tabs navigation panel */}
      <div className="flex bg-zinc-950/70 p-1 border-b border-zinc-850 gap-0.5 overflow-x-auto" id="sidebar-tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => {
              setActiveTab(t.id);
              setExpandedIndex(0);
            }}
            className={`flex items-center gap-1.5 px-3 py-2 text-[11px] font-semibold rounded-md whitespace-nowrap transition-all ${
              activeTab === t.id
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/20'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 border border-transparent'
            }`}
            id={`tab-button-${t.id}`}
          >
            {t.icon}
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      {/* Scrollable inputs pane */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 text-left" id="inputs-panel-scroll">
        
        {/* TAB 1: GENERAL VENUE SETTINGS */}
        {activeTab === 'general' && (
          <div className="flex flex-col gap-4" id="pane-general">
            <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-widest font-mono select-none">
              🏢 Core Venue Branding
            </h3>

            <div className="flex flex-col gap-1.5" id="group-logo">
              <label className="text-[10px] font-mono tracking-wider font-bold text-zinc-400">VENUE ICON / LOGO LINE</label>
              <input
                type="text"
                value={data.generalSettings.logoText}
                onChange={(e) => updateGeneral('logoText', e.target.value)}
                className="bg-zinc-950 border border-zinc-800 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                id="input-logo"
              />
            </div>

            <div className="flex flex-col gap-1.5" id="group-venue">
              <label className="text-[10px] font-mono tracking-wider font-bold text-zinc-400">VENUE OFFICIAL NAME</label>
              <input
                type="text"
                value={data.generalSettings.venueName}
                onChange={(e) => updateGeneral('venueName', e.target.value)}
                className="bg-zinc-950 border border-zinc-800 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400"
                id="input-venue"
              />
            </div>

            <div className="flex flex-col gap-1.5" id="group-tagline">
              <label className="text-[10px] font-mono tracking-wider font-bold text-zinc-400">WINTER PROMOTION TAGLINE</label>
              <textarea
                value={data.generalSettings.tagline}
                onChange={(e) => updateGeneral('tagline', e.target.value)}
                rows={2}
                className="bg-zinc-950 border border-zinc-800 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
                id="input-tagline"
              />
            </div>

            <div className="flex flex-col gap-1.5" id="group-contact">
              <label className="text-[10px] font-mono tracking-wider font-bold text-zinc-400">FOOTER RECONCILIATION DETAILS</label>
              <input
                type="text"
                value={data.generalSettings.contactInfo}
                onChange={(e) => updateGeneral('contactInfo', e.target.value)}
                className="bg-zinc-950 border border-zinc-800 rounded px-3 py-1.5 text-[10px] text-white focus:outline-none focus:border-amber-400 font-mono"
                id="input-contact"
              />
            </div>
          </div>
        )}

        {/* TAB 2: WEB SLIDESHOW MANAGEMENT */}
        {activeTab === 'slides' && (
          <div className="flex flex-col gap-3" id="pane-slides">
            <div className="flex items-center justify-between" id="section-head-slides">
              <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-widest font-mono">
                🎞️ Interactive Slides ({data.slides.length})
              </h3>
              <button
                onClick={addSlide}
                className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-[10px] font-semibold px-2.5 py-1 rounded flex items-center gap-1 border border-amber-500/20"
                id="add-slide-btn"
              >
                <Plus className="w-3 h-3" /> Add Slide
              </button>
            </div>

            <div className="flex flex-col gap-2" id="slides-list-accordion">
              {data.slides.map((slide, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <div key={slide.id} className="bg-zinc-950 border border-zinc-850 rounded-lg overflow-hidden" id={`slide-card-${idx}`}>
                    <div
                      onClick={() => toggleExpand(idx)}
                      className="p-3 bg-zinc-900/50 hover:bg-zinc-900 transition flex items-center justify-between cursor-pointer"
                      id={`slide-header-click-${idx}`}
                    >
                      <span className="text-xs font-semibold text-zinc-200 truncate pr-4">
                        Slide {idx + 1}: {slide.title || "Untitled Slide"}
                      </span>
                      <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => deleteSlide(idx)}
                          className="p-1 text-zinc-500 hover:text-red-400 hover:bg-zinc-800 rounded transition"
                          title="Delete slide"
                          id={`slide-del-${idx}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-zinc-500">
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </span>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="p-3 border-t border-zinc-850 flex flex-col gap-3 text-left" id={`slide-expanded-pane-${idx}`}>
                        <div className="flex flex-col gap-1" id={`slide-row-title-${idx}`}>
                          <label className="text-[9px] font-mono font-bold text-zinc-500">MAIN SLIDE HEADLINE</label>
                          <input
                            type="text"
                            value={slide.title}
                            onChange={(e) => updateSlide(idx, 'title', e.target.value)}
                            className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white"
                          />
                        </div>

                        <div className="flex flex-col gap-1" id={`slide-row-subtitle-${idx}`}>
                          <label className="text-[9px] font-mono font-bold text-zinc-500">UPPER SUBTITLE CARD</label>
                          <input
                            type="text"
                            value={slide.subtitle}
                            onChange={(e) => updateSlide(idx, 'subtitle', e.target.value)}
                            className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white uppercase font-mono"
                          />
                        </div>

                        <div className="flex flex-col gap-1" id={`slide-row-desc-${idx}`}>
                          <label className="text-[9px] font-mono font-bold text-zinc-500">DESCRIPTION SUMMARY</label>
                          <textarea
                            value={slide.description}
                            onChange={(e) => updateSlide(idx, 'description', e.target.value)}
                            rows={3}
                            className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white resize-none"
                          />
                        </div>

                        <div className="flex flex-col gap-1" id={`slide-row-img-${idx}`}>
                          <label className="text-[9px] font-mono font-bold text-zinc-500">IMAGE REPOSITORY URL</label>
                          <input
                            type="text"
                            value={slide.imageUrl || ''}
                            onChange={(e) => updateSlide(idx, 'imageUrl', e.target.value)}
                            className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-[10px] text-zinc-350 font-mono"
                          />
                        </div>

                        <div className="flex flex-col gap-1" id={`slide-row-feats-${idx}`}>
                          <label className="text-[9px] font-mono font-bold text-zinc-500">
                            PROMOTION BULLETS (COMMA SEPARATED)
                          </label>
                          <input
                            type="text"
                            value={slide.features?.join(', ') || ''}
                            onChange={(e) => updateSlide(idx, 'features', e.target.value.split(',').map(s => s.trim()))}
                            className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white"
                            placeholder="Bullet 1, Bullet 2..."
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: MENU FOOD ITEMS */}
        {activeTab === 'menu' && (
          <div className="flex flex-col gap-3" id="pane-menu">
            <div className="flex items-center justify-between" id="section-head-menu">
              <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-widest font-mono">
                🍴 Restaurant Menu ({data.menuItems.length})
              </h3>
              <button
                onClick={addMenuItem}
                className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-[10px] font-semibold px-2.5 py-1 rounded flex items-center gap-1 border border-amber-500/20"
                id="add-menu-btn"
              >
                <Plus className="w-3 h-3" /> Add Dish
              </button>
            </div>

            <div className="flex flex-col gap-2" id="menu-items-list-accordion">
              {data.menuItems.map((item, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <div key={item.id} className="bg-zinc-950 border border-zinc-850 rounded-lg overflow-hidden" id={`menu-subcard-${idx}`}>
                    <div
                      onClick={() => toggleExpand(idx)}
                      className="p-3 bg-zinc-900/50 hover:bg-zinc-900 transition flex items-center justify-between cursor-pointer"
                      id={`menu-item-head-click-${idx}`}
                    >
                      <div className="flex items-center gap-2 truncate pr-4 text-left" id={`menu-head-info-${idx}`}>
                        <span className="text-[10px] capitalize font-mono bg-zinc-800 text-amber-300 px-1.5 py-0.5 rounded shrink-0">
                          {item.category}
                        </span>
                        <span className="text-xs font-semibold text-zinc-200 truncate">
                          {item.name || "Untitled Dish"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => deleteMenuItem(idx)}
                          className="p-1 text-zinc-500 hover:text-red-400 hover:bg-zinc-800 rounded transition"
                          id={`menu-del-${idx}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-zinc-500">
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </span>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="p-3 border-t border-zinc-850 flex flex-col gap-3 text-left" id={`menu-expanded-${idx}`}>
                        <div className="grid grid-cols-2 gap-2" id={`menu-grid-row-1-${idx}`}>
                          <div className="flex flex-col gap-1" id={`menu-col-name-${idx}`}>
                            <label className="text-[9px] font-mono font-bold text-zinc-500">DISH NAME</label>
                            <input
                              type="text"
                              value={item.name}
                              onChange={(e) => updateMenuItem(idx, 'name', e.target.value)}
                              className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white"
                            />
                          </div>

                          <div className="flex flex-col gap-1" id={`menu-col-price-${idx}`}>
                            <label className="text-[9px] font-mono font-bold text-zinc-500">DECIMAL PRICE</label>
                            <input
                              type="text"
                              value={item.price}
                              onChange={(e) => updateMenuItem(idx, 'price', e.target.value)}
                              className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white font-mono"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2" id={`menu-grid-row-2-${idx}`}>
                          <div className="flex flex-col gap-1" id={`menu-col-cat-${idx}`}>
                            <label className="text-[9px] font-mono font-bold text-zinc-500">CATEGORY</label>
                            <select
                              value={item.category}
                              onChange={(e) => updateMenuItem(idx, 'category', e.target.value as any)}
                              className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white"
                            >
                              <option value="starters">Les Entrées (Starter)</option>
                              <option value="mains">Les Plats (Main)</option>
                              <option value="desserts">Les Desserts</option>
                            </select>
                          </div>

                          <div className="flex flex-col gap-1" id={`menu-col-tag-${idx}`}>
                            <label className="text-[9px] font-mono font-bold text-zinc-500">CORNER STAR TAG</label>
                            <select
                              value={item.tag || ''}
                              onChange={(e) => updateMenuItem(idx, 'tag', e.target.value || undefined)}
                              className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white"
                            >
                              <option value="">None</option>
                              <option value="Signature">Signature</option>
                              <option value="Winter Special">Winter Special</option>
                              <option value="Chef's Choice">Chef's Choice</option>
                              <option value="Vegan">Vegan</option>
                              <option value="Gluten-Free">Gluten-Free</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1" id={`menu-row-desc-${idx}`}>
                          <label className="text-[9px] font-mono font-bold text-zinc-500">DISH SUMMARY &amp; PAIRINGS</label>
                          <textarea
                            value={item.description}
                            onChange={(e) => updateMenuItem(idx, 'description', e.target.value)}
                            rows={2}
                            className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white resize-none"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: COCKTAIL SPECIAL */}
        {activeTab === 'cocktails' && (
          <div className="flex flex-col gap-3" id="pane-cocktails">
            <div className="flex items-center justify-between" id="section-head-cocktails">
              <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-widest font-mono">
                🍹 Custom Craft Cocktails ({data.cocktails.length})
              </h3>
              <button
                onClick={addCocktail}
                className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-[10px] font-semibold px-2.5 py-1 rounded flex items-center gap-1 border border-amber-500/20"
                id="add-cocktail-btn"
              >
                <Plus className="w-3 h-3" /> Add Cocktail
              </button>
            </div>

            <div className="flex flex-col gap-2" id="cocktail-items-list-accordion">
              {data.cocktails.map((cocktail, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <div key={cocktail.id} className="bg-zinc-950 border border-zinc-850 rounded-lg overflow-hidden" id={`cocktail-subcard-${idx}`}>
                    <div
                      onClick={() => toggleExpand(idx)}
                      className="p-3 bg-zinc-900/50 hover:bg-zinc-900 transition flex items-center justify-between cursor-pointer"
                      id={`cocktail-item-head-click-${idx}`}
                    >
                      <div className="flex items-center gap-2 truncate pr-4 text-left" id={`cocktail-head-info-${idx}`}>
                        <span className="text-[10px] font-mono bg-zinc-800 text-amber-300 px-1.5 py-0.5 rounded shrink-0 font-bold uppercase">
                          {cocktail.tag || "Cocktail"}
                        </span>
                        <span className="text-xs font-semibold text-zinc-200 truncate">
                          {cocktail.name || "Untitled Libation"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => deleteCocktail(idx)}
                          className="p-1 text-zinc-500 hover:text-red-400 hover:bg-zinc-800 rounded transition"
                          id={`cocktail-del-${idx}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-zinc-500">
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </span>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="p-3 border-t border-zinc-850 flex flex-col gap-3 text-left" id={`cocktail-expanded-${idx}`}>
                        <div className="grid grid-cols-2 gap-2" id={`cocktail-row-1-${idx}`}>
                          <div className="flex flex-col gap-1" id={`cocktail-col-name-${idx}`}>
                            <label className="text-[9px] font-mono font-bold text-zinc-500">COCKTAIL NAME</label>
                            <input
                              type="text"
                              value={cocktail.name}
                              onChange={(e) => updateCocktailItem(idx, 'name', e.target.value)}
                              className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white"
                            />
                          </div>

                          <div className="flex flex-col gap-1" id={`cocktail-col-price-${idx}`}>
                            <label className="text-[9px] font-mono font-bold text-zinc-500">COCKTAIL PRICE</label>
                            <input
                              type="text"
                              value={cocktail.price}
                              onChange={(e) => updateCocktailItem(idx, 'price', e.target.value)}
                              className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white font-mono"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2" id={`cocktail-row-2-${idx}`}>
                          <div className="flex flex-col gap-1" id={`cocktail-col-garnish-${idx}`}>
                            <label className="text-[9px] font-mono font-bold text-zinc-500">DECORATIVE GARNISH</label>
                            <input
                              type="text"
                              value={cocktail.garnish}
                              onChange={(e) => updateCocktailItem(idx, 'garnish', e.target.value)}
                              className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white"
                              placeholder="Orange twist & fire smoke"
                            />
                          </div>

                          <div className="flex flex-col gap-1" id={`cocktail-col-tag-${idx}`}>
                            <label className="text-[9px] font-mono font-bold text-zinc-500">BEVERAGE ACCENT TAG</label>
                            <select
                              value={cocktail.tag || ''}
                              onChange={(e) => updateCocktailItem(idx, 'tag', e.target.value || undefined)}
                              className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white"
                            >
                              <option value="">None</option>
                              <option value="Hot">Hot</option>
                              <option value="Spiced">Spiced</option>
                              <option value="Strong">Strong</option>
                              <option value="Festive">Festive</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1" id={`cocktail-row-elements-${idx}`}>
                          <label className="text-[9px] font-mono font-bold text-zinc-500">
                            INGREDIENTS list (COMMA SEPARATED)
                          </label>
                          <input
                            type="text"
                            value={cocktail.ingredients.join(', ')}
                            onChange={(e) => updateCocktailItem(idx, 'ingredients', e.target.value)}
                            className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white"
                          />
                        </div>

                        <div className="flex flex-col gap-1" id={`cocktail-row-story-${idx}`}>
                          <label className="text-[9px] font-mono font-bold text-zinc-500">THE COCKTAIL'S FOLKLORE STORY</label>
                          <textarea
                            value={cocktail.story}
                            onChange={(e) => updateCocktailItem(idx, 'story', e.target.value)}
                            rows={3}
                            className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white resize-none"
                          />
                        </div>

                        {/* Taste PROFILE sliders nested inside form list */}
                        <div className="bg-zinc-900/40 p-2.5 border border-zinc-850 rounded flex flex-col gap-2.5" id={`cocktail-taste-scales-${idx}`}>
                          <span className="text-[9px] font-mono text-amber-200 uppercase font-bold tracking-wider">Sensory Taste Intensities (1 to 5):</span>
                          
                          <div className="flex items-center justify-between text-xs" id={`taste-slider-sweetness-${idx}`}>
                            <span className="text-[10px] text-zinc-400 font-mono">🍯 SWEETNESS:</span>
                            <div className="flex items-center gap-2" id={`taste-range-wrap-sweetness-${idx}`}>
                              <input
                                type="range"
                                min="1"
                                max="5"
                                value={cocktail.tasteProfile.sweetness}
                                onChange={(e) => updateTasteProfile(idx, 'sweetness', parseInt(e.target.value))}
                                className="w-24 accent-amber-500"
                              />
                              <span className="font-mono text-zinc-200 text-xs w-4">{cocktail.tasteProfile.sweetness}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-xs" id={`taste-slider-warmth-${idx}`}>
                            <span className="text-[10px] text-zinc-400 font-mono">🔥 WARMTH:</span>
                            <div className="flex items-center gap-2" id={`taste-range-wrap-warmth-${idx}`}>
                              <input
                                type="range"
                                min="1"
                                max="5"
                                value={cocktail.tasteProfile.warmth}
                                onChange={(e) => updateTasteProfile(idx, 'warmth', parseInt(e.target.value))}
                                className="w-24 accent-red-500"
                              />
                              <span className="font-mono text-zinc-200 text-xs w-4">{cocktail.tasteProfile.warmth}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-xs" id={`taste-slider-spiciness-${idx}`}>
                            <span className="text-[10px] text-zinc-400 font-mono">🌶️ SPICINESS:</span>
                            <div className="flex items-center gap-2" id={`taste-range-wrap-spiciness-${idx}`}>
                              <input
                                type="range"
                                min="1"
                                max="5"
                                value={cocktail.tasteProfile.spiciness}
                                onChange={(e) => updateTasteProfile(idx, 'spiciness', parseInt(e.target.value))}
                                className="w-24 accent-orange-500"
                              />
                              <span className="font-mono text-zinc-200 text-xs w-4">{cocktail.tasteProfile.spiciness}</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 5: POSTER PREVIEW LABELS */}
        {activeTab === 'poster' && (
          <div className="flex flex-col gap-4" id="pane-poster">
            <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-widest font-mono">
              📢 A3 High-Impact Poster Advertising
            </h3>

            <div className="flex flex-col gap-1" id="group-poster-title">
              <label className="text-[10px] font-mono tracking-wider font-bold text-zinc-400">HUGE BANNER HEADLINE</label>
              <input
                type="text"
                value={data.poster.title}
                onChange={(e) => updatePoster('title', e.target.value)}
                className="bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-white uppercase font-serif font-black"
                id="input-poster-title"
              />
            </div>

            <div className="flex flex-col gap-1" id="group-poster-subtitle">
              <label className="text-[10px] font-mono tracking-wider font-bold text-zinc-400">DESCRIPTIVE SUB-BANNER LINE</label>
              <textarea
                value={data.poster.subtitle}
                onChange={(e) => updatePoster('subtitle', e.target.value)}
                rows={2}
                className="bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-white"
                id="input-poster-subtitle"
              />
            </div>

            <div className="grid grid-cols-2 gap-2" id="group-poster-datetime">
              <div className="flex flex-col gap-1" id="col-p-date">
                <label className="text-[10px] font-mono tracking-wider font-bold text-zinc-400">POSTER EVENT DATE</label>
                <input
                  type="text"
                  value={data.poster.dateText}
                  onChange={(e) => updatePoster('dateText', e.target.value)}
                  className="bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-white"
                  id="input-poster-date"
                />
              </div>

              <div className="flex flex-col gap-1" id="col-p-time">
                <label className="text-[10px] font-mono tracking-wider font-bold text-zinc-400">TIMING REMARK</label>
                <input
                  type="text"
                  value={data.poster.timeText}
                  onChange={(e) => updatePoster('timeText', e.target.value)}
                  className="bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-white"
                  id="input-poster-time"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2" id="group-poster-venue">
              <div className="flex flex-col gap-1" id="col-p-vname">
                <label className="text-[10px] font-mono tracking-wider font-bold text-zinc-400">LODGE HALL NAME</label>
                <input
                  type="text"
                  value={data.poster.venueName}
                  onChange={(e) => updatePoster('venueName', e.target.value)}
                  className="bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-white"
                  id="input-poster-venue-name"
                />
              </div>

              <div className="flex flex-col gap-1" id="col-p-vaddr">
                <label className="text-[10px] font-mono tracking-wider font-bold text-zinc-400">STREET ADDRESS</label>
                <input
                  type="text"
                  value={data.poster.venueAddress}
                  onChange={(e) => updatePoster('venueAddress', e.target.value)}
                  className="bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-white"
                  id="input-poster-address"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1" id="group-poster-ticket">
              <label className="text-[10px] font-mono tracking-wider font-bold text-zinc-400">TICKETING / PRICING DETAILS</label>
              <input
                type="text"
                value={data.poster.ticketInfo}
                onChange={(e) => updatePoster('ticketInfo', e.target.value)}
                className="bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-white font-medium"
                id="input-poster-ticket-info"
              />
            </div>

            <div className="flex flex-col gap-1" id="group-poster-cta">
              <label className="text-[10px] font-mono tracking-wider font-bold text-zinc-400">CALL-TO-ACTION (CTA) WARNING</label>
              <input
                type="text"
                value={data.poster.ctaText}
                onChange={(e) => updatePoster('ctaText', e.target.value)}
                className="bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-amber-300 font-mono font-bold"
                id="input-poster-cta"
              />
            </div>

            <div className="flex flex-col gap-1" id="group-poster-tag">
              <label className="text-[10px] font-mono tracking-wider font-bold text-zinc-400">POETIC OUTRO REMARK</label>
              <textarea
                value={data.poster.tagline}
                onChange={(e) => updatePoster('tagline', e.target.value)}
                rows={2}
                className="bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-white italic"
                id="input-poster-tagline"
              />
            </div>
          </div>
        )}

        {/* TAB 6: TV ADVERTS digital signage */}
        {activeTab === 'tv-ads' && (
          <div className="flex flex-col gap-3" id="pane-tvads">
            <div className="flex items-center justify-between" id="section-head-tvads">
              <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-widest font-mono">
                📺 Lobby TV Ads ({data.tvAds.length})
              </h3>
              <button
                onClick={addTvAd}
                className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-[10px] font-semibold px-2.5 py-1 rounded flex items-center gap-1 border border-amber-500/20"
                id="add-tvad-btn"
              >
                <Plus className="w-3 h-3" /> Add Promotion
              </button>
            </div>

            <div className="flex flex-col gap-2" id="tvads-list-accordion">
              {data.tvAds.map((ad, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <div key={ad.id} className="bg-zinc-950 border border-zinc-850 rounded-lg overflow-hidden" id={`tvad-subcard-${idx}`}>
                    <div
                      onClick={() => toggleExpand(idx)}
                      className="p-3 bg-zinc-900/50 hover:bg-zinc-900 transition flex items-center justify-between cursor-pointer"
                      id={`tvad-item-head-click-${idx}`}
                    >
                      <span className="text-xs font-semibold text-zinc-200 truncate pr-4">
                        Ad {idx + 1}: {ad.headline || "Untitled Ad"}
                      </span>
                      <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => deleteTvAd(idx)}
                          className="p-1 text-zinc-500 hover:text-red-400 hover:bg-zinc-800 rounded transition"
                          id={`tvad-del-${idx}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-zinc-500">
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </span>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="p-3 border-t border-zinc-850 flex flex-col gap-3 text-left" id={`tvad-expanded-${idx}`}>
                        <div className="flex flex-col gap-1" id={`tvad-row-headline-${idx}`}>
                          <label className="text-[9px] font-mono font-bold text-zinc-500">PROMOTIONAL headline</label>
                          <input
                            type="text"
                            value={ad.headline}
                            onChange={(e) => updateTvAd(idx, 'headline', e.target.value)}
                            className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white uppercase font-bold"
                          />
                        </div>

                        <div className="flex flex-col gap-1" id={`tvad-row-subheadline-${idx}`}>
                          <label className="text-[9px] font-mono font-bold text-zinc-500">EVENT TIMELINE SUB-PANEL</label>
                          <input
                            type="text"
                            value={ad.subheadline}
                            onChange={(e) => updateTvAd(idx, 'subheadline', e.target.value)}
                            className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white uppercase font-mono"
                          />
                        </div>

                        <div className="flex flex-col gap-1" id={`tvad-row-accent-${idx}`}>
                          <label className="text-[9px] font-mono font-bold text-zinc-500">PERSUASION TAGLINE</label>
                          <textarea
                            value={ad.accentText}
                            onChange={(e) => updateTvAd(idx, 'accentText', e.target.value)}
                            rows={2}
                            className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white"
                          />
                        </div>

                        <div className="flex flex-col gap-1" id={`tvad-row-dur-${idx}`}>
                          <label className="text-[9px] font-mono font-bold text-zinc-500">ROTO CYCLE TIME (SECONDS)</label>
                          <input
                            type="number"
                            min="3"
                            max="60"
                            value={ad.duration}
                            onChange={(e) => updateTvAd(idx, 'duration', parseInt(e.target.value) || 8)}
                            className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-white font-mono"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
