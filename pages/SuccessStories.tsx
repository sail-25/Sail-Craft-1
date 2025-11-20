import React from 'react';
import { Section, AnimatedElement, Button, DisplayText } from '../components/UI';

const cases = [
  {
    client: "EcoRetail Ltd",
    challenge: "Manual inventory & low visibility.",
    win: "200% sales increase in 3 months.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    client: "FinTech Forward",
    challenge: "Unclear brand message.",
    win: "Double conversion rate & Series A.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80"
  },
  {
    client: "Urban Logistics",
    challenge: "Inefficient dispatch routes.",
    win: "Fuel costs cut by 25%.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  }
];

const SuccessStories: React.FC = () => {
  return (
    <div className="bg-sail-offWhite">
      <Section className="pt-40 pb-20" grid>
        <AnimatedElement>
            <DisplayText size="lg" className="text-sail-green">
                PROOF THAT<br/>
                POSSIBILITY <span className="text-sail-orange">PAYS OFF.</span>
            </DisplayText>
        </AnimatedElement>
      </Section>

      <div className="w-full">
        {cases.map((item, i) => (
          <div key={i} className="group relative w-full h-[80vh] md:h-[60vh] overflow-hidden border-t border-white/20">
            <img src={item.image} alt={item.client} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-sail-darkGreen/80 group-hover:bg-sail-darkGreen/60 transition-colors duration-500"></div>
            
            <div className="absolute inset-0 flex flex-col justify-center container mx-auto px-6 md:px-12">
                <AnimatedElement>
                    <div className="border-l-4 border-sail-orange pl-8 max-w-4xl">
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading">{item.client}</h2>
                        <div className="grid md:grid-cols-2 gap-8 text-white/90 text-lg">
                            <div>
                                <p className="text-sail-orange text-xs uppercase tracking-widest mb-2 font-bold">Challenge</p>
                                <p>{item.challenge}</p>
                            </div>
                            <div>
                                <p className="text-sail-orange text-xs uppercase tracking-widest mb-2 font-bold">The Win</p>
                                <p className="font-bold text-2xl">{item.win}</p>
                            </div>
                        </div>
                    </div>
                </AnimatedElement>
            </div>
          </div>
        ))}
      </div>
      
      <Section className="text-center py-32">
        <h2 className="text-4xl font-heading text-sail-green mb-8">Your Story Could Be Next.</h2>
        <Button to="/work-with-us" variant="dark" className="!px-12 !py-5">Start Project</Button>
      </Section>
    </div>
  );
};

export default SuccessStories;