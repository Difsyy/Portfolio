"use client";

import React, { useRef, useEffect, useState } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  color: string;
  vx: number;
  vy: number;
  size: number;
}

interface ParticleTextProps {
  text: string;
  className?: string;
}

export default function ParticleText({ text, className = "" }: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);
  const mouse = useRef({ x: 0, y: 0, radius: 100, active: false });

  // Initialize dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Initialize particles
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Draw text to get pixel data
    ctx.fillStyle = "white";
    // Responsive font size based on container width
    const fontSize = Math.min(dimensions.width / text.length * 1.5, 120); 
    ctx.font = `bold ${fontSize}px "Inter", sans-serif`; // Use a cleaner font
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    particles.current = [];
    const step = 2; // Higher density (lower step) for "normal font" look

    for (let y = 0; y < canvas.height; y += step) {
      for (let x = 0; x < canvas.width; x += step) {
        const index = (y * canvas.width + x) * 4;
        const alpha = data[index + 3];

        if (alpha > 0) {
          // Calculate gradient color based on X position
          // Blaze (#34d399) -> Clay (#0ea5e9) -> Ember (#0f394c)
          const relativeX = x / canvas.width;
          let color = "white";
          if (relativeX < 0.33) color = "rgb(52, 211, 153)"; // Blaze
          else if (relativeX < 0.66) color = "rgb(14, 165, 233)"; // Clay
          else color = "rgb(168, 85, 247)"; // Purple/Ember-ish

          particles.current.push({
            x: x,
            y: y,
            originX: x,
            originY: y,
            color: color,
            vx: 0,
            vy: 0,
            size: 1.5, // Smaller particles for sharper text
          });
        }
      }
    }

    // Clear canvas after sampling
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  }, [dimensions, text]);

  // Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.0015; // Time factor for auto-animation
      
      particles.current.forEach((particle) => {
        // Mouse interaction
        const dx = mouse.current.x - particle.x;
        const dy = mouse.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = mouse.current.radius;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * 20;
        const directionY = forceDirectionY * force * 20;

        if (distance < mouse.current.radius && mouse.current.active) {
          particle.vx -= directionX;
          particle.vy -= directionY;
        } else {
          // Automatic "Galaxy" Drift (Idle Animation)
          // Particles gently float in a wave pattern based on their position
          const driftX = Math.sin(time + particle.originY * 0.02) * 3;
          const driftY = Math.cos(time + particle.originX * 0.02) * 3;

          // Target position includes the drift
          const targetX = particle.originX + driftX;
          const targetY = particle.originY + driftY;

          // Return to target position
          const distToTargetX = particle.x - targetX;
          const distToTargetY = particle.y - targetY;
          
          particle.vx -= distToTargetX * 0.05;
          particle.vy -= distToTargetY * 0.05;
        }

        // Friction
        particle.vx *= 0.9;
        particle.vy *= 0.9;

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        // Slight size variation for "twinkle" effect
        const size = particle.size * (0.8 + Math.sin(time * 2 + particle.originX) * 0.2);
        ctx.arc(particle.x, particle.y, size / 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouse.current.x = e.clientX - rect.left;
    mouse.current.y = e.clientY - rect.top;
    mouse.current.active = true;
  };

  const handleMouseLeave = () => {
    mouse.current.active = false;
  };

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-40 md:h-56 cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <canvas ref={canvasRef} className="absolute inset-0 block" />
    </div>
  );
}
