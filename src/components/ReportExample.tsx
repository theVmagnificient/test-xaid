import { useEffect, useRef } from 'react';
import reportScan from '@/assets/report-example-scan.png';
import reportText from '@/assets/report-example-text.png';
import reportRawCt from '@/assets/report-example-raw-ct.png';
const ReportExample = () => {
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
    <section ref={sectionRef} className="section-padding bg-[#0D0D0D]">
      <div className="container-xaid">
        {/* Title */}
        <div className="text-center mb-12 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Report Example
          </h2>
          <p className="text-[#888888] mt-4 max-w-2xl mx-auto">
            See how xAID generates comprehensive, ready-to-sign reports with detailed findings and structured impressions.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto fade-up">
          {/* Left Column - CT Scans */}
          <div className="space-y-4">
            {/* CT Scan with Annotations */}
            <div className="bg-[#1A1A1A] rounded-2xl p-4 border border-[#2A2A2A]">
              <img
                src={reportScan}
                alt="CT scan with AI annotations showing lung nodules, pleural effusion, aorta measurements and other findings"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Raw CT Scan */}
            <div className="bg-[#1A1A1A] rounded-2xl p-4 border border-[#2A2A2A]">
              <img
                src={reportRawCt}
                alt="Raw CT chest scan showing pulmonary structures"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right Column - Text Report */}
          <div className="bg-white rounded-2xl p-4 border border-[#E5E5E5] h-fit">
            <img
              src={reportText}
              alt="Structured radiology report with findings and impressions"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportExample;
