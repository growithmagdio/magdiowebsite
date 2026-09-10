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
      let needsRedirect = false;

      // 1. Force www domain on magdio.com
      if (url.hostname === 'magdio.com') {
        url.hostname = 'www.magdio.com';
        needsRedirect = true;
      }

      // 2. Normalize /blog to /blogs
      if (url.pathname === '/blog' || url.pathname === '/blog/') {
        url.pathname = '/blogs';
        needsRedirect = true;
      } else if (url.pathname.startsWith('/blog/')) {
        url.pathname = url.pathname.replace(/^\/blog\//, '/blogs/');
        needsRedirect = true;
      }

      // 3. Remove cache-busting query parameters
      const cacheBustingParams = ['v', 'version', 'cache', 'timestamp', 'random', 'cachebuster'];
      cacheBustingParams.forEach(param => {
        if (url.searchParams.has(param)) {
          url.searchParams.delete(param);
          needsRedirect = true;
        }
      });

      if (needsRedirect) {
        window.location.replace(url.toString());
      }
    }
  }, [location.pathname, location.search]);
}
