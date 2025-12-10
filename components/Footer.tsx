import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './UI';

// Custom X (formerly Twitter) Icon
const XIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      Icon: Linkedin, 
      href: "#", // Placeholder as it is standard for agencies
      label: "LinkedIn" 
    },
    { 
      Icon: Instagram, 
      href: "https://www.instagram.com/info.sailcraft", 
      label: "Instagram" 
    },
    { 
      Icon: Facebook, 
      href: "https://www.facebook.com/profile.php?id=61578036238909", 
      label: "Facebook" 
    },
    { 
      Icon: XIcon, 
      href: "https://x.com/sailcraft", 
      label: "X" 
    }
  ];

  return (
    <footer className="bg-white border-t border-sail-green/10 pt-24 pb-12 overflow-hidden relative text-sail-green">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
            {/* Brand Column */}
            <div className="max-w-sm">
                <div className="flex items-center gap-2 mb-8 group">
                    <div className="w-8 h-8 flex-shrink-0 text-sail-green group-hover:text-sail-orange transition-colors duration-300">
                        <BrandLogo className="w-full h-full" />
                    </div>
                    <span className="text-2xl font-bold font-heading">SailCraft Solutions</span>
                </div>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                    We fuel your growth story with strategy, creativity, and intelligent technology.
                </p>
                <div className="flex gap-4">
                    {socialLinks.map(({ Icon, href, label }, i) => (
                        <a 
                            key={i} 
                            href={href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={label}
                            className="w-10 h-10 rounded-lg border border-sail-green/20 flex items-center justify-center hover:bg-sail-orange hover:text-white hover:border-sail-orange transition-all"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
                <div>
                    <h4 className="text-sail-orange font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
                    <ul className="space-y-4">
                        {['About', 'Success Stories', 'Work With Us'].map(item => (
                            <li key={item}>
                                <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-600 hover:text-sail-green transition-colors flex items-center group">
                                    {item}
                                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-sail-orange font-bold mb-6 uppercase text-xs tracking-widest">Services</h4>
                    <ul className="space-y-4">
                        {['Digital Marketing', 'Tech Solutions', 'AI for Enterprise', 'Consulting'].map(item => (
                            <li key={item}>
                                <Link to="/services" className="text-slate-600 hover:text-sail-green transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                     <h4 className="text-sail-orange font-bold mb-6 uppercase text-xs tracking-widest">Contact</h4>
                     <p className="text-slate-600 mb-2">info@sailcraftsolutions.co.ke</p>
                     <p className="text-slate-600">+254 704 201 545</p>
                </div>
            </div>
        </div>

        {/* Massive Watermark */}
        <div className="border-t border-sail-green/10 pt-10">
            <h2 className="text-[8vw] md:text-[6vw] leading-none font-bold font-heading text-sail-green/5 text-center select-none pointer-events-none">
                SAILCRAFT SOLUTIONS
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-slate-400">
                <p>© 2025 SailCraft Solutions.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-sail-green">Privacy</a>
                    <a href="#" className="hover:text-sail-green">Terms</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;