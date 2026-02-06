import { Link } from "react-router-dom";
import isoBadge from '@/assets/iso-badge.png';

const Footer = () => {
  return (
    <footer className="py-10 md:py-16 bg-background border-t border-border">
      <div className="container-xaid">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* ISO Badge */}
          <div className="flex items-center gap-4">
            <img src={isoBadge} alt="ISO Certified" className="w-12 h-12 object-contain" />
            <span className="text-[13px] text-muted-foreground">ISO Certified</span>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <Link to="/privacy-policy" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
              Privacy and Policy
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-[13px] text-muted-foreground">
            © 2026 xAID. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
