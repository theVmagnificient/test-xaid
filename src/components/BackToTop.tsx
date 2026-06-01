import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{ boxShadow: '0 0 24px rgba(107, 137, 250, 0.45)' }}
      className="fixed bottom-[80px] right-3 z-50 w-10 h-10 rounded-full bg-white border-[3px] border-[#2a2858] flex items-center justify-center text-xaid-blue hover:scale-105 transition-all duration-200"
    >
      <ChevronUp size={18} strokeWidth={3} />
    </button>
  );
};

export default BackToTop;
