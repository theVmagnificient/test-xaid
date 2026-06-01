import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

// Page order based on nav menu position (left = lower number)
const PAGE_ORDER: Record<string, number> = {
  '/': 0,
  '/how-ai-ct-reporting-works': 0,
  '/accuracy': 0,
  '/compliance': 0,
  '/integrations': 0,
  '/for-outpatient-imaging-centers': 1,
  '/ai-vs-teleradiology': 1,
  '/ai-vs-locum-radiologist': 1,
  '/for-teleradiology-companies': 2,
  '/for-radiology-groups': 2,
  '/for-small-hospitals': 2,
  '/pricing': 3,
  '/blog': 4,
  '/privacy-policy': 5,
};

function getOrder(pathname: string): number {
  if (PAGE_ORDER[pathname] !== undefined) return PAGE_ORDER[pathname];
  if (pathname.startsWith('/blog/')) return 4.5;
  return 2;
}

// Module-level state — persists across renders, resets on full page reload
let _prevPathname: string | null = null;
let _transitionKey = 0;
let _direction: 'right' | 'left' = 'right';

export const PageTransitionWrapper = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const curr = location.pathname;

  if (_prevPathname === null) {
    // First load — no animation
    _prevPathname = curr;
  } else if (_prevPathname !== curr) {
    const prevOrder = getOrder(_prevPathname);
    const currOrder = getOrder(curr);
    _direction = currOrder >= prevOrder ? 'right' : 'left';
    _transitionKey++;
    _prevPathname = curr;
  }

  const animClass =
    _transitionKey > 0
      ? _direction === 'right'
        ? 'page-enter-from-right'
        : 'page-enter-from-left'
      : '';

  return (
    <div key={_transitionKey} className={animClass}>
      {children}
    </div>
  );
};
