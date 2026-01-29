import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoFL from '@/assets/logoFL.svg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Challenges', href: '#challenges' },
    { label: 'Our solution', href: '#our-solution' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Contact us', href: '#contact-us' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-xaid">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logoFL} alt="xAID Logo" className="h-8 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#contact-us')}
              className="btn-outline"
            >
              Book a demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="nav-link text-left px-4 py-2"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <button
                  onClick={() => scrollToSection('#contact-us')}
                  className="btn-primary w-full"
                >
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
