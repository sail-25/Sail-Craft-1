import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section, AnimatedElement, Button, DisplayText, AccordionItem } from '../components/UI';
import { ArrowRight, Zap, CheckCircle2, Play } from 'lucide-react';

const Home: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('marketing');

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* Architectural Hero with Subtle Background */}
      <Section className="min-h-screen flex flex-col justify-center relative pt-32 md:pt-40 overflow-hidden" fullWidth>
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2301&q=80" 
                className="w-full h-full object-cover opacity-30 select-none"
                alt="Modern tech office background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <AnimatedElement>
                <div className="flex flex-col lg:flex-row items-start justify-between pb-10 mb-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-sail-green/10 bg-white/50 backdrop-blur-sm rounded-full text-sail-green text-xs font-bold tracking-widest mb-6 uppercase shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-sail-orange animate-pulse"></span>
                            Digital Growth Agency
                        </div>
                        <DisplayText size="xl" className="text-sail-green relative">
                            CHARTING<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sail-orange to-orange-600">POSSIBILITY</span>
                        </DisplayText>
                    </div>
                    <div className="mt-8 lg:mt-4 max-w-md bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm">
                        <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                            We fuel your growth with strategy, creativity, and intelligent technology. The intersection of design and data.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Button to="/work-with-us" variant="dark" icon>Start Project</Button>
                            <Button to="/services" variant="white">Our Services</Button>
                        </div>
                    </div>
                </div>
            </AnimatedElement>

            {/* Hero Visual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
                <AnimatedElement delay={0.2} className="md:col-span-8 relative rounded-2xl overflow-hidden group shadow-2xl shadow-sail-green/5 h-[400px] md:h-[500px]">
                    <div className="absolute inset-0 bg-sail-green/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                        alt="African tech team collaborating"
                    />
                    <div className="absolute bottom-0 left-0 p-8 z-20 bg-gradient-to-t from-black/80 to-transparent w-full">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                                <Play size={20} fill="currentColor" />
                            </div>
                            <div>
                                <p className="text-white font-heading text-2xl font-bold">Future Forward</p>
                                <p className="text-white/80 text-sm uppercase tracking-widest">Nairobi Headquarters</p>
                            </div>
                        </div>
                    </div>
                </AnimatedElement>
                
                <AnimatedElement delay={0.3} className="md:col-span-4 flex flex-col gap-6 h-[400px] md:h-[500px]">
                    <div className="flex-1 bg-sail-green text-white rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-sail-green/10 group">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-sail-orange/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-sail-orange/30 transition-colors duration-500"></div>
                         <Zap size={40} className="text-sail-orange mb-4 relative z-10" />
                         <div className="relative z-10">
                             <h3 className="text-5xl md:text-6xl font-heading font-bold mb-2">200%</h3>
                             <p className="text-white/80 font-medium">Average client growth year over year.</p>
                         </div>
                    </div>
                    <div className="flex-1 bg-white rounded-2xl p-8 border border-sail-green/10 shadow-lg shadow-slate-200/50 flex flex-col justify-center hover:border-sail-orange/30 transition-colors">
                         <h3 className="text-5xl md:text-6xl font-heading text-sail-green mb-2 font-bold">50+</h3>
                         <p className="text-slate-500 font-medium">Enterprise Projects Launched</p>
                    </div>
                </AnimatedElement>
            </div>
        </div>
      </Section>

      {/* Marquee Divider */}
      <div className="bg-white py-8 overflow-hidden whitespace-nowrap border-y border-sail-green/5">
        <div className="inline-block animate-marquee">
          {[1,2,3,4,5,6].map(i => (
             <span key={i} className="text-slate-300 text-5xl font-heading mx-12 font-bold uppercase tracking-tight">
                Strategy <span className="text-sail-orange">•</span> Design <span className="text-sail-orange">•</span> Development <span className="text-sail-orange">•</span> AI Solutions <span className="text-sail-orange">•</span>
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
                        
                        <div className="mt-12 p-8 bg-sail-offWhite rounded-2xl border border-sail-green/5 relative">
                             <div className="absolute -top-4 -left-4 text-6xl text-sail-green/10 font-serif">"</div>
                             <p className="font-heading text-xl text-sail-green mb-6 relative z-10">"SailCraft Solutions isn't just a vendor; they are a strategic partner who actually cares about the outcome."</p>
                             <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md">
                                     <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Client" className="w-full h-full object-cover" />
                                 </div>
                                 <div>
                                     <p className="text-base font-bold text-sail-green">Sarah K.</p>
                                     <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">CEO, TechNovate Africa</p>
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
                            <Link to="/services" className="text-sail-orange font-bold hover:underline flex items-center">Explore Marketing <ArrowRight size={16} className="ml-2"/></Link>
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
                            <Link to="/services" className="text-sail-orange font-bold hover:underline flex items-center">Explore Tech <ArrowRight size={16} className="ml-2"/></Link>
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
                            <Link to="/services" className="text-sail-orange font-bold hover:underline flex items-center">Explore AI Solutions <ArrowRight size={16} className="ml-2"/></Link>
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
                            <Link to="/services" className="text-sail-orange font-bold hover:underline flex items-center">Explore Creative <ArrowRight size={16} className="ml-2"/></Link>
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
                          <div key={i} className="flex items-start border-t border-sail-green/10 pt-6 group hover:pl-4 transition-all duration-300 cursor-default">
                              <span className="text-sail-orange mr-6 mt-1 font-heading font-bold text-xl">0{i+1}</span>
                              <div>
                                  <h4 className="text-2xl font-heading mb-2 text-sail-green group-hover:text-sail-orange transition-colors">{item.title}</h4>
                                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </AnimatedElement>
              <AnimatedElement delay={0.2} className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sail-green/10 aspect-[4/5]">
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
                    <div className="px-8 py-4 border border-gray-200 rounded-lg text-sail-green font-bold hover:border-sail-orange hover:text-sail-orange transition-all cursor-default bg-white shadow-sm hover:shadow-md hover:-translate-y-1">
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
                   <div className="absolute inset-0 bg-sail-green/20 mix-blend-multiply"></div>
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