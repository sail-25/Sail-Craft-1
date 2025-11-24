import React from 'react';
import { motion } from 'framer-motion';
import { Section, AnimatedElement, Button, DisplayText, PageHero } from '../components/UI';
import { Rocket, TrendingUp, Briefcase, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const WorkWithUs: React.FC = () => {
  
  const steps = [
    { 
        id: "01", 
        title: "Discovery", 
        desc: "We dive deep into your business model, audience, and challenges. No assumptions, just data.", 
    },
    { 
        id: "02", 
        title: "Strategy", 
        desc: "We craft a comprehensive roadmap, selecting the right tech stack and marketing channels.", 
    },
    { 
        id: "03", 
        title: "Execution", 
        desc: "Our designers and developers build your solution with precision. Agile sprints with regular updates.", 
    },
    { 
        id: "04", 
        title: "Launch", 
        desc: "Rigorous testing, SEO setup, and analytics integration before we go live.", 
    },
    { 
        id: "05", 
        title: "Growth", 
        desc: "Launch is just day one. We provide analysis and continuous improvements to maximize ROI.", 
    }
  ];

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
        subtitle="Partnership"
        title={
            <DisplayText size="lg" className="text-sail-green mb-4">
                BRING THE VISION<br/>
                WE'LL BUILD THE <span className="text-sail-orange">MOMENTUM</span>
            </DisplayText>
        }
      >
          <Button onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth'})} variant="primary" className="!px-10 !py-4 shadow-lg shadow-sail-orange/20">
            See The Process
          </Button>
      </PageHero>

      {/* Tiers */}
      <Section>
        <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {[
            { icon: Rocket, title: "Startups", desc: "From idea to launch. Branding, strategy, and tools to move fast." },
            { icon: TrendingUp, title: "Scaling Up", desc: "Better marketing and smarter systems for the next phase of growth." },
            { icon: Briefcase, title: "Enterprise", desc: "Sharper, stronger, more efficient digital transformation at scale." }
          ].map((card, i) => (
            <AnimatedElement key={i} delay={i * 0.1} className="h-full">
              <div className="bg-white p-10 h-full hover:bg-sail-green hover:text-white transition-all group">
                <card.icon size={40} className="text-sail-orange mb-8" />
                <h3 className="text-3xl font-bold font-heading text-sail-green group-hover:text-white mb-4">{card.title}</h3>
                <p className="text-slate-600 group-hover:text-white/80 leading-relaxed">{card.desc}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Process Grid - Animated */}
      <Section id="process" className="py-24 border-t border-black/5">
         <div className="text-center max-w-3xl mx-auto mb-20">
            <DisplayText size="md" className="text-sail-green mb-4">THE PROCESS</DisplayText>
            <p className="text-slate-600 text-lg">A transparent path from concept to market dominance.</p>
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

                         {/* Subtle background gradient on hover */}
                         <div className="absolute inset-0 bg-gradient-to-b from-white to-sail-offWhite/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
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
                     {/* Animated Background Pulse */}
                     <div className="absolute -right-10 -top-10 w-40 h-40 bg-sail-orange/20 rounded-full blur-3xl group-hover:bg-sail-orange/40 transition-colors duration-700 animate-pulse"></div>
                     
                     <h3 className="text-3xl font-heading font-bold mb-6 relative z-10">Ready to start?</h3>
                     <p className="text-white/80 mb-8 relative z-10">Let's turn this process into your progress.</p>
                     <Button to="/contact" variant="white" className="!w-full relative z-10 group-hover:scale-105 transition-transform">Get in Touch</Button>
                 </div>
             </motion.div>
         </motion.div>
      </Section>
    </div>
  );
};

export default WorkWithUs;