import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section, AnimatedElement, Button, DisplayText, AccordionItem } from '../components/UI';
import { ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('marketing');

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* Architectural Hero */}
      <Section className="min-h-screen flex flex-col justify-center relative pt-32 md:pt-40" fullWidth grid>
        <div className="container mx-auto px-4">
            <AnimatedElement>
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between border-b border-sail-green/10 pb-10 mb-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 border border-sail-orange/30 text-sail-orange rounded text-xs font-bold tracking-widest mb-4 uppercase bg-white">
                            Digital Growth Agency
                        </span>
                        <DisplayText size="xl" className="text-sail-green">
                            CHARTING<br/>
                            <span className="text-sail-orange">POSSIBILITY</span>
                        </DisplayText>
                    </div>
                    <div className="mt-8 lg:mt-0 max-w-md">
                        <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                            We fuel your growth with strategy, creativity, and intelligent technology. The intersection of design and data.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Button to="/work-with-us" variant="dark" icon>Start Project</Button>
                            <Button to="/services" variant="outline">Our Services</Button>
                        </div>
                    </div>
                </div>
            </AnimatedElement>

            {/* Hero Visual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[500px] md:h-[600px]">
                <AnimatedElement delay={0.2} className="md:col-span-8 relative rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        alt="Diverse team working in modern office"
                    />
                    <div className="absolute bottom-8 left-8 z-20">
                        <p className="text-white font-heading text-3xl">Nairobi, KE</p>
                        <p className="text-white/80 text-sm uppercase tracking-widest">Headquarters</p>
                    </div>
                </AnimatedElement>
                <AnimatedElement delay={0.3} className="md:col-span-4 bg-sail-offWhite rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden border border-sail-green/5">
                    <Zap size={48} className="text-sail-orange mb-4" />
                    <div>
                        <h3 className="text-6xl font-heading text-sail-green mb-2">200%</h3>
                        <p className="text-slate-500 font-medium">Average client growth year over year.</p>
                    </div>
                    <div className="w-full h-[1px] bg-sail-green/10 my-8"></div>
                    <div>
                         <h3 className="text-6xl font-heading text-sail-green mb-2">50+</h3>
                         <p className="text-slate-500 font-medium">Projects Launched</p>
                    </div>
                </AnimatedElement>
            </div>
        </div>
      </Section>

      {/* Marquee Divider */}
      <div className="bg-white py-6 overflow-hidden whitespace-nowrap border-y border-sail-green/10">
        <div className="inline-block animate-marquee">
          {[1,2,3,4,5,6].map(i => (
             <span key={i} className="text-sail-green/20 text-4xl font-heading mx-8 font-bold uppercase">
                Strategy • Design • Development • AI Solutions • 
             </span>
          ))}
        </div>
      </div>

      {/* Services Accordion Section */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
                 <AnimatedElement>
                    <div className="sticky top-32">
                        <h2 className="text-4xl md:text-6xl font-bold text-sail-green font-heading mb-6">SOLUTIONS THAT<br/>MOVE YOU AHEAD</h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Complexity kills growth. We simplify the path to success with a unified approach to marketing, technology, and operations.
                        </p>
                        <Button to="/services" variant="outline" icon>View All Services</Button>
                        
                        <div className="mt-12 p-6 bg-sail-offWhite rounded-xl border border-sail-green/5">
                             <p className="font-heading text-xl text-sail-green mb-4">"SailCraft Solutions isn't just a vendor; they are a strategic partner."</p>
                             <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                                     <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Client" className="w-full h-full object-cover" />
                                 </div>
                                 <div>
                                     <p className="text-sm font-bold text-sail-green">Sarah K.</p>
                                     <p className="text-xs text-slate-500">CEO, TechNovate Africa</p>
                                 </div>
                             </div>
                        </div>
                    </div>
                </AnimatedElement>
            </div>
            
            <div className="lg:col-span-7">
                <AnimatedElement delay={0.2}>
                    <div className="border-t border-gray-200">
                        <AccordionItem 
                            title="Digital Marketing" 
                            subtitle="Growth"
                            isOpen={openAccordion === 'marketing'} 
                            onClick={() => toggleAccordion('marketing')}
                        >
                            <p className="text-slate-600 text-lg mb-6">Data-driven campaigns that find your ideal customer.</p>
                            <ul className="space-y-3 mb-6">
                                {['SEO & SEM Strategy', 'Social Media Management', 'Email Automation', 'PPC Advertising'].map(item => (
                                    <li key={item} className="flex items-center text-sail-green font-medium">
                                        <CheckCircle2 size={18} className="text-sail-orange mr-3" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/services" className="text-sail-orange font-bold hover:underline">Explore Marketing</Link>
                        </AccordionItem>

                        <AccordionItem 
                            title="Technology Solutions" 
                            subtitle="Build"
                            isOpen={openAccordion === 'tech'} 
                            onClick={() => toggleAccordion('tech')}
                        >
                            <p className="text-slate-600 text-lg mb-6">Scalable websites and software built for the African market.</p>
                             <ul className="space-y-3 mb-6">
                                {['Custom Web Development', 'Mobile Applications', 'E-commerce Platforms', 'Cloud Infrastructure'].map(item => (
                                    <li key={item} className="flex items-center text-sail-green font-medium">
                                        <CheckCircle2 size={18} className="text-sail-orange mr-3" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/services" className="text-sail-orange font-bold hover:underline">Explore Tech</Link>
                        </AccordionItem>

                        <AccordionItem 
                            title="AI for Enterprise" 
                            subtitle="Innovation"
                            isOpen={openAccordion === 'ai'} 
                            onClick={() => toggleAccordion('ai')}
                        >
                            <p className="text-slate-600 text-lg mb-6">Leveraging machine learning to automate and predict.</p>
                             <ul className="space-y-3 mb-6">
                                {['Custom Chatbots', 'Workflow Automation', 'Predictive Analytics', 'AI Strategy'].map(item => (
                                    <li key={item} className="flex items-center text-sail-green font-medium">
                                        <CheckCircle2 size={18} className="text-sail-orange mr-3" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/services" className="text-sail-orange font-bold hover:underline">Explore AI Solutions</Link>
                        </AccordionItem>

                        <AccordionItem 
                            title="Branding & Design" 
                            subtitle="Identity"
                            isOpen={openAccordion === 'branding'} 
                            onClick={() => toggleAccordion('branding')}
                        >
                            <p className="text-slate-600 text-lg mb-6">Visual storytelling that leaves a mark.</p>
                             <ul className="space-y-3 mb-6">
                                {['Brand Identity', 'UI/UX Design', 'Motion Graphics', 'Marketing Collateral'].map(item => (
                                    <li key={item} className="flex items-center text-sail-green font-medium">
                                        <CheckCircle2 size={18} className="text-sail-orange mr-3" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/services" className="text-sail-orange font-bold hover:underline">Explore Creative</Link>
                        </AccordionItem>
                    </div>
                </AnimatedElement>
            </div>
        </div>
      </Section>

      {/* Why Choose Us - Light/Clean */}
      <Section className="bg-sail-offWhite py-32">
          <div className="grid md:grid-cols-2 gap-20 items-center">
              <AnimatedElement>
                  <h2 className="text-5xl md:text-7xl font-heading mb-12 leading-none text-sail-green">
                      YOUR EDGE IN<br/>
                      <span className="text-sail-orange">A FAST MARKET</span>
                  </h2>
                  <div className="space-y-8">
                      {[
                          { title: "Local Context", desc: "We understand the nuances of African business environments." },
                          { title: "Global Standards", desc: "World-class code quality and design aesthetics." },
                          { title: "Revenue Focus", desc: "We don't care about vanity metrics. We care about your bottom line." }
                      ].map((item, i) => (
                          <div key={i} className="flex items-start border-t border-sail-green/10 pt-6 group">
                              <span className="text-sail-orange mr-6 mt-1 font-heading font-bold text-xl">0{i+1}</span>
                              <div>
                                  <h4 className="text-2xl font-heading mb-2 text-sail-green">{item.title}</h4>
                                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </AnimatedElement>
              <AnimatedElement delay={0.2} className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sail-green/10">
                      <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
                        alt="Team collaboration" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-sail-green/10"></div>
                  </div>
              </AnimatedElement>
          </div>
      </Section>

      {/* Process */}
      <Section className="border-t border-gray-200">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <DisplayText size="md" className="text-sail-green mb-6">FROM IDEA TO IMPACT</DisplayText>
            <p className="text-slate-600 text-xl">Our proven framework for scalable growth.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
            {['Discovery', 'Strategy', 'Build', 'Implementation', 'Optimization'].map((step, i) => (
                <AnimatedElement key={step} delay={i*0.1}>
                    <div className="px-8 py-4 border border-gray-200 rounded-lg text-sail-green font-bold hover:border-sail-orange hover:text-sail-orange transition-all cursor-default bg-white shadow-sm">
                        {step}
                    </div>
                </AnimatedElement>
            ))}
        </div>
      </Section>

      {/* CTA */}
      <Section fullWidth className="!p-0 bg-white">
          <div className="grid md:grid-cols-2 min-h-[500px]">
              <div className="relative h-full min-h-[400px] order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Diverse executive team"
                  />
                   <div className="absolute inset-0 bg-sail-green/10"></div>
              </div>
              <div className="flex flex-col justify-center p-12 md:p-24 bg-sail-offWhite order-1 md:order-2">
                  <h2 className="text-4xl md:text-6xl font-heading text-sail-green mb-8">READY TO CHANGE THE GAME?</h2>
                  <p className="text-slate-600 text-xl mb-12 max-w-md">Don't let another opportunity slip by. Let's build the future of your business today.</p>
                  <div>
                    <Button to="/work-with-us" variant="primary" className="!px-10 !py-5 !text-lg" icon>Launch My Growth Plan</Button>
                  </div>
              </div>
          </div>
      </Section>
    </div>
  );
};

export default Home;