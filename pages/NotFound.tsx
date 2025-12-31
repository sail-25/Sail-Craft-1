
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertCircle, Send, CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import { Button, DisplayText, Section, AnimatedElement } from '../components/UI';
import { SEO } from '../components/SEO';

const NotFound: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-32 pb-20 relative overflow-hidden font-sans">
      <SEO 
        title="404 - Recovery"
        description="This page ghosted us, but your growth doesn't have to. Submit a rescue request."
        path="404"
      />

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sail-orange/5 rounded-full blur-[120px] -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sail-green/5 rounded-full blur-[120px] -ml-40 -mb-40"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <AnimatedElement>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-sail-orange/10 text-sail-orange rounded-full border border-sail-orange/20 mb-8">
                <AlertCircle size={16} />
                <span className="font-bold text-[10px] tracking-widest uppercase">System: 404 Ghosted</span>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <h1 className="text-8xl md:text-[10rem] font-heading font-bold text-sail-green leading-none tracking-tighter mb-4">
                4<span className="text-sail-orange">0</span>4
              </h1>
              <DisplayText size="md" className="text-sail-green mb-8 uppercase">
                THIS PAGE <span className="text-sail-orange italic">GHOSTED</span> US.
              </DisplayText>
              <p className="text-xl text-slate-600 max-w-xl mb-12 font-medium leading-relaxed">
                While this link is on a permanent coffee break, your business growth doesn't have to be. 
                Don't look back — <strong>scale forward.</strong>
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button to="/" variant="dark" icon>Return Home</Button>
                <Link to="/services" className="px-8 py-4 text-sm font-bold text-sail-green hover:text-sail-orange transition-colors flex items-center gap-2 group">
                  Explore Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement delay={0.4}>
            <div className="bg-white p-8 md:p-12 border border-sail-green/10 shadow-2xl shadow-sail-green/5 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-sail-orange"></div>
              
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-50 text-sail-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-sail-green mb-3">Rescue Initiated</h3>
                  <p className="text-slate-600 mb-8">We'll get back to you within 24 hours to find the right path.</p>
                  <Button onClick={() => setStatus('idle')} variant="outline">Back</Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-heading font-bold text-sail-green mb-2">Growth Rescue Plan</h3>
                  <p className="text-slate-500 mb-8 text-sm font-medium">Found a dead link? Let us give you a live strategy instead.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-sail-green mb-2">Full Name</label>
                      <input 
                        required
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 outline-none focus:border-sail-orange transition-colors"
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-sail-green mb-2">Work Email</label>
                      <input 
                        required
                        type="email"
                        placeholder="you@company.com"
                        className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 outline-none focus:border-sail-orange transition-colors"
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-sail-green text-white font-bold py-5 rounded-lg hover:bg-sail-orange transition-all flex items-center justify-center gap-3 group disabled:opacity-70"
                    >
                      {status === 'submitting' ? (
                        <Loader2 className="animate-spin" size={20} />
                      ) : (
                        <>
                          Request Growth Audit <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
