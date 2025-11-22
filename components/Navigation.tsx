import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button, BrandLogo } from './UI';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/success-stories' },
  ];

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className={`pointer-events-auto transition-all duration-500 ease-[0.16,1,0.3,1] ${
          scrolled ? 'w-full max-w-6xl' : 'w-full max-w-7xl'
        }`}>
          <div className={`
            flex items-center justify-between px-6 py-4 
            bg-white/95 backdrop-blur-xl border border-sail-green/10 shadow-2xl shadow-sail-green/5
            rounded-2xl transition-all duration-300
          `}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group min-w-fit">
              <div className="w-10 h-10 text-sail-green group-hover:rotate-12 transition-transform duration-300">
                 <BrandLogo className="w-full h-full" />
              </div>
              <span className="text-xl font-bold tracking-tight text-sail-green font-heading hidden sm:block">
                SailCraft Solutions
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 bg-sail-offWhite p-1 rounded-xl mx-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-5 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'bg-white text-sail-green shadow-sm' 
                      : 'text-slate-500 hover:text-sail-green hover:bg-white/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4 min-w-fit">
                <Link to="/contact" className="text-sm font-bold text-sail-green hover:text-sail-orange transition-colors">
                    Contact
                </Link>
                <Button to="/work-with-us" variant="primary" className="!px-5 !py-2.5 !text-xs !rounded-lg shadow-none hover:shadow-lg">
                Start Project
                </Button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-sail-green bg-sail-offWhite rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-4xl font-bold text-sail-green hover:text-sail-orange transition-colors font-heading"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="text-4xl font-bold text-sail-green hover:text-sail-orange transition-colors font-heading">Contact</Link>
          <Button to="/work-with-us" variant="primary" className="mt-8 !text-xl !px-10 !py-4">
            Start Project
          </Button>
      </div>
    </>
  );
};

export default Navigation;