import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/* ── Glowing Orbiting Satellite Bead ── */
function Satellite({ radius, duration, delay, color }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 10px 3px ${color}`,
        pointerEvents: 'none',
        zIndex: 2,
      }}
      animate={{
        transform: [
          `translate(-50%, -50%) rotate(0deg) translate(${radius}px) rotate(0deg)`,
          `translate(-50%, -50%) rotate(360deg) translate(${radius}px) rotate(-360deg)`
        ]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

/* ── Thruster Exhaust Pulse / Shockwave Rings ── */
function ExhaustShockwave({ delay }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '150px',
        left: '50%',
        width: '10px',
        height: '4px',
        borderRadius: '50%',
        border: '1.5px solid rgba(255, 120, 0, 0.8)',
        boxShadow: '0 0 12px 2px rgba(255, 120, 0, 0.4)',
        pointerEvents: 'none',
        zIndex: 3,
      }}
      animate={{
        width: ['10px', '70px'],
        height: ['4px', '25px'],
        y: [0, 60],
        opacity: [0.9, 0],
        x: ['-50%', '-50%'],
      }}
      transition={{
        duration: 1.6,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  );
}

/* ── Vivid Dynamic Engine Spark ── */
function Spark({ delay }) {
  const randomX = Math.random() * 26 - 13;
  const randomYStart = 145 + Math.random() * 10;
  const randomDuration = Math.random() * 1.2 + 0.6;
  const size = Math.random() * 5 + 2;
  const color = Math.random() > 0.45
    ? 'rgba(255, 200, 0, 0.95)'
    : Math.random() > 0.5
      ? 'rgba(255, 90, 0, 0.9)'
      : 'rgba(255, 255, 255, 0.95)';

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `calc(50% + ${randomX}px)`,
        top: `${randomYStart}px`,
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 8px 2px ${color}`,
        pointerEvents: 'none',
        zIndex: 4,
      }}
      animate={{
        y: [0, 95],
        x: [0, randomX * 1.8],
        scale: [1.3, 0.1],
        opacity: [0.9, 0],
      }}
      transition={{
        duration: randomDuration,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  );
}

