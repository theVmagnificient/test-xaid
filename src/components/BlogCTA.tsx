import { Link } from 'react-router-dom';

interface BlogCTAProps {
  heading?: string;
  sub?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

/**
 * Reusable end-of-article CTA. Drop it between the FAQ/body and the "Related" section.
 * Defaults to the standard free-pilot offer; pass props to tailor the message per article.
 */
const BlogCTA = ({
  heading = 'Ready to try AI CT reporting?',
  sub = 'Start with 5 free studies. No commitment.',
  primaryLabel = 'Request free pilot',
  primaryTo = '/#contact-us',
  secondaryLabel,
  secondaryTo,
}: BlogCTAProps) => {
  return (
    <section className="section-padding bg-white/5">
      <div className="container-xaid max-w-3xl mx-auto text-center">
        <h2 className="text-[28px] font-normal leading-[1.15] text-white mb-4">{heading}</h2>
        <p className="text-white/60 mb-8">{sub}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to={primaryTo}
            className="bg-xaid-blue-strong hover:bg-xaid-blue-strong-hover text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-200 inline-block"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className="text-white/70 hover:text-white text-base font-medium px-6 py-4 transition-colors inline-block"
            >
              {secondaryLabel} →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;
