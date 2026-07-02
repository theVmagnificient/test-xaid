import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoFL from '@/assets/logo-white-xaid.svg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Results', href: '#results' },
    { label: 'FAQ', href: '#faq' },
  ];

  const pageLinks = [
    { label: 'For imaging centers', href: '/for-outpatient-imaging-centers/' },
    { label: 'For teleradiology', href: '/for-teleradiology-companies/' },
    { label: 'Pricing', href: '/pricing/' },
    { label: 'Blog', href: '/blog/' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItemClass = 'nav-link whitespace-nowrap px-4 py-1.5 rounded-full transition-all duration-200 hover:bg-white/10 hover:text-white';
  const navItemActiveClass = 'nav-link whitespace-nowrap px-4 py-1.5 rounded-full bg-white/10 text-white';
  const ctaButtonClass = 'inline-flex items-center justify-center whitespace-nowrap px-4 py-1.5 rounded-full text-[14px] font-normal text-white border border-white/25 hover:border-white/50 hover:bg-white/5 transition-all duration-200';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-xaid">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoFL} alt="xAID Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              isHome ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className={navItemClass}
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} to={`/${link.href}`} className={navItemClass}>
                  {link.label}
                </Link>
              )
            ))}
            {pageLinks.map((link) => {
              const base = link.href.replace(/\/$/, ''); const isActive = location.pathname === base || location.pathname.startsWith(base + '/');
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={isActive ? navItemActiveClass : navItemClass}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            {isHome ? (
              <a
                href="#contact-us"
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact-us'); }}
                className={ctaButtonClass}
              >
                Book a demo
              </a>
            ) : (
              <Link to="/#contact-us" className={ctaButtonClass}>
                Book a demo
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-3"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                isHome ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="nav-link text-left px-4 py-2 rounded-lg hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={`/${link.href}`}
                    className="nav-link text-left px-4 py-2 rounded-lg hover:bg-white/10 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              {pageLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="nav-link text-left px-4 py-2 rounded-lg hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                {isHome ? (
                  <a
                    href="#contact-us"
                    onClick={(e) => { e.preventDefault(); scrollToSection('#contact-us'); }}
                    className="btn-primary w-full block text-center"
                  >
                    Book a demo
                  </a>
                ) : (
                  <Link
                    to="/#contact-us"
                    className="btn-primary w-full block text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book a demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
