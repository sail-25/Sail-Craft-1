
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, AnimatedElement, Button, DisplayText, PageHero } from '../components/UI';
import { Rocket, TrendingUp, Briefcase, ArrowRight, CheckCircle2, Cpu, Globe, Target, Zap, Heart, Flame, Timer } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useNavigate } from 'react-router-dom';

const WorkWithUs: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    goal: '',
    scale: '',
    timeline: ''
  });
  const navigate = useNavigate();

  const handleSelect = (field: string, value: string) => {
    setSelections(prev => ({ ...prev, [field]: value }));
    if (step < 3) {
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  const steps = [
    { 
        id: "01", 
        title: "The Deep Dive", 
        desc: "We don't guess. We audit your reality to find the actual bottlenecks blocking your growth.", 
    },
    { 
        id: "02", 
        title: "The Blueprint", 
        desc: "A custom roadmap that balances quick wins with long-term infrastructure. No fluff, just math.", 
    },
    { 
        id: "03", 
        title: "The Heavy Lifting", 
        desc: "Our engineers and strategists build your engine. You stay focused on the big picture.", 
    },
    { 
        id: "04", 
        title: "The Launchpad", 
        desc: "Going live with precision. We track everything to ensure the first impression counts.", 
    },
    { 
        id: "05", 
        title: "The Flywheel", 
        desc: "Optimization never stops. We turn your success into a repeatable cycle of growth.", 
    }
  ];

  const quizContent = [
    {
      id: 1,
      question: "What's keeping you up at night?",
      field: "goal",
      options: [
        { label: "Nobody knows we exist", icon: Globe, value: "Marketing" },
        { label: "Our tech is ancient", icon: Cpu, value: "Tech" },
        { label: "We're stuck at a plateau", icon: Target, value: "Growth" }
      ]
    },
    {
      id: 2,
      question: "Where are you in your journey?",
      field: "scale",
      options: [
        { label: "Just a dream & a laptop", icon: Rocket, value: "Early" },
        { label: "Making noise, need scale", icon: TrendingUp, value: "Growth" },
        { label: "Market leaders staying fresh", icon: Briefcase, value: "Enterprise" }
      ]
    },
    {
      id: 3,
      question: "How fast should we move?",
      field: "timeline",
      options: [
        { label: "Yesterday was too late", icon: Flame, value: "ASAP" },
        { label: "The coming quarter", icon: Timer, value: "Planned" },
        { label: "Checking the pulse", icon: Heart, value: "Research" }
      ]
    }
  ];

  const currentQuiz = quizContent[step - 1];

  return (
    <div className="bg-white">
      <SEO 
        title="Start Your Project | Work With SailCraft Solutions"
        description="Partner with Kenya's top digital experts. From startups to enterprise, we offer tailored packages for scaling your business."
        keywords={["Hire Developers Kenya", "Digital Marketing Agency Hire", "Startup Tech Partner", "Enterprise Software Solutions"]}
      />

      {/* Hero */}
      <PageHero
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
        subtitle="Growth Scoper"
        title={
            <DisplayText size="lg" className="text-sail-green mb-4">
                STOP GUESSING.<br/>
                START <span className="text-sail-orange">SCALING.</span>
            </DisplayText>
        }
      >
          <Button onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth'})} variant="primary" className="!px-10 !py-4 shadow-lg shadow-sail-orange/20">
            Diagnose My Business
          </Button>
      </PageHero>

      {/* Interactive Quiz Section */}
      <Section id="quiz" className="bg-sail-offWhite border-y border-black/5 py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sail-orange font-bold tracking-widest uppercase text-xs mb-4 block">Diagnostic Tools 2.0</span>
            <DisplayText size="md" className="text-sail-green mb-6">Let's Find Your Edge</DisplayText>
            
            {/* Step Progress Bar */}
            <div className="flex justify-center items-center gap-4 max-w-xs mx-auto mb-8">
              {[1, 2, 3].map(i => (
                <div 
                  key={i} 
                  className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-sail-orange' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-16 border border-black/5 shadow-2xl shadow-sail-green/5 rounded-2xl relative min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {step <= 3 ? (
                // Fixed: Using spread syntax with 'any' cast to resolve framer-motion property assignment errors
                <motion.div 
                  key={step}
                  {...({
                    initial: { opacity: 0, x: 20 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -20 },
                    transition: { duration: 0.4 }
                  } as any)}
                  className="w-full"
                >
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-sail-green mb-10 text-center">
                    {currentQuiz.question}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {currentQuiz.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelect(currentQuiz.field, option.value)}
                        className={`group p-8 rounded-xl border-2 transition-all text-center flex flex-col items-center justify-center gap-4 ${
                          selections[currentQuiz.field as keyof typeof selections] === option.value
                            ? 'border-sail-orange bg-sail-orange/5 text-sail-orange shadow-lg'
                            : 'border-gray-100 hover:border-sail-green/30 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <option.icon size={32} className={`transition-transform group-hover:scale-110 ${
                           selections[currentQuiz.field as keyof typeof selections] === option.value ? 'text-sail-orange' : 'text-sail-green'
                        }`} />
                        <span className="font-bold text-sm uppercase tracking-wide leading-tight">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                // Fixed: Using spread syntax with 'any' cast to resolve framer-motion property assignment errors
                <motion.div 
                  key="complete"
                  {...({
                    initial: { opacity: 0, scale: 0.95 },
                    animate: { opacity: 1, scale: 1 }
                  } as any)}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-green-50 text-sail-green rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-sail-green mb-4">Diagnostic Complete!</h3>
                  <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto">
                    We've identified that you need <span className="text-sail-orange font-bold">{selections.goal}</span> focused expertise. You're at the <span className="text-sail-orange font-bold">{selections.scale}</span> stage and ready to move <span className="text-sail-orange font-bold">{selections.timeline}</span>.
                  </p>
                  <Button 
                    onClick={() => navigate('/contact', { state: { priority: true, ...selections } })} 
                    variant="primary" 
                    className="!px-12 !py-5 shadow-xl shadow-sail-orange/20"
                    icon
                  >
                    Send My Growth Audit
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>

      {/* Process Grid - Animated */}
      <Section id="process" className="py-24 border-t border-black/5">
         <div className="text-center max-w-3xl mx-auto mb-20">
            <DisplayText size="md" className="text-sail-green mb-4">HOW WE WORK</DisplayText>
            <p className="text-slate-600 text-lg">A zero-waste approach to digital dominance.</p>
         </div>

         <motion.div 
            {...({
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, margin: "-10%" },
                variants: {
                    visible: { transition: { staggerChildren: 0.15 } }
                }
            } as any)}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
         >
             {steps.map((step, index) => (
                 <motion.div 
                    key={step.id} 
                    {...({
                        variants: {
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                        }
                    } as any)}
                    className="relative group h-full"
                 >
                     {/* Card Container */}
                     <div className="h-full flex flex-col pt-6 px-4 pb-8 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-sail-green/5 bg-white border border-transparent hover:border-gray-100 relative overflow-hidden">
                         
                         {/* Animated Progress Bar Top */}
                         <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 rounded-t-xl overflow-hidden">
                             <motion.div 
                                {...({
                                    initial: { width: 0 },
                                    whileInView: { width: "100%" },
                                    viewport: { once: true },
                                    transition: { duration: 1.2, delay: 0.2 + (index * 0.1), ease: "circOut" }
                                } as any)}
                                className="h-full bg-sail-green group-hover:bg-sail-orange transition-colors duration-300"
                             />
                         </div>

                         {/* Content */}
                         <div className="relative z-10 flex flex-col h-full">
                             <div className="flex justify-between items-start mb-6">
                                 <span className="text-5xl font-heading font-bold text-gray-200 group-hover:text-sail-orange/80 transition-colors duration-500">
                                     {step.id}
                                 </span>
                                 <div className="w-10 h-10 rounded-full bg-sail-offWhite flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sail-orange shadow-sm">
                                    <ArrowRight size={18} />
                                 </div>
                             </div>
                             
                             <h3 className="text-2xl font-heading font-bold text-sail-green mb-4 group-hover:translate-x-1 transition-transform duration-300">
                                 {step.title}
                             </h3>
                             <p className="text-slate-600 leading-relaxed flex-grow">
                                 {step.desc}
                             </p>
                         </div>
                     </div>
                 </motion.div>
             ))}
             
             {/* CTA Card in Grid */}
             <motion.div 
                {...({
                    variants: {
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } }
                    }
                } as any)}
                className="h-full"
             >
                 <div className="bg-sail-green h-full p-8 flex flex-col justify-center items-start text-white rounded-xl relative overflow-hidden group shadow-xl">
                     <div className="absolute -right-10 -top-10 w-40 h-40 bg-sail-orange/20 rounded-full blur-3xl group-hover:bg-sail-orange/40 transition-colors duration-700 animate-pulse"></div>
                     <h3 className="text-3xl font-heading font-bold mb-6 relative z-10">Found your path?</h3>
                     <p className="text-white/80 mb-8 relative z-10">Don't let the diagnosis gather dust. Let's build.</p>
                     <Button to="/contact" variant="white" className="!w-full relative z-10 group-hover:scale-105 transition-transform">Get in Touch</Button>
                 </div>
             </motion.div>
         </motion.div>
      </Section>
    </div>
  );
};

export default WorkWithUs;
