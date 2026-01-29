import { useState, useEffect, useRef } from 'react';
import { Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <section id="contact-us" ref={sectionRef} className="section-padding bg-background">
      <div className="container-xaid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className="fade-up">
            <span className="tag mb-4">CONTACT US</span>
            <p className="body-large mb-8">
              We're always eager to explore new partnerships and research opportunities. If you have any questions or product ideas, feel free to reach out
            </p>

            <div className="space-y-6">
              <div>
                <span className="text-[12px] uppercase tracking-wider text-muted-foreground mb-2 block">
                  address
                </span>
                <p className="text-foreground">
                  8 The Green, Ste A, Dover, DE 19901, United States
                </p>
              </div>

              <a
                href="https://www.linkedin.com/company/xaid-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="fade-up" style={{ transitionDelay: '150ms' }}>
            <div className="mb-6">
              <span className="tag mb-4">Fill the form</span>
              <p className="body-regular">
                To get demo access to existing products or become an investor in new ones
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="input-dark"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email address"
                className="input-dark"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Company name"
                className="input-dark"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
              <textarea
                placeholder="Your message"
                rows={4}
                className="input-dark resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button type="submit" className="btn-primary w-full">
                Book a demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
