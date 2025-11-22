import React from 'react';
import { Section, AnimatedElement, Button, DisplayText, PageHero, Card } from '../components/UI';
import { Megaphone, Monitor, PenTool, Cpu, Briefcase, Bot } from 'lucide-react';

const services = [
  {
    id: 'marketing',
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "We build campaigns that cut through the noise. Data-backed strategies that connect directly with your audience.",
    subServices: ["SEO & SEM", "Social Media Mgmt", "Email Automation", "Content Strategy"]
  },
  {
    id: 'tech',
    icon: Monitor,
    title: "Tech Solutions",
    desc: "Robust, scalable digital infrastructure. From high-performance websites to complex web applications.",
    subServices: ["Web Development", "Mobile Apps", "Cloud Infrastructure", "API Integration"]
  },
  {
    id: 'ai',
    icon: Bot,
    title: "AI for Enterprise",
    desc: "Leverage artificial intelligence to automate workflows, predict market trends, and personalize experiences.",
    subServices: ["Chatbots & Agents", "Predictive Analytics", "Workflow Automation", "LLM Integration"]
  },
  {
    id: 'creative',
    icon: PenTool,
    title: "Creative Suite",
    desc: "Visual identity that tells your story. Design systems that leave a lasting impression across all touchpoints.",
    subServices: ["Brand Identity", "UI/UX Design", "Motion Graphics", "Print Collateral"]
  },
  {
    id: 'ops',
    icon: Cpu,
    title: "Operations",
    desc: "Streamlining your business processes to minimize waste and maximize speed through digital tools.",
    subServices: ["Process Audits", "Tool Implementation", "Efficiency Scaling", "Staff Training"]
  },
  {
    id: 'bizdev',
    icon: Briefcase,
    title: "Business Dev",
    desc: "Strategic planning to take your business from stability to scalability in the modern market.",
    subServices: ["Market Strategy", "Partnerships", "Sales Optimization", "Growth Hacking"]
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
         <p className="text-xl text-slate-600 max-w-2xl font-medium leading-relaxed">
            One partner. Every solution. Real outcomes. We don't just deliver services; we deliver engines for growth.
        </p>
      </PageHero>

      {/* Standard Services Grid */}
      <Section className="py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
                <AnimatedElement key={service.id} delay={i * 0.1} className="h-full">
                    <div id={service.id} className="h-full scroll-mt-32">
                        <Card className="h-full p-8 flex flex-col hover:border-sail-green/30 transition-colors">
                            <div className="w-14 h-14 bg-sail-offWhite rounded-lg flex items-center justify-center text-sail-orange mb-6">
                                <service.icon size={28} />
                            </div>
                            
                            <h3 className="text-2xl font-heading font-bold text-sail-green mb-4">{service.title}</h3>
                            <p className="text-slate-600 mb-6 text-base leading-relaxed flex-grow">
                                {service.desc}
                            </p>
                            
                            <div className="border-t border-gray-100 pt-6">
                                <div className="flex flex-wrap gap-2">
                                    {service.subServices.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-gray-50 text-slate-500 text-xs font-medium rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>
                </AnimatedElement>
            ))}
        </div>
      </Section>

      {/* Launchpad CTA Banner (Kept as requested) */}
      <Section fullWidth className="!p-0 bg-sail-orange text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-black/10 to-transparent"></div>
         
         <div className="container mx-auto px-6 md:px-12 py-20 md:py-28 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-3xl">
                    <AnimatedElement>
                        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight tracking-tight">
                            Ready to Launch?
                        </h2>
                        <p className="text-xl md:text-2xl font-medium text-white/90 max-w-xl">
                            Turn these capabilities into your competitive advantage.
                        </p>
                    </AnimatedElement>
                </div>
                <AnimatedElement delay={0.2}>
                    <div className="bg-white p-2 rounded-full shadow-2xl shadow-black/20">
                        <Button to="/work-with-us" variant="dark" className="!px-12 !py-6 !text-xl !rounded-full" icon>
                            Initialize Growth
                        </Button>
                    </div>
                </AnimatedElement>
            </div>
         </div>
      </Section>
    </div>
  );
};

export default Services;