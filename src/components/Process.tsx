import { useEffect, useRef } from 'react';

const steps = [
  {
    number: 1,
    title: 'Receive the Study',
    description: 'The scan comes in from the client\'s PACS/RIS and is automatically routed',
  },
  {
    number: 2,
    title: 'Run AI Analysis',
    description: 'AI detects key findings and generates a structured preliminary draft',
  },
  {
    number: 3,
    title: 'AI template standartization',
    description: 'Custom report templates are created for the client and used by AI on every case',
  },
  {
    number: 4,
    title: 'Radiologist Review',
    description: 'Our radiologist reviews and validates the AI-assisted report.',
  },
  {
    number: 5,
    title: 'Report is delivered via HL7/API',
    description: 'The finalized preliminary report is sent back into the client\'s PACS/RIS',
  },
];

const Process = () => {
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
        <div className="mb-12 md:mb-16 fade-up">
          <span className="tag mb-4">process</span>
          <h2 className="heading-section text-foreground">
            Consistent, AI-enhanced workflow that reduces variability and raises overall quality
          </h2>
        </div>

        {/* Process Steps */}
        <div className="space-y-6 md:space-y-8 max-w-[800px]">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex gap-5 md:gap-6 fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="process-number">{step.number}</div>
              <div className="pt-1">
                <h3 className="heading-card text-foreground mb-2">{step.title}</h3>
                <p className="body-regular">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
