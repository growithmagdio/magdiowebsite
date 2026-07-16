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

      // Check and remove 'v' parameter
      if (url.searchParams.has('v')) {
        url.searchParams.delete('v');
        isPolluted = true;
      }

      // Check and remove 'version' parameter
      if (url.searchParams.has('version')) {
        url.searchParams.delete('version');
        isPolluted = true;
      }

      if (isPolluted) {
        // Construct the clean relative URL to replace state
        const cleanUrl = url.pathname + url.search + url.hash;
        window.history.replaceState(null, '', cleanUrl);
      }
    }
  }, [location.pathname, location.search]);
}
