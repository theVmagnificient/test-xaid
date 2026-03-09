import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Shield, Server, FileCheck, BadgeCheck } from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha";

const FORMSPARK_ACTION_URL = 'https://submit-form.com/ADee6zSRu';
const RECAPTCHA_SITE_KEY = '6LeiQEYoAAAAANUaJXHwdhm3HpR5SEPrbVXj-Ra6';

const trustBadges = [
  { icon: Shield, label: 'HIPAA Compliant' },
  { icon: Server, label: 'AWS US Infrastructure' },
  { icon: FileCheck, label: 'BAA Available' },
  { icon: BadgeCheck, label: 'ISO 27001 Viewers' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
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

  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const postForm = async (formData: object): Promise<Response> => {
    return await fetch(FORMSPARK_ACTION_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const token = await recaptchaRef.current.executeAsync();
    try {
      const response = await postForm({ ...formData, "g-recaptcha-response": token });
      if (!response.ok) {
        throw new Error('Failed to post form');
      }

      setFormData({ name: '', organization: '', email: '' });
      alert('Your message has been sent. Thank you for your interest!');
    } catch (err) {
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" ref={sectionRef} className="pt-6 md:pt-8 pb-16 md:pb-24 bg-[#0D0D0D]">
      <div className="container-xaid">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-up">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
            >
              <Icon className="w-4 h-4 text-xaid-blue flex-shrink-0" />
              <span className="text-white/70 text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>

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
              <p className="text-white text-2xl font-semibold mb-3 leading-snug">
                Get a Free 5-Study Pilot
              </p>
              <p className="text-white/80 text-base leading-relaxed mb-10 max-w-[400px]">
                Send us 5 CT studies. See the reports. No integration required. No commitment.
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
              <h3 className="text-[#0D0D0D] font-semibold text-xl mb-2">Start your pilot</h3>
              <p className="text-gray-500 text-base">
                Fill in your details and we'll get in touch within 24 hours.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                id="name"
                type="text"
                placeholder="Name*"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0D0D0D] placeholder:text-gray-400 focus:outline-none focus:border-xaid-blue transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                id="organization"
                type="text"
                placeholder="Organization / Hospital*"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0D0D0D] placeholder:text-gray-400 focus:outline-none focus:border-xaid-blue transition-colors"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                required
              />
              <input
                id="email"
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0D0D0D] placeholder:text-gray-400 focus:outline-none focus:border-xaid-blue transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <div className="flex justify-between items-center pt-2">
                <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} size="invisible" badge="inline"/>
                <button
                  disabled={isSubmitting || !formRef?.current?.checkValidity()}
                  type="submit"
                  className="bg-xaid-blue hover:bg-xaid-blue/90 disabled:bg-xaid-blue/60 text-white font-medium px-8 py-3 rounded-full transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Start Pilot'}
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
