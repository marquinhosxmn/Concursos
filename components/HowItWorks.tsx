import React from 'react';
import { Lock, Send, BookOpenCheck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Lock,
      title: "1. Garanta seu acesso",
      description: "Faça o pagamento único de R$ 29,90 através do nosso checkout seguro."
    },
    {
      icon: Send,
      title: "2. Receba o Link",
      description: "O link de acesso ao grupo VIP chega automaticamente no seu e-mail e WhatsApp."
    },
    {
      icon: BookOpenCheck,
      title: "3. Comece a Estudar",
      description: "Acesse todo o conteúdo imediatamente e estude no seu próprio ritmo."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-400 font-semibold tracking-wider text-sm uppercase">Passo a Passo</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Como funciona?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center p-8 bg-slate-900 rounded-2xl shadow-lg border border-white/5 hover:border-accent-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 text-accent-400 ring-1 ring-accent-500/20">
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.description}</p>
              
              {/* Connector Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-4 w-8 h-px bg-slate-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;