import React from 'react';
import { Section, AnimatedElement, Button, DisplayText, PageHero } from '../components/UI';
import { Megaphone, Monitor, PenTool, Cpu, Briefcase, Bot, ArrowRight, Layers } from 'lucide-react';

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

      <Section className="py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
                <AnimatedElement key={service.id} delay={i * 0.1} className="h-full">
                    <div id={service.id} className="h-full scroll-mt-32 group">
                        {/* Tech Spec Card Design */}
                        <div className="h-full bg-white border border-gray-200 hover:border-sail-green/50 transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-sail-green/5 rounded-lg">
                            
                            {/* Header Strip */}
                            <div className="h-2 w-full bg-gray-100 group-hover:bg-sail-orange transition-colors duration-300"></div>
                            
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-sail-offWhite rounded-lg text-sail-green group-hover:bg-sail-green group-hover:text-white transition-colors duration-300">
                                        <service.icon size={24} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-sail-orange transition-colors">
                                        0{i + 1}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl font-heading font-bold text-sail-green mb-3">{service.title}</h3>
                                <p className="text-slate-600 mb-8 text-base leading-relaxed flex-grow border-b border-gray-100 pb-8">
                                    {service.desc}
                                </p>
                                
                                <div>
                                    <span className="text-xs font-bold text-sail-green uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Layers size={14} /> Capabilities
                                    </span>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {service.subServices.map((tag, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-gray-50 text-slate-600 text-xs font-medium border border-gray-100 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <Button to="/contact" variant="outline" className="w-full !py-3 !text-sm justify-between group/btn">
                                        Inquire <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform"/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedElement>
            ))}
        </div>
      </Section>

      {/* Launchpad CTA Banner */}
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