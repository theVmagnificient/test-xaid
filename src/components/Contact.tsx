import React, { useState, useEffect, useRef } from 'react';
import { Shield, Server, FileCheck, BadgeCheck } from 'lucide-react';

const LinkedInIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg viewBox="0 0 17 17" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M14.4996 1.41611H2.50025C2.36537 1.41424 2.23143 1.43896 2.1061 1.48885C1.98077 1.53874 1.8665 1.61284 1.7698 1.7069C1.67311 1.80096 1.59589 1.91315 1.54256 2.03706C1.48923 2.16096 1.46083 2.29416 1.45898 2.42905V14.5701C1.46083 14.705 1.48923 14.8382 1.54256 14.9621C1.59589 15.086 1.67311 15.1982 1.7698 15.2922C1.8665 15.3863 1.98077 15.4604 2.1061 15.5103C2.23143 15.5602 2.36537 15.5849 2.50025 15.583H14.4996C14.6345 15.5849 14.7684 15.5602 14.8938 15.5103C15.0191 15.4604 15.1334 15.3863 15.2301 15.2922C15.3267 15.1982 15.404 15.086 15.4573 14.9621C15.5106 14.8382 15.539 14.705 15.5409 14.5701V2.42905C15.539 2.29416 15.5106 2.16096 15.4573 2.03706C15.404 1.91315 15.3267 1.80096 15.2301 1.7069C15.1334 1.61284 15.0191 1.53874 14.8938 1.48885C14.7684 1.43896 14.6345 1.41424 14.4996 1.41611ZM5.7303 13.2738H3.60527V6.8987H5.7303V13.2738ZM4.66779 6.00619C4.37472 6.00619 4.09365 5.88977 3.88642 5.68254C3.67919 5.47531 3.56277 5.19424 3.56277 4.90117C3.56277 4.6081 3.67919 4.32704 3.88642 4.11981C4.09365 3.91257 4.37472 3.79615 4.66779 3.79615C4.82341 3.7785 4.981 3.79392 5.13025 3.8414C5.27949 3.88888 5.41703 3.96735 5.53385 4.07167C5.65067 4.17599 5.74413 4.30381 5.80813 4.44675C5.87213 4.5897 5.90521 4.74455 5.90521 4.90117C5.90521 5.05779 5.87213 5.21264 5.80813 5.35559C5.74413 5.49853 5.65067 5.62635 5.53385 5.73067C5.41703 5.83499 5.27949 5.91346 5.13025 5.96094C4.981 6.00842 4.82341 6.02384 4.66779 6.00619ZM13.3946 13.2738H11.2696V9.8525C11.2696 8.9954 10.965 8.43581 10.1929 8.43581C9.95392 8.43756 9.72125 8.51251 9.52621 8.65056C9.33116 8.78861 9.18312 8.98313 9.10202 9.20791C9.04659 9.3744 9.02257 9.54974 9.03119 9.725V13.2667H6.90616C6.90616 13.2667 6.90616 7.47246 6.90616 6.89162H9.03119V7.79122C9.22423 7.45625 9.50501 7.18028 9.84326 6.99306C10.1815 6.80583 10.5644 6.71443 10.9508 6.7287C12.3675 6.7287 13.3946 7.64247 13.3946 9.60458V13.2738Z"/>
  </svg>
);
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'sonner';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const FORMSPARK_ACTION_URL = 'https://submit-form.com/ADee6zSRu';
const RECAPTCHA_SITE_KEY = '6LeiQEYoAAAAANUaJXHwdhm3HpR5SEPrbVXj-Ra6';

