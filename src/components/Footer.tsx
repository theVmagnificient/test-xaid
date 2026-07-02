import { Link } from "react-router-dom";
import logoFL from '@/assets/logo-white-xaid.svg';
import isoBadge from '@/assets/iso-badge.png';

const LinkedInIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 17 17" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M14.4996 1.41611H2.50025C2.36537 1.41424 2.23143 1.43896 2.1061 1.48885C1.98077 1.53874 1.8665 1.61284 1.7698 1.7069C1.67311 1.80096 1.59589 1.91315 1.54256 2.03706C1.48923 2.16096 1.46083 2.29416 1.45898 2.42905V14.5701C1.46083 14.705 1.48923 14.8382 1.54256 14.9621C1.59589 15.086 1.67311 15.1982 1.7698 15.2922C1.8665 15.3863 1.98077 15.4604 2.1061 15.5103C2.23143 15.5602 2.36537 15.5849 2.50025 15.583H14.4996C14.6345 15.5849 14.7684 15.5602 14.8938 15.5103C15.0191 15.4604 15.1334 15.3863 15.2301 15.2922C15.3267 15.1982 15.404 15.086 15.4573 14.9621C15.5106 14.8382 15.539 14.705 15.5409 14.5701V2.42905C15.539 2.29416 15.5106 2.16096 15.4573 2.03706C15.404 1.91315 15.3267 1.80096 15.2301 1.7069C15.1334 1.61284 15.0191 1.53874 14.8938 1.48885C14.7684 1.43896 14.6345 1.41424 14.4996 1.41611ZM5.7303 13.2738H3.60527V6.8987H5.7303V13.2738ZM4.66779 6.00619C4.37472 6.00619 4.09365 5.88977 3.88642 5.68254C3.67919 5.47531 3.56277 5.19424 3.56277 4.90117C3.56277 4.6081 3.67919 4.32704 3.88642 4.11981C4.09365 3.91257 4.37472 3.79615 4.66779 3.79615C4.82341 3.7785 4.981 3.79392 5.13025 3.8414C5.27949 3.88888 5.41703 3.96735 5.53385 4.07167C5.65067 4.17599 5.74413 4.30381 5.80813 4.44675C5.87213 4.5897 5.90521 4.74455 5.90521 4.90117C5.90521 5.05779 5.87213 5.21264 5.80813 5.35559C5.74413 5.49853 5.65067 5.62635 5.53385 5.73067C5.41703 5.83499 5.27949 5.91346 5.13025 5.96094C4.981 6.00842 4.82341 6.02384 4.66779 6.00619ZM13.3946 13.2738H11.2696V9.8525C11.2696 8.9954 10.965 8.43581 10.1929 8.43581C9.95392 8.43756 9.72125 8.51251 9.52621 8.65056C9.33116 8.78861 9.18312 8.98313 9.10202 9.20791C9.04659 9.3744 9.02257 9.54974 9.03119 9.725V13.2667H6.90616C6.90616 13.2667 6.90616 7.47246 6.90616 6.89162H9.03119V7.79122C9.22423 7.45625 9.50501 7.18028 9.84326 6.99306C10.1815 6.80583 10.5644 6.71443 10.9508 6.7287C12.3675 6.7287 13.3946 7.64247 13.3946 9.60458V13.2738Z"/>
  </svg>
);

const columns = [
  {
    title: 'Solutions',
    links: [
      { to: '/for-outpatient-imaging-centers/', label: 'For imaging centers' },
      { to: '/for-teleradiology-companies/', label: 'For teleradiology' },
      { to: '/for-radiology-groups/', label: 'For radiology groups' },
      { to: '/for-small-hospitals/', label: 'For small hospitals' },
    ],
  },
  {
    title: 'Modalities',
    links: [
      { to: '/head-ct-ai-report/', label: 'Head CT' },
      { to: '/chest-ct-ai-report/', label: 'Chest CT' },
      { to: '/abdomen-ct-ai-report/', label: 'Abdomen CT' },
    ],
  },
  {
    title: 'Compare',
    links: [
      { to: '/ai-vs-teleradiology/', label: 'AI vs teleradiology' },
      { to: '/ai-vs-locum-radiologist/', label: 'AI vs locum radiologist' },
      { to: '/how-ai-ct-reporting-works/', label: 'How AI CT reporting works' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/accuracy/', label: 'Accuracy' },
      { to: '/compliance/', label: 'Compliance' },
      { to: '/integrations/', label: 'Integrations' },
      { to: '/pricing/', label: 'Pricing' },
      { to: '/blog/', label: 'Blog' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="pt-16 md:pt-20 pb-10 bg-background border-t border-border">
      <div className="container-xaid">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-16">
            <Link to="/" className="inline-block mb-5">
              <img src={logoFL} alt="xAID" className="h-7 w-auto" />
            </Link>
            <p className="text-[13px] text-muted-foreground leading-[1.65] mb-5 max-w-[280px]">
              AI CT reporting with radiologist review — ready-to-sign in 2–12 hours
            </p>
            <p className="text-[13px] text-muted-foreground leading-[1.65] mb-5 max-w-[280px]">
              8 The Green, Ste A, Dover, DE 19901, United States
            </p>
            <a
              href="https://www.linkedin.com/company/xaid-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedInIcon className="w-5 h-5" />
              <span className="text-[13px]">LinkedIn</span>
            </a>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-white text-[12px] font-medium uppercase tracking-[0.12em] mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={isoBadge} alt="" className="w-7 h-7 object-contain" />
            <span className="text-[12px] text-muted-foreground">ISO Certified</span>
          </div>
          <div className="flex items-center gap-6 flex-wrap md:ml-auto">
            <Link to="/privacy-policy/" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors">
              Privacy policy
            </Link>
            <p className="text-[12px] text-muted-foreground">
              © {new Date().getFullYear()} xAID. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
