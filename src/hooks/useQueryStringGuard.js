import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to guard the URL against invalid query parameters (e.g. ?v=... or ?version=...)
 * to prevent search engines from crawling and indexing parameter polluted URLs.
 */
export default function useQueryStringGuard() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      let isPolluted = false;

      // Define cache-busting parameters to check and remove
      const cacheBustingParams = ['v', 'version', 'cache', 'timestamp', 'random', 'cachebuster'];

      cacheBustingParams.forEach(param => {
        if (url.searchParams.has(param)) {
          url.searchParams.delete(param);
          isPolluted = true;
        }
      });

      if (isPolluted) {
        // Construct the clean relative URL
        const cleanUrl = url.pathname + url.search + url.hash;
        // Redirect to the clean URL (helps bots recognize the redirection)
        window.location.replace(cleanUrl);
      }
    }
  }, [location.pathname, location.search]);
}
