import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Guarantee = () => {
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

  return (
    <section id="results" ref={sectionRef} className="section-padding bg-[#0D0D0D]">
      <div className="container-xaid">

        {/* Eyebrow */}
        <div className="fade-up mb-10 md:mb-14">
          <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em]">
            Accuracy & guarantee
          </span>
        </div>

        {/* Headline stat */}
        <div
          className="fade-up flex items-end gap-4 md:gap-6 pb-8 md:pb-10 border-b border-white/10"
          style={{ transitionDelay: '100ms' }}
        >
          <span className="text-xaid-blue font-medium leading-none tracking-tight text-[70px] md:text-[100px] lg:text-[130px]">
            95%
          </span>
          <span className="text-white font-normal leading-none mb-2 md:mb-3 lg:mb-4 text-[22px] md:text-[30px] lg:text-[38px]">
            accuracy
          </span>
        </div>

        {/* Tagline + CTA row */}
        <div
          className="fade-up pt-8 md:pt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
          style={{ transitionDelay: '200ms' }}
        >
          <div>
            <p className="text-white font-normal leading-[1.15] text-[20px] md:text-[28px] lg:text-[36px] mb-4">
              — or we reimburse
            </p>
            <p className="text-white/60 text-[15px] leading-[1.65] font-light max-w-md">
              No other AI vendor offers a money-back accuracy guarantee
            </p>
          </div>

          <Link
            to="/#contact-us"
            className="group inline-flex items-center justify-center gap-2 bg-xaid-blue-strong hover:bg-xaid-blue-strong-hover text-white text-[15px] font-medium px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-[1px] flex-shrink-0"
          >
            Book a demo
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2}
              aria-hidden="true"
            />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Guarantee;
