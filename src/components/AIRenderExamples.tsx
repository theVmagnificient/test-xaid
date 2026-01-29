import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import chestCtMask from '@/assets/chest-ct-mask.png';
import abdomenCtMask from '@/assets/abdomen-ct-mask.png';
import chestInfoBoard from '@/assets/chest-info-board.png';
import ribUnfolding from '@/assets/rib-unfolding.png';
import structuredReport from '@/assets/structured-report.png';

const tabs = [
  { id: 'chest-mask', label: 'Chest CT scan - mask', image: chestCtMask },
  { id: 'abdomen-mask', label: 'Abdomen CT scan - mask', image: abdomenCtMask },
  { id: 'chest-info', label: 'Chest CT scan - information board', image: chestInfoBoard },
  { id: 'rib', label: 'Rib unfolding', image: ribUnfolding },
  { id: 'report', label: 'Structured report', image: structuredReport },
];

const AIRenderExamples = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const goToPrev = () => {
    setActiveTabIndex((prev) => (prev === 0 ? tabs.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveTabIndex((prev) => (prev === tabs.length - 1 ? 0 : prev + 1));
  };

  const activeTab = tabs[activeTabIndex];

  return (
    <section ref={sectionRef} className="section-padding bg-[#1A1A1A]">
      <div className="container-xaid">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 fade-up">
          {/* Left: Image Carousel */}
          <div className="lg:w-[55%] relative">
            <div className="rounded-lg overflow-hidden bg-black aspect-[4/3]">
              <img
                src={activeTab.image}
                alt={activeTab.label}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#333333]/80 hover:bg-[#444444] flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#333333]/80 hover:bg-[#444444] flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Right: Title and Tabs */}
          <div className="lg:w-[45%] flex flex-col">
            {/* Section Header */}
            <div className="mb-8">
              <h2 className="text-xaid-blue font-semibold text-sm uppercase tracking-wider mb-6">
                AI Render examples
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                Our in-house rendering engine gives radiologists clear, transparent visualizations—built from the ground up to be clinically useful and intuitive
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-col gap-3">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabIndex(index)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                    activeTabIndex === index
                      ? 'bg-[#2A2A2A] border-[#3A3A3A] text-white'
                      : 'bg-[#1E1E1E] border-[#2A2A2A] text-white/50 hover:text-white/70 hover:border-[#333333]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRenderExamples;
