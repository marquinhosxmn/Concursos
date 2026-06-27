import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import { Button } from './Button';

const Testimonials: React.FC = () => {
  const handleCheckout = () => {
    window.open('https://go.pepperpay.com.br/qvr0s', '_blank');
  };

  return (
    <section className="py-24 bg-[#020617]/30 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que dizem nossos alunos</h2>
          <p className="text-slate-400">Junte-se a milhares de concurseiros que já estão estudando conosco.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-slate-800/80 p-8 rounded-3xl relative border border-white/10 hover:border-accent-500/50 transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] backdrop-blur-md group">
              <Quote className="absolute top-6 right-6 text-slate-700/30 w-12 h-12 group-hover:text-accent-500/20 transition-colors" />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-accent-500 ring-offset-2 ring-offset-slate-800 shadow-lg" />
                <div>
                  <h4 className="font-bold text-white tracking-tight">{t.name}</h4>
                  <p className="text-xs text-accent-500 font-black uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-100 italic leading-relaxed font-medium">"{t.text}"</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" withIcon onClick={handleCheckout} className="shadow-gold-glow-strong">
            QUERO SER APROVADO TAMBÉM
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;