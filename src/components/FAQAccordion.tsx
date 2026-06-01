import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQ = { q: string; a: string };

type Variant = 'light' | 'dark';

interface FAQAccordionProps {
  faqs: FAQ[];
  variant?: Variant;
}

const FAQAccordion = ({ faqs, variant = 'dark' }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const styles = variant === 'light'
    ? {
        border: 'border-gray-100',
        question: 'text-[#0D0D0D]',
        chevron: 'text-gray-400',
        answer: 'text-[#666]',
      }
    : {
        border: 'border-white/10',
        question: 'text-white',
        chevron: 'text-white/40',
        answer: 'text-white/60',
      };

  return (
    <div className="max-w-full">
      {faqs.map((faq, index) => (
        <div key={index} className={`border-b ${styles.border} last:border-0`}>
          <button
            className="w-full flex items-center justify-between py-5 text-left gap-4"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className={`${styles.question} font-medium text-[18px] leading-[1.3]`}>{faq.q}</span>
            <ChevronDown
              className={`w-5 h-5 ${styles.chevron} transition-transform duration-200 flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-[1000px] pb-5' : 'max-h-0'
            }`}
          >
            <p className={`${styles.answer} text-[15px] leading-[1.65] font-light`}>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
