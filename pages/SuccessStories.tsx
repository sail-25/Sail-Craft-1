import React, { useState } from 'react';
import { Section, AnimatedElement, Button, DisplayText, PageHero, AccordionItem } from '../components/UI';
import { Trophy, Target, Zap, ArrowRight } from 'lucide-react';

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

      <Section className="min-h-screen">
        <div className="max-w-6xl mx-auto">
            <div className="mb-12 border-t border-gray-200">
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