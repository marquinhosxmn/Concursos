import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

const TargetAudience: React.FC = () => {
  const handleCheckout = () => {
    window.open('https://ggcheckout.com.br/checkout/v3/x7BUj7VqT8CcUfODXBSO', '_blank');
  };

  const points = [
    "Para quem está começando a estudar agora",
    "Para quem quer estudar com pouco investimento",
    "Para quem precisa de PDFs, resumos e questões",
    "Para quem prefere a liberdade de estudar pelo celular",
    "Para quem quer materiais organizados e sem enrolação"
  ];

  return (
    <section className="py-24 bg-[#020617]/40 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
            Para quem é o <span className="gold-text">ConcursoPro+?</span>
          </h2>
          <p className="text-slate-300 text-lg font-medium">Desenvolvido para todos os níveis de preparação.</p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-4 mb-16">
          {points.map((point, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-800/90 border border-white/10 p-6 rounded-2xl hover:border-accent-500/60 transition-all duration-300 shadow-2xl group backdrop-blur-sm">
              <div className="min-w-[40px] w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-slate-950 transition-all shadow-inner border border-white/5">
                <Check size={20} strokeWidth={4} />
              </div>
              <span className="text-slate-100 font-bold text-lg tracking-tight">{point}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" withIcon onClick={handleCheckout} className="shadow-gold-glow-strong">
            QUERO COMEÇAR A ESTUDAR
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;