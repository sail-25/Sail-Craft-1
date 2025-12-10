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

      {/* Brand Story Section - Redesigned: Dark Overlay for High Contrast */}
      <Section className="relative py-32 md:py-56 overflow-hidden" fullWidth>
         {/* Background Image with Deep Overlay */}
         <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Strategic planning session at SailCraft"
              className="w-full h-full object-cover"
            />
            {/* Dark Sail Green Overlay - High Opacity (90%) for Max Readability */}
            <div className="absolute inset-0 bg-sail-darkGreen/90 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-sail-darkGreen via-transparent to-sail-darkGreen/50"></div>
         </div>

         <div className="container mx-auto px-6 md:px-12 relative z-10">
             <AnimatedElement>
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                         <span className="inline-block py-1 px-4 rounded-full bg-sail-orange/10 text-sail-orange border border-sail-orange/20 font-bold tracking-widest uppercase text-xs mb-6 backdrop-blur-md">
                            Our Story
                         </span>
                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-[1.05]">
                            Building with <span className="text-sail-orange">Purpose</span>
                         </h2>
                    </div>
                    
                    {/* Content Columns */}
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 text-lg leading-relaxed font-medium">
                        <div className="text-gray-200 space-y-6">
                            <p>
                                SailCraft was created to help businesses grow with <span className="text-white font-bold border-b-2 border-sail-orange">clarity and confidence</span>. We saw a gap — brands had ambition, but not the strategy, systems, or support to turn that ambition into real progress.
                            </p>
                            <p>
                                So we built a team designed to change that. We specialize in digital marketing, creative strategy, and technology solutions — bringing these pieces together into one powerful, practical approach.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="pl-6 border-l-4 border-sail-orange">
                                <p className="italic text-white text-xl leading-relaxed">
                                    "We believe growth should be measurable, achievable, and tailored to your market. With deep East African insight, we help brands make smarter decisions."
                                </p>
                            </div>

                            <div className="pt-2">
                                <p className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight">
                                    At SailCraft, we don’t just help you grow.<br/>
                                    <span className="text-sail-orange">We help you move forward.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             </AnimatedElement>
         </div>
      </Section>

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