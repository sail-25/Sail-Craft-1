import React from 'react';
import { Section, AnimatedElement, Button, DisplayText } from '../components/UI';

const About: React.FC = () => {
  return (
    <div className="bg-sail-offWhite">
      {/* Hero */}
      <Section className="pt-40 pb-20" grid>
        <AnimatedElement>
            <DisplayText size="lg" className="text-sail-green">
                GROWTH SHOULD<br/>
                <span className="text-slate-400">FEEL POSSIBLE.</span>
            </DisplayText>
        </AnimatedElement>
        <AnimatedElement delay={0.2} className="mt-12 grid md:grid-cols-2 gap-12">
             <div className="text-xl text-slate-600 font-medium leading-relaxed">
                <p>We make it practical, powerful, and within reach. We aren't just a service provider; we are your growth architects, designing systems that scale with your vision.</p>
             </div>
             <div className="flex justify-end">
                <Button to="/work-with-us" variant="dark">Launch My Growth Plan</Button>
             </div>
        </AnimatedElement>
      </Section>

      {/* Image Split */}
      <div className="w-full h-[60vh] relative overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            className="w-full h-full object-cover fixed-bg" 
            alt="Team"
         />
         <div className="absolute inset-0 bg-sail-green/20 mix-blend-multiply"></div>
      </div>

      {/* Mission/Vision Grid */}
      <Section>
         <div className="grid md:grid-cols-2 gap-6">
            <AnimatedElement className="bg-white p-12 border border-gray-200 rounded-xl hover:border-sail-green transition-colors">
                <h3 className="text-sail-orange font-bold tracking-widest uppercase mb-6">Mission</h3>
                <p className="text-4xl font-heading text-sail-green leading-tight">To Power the Next Generation of African Business.</p>
            </AnimatedElement>
            <AnimatedElement delay={0.1} className="bg-sail-green p-12 border border-transparent rounded-xl text-white">
                <h3 className="text-sail-orange font-bold tracking-widest uppercase mb-6">Vision</h3>
                <p className="text-4xl font-heading leading-tight">A Continent Where Every Business Can Compete — and Win.</p>
            </AnimatedElement>
         </div>
      </Section>

      {/* Values Strip */}
      <Section className="border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-gray-200 border border-gray-200">
          {['Innovation', 'Integrity', 'Excellence', 'Collaboration', 'Centricity'].map((val, i) => (
            <div key={val} className="bg-white p-10 flex items-center justify-center aspect-square hover:bg-sail-offWhite transition-colors">
              <p className="font-heading text-xl text-sail-green font-bold">{val}</p>
            </div>
          ))}
        </div>
      </Section>
      
      <Section dark className="text-center py-32">
         <AnimatedElement>
             <h2 className="text-5xl font-heading text-white mb-10">Let’s Build Something That Matters</h2>
             <Button to="/work-with-us" variant="primary" className="!px-12 !py-5">Get Started</Button>
         </AnimatedElement>
      </Section>
    </div>
  );
};

export default About;