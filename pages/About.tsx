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

      {/* Brand Story Section - Redesigned Layout */}
      <Section id="our-story" className="relative py-24 md:py-32 overflow-hidden" fullWidth>
         {/* Background Image with Deep Overlay - Preserved */}
         <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Strategic planning session at SailCraft"
              className="w-full h-full object-cover"
            />
            {/* Dark Sail Green Overlay - High Opacity for Max Readability */}
            <div className="absolute inset-0 bg-sail-darkGreen/95 mix-blend-multiply"></div>
            {/* Subtle gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-sail-darkGreen/80 via-transparent to-sail-darkGreen/80"></div>
         </div>

         <div className="container mx-auto px-6 md:px-12 relative z-10">
             <AnimatedElement>
                <div className="max-w-7xl mx-auto">
                    {/* Header Area - Split Layout */}
                    <div className="grid md:grid-cols-12 gap-8 mb-16 border-b border-white/10 pb-10 items-end">
                        <div className="md:col-span-8">
                             <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-sail-orange/10 text-sail-orange border border-sail-orange/20 font-bold tracking-widest uppercase text-xs mb-6 backdrop-blur-md">
                                <span className="w-1.5 h-1.5 rounded-full bg-sail-orange"></span>
                                Our Story
                             </span>
                             <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-none tracking-tight">
                                Building with <span className="text-sail-orange">Purpose</span>
                             </h2>
                        </div>
                        <div className="md:col-span-4">
                             <p className="text-lg text-white/60 font-medium leading-relaxed">
                                Redefining how businesses in East Africa scale through technology, strategy, and intelligent design.
                            </p>
                        </div>
                    </div>
                    
                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                        {/* Narrative Column */}
                        <div className="space-y-8">
                            <p className="text-2xl md:text-3xl font-heading font-medium text-white leading-snug">
                                SailCraft was created to help businesses grow with <span className="text-sail-orange underline decoration-sail-orange/30 underline-offset-4">clarity and confidence</span>.
                            </p>
                            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                                <p>
                                    We saw a gap — brands had ambition, but not the strategy, systems, or support to turn that ambition into real progress. The market was flooded with disconnected services: a website here, a marketing campaign there, but no unified engine for growth.
                                </p>
                                <p>
                                    So we built a team designed to change that. We specialize in digital marketing, creative strategy, and technology solutions — bringing these pieces together into one powerful, practical approach.
                                </p>
                            </div>
                        </div>

                        {/* Visual/Quote Column */}
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-sail-orange/20 to-sail-green/20 rounded-2xl blur-xl opacity-30"></div>
                            
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl relative shadow-2xl">
                                <div className="mb-8">
                                     <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-sail-orange opacity-80">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
                                     </svg>
                                </div>
                                <blockquote className="text-xl md:text-2xl text-white font-heading font-medium leading-relaxed mb-8">
                                    "We believe growth should be measurable, achievable, and tailored to your market. With deep East African insight, we help brands make smarter decisions."
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="h-px w-12 bg-sail-orange"></div>
                                    <span className="text-white/50 text-sm font-bold uppercase tracking-widest">Core Philosophy</span>
                                </div>
                            </div>
                            
                             <div className="mt-8 px-4">
                                <p className="text-xl font-heading font-bold text-white">
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