import React from 'react';
import { Section, AnimatedElement, Button, DisplayText, PageHero, Card } from '../components/UI';
import { Megaphone, Monitor, PenTool, Cpu, Briefcase, Bot, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

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
      <SEO 
        title="Enterprise Web Development & AI Services"
        description="Comprehensive digital services in Kenya: Custom Software Development, AI Integration, SEO Marketing, and Corporate Branding. View our full service list."
        keywords={["Web Development Kenya", "AI Consulting Nairobi", "Corporate Branding Services", "SEO Agency Nairobi", "Mobile App Development Kenya"]}
        path="services"
        type="service"
      />

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
                        <Card className="h-full p-10 flex flex-col hover:shadow-xl hover:shadow-sail-green/5 transition-all duration-300 group border-t-4 border-t-transparent hover:border-t-sail-orange bg-white">
                            <div className="w-14 h-14 bg-sail-offWhite rounded-lg flex items-center justify-center text-sail-green group-hover:text-sail-orange mb-8 transition-colors">
                                <service.icon size={28} />
                            </div>
                            
                            <h3 className="text-3xl font-heading font-bold text-sail-green mb-4 group-hover:text-sail-orange transition-colors">{service.title}</h3>
                            <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow">
                                {service.desc}
                            </p>
                            
                            <div className="mb-8">
                                <ul className="space-y-3 border-t border-gray-100 pt-6">
                                    {service.subServices.map((item, idx) => (
                                        <li key={idx} className="text-slate-500 font-medium flex items-start text-base">
                                            <span className="w-1.5 h-1.5 rounded-full bg-sail-orange mt-2 mr-3 shrink-0 opacity-60"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto">
                                <span className="text-sail-orange font-bold tracking-widest uppercase text-sm flex items-center group/btn cursor-pointer">
                                    Learn More 
                                    <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                                </span>
                            </div>
                        </Card>
                    </div>
                </AnimatedElement>
            ))}
        </div>
      </Section>

      {/* CTA Banner - Clean Design */}
      <Section fullWidth className="!p-0 bg-sail-offWhite border-t border-sail-green/10">
         <div className="container mx-auto px-6 md:px-12 py-32 text-center">
            <AnimatedElement>
                 <h2 className="text-4xl md:text-6xl font-heading font-bold text-sail-green mb-8 leading-[1.1] tracking-tight max-w-5xl mx-auto">
                     Growth Doesn’t Happen by Accident — <br className="hidden lg:block" />
                     It Happens by Design
                 </h2>
                 <p className="text-xl text-slate-600 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
                    Let’s design a plan that creates results you can measure, momentum you can feel, and progress you can scale.
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

export default Services;