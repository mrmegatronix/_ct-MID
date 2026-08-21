import React, { useEffect, useState, useMemo } from 'react';
import { Sparkles } from 'lucide-react';

interface IcicleData {
  x1: number;
  x2: number;
  xTip: number;
  depth: number;
  highlightOffset: number;
}

export default function GoldIcicles() {
  const [sparkles, setSparkles] = useState<{ id: number; left: number; top: number; delay: number; scale: number }[]>([]);

  // Generate 26 masterfully proportioned organic icicles with smooth Bezier curves
  const icicles = useMemo<IcicleData[]>(() => {
    const count = 26;
    const width = 1200;
    // Repeatable patterns of organic winter heights for absolute build consistency
    const heights = [28, 44, 18, 35, 12, 48, 22, 38, 15, 42, 25, 30, 16];
    
    return Array.from({ length: count }).map((_, i) => {
      const x1 = (i / count) * width;
      const x2 = ((i + 1) / count) * width;
      const stepWidth = x2 - x1;
      
      // Slightly off-center tips mimic real gravity-born freezing liquid
      const xTip = x1 + stepWidth * (0.4 + (i % 3) * 0.1); 
      const depth = heights[i % heights.length];
      const highlightOffset = 1.2 + (i % 2) * 0.8;

      return { x1, x2, xTip, depth, highlightOffset };
    });
  }, []);

  // Compute the master SVG paths for different layered depths
  const { pathMain, pathBack, pathSpecular } = useMemo(() => {
    let dMain = "M 0,0 ";
    let dBack = "M 0,0 ";
    let dSpecular = "";

    icicles.forEach((ic) => {
      // 1. Core Metallic Layer Paths: Beautiful bezier swoop down, small dripping droplet bead at tip, swoop up
      dMain += `L ${ic.x1},0 `;
      dMain += `Q ${ic.x1 + (ic.xTip - ic.x1) * 0.2} ${ic.depth * 0.15}, ${ic.xTip - 1.2} ${ic.depth - 2.5} `;
      dMain += `A 1.5 1.5 0 1 0 ${ic.xTip + 1.2} ${ic.depth - 2.5} `;
      dMain += `Q ${ic.xTip + (ic.x2 - ic.xTip) * 0.8} ${ic.depth * 0.15}, ${ic.x2} 0 `;

      // 2. Translucent Back Shadow Layer (Offset left & shallower to add realistic 3D volume)
      const bx1 = ic.x1 - 2;
      const bx2 = ic.x2 - 2;
      const bxTip = ic.xTip - 3;
      const bDepth = ic.depth * 0.85;
      dBack += `L ${bx1},0 `;
      dBack += `Q ${bx1 + (bxTip - bx1) * 0.2} ${bDepth * 0.15}, ${bxTip - 1} ${bDepth - 2} `;
      dBack += `A 1.2 1.2 0 1 0 ${bxTip + 1} ${bDepth - 2} `;
      dBack += `Q ${bxTip + (bx2 - bxTip) * 0.8} ${bDepth * 0.15}, ${bx2} 0 `;

      // 3. Front Shimmer SPECULAR Overlay (Runs along the left curving edge to model direct light reflection)
      const midX = ic.x1 + (ic.xTip - ic.x1) * 0.3;
      const midY = ic.depth * 0.4;
      dSpecular += `M ${ic.x1 + ic.highlightOffset},0 Q ${midX + 0.5} ${midY} ${ic.xTip - 0.5} ${ic.depth - 3} `;
    });

    dMain += "V 0 Z";
    dBack += "V 0 Z";

    return { pathMain, pathBack, pathSpecular };
  }, [icicles]);

  useEffect(() => {
    // Generate fine-tuned spark locations focused at the drip tips of the icicles
    const list = icicles.map((ic, i) => ({
      id: i,
      left: (ic.xTip / 1200) * 100, // exact horizontal percentage aligning with curved tips
      top: ic.depth - 2,             // right at water/gold condensation tip
      delay: Math.random() * 4,
      scale: 0.5 + Math.random() * 0.7,
    }));
    setSparkles(list);
  }, [icicles]);

  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-30 select-none h-14" id="glowing-gold-icicles">
      {/* Upper subtle atmospheric ambient back-light bloom */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-b from-amber-400/20 to-transparent blur-[2px]" />

      <svg
        className="w-full h-11 drop-shadow-[0_2px_8px_rgba(245,158,11,0.55)]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 50"
      >
        <defs>
          {/* Main Metallic Solid Gold Gradient */}
          <linearGradient id="goldCoreGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />     {/* Bright canary gold root */}
            <stop offset="35%" stopColor="#fbbf24" />    {/* Rich honey yellow */}
            <stop offset="75%" stopColor="#d97706" />    {/* Burnished amber */}
            <stop offset="100%" stopColor="#78350f" />   {/* Deep velvet bronze tip */}
          </linearGradient>

          {/* Background Ambient Dark Shadow Gradient */}
          <linearGradient id="goldBackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#78350f" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#451a03" stopOpacity={0.8} />
          </linearGradient>

          {/* Specular Front Lighting Highlight */}
          <linearGradient id="specularGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity={0.9} />
            <stop offset="80%" stopColor="#fef08a" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity={0.0} />
          </linearGradient>
        </defs>

        {/* LAYER 1: Deep 3D Shadow Backing */}
        <path d={pathBack} fill="url(#goldBackGradient)" />

        {/* LAYER 2: Core Metallic Gold Curved Body */}
        <path d={pathMain} fill="url(#goldCoreGradient)" />

        {/* LAYER 3: Glowing Specular Reflection Glass Strokes */}
        <path
          d={pathSpecular}
          fill="none"
          stroke="url(#specularGlow)"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="opacity-90"
        />
      </svg>

      {/* Elegant, high-fidelity sparkling particles gently flickering at the tips */}
      {sparkles.map((sp) => (
        <div
          key={sp.id}
          className="absolute text-yellow-300 pointer-events-none drop-shadow-[0_0_8px_rgba(253,224,71,0.95)]"
          style={{
            left: `${sp.left}%`,
            top: `${sp.top}px`,
            animation: `pulse ${1.4 + Math.random() * 1.8}s ease-in-out infinite`,
            animationDelay: `${sp.delay}s`,
            transform: `scale(${sp.scale})`,
          }}
        >
          <Sparkles className="w-3 h-3 text-amber-200 animate-spin" style={{ animationDuration: `${5 + Math.random() * 5}s` }} />
        </div>
      ))}
    </div>
  );
}