const trustBadges = [
  { icon: Shield, label: 'HIPAA compliant' },
  { icon: Server, label: 'AWS US infrastructure' },
  { icon: FileCheck, label: 'BAA available' },
  { icon: BadgeCheck, label: 'ISO 27001 certified' },
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

  // reCAPTCHA pulls ~830KB from Google on mount — defer it until the visitor
  // actually starts filling the form (first focus). By submit time it's ready.
  const [captchaWanted, setCaptchaWanted] = useState(false);
  const wantCaptcha = () => setCaptchaWanted(true);

  const waitForCaptcha = async (timeoutMs = 8000): Promise<ReCAPTCHA> => {
    const start = Date.now();
    while (!recaptchaRef.current) {
      if (Date.now() - start > timeoutMs) throw new Error('reCAPTCHA failed to load');
      await new Promise((r) => setTimeout(r, 100));
    }
    return recaptchaRef.current;
  };

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

    try {
      setCaptchaWanted(true); // safety net if focus never fired (e.g. autofill)
      const captcha = await waitForCaptcha();
      const token = await captcha.executeAsync();
      const response = await postForm({ ...formData, "g-recaptcha-response": token });
      if (!response.ok) {
        throw new Error('Failed to post form');
      }

      setFormData({ name: '', organization: '', email: '' });
      // Push lead event to GTM dataLayer for GA4 conversion tracking
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'pilot_form_submit',
          form_location: 'contact_us',
        });
      }
      toast.success('Thank you! We\'ll be in touch within 24 hours');
    } catch (err) {
      toast.error('Submission failed. Please try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" ref={sectionRef} className="pt-6 md:pt-8 pb-16 md:pb-24 bg-[#0D0D0D]">
      <div className="container-xaid">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 fade-up">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
            >
              <Icon className="w-4 h-4 text-xaid-blue flex-shrink-0" />
              <span className="text-white/60 text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Contact Info (Blue Card) */}
          <div className="fade-up relative overflow-hidden bg-xaid-blue rounded-2xl p-8 md:p-12 min-h-[400px]">
            {/* Decorative star pattern — overflows bottom-right */}
            <svg
              className="absolute -bottom-16 -right-16 md:-bottom-20 md:-right-20 w-[340px] h-[330px] pointer-events-none"
              viewBox="0 0 340 330"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M265 146.84L372.091 39.75L421.941 89.6006L306.542 205H470V276H317.544L421.941 380.397L372.09 430.249L265 323.158V470H194V317.542L89.6016 421.94L39.75 372.09L135.84 276H0V205H146.842L39.75 97.9082L89.6016 48.0576L194 152.456V0H265V146.84Z" fill="rgba(255,255,255,0.18)"/>
            </svg>

            <div className="relative z-10">
              <span className="text-white font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">
                Contact us
              </span>
              <h2 className="text-white text-[28px] md:text-[38px] lg:text-[44px] font-normal mb-3 leading-[1.15]">
                Get a free 5-study pilot
              </h2>
              <p className="text-white/80 text-[15px] leading-[1.65] font-light mb-10 max-w-[400px]">
                Send us 5 CT studies. See the reports. No integration required. No commitment
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium text-[11px] uppercase tracking-[0.12em] mb-2">
                    Address
                  </h4>
                  <p className="text-white/80 text-[15px] leading-[1.65] font-light">
                    8 The Green, Ste A, Dover, DE 19901, United States
                  </p>
                </div>

                <a
                  href="https://www.linkedin.com/company/xaid-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                >
                  <LinkedInIcon className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form (White Card) */}
          <div className="fade-up bg-white rounded-2xl p-8 md:p-12" style={{ transitionDelay: '150ms' }}>
            <div className="mb-6">
              <h3 className="text-[#0D0D0D] font-medium text-[18px] leading-[1.3] mb-2">Start your pilot</h3>
              <p className="text-gray-500 text-[15px] leading-[1.65] font-light">
                Fill in your details and we'll get in touch within 24 hours
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name*"
                autoComplete="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0D0D0D] text-base placeholder:text-gray-500 focus:outline-none focus:border-xaid-blue transition-colors"
                value={formData.name}
                onFocus={wantCaptcha}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <label htmlFor="organization" className="sr-only">Organization or hospital</label>
              <input
                id="organization"
                name="organization"
                type="text"
                placeholder="Organization / Hospital*"
                autoComplete="organization"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0D0D0D] text-base placeholder:text-gray-500 focus:outline-none focus:border-xaid-blue transition-colors"
                value={formData.organization}
                onFocus={wantCaptcha}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                required
              />
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email*"
                autoComplete="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0D0D0D] text-base placeholder:text-gray-500 focus:outline-none focus:border-xaid-blue transition-colors"
                value={formData.email}
                onFocus={wantCaptcha}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center pt-2">
                {captchaWanted && (
                  <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} size="invisible" badge="inline"/>
                )}
                <button
                  disabled={isSubmitting || !formRef?.current?.checkValidity()}
                  type="submit"
                  className="bg-xaid-blue hover:bg-xaid-blue/90 disabled:bg-xaid-blue/60 text-white font-medium px-8 py-3 rounded-full transition-colors w-full sm:w-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Start pilot'}
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
