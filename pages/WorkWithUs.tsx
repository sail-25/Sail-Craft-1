import React from 'react';
import { Section, AnimatedElement, Button, DisplayText, PageHero } from '../components/UI';
import { Rocket, TrendingUp, Briefcase, Search, Compass, Code, Zap, BarChart3, ArrowRight } from 'lucide-react';

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

      {/* Process Grid - Static & Brutal */}
      <Section id="process" className="py-24 border-t border-black/5">
         <div className="text-center max-w-3xl mx-auto mb-20">
            <DisplayText size="md" className="text-sail-green mb-4">THE PROCESS</DisplayText>
            <p className="text-slate-600 text-lg">A transparent path from concept to market dominance.</p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {steps.map((step, index) => (
                 <AnimatedElement key={step.id} delay={index * 0.1}>
                     <div className="border-t-4 border-sail-green pt-6 group hover:border-sail-orange transition-colors">
                         <span className="text-4xl font-heading font-bold text-gray-200 mb-4 block group-hover:text-sail-orange transition-colors">{step.id}</span>
                         <h3 className="text-2xl font-heading font-bold text-sail-green mb-3">{step.title}</h3>
                         <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                     </div>
                 </AnimatedElement>
             ))}
             {/* CTA Card in Grid */}
             <AnimatedElement delay={0.6}>
                 <div className="bg-sail-green h-full p-8 flex flex-col justify-center items-start text-white">
                     <h3 className="text-2xl font-heading font-bold mb-4">Ready to start?</h3>
                     <Button to="/contact" variant="white" className="!w-full">Get in Touch</Button>
                 </div>
             </AnimatedElement>
         </div>
      </Section>
    </div>
  );
};

export default WorkWithUs;