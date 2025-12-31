import React from 'react';
import { motion } from 'framer-motion';
import { Section, AnimatedElement, Button, DisplayText, PageHero, Card } from '../components/UI';
import { Rocket, TrendingUp, Briefcase, ArrowRight, Target, Zap, Globe, Cpu, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';

const WorkWithUs: React.FC = () => {
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

  const processSteps = [
    {
      id: "01",
      title: "Discovery",
      desc: "We audit your current landscape, competitor moats, and internal bottlenecks to uncover the path of least resistance to your goals.",
      icon: Globe
    },
    {
      id: "02",
      title: "Strategy",
      desc: "A custom architectural blueprint balancing quick revenue wins with long-term digital infrastructure. No fluff, just precision engineering.",
      icon: Target
    },
    {
      id: "03",
      title: "Build",
      desc: "Our developers and creatives execute with obsessive attention to detail, building the engines that will power your business for years.",
      icon: Cpu
    },
    {
      id: "04",
      title: "Launch",
      desc: "We deploy with clinical precision. Every pixel, every line of code, and every tracking pixel is validated for maximum day-one impact.",
      icon: Zap
    },
    {
      id: "05",
      title: "Scale",
      desc: "Optimization is a loop, not a destination. We continuously refine your systems to turn momentum into a self-sustaining flywheel of growth.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Work With Us | Strategic Growth Partnerships"
        description="Partner with Nairobi's premier digital growth agency. We work with challengers, scalers, and enterprises to build the future of East African business."
        keywords={["Partner with SailCraft", "Digital Agency Nairobi", "Software Development Kenya", "Enterprise Growth Strategy"]}
        path="work-with-us"
      />

      <PageHero
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
        subtitle="Growth Architecture"
        title={
            <DisplayText size="lg" className="text-sail-green mb-4">
                CHARTING PATHS<br/>
                <span className="text-sail-orange text-outline-orange">FOR THE AMBITIOUS.</span>
            </DisplayText>
        }
      >
          <p className="text-xl text-slate-600 max-w-2xl mb-8 font-medium leading-relaxed">
            We don't just take orders; we build partnerships. We excel when working with leaders ready to redefine their market space through technology and strategy.
          </p>
      </PageHero>

      {/* Profiles Section - Who We Work With */}
      <Section className="py-24 border-b border-slate-100">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-sail-orange font-bold uppercase tracking-widest text-xs mb-4 block">Our Partners</span>
          <DisplayText size="md" className="text-sail-green mb-6 uppercase tracking-tight">Who We Scale With</DisplayText>
          <p className="text-slate-500 text-lg font-medium">We thrive where high stakes meet high innovation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, i) => (
            <AnimatedElement key={i} delay={i * 0.1}>
              <Card className="hover:border-sail-orange group h-full flex flex-col">
                <div className="w-12 h-12 bg-sail-offWhite rounded-lg flex items-center justify-center text-sail-green group-hover:bg-sail-orange group-hover:text-white mb-6 transition-all duration-300">
                  <profile.icon size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-sail-green mb-2">{profile.title}</h3>
                <p className="text-sail-orange font-bold text-xs uppercase tracking-widest mb-6">{profile.subtitle}</p>
                <p className="text-slate-600 leading-relaxed font-medium">{profile.desc}</p>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* How We Work - The Grid Process */}
      <Section className="py-32 bg-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
                <span className="text-sail-orange font-bold uppercase tracking-widest text-xs mb-4 block">The Engine</span>
                <DisplayText size="md" className="text-sail-green uppercase tracking-tight">How we work</DisplayText>
                <p className="text-slate-500 text-lg mt-6 font-medium">A systematic, transparent journey from initial audit to sustainable scale.</p>
            </div>
            <div className="hidden lg:block">
                 <div className="flex items-center gap-2 text-slate-300 font-bold uppercase text-[10px] tracking-[0.3em]">
                    <span>Process Integrity</span>
                    <div className="w-12 h-px bg-slate-200"></div>
                 </div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {processSteps.map((step, index) => (
                <AnimatedElement key={step.id} delay={index * 0.1} className="h-full">
                    <div className="h-full bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-sail-orange/20 transition-all duration-500 overflow-hidden group flex flex-col">
                        {/* Progress bar in brand orange */}
                        <div className="w-full h-1.5 bg-slate-50 relative overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: "circOut" }}
                                className="h-full bg-sail-orange"
                            />
                        </div>

                        <div className="p-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-10">
                                <span className="text-5xl font-heading font-bold text-slate-100 group-hover:text-sail-orange/10 transition-colors duration-500 leading-none">
                                    {step.id}
                                </span>
                                <div className="p-3 bg-sail-offWhite rounded-xl text-sail-green group-hover:text-sail-orange transition-colors duration-300">
                                    <step.icon size={22} />
                                </div>
                            </div>

                            <h3 className="text-2xl font-heading font-bold text-sail-green mb-4 group-hover:translate-x-1 transition-transform duration-300">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                {step.desc}
                            </p>
                        </div>
                    </div>
                </AnimatedElement>
            ))}

            {/* 6th Card - Redesigned for Contrast & Flow */}
            <AnimatedElement delay={0.6} className="h-full">
                <div className="h-full bg-sail-green rounded-2xl shadow-xl overflow-hidden relative group border border-sail-green/20 flex flex-col">
                    {/* Animated Progress Bar at Top - Matches steps */}
                    <div className="w-full h-1.5 bg-white/10 relative overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                            className="h-full bg-sail-orange"
                        />
                    </div>

                    <div className="p-10 flex flex-col h-full relative z-10">
                        <div className="absolute inset-0 bg-grid-pattern-dark bg-grid opacity-10 pointer-events-none"></div>
                        
                        <div className="flex justify-between items-start mb-10 relative">
                             <span className="text-5xl font-heading font-bold text-white/10 leading-none">06</span>
                             <div className="p-3 bg-white/10 rounded-xl text-sail-orange group-hover:scale-110 transition-transform duration-300">
                                <Sparkles size={22} />
                             </div>
                        </div>

                        <div className="relative mt-auto">
                            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 leading-[1.1] tracking-tight">
                                READY TO <br/>
                                <span className="text-sail-orange">SCALE FORWARD?</span>
                            </h3>
                            <p className="text-white/70 mb-10 font-medium leading-relaxed max-w-xs">
                                Don't leave your growth to chance. Let's build your next chapter together.
                            </p>
                            <Button to="/contact" variant="white" className="!w-full !py-4 shadow-xl shadow-black/20" icon>
                                Initiate Project
                            </Button>
                        </div>
                    </div>

                    {/* Ambient Glow */}
                    <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-sail-orange/20 rounded-full blur-[80px] group-hover:bg-sail-orange/30 transition-all duration-700"></div>
                </div>
            </AnimatedElement>
        </div>
      </Section>

      {/* Final High-Contrast Page CTA - Consistent with Success Stories */}
      <Section fullWidth className="!p-0 border-t border-sail-green/10">
        <div className="bg-sail-green relative overflow-hidden py-24 md:py-40">
            {/* Architectural Background Pattern */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern-dark bg-grid opacity-10"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sail-orange/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -ml-20 -mb-20"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    <div className="text-center lg:text-left max-w-3xl">
                        <AnimatedElement>
                            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] mb-8 border border-white/10">
                                Project Initation
                            </span>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                                YOUR STORY <br/>
                                <span className="text-sail-orange">DESERVES SCALE.</span>
                            </h2>
                            <p className="text-white/60 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
                                Join the leaders transforming their vision into market dominance. Our team is ready to engineer your growth.
                            </p>
                        </AnimatedElement>
                    </div>

                    <AnimatedElement delay={0.2} className="flex-shrink-0 w-full lg:w-auto">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-3xl text-center lg:text-left flex flex-col items-center lg:items-start gap-8 shadow-2xl">
                             <div className="flex flex-col gap-2">
                                <p className="text-white font-bold text-sm tracking-widest uppercase">Response Time</p>
                                <p className="text-sail-orange font-heading text-2xl font-bold underline decoration-white/20 underline-offset-8">&lt; 24 Hours</p>
                             </div>
                             <Button to="/contact" variant="white" className="!px-16 !py-6 !text-xl shadow-2xl hover:scale-105 transition-transform" icon>
                                Start Now
                            </Button>
                        </div>
                    </AnimatedElement>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default WorkWithUs;