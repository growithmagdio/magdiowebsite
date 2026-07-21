import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function PointerGlow() {
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  if (isAdmin || isMobile) return null;

  const isHoveredRef = useRef(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check screen width - disable on mobile for optimal performance
    if (window.innerWidth < 768) return;

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
        target.classList?.contains('nav-link')
      ) {
        isHoveredRef.current = true;
      } else {
        isHoveredRef.current = false;
      }
    };

    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setSize();
    window.addEventListener('resize', setSize, { passive: true });

    let particles = [];
    const colors = ['#F2B300', '#FFFFFF', '#FFF8E7', '#A855F7', '#8A2BE2', '#00F2FE'];

    let mouse = { x: -1000, y: -1000, isActive: false };
    let lastMouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;

      const dx = mouse.x - lastMouse.x;
      const dy = mouse.y - lastMouse.y;
      const speedSq = dx * dx + dy * dy;
      
      // Speed threshold check using squared math
      if (speedSq > 0.25 && mouse.isActive) {
        const speed = Math.sqrt(speedSq);
        const count = Math.min(3, Math.floor(speed * 0.08) + 1);
        for (let i = 0; i < count; i++) {
          const isStar = Math.random() < 0.4;
          const angle = Math.random() * Math.PI * 2;
          const spreadSpeed = Math.random() * 1.2;
          const vx = Math.cos(angle) * spreadSpeed + dx * 0.1;
          const vy = Math.sin(angle) * spreadSpeed + dy * 0.1 - 0.2;

          particles.push({
            x: mouse.x + (Math.random() - 0.5) * 6,
            y: mouse.y + (Math.random() - 0.5) * 6,
            vx,
            vy,
            size: isStar ? (Math.random() * 3.5 + 2.0) : (Math.random() * 1.2 + 0.5),
            isStar,
            life: 1.0,
            decay: isStar ? (Math.random() * 0.015 + 0.01) : (Math.random() * 0.03 + 0.02),
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

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
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
      // Pause loop if browser tab is hidden to conserve CPU/GPU
      if (document.hidden) {
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw mouse ambient backdrop spotlight directly onto canvas (bypassing DOM style recalculations)
      if (mouse.isActive) {
        const spotRadius = isHoveredRef.current ? 750 : 550;
        const ambientGrad = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, spotRadius
        );
        const alphaBase = isHoveredRef.current ? 0.22 : 0.14;
        ambientGrad.addColorStop(0, `rgba(26, 34, 184, ${alphaBase})`);
        ambientGrad.addColorStop(0.35, `rgba(138, 43, 226, ${alphaBase * 0.65})`);
        ambientGrad.addColorStop(0.65, `rgba(242, 179, 0, ${alphaBase * 0.35})`);
        ambientGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = ambientGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, spotRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Spawn extra sparkles if hovering interactive element
      if (mouse.isActive && isHoveredRef.current && Math.random() < 0.15) {
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 20,
          y: mouse.y + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6 - 0.3,
          size: Math.random() * 3.0 + 1.5,
          isStar: Math.random() < 0.5,
          life: 1.0,
          decay: Math.random() * 0.03 + 0.02,
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
        const glowRadius = isHoveredRef.current ? 10 : 4;
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, glowRadius);
        grad.addColorStop(0, 'rgba(242, 179, 0, 0.8)');
        grad.addColorStop(1, 'rgba(242, 179, 0, 0)');
        ctx.fillStyle = grad;
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
      }

      // Render sparkles (without hardware-taxing shadowBlur)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.life -= p.decay;
        p.rotation += p.rotSpeed;
        
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;

        if (p.isStar) {
          const pulse = Math.sin(p.life * Math.PI * 6 + p.twinkleOffset) * 0.28 + 0.72;
          drawStar(ctx, p.x, p.y, p.size * p.life * pulse, p.rotation);
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
    <canvas 
      ref={canvasRef} 
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
    />
  );
}

