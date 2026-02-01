import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What are the limitations?',
    answer: 'Our AI system is designed to assist radiologists, not replace them. All reports are reviewed and validated by radiologists before delivery.',
  },
  {
    question: 'What are the minimal system requirements?',
    answer: 'xAID integrates with standard PACS/RIS systems via HL7 or API. Our team handles the technical integration with minimal IT involvement.',
  },
  {
    question: 'How is it intended to be used?',
    answer: 'xAID provides preliminary reads that are ready for radiologist sign-off, enabling faster turnaround and consistent quality across all shifts.',
  },
  {
    question: 'How is personal data protected?',
    answer: 'We maintain HIPAA compliance and use enterprise-grade encryption for all data in transit and at rest. Our infrastructure is SOC 2 Type II certified.',
  },
  {
    question: 'Can I use the platform for scientific research?',
    answer: 'Yes, we offer research partnerships with de-identified datasets. Contact us to discuss your research needs.',
  },
  {
    question: 'Are there any scientific reports on experience with the products?',
    answer: 'We have published peer-reviewed studies demonstrating the accuracy and efficiency of our AI-assisted workflow. Contact us for access to our clinical validation data.',
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
    <section ref={sectionRef} className="section-padding bg-[#EBEBEB]">
      <div className="container-xaid">
        {/* White Card Container */}
        <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16">
          {/* Section Header */}
          <div className="mb-8 md:mb-10 fade-up">
            <span className="text-xaid-blue font-semibold text-sm uppercase tracking-wider mb-4 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0D0D0D]">Questions and answers</h2>
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
                    openIndex === index ? 'max-h-[200px] pb-5' : 'max-h-0'
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
