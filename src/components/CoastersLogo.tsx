import React from 'react';

interface CoastersLogoProps {
  className?: string;
  size?: number;
  variant?: 'gold' | 'monochrome' | 'white';
}

export default function CoastersLogo({ className = '', size = 120, variant = 'gold' }: CoastersLogoProps) {
  // Define color schemes based on requirements
  const colors = {
    gold: {
      outerBg: '#1e1b18', // very dark warm charcoal-brown
      accentGold: '#c5a059', // rustic gold matching the uploaded logo
      innerBg: '#b08a47', // solid gold-brass fill
      symbolColor: '#0c0a09', // rich dark charcoal/black
    },
    monochrome: {
      outerBg: '#0f172a',
      accentGold: '#94a3b8',
      innerBg: '#64748b',
      symbolColor: '#0f172a',
    },
    white: {
      outerBg: 'transparent',
      accentGold: '#ffffff',
      innerBg: '#ffffff',
      symbolColor: '#000000',
    }
  }[variant];

  return (
    <div 
      className={`relative flex items-center justify-center select-none ${className}`} 
      style={{ width: size, height: size }}
      id="coasters-logo-wrapper"
    >
      <svg
        viewBox="0 0 220 220"
        className="w-full h-full drop-shadow-xl"
        xmlns="http://www.w3.org/2000/svg"
        id="coasters-logo-svg"
      >
        <defs>
          {/* Circular text paths */}
          {/* Upper arch text path (clockwise, left to right around the top half) */}
          <path
            id="textPathUpper"
            d="M 32,110 A 78,78 0 1,1 188,110"
            fill="none"
          />
          {/* Lower arch text path (left to right around the bottom half) */}
          <path
            id="textPathLower"
            d="M 188,110 A 78,78 0 0,1 32,110"
            fill="none"
          />
          {/* Flickering flame gradient */}
          <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffbdf" />
            <stop offset="30%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#ef4444" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Outer Gold Ring */}
        <circle cx="110" cy="110" r="105" fill={colors.outerBg} stroke={colors.accentGold} strokeWidth="3" />
        
        {/* 2. Inner circular gold spacer */}
        <circle cx="110" cy="110" r="99" fill="transparent" stroke={colors.accentGold} strokeWidth="1" />

        {/* 3. Black/Dark Outer Band for the text */}
        <circle cx="110" cy="110" r="88" fill={colors.symbolColor} />

        {/* 4. Core Gold Inner Disc */}
        <circle cx="110" cy="110" r="72" fill={colors.innerBg} stroke={colors.accentGold} strokeWidth="1.5" />

        {/* 5. Curved Slab-Serif Typography for COASTERS TAVERN */}
        <text className="font-serif text-[21px] font-extrabold tracking-[0.22em]" fill={colors.accentGold} id="text-coasters">
          <textPath href="#textPathUpper" startOffset="50%" textAnchor="middle">
            COASTERS
          </textPath>
        </text>

        <text className="font-serif text-[21px] font-extrabold tracking-[0.24em]" fill={colors.accentGold} id="text-tavern">
          <textPath href="#textPathLower" startOffset="50%" textAnchor="middle">
            TAVERN
          </textPath>
        </text>

        {/* Inner black thin separation line */}
        <circle cx="110" cy="110" r="70" fill="none" stroke={colors.symbolColor} strokeWidth="2" opacity="0.3" />

        {/* 6. Deep Charcoal Crossed Mining Equipment (Shovel & Pickaxe) */}
        <g id="crossed-tools" fill={colors.symbolColor} stroke={colors.symbolColor} strokeWidth="1" strokeLinejoin="round">
          {/* PICKAXE (Angled from top-left to bottom-right handle, blade curving at top-right) */}
          <g transform="translate(110, 110) rotate(-15) translate(-110, -110)">
            {/* Pickaxe handle (Shaft) */}
            <rect x="108" y="55" width="4" height="100" rx="1.5" transform="rotate(45, 110, 110)" />
            {/* Pickaxe Head (Double curved spike) */}
            <path 
              d="M 68,60 C 85,73 110,75 110,75 C 110,75 135,73 152,60 C 135,67 110,68 110,68 C 110,68 85,67 68,60 Z" 
              transform="rotate(45, 110, 110)" 
            />
            {/* Pickaxe Center Hub Metal collar */}
            <rect x="106" y="65" width="8" height="6" rx="1" transform="rotate(45, 110, 110)" />
          </g>

          {/* SHOVEL (Angled handle bottom-right to top-left scoop) */}
          <g transform="translate(110, 110) rotate(55) translate(-110, -110)">
            {/* Shovel Shaft */}
            <rect x="108" y="50" width="4" height="100" rx="1.5" />
            {/* Shovel D-Handle Grip at bottom */}
            <path d="M 104,142 L 116,142 L 116,154 L 104,154 Z" fill="none" stroke={colors.symbolColor} strokeWidth="3" />
            <line x1="110" y1="142" x2="110" y2="150" strokeWidth="2.5" />
            {/* Shovel Scoop Head at top */}
            <path d="M 110,40 C 98,40 96,56 96,62 L 124,62 C 124,56 122,40 110,40 Z" />
            {/* Metal connector collar */}
            <rect x="107" y="62" width="6" height="8" />
          </g>
        </g>

        {/* 7. Animated Miner's Oil Lantern on center vertical axis */}
        <g id="miner-lantern" transform="translate(110, 111)">
          {/* Lantern Top Ring / Hanger Handle */}
          <circle cx="0" cy="-34" r="7" fill="none" stroke={colors.symbolColor} strokeWidth="2.5" />
          {/* Lantern Top Cap & Tiered Chimney */}
          <path d="M -12,-26 L 12,-26 L 8,-31 L -8,-31 Z" fill={colors.symbolColor} />
          <path d="M -16,-20 L 16,-20 L 12,-26 L -12,-26 Z" fill={colors.symbolColor} />
          <rect x="-8" y="-19" width="16" height="5" fill={colors.symbolColor} />

          {/* Glass Globe chamber outline / Glass Shield */}
          <path 
            d="M -11,-14 C -16,-10 -15,12 -11,18 L 11,18 C 15,12 16,-10 11,-14 Z" 
            fill="none" 
            stroke={colors.symbolColor} 
            strokeWidth="3" 
          />
          {/* Glass chamber transparent/gold glow reflection */}
          <path 
            d="M -9,-13 C -13,-9 -12,11 -9,16 L 9,16 C 12,11 13,-9 9,-13 Z" 
            fill="#feedae" 
            opacity="0.32" 
          />

          {/* FLICKERING FLAME EFFECT WITH SVG ANIMATION COMPATIBILITY */}
          <ellipse cx="0" cy="5" rx="5" ry="9" fill="url(#flameGlow)">
            <animate 
              attributeName="rx" 
              values="4.5;5.5;4.2;4.8;4.5" 
              dur="1.2s" 
              repeatCount="indefinite" 
            />
            <animate 
              attributeName="ry" 
              values="8;11;7.5;9.5;8" 
              dur="1.2s" 
              repeatCount="indefinite" 
            />
            <animate 
              attributeName="cy" 
              values="5;4.2;5.5;4.8;5" 
              dur="1.2s" 
              repeatCount="indefinite" 
            />
          </ellipse>

          {/* Small burning wick base */}
          <rect x="-2" y="12" width="4" height="4" fill="#1c1917" />

          {/* Wire protective guards inside glass */}
          <path d="M -11,-14 Q -1,-4 3,17" fill="none" stroke={colors.symbolColor} strokeWidth="1.2" opacity="0.8" />
          <path d="M 11,-14 Q 1,-4 -3,17" fill="none" stroke={colors.symbolColor} strokeWidth="1.2" opacity="0.8" />

          {/* Bottom Fuel Tank Base */}
          <rect x="-15" y="18" width="30" height="7" rx="1.5" fill={colors.symbolColor} />
          <rect x="-18" y="25" width="36" height="5" rx="1" fill={colors.symbolColor} />
        </g>
      </svg>
    </div>
  );
}
