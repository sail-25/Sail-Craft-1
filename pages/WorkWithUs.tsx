
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, AnimatedElement, Button, DisplayText, PageHero, Card } from '../components/UI';
import { Rocket, TrendingUp, Briefcase, ArrowRight, Zap, Target, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

const WorkWithUs: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const profiles = [
    {
      icon: Rocket,
      title: "The Challenger",
      subtitle: "Startups & Disruptors",
      desc: "You have a vision and a market gap. You need a partner who builds with speed and strategic foresight. We help you skip the 'expensive mistakes' phase."
    },
    {
      icon: TrendingUp,
      title: "The Scaler",
      subtitle: "Growth-Stage Companies",
      desc: "Your foundations are solid, but your systems are straining under load. We architect the digital infrastructure that handles 10x growth without breaking."
    },
    {
      icon: Briefcase,
      title: "The Modernizer",
      subtitle: "Established Enterprises",
      desc: "You lead your market, but technology is moving fast. We integrate AI and modern platforms to ensure you stay ahead of the disruption curve."
    }
  ];

  const steps = [
    { name: 'Discovery', desc: "Uncovering your unique landscape to find hidden opportunities." },
    { name: 'Strategy', desc: "Charting the most effective path to your goals with precision." },
    { name: 'Build', desc: "Engineering robust, scalable solutions that last." },
    { name: 'Launch', desc: "Go-live execution designed for maximum initial impact." },
    { name: 'Scale', desc: "Continuous optimization for sustainable long-term growth." }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Who We Work With | Partner with SailCraft"
        description="We partner with ambitious startups, scaling companies, and forward-thinking enterprises to build the future."
        keywords={["Enterprise Partner", "Startup Growth", "Digital Transformation Nairobi", "Work With SailCraft"]}
      />

      <PageHero
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
        subtitle="Strategic Partnerships"
        title={
            <DisplayText size="lg" className="text-sail-green mb-4">
                WE BUILD WITH<br/>
                <span className="text-sail-orange">THE AMBITIOUS.</span>
            </DisplayText>
        }
      >
          <p className="text-xl text-slate-600 max-w-2xl mb-8 font-medium">
            Growth isn't for everyone. It's for those ready to architect their future with clarity and precision.
          </p>
          <Button to="/contact" variant="primary">
            Start a Conversation
          </Button>
      </PageHero>

      {/* Profiles Section */}
      <Section className="py-24 border-b border-slate-100">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sail-orange font-bold uppercase tracking-widest text-xs mb-4 block">Ideal Client Profiles</span>
          <DisplayText size="md" className="text-sail-green mb-6">Designed for Your Stage</DisplayText>
          <p className="text-slate-500 text-lg">We excel where complexity meets ambition.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, i) => (
            <AnimatedElement key={i} delay={i * 0.1}>
              <Card className="hover:border-sail-orange group h-full">
                <div className="w-12 h-12 bg-sail-offWhite rounded-lg flex items-center justify-center text-sail-green group-hover:bg-sail-orange group-hover:text-white mb-6 transition-all">
                  <profile.icon size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-sail-green mb-2">{profile.title}</h3>
                <p className="text-sail-orange font-bold text-xs uppercase tracking-widest mb-4">{profile.subtitle}</p>
                <p className="text-slate-600 leading-relaxed">{profile.desc}</p>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Process Section - Preserved Animated Grid */}
      <Section className="border-y border-black/5 py-32 relative z-10 bg-white overflow-hidden">
        <div className="flex flex-col items-center justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
                <span className="text-[15vw] font-heading font-bold text-sail-green">PROCESS</span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 relative z-10">
                {steps.map((step, i) => (
                    <React.Fragment key={step.name}>
                        <div className="relative flex flex-col items-center cursor-pointer" onClick={() => { setActiveStep(i); setIsPaused(true); }}>
                             <motion.span 
                                animate={{ 
                                    color: i === activeStep ? '#FF7441' : '#036029',
                                    opacity: i === activeStep ? 1 : (Math.abs(activeStep - i) <= 1 ? 0.5 : 0.2),
                                    scale: i === activeStep ? 1.1 : 1,
                                }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-5xl font-heading font-bold"
                            >
                                {step.name}
                            </motion.span>
                            {i === activeStep && (
                                <motion.div 
                                    layoutId="activeStepIndicator"
                                    className="absolute -bottom-6 w-2 h-2 rounded-full bg-sail-orange"
                                />
                            )}
                        </div>
                        {i < 4 && (
                             <div className="hidden md:flex items-center justify-center w-8 md:w-16">
                                <div className="h-px bg-gray-200 w-full overflow-hidden relative">
                                    <motion.div 
                                        initial={{ x: "-100%" }}
                                        animate={{ x: i < activeStep ? "0%" : "-100%" }}
                                        className="absolute inset-0 bg-sail-orange"
                                    />
                                </div>
                             </div>
                        )}
                        {i < 4 && <span className="md:hidden text-gray-300 text-2xl">/</span>}
                    </React.Fragment>
                ))}
            </div>
            
            <div className="mt-16 text-center h-20 relative z-10 px-4">
                 <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="max-w-xl mx-auto"
                    >
                         <p className="text-sail-orange font-bold text-xs tracking-widest uppercase mb-3">Phase 0{activeStep + 1}</p>
                         <p className="text-slate-600 font-medium text-xl leading-relaxed">
                            {steps[activeStep].desc}
                         </p>
                    </motion.div>
                 </AnimatePresence>
            </div>
        </div>
      </Section>

      {/* Bold CTA Section */}
      <Section className="bg-sail-green py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedElement>
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tighter">
                READY TO <br/>
                <span className="text-sail-orange">BUILD THE FUTURE?</span>
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 font-medium max-w-2xl mx-auto">
                Join the companies scaling their vision with Nairobi's premier digital growth partner.
            </p>
            <Button to="/contact" variant="white" className="!px-12 !py-6 !text-xl shadow-2xl" icon>
                Iniate Project
            </Button>
          </AnimatedElement>
        </div>
      </Section>
    </div>
  );
};

export default WorkWithUs;
