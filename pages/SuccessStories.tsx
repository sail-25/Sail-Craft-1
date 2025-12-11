import React, { useState } from 'react';
import { Section, AnimatedElement, Button, DisplayText, PageHero, AccordionItem } from '../components/UI';
import { Trophy, Target, Zap, ArrowRight, RefreshCcw } from 'lucide-react';
import { SEO } from '../components/SEO';

const cases = [
  {
    id: 1,
    client: "EcoRetail",
    category: "E-Commerce Infrastructure",
    challenge: "Fragmented manual inventory systems across multiple warehouse locations were causing frequent stockouts, lost data, and 48-hour shipping delays that frustrated customers.",
    solution: "We engineered a centralized cloud ERP with real-time synchronization. Implemented predictive stock algorithms and automated dispatch workflows to streamline operations.",
    win: "200% sales increase in 3 months.",
    image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
  },
  {
    id: 2,
    client: "Fintech One",
    category: "Financial Tech Branding",
    challenge: "A complex product offering was confusing potential investors and users, leading to high bounce rates and a disconnect in the market positioning.",
    solution: "Executed a complete brand overhaul focusing on trust and clarity. Developed a simplified UX/UI design system that guided users intuitively through the financial flows.",
    win: "Double conversion rate & Series A.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80"
  },
  {
    id: 3,
    client: "Logistics Pro",
    category: "Operations AI",
    challenge: "Rising fuel costs and delivery delays due to static, manual route planning methods were eating into profit margins and reducing fleet efficiency.",
    solution: "Developed and deployed an AI-driven dynamic routing algorithm integrated with custom fleet management mobile apps for real-time driver adjustments.",
    win: "Fuel costs cut by 25%.",
    image: "https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  }
];

const SuccessStories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="bg-white">
      <SEO 
        title="Success Stories & Case Studies | SailCraft Solutions"
        description="See how we've helped businesses achieve 200% growth through strategic digital transformation, AI implementation, and modern branding."
        keywords={["Case Studies", "Client Success Stories", "Digital Transformation Examples", "ROI Focused Agency"]}
      />

      <PageHero
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        subtitle="Case Studies"
        title={
            <DisplayText size="lg" className="text-sail-green">
                PROOF THAT<br/>
                POSSIBILITY <span className="text-sail-orange">PAYS OFF.</span>
            </DisplayText>
        }
      />

      <Section className="min-h-screen relative">
        <div className="max-w-6xl mx-auto relative">
            
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
                <AnimatedElement className="w-full max-w-xl">
                    <div className="bg-white/70 backdrop-blur-xl border border-sail-orange/20 shadow-2xl shadow-sail-orange/10 p-10 md:p-14 rounded-2xl text-center relative overflow-hidden">
                        {/* Decorative background glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sail-orange/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-sail-green/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
                        
                        <div className="relative z-10">
                            <div className="w-20 h-20 mx-auto bg-sail-orange/10 rounded-full flex items-center justify-center text-sail-orange mb-8 shadow-inner ring-1 ring-sail-orange/20">
                                <RefreshCcw size={32} className="animate-[spin_4s_linear_infinite]" />
                            </div>
                            
                            <h3 className="text-3xl md:text-4xl font-heading font-bold text-sail-orange mb-6">
                                Recollating Portfolio
                            </h3>
                            
                            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-2">
                                We are currently updating our project archives.
                            </p>
                            <p className="text-slate-500 text-base leading-relaxed">
                                Our updated work file and new case studies will be live shortly.
                            </p>
                        </div>
                    </div>
                </AnimatedElement>
            </div>

            {/* Blurred Content */}
            <div className="mb-12 border-t border-gray-200 filter blur-sm opacity-40 pointer-events-none select-none grayscale-[0.5]">
                {cases.map((item, index) => (
                    <AccordionItem
                        key={item.id}
                        title={item.client}
                        subtitle={item.category}
                        isOpen={activeIndex === index}
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                        <div className="relative w-full h-[600px] md:h-[700px] rounded-2xl overflow-hidden group shadow-2xl mt-2 mb-8">
                            {/* Background Image */}
                            <img 
                                src={item.image} 
                                alt={item.client} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                            />
                            
                            {/* High Contrast Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-sail-darkGreen via-sail-darkGreen/90 to-transparent p-8 md:p-16 flex flex-col justify-end">
                                <AnimatedElement key={index}>
                                    <div className="max-w-4xl relative z-10">
                                        {/* Main Result Headline */}
                                        <div className="mb-10">
                                            <div className="flex items-center gap-2 mb-4 text-sail-orange font-bold tracking-widest uppercase text-xs">
                                                <Trophy size={16} />
                                                <span>Key Outcome</span>
                                            </div>
                                            <h3 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
                                                {item.win}
                                            </h3>
                                        </div>

                                        {/* Detailed Content Grid */}
                                        <div className="grid md:grid-cols-2 gap-8 md:gap-16 border-t border-white/20 pt-8 text-white/90">
                                            <div>
                                                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-sail-orange mb-4">
                                                    <Target size={18} /> The Challenge
                                                </h4>
                                                <p className="leading-relaxed text-lg md:text-xl text-gray-200">
                                                    {item.challenge}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-sail-orange mb-4">
                                                     <Zap size={18} /> The Solution
                                                </h4>
                                                <p className="leading-relaxed text-lg md:text-xl text-gray-200">
                                                    {item.solution}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedElement>
                            </div>
                        </div>
                    </AccordionItem>
                ))}
            </div>
        </div>
      </Section>
      
      {/* Bold CTA Section */}
      <Section fullWidth className="!p-0">
        <div className="bg-sail-green relative overflow-hidden py-24 md:py-32">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full bg-sail-orange mix-blend-overlay opacity-20 blur-3xl"></div>
                 <div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 text-center lg:text-left">
                    <div className="max-w-3xl">
                        <AnimatedElement>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                                READY TO <br/>
                                <span className="text-sail-orange">SCALE UP?</span>
                            </h2>
                            <p className="text-white/80 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
                                Join the companies transforming their future with SailCraft. We don't just deliver projects; we deliver measurable success.
                            </p>
                        </AnimatedElement>
                    </div>
                    <AnimatedElement delay={0.2} className="flex-shrink-0">
                        <div className="flex flex-col items-center gap-6">
                             <Button to="/work-with-us" variant="white" className="!px-12 !py-8 !text-2xl shadow-2xl hover:scale-105 transition-transform" icon>
                                Start Project
                            </Button>
                            <span className="text-white/40 font-heading font-bold tracking-widest text-sm uppercase">
                                Let's write your chapter
                            </span>
                        </div>
                    </AnimatedElement>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default SuccessStories;