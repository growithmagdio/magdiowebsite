import { useEffect, useRef, useState } from 'react';

export default function PointerGlow() {
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.service-card') ||
        target.closest('.glass-card') ||
        target.closest('.btn-primary') ||
        target.closest('.btn-secondary') ||
        target.classList.contains('nav-link')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setSize();
    window.addEventListener('resize', setSize);

    let particles = [];
    const colors = ['#F2B300', '#FFF', '#E2A300', '#FFFFFF', '#A855F7'];

    let mouse = { x: -1000, y: -1000, isActive: false };
    let lastMouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;

      const dx = mouse.x - lastMouse.x;
      const dy = mouse.y - lastMouse.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      
      if (speed > 0 && mouse.isActive) {
        const count = Math.min(8, Math.floor(speed * 0.4) + 1);
        for (let i = 0; i < count; i++) {
          particles.push({
            x: mouse.x + (Math.random() - 0.5) * 12,
            y: mouse.y + (Math.random() - 0.5) * 12,
            vx: (Math.random() - 0.5) * 1.5 - dx * 0.03,
            vy: (Math.random() - 0.5) * 1.5 - dy * 0.03 + (Math.random() * 0.5), // slight gravity
            size: Math.random() * 2 + 0.5,
            life: 1,
            decay: Math.random() * 0.015 + 0.01,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.2
          });
        }
      }
      
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
    };

    const handleMouseLeave = () => { mouse.isActive = false; };
    const handleMouseEnter = () => { mouse.isActive = true; };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId;

    const drawStar = (ctx, x, y, radius, rot) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        ctx.lineTo(0, -radius);
        ctx.rotate(Math.PI / 4);
        ctx.lineTo(0, -radius * 0.2);
        ctx.rotate(Math.PI / 4);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Spawn extra particles if hovering over interactive element
      if (mouse.isActive && isHoveredRef.current && Math.random() < 0.4) {
        particles.push({
            x: mouse.x + (Math.random() - 0.5) * 40,
            y: mouse.y + (Math.random() - 0.5) * 40,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5 - 0.5, // float up
            size: Math.random() * 2.5 + 1.5,
            life: 1,
            decay: Math.random() * 0.02 + 0.01,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.1
        });
      }

      // Draw mouse center glow point
      if (mouse.isActive) {
         ctx.globalCompositeOperation = 'screen';
         ctx.beginPath();
         const glowRadius = isHoveredRef.current ? 12 : 5;
         const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, glowRadius);
         grad.addColorStop(0, 'rgba(242, 179, 0, 0.8)');
         grad.addColorStop(1, 'rgba(242, 179, 0, 0)');
         ctx.fillStyle = grad;
         ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
         ctx.fill();
         ctx.globalCompositeOperation = 'source-over';
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.rotation += p.rotSpeed;
        
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        
        // Draw stars for larger particles, dots for smaller
        if (p.size > 1.8) {
          drawStar(ctx, p.x, p.y, p.size * p.life * 2, p.rotation);
          
          // Add a little glow to stars
          ctx.shadowBlur = 5;
          ctx.shadowColor = p.color;
          drawStar(ctx, p.x, p.y, p.size * p.life * 1.5, p.rotation);
          ctx.shadowBlur = 0;
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', setSize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Large beautiful multi-color ambient backdrop spotlight that follows pointer */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 opacity-90 transition-all duration-300 hidden md:block"
        style={{
          background: isHovered 
            ? `radial-gradient(900px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(26, 34, 184, 0.28) 0%, rgba(138, 43, 226, 0.18) 35%, rgba(242, 179, 0, 0.1) 65%, transparent 80%)`
            : `radial-gradient(650px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(26, 34, 184, 0.2) 0%, rgba(138, 43, 226, 0.12) 30%, rgba(242, 179, 0, 0.06) 60%, transparent 80%)`
        }}
      />
      {/* Glitter Trail Canvas */}
      <canvas 
        ref={canvasRef} 
        className="pointer-events-none fixed inset-0 z-50 hidden md:block"
      />
    </>
  );
}
