import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How accurate is AI CT reporting compared to a radiologist?',
    answer: 'xAID achieves 95% accuracy verified by peer-reviewed studies. Every report is also reviewed by our in-house radiologist before delivery',
  },
  {
    question: 'What is the CT report turnaround time?',
    answer: '2 to 12 hours from DICOM receipt to report delivery — 24/7, including after-hours and weekends, at no surcharge. The ACR guideline for routine CT is 24 hours; xAID typically delivers in a fraction of that. Configurable SLAs available for STAT and urgent studies',
  },
  {
    question: 'How does AI CT reporting compare to locum radiologists in cost?',
    answer: 'Locum radiologists cost $500,000–$650,000 per year for full-time coverage, take 6–18 months to recruit and credential, and carry burnout and turnover risk. xAID charges per study at narrow AI rates, sets up in under one week, and includes 24/7 coverage — with no staffing overhead',
  },
  {
    question: 'How does DICOM and HL7 integration work?',
    answer: 'Your PACS sends CT studies to xAID via standard DICOM C-STORE. Preliminary reports are returned via HL7 ORU message to your RIS — or as PDF. No custom middleware or development required. Most installations are complete in under one week',
  },
  {
    question: 'Is AI CT reporting HIPAA compliant?',
    answer: 'Yes. xAID is HIPAA-compliant and ISO 27001 certified. All patient data is processed exclusively in US-based, HIPAA-certified infrastructure. We sign a Business Associate Agreement (BAA) before your first study — not as a formality, but as the default',
  },
  {
    question: 'What CT scan types does xAID cover?',
    answer: 'Head CT, chest CT, and abdomen CT — 100+ findings per report. xAID analyzes lung nodules, coronary calcium, stroke signs, hemorrhage, abdominal organs, fractures, vascular measurements, and more. MRI is on the roadmap. We focus on depth of CT coverage rather than breadth of modalities',
  },
  {
    question: 'How does xAID differ from AI detection tools?',
    answer: 'AI detection tools flag suspected findings and reprioritize the worklist, but the radiologist still reads and writes the full report from scratch. xAID is a full reporting service: AI analysis generates the complete structured report, which our in-house European radiologist reviews before delivery. The output from xAID is a ready-to-sign document; the output from detection tools is an alert. Detection tools are designed for hospital ED workflows; xAID is designed for outpatient imaging centers and teleradiology providers that need the complete report delivered',
  },
  {
    question: 'What does AI CT reporting cost compared to traditional teleradiology?',
    answer: 'Traditional teleradiology typically charges $40–$80 per routine CT study with a 30–100% after-hours surcharge. AI CT reporting with xAID is priced at narrow AI rates — with radiologist review included in the per-study price and zero after-hours surcharge. For a mid-volume outpatient center with significant after-hours volume, the effective annual cost difference can exceed $200,000. See our full CT radiology coverage cost comparison for in-house, locum, teleradiology, and AI pricing side-by-side',
  },
  {
    question: 'How long does it take to switch from teleradiology to AI CT reporting?',
    answer: 'For a complete transition: 1 week for a free pilot evaluation (no integration required), 3–5 business days for DICOM/HL7 integration, and an optional 2–4 week parallel period. Total: 2–3 weeks from first contact to full cutover. The DICOM/HL7 integration uses standard protocols your PACS already supports — most setups require 2–4 hours of PACS administrator time with xAID onboarding support',
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
        <div className="bg-white rounded-2xl p-8 md:p-10 lg:p-12">
          {/* Section Header */}
          <div className="mb-8 md:mb-10 fade-up">
            <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">FAQ</span>
            <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal text-[#0D0D0D] leading-[1.15]">Questions from real calls</h2>
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
                  <span className="text-[#0D0D0D] font-medium text-[18px]">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[1000px] pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 text-[15px] leading-[1.65] font-light">{faq.answer}</p>
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
