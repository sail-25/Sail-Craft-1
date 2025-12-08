import React from 'react';
import { Section, AnimatedElement, Button, DisplayText, PageHero, Card } from '../components/UI';
import { SEO } from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="About Us"
        description="We are growth architects. SailCraft combines strategy, creativity, and technology to build systems that scale businesses in Africa."
        keywords={["About SailCraft", "Digital Strategy Kenya", "Tech Visionaries Nairobi", "Business Growth Consultants"]}
        path="about"
      />

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

      {/* Mission/Vision - Standard Clean Layout */}
      <Section className="bg-white">
         <div className="grid md:grid-cols-2 gap-12">
            <AnimatedElement>
                <Card className="h-full flex flex-col justify-center p-10 border-l-4 border-l-sail-orange border-y-0 border-r-0 rounded-none bg-slate-50">
                    <h3 className="text-sail-orange font-bold tracking-widest uppercase mb-4">Mission</h3>
                    <p className="text-3xl font-heading text-sail-green leading-tight font-bold">
                        To Power the Next Generation of Business Excellence.
                    </p>
                </Card>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
                <Card className="h-full flex flex-col justify-center p-10 border-l-4 border-l-sail-green border-y-0 border-r-0 rounded-none bg-slate-50">
                    <h3 className="text-sail-green font-bold tracking-widest uppercase mb-4">Vision</h3>
                    <p className="text-3xl font-heading text-sail-green leading-tight font-bold">
                        A World Where Every Business Can Compete — and Win.
                    </p>
                </Card>
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

      {/* Values - Brutalist Box Grid */}
      <Section className="bg-white py-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
             <span className="text-sail-orange font-bold tracking-widest uppercase text-sm mb-2 block">Our DNA</span>
             <h2 className="text-4xl font-heading text-sail-green font-bold">The Principles We Live By</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-gray-200 border border-gray-200 shadow-lg shadow-black/5">
          {['Innovation', 'Integrity', 'Excellence', 'Collaboration', 'Centricity'].map((val, i) => (
            <AnimatedElement key={val} delay={i * 0.1} className="h-full">
                <div className="bg-white aspect-square flex items-center justify-center p-4 hover:bg-sail-green hover:text-white transition-all duration-300 group cursor-default">
                    <h3 className="font-heading text-xl md:text-2xl font-bold group-hover:scale-110 transition-transform">{val}</h3>
                </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>
      
      {/* CTA - Clean & Professional */}
      <Section className="bg-sail-offWhite py-32 border-t border-sail-green/5">
         <div className="max-w-4xl mx-auto text-center">
             <AnimatedElement>
                 <h2 className="text-5xl md:text-6xl font-heading font-bold text-sail-green mb-8 tracking-tight leading-[1.1]">
                     If You’re Serious About Growth, <br/>
                     <span className="text-sail-orange">So Are We.</span>
                 </h2>
                 <p className="text-xl text-slate-600 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
                    Let’s build a plan that fits your goals, your market, and the future you want to create.
                 </p>
                 <Button to="/contact" variant="primary" className="!px-12 !py-5 !text-lg shadow-xl shadow-sail-orange/20 hover:shadow-sail-orange/40" icon>
                    Launch My Growth Plan
                 </Button>
             </AnimatedElement>
         </div>
      </Section>
    </div>
  );
};

export default About;