import { useState, useEffect, useRef } from 'react';
import { Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    occupation: '',
    organization: '',
    email: '',
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
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <section id="contact-us" ref={sectionRef} className="py-16 md:py-24 bg-[#0D0D0D]">
      <div className="container-xaid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Contact Info (Blue Card) */}
          <div className="fade-up relative overflow-hidden bg-xaid-blue rounded-2xl p-8 md:p-12 min-h-[400px]">
            {/* Decorative X Pattern */}
            <div className="absolute bottom-0 right-0 opacity-20">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 0L200 100L100 200L0 100L100 0Z" fill="currentColor" className="text-[#4A6FE8]"/>
                <path d="M100 40L160 100L100 160L40 100L100 40Z" fill="currentColor" className="text-[#3A5FD8]"/>
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                CONTACT US
              </h3>
              <p className="text-white/80 text-base leading-relaxed mb-10 max-w-[400px]">
                We're always eager to explore new partnerships and research opportunities. If you have any questions or product ideas, feel free to reach out
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">
                    ADDRESS
                  </h4>
                  <p className="text-white/80">
                    8 The Green, Ste A, Dover, DE 19901, United States
                  </p>
                </div>

                <a
                  href="https://www.linkedin.com/company/xaid-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form (White Card) */}
          <div className="fade-up bg-white rounded-2xl p-8 md:p-12" style={{ transitionDelay: '150ms' }}>
            <div className="mb-6">
              <h3 className="text-[#0D0D0D] font-semibold text-xl mb-2">Fill the form</h3>
              <p className="text-gray-500 text-base">
                To get demo access to existing products or become an investor in new ones
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0D0D0D] placeholder:text-gray-400 focus:outline-none focus:border-xaid-blue transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Occupation*"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0D0D0D] placeholder:text-gray-400 focus:outline-none focus:border-xaid-blue transition-colors"
                  value={formData.occupation}
                  onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Organization / Hospital field*"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0D0D0D] placeholder:text-gray-400 focus:outline-none focus:border-xaid-blue transition-colors"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0D0D0D] placeholder:text-gray-400 focus:outline-none focus:border-xaid-blue transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0D0D0D] placeholder:text-gray-400 focus:outline-none focus:border-xaid-blue transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <div className="flex justify-end">
                <button type="submit" className="bg-xaid-blue hover:bg-xaid-blue/90 text-white font-medium px-8 py-3 rounded-full transition-colors">
                  Book a demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
