
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Coffee, Target, Sparkles, AlertCircle, TrendingUp, Cpu, Globe } from 'lucide-react';
import { Button, DisplayText, Section, AnimatedElement } from '../components/UI';
import { SEO } from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      <SEO 
        title="404 - Page Missing in Action"
        description="Oops! This page has ghosted us harder than a lead with no budget. Let's get you back to the growth path."
        path="404"
      />

      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sail-orange/5 rounded-full blur-[100px] -mr-40 -mt-40 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sail-green/5 rounded-full blur-[100px] -ml-40 -mb-40 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <AnimatedElement>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-sail-orange/10 text-sail-orange rounded-full border border-sail-orange/20 mb-8">
            <AlertCircle size={16} />
            <span className="font-bold text-[10px] tracking-widest uppercase">Operational Status: 0x404_GHOSTED</span>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.2}>
          <h1 className="text-8xl md:text-[12rem] font-heading font-bold text-sail-green leading-none tracking-tighter mb-4">
            4<span className="text-sail-orange">0</span>4
          </h1>
          <DisplayText size="md" className="text-sail-green mb-8 uppercase">
            THIS PAGE HAS <span className="text-sail-orange underline decoration-sail-orange/20 underline-offset-8 italic">GHOSTED</span> US.
          </DisplayText>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            It’s currently hiding better than a tax break or a viral post that actually converts. 
            While this link is on a permanent coffee break, your business growth doesn't have to be.
          </p>
        </AnimatedElement>

        <AnimatedElement delay={0.4}>
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            <Button to="/" variant="dark" className="!px-10 !py-5 shadow-2xl shadow-sail-green/20" icon>
              Return to Production
            </Button>
            <Button to="/work-with-us" variant="outline" className="!px-10 !py-5">
              Initiate Growth Rescue
            </Button>
          </div>
        </AnimatedElement>

        {/* Witty Cards Section */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              icon: TrendingUp,
              title: "Lost Momentum",
              desc: "This page had high KPIs, but decided to retire early. We respect the hustle, but we can't find it anywhere."
            },
            {
              icon: Cpu,
              title: "System Sabbatical",
              desc: "Our servers are running fine, but this specific URL has checked into a digital wellness retreat."
            },
            {
              icon: Globe,
              title: "Off-Grid Strategy",
              desc: "Maybe this page is trying to be 'exclusive' by not existing? We're currently auditing its performance."
            }
          ].map((item, i) => (
            <AnimatedElement key={i} delay={0.6 + (i * 0.1)}>
              <div className="p-8 bg-sail-offWhite/80 backdrop-blur-sm border border-black/5 rounded-2xl hover:border-sail-orange/30 transition-all group h-full">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-sail-orange mb-6 shadow-sm group-hover:rotate-12 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="font-heading font-bold text-sail-green text-xl mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Trace Route Navigation */}
        <AnimatedElement delay={0.9} className="mt-20 pt-12 border-t border-black/5">
           <div className="flex flex-col items-center">
             <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Manual Trace Route</p>
             <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
                {['Home', 'About', 'Services', 'Success Stories', 'Work With Us', 'Contact'].map((link) => (
                  <Link 
                    key={link} 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sail-green font-bold text-sm hover:text-sail-orange transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-sail-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </Link>
                ))}
             </div>
           </div>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default NotFound;
