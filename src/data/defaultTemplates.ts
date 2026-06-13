import { TemplateData, ThemeColors } from '../types';

export const THEMES: ThemeColors[] = [
  {
    id: 'coasters-tavern',
    name: 'Coasters Coal & Gold',
    bgClass: 'bg-[#0f0d0b] text-stone-100 selection:bg-[#c5a059] selection:text-black font-sans',
    cardClass: 'bg-[#181512]/90 backdrop-blur-md border border-[#c5a059]/40 shadow-2xl shadow-black/90',
    textPrimary: 'text-[#fcfbf9]',
    textSecondary: 'text-[#d6cfc5]/90',
    accentClass: 'text-[#c5a059]',
    borderClass: 'border-[#c5a059]/30',
    dividerClass: 'bg-gradient-to-r from-transparent via-[#c5a059]/60 to-transparent',
    badgeClass: 'bg-[#c5a059]/10 text-[#d4af37] border border-[#c5a059]/30',
    gradientText: 'bg-gradient-to-b from-[#fcfbf9] via-[#c5a059] to-[#9e7a3a] bg-clip-text text-transparent',
    iconColor: '#c5a059',
  },
  {
    id: 'coasters-funky',
    name: 'Coasters Gold Funk',
    bgClass: 'bg-gradient-to-tr from-slate-950 via-purple-950 to-indigo-950 text-stone-100 selection:bg-fuchsia-500 selection:text-white',
    cardClass: 'bg-black/75 backdrop-blur-xl border border-pink-500/50 shadow-2xl shadow-pink-950/60',
    textPrimary: 'text-white',
    textSecondary: 'text-pink-100/90',
    accentClass: 'text-amber-400',
    borderClass: 'border-fuchsia-500/40',
    dividerClass: 'bg-gradient-to-r from-transparent via-pink-500 to-transparent',
    badgeClass: 'bg-fuchsia-500/20 text-pink-300 border border-pink-500/40',
    gradientText: 'bg-gradient-to-b from-yellow-300 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent',
    iconColor: '#ec4899',
  },
  {
    id: 'nordic-pine',
    name: 'Nordic Pine',
    bgClass: 'bg-emerald-950 text-stone-100 selection:bg-amber-600 selection:text-white',
    cardClass: 'bg-emerald-900/40 backdrop-blur-md border border-emerald-800/60 shadow-xl shadow-emerald-950/40',
    textPrimary: 'text-stone-50',
    textSecondary: 'text-emerald-200/90',
    accentClass: 'text-amber-400',
    borderClass: 'border-amber-500/40',
    dividerClass: 'bg-gradient-to-r from-transparent via-amber-500/50 to-transparent',
    badgeClass: 'bg-amber-500/20 text-amber-300 border border-amber-500/40',
    gradientText: 'bg-gradient-to-b from-stone-50 via-stone-100 to-amber-200 bg-clip-text text-transparent',
    iconColor: '#f59e0b',
  },
  {
    id: 'frosted-ice',
    name: 'Frosted Ice',
    bgClass: 'bg-slate-950 text-indigo-50 selection:bg-cyan-600 selection:text-white',
    cardClass: 'bg-slate-900/50 backdrop-blur-lg border border-cyan-500/30 shadow-xl shadow-slate-950/50',
    textPrimary: 'text-white',
    textSecondary: 'text-cyan-200/90',
    accentClass: 'text-cyan-400',
    borderClass: 'border-cyan-400/40',
    dividerClass: 'bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent',
    badgeClass: 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40',
    gradientText: 'bg-gradient-to-b from-white via-indigo-50 to-cyan-200 bg-clip-text text-transparent',
    iconColor: '#22d3ee',
  },
  {
    id: 'cozy-hearth',
    name: 'Cozy Hearth',
    bgClass: 'bg-rose-950 text-amber-50 selection:bg-amber-700 selection:text-white',
    cardClass: 'bg-rose-900/30 backdrop-blur-md border border-rose-800/50 shadow-xl shadow-rose-950/60',
    textPrimary: 'text-amber-50',
    textSecondary: 'text-rose-200/90',
    accentClass: 'text-amber-300',
    borderClass: 'border-amber-400/40',
    dividerClass: 'bg-gradient-to-r from-transparent via-amber-400/50 to-transparent',
    badgeClass: 'bg-amber-500/20 text-amber-200 border border-amber-500/30',
    gradientText: 'bg-gradient-to-b from-amber-50 via-rose-100 to-amber-200 bg-clip-text text-transparent',
    iconColor: '#fcd34d',
  }
];

