import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useQueryStringGuard from './hooks/useQueryStringGuard';

// Lazy load non-critical visual background & widget overlays
const PremiumBackground = lazy(() => import('./components/PremiumBackground'));
const FloatingElements  = lazy(() => import('./components/FloatingElements'));
const PointerGlow       = lazy(() => import('./components/PointerGlow'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useQueryStringGuard();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname]);

  return null;
}

const pageTransition = {
  initial:  { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0 },
  exit:     { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: 'easeInOut' },
};

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-white/5" />
        <div className="absolute inset-0 rounded-full border-4 border-brand-purple border-t-transparent animate-spin" />
      </div>
    </div>
  );
}

export default function App() {
  const [loadVisuals, setLoadVisuals] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';
  const activePageTransition = isAdmin
    ? {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 1, y: 0 },
        transition: { duration: 0 }
      }
    : pageTransition;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let timerId;
    let loaded = false;

    const triggerVisuals = () => {
      if (loaded) return;
      loaded = true;
      if (timerId) clearTimeout(timerId);
      ['touchstart', 'scroll', 'mousemove'].forEach(evt => {
        window.removeEventListener(evt, triggerVisuals);
      });
      setLoadVisuals(true);
    };

    ['touchstart', 'scroll', 'mousemove'].forEach(evt => {
      window.addEventListener(evt, triggerVisuals, { passive: true, once: true });
    });

    timerId = setTimeout(triggerVisuals, 3500);

    return () => {
      if (timerId) clearTimeout(timerId);
      ['touchstart', 'scroll', 'mousemove'].forEach(evt => {
        window.removeEventListener(evt, triggerVisuals);
      });
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="overflow-x-hidden w-full relative min-h-screen flex flex-col bg-transparent">
        <Suspense fallback={null}>
          {loadVisuals && <PremiumBackground />}
          {loadVisuals && <PointerGlow />}
          {loadVisuals && <FloatingElements />}
        </Suspense>
        <Navbar />
        <div className="overflow-x-hidden w-full relative min-h-screen flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div key={location.pathname} {...activePageTransition} className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
              <Footer />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
