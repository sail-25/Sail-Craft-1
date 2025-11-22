import React from 'react';
import { Section, AnimatedElement, Button, DisplayText, PageHero } from '../components/UI';
import { ArrowRight, Star, Shield, Zap, Users, Heart } from 'lucide-react';

const values = [
    { icon: Zap, title: 'Innovation', desc: 'We don\'t just follow trends; we forge new paths in the digital landscape.' },
    { icon: Shield, title: 'Integrity', desc: 'Transparency in every pixel, every line of code, and every report.' },
    { icon: Star, title: 'Excellence', desc: 'Good enough is never enough. We obsess over the details that matter.' },
    { icon: Users, title: 'Collaboration', desc: 'Your team and ours, operating as a single, unified growth engine.' },
    { icon: Heart, title: 'Centricity', desc: 'Every decision starts with the human experience at its core.' }
];

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        subtitle="Who We Are"
        title={
            <DisplayText size="lg" className="text-sail-green">
                GROWTH SHOULD<br/>
                <span className="text-sail-orange">FEEL POSSIBLE.</span>
            </DisplayText>
        }
      >
         <p className="text-xl text-slate-600 max-w-2xl font-medium leading-relaxed">
            We make it practical, powerful, and within reach. We aren't just a service provider; we are your growth architects, designing systems that scale with your vision.
         </p>
      </PageHero>

      {/* Mission/Vision - Dual Pillar Layout */}
      <Section fullWidth className="!p-0 border-b border-black/5">
         <div className="grid md:grid-cols-2 min-h-[600px]">
            <AnimatedElement className="bg-sail-offWhite p-12 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black/5 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="font-heading font-bold text-9xl text-sail-green">M</span>
                 </div>
                <h3 className="text-sail-orange font-bold tracking-widest uppercase mb-8 flex items-center gap-3">
                    <span className="w-8 h-px bg-sail-orange"></span> Mission
                </h3>
                <p className="text-4xl md:text-5xl font-heading text-sail-green leading-tight font-bold relative z-10">
                    To Power the Next Generation of Business Excellence.
                </p>
            </AnimatedElement>
            <AnimatedElement delay={0.1} className="bg-sail-green p-12 md:p-20 flex flex-col justify-center text-white relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="font-heading font-bold text-9xl text-white">V</span>
                 </div>
                <h3 className="text-sail-orange font-bold tracking-widest uppercase mb-8 flex items-center gap-3">
                    <span className="w-8 h-px bg-sail-orange"></span> Vision
                </h3>
                <p className="text-4xl md:text-5xl font-heading leading-tight font-bold relative z-10">
                    A World Where Every Business Can Compete — and Win.
                </p>
            </AnimatedElement>
         </div>
      </Section>

      {/* Team Image Split */}
      <div className="w-full h-[60vh] relative overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
            className="w-full h-full object-cover fixed-bg grayscale" 
            alt="Collaborative Team Meeting"
         />
         <div className="absolute inset-0 bg-sail-green/80 mix-blend-multiply"></div>
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 border border-white/20 max-w-4xl mx-4 text-center">
                <h2 className="text-4xl md:text-6xl text-white font-heading font-bold tracking-tight">
                    Built on Trust.<br/>Driven by Data.
                </h2>
            </div>
         </div>
      </div>

      {/* Values Ecosystem */}
      <Section className="bg-white py-24 md:py-32">
        <div className="mb-16 max-w-3xl">
             <span className="text-sail-orange font-bold tracking-widest uppercase text-sm mb-2 block">Our DNA</span>
             <h2 className="text-5xl font-heading text-sail-green font-bold">The Principles We Live By</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, i) => (
            <AnimatedElement key={val.title} delay={i * 0.1} className="h-full">
                <div className="group h-full bg-white border border-gray-200 p-8 hover:border-sail-orange hover:shadow-xl hover:shadow-sail-orange/10 transition-all duration-300 flex flex-col relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 text-9xl font-heading font-bold text-gray-50 group-hover:text-sail-offWhite transition-colors -z-0 select-none">
                        0{i + 1}
                    </div>
                    <div className="relative z-10">
                        <val.icon className="w-10 h-10 text-sail-orange mb-6" />
                        <h3 className="font-heading text-2xl text-sail-green font-bold mb-4">{val.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{val.desc}</p>
                    </div>
                </div>
            </AnimatedElement>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
            <Button to="/work-with-us" variant="outline" icon>Join Our Team</Button>
        </div>
      </Section>
      
      {/* High-Impact Split CTA */}
      <Section fullWidth className="!p-0 bg-sail-darkGreen text-white border-t border-white/10 overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
            <span className="text-[20vw] font-heading font-bold text-white tracking-tighter">START</span>
         </div>
         
         <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
             <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                 <div className="lg:w-1/2 text-center lg:text-left">
                     <AnimatedElement>
                         <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-[0.9]">
                             Let’s Build Something<br/>
                             <span className="text-sail-orange">That Matters.</span>
                         </h2>
                         <p className="text-xl text-white/70 max-w-lg leading-relaxed font-medium mx-auto lg:mx-0">
                            Your vision deserves the best execution. Join hands with a team that cares about your growth as much as you do.
                         </p>
                     </AnimatedElement>
                 </div>
                 
                 <div className="lg:w-1/2 flex flex-col items-center lg:items-end gap-6">
                     <AnimatedElement delay={0.2} className="w-full max-w-md">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl">
                            <div className="flex flex-col gap-4">
                                <Button to="/work-with-us" variant="primary" className="!w-full !py-5 !text-lg shadow-2xl shadow-black/50" icon>
                                    Start Your Project
                                </Button>
                                <Button to="/contact" variant="white" className="!w-full !py-5 !text-lg">
                                    Talk to an Expert
                                </Button>
                            </div>
                            <p className="mt-6 text-center text-sm text-white/40 uppercase tracking-widest font-bold">
                                No commitment required
                            </p>
                        </div>
                     </AnimatedElement>
                 </div>
             </div>
         </div>
      </Section>
    </div>
  );
};

export default About;