import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '', 
  icon = false 
}) => {
  // Sharp architectural feel
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide transition-all duration-300 rounded-lg font-heading relative overflow-hidden group";
  
  const variants = {
    primary: "bg-sail-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-900/10",
    outline: "bg-transparent text-sail-green border border-sail-green/30 hover:border-sail-green hover:bg-sail-green/5",
    white: "bg-white text-sail-green hover:bg-gray-50 shadow-sm border border-gray-200",
    dark: "bg-sail-green text-white hover:bg-sail-darkGreen border border-transparent"
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

export const AnimatedElement: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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