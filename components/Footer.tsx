import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Linkedin, Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sail-green text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
            {/* Brand Column */}
            <div className="max-w-sm">
                <div className="flex items-center gap-2 mb-8">
                    <div className="p-2 bg-white text-sail-green rounded-lg">
                        <Anchor size={24} />
                    </div>
                    <span className="text-2xl font-bold font-heading">SailCraft</span>
                </div>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                    We fuel your growth story with strategy, creativity, and intelligent technology.
                </p>
                <div className="flex gap-4">
                    {[Linkedin, Instagram, Facebook, Youtube].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center hover:bg-sail-orange hover:border-sail-orange transition-all">
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
                        {['About', 'Success Stories', 'Work With Us', 'Contact'].map(item => (
                            <li key={item}>
                                <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/80 hover:text-white transition-colors flex items-center group">
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
                        {['Digital Marketing', 'Tech Solutions', 'Branding', 'Consulting'].map(item => (
                            <li key={item}>
                                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                     <h4 className="text-sail-orange font-bold mb-6 uppercase text-xs tracking-widest">Contact</h4>
                     <p className="text-white/80 mb-2">info@sailcraftsolutions.co.ke</p>
                     <p className="text-white/80">+254 704 201 545</p>
                </div>
            </div>
        </div>

        {/* Massive Watermark */}
        <div className="border-t border-white/10 pt-10">
            <h2 className="text-[12vw] leading-none font-bold font-heading text-white/5 text-center select-none pointer-events-none">
                SAILCRAFT
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-white/40">
                <p>© 2025 SailCraft Solutions.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Terms</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;