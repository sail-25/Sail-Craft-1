import React from 'react';
import { Section, AnimatedElement, Button, DisplayText, Card } from '../components/UI';
import { Megaphone, Monitor, PenTool, Cpu, Briefcase, HeartHandshake, Check, Bot } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    subtitle: "Impossible to Ignore",
    desc: "We build campaigns that cut through the noise and connect directly with your audience.",
    subServices: ["SEO & SEM", "Social Media Management", "Email Marketing Automation", "PPC Campaigns", "Content Strategy"]
  },
  {
    icon: Monitor,
    title: "Tech Solutions",
    subtitle: "Works Harder Than You",
    desc: "Robust, scalable digital infrastructure designed for performance and growth.",
    subServices: ["Custom Web Development", "Mobile App Development", "E-commerce Platforms", "Cloud Infrastructure", "API Integrations"]
  },
  {
    icon: Bot,
    title: "AI for Enterprise",
    subtitle: "Intelligent Scale",
    desc: "Leverage artificial intelligence to automate workflows and predict market trends.",
    subServices: ["Custom Chatbots", "Predictive Analytics", "Workflow Automation", "AI Strategy Consulting", "Data Processing"]
  },
  {
    icon: PenTool,
    title: "Creative Suite",
    subtitle: "Brand Life & Soul",
    desc: "Visual identity that tells your story and leaves a lasting impression.",
    subServices: ["Brand Identity Design", "UI/UX Design", "Motion Graphics", "Video Production", "Marketing Collateral"]
  },
  {
    icon: Cpu,
    title: "Operations",
    subtitle: "Smart, Fast, Lean",
    desc: "Streamlining your business processes to minimize waste and maximize speed.",
    subServices: ["Process Audits", "Tool Implementation", "Resource Planning", "Efficiency Workshops", "Tech Stack Optimization"]
  },
  {
    icon: Briefcase,
    title: "Business Dev",
    subtitle: "Ideas to Momentum",
    desc: "Strategic planning to take your business from stability to scalability.",
    subServices: ["Market Entry Strategy", "Partnership Development", "Sales Funnel Optimization", "Pitch Deck Creation", "Competitor Analysis"]
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <Section className="pt-40 pb-10" grid>
        <AnimatedElement>
            <DisplayText size="lg" className="text-sail-green mb-8">
                EVERYTHING<br/>
                <span className="text-sail-orange">WITHOUT GUESSWORK</span>
            </DisplayText>
            <p className="text-xl text-slate-600 max-w-2xl font-medium">
                One partner. Every solution. Real outcomes. We don't just deliver services; we deliver engines for growth.
            </p>
        </AnimatedElement>
      </Section>

      {/* Service List - Grid with Wrapping Text */}
      <Section className="!py-10">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, i) => (
                <AnimatedElement key={i} delay={i * 0.05} className="h-full">
                    <div className="h-full group bg-white rounded-2xl border border-sail-green/10 p-8 hover:border-sail-orange hover:shadow-xl shadow-sail-green/5 transition-all duration-300 cursor-default flex flex-col">
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-14 h-14 rounded-lg bg-sail-offWhite flex items-center justify-center text-sail-green group-hover:bg-sail-green group-hover:text-white transition-colors shrink-0">
                                <service.icon size={28} />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-sail-orange bg-sail-orange/5 px-3 py-1 rounded-full whitespace-normal text-center max-w-[50%]">
                                {service.subtitle}
                            </span>
                        </div>
                        
                        <h3 className="text-3xl font-heading text-sail-green group-hover:text-sail-orange transition-colors mb-4 break-words">
                            {service.title}
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow break-words">
                            {service.desc}
                        </p>
                        
                        <div className="bg-sail-offWhite/50 rounded-xl p-6">
                             <p className="font-bold text-sail-green mb-4 text-sm uppercase">Capabilities</p>
                             <ul className="grid grid-cols-1 gap-3">
                                {service.subServices.map((tag, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-slate-600 break-words">
                                        <Check size={16} className="text-sail-orange mr-3 mt-0.5 shrink-0" />
                                        <span>{tag}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AnimatedElement>
            ))}
        </div>
      </Section>

      <Section className="text-center border-t border-sail-green/5">
        <AnimatedElement>
            <h2 className="text-4xl md:text-5xl font-heading mb-8 text-sail-green">Let’s Build Your Growth Engine</h2>
            <Button to="/work-with-us" variant="primary" className="!px-12 !py-5 !text-lg">Launch Plan</Button>
        </AnimatedElement>
      </Section>
    </div>
  );
};

export default Services;