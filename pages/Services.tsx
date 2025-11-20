import React from 'react';
import { Section, AnimatedElement, Button, DisplayText } from '../components/UI';
import { Megaphone, Monitor, PenTool, Cpu, Briefcase, HeartHandshake, Check } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    subtitle: "Impossible to Ignore",
    desc: "Campaigns, content creation, social media, graphic design, marketing automation, advert and brand design, growth optimization."
  },
  {
    icon: Monitor,
    title: "Technology Solutions",
    subtitle: "Works Harder Than You",
    desc: "Custom software, responsive websites, AI-driven e-commerce, IT support, AI system implementation."
  },
  {
    icon: PenTool,
    title: "Creative Suite",
    subtitle: "Brand Life & Soul",
    desc: "AI-driven content creation, brand design, social PR, influencer management, creative campaigns."
  },
  {
    icon: Cpu,
    title: "Operational Ops",
    subtitle: "Smart, Fast, Lean",
    desc: "Process optimization, workflow automation, resource management, efficiency audits, operational analytics."
  },
  {
    icon: Briefcase,
    title: "Business Dev",
    subtitle: "Ideas to Momentum",
    desc: "Strategic planning, market analysis, partnership development, scaling strategies."
  },
  {
    icon: HeartHandshake,
    title: "CX Improvement",
    subtitle: "Loyalty Engines",
    desc: "AI-powered CRM, personalized support, real-time feedback, customer experience optimization."
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-sail-offWhite">
      {/* Header */}
      <Section className="pt-40 pb-20" grid>
        <AnimatedElement>
            <DisplayText size="lg" className="text-sail-green mb-8">
                EVERYTHING<br/>
                <span className="text-sail-orange pl-10 md:pl-20 block">WITHOUT GUESSWORK</span>
            </DisplayText>
            <p className="text-xl text-slate-600 max-w-2xl font-medium">One partner. Every solution. Real outcomes.</p>
        </AnimatedElement>
      </Section>

      {/* Service List */}
      <Section className="!py-0">
        <div className="space-y-4 mb-20">
            {services.map((service, i) => (
                <AnimatedElement key={i} delay={i * 0.05}>
                    <div className="group bg-white rounded-xl border border-gray-200 p-8 md:p-12 hover:border-sail-orange hover:shadow-lg transition-all duration-300 cursor-default">
                        <div className="flex flex-col md:flex-row md:items-center gap-8">
                            <div className="w-16 h-16 rounded-lg bg-sail-surface flex items-center justify-center text-sail-green group-hover:bg-sail-green group-hover:text-white transition-colors">
                                <service.icon size={32} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-3xl font-heading text-sail-green group-hover:text-sail-orange transition-colors mb-2">{service.title}</h3>
                                <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">{service.subtitle}</p>
                                <p className="text-slate-600 text-lg leading-relaxed">{service.desc}</p>
                            </div>
                            <div className="md:w-1/4 flex flex-col justify-center">
                                <ul className="space-y-2">
                                    {['Strategy', 'Execution', 'Analysis'].map((tag, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-slate-500">
                                            <Check size={14} className="text-sail-orange mr-2" />
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimatedElement>
            ))}
        </div>
      </Section>

      <Section dark className="text-center">
        <AnimatedElement>
            <h2 className="text-5xl font-heading mb-8 text-white">Let’s Build Your Growth Engine</h2>
            <Button to="/work-with-us" variant="primary" className="!px-12 !py-5 !text-lg">Launch Plan</Button>
        </AnimatedElement>
      </Section>
    </div>
  );
};

export default Services;