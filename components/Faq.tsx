import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-slate-900 rounded-xl shadow-sm border border-white/5 overflow-hidden">
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-slate-800/50 transition-colors"
                onClick={() => toggle(index)}
              >
                <span className="font-bold text-slate-200 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-accent-500" />
                ) : (
                  <ChevronDown className="text-slate-500" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-400">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;