/* ── Stars & Ambient Particles ── */
function FloatingParticle({ x, y, size, delay, duration }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: '50%',
        background: Math.random() > 0.6
          ? 'radial-gradient(circle, #818cf8 0%, transparent 100%)'
          : 'radial-gradient(circle, #facc15 0%, transparent 100%)',
        boxShadow: Math.random() > 0.6
          ? '0 0 8px 3px rgba(129, 140, 248, 0.6)'
          : '0 0 8px 3px rgba(250, 204, 21, 0.5)',
        pointerEvents: 'none',
      }}
      animate={{
        y: [0, -35, 0],
        opacity: [0.25, 0.9, 0.25],
        scale: [0.9, 1.4, 0.9],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

const PARTICLES = [
  { x: 5,  y: 20, size: 4,  delay: 0,    duration: 3.5 },
  { x: 15, y: 80, size: 2,  delay: 0.9,  duration: 4.5 },
  { x: 25, y: 35, size: 3,  delay: 1.6,  duration: 3.0 },
  { x: 75, y: 15, size: 4,  delay: 0.4,  duration: 3.8 },
  { x: 85, y: 70, size: 2,  delay: 1.2,  duration: 4.8 },
  { x: 92, y: 40, size: 3,  delay: 0.7,  duration: 3.2 },
  { x: 45, y: 8,  size: 2,  delay: 2.1,  duration: 5.2 },
  { x: 62, y: 90, size: 4,  delay: 0.5,  duration: 3.6 },
];

/* ── Glassmorphic Service Card with Shimmer & Floating Motion ── */
function ServiceCard({ label, icon, delay, positionStyle, mouseX, mouseY, floatRange, floatDuration }) {
  const cardX = useTransform(mouseX, [-250, 250], [18, -18]);
  const cardY = useTransform(mouseY, [-250, 250], [18, -18]);

  const smoothCardX = useSpring(cardX, { damping: 25, stiffness: 140, mass: 0.6 });
  const smoothCardY = useSpring(cardY, { damping: 25, stiffness: 140, mass: 0.6 });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'absolute',
        ...positionStyle,
        x: smoothCardX,
        y: smoothCardY,
        zIndex: 20,
      }}
    >
      {/* Individual float offset loop */}
      <motion.div
        animate={{ y: [0, floatRange, 0] }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.07 }}
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '16px',
          padding: '14px 22px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: '0 20px 45px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.15)',
          cursor: 'default',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Shimmer sweep effect */}
        <motion.div
          animate={{ x: ['-200%', '200%'] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', delay }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)',
            pointerEvents: 'none',
          }}
        />

        <span style={{ fontSize: '20px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>{icon}</span>
        <span style={{
          color: 'rgba(255, 255, 255, 0.92)',
          fontSize: '13px',
          fontWeight: '600',
          letterSpacing: '0.03em',
          fontFamily: "'Outfit', 'Inter', sans-serif",
        }}>
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}

/* ── Golden Rocket SVG with Interactive Lights & Sweeps ── */
function RocketSVG({ mouseX, mouseY }) {
  const gradientX1 = useTransform(mouseX, [-250, 250], [-30, 130]);
  const gradientY1 = useTransform(mouseY, [-250, 250], [-30, 130]);
  
  const smoothGX1 = useSpring(gradientX1, { damping: 30, stiffness: 100 });
  const smoothGY1 = useSpring(gradientY1, { damping: 30, stiffness: 100 });

  return (
    <svg
      viewBox="0 0 120 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 40px rgba(242,179,0,0.7))' }}
    >
      <defs>
        <motion.linearGradient id="rocketBody" x1={smoothGX1} y1={smoothGY1} x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF7C2" />
          <stop offset="25%" stopColor="#FFD700" />
          <stop offset="65%" stopColor="#F2B300" />
          <stop offset="100%" stopColor="#A86200" />
        </motion.linearGradient>
        
        {/* Animated Window Reflection Sweep */}
        <linearGradient id="rocketWindow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="40%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>

        <linearGradient id="flameOuter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF878" stopOpacity="0.95" />
          <stop offset="40%" stopColor="#FF7C00" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FF1100" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="flameInner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="60%" stopColor="#FFDF5C" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FF7A00" stopOpacity="0" />
        </linearGradient>

        <filter id="superGlow">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main engine flame with scale pulsing */}
      <motion.g
        animate={{ scaleY: [1, 1.15, 0.95, 1], scaleX: [1, 0.95, 1.05, 1] }}
        transition={{ duration: 0.15, repeat: Infinity, ease: 'linear' }}
        style={{ originX: '60px', originY: '140px' }}
      >
        <ellipse cx="60" cy="158" rx="20" ry="32" fill="url(#flameOuter)" filter="url(#superGlow)" />
        <ellipse cx="60" cy="148" rx="9" ry="18" fill="url(#flameInner)" />
      </motion.g>

      {/* Left/Right fins */}
      <path d="M38 128 L16 160 L46 142 Z" fill="#D97706" opacity="0.95" />
      <path d="M82 128 L104 160 L74 142 Z" fill="#D97706" opacity="0.95" />

      {/* Sleek central engine nozzle */}
      <rect x="52" y="132" width="16" height="10" rx="2" fill="#52525b" />

      {/* Main rocket body */}
      <path
        d="M40 130 Q37 98 42 70 Q50 25 60 10 Q70 25 78 70 Q83 98 80 130 Z"
        fill="url(#rocketBody)"
        filter="url(#superGlow)"
      />

      {/* Nose cone tip cover */}
      <path
        d="M51 30 Q56 22 60 10 Q64 22 69 30 Z"
        fill="rgba(255,255,255,0.4)"
      />

      {/* Window */}
      <circle cx="60" cy="85" r="14" fill="url(#rocketWindow)" opacity="0.95" />
      <circle cx="60" cy="85" r="11" fill="rgba(255,255,255,0.2)" />
      <circle cx="55" cy="80" r="3.5" fill="rgba(255,255,255,0.6)" />

      {/* Window reflection sweep line */}
      <motion.path
        d="M49 85 Q60 85 71 85"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Highlight glow sweep across the body */}
      <path
        d="M47 68 Q50 48 53 33 L57 35 Q53 52 51 72 Z"
        fill="rgba(255,255,255,0.3)"
      />
    </svg>
  );
}

