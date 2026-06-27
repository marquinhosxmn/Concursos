
import React from 'react';
import { Button } from './Button';
import { CheckCircle2, Star, TrendingDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleCheckout = () => {
    window.open('https://go.pepperpay.com.br/qvr0s', '_blank');
  };

  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-[#020617]/50 text-white flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Badges Container */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-accent-500/30 text-accent-400 text-sm font-bold shadow-[0_0_20px_rgba(245,158,11,0.1)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500"></span>
              </span>
              ÚLTIMAS VAGAS COM VALOR PROMOCIONAL
            </div>
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[0.95] md:leading-[0.9] mb-6 md:mb-10 tracking-tighter drop-shadow-2xl">
            Estude com <span className="gold-text">Materiais de Elite</span> em um só lugar.
          </h1>
          
          <p className="text-base md:text-lg lg:text-2xl text-slate-300 mb-10 md:mb-14 max-w-3xl leading-relaxed font-medium">
            Videoaulas, PDFs e mapas mentais das maiores plataformas do país. Tudo organizado e disponível <span className="text-accent-400 font-bold">vitaliciamente</span> no Telegram.
          </p>

          <div className="flex flex-col items-center gap-6 md:gap-10 mb-12 md:mb-16 w-full">
            <div className="flex flex-col items-center gap-6 md:gap-8 w-full sm:w-auto">
              
              {/* Massive Pricing Block */}
              <div className="relative bg-slate-800/90 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-accent-500/40 backdrop-blur-md shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(245,158,11,0.3)] flex flex-col items-center">
                <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] md:text-[10px] font-black px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap z-20">
                  <TrendingDown size={12} /> 90% DE DESCONTO SOMENTE HOJE
                </div>
                
                <span className="text-slate-500 text-lg md:text-xl font-bold line-through">De R$ 297,00</span>
                <div className="flex items-baseline gap-2 mt-1">
                   <span className="text-accent-500 text-2xl md:text-3xl font-black">R$</span>
                   <span className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none">29,90</span>
                </div>
                <div className="mt-3 md:mt-4 px-3 md:px-4 py-1 md:py-1.5 bg-accent-500/10 rounded-full border border-accent-500/20">
                  <span className="text-[9px] md:text-[11px] text-accent-400 font-black uppercase tracking-widest">Acesso Vitalício • Pagamento Único</span>
                </div>
              </div>

              <Button size="lg" withIcon onClick={handleCheckout} className="px-10 md:px-16 py-5 md:py-7 text-xl md:text-2xl w-full sm:w-auto shadow-gold-glow-strong animate-pulse-soft">
                QUERO MEU ACESSO AGORA
              </Button>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-black">Liberação imediata após o pagamento</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 text-sm text-slate-500 border-t border-white/5 pt-10 w-full max-w-3xl">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-accent-500" />
              <span className="font-bold uppercase tracking-wider text-[11px]">Material Atualizado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-accent-500" />
              <span className="font-bold uppercase tracking-wider text-[11px]">Sem Assinaturas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-accent-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="font-bold text-slate-300 uppercase tracking-wider text-[11px]">14.500+ Alunos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
