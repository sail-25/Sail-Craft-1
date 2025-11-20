import React, { useState } from 'react';
import { Section, AnimatedElement, Button, DisplayText } from '../components/UI';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will be in touch soon.");
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-sail-offWhite min-h-screen flex flex-col">
      <Section className="pt-40 flex-grow" grid>
        <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
                <AnimatedElement>
                    <DisplayText size="md" className="text-sail-green mb-8">
                        YOUR GROWTH STARTS WITH A <span className="text-sail-orange">CONVERSATION.</span>
                    </DisplayText>
                    <p className="text-xl text-slate-600 mb-12">
                        Ready to move? We're ready to lead the way.
                    </p>
                    
                    <div className="space-y-8 border-t border-gray-200 pt-8">
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

            <div className="lg:col-span-7">
                <AnimatedElement delay={0.2}>
                    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl shadow-sail-green/5 border border-gray-100">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                             <div className="space-y-2">
                                <label className="text-sm font-bold uppercase text-sail-green">Name</label>
                                <input type="text" name="name" value={formState.name} onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-sail-orange outline-none py-3 bg-transparent text-lg transition-colors" placeholder="Jane Doe" required />
                             </div>
                             <div className="space-y-2">
                                <label className="text-sm font-bold uppercase text-sail-green">Email</label>
                                <input type="email" name="email" value={formState.email} onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-sail-orange outline-none py-3 bg-transparent text-lg transition-colors" placeholder="jane@company.com" required />
                             </div>
                        </div>
                        <div className="space-y-2 mb-8">
                             <label className="text-sm font-bold uppercase text-sail-green">Phone</label>
                             <input type="tel" name="phone" value={formState.phone} onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-sail-orange outline-none py-3 bg-transparent text-lg transition-colors" placeholder="+254..." />
                        </div>
                        <div className="space-y-2 mb-12">
                             <label className="text-sm font-bold uppercase text-sail-green">Message</label>
                             <textarea name="message" rows={4} value={formState.message} onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-sail-orange outline-none py-3 bg-transparent text-lg transition-colors resize-none" placeholder="Tell us about your project..." required></textarea>
                        </div>
                        <Button variant="primary" className="w-full !py-5 !text-lg">Launch My Growth Plan</Button>
                    </form>
                </AnimatedElement>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;