import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
  // Redesigned for a sharper, tech-architectural feel (rounded-lg instead of rounded-full)
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
  dark?: boolean;
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
  return (
    <section 
      id={id} 
      className={`relative py-20 md:py-32 overflow-hidden 
        ${dark ? 'bg-sail-green text-white' : 'bg-sail-offWhite text-sail-darkGreen'} 
        ${grid ? (dark ? 'bg-grid-pattern-dark bg-grid' : 'bg-grid-pattern bg-grid') : ''}
        ${className}`}
    >
      {/* Subtle Overlay for depth on dark sections */}
      {dark && <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />}

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
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} // Apple-style crisp spring
    className={className}
  >
    {children}
  </motion.div>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string; hover?: boolean }> = ({ children, className = "", hover = true }) => (
  <div className={`bg-white p-8 border border-gray-200/60 rounded-xl ${hover ? 'hover:border-sail-orange/50 hover:shadow-xl hover:shadow-sail-green/5' : ''} transition-all duration-300 h-full ${className}`}>
    {children}
  </div>
);

export const DisplayText: React.FC<{ children: React.ReactNode; size?: 'xl' | 'lg' | 'md'; className?: string }> = ({ children, size = 'lg', className = "" }) => {
    const sizes = {
        xl: "text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter",
        lg: "text-5xl md:text-7xl leading-[1.0] tracking-tight",
        md: "text-3xl md:text-5xl leading-[1.1] tracking-tight"
    };
    return (
        <h2 className={`${sizes[size]} font-bold font-heading ${className}`}>
            {children}
        </h2>
    )
};