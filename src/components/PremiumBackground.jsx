import { useEffect, useRef, useState } from 'react';

// Color Palette: red ➔ orange ➔ purple ➔ blue ➔ pink
const COLORS = [
  { r: 239, g: 68, b: 68 },   // Red (tailwindcss red-500)
  { r: 249, g: 115, b: 22 },  // Orange (tailwindcss orange-500)
  { r: 168, g: 85, b: 247 },  // Purple (tailwindcss purple-500)
  { r: 59, g: 130, b: 246 },  // Blue (tailwindcss blue-500)
  { r: 236, g: 72, b: 153 }   // Pink (tailwindcss pink-500)
];

// Helper to get color string interpolated along our gradient path
function getColorString(t, alpha) {
  const count = COLORS.length;
  // Ensure t is bounded [0, 1)
  const boundedT = Math.max(0, Math.min(0.9999, t));
  const scaledT = boundedT * (count - 1);
  const index = Math.floor(scaledT);
  const nextIndex = Math.min(index + 1, count - 1);
  const ratio = scaledT - index;

  const r = Math.round(COLORS[index].r * (1 - ratio) + COLORS[nextIndex].r * ratio);
  const g = Math.round(COLORS[index].g * (1 - ratio) + COLORS[nextIndex].g * ratio);
  const b = Math.round(COLORS[index].b * (1 - ratio) + COLORS[nextIndex].b * ratio);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function PremiumBackground() {
  const canvasRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking
  const mouse = useRef({ x: 0, y: 0, active: false, clientX: 0, clientY: 0 });
  const lastMouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  // Physics-based trail (snake)
  const TRAIL_LENGTH = 22;
  const trail = useRef(Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 })));

  // Spark particles spawned by mouse movement speed
  const sparks = useRef([]);

  // Parallax offsets (lerped for smoothness)
  const parallax = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Resize handler
    const updateSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // Initialize trail positions at center
    trail.current.forEach((t) => {
      t.x = width / 2;
      t.y = height / 2;
    });
    ringPos.current.x = width / 2;
    ringPos.current.y = height / 2;

    // Background floating particles configuration
    const NUM_PARTICLES = 70;
    const particles = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        ox: Math.random() * width, // origin reference for drift
        oy: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.5 + 0.8,
        depth: Math.random() * 1.0 + 0.4, // closer (higher) vs deeper (lower)
        baseAlpha: Math.random() * 0.4 + 0.2,
        alpha: 0,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        angle: Math.random() * Math.PI * 2,
        driftSpeed: Math.random() * 0.008 + 0.002,
      });
    }

    // Grid spacing configuration
    const gridSpacing = 55;

    // Large ambient background blobs configuration
    const blobs = [
      {
        baseX: 0.25,
        baseY: 0.3,
        freqX: 0.00015,
        freqY: 0.0002,
        color: 'rgba(168, 85, 247, ', // Purple
        radiusFactor: 0.45,
      },
      {
        baseX: 0.75,
        baseY: 0.75,
        freqX: 0.0001,
        freqY: 0.00025,
        color: 'rgba(59, 130, 246, ', // Blue
        radiusFactor: 0.55,
      },
      {
        baseX: 0.5,
        baseY: 0.5,
        freqX: 0.0002,
        freqY: 0.00012,
        color: 'rgba(236, 72, 153, ', // Pink
        radiusFactor: 0.35,
      },
    ];

    let time = 0;

    // Main animation loop
    const animate = (timestamp) => {
      time = timestamp;

      // 1. Draw base cinematic background
      ctx.fillStyle = '#03030b';
      ctx.fillRect(0, 0, width, height);

      // 2. Draw moving ambient blobs
      blobs.forEach((blob) => {
        const bx = width * blob.baseX + Math.sin(time * blob.freqX) * width * 0.15;
        const by = height * blob.baseY + Math.cos(time * blob.freqY) * height * 0.15;
        const radius = Math.min(width, height) * blob.radiusFactor;

        const grad = ctx.createRadialGradient(bx, by, 0, bx, by, radius);
        grad.addColorStop(0, `${blob.color}0.07)`);
        grad.addColorStop(0.5, `${blob.color}0.02)`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(bx, by, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Smooth parallax calculations
      const targetParallaxX = mouse.current.active
        ? (mouse.current.x - width / 2) * 0.025
        : 0;
      const targetParallaxY = mouse.current.active
        ? (mouse.current.y - height / 2) * 0.025
        : 0;

      parallax.current.x += (targetParallaxX - parallax.current.x) * 0.05;
      parallax.current.y += (targetParallaxY - parallax.current.y) * 0.05;

      // 4. Update and draw floating particles + connections
      ctx.globalCompositeOperation = 'lighter';
      
      // Update particles
      particles.forEach((p) => {
        // Ambient drift
        p.angle += p.driftSpeed;
        p.ox += p.vx;
        p.oy += p.vy;

        // Wrap around boundaries
        if (p.ox < -50) p.ox = width + 50;
        if (p.ox > width + 50) p.ox = -50;
        if (p.oy < -50) p.oy = height + 50;
        if (p.oy > height + 50) p.oy = -50;

        let curX = p.ox + Math.sin(p.angle) * 12;
        let curY = p.oy + Math.cos(p.angle) * 12;

        // Mouse elastic repulsion
        if (mouse.current.active) {
          const dx = curX - mouse.current.x;
          const dy = curY - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pushRadius = 150;

          if (dist < pushRadius) {
            const force = (pushRadius - dist) / pushRadius;
            curX += (dx / dist) * force * 35 * p.depth;
            curY += (dy / dist) * force * 35 * p.depth;
          }
        }

        // Apply depth-based parallax offset
        p.x = curX + parallax.current.x * p.depth;
        p.y = curY + parallax.current.y * p.depth;

        // Pulsing alpha
        p.alpha = p.baseAlpha + Math.sin(time * p.pulseSpeed) * 0.12;
      });

      // Draw neural lines
      for (let i = 0; i < NUM_PARTICLES; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < NUM_PARTICLES; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 95;

          if (dist < maxDist) {
            const opacity = ((maxDist - dist) / maxDist) * 0.06 * Math.min(p1.alpha, p2.alpha);
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
            ctx.lineWidth = 0.55;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particle dots
      particles.forEach((p) => {
        // Blend colors based on their screen index/depth
        const t = (p.x / width + p.depth / 1.4) / 2;
        const color = getColorString(t % 1, p.alpha);
        
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow for closer, larger particles
        if (p.depth > 1.1) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.7, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      });

      // 5. Draw Interactive Grid System (Batched optimization)
      const cols = Math.ceil(width / gridSpacing) + 1;
      const rows = Math.ceil(height / gridSpacing) + 1;
      const activeGridRadius = 180;

      // Draw default grid dots in a single batch path for peak performance
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.beginPath();
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const gx = c * gridSpacing;
          const gy = r * gridSpacing;

          if (mouse.current.active) {
            const dx = gx - mouse.current.x;
            const dy = gy - mouse.current.y;
            const distSq = dx * dx + dy * dy;
            if (distSq >= activeGridRadius * activeGridRadius) {
              ctx.moveTo(gx, gy);
              ctx.arc(gx, gy, 0.75, 0, Math.PI * 2);
            }
          } else {
            ctx.moveTo(gx, gy);
            ctx.arc(gx, gy, 0.75, 0, Math.PI * 2);
          }
        }
      }
      ctx.fill();

      // Draw custom warped/glowing dots near the cursor
      if (mouse.current.active) {
        for (let c = 0; c < cols; c++) {
          for (let r = 0; r < rows; r++) {
            const gx = c * gridSpacing;
            const gy = r * gridSpacing;
            const dx = gx - mouse.current.x;
            const dy = gy - mouse.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < activeGridRadius) {
              const pullFactor = (activeGridRadius - dist) / activeGridRadius;
              
              // Magnetic warp: pull dots slightly toward mouse pointer
              const pull = pullFactor * 8.5;
              const drawX = gx - (dx / (dist || 1)) * pull;
              const drawY = gy - (dy / (dist || 1)) * pull;

              const size = 0.75 + pullFactor * 0.95;
              const opacity = 0.04 + pullFactor * 0.16;

              // Color cycling matching current mouse position
              const colRatio = (dist / activeGridRadius + time * 0.0001) % 1;
              const color = getColorString(colRatio, opacity);

              ctx.fillStyle = color;
              ctx.beginPath();
              ctx.arc(drawX, drawY, size, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // 6. Draw Mouse Cursor Waves (Ribbon Trail)
      if (mouse.current.active) {
        // Large Multi-colored Gradient Bloom following the cursor
        const t = (time * 0.00004) % 1.0;
        const radialRadius = isHovered ? 460 : 320;
        const radialGrad = ctx.createRadialGradient(
          mouse.current.x, mouse.current.y, 0,
          mouse.current.x, mouse.current.y, radialRadius
        );
        radialGrad.addColorStop(0, getColorString(t, isHovered ? 0.22 : 0.16));
        radialGrad.addColorStop(0.2, getColorString((t + 0.15) % 1, isHovered ? 0.16 : 0.11));
        radialGrad.addColorStop(0.45, getColorString((t + 0.35) % 1, isHovered ? 0.08 : 0.05));
        radialGrad.addColorStop(0.75, getColorString((t + 0.6) % 1, isHovered ? 0.02 : 0.01));
        radialGrad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = radialGrad;
        ctx.beginPath();
        ctx.arc(mouse.current.x, mouse.current.y, radialRadius, 0, Math.PI * 2);
        ctx.fill();

        // Update trail physics (snake follow)
        trail.current[0].x = mouse.current.x;
        trail.current[0].y = mouse.current.y;

        for (let i = 1; i < TRAIL_LENGTH; i++) {
          const prev = trail.current[i - 1];
          const curr = trail.current[i];
          // Spring effect
          curr.x += (prev.x - curr.x) * 0.28;
          curr.y += (prev.y - curr.y) * 0.28;
        }

        // Draw glowing wave ribbon (overlapping soft circles with screen blend)
        ctx.globalCompositeOperation = 'screen';
        for (let i = TRAIL_LENGTH - 1; i >= 0; i--) {
          const p = trail.current[i];
          const ratio = i / TRAIL_LENGTH; // 0 (head) to 1 (tail)
          const size = (1 - ratio) * 20 + 3.5;
          const opacity = (1 - ratio) * 0.24;

          const colorRatio = (ratio + time * 0.00012) % 1;
          const color = getColorString(colorRatio, opacity);

          const trailGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
          trailGrad.addColorStop(0, color);
          trailGrad.addColorStop(1, 'rgba(0,0,0,0)');

          ctx.fillStyle = trailGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 7. Update and Draw Sparks
      ctx.globalCompositeOperation = 'screen';
      sparks.current.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.life -= s.decay;

        // Apply slight friction
        s.vx *= 0.97;
        s.vy *= 0.97;

        if (s.life > 0) {
          const color = getColorString(s.colorRatio, s.life * 0.75);
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      // Filter out dead sparks
      sparks.current = sparks.current.filter((s) => s.life > 0);

      // 8. Custom Smooth Cursor Ring Following (Removed dot/ring, using large gradient bloom instead)

      // Loop
      ctx.globalCompositeOperation = 'source-over';
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Mouse movement physics speed check for spark generation
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      mouse.current.x = newX;
      mouse.current.y = newY;
      mouse.current.clientX = e.clientX;
      mouse.current.clientY = e.clientY;
      mouse.current.active = true;

      // Refs visibility toggle removed

      // Speed calculation
      const dx = newX - lastMouse.current.x;
      const dy = newY - lastMouse.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Spawn sparks if moving quickly
      if (speed > 2.5) {
        const numSparks = Math.min(3, Math.floor(speed / 3));
        for (let i = 0; i < numSparks; i++) {
          sparks.current.push({
            x: newX,
            y: newY,
            vx: (Math.random() - 0.5) * 1.8 - dx * 0.08,
            vy: (Math.random() - 0.5) * 1.8 - dy * 0.08,
            size: Math.random() * 2.2 + 0.8,
            life: 1.0,
            decay: Math.random() * 0.018 + 0.012,
            colorRatio: (time * 0.0001) % 1,
          });
        }
      }

      lastMouse.current.x = newX;
      lastMouse.current.y = newY;
    };

    const handleMouseLeave = () => {
      mouse.current.active = false;
    };

    const handleMouseEnter = () => {
      mouse.current.active = true;
    };

    // Mobile touch controls to enable particle trails & waves on touch devices
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const newX = touch.clientX - rect.left;
        const newY = touch.clientY - rect.top;

        mouse.current.x = newX;
        mouse.current.y = newY;
        mouse.current.clientX = touch.clientX;
        mouse.current.clientY = touch.clientY;
        mouse.current.active = true;

        const dx = newX - lastMouse.current.x;
        const dy = newY - lastMouse.current.y;
        const speed = Math.sqrt(dx * dx + dy * dy);

        if (speed > 2.0) {
          sparks.current.push({
            x: newX,
            y: newY,
            vx: (Math.random() - 0.5) * 1.5 - dx * 0.05,
            vy: (Math.random() - 0.5) * 1.5 - dy * 0.05,
            size: Math.random() * 2.0 + 0.6,
            life: 1.0,
            decay: Math.random() * 0.02 + 0.015,
            colorRatio: (time * 0.0001) % 1,
          });
        }

        lastMouse.current.x = newX;
        lastMouse.current.y = newY;
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const startX = touch.clientX - rect.left;
        const startY = touch.clientY - rect.top;

        mouse.current.x = startX;
        mouse.current.y = startY;
        mouse.current.clientX = touch.clientX;
        mouse.current.clientY = touch.clientY;
        mouse.current.active = true;

        lastMouse.current.x = startX;
        lastMouse.current.y = startY;

        // Initialize trail positions at touch point to avoid jumps
        trail.current.forEach((t) => {
          t.x = startX;
          t.y = startY;
        });
      }
    };

    const handleTouchEnd = () => {
      mouse.current.active = false;
    };

    // Interactive cursor ring expansion on hover
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

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    // Touch listeners
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);

      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isHovered]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#03030b]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      <div className="noise-overlay" />
    </div>
  );
}
