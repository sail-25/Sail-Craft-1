import React, { useState } from 'react';
import { Section, AnimatedElement, Button, DisplayText, PageHero } from '../components/UI';
import { CheckCircle, Loader2, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus('success');
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setStatus('idle');
  };

  const inputClasses = "w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 text-lg text-sail-darkGreen outline-none transition-all duration-300 focus:bg-white focus:border-sail-orange focus:shadow-lg placeholder:text-gray-400 hover:bg-gray-100 focus:hover:bg-white rounded-t-md";
  const labelClasses = "block text-xs font-bold uppercase tracking-widest text-sail-green mb-2 ml-1";

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <PageHero
        image="https://images.unsplash.com/photo-1423666639041-f142fcb93461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        subtitle="Get In Touch"
        title={
             <DisplayText size="md" className="text-sail-green mb-8">
                YOUR GROWTH STARTS WITH A <span className="text-sail-orange">CONVERSATION.</span>
            </DisplayText>
        }
      >
          <p className="text-xl text-slate-600 mb-12 max-w-2xl">
             Ready to move? We're ready to lead the way.
          </p>
      </PageHero>

      <Section className="flex-grow" grid>
        <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
                <AnimatedElement>
                    <div className="space-y-8 pt-8">
                        <div>
                            <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Phone</p>
                            <p className="text-2xl font-heading text-sail-green">+254 704 201 545</p>
                            <p className="text-xl font-heading text-sail-green">+254 731 060 641</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Email</p>
                            <p className="text-2xl font-heading text-sail-green">info@sailcraftsolutions.co.ke</p>
                        </div>
                         <div>
                            <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Location</p>
                            <p className="text-xl font-heading text-sail-green">Nairobi, Kenya</p>
                        </div>
                    </div>
                </AnimatedElement>
            </div>

            <div className="lg:col-span-7" id="contact-form">
                <AnimatedElement delay={0.2}>
                    <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-2xl shadow-sail-green/5 relative overflow-hidden rounded-xl">
                        {status === 'success' ? (
                             <div className="flex flex-col items-center justify-center min-h-[400px] text-center py-12 animate-in fade-in zoom-in duration-500">
                                <div className="w-24 h-24 bg-green-50 text-sail-green rounded-full flex items-center justify-center mb-8 shadow-inner">
                                    <CheckCircle size={48} />
                                </div>
                                <h3 className="text-4xl font-heading font-bold text-sail-green mb-4">Message Received!</h3>
                                <p className="text-slate-600 text-lg mb-10 max-w-md leading-relaxed">
                                    Thank you for reaching out. Our team is reviewing your inquiry and will get back to you within 24 hours.
                                </p>
                                <Button onClick={handleReset} variant="outline">Send Another Message</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={`transition-opacity duration-300 ${status === 'submitting' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                     <div className="group">
                                        <label className={labelClasses}>Name</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            value={formState.name} 
                                            onChange={handleChange} 
                                            className={inputClasses} 
                                            placeholder="Jane Doe" 
                                            required 
                                            disabled={status === 'submitting'}
                                        />
                                     </div>
                                     <div className="group">
                                        <label className={labelClasses}>Email</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            value={formState.email} 
                                            onChange={handleChange} 
                                            className={inputClasses} 
                                            placeholder="jane@company.com" 
                                            required 
                                            disabled={status === 'submitting'}
                                        />
                                     </div>
                                </div>
                                <div className="mb-8 group">
                                     <label className={labelClasses}>Phone</label>
                                     <input 
                                        type="tel" 
                                        name="phone" 
                                        value={formState.phone} 
                                        onChange={handleChange} 
                                        className={inputClasses} 
                                        placeholder="+254..." 
                                        disabled={status === 'submitting'}
                                     />
                                </div>
                                <div className="mb-12 group">
                                     <label className={labelClasses}>Message</label>
                                     <textarea 
                                        name="message" 
                                        rows={4} 
                                        value={formState.message} 
                                        onChange={handleChange} 
                                        className={`${inputClasses} resize-none`} 
                                        placeholder="Tell us about your project..." 
                                        required
                                        disabled={status === 'submitting'}
                                     ></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    disabled={status === 'submitting'}
                                    className="w-full inline-flex items-center justify-center px-8 py-5 text-lg font-bold tracking-wide transition-all duration-300 rounded-lg font-heading relative overflow-hidden bg-sail-orange text-white hover:bg-sail-darkGreen shadow-lg shadow-sail-orange/20 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed group"
                                >
                                    {status === 'submitting' ? (
                                        <span className="flex items-center gap-2">
                                            <Loader2 className="animate-spin" size={24} />
                                            Processing...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2 relative z-10">
                                            Launch My Growth Plan
                                            <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </AnimatedElement>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;