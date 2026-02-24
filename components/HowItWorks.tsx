import React from 'react';
import { Lock, Send, BookOpenCheck } from 'lucide-react';
import { Button } from './Button';

const HowItWorks: React.FC = () => {
  const handleCheckout = () => {
    window.open('https://www.ggcheckout.com/checkout/v5/x7BUj7VqT8CcUfODXBSO', '_blank');
  };

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
    <section id="como-funciona" className="py-24 bg-[#020617]/20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-500 font-black tracking-[0.3em] text-xs uppercase">Passo a Passo</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tighter">Como <span className="gold-text">funciona?</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center p-10 bg-slate-800/60 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10 hover:border-accent-500/50 transition-all duration-300 group backdrop-blur-md">
              <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 text-accent-500 ring-1 ring-accent-500/30 group-hover:bg-accent-500 group-hover:text-slate-950 transition-all shadow-inner">
                <step.icon size={36} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{step.title}</h3>
              <p className="text-slate-200 leading-relaxed font-medium">{step.description}</p>
              
              {/* Connector Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 -right-4 w-8 h-[2px] bg-accent-500/30"></div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" withIcon onClick={handleCheckout} className="shadow-gold-glow-strong">
            QUERO COMEÇAR AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;