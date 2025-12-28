import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que dizem nossos alunos</h2>
          <p className="text-slate-400">Junte-se a milhares de concurseiros que já estão estudando conosco.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-slate-950 p-8 rounded-2xl relative border border-white/5 hover:border-white/10 transition-colors">
              <Quote className="absolute top-6 right-6 text-slate-800 w-10 h-10" />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-accent-500 ring-offset-2 ring-offset-slate-950" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-accent-400 font-semibold uppercase">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-300 italic leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;