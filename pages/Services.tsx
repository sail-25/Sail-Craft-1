import React from 'react';
import { Section, AnimatedElement, Button, DisplayText, PageHero, Card } from '../components/UI';
import { Megaphone, Monitor, PenTool, Cpu, Briefcase, Bot, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    id: 'marketing',
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "We build campaigns that cut through the noise and connect directly with your audience using data-backed strategies.",
    subServices: ["SEO & SEM", "Social Media Management", "Email Automation"]
  },
  {
    id: 'tech',
    icon: Monitor,
    title: "Tech Solutions",
    desc: "Robust, scalable digital infrastructure designed for performance. From websites to complex web applications.",
    subServices: ["Web Development", "Mobile Apps", "Cloud Infrastructure"]
  },
  {
    id: 'ai',
    icon: Bot,
    title: "AI for Enterprise",
    desc: "Leverage artificial intelligence to automate workflows, predict market trends, and personalize customer experiences.",
    subServices: ["Chatbots", "Predictive Analytics", "Automation"]
  },
  {
    id: 'creative',
    icon: PenTool,
    title: "Creative Suite",
    desc: "Visual identity that tells your story and leaves a lasting impression across all touchpoints.",
    subServices: ["Brand Identity", "UI/UX Design", "Motion Graphics"]
  },
  {
    id: 'ops',
    icon: Cpu,
    title: "Operations",
    desc: "Streamlining your business processes to minimize waste and maximize speed through digital tools.",
    subServices: ["Process Audits", "Tool Implementation", "Efficiency"]
  },
  {
    id: 'bizdev',
    icon: Briefcase,
    title: "Business Dev",
    desc: "Strategic planning to take your business from stability to scalability in the modern market.",
    subServices: ["Market Strategy", "Partnerships", "Sales Optimization"]
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        subtitle="Our Expertise"
        title={
            <DisplayText size="lg" className="text-sail-green mb-4">
                EVERYTHING<br/>
                <span className="text-sail-orange">WITHOUT GUESSWORK</span>
            </DisplayText>
        }
      >
         <p className="text-xl text-slate-600 max-w-2xl font-medium">
            One partner. Every solution. Real outcomes. We don't just deliver services; we deliver engines for growth.
        </p>
      </PageHero>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
                <AnimatedElement key={service.id} delay={i * 0.1} className="h-full">
                    <div id={service.id} className="h-full scroll-mt-32">
                        <Card className="flex flex-col h-full border-black/5 hover:border-sail-orange/50 hover:shadow-xl transition-all group p-8 bg-white">
                            <div className="w-14 h-14 rounded-lg bg-white border border-gray-200 text-sail-green flex items-center justify-center mb-6 group-hover:bg-sail-orange group-hover:text-white group-hover:border-sail-orange transition-colors duration-300 shadow-sm">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-sail-green mb-4">{service.title}</h3>
                            <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{service.desc}</p>
                            
                            <div className="border-t border-gray-100 pt-6 mt-auto">
                                <ul className="space-y-3 mb-8">
                                    {service.subServices.map((tag, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-slate-500 font-medium">
                                            <Check size={16} className="text-sail-orange mr-3" /> {tag}
                                        </li>
                                    ))}
                                </ul>
                                <span className="text-sail-orange font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform cursor-pointer uppercase tracking-widest">
                                    Learn more <ArrowRight size={16} className="ml-2" />
                                </span>
                            </div>
                        </Card>
                    </div>
                </AnimatedElement>
            ))}
        </div>
      </Section>

      <Section className="text-center bg-white border-t border-black/5 py-24">
        <AnimatedElement>
            <h2 className="text-4xl md:text-5xl font-heading mb-8 text-sail-green font-bold">Let’s Build Your Growth Engine</h2>
            <Button to="/work-with-us" variant="primary" className="!px-12 !py-5 !text-lg shadow-xl shadow-sail-orange/20">Launch Plan</Button>
        </AnimatedElement>
      </Section>
    </div>
  );
};

export default Services;