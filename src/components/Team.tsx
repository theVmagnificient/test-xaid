import { useEffect, useRef } from 'react';
import kirillPhoto from '@/assets/team/kirill.png';
import anandPhoto from '@/assets/team/anand.png';
import richardPhoto from '@/assets/team/richard.png';
import merelPhoto from '@/assets/team/merel.png';

// Same LinkedIn mark used in the Footer, for visual consistency.
const LinkedInIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 17 17" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M14.4996 1.41611H2.50025C2.36537 1.41424 2.23143 1.43896 2.1061 1.48885C1.98077 1.53874 1.8665 1.61284 1.7698 1.7069C1.67311 1.80096 1.59589 1.91315 1.54256 2.03706C1.48923 2.16096 1.46083 2.29416 1.45898 2.42905V14.5701C1.46083 14.705 1.48923 14.8382 1.54256 14.9621C1.59589 15.086 1.67311 15.1982 1.7698 15.2922C1.8665 15.3863 1.98077 15.4604 2.1061 15.5103C2.23143 15.5602 2.36537 15.5849 2.50025 15.583H14.4996C14.6345 15.5849 14.7684 15.5602 14.8938 15.5103C15.0191 15.4604 15.1334 15.3863 15.2301 15.2922C15.3267 15.1982 15.404 15.086 15.4573 14.9621C15.5106 14.8382 15.539 14.705 15.5409 14.5701V2.42905C15.539 2.29416 15.5106 2.16096 15.4573 2.03706C15.404 1.91315 15.3267 1.80096 15.2301 1.7069C15.1334 1.61284 15.0191 1.53874 14.8938 1.48885C14.7684 1.43896 14.6345 1.41424 14.4996 1.41611ZM5.7303 13.2738H3.60527V6.8987H5.7303V13.2738ZM4.66779 6.00619C4.37472 6.00619 4.09365 5.88977 3.88642 5.68254C3.67919 5.47531 3.56277 5.19424 3.56277 4.90117C3.56277 4.6081 3.67919 4.32704 3.88642 4.11981C4.09365 3.91257 4.37472 3.79615 4.66779 3.79615C4.82341 3.7785 4.981 3.79392 5.13025 3.8414C5.27949 3.88888 5.41703 3.96735 5.53385 4.07167C5.65067 4.17599 5.74413 4.30381 5.80813 4.44675C5.87213 4.5897 5.90521 4.74455 5.90521 4.90117C5.90521 5.05779 5.87213 5.21264 5.80813 5.35559C5.74413 5.49853 5.65067 5.62635 5.53385 5.73067C5.41703 5.83499 5.27949 5.91346 5.13025 5.96094C4.981 6.00842 4.82341 6.02384 4.66779 6.00619ZM13.3946 13.2738H11.2696V9.8525C11.2696 8.9954 10.965 8.43581 10.1929 8.43581C9.95392 8.43756 9.72125 8.51251 9.52621 8.65056C9.33116 8.78861 9.18312 8.98313 9.10202 9.20791C9.04659 9.3744 9.02257 9.54974 9.03119 9.725V13.2667H6.90616C6.90616 13.2667 6.90616 7.47246 6.90616 6.89162H9.03119V7.79122C9.22423 7.45625 9.50501 7.18028 9.84326 6.99306C10.1815 6.80583 10.5644 6.71443 10.9508 6.7287C12.3675 6.7287 13.3946 7.64247 13.3946 9.60458V13.2738Z"/>
  </svg>
);

// Names / roles / LinkedIn / bios are final (bios fact-checked against each person's
// own site / society pages, 2026-08-05; Anand's wording per his own request). Photos
// supplied by founder. Advisors are ADVISORY only — do NOT imply they review or sign
// client studies.
const people = [
  { name: 'Kirill Lopatin', role: 'CEO', photo: kirillPhoto, bio: 'Founder and CEO of xAID, with seven years building radiology AI', linkedin: 'https://www.linkedin.com/in/lopatinvkirill/' },
  { name: 'Anand Prabhakar, MD, MBA', role: 'Medical Advisor', photo: anandPhoto, bio: 'Assistant Professor at Harvard Medical School and former Chair of Radiology at Mass General Brigham – Newton Wellesley', linkedin: 'https://www.linkedin.com/in/amprab/' },
  { name: 'Richard Duszak, MD', role: 'Medical Advisor', photo: richardPhoto, bio: "Chief Medical Officer of the ACR's Radiology Leadership Institute and former Chair of Radiology at the University of Mississippi Medical Center", linkedin: 'https://www.linkedin.com/in/richduszak/' },
  { name: 'Merel Huisman, MD, PhD', role: 'Medical Advisor', photo: merelPhoto, bio: 'Vice President of EuSoMII and Deputy Editor of Radiology: Artificial Intelligence', linkedin: 'https://www.linkedin.com/in/merelhuisman1/' },
];

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-up');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="section-padding bg-white/5">
      <div className="container-xaid">
        <div className="mb-10 fade-up">
          <span className="text-xaid-blue font-medium text-[11px] uppercase tracking-[0.12em] mb-4 block">Team</span>
          <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-normal text-white leading-[1.15]">
            Meet the team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {people.map((p, index) => (
            <div
              key={p.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 fade-up flex flex-col items-center text-center hover:bg-white/[0.07] hover:border-white/15 transition-colors"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img src={p.photo} alt={p.name} loading="lazy" className="w-[125px] h-[125px] rounded-full object-cover mb-4" />
              <h3 className="text-white font-medium text-[17px] leading-[1.3] mb-1 min-h-[2.6em] flex items-start justify-center text-center">{p.name}</h3>
              <div className="text-xaid-blue text-[13px] font-medium mb-3">{p.role}</div>
              <p className="text-white/60 text-[14px] leading-[1.6] font-light mb-5 flex-grow">{p.bio}</p>
              <a
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} on LinkedIn`}
                className="text-white/50 hover:text-xaid-blue transition-colors"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
