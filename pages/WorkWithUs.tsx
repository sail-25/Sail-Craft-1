import React from 'react';
import { Section, AnimatedElement, Button, DisplayText, Card } from '../components/UI';
import { Rocket, TrendingUp, Briefcase } from 'lucide-react';

const WorkWithUs: React.FC = () => {
  return (
    <div className="bg-sail-offWhite">
      <Section className="pt-40 pb-20 text-center" grid>
        <AnimatedElement>
          <DisplayText size="lg" className="text-sail-green mb-8">
            BRING THE VISION<br/>
            WE'LL BUILD THE <span className="text-sail-orange">MOMENTUM</span>
          </DisplayText>
          <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth'})} variant="primary" className="!px-10 !py-4">
            Start Now
          </Button>
        </AnimatedElement>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Rocket, title: "Startups", desc: "From idea to launch. Branding, strategy, and tools to move fast." },
            { icon: TrendingUp, title: "Scaling Up", desc: "Better marketing and smarter systems for the next phase." },
            { icon: Briefcase, title: "Enterprise", desc: "Sharper, stronger, more efficient digital transformation." }
          ].map((card, i) => (
            <AnimatedElement key={i} delay={i * 0.1}>
              <div className="bg-white p-10 rounded-xl border border-gray-200 hover:border-sail-green transition-all h-full group">
                <card.icon size={40} className="text-sail-green mb-6 group-hover:text-sail-orange transition-colors" />
                <h3 className="text-2xl font-bold font-heading text-sail-green mb-4">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section dark>
         <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading text-white mb-16 text-center">Our Process</h2>
            <div className="space-y-0">
                {[
                    { step: "01", title: "Discover", desc: "Understand your goals and challenges." },
                    { step: "02", title: "Plan", desc: "Create a clear roadmap to deliver results." },
                    { step: "03", title: "Build", desc: "Creative, marketing, and tech executed with precision." },
                    { step: "04", title: "Launch", desc: "Smooth, effective implementation." },
                    { step: "05", title: "Grow", desc: "Optimize and expand wins over time." }
                ].map((item, i) => (
                    <AnimatedElement key={i} delay={i * 0.1} className="flex items-center border-b border-white/10 py-8 group hover:bg-white/5 transition-colors px-4">
                        <span className="text-sail-orange font-heading text-3xl mr-8 font-bold opacity-50 group-hover:opacity-100">{item.step}</span>
                        <div className="md:flex md:justify-between w-full items-center">
                            <h3 className="text-2xl font-bold text-white font-heading mb-2 md:mb-0">{item.title}</h3>
                            <p className="text-white/60 text-lg md:text-right">{item.desc}</p>
                        </div>
                    </AnimatedElement>
                ))}
            </div>
         </div>
      </Section>
    </div>
  );
};

export default WorkWithUs;