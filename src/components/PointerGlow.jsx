import { useEffect, useState } from 'react';

export default function PointerGlow() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      // Expand the cursor if hovering over interactive elements
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
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Large beautiful multi-color ambient backdrop spotlight that follows pointer */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 opacity-90 transition-all duration-300"
        style={{
          background: isHovered 
            ? `radial-gradient(900px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(26, 34, 184, 0.28) 0%, rgba(138, 43, 226, 0.18) 35%, rgba(242, 179, 0, 0.1) 65%, transparent 80%)`
            : `radial-gradient(650px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(26, 34, 184, 0.2) 0%, rgba(138, 43, 226, 0.12) 30%, rgba(242, 179, 0, 0.06) 60%, transparent 80%)`
        }}
      />
      {/* Modern golden micro-ring cursor tracker that expands on hover */}
      <div 
        className="pointer-events-none fixed rounded-full z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out hidden md:block"
        style={{
          left: 'var(--mouse-x, -1000px)',
          top: 'var(--mouse-y, -1000px)',
          width: isHovered ? '46px' : '22px',
          height: isHovered ? '46px' : '22px',
          backgroundColor: isHovered ? 'rgba(26, 34, 184, 0.12)' : 'transparent',
          borderColor: isHovered ? '#1A22B8' : '#F2B300',
          borderWidth: isHovered ? '2px' : '1px',
          boxShadow: isHovered 
            ? '0 0 25px rgba(26, 34, 184, 0.5), inset 0 0 10px rgba(26, 34, 184, 0.2)' 
            : '0 0 15px rgba(242, 179, 0, 0.25), inset 0 0 5px rgba(242, 179, 0, 0.1)'
        }}
      />
    </>
  );
}
