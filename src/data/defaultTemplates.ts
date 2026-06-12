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
    contactInfo: "03 352 9165 | 156 Main North Road, Redwood, Christchurch | coasterstavern@outlook.com",
    logoText: "COASTERS TAVERN"
  },
  slides: [
    {
      id: "slide-1",
      title: "Mid-Winter Christmas Feast",
      subtitle: "CELEBRATE THE YULETIDE CHEER IN REDWOOD",
      description: "Step off the cold Canterbury street into the warmth of our legendary coal guest fire. Our custom festive menu brings together roaring crackling roasts, slow braised West Coast game, and steaming mulled cider plates.",
      imageUrl: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800",
      features: ["Traditional Holiday Acoustic Carols Live", "Complimentary 'Pickaxe mulled cider' on arrival", "Authentic gold-country hospitality"]
    },
    {
      id: "slide-2",
      title: "Miner's Gold Winter Mixology",
      subtitle: "SEASONAL LIBATIONS & DRAUGHT BEER",
      description: "Warm up with our selection of flaming old fashioneds, house-spiced eggnogs and premium craft stouts. Perfectly designed to keep winter frost out of your boots.",
      imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
      features: ["House-made toasted honey & cinamon bitters", "Warm clay-pot serve toddy presentation", "Local stout and porter flight samplers"]
    },
    {
      id: "slide-3",
      title: "Book Your Solstice Table",
      subtitle: "REDWOOD'S FAVOURITE COZY SANCTUARY",
      description: "Perfect for family yule gatherings, workplace Christmas celebrations, or a cozy evening out with mates. Dine next to gold-tinted lamps, polished timbers, and comforting warmth.",
      imageUrl: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1?auto=format&fit=crop&q=80&w=800",
      features: ["Platters for corporate and casual groups", "Custom reservation menus available", "No venue hire fees for local group reservations"]
    },
    {
      id: "slide-4",
      title: "Mid-Winter Quiz Night",
      subtitle: "COASTERS BRAIN SHOWDOWN BY THE COAL FIRE",
      description: "Assemble your sharpest crew for the ultimate Canterbury winter trivia challenge. Prizes include generous tavern gold bar tabs, special winter packages, and premium winter craft baskets.",
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
      features: ["Bar tabs & local craft gift baskets for winners", "Fireside dynamic group tables (up to 8)", "Delicious team sharing platters and warm mulled cider specials"]
    },
    {
      id: "slide-5",
      title: "Mid-Winter Karaoke Night",
      subtitle: "SING YOUR HEART OUT next to THE HEARTH",
      description: "Step onto Redwood's warmest stage! Unleash your inner rockstar with high-density acoustics under the gold lamps. We'll provide the liquid courage & festive backing choruses.",
      imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?auto=format&fit=crop&q=80&w=800",
      features: ["Golden Mic trophies & custom winter shooter specials", "Massive song library from retro classics to today's hits", "Complimentary warm-up shot for brave early stage acts"]
    }
  ],
  menuItems: [
    {
      id: "m-1",
      name: "Black Gold Mushroom & Charcoal Porter Soup",
      price: "$17.50",
      description: "Velvety fire-roasted chestnut cream soup with fresh thyme, finished with Coasters Porter stout and toasted miner's bread.",
      tag: "Coasting",
      category: "starters"
    },
    {
      id: "m-2",
      name: "Solstice Pan-Seared West Coast Venison",
      price: "$22.90",
      description: "Cured wild venison medallions served on pine-infused beetroot reduction with roasted hazelnuts and pickled apples.",
      tag: "Rustic Pick",
      category: "starters"
    },
    {
      id: "m-3",
      name: "The Gold Rush Prime Ribeye Steak",
      price: "$48.50",
      description: "Flame-grilled 300g premium pasture-fed steak, served with double gold crispy fat fries, garden vegetable smash, and rich 'shovel' jus.",
      tag: "Tavern Legend",
      category: "mains"
    },
    {
      id: "m-4",
      name: "Roast Berkshire Pork & Crackling Tower",
      price: "$39.50",
      description: "Crispy slow-roasted pork belly layered with wild sage and onion stuffing, glazed winter squash, and tavern apple gravy.",
      tag: "Yule Roast",
      category: "mains"
    },
    {
      id: "m-5",
      name: "Coal-Baked Alpine Pumpkin Tart",
      price: "$34.00",
      description: "Rich roasted maple pumpkin custard with caramelized local walnuts and melted Otago blue cheese in a rugged savory herb crust.",
      tag: "Vegetarian",
      category: "mains"
    },
    {
      id: "m-6",
      name: "Sticky Date & Oatmeal Stout Pudding",
      price: "$18.00",
      description: "Dark, spiced date pudding saturated in molten gold buttery rum-butterscotch, with double Jersey ice cream.",
      tag: "Must Try",
      category: "desserts"
    },
    {
      id: "m-7",
      name: "The Fireplace Apple & Blackberry Sizzler",
      price: "$16.50",
      description: "Canterbury orchard fruits cooked in star anise syrup, crowned in rustic oat-cinnamon crumble, and vanilla custody.",
      tag: "Classic Warmth",
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
      ingredients: ["Rye Bourbon Whiskey", "House Spiced Citrus Cider", "Winter Wood Honey", "Star Anise & Pods"],
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
    dateText: "Saturday, July 25th, 2026",
    timeText: "Festive Banquet Commences at 6:00 PM",
    venueName: "COASTERS TAVERN REDWOOD",
    venueAddress: "156 Main North Road, Redwood, Christchurch",
    ctaText: "TABLE RESERVATIONS HIGHLY RECOMMENDED",
    ticketInfo: "Special Mid-Winter Platters, Mulled Cider, Golden Ales & Tavern Desserts. Call 03 352 9165.",
    tagline: "Escape the freezing Canterbury frost. Warm your hands and spirits next to our roaring hearth with local West Coast legends."
  },
  tvAds: [
    {
      id: "tv-1",
      headline: "Mulled Cider Hours",
      subheadline: "DAILY 4:30 PM TO 6:30 PM | HOT SPARKS BY THE COAL FIRE",
      accentText: "Warm your fingers with steam-blazed spiced rum cider under raw gold timbers.",
      duration: 8
    },
    {
      id: "tv-2",
      headline: "The Coasters Yule Roast",
      subheadline: "JULY BANQUETS OPEN FOR RESERVATIONS | GROUPS GATHER ROUND",
      accentText: "Feast on crispy Berkshire pork belly, slow prime ribeye steak & Stout puddings.",
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
      subheadline: "BRAIN SHOWDOWN | TRIVIA & COLD IN-HOUSE BEERS BY THE HEARTH",
      accentText: "Gather up your mates for local trivia, delicious winter plates, and generous gold cash bar tabs.",
      duration: 9
    },
    {
      id: "tv-5",
      headline: "Mid-Winter Karaoke Night",
      subheadline: "SING YOUR HEART OUT | COZY SPOTLIGHT STAGE",
      accentText: "Grab the golden mic next to Redwood's roaring guest fire. Warm up shot provided with your name on it!",
      duration: 9
    },
    {
      id: "tv-6",
      headline: "Special Weekly Set Menu",
      subheadline: "7-DAY FEAST SPECTACULAR | BOOKINGS ACCEPTS/DATES TBC",
      accentText: "A chef-crafted 3-course banquet running for an entire week. Keep an eye out for final dates release!",
      duration: 10
    }
  ]
};