/* ── Config array for the out-of-phase floating cards ── */
const SERVICE_CARDS = [
  { label: 'Precision Content Strategy', icon: '✍️', delay: 0.5,  positionStyle: { top: '8%',   left: '-12%' }, floatRange: -8,  floatDuration: 4.8 },
  { label: 'Strategic Branding',         icon: '🎯', delay: 0.7,  positionStyle: { top: '44%',  left: '-20%' }, floatRange: 8,   floatDuration: 5.2 },
  { label: 'Powerful Collaborations',    icon: '🤝', delay: 0.9,  positionStyle: { top: '8%',   right: '-12%'}, floatRange: 6,   floatDuration: 4.5 },
  { label: 'Modern Creative Designs',    icon: '✨', delay: 1.1,  positionStyle: { top: '44%',  right: '-20%'}, floatRange: -6,  floatDuration: 5.0 },
];

export default function RocketHero() {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 0.9 };
  
  const rotateX = useSpring(useTransform(mouseY, [-250, 250], [18, -18]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-250, 250], [-18, 18]), springConfig);
  
  const rocketX = useSpring(useTransform(mouseX, [-250, 250], [22, -22]), springConfig);
  const rocketY = useSpring(useTransform(mouseY, [-250, 250], [22, -22]), springConfig);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const x = event.clientX - rect.left - width / 2;
    const y = event.clientY - rect.top - height / 2;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '540px',
        height: '520px',
        margin: '0 auto',
        perspective: 1200,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* ── Background Cosmic Aura & Gradient Glows ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Deep electric purple aura */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '340px',
            height: '340px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(59,130,246,0.2) 60%, transparent 75%)',
            filter: 'blur(25px)',
          }}
        />
        {/* Soft engine aura */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 0.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '55%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,90,0,0.55) 0%, transparent 70%)',
            filter: 'blur(15px)',
          }}
        />
      </div>

      {/* Floating Stars */}
      {PARTICLES.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      {/* ── Interactive Shockwave Rings ── */}
      {Array.from({ length: 3 }).map((_, i) => (
        <ExhaustShockwave key={i} delay={i * 0.5} />
      ))}

      {/* ── Dash/Orbit Ring Decors with Orbiting Satellites ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '360px',
            height: '360px',
            marginTop: '-180px',
            marginLeft: '-180px',
            borderRadius: '50%',
            border: '1.5px dashed rgba(99,102,241,0.2)',
          }}
        />
        <Satellite radius={180} duration={25} delay={0} color="#818cf8" />

        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '460px',
            height: '460px',
            marginTop: '-230px',
            marginLeft: '-230px',
            borderRadius: '50%',
            border: '1.2px dashed rgba(242,179,0,0.15)',
          }}
        />
        <Satellite radius={230} duration={40} delay={2} color="#facc15" />
      </div>

      {/* ── Rocket Scene Core ── */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '130px',
          height: '190px',
          marginTop: '-95px',
          marginLeft: '-65px',
          transformStyle: 'preserve-3d',
          x: rocketX,
          y: rocketY,
          rotateX: rotateX,
          rotateY: rotateY,
          zIndex: 10,
        }}
      >
        {/* Gentle floating motion loop */}
        <motion.div
          animate={{
            y: [0, -22, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            y:      { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          {/* Dense engine spark flame trail */}
          {Array.from({ length: 10 }).map((_, i) => (
            <Spark key={i} delay={i * 0.12} />
          ))}

          {/* Golden Rocket SVG */}
          <RocketSVG mouseX={mouseX} mouseY={mouseY} />
        </motion.div>

        {/* Pulse glow circle surrounding the rocket */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '130px',
            height: '130px',
            marginTop: '-65px',
            marginLeft: '-65px',
            borderRadius: '50%',
            border: '2px solid rgba(242,179,0,0.35)',
            pointerEvents: 'none',
          }}
        />
      </motion.div>

      {/* ── Glassmorphic Service Cards (With Parallax + Out-of-Phase Floating) ── */}
      {SERVICE_CARDS.map((card) => (
        <ServiceCard
          key={card.label}
          mouseX={mouseX}
          mouseY={mouseY}
          {...card}
        />
      ))}

      {/* ── Interactive Growth Engine Badge ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '50px',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
          zIndex: 20,
          whiteSpace: 'nowrap',
        }}
      >
        <motion.span
          animate={{ scale: [1, 1.35, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            display: 'inline-block',
            width: '9px',
            height: '9px',
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 12px rgba(16,185,129,0.85)',
          }}
        />
        <span style={{
          color: 'rgba(255, 255, 255, 0.88)',
          fontSize: '12px',
          fontWeight: '600',
          fontFamily: "'Outfit', 'Inter', sans-serif",
          letterSpacing: '0.03em',
        }}>
          AI-Powered Growth Engine · Live
        </span>
      </motion.div>
    </div>
  );
}
