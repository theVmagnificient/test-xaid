import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay so the page renders before we try to find the element
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
        }
      }, 80);
      return () => clearTimeout(timer);
    } else {
      // Instant jump — avoid the "same page scroll" feeling on navigation
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
