import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Button from './Button';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-900/30 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">Perguntas <span className="gold-text">Frequentes</span></h2>
        </div>

        <div className="space-y-3 md:space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-slate-800/90 rounded-xl md:rounded-2xl shadow-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-accent-500/50 backdrop-blur-sm">
              <button
                className="w-full px-6 md:px-8 py-4 md:py-6 flex items-center justify-between text-left focus:outline-none hover:bg-accent-500/10 transition-colors"
                onClick={() => toggle(index)}
              >
                <span className="font-bold text-slate-100 text-base md:text-lg tracking-tight">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-accent-500 w-5 h-5 md:w-6 md:h-6" />
                ) : (
                  <ChevronDown className="text-slate-400 w-5 h-5 md:w-6 md:h-6" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 text-slate-200 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden mt-12">
          <Button 
            fullWidth 
            withIcon 
            onClick={() => window.open('https://ggcheckout.com.br/checkout/v3/x7BUj7VqT8CcUfODXBSO', '_blank')}
            className="shadow-gold-glow-strong"
          >
            TENHO INTERESSE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Faq;