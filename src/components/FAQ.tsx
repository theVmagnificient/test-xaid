import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does this work without FDA clearance?',
    answer: 'We contract as a professional radiology service, not AI software. Your radiologists review and sign every report — AI is our internal tool. This means no FDA clearance is required for the service.',
  },
  {
    question: 'What\'s the turnaround time?',
    answer: '2 to 12 hours, configurable. Optimized for outpatient and scheduled studies. We work with your operational requirements to set SLAs that fit your workflow.',
  },
  {
    question: 'What if a report needs edits?',
    answer: 'We guarantee 90% of reports need zero edits. If we fall below that threshold, we reimburse. It\'s the only such guarantee in radiology AI.',
  },
  {
    question: 'How does integration work?',
    answer: 'Standard DICOM send to our PACS. Reports return via HL7 into your system. Setup typically takes under one week — our team handles the technical side with minimal IT involvement on yours.',
  },
  {
    question: 'Do you cover MRI or X-ray?',
    answer: 'CT only today — head, chest, and abdomen. MRI is on the roadmap. We focus on depth of coverage rather than breadth: 60+ findings per CT study.',
  },
  {
    question: 'Is my data secure?',
    answer: 'HIPAA compliant. US-based AWS infrastructure. BAA available. Zero-footprint viewers — no data leaves US servers. We\'re also ISO 27001 certified.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    <section id="faq" ref={sectionRef} className="section-padding bg-[#EBEBEB]">
      <div className="container-xaid">
        {/* White Card Container */}
        <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16">
          {/* Section Header */}
          <div className="mb-8 md:mb-10 fade-up">
            <span className="text-xaid-blue font-semibold text-sm uppercase tracking-wider mb-4 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0D0D0D]">Questions from real calls</h2>
          </div>

          {/* FAQ List */}
          <div className="max-w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 fade-up"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  className="w-full flex items-center justify-between py-5 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-[#0D0D0D] font-medium text-base md:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[300px] pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
