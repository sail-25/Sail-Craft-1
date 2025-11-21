import React from 'react';
import { Section, AnimatedElement, Button, DisplayText, PageHero } from '../components/UI';

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
         <p className="text-xl text-slate-600 max-w-2xl font-medium">
            We make it practical, powerful, and within reach. We aren't just a service provider; we are your growth architects, designing systems that scale with your vision.
         </p>
      </PageHero>

      {/* Mission/Vision Grid */}
      <Section className="bg-white">
         <div className="grid md:grid-cols-2 gap-8">
            <AnimatedElement className="bg-white p-12 border border-gray-200 hover:border-sail-green transition-colors shadow-lg shadow-black/5">
                <h3 className="text-sail-orange font-bold tracking-widest uppercase mb-6">Mission</h3>
                <p className="text-4xl font-heading text-sail-green leading-tight font-bold">To Power the Next Generation of Business Excellence.</p>
            </AnimatedElement>
            <AnimatedElement delay={0.1} className="bg-sail-green p-12 border border-transparent text-white shadow-2xl shadow-sail-green/20">
                <h3 className="text-sail-orange font-bold tracking-widest uppercase mb-6">Vision</h3>
                <p className="text-4xl font-heading leading-tight font-bold">A World Where Every Business Can Compete — and Win.</p>
            </AnimatedElement>
         </div>
      </Section>

      {/* Team/Collaboration Image Split */}
      <div className="w-full h-[60vh] relative overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
            className="w-full h-full object-cover fixed-bg grayscale" 
            alt="Collaborative Team Meeting"
         />
         <div className="absolute inset-0 bg-sail-green/80 mix-blend-multiply"></div>
         <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl md:text-7xl text-white font-heading font-bold tracking-tight text-center px-4">
                Built on Trust.<br/>Driven by Data.
            </h2>
         </div>
      </div>

      {/* Values Strip */}
      <Section className="border-t border-gray-200">
        <div className="text-center mb-16">
             <h2 className="text-4xl font-heading text-sail-green font-bold">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-gray-200 border border-gray-200">
          {['Innovation', 'Integrity', 'Excellence', 'Collaboration', 'Centricity'].map((val, i) => (
            <div key={val} className="bg-white p-10 flex items-center justify-center aspect-square hover:bg-sail-green hover:text-white transition-colors group cursor-default">
              <p className="font-heading text-xl text-sail-green group-hover:text-white font-bold transition-colors">{val}</p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* CTA */}
      <Section className="bg-white text-sail-green py-32 border-t border-black/5">
         <div className="relative z-10 text-center max-w-3xl mx-auto">
             <AnimatedElement>
                 <h2 className="text-5xl font-heading font-bold mb-8 leading-tight">Let’s Build Something That Matters</h2>
                 <p className="text-xl text-slate-600 mb-12">
                    Your vision deserves the best execution. Join hands with a team that cares about your growth.
                 </p>
                 <div className="flex justify-center gap-4 flex-wrap">
                     <Button to="/work-with-us" variant="primary" className="!px-12 !py-5 font-bold shadow-lg">Get Started</Button>
                     <Button to="/contact" variant="outline" className="!px-12 !py-5">Contact Us</Button>
                 </div>
             </AnimatedElement>
         </div>
      </Section>
    </div>
  );
};

export default About;