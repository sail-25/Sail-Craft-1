import React from 'react';
import { Link } from 'react-router-dom';
import { Section, AnimatedElement, Button, DisplayText, Card } from '../components/UI';
import { ArrowRight, Target, Zap, Layers, ArrowUpRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Discovery', value: 20 },
  { name: 'Strategy', value: 45 },
  { name: 'Build', value: 70 },
  { name: 'Launch', value: 90 },
  { name: 'Growth', value: 100 },
];

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-sail-offWhite">
      {/* Architectural Hero */}
      <Section className="min-h-screen flex flex-col justify-center relative pt-40" fullWidth grid>
        <div className="container mx-auto px-4">
            <AnimatedElement>
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between border-b border-sail-green/20 pb-10 mb-10">
                    <div>
                        <span className="inline-block px-3 py-1 border border-sail-orange/50 text-sail-orange rounded text-xs font-bold tracking-widest mb-4 uppercase bg-white">
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
                        <div className="flex gap-4">
                            <Button to="/work-with-us" variant="dark" icon>Start Project</Button>
                            <Button to="/services" variant="white">Our Services</Button>
                        </div>
                    </div>
                </div>
            </AnimatedElement>

            {/* Hero Visual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[400px] md:h-[500px]">
                <AnimatedElement delay={0.2} className="md:col-span-8 relative rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-sail-green/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        alt="Architecture"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                        <p className="text-white font-heading text-2xl">Nairobi, KE</p>
                    </div>
                </AnimatedElement>
                <AnimatedElement delay={0.3} className="md:col-span-4 bg-sail-green rounded-2xl p-8 flex flex-col justify-between text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sail-orange rounded-full blur-[80px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>
                    <Zap size={48} className="text-sail-orange mb-4" />
                    <div>
                        <h3 className="text-4xl font-heading mb-2">200%</h3>
                        <p className="text-white/70">Average client growth year over year.</p>
                    </div>
                </AnimatedElement>
            </div>
        </div>
      </Section>

      {/* Marquee Divider */}
      <div className="bg-sail-green py-6 overflow-hidden whitespace-nowrap border-y border-white/10">
        <div className="inline-block animate-marquee">
          {[1,2,3,4,5,6].map(i => (
             <span key={i} className="text-white/30 text-4xl font-heading mx-8 font-bold uppercase">
                Strategy • Design • Development • Automation • 
             </span>
          ))}
        </div>
      </div>

      {/* Services Bento Grid */}
      <Section grid>
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <AnimatedElement>
                <h2 className="text-4xl md:text-6xl font-bold text-sail-green font-heading">SOLUTIONS THAT<br/>MOVE YOU AHEAD</h2>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
                <p className="text-slate-600 max-w-xs text-lg">
                    From marketing and branding to software and automation — everything you need.
                </p>
            </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {/* Card 1 */}
           <AnimatedElement delay={0.1} className="md:col-span-2">
             <div className="bg-white rounded-2xl p-10 border border-gray-200 hover:border-sail-orange transition-colors h-full relative overflow-hidden group">
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-sail-orange/10 text-sail-orange rounded-lg flex items-center justify-center mb-6">
                        <Target size={24} />
                    </div>
                    <h3 className="text-3xl font-heading text-sail-green mb-4">Strategic Marketing</h3>
                    <p className="text-slate-500 text-lg max-w-md mb-8">Campaigns that cut through the noise. We use data-driven insights to position your brand exactly where it needs to be.</p>
                    <Link to="/services" className="flex items-center text-sail-green font-bold group-hover:translate-x-2 transition-transform">
                        Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                     className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-10 mask-image-linear-gradient" alt="" />
             </div>
           </AnimatedElement>

           {/* Card 2 */}
           <AnimatedElement delay={0.2}>
             <div className="bg-sail-darkGreen text-white rounded-2xl p-10 h-full flex flex-col justify-between group hover:bg-sail-green transition-colors cursor-pointer">
                <Layers size={32} className="text-sail-orange" />
                <div>
                    <h3 className="text-2xl font-heading mb-2">Tech Development</h3>
                    <p className="text-white/60 text-sm mb-4">Custom software & apps built to scale.</p>
                    <div className="w-full h-[1px] bg-white/20 group-hover:bg-white/40 transition-colors"></div>
                </div>
             </div>
           </AnimatedElement>

           {/* Card 3 */}
           <AnimatedElement delay={0.3}>
             <div className="bg-gray-100 rounded-2xl p-10 h-full flex flex-col justify-between group hover:bg-white hover:shadow-xl transition-all">
                <Zap size={32} className="text-slate-400 group-hover:text-sail-orange transition-colors" />
                <div>
                    <h3 className="text-2xl font-heading text-sail-green mb-2">Operational Efficiency</h3>
                    <p className="text-slate-500 text-sm mb-4">Minimize waste. Maximize speed.</p>
                </div>
             </div>
           </AnimatedElement>

           {/* Card 4 */}
           <AnimatedElement delay={0.4} className="md:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col md:flex-row">
                  <div className="p-10 md:w-1/2 flex flex-col justify-center">
                      <h3 className="text-3xl font-heading text-sail-green mb-4">Full-Stack Growth</h3>
                      <p className="text-slate-500 mb-6">We don't just do one thing. We connect the dots between marketing, tech, and ops.</p>
                      <Button to="/services" variant="outline">Explore All Services</Button>
                  </div>
                  <div className="md:w-1/2 bg-sail-offWhite p-10">
                      <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={data}>
                            <Bar dataKey="value" fill="#036029" radius={[4,4,0,0]} />
                            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px'}} />
                        </BarChart>
                      </ResponsiveContainer>
                  </div>
              </div>
           </AnimatedElement>
        </div>
      </Section>

      {/* Why Choose Us - Dark */}
      <Section dark className="py-32">
          <div className="grid md:grid-cols-2 gap-20">
              <AnimatedElement>
                  <h2 className="text-5xl md:text-7xl font-heading mb-12 leading-none">
                      YOUR EDGE IN<br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sail-orange to-white">A FAST MARKET</span>
                  </h2>
                  <div className="space-y-8">
                      {[
                          { title: "Local Insights", desc: "Deep understanding of the African business landscape." },
                          { title: "AI Execution", desc: "Leveraging next-gen tools for speed and precision." },
                          { title: "Real Results", desc: "Strategies that deliver measurable ROI, not just vanity metrics." }
                      ].map((item, i) => (
                          <div key={i} className="flex items-start border-t border-white/10 pt-6 group">
                              <span className="text-sail-orange mr-6 mt-1">0{i+1}</span>
                              <div>
                                  <h4 className="text-2xl font-heading mb-2 group-hover:text-sail-orange transition-colors">{item.title}</h4>
                                  <p className="text-white/60">{item.desc}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </AnimatedElement>
              <AnimatedElement delay={0.2} className="relative">
                  <div className="sticky top-32">
                      <img 
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                        alt="Technology" 
                        className="rounded-lg opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-lg max-w-xs shadow-xl hidden md:block">
                          <p className="text-sail-green font-bold text-lg mb-2">"SailCraft transformed our digital presence entirely."</p>
                          <p className="text-slate-400 text-sm">— CEO, EcoRetail</p>
                      </div>
                  </div>
              </AnimatedElement>
          </div>
      </Section>

      {/* Process */}
      <Section className="border-b border-gray-200">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <DisplayText size="md" className="text-sail-green mb-6">FROM IDEA TO IMPACT</DisplayText>
            <p className="text-slate-600 text-xl">Our proven framework for scalable growth.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
            {['Discovery', 'Strategy', 'Build', 'Implementation', 'Optimization', 'Support'].map((step, i) => (
                <AnimatedElement key={step} delay={i*0.1}>
                    <div className="px-6 py-3 border border-gray-300 rounded-full text-sail-green font-bold hover:bg-sail-green hover:text-white hover:border-sail-green transition-all cursor-default">
                        {step}
                    </div>
                </AnimatedElement>
            ))}
        </div>
      </Section>

      {/* CTA */}
      <Section fullWidth className="!p-0 bg-sail-darkGreen">
          <div className="grid md:grid-cols-2 min-h-[600px]">
              <div className="relative h-full min-h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    alt="Team"
                  />
              </div>
              <div className="flex flex-col justify-center p-12 md:p-24 bg-sail-green">
                  <h2 className="text-5xl md:text-6xl font-heading text-white mb-8">READY TO CHANGE THE GAME?</h2>
                  <p className="text-white/80 text-xl mb-12 max-w-md">Don't let another opportunity slip by. Let's build the future of your business today.</p>
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