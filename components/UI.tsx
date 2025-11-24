import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Minus } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'white' | 'dark';
  className?: string;
  icon?: boolean;
}

// Custom Brand Logo Component based on provided image
export const BrandLogo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    viewBox="0 0 433 433" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M206.5 0C92.4562 0 0 92.4562 0 206.5V433H206.5V0Z" 
      fill="currentColor" 
    />
    <path 
      d="M268.484 433V172.616L433 433H268.484Z" 
      fill="currentColor" 
    />
  </svg>
);

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '', 
  icon = false 
}) => {
  // Sharp architectural feel with added hover scale
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide transition-all duration-300 rounded-lg font-heading relative overflow-hidden group hover:scale-105 hover:shadow-xl transform-gpu";
  
  const variants = {
    primary: "bg-sail-orange text-white hover:bg-sail-darkGreen shadow-lg shadow-sail-orange/20",
    outline: "bg-transparent text-sail-green border border-sail-green/30 hover:bg-sail-green hover:text-white hover:border-sail-green",
    white: "bg-white text-sail-green hover:bg-sail-offWhite shadow-sm border border-gray-200",
    dark: "bg-sail-green text-white hover:bg-sail-orange border border-transparent"
  };

  const content = (
    <div className="relative z-10 flex items-center">
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </div>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean; // We will minimize usage of this
  grid?: boolean;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  dark = false,
  grid = false,
  fullWidth = false
}) => {
  // Force light backgrounds mostly unless explicitly dark, but even dark is now lighter/cleaner
  return (
    <section 
      id={id} 
      className={`relative py-20 md:py-32 overflow-hidden 
        ${dark ? 'bg-sail-offWhite text-sail-green' : 'bg-white text-sail-darkGreen'} 
        ${grid ? 'bg-grid-pattern bg-grid' : ''}
        ${className}`}
    >
      <div className={`${fullWidth ? 'w-full px-4 md:px-8' : 'container mx-auto px-6 md:px-8'} relative z-10`}>
        {children}
      </div>
    </section>
  );
};

// Parallax Helper Component
export const Parallax: React.FC<{ children: React.ReactNode; offset?: number; className?: string }> = ({ children, offset = 50, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
};

// New PageHero Component with Parallax
export const PageHero: React.FC<{
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  children?: React.ReactNode;
  className?: string;
}> = ({ title, subtitle, image, children, className = "" }) => {
  const { scrollY } = useScroll();
  // Enhanced parallax effect: Larger buffer (top -20%, height 140%) prevents gaps
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  return (
    <section className={`relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0 h-[140%] -top-[20%]">
        <motion.div style={{ y }} className="w-full h-full">
          <img
            src={image}
            className="w-full h-full object-cover opacity-10 md:opacity-15"
            alt="Background"
          />
        </motion.div>
        {/* Sophisticated gradient overlays for text readability without hiding the image completely */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-sail-offWhite"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        
        {/* Subtle animated background blobs */}
        <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
           <div className="absolute -top-20 -right-20 w-96 h-96 bg-sail-green/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
           <div className="absolute top-40 -left-20 w-72 h-72 bg-sail-orange/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <AnimatedElement>
          {subtitle && (
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-bold tracking-widest text-sail-orange uppercase bg-sail-orange/10 rounded-full border border-sail-orange/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-sail-orange"></span>
                  {subtitle}
              </div>
          )}
          <div className="max-w-4xl">
              {title}
          </div>
          {children && <div className="mt-8">{children}</div>}
        </AnimatedElement>
      </div>
    </section>
  );
};

export const AnimatedElement: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    {...({
      initial: { opacity: 0, y: 20, filter: 'blur(10px)' },
      whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
      viewport: { once: true, margin: "-10%" },
      transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
    } as any)}
    className={className}
  >
    {children}
  </motion.div>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string; hover?: boolean }> = ({ children, className = "", hover = true }) => (
  <div className={`bg-white p-8 border border-sail-green/10 rounded-xl ${hover ? 'hover:border-sail-orange/50 hover:shadow-xl hover:shadow-sail-green/5' : ''} transition-all duration-300 h-full overflow-hidden break-words ${className}`}>
    {children}
  </div>
);

export const DisplayText: React.FC<{ children: React.ReactNode; size?: 'xl' | 'lg' | 'md'; className?: string }> = ({ children, size = 'lg', className = "" }) => {
    const sizes = {
        xl: "text-5xl md:text-7xl lg:text-8xl leading-[1.0] tracking-tighter",
        lg: "text-4xl md:text-6xl leading-[1.05] tracking-tight",
        md: "text-3xl md:text-4xl leading-[1.1] tracking-tight"
    };
    return (
        <h2 className={`${sizes[size]} font-bold font-heading ${className}`}>
            {children}
        </h2>
    )
};

// Accordion Component
interface AccordionItemProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, subtitle, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-none">
      <button 
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group hover:bg-sail-offWhite/50 transition-colors px-4 rounded-lg"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
            <span className={`text-2xl md:text-3xl font-heading font-bold transition-colors ${isOpen ? 'text-sail-orange' : 'text-sail-green group-hover:text-sail-orange'}`}>
                {title}
            </span>
            {subtitle && (
                <span className="text-slate-400 text-sm uppercase tracking-widest font-bold">{subtitle}</span>
            )}
        </div>
        <div className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? 'rotate-45 border-sail-orange text-sail-orange' : 'border-gray-300 text-slate-400 group-hover:border-sail-orange group-hover:text-sail-orange'}`}>
            <Plus size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...({
              initial: { height: 0, opacity: 0 },
              animate: { height: 'auto', opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.3, ease: "easeInOut" }
            } as any)}
            className="overflow-hidden"
          >
             <div className="pb-8 px-4 pt-2">
                {children}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};