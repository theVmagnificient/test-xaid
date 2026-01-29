import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What are the limitations?',
    answer: 'Our AI system is designed to assist radiologists, not replace them. All reports are reviewed and validated by board-certified radiologists before delivery.',
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
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-xaid">
        {/* Section Header */}
        <div className="mb-10 md:mb-14 fade-up">
          <span className="tag mb-4">process</span>
          <h2 className="heading-section text-foreground">Questions and answers</h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-[800px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item fade-up"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                className="faq-trigger"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[200px] pb-5' : 'max-h-0'
                }`}
              >
                <p className="body-regular">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
