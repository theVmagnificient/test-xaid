import { useState, useEffect, useRef } from 'react';
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
  const [activeTab, setActiveTab] = useState('chest-mask');
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

  const activeImage = tabs.find((tab) => tab.id === activeTab)?.image || chestCtMask;

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-xaid">
        {/* Section Header */}
        <div className="mb-10 md:mb-14 fade-up">
          <span className="tag mb-4">AI Render examples</span>
          <p className="body-large max-w-[700px]">
            Our in-house rendering engine gives radiologists clear, transparent visualizations—built from the ground up to be clinically useful and intuitive
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 fade-up">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`gallery-tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Display */}
        <div className="fade-up rounded-2xl overflow-hidden bg-card border border-border">
          <img
            src={activeImage}
            alt={tabs.find((tab) => tab.id === activeTab)?.label}
            className="w-full h-auto max-h-[600px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AIRenderExamples;