export const INITIAL_TEMPLATE_DATA: TemplateData = {
  generalSettings: {
    venueName: "Coasters Tavern",
    tagline: "Rustic Warmth, Miner's Gold, & Winter Cheer",
    contactInfo: "(03) 352 0210 | 1 Daniels Road, Redwood, Christchurch NZ 8051 | coasterstavern@outlook.com",
    logoText: "COASTERS TAVERN"
  },
  slides: [
    {
      id: "slide-1",
      title: "Mid-Winter Christmas Feast",
      subtitle: "JULY 13TH UNTIL 19TH | CELEBRATE THE YULETIDE CHEER IN REDWOOD",
      description: "Step off the cold Canterbury street into the warmth of our legendary coal guest fire. Our custom festive menu brings together roaring crackling roasts, slow braised West Coast game, and steaming mulled wine.",
      imageUrl: "https://coasterstavern.co.nz/wp-content/uploads/2024/03/coasters-new-600-1.png",
      features: ["Traditional Holiday Acoustic Carols Live", "Complimentary 'Pickaxe mulled wine' on arrival", "Authentic gold-country hospitality"]
    },
    {
      id: "slide-2",
      title: "Miner's Gold Winter Mixology",
      subtitle: "SEASONAL LIBATIONS & DRAUGHT BEER",
      description: "Warm up with our selection of flaming old fashioneds, house-spiced eggnogs and premium craft stouts. Perfectly designed to keep winter frost out of your boots.",
      imageUrl: "https://coasterstavern.co.nz/wp-content/uploads/2024/03/coasters-new-600-1.png",
      features: ["House-made toasted honey & cinamon bitters", "Warm clay-pot serve toddy presentation", "Local stout and porter flight samplers"]
    },
    {
      id: "slide-3",
      title: "Book Your Solstice Table",
      subtitle: "REDWOOD'S FAVOURITE COZY SANCTUARY",
      description: "Perfect for family yule gatherings, workplace Christmas celebrations, or a cozy evening out with mates. Dine next to gold-tinted lamps, polished timbers, and comforting warmth.",
      imageUrl: "https://coasterstavern.co.nz/wp-content/uploads/2024/03/coasters-new-600-1.png",
      features: ["Book your table today!"]
    },
    {
      id: "slide-4",
      title: "Mid-Winter Quiz Night",
      subtitle: "WEDNESDAY, JULY 15TH | COASTERS BRAIN SHOWDOWN",
      description: "Assemble your sharpest crew on Wednesday, July 15th for the ultimate Canterbury winter trivia challenge. Prizes include generous tavern gold bar tabs, special winter packages, and premium winter craft baskets.",
      imageUrl: "https://coasterstavern.co.nz/wp-content/uploads/2024/03/coasters-new-600-1.png",
      features: ["Starts Wednesday, July 15th at 7:00 PM", "Bar tabs & local craft gift baskets for winners", "Fireside dynamic group tables (up to 8)"]
    },
    {
      id: "slide-5",
      title: "Mid-Winter Karaoke Night",
      subtitle: "SATURDAY, JULY 18TH AT 8 PM | SING YOUR HEART OUT",
      description: "Step onto Redwood's warmest stage on Saturday, July 18th from 8:00 PM! Unleash your inner rockstar with high-density acoustics under the gold lamps. We'll provide the liquid courage & festive backing choruses.",
      imageUrl: "https://coasterstavern.co.nz/wp-content/uploads/2024/03/coasters-new-600-1.png",
      features: ["Commences Saturday, July 18th from 8:00 PM", "Golden Mic trophies & custom winter shooter specials", "Complimentary warm-up shot for brave early stage acts"]
    }
  ],
  menuItems: [
    {
      id: "m-1",
      name: "Slow-Roasted Canterbury Roast Beef",
      price: "$30.00",
      description: "Traditional roast of the day with roasted vegetables, seasonal greens and rich gravy.",
      tag: "Set Menu Main",
      category: "mains"
    },
    {
      id: "m-2",
      name: "Tender Seasoned Roast Chicken",
      price: "$30.00",
      description: "Traditional roast of the day with roasted vegetables, seasonal greens and rich gravy.",
      tag: "Set Menu Main",
      category: "mains"
    },
    {
      id: "m-3",
      name: "Crackling Berkshire Roast Pork",
      price: "$30.00",
      description: "Traditional roast of the day with roasted vegetables, seasonal greens and rich gravy.",
      tag: "Set Menu Main",
      category: "mains"
    },
    {
      id: "m-4",
      name: "Traditional Christmas Pudding & Hot Custard",
      price: "Included",
      description: "Rich yule-spiced steamed Christmas pudding packed with brandy-infused vine fruits, served with a generous pouring of warm, silky-smooth vanilla bean custard.",
      tag: "Set Dessert",
      category: "desserts"
    }
  ],
  cocktails: [
    {
      id: "c-1",
      name: "The Gold Miner's Lantern",
      price: "$21.00",
      story: "A blazing, glowing winter tonic combining aged dark rum, local amber mead, orange peel oil, and smoking cinnamon bark.",
      ingredients: ["Wild West Coast Aged Rum", "Christchurch Amber Mead", "Charred Orange Zest Oil", "Cinnamon Stick Incense"],
      tasteProfile: { sweetness: 4, warmth: 5, spiciness: 4 },
      garnish: "Real-flame orange oil spritz & golden glitter sugar rim",
      tag: "Signature"
    },
    {
      id: "c-2",
      name: "Pickaxe Spiced Toddy",
      price: "$23.00",
      story: "Stout rye bourbon whipped with winter spices, cooked in cinnamon-clove reduction, served warm with star anise.",
      ingredients: ["Rye Bourbon Whiskey", "House Spiced Citrus Wine", "Winter Wood Honey", "Star Anise & Pods"],
      tasteProfile: { sweetness: 3, warmth: 5, spiciness: 5 },
      garnish: "Smoking cinnamon quill & toasted honeycomb segment",
      tag: "Warm Serve"
    },
    {
      id: "c-3",
      name: "Black Sand Oatmeal Stout Shooter",
      price: "$19.00",
      story: "Rich chocolate oatmeal stout layered over premium coffee bean liqueur and cold-brewed espresso. Full body luxury.",
      ingredients: ["Oatmeal Stout Ale", "Espresso Liqueur", "High-fat dairy cream", "Dutch Cocoa powder dusting"],
      tasteProfile: { sweetness: 4, warmth: 3, spiciness: 1 },
      garnish: "Friction-shaved dark chocolate curls",
      tag: "Decadent"
    },
    {
      id: "c-4",
      name: "Evergreen Frost Gin Fizz",
      price: "$20.00",
      story: "An icy-refreshing mixture of pine needles cordial, dry forest gin, sparking soda, and a frosty rim of peppermint mint sugar dust.",
      ingredients: ["Artisanal Botanical Gin", "Spruce Pine Cordial", "Freshly squeezed lemon", "Glacial Soda water"],
      tasteProfile: { sweetness: 2, warmth: 2, spiciness: 2 },
      garnish: "Snow-dusted Rosemary branch and frozen red cherries",
      tag: "Crisp & Icy"
    }
  ],
  poster: {
    title: "MID-WINTER CHRISTMAS",
    subtitle: "Roaring coal fireplaces, crispy pork crackling, and glowing gold winter cocktails",
    dateText: "July 13th until 19th, 2026",
    timeText: "Mid-Winter Set Menu Running All Week",
    venueName: "COASTERS TAVERN REDWOOD",
    venueAddress: "1 Daniels Road, Redwood, Christchurch NZ 8051",
    ctaText: "TABLE RESERVATIONS HIGHLY RECOMMENDED",
    ticketInfo: "$30.00 Set Menu: Roast Beef, Chicken, Pork & Christmas Pudding.",
    tagline: "Escape the freezing Canterbury frost. Warm your hands and spirits next to our roaring hearth with local West Coast legends."
  },
  tvAds: [
    {
      id: "tv-1",
      headline: "Mulled Wine Hours",
      subheadline: "DAILY 4:30 PM TO 6:30 PM | HOT SPARKS BY THE COAL FIRE",
      accentText: "Warm your fingers with steam-blazed spiced mulled wine under raw gold timbers.",
      duration: 8
    },
    {
      id: "tv-2",
      headline: "The Coasters Yule Roast",
      subheadline: "SPECIAL $30.00 SET MENU | RUNNING JULY 13TH - 19TH",
      accentText: "Choose of traditional Roast Beef, Golden Chicken, or Crackling Pork plus Christmas Pudding & Custard.",
      duration: 10
    },
    {
      id: "tv-3",
      headline: "Friday Acoustic Fire Nights",
      subheadline: "ACOUSTIC COUNTRY FOLK & IRISH CHORALS LIVE FROM 7:00 PM",
      accentText: "Draught stout flowing cold, roaring firewood blazing hot. Truly legendary Christchurch nights.",
      duration: 8
    },
    {
      id: "tv-4",
      headline: "Mid-Winter Quiz Night",
      subheadline: "WEDNESDAY, JULY 15TH | TRIVIA & COLD BEERS BY THE HEARTH",
      accentText: "Gather up your mates for local trivia, delicious winter plates, and generous gold cash bar tabs.",
      duration: 9
    },
    {
      id: "tv-5",
      headline: "Mid-Winter Karaoke Night",
      subheadline: "SATURDAY, JULY 18TH AT 8:00 PM | COZY SPOTLIGHT STAGE",
      accentText: "Grab the golden mic next to Redwood's roaring guest fire. Warm up shot provided with your name on it!",
      duration: 9
    },
    {
      id: "tv-6",
      headline: "Special $30 Set Menu",
      subheadline: "2-COURSE ROAST SPECTACULAR | JULY 13TH UNTIL 19TH",
      accentText: "Indulge in a premium choice of Roast Beef, Roast Chicken, or Roast Pork with Christmas Pudding & Custard for dessert.",
      duration: 10
    }
  ]
};
