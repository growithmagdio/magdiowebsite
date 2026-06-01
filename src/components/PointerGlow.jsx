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
    const colors = ['#F2B300', '#FFFFFF', '#FFF8E7', '#A855F7', '#8A2BE2', '#00F2FE'];

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
      
      if (speed > 0.5 && mouse.isActive) {
        // Spawn sparkles and dust proportional to mouse speed
        const count = Math.min(5, Math.floor(speed * 0.12) + 1);
        for (let i = 0; i < count; i++) {
          const isStar = Math.random() < 0.45; // 45% chance of beautiful star, 55% chance of dust
          
          // Organic distribution: expand outwards + inherit motion speed
          const angle = Math.random() * Math.PI * 2;
          const spreadSpeed = Math.random() * 1.4;
          const vx = Math.cos(angle) * spreadSpeed + dx * 0.15;
          const vy = Math.sin(angle) * spreadSpeed + dy * 0.15 - 0.2; // slight upward drift

          particles.push({
            x: mouse.x + (Math.random() - 0.5) * 6,
            y: mouse.y + (Math.random() - 0.5) * 6,
            vx: vx,
            vy: vy,
            size: isStar ? (Math.random() * 4.0 + 2.5) : (Math.random() * 1.5 + 0.5),
            isStar: isStar,
            life: 1.0,
            decay: isStar ? (Math.random() * 0.012 + 0.008) : (Math.random() * 0.025 + 0.015), // stars live longer
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.1,
            twinkleOffset: Math.random() * Math.PI * 2
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
        ctx.lineTo(0, -radius * 0.22);
        ctx.rotate(Math.PI / 4);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Spawn extra sparkles if hovering over interactive elements
      if (mouse.isActive && isHoveredRef.current && Math.random() < 0.22) {
        particles.push({
            x: mouse.x + (Math.random() - 0.5) * 24,
            y: mouse.y + (Math.random() - 0.5) * 24,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8 - 0.4, // float upwards like sparks
            size: Math.random() * 3.5 + 2.0,
            isStar: Math.random() < 0.6,
            life: 1.0,
            decay: Math.random() * 0.025 + 0.015,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.08,
            twinkleOffset: Math.random() * Math.PI * 2
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
        
        // Decelerate particles gently for smooth natural friction
        p.vx *= 0.97;
        p.vy *= 0.97;
        
        p.life -= p.decay;
        p.rotation += p.rotSpeed;
        
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = Math.max(0, p.life);
        
        if (p.isStar) {
          ctx.fillStyle = p.color;
          // Apply a glowing neon shadow blur to the stars
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          
          // Twinkle logic using wave modulation
          const pulse = Math.sin(p.life * Math.PI * 6 + p.twinkleOffset) * 0.28 + 0.72;
          drawStar(ctx, p.x, p.y, p.size * p.life * pulse, p.rotation);
          
          // Reset shadow blur
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = p.color;
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
