import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  vx: number;
  vy: number;
  spin: number;
  spinSpeed: number;
}

interface SnowConfettiProps {
  triggerCount: number;
}

export default function SnowConfetti({ triggerCount }: SnowConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    const colors = [
      '#ffffff', // pristine pure white
      '#feedae', // warm gold glow
      '#c5a059', // coasters warm gold
      '#fcfbf9', // alpine off-white
      '#93c5fd', // winter sky blue
    ];

    // Add a high-fidelity celebratory snowy confetti spray!
    const addBurst = () => {
      const count = 150; // Dense high-impact blizzard burst
      const centerX = canvas.width / 2;
      const centerY = canvas.height * 0.35; // Sprays from center-up and drifts downwards

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 4 + Math.random() * 12; // Dynamic explosive speed
        particlesRef.current.push({
          x: centerX + (Math.random() - 0.5) * 50,
          y: centerY + (Math.random() - 0.5) * 50,
          radius: 2 + Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 1,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (3 + Math.random() * 6), // Launch upwards
          spin: Math.random() * Math.PI,
          spinSpeed: (Math.random() - 0.5) * 0.15,
        });
      }
    };

    if (triggerCount > 0) {
      addBurst();
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.spin);
        ctx.beginPath();
        
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;

        // Stagger visual shapes: classic circles and 6-sided crystal flakes
        if (i % 3 === 0) {
          // Glistening 6-sided cross star paths
          ctx.rect(-p.radius, -1, p.radius * 2, 2);
          ctx.rect(-1, -p.radius, 2, p.radius * 2);
        } else {
          // Circular floating snow drift
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2, true);
        }
        
        ctx.fill();
        ctx.restore();

        // Update physics
        p.x += p.vx;
        p.y += p.vy;
        
        // Gravity, inertia and air drag
        p.vy += 0.15; // Natural gravity pulling down
        p.vx *= 0.97; // Horizontal drag slowing outwards thrust
        p.vy *= 0.97; // Vertical drag slowing climb

        // Flutter / side-to-side drift simulation
        p.vx += Math.sin(p.y / 25) * 0.07;

        p.spin += p.spinSpeed;
        p.opacity -= 0.007; // Fade out slowly as they land
      }

      // Keep only active particles on display
      particlesRef.current = particles.filter(
        (p) => p.opacity > 0 && p.y < canvas.height + 20 && p.x > -20 && p.x < canvas.width + 20
      );

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [triggerCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-50"
      id="snow-confetti-canvas"
    />
  );
}
