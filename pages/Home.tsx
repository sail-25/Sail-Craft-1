
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence, useInView, animate } from 'framer-motion';
import { Section, AnimatedElement, Button, DisplayText, Card, Parallax } from '../components/UI';
import { ArrowRight, Zap, Play, Megaphone, Monitor, Bot, PenTool } from 'lucide-react';
import { SEO } from '../components/SEO';

const CountUp: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  // Refined parallax for subtler, gap-free movement
  const heroParallax = useTransform(scrollY, [0, 1000], [0, 200]);
  
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsPaused(true);
  };

  return (
    <div className="overflow-hidden bg-white relative">
      <SEO 
        title="Top Digital Growth Agency in Kenya"
        description="SailCraft Solutions is Nairobi's premier agency for Enterprise Web Development, Artificial Intelligence Integration, and Strategic Marketing. We scale businesses."
        keywords={[
            "Best Digital Agency Kenya", 
            "Software Company Nairobi", 
            "AI Consultants Kenya", 
            "Corporate Branding Services", 
            "Web Design Nairobi",
            "Business Automation Experts",
            "Enterprise App Development"
        ]}
        path=""
        type="organization"
      />

      {/* Ambient Background Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sail-orange/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sail-green/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-blue-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Architectural Hero - Brutal & Clean */}
      <Section className="min-h-screen flex flex-col justify-center relative pt-32 md:pt-40 overflow-hidden" fullWidth>
        <div className="absolute inset-0 z-0 h-[140%] -top-[20%]">
            <motion.div style={{ y: heroParallax }} className="w-full h-full">
                <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    className="w-full h-full object-cover opacity-25 md:opacity-30 select-none grayscale"
                    alt="Modern glass architecture representing sailcraft digital foundation"
                />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <AnimatedElement>
                <div className="flex flex-col lg:flex-row items-start justify-between pb-10 mb-10">
                    <div className="max-w-5xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-black/10 bg-white rounded-full text-sail-green text-xs font-bold tracking-widest mb-6 uppercase">
                            <span className="w-2 h-2 rounded-full bg-sail-orange"></span>
                            #1 Digital Growth Partner
                        </div>
                        {/* Strong hidden H1 for SEO, Visual DisplayText acts as H1 for users */}
                        <h1 className="sr-only">SailCraft Solutions - Leading AI & Software Development Agency in Kenya</h1>
                        <DisplayText size="xl" className="text-sail-green relative tracking-tighter">
                            CHARTING<br/>
                            <span className="text-sail-orange">POSSIBILITY</span>
                        </DisplayText>
                    </div>
                    <div className="mt-8 lg:mt-4 max-w-md bg-white p-8 border border-black/5 shadow-xl shadow-black/5 backdrop-blur-sm bg-white/80">
                        <p className="text-xl text-slate-700 font-bold leading-tight mb-8">
                            Strategy. Creativity. Technology. <br/>
                            We build the engines that drive modern business.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Button to="/work-with-us" variant="dark" icon>Start Project</Button>
                            <Button to="/services" variant="outline">Our Services</Button>
                        </div>
                    </div>
                </div>
            </AnimatedElement>

            {/* Hero Visual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
                <AnimatedElement delay={0.2} className="md:col-span-8 relative group h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                    <Link to="/about#our-story" className="block w-full h-full relative cursor-pointer">
                        <div className="absolute inset-0 bg-sail-green/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                        <Parallax offset={30} className="h-full">
                            <img 
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2301&q=80" 
                                className="w-full h-[120%] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 -mt-[10%]"
                                alt="Corporate architecture interior showing enterprise scale"
                            />
                        </Parallax>
                        <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-white/90 backdrop-blur-sm border-t border-black/5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sail-green font-heading text-2xl font-bold">Future Forward</p>
                                    <p className="text-slate-500 text-sm uppercase tracking-widest">Strategic Vision</p>
                                </div>
                                <div className="w-12 h-12 bg-sail-orange text-white flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    </Link>
                </AnimatedElement>
                
                <AnimatedElement delay={0.3} className="md:col-span-4 flex flex-col gap-6 h-[400px] md:h-[500px]">
                    <div className="flex-1 bg-sail-green text-white p-8 flex flex-col justify-between relative overflow-hidden group rounded-lg">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-sail-orange/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-sail-orange/30 transition-colors duration-500 animate-pulse"></div>
                         <Zap size={40} className="text-sail-orange mb-4 relative z-10" />
                         <div className="relative z-10">
                             <h3 className="text-6xl font-heading font-bold mb-2">
                                <CountUp value={80} suffix="%" />
                             </h3>
                             <p className="text-white/80 font-bold uppercase tracking-wide text-sm">Average client growth</p>
                         </div>
                    </div>
                    <div className="flex-1 bg-white p-8 border border-black/10 flex flex-col justify-center hover:border-sail-orange transition-colors rounded-lg shadow-sm">
                         <h3 className="text-6xl font-heading text-sail-green mb-2 font-bold">
                            <CountUp value={34} suffix="+" />
                         </h3>
                         <p className="text-slate-500 font-bold uppercase tracking-wide text-sm">Enterprise Projects</p>
                    </div>
                </AnimatedElement>
            </div>
        </div>
      </Section>

      {/* Marquee Divider */}
      <div className="bg-white py-12 overflow-hidden whitespace-nowrap border-y border-black/10 relative z-10">
        <div className="inline-block animate-marquee">
          {[1,2,3,4,5,6].map(i => (
             <span key={i} className="text-sail-green text-6xl font-heading mx-12 font-bold uppercase tracking-tighter">
                Strategy <span className="text-sail-orange mx-4">•</span> Design <span className="text-sail-orange mx-4">•</span> Technology <span className="text-sail-orange mx-4">•</span>
             </span>
          ))}
        </div>
      </div>

      {/* Services Grid Section */}
      <Section className="relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-sail-green font-heading mb-6 tracking-tight">SOLUTIONS FOR<br/>SCALE</h2>
            <p className="text-slate-600 text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                We simplify complexity. A unified approach to marketing, technology, and operations.
            </p>
            <Button to="/services" variant="outline" icon>View All Services</Button>
        </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 shadow-xl shadow-black/5">
            {[
                { id: 'marketing', icon: Megaphone, title: "Marketing", desc: "Data-driven growth strategies." },
                { id: 'tech', icon: Monitor, title: "Technology", desc: "Scalable web & app development." },
                { id: 'ai', icon: Bot, title: "AI Solutions", desc: "Automation & predictive models." },
                { id: 'creative', icon: PenTool, title: "Branding", desc: "Identity and visual systems." }
            ].map((s, i) => (
                <AnimatedElement key={i} delay={i * 0.1} className="h-full">
                    <Link to={`/services#${s.id}`} className="block h-full">
                        <div className="bg-white p-10 h-full hover:bg-sail-green hover:text-white group transition-colors duration-300 flex flex-col justify-between">
                            <div>
                                <s.icon size={32} className="text-sail-orange mb-8 group-hover:text-white transition-colors" />
                                <h3 className="text-3xl font-heading font-bold mb-4">{s.title}</h3>
                                <p className="text-slate-500 group-hover:text-white/80 mb-8 text-lg leading-tight">{s.desc}</p>
                            </div>
                            <span className="font-bold text-sm flex items-center text-sail-green group-hover:text-white transition-colors uppercase tracking-widest">
                                Explore <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </div>
                    </Link>
                </AnimatedElement>
            ))}
        </div>
      </Section>

      {/* Why Choose Us - Restored to Brutal White/Black */}
      <Section className="py-32 border-t border-black/5 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
              <AnimatedElement>
                  <h2 className="text-6xl md:text-8xl font-heading mb-12 leading-[0.9] text-sail-green tracking-tighter">
                      YOUR<br/>
                      EDGE IN<br/>
                      <span className="text-sail-orange">THE MARKET</span>
                  </h2>
                  <div className="space-y-0 border-t border-black/10">
                      {[
                          { title: "Strategic Depth", desc: "We understand the nuances of complex business environments." },
                          { title: "Global Standards", desc: "World-class quality, clarity, and creativity in everything we deliver." },
                          { title: "Revenue Focus", desc: "We don't care about vanity metrics. We care about your bottom line." }
                      ].map((item, i) => (
                          <div key={i} className="flex flex-col py-8 border-b border-black/10 group hover:bg-gray-50 transition-colors px-4 -mx-4">
                              <div className="flex items-baseline justify-between mb-2">
                                <h4 className="text-3xl font-heading font-bold text-sail-green group-hover:text-sail-orange transition-colors">{item.title}</h4>
                                <span className="text-sail-green/20 font-heading font-bold text-xl">0{i+1}</span>
                              </div>
                              <p className="text-slate-500 text-lg leading-relaxed max-w-md">{item.desc}</p>
                          </div>
                      ))}
                  </div>
              </AnimatedElement>
              <AnimatedElement delay={0.2} className="relative h-full min-h-[600px] overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-sail-green w-full h-full">
                      <Parallax offset={40} className="w-full h-full">
                        <img 
                            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
                            alt="Minimalist computer setup for software development" 
                            className="w-full h-[120%] object-cover opacity-80 mix-blend-overlay grayscale contrast-125 -mt-[10%]"
                        />
                      </Parallax>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 bg-white p-8 shadow-lg">
                      <p className="font-heading text-2xl font-bold text-sail-green">
                          "Design is not just what it looks like and feels like. Design is how it works."
                      </p>
                  </div>
              </AnimatedElement>
          </div>
      </Section>

      {/* Process - Animated Flow */}
      <Section className="border-y border-black/10 py-24 relative z-10 bg-white overflow-hidden">
        <div className="flex flex-col items-center justify-center relative">
             {/* Background text watermark for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
                <span className="text-[15vw] font-heading font-bold text-sail-green">PROCESS</span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 relative z-10">
                {['Discovery', 'Strategy', 'Build', 'Launch', 'Scale'].map((step, i) => (
                    <React.Fragment key={step}>
                        <div className="relative flex flex-col items-center cursor-pointer" onClick={() => handleStepClick(i)}>
                             <motion.span 
                                {...({
                                    animate: { 
                                        color: i === activeStep ? '#FF7441' : '#036029',
                                        opacity: i === activeStep ? 1 : (Math.abs(activeStep - i) <= 1 ? 0.5 : 0.2),
                                        scale: i === activeStep ? 1.1 : 1,
                                        filter: i === activeStep ? 'blur(0px)' : 'blur(0.5px)'
                                    },
                                    transition: { duration: 0.5 }
                                } as any)}
                                className="text-3xl md:text-5xl font-heading font-bold transition-colors"
                            >
                                {step}
                            </motion.span>
                            
                            {/* Active indicator dot underneath */}
                            {i === activeStep && (
                                <motion.div 
                                    className="absolute -bottom-6 w-2 h-2 rounded-full bg-sail-orange"
                                    {...({
                                        layoutId: "activeStepIndicator",
                                        transition: { type: "spring", stiffness: 300, damping: 30 }
                                    } as any)}
                                />
                            )}
                        </div>

                        {/* Connector */}
                        {i < 4 && (
                             <div className="hidden md:flex items-center justify-center w-8 md:w-16">
                                <div className="h-px bg-gray-200 w-full overflow-hidden relative">
                                    <motion.div 
                                        className="absolute inset-0 bg-sail-orange"
                                        {...({
                                            initial: { x: "-100%" },
                                            animate: { x: i < activeStep ? "0%" : "-100%" },
                                            transition: { duration: 0.5 }
                                        } as any)}
                                    />
                                </div>
                             </div>
                        )}
                         {/* Mobile Separator */}
                         <span className="md:hidden text-gray-300 text-2xl">
                             {i < 4 ? '/' : ''}
                         </span>
                    </React.Fragment>
                ))}
            </div>
            
            {/* Description of active step */}
            <div className="mt-16 text-center h-20 relative z-10 px-4">
                 <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeStep}
                        {...({
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: -20 },
                            transition: { duration: 0.3 }
                        } as any)}
                        className="max-w-xl mx-auto"
                    >
                         <p className="text-sail-orange font-bold text-xs tracking-widest uppercase mb-3">Step 0{activeStep + 1}</p>
                         <p className="text-slate-600 font-medium text-xl leading-relaxed">
                            {
                                [
                                    "Uncovering your unique landscape to find hidden opportunities.",
                                    "Charting the most effective path to your goals with precision.",
                                    "Engineering robust, scalable solutions that last.",
                                    "Go-live execution designed for maximum initial impact.",
                                    "Continuous optimization for sustainable long-term growth."
                                ][activeStep]
                            }
                         </p>
                    </motion.div>
                 </AnimatePresence>
            </div>
        </div>
      </Section>

      {/* CTA - High Contrast */}
      <Section fullWidth className="!p-0 bg-sail-green relative z-10">
          <div className="grid md:grid-cols-2 min-h-[500px]">
              <div className="relative h-full min-h-[400px] order-2 md:order-1 overflow-hidden">
                  <Parallax offset={50} className="h-full w-full">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                        className="absolute inset-0 w-full h-[120%] object-cover grayscale -mt-[10%]"
                        alt="Team collaboration on digital project"
                    />
                  </Parallax>
                   <div className="absolute inset-0 bg-sail-green/80 mix-blend-multiply"></div>
              </div>
              <div className="flex flex-col justify-center p-12 md:p-24 bg-white order-1 md:order-2">
                  <h2 className="text-5xl md:text-7xl font-heading text-sail-green mb-8 tracking-tighter font-bold">READY TO<br/>SCALE?</h2>
                  <p className="text-slate-600 text-xl mb-12 max-w-md font-medium">
                      Don't let another opportunity slip by. Let's build the future of your business today.
                  </p>
                  <div>
                    <Button to="/work-with-us" variant="primary" className="!px-12 !py-6 !text-xl shadow-2xl" icon>Start Now</Button>
                  </div>
              </div>
          </div>
      </Section>
    </div>
  );
};

export default Home;
