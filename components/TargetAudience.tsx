import React from 'react';
import { Check } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const points = [
    "Para quem está começando a estudar agora",
    "Para quem quer estudar com pouco investimento",
    "Para quem precisa de PDFs, resumos e questões",
    "Para quem prefere a liberdade de estudar pelo celular",
    "Para quem quer materiais organizados e sem enrolação"
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Para quem é o ConcursoPro+?
          </h2>
          <p className="text-slate-400">Desenvolvido para todos os níveis de preparação.</p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-4">
          {points.map((point, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-900 p-5 rounded-xl border border-white/5 hover:border-accent-500/30 transition-colors shadow-lg">
              <div className="min-w-[32px] w-8 h-8 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-400">
                <Check size={18} strokeWidth={3} />
              </div>
              <span className="text-slate-300 font-medium text-lg">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;