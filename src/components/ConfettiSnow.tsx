import React, { useEffect, useState } from 'react';

interface Flake {
  id: number;
  left: number; // percentage
  delay: number; // seconds
  duration: number; // seconds
  swayDuration: number; // seconds
  size: number; // pixels
  color: string;
  type: 'snowflake' | 'confetti-circle' | 'confetti-square' | 'sparkle';
  content: string;
}

export default function ConfettiSnow() {
  const [flakes, setFlakes] = useState<Flake[]>([]);

  useEffect(() => {
    const flakeTypes = ['snowflake', 'confetti-circle', 'confetti-square', 'sparkle'] as const;
    const contentsObj = {
      snowflake: ['❄', '❅', '❆', '❈'],
      sparkle: ['✦', '✨'],
      'confetti-circle': ['•'],
      'confetti-square': ['■']
    };

    const goldColors = [
      '#ffffff', // Pristine White
      '#fef08a', // Soft Light Gold
      '#f59e0b', // Warm Amber
      '#d97706', // Deep Gold Accent
      '#fbbf24'  // Bright Gold Highlight
    ];

    // Generate 32 beautiful randomized particles
    const list = Array.from({ length: 32 }).map((_, i) => {
      const type = flakeTypes[Math.floor(Math.random() * flakeTypes.length)];
      const choices = contentsObj[type];
      const content = choices[Math.floor(Math.random() * choices.length)];
      const size = type === 'snowflake' 
        ? (8 + Math.random() * 12) 
        : type === 'sparkle' 
        ? (7 + Math.random() * 8) 
        : (5 + Math.random() * 6);

      return {
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * -15, // Negative delay so flakes are already distributed when rendering
        duration: 8 + Math.random() * 10,
        swayDuration: 3 + Math.random() * 4,
        size,
        color: goldColors[Math.floor(Math.random() * goldColors.length)],
        type,
        content
      };
    });

    setFlakes(list);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20" id="confetti-snow-overlay">
      {/* Dynamic Keyframe Definitions injected contextually */}
      <style>{`
        @keyframes customFall {
          0% {
            transform: translateY(-20px) rotate(0deg);
          }
          100% {
            transform: translateY(105% /* overflow-hidden bounds */) rotate(360deg);
          }
        }
        @keyframes customSway {
          0% {
            transform: translateX(-15px);
          }
          50% {
            transform: translateX(15px);
          }
          100% {
            transform: translateX(-15px);
          }
        }
      `}</style>

      {flakes.map((f) => (
        <div
          key={f.id}
          className="absolute select-none pointer-events-none"
          style={{
            left: `${f.left}%`,
            top: `-20px`,
            animation: `customFall ${f.duration}s linear infinite`,
            animationDelay: `${f.delay}s`,
          }}
          id={`confetti-flake-fall-${f.id}`}
        >
          <div
            style={{
              animation: `customSway ${f.swayDuration}s ease-in-out infinite`,
              color: f.color,
              fontSize: `${f.size}px`,
              textShadow: f.color !== '#ffffff' ? `0 0 6px ${f.color}80` : 'none',
              opacity: f.type === 'snowflake' ? 0.85 : 0.95,
            }}
            id={`confetti-flake-sway-${f.id}`}
          >
            {f.content}
          </div>
        </div>
      ))}
    </div>
  );
}
