export type ThemeId = 'coasters-tavern' | 'nordic-pine' | 'frosted-ice' | 'cozy-hearth';

export interface ThemeColors {
  id: ThemeId;
  name: string;
  bgClass: string;
  cardClass: string;
  textPrimary: string;
  textSecondary: string;
  accentClass: string;
  borderClass: string;
  dividerClass: string;
  badgeClass: string;
  gradientText: string;
  iconColor: string;
}

export interface Slide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  features?: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  tag?: string;
  category: 'starters' | 'mains' | 'desserts';
}

export interface CocktailItem {
  id: string;
  name: string;
  price: string;
  story: string;
  ingredients: string[];
  tasteProfile: {
    sweetness: number; // 1-5
    warmth: number;    // 1-5
    spiciness: number; // 1-5
  };
  garnish: string;
  tag?: string;
}

export interface PosterData {
  title: string;
  subtitle: string;
  dateText: string;
  timeText: string;
  venueName: string;
  venueAddress: string;
  ctaText: string; // "Bookings Essential"
  ticketInfo: string; // "$85 per head inclusive"
  tagline: string;
}

export interface TvAd {
  id: string;
  headline: string;
  subheadline: string;
  accentText: string;
  bgImage?: string;
  duration: number; // seconds to display if rotating
}

export interface TemplateData {
  generalSettings: {
    venueName: string;
    tagline: string;
    contactInfo: string;
    logoText: string;
  };
  slides: Slide[];
  menuItems: MenuItem[];
  cocktails: CocktailItem[];
  poster: PosterData;
  tvAds: TvAd[];
}
