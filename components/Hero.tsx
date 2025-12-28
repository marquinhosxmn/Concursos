import React from 'react';
import Button from './Button';
import { CheckCircle2, Star, TrendingDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToContent = () => {
    const element = document.getElementById('conteudo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-slate-950 text-white flex flex-col items-center justify-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-40 -left-20 w-96 h-96 bg-accent-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-accent-500/30 text-accent-400 text-sm font-bold mb-10 shadow-[0_0_20px_rgba(197,160,89,0.1)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500"></span>
            </span>
            ÚLTIMAS VAGAS COM VALOR PROMOCIONAL
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-10 tracking-tighter">
            Estude com <span className="gold-text">Materiais de Elite</span> em um só lugar.
          </h1>
          
          <p className="text-lg lg:text-2xl text-slate-400 mb-14 max-w-3xl leading-relaxed font-medium">
            Videoaulas, PDFs e mapas mentais das maiores plataformas do país. Tudo organizado e disponível <span className="text-accent-400 font-bold">vitaliciamente</span> no Telegram.
          </p>

          <div className="flex flex-col items-center gap-10 mb-16 w-full">
            <div className="flex flex-col items-center gap-8 w-full sm:w-auto">
              
              {/* Massive Pricing Block */}
              <div className="relative bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/5 backdrop-blur-sm shadow-2xl flex flex-col items-center">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap">
                  <TrendingDown size={14} /> 90% DE DESCONTO SOMENTE HOJE
                </div>
                
                <span className="text-slate-500 text-xl font-bold line-through">De R$ 297,00</span>
                <div className="flex items-baseline gap-2 mt-1">
                   <span className="text-accent-500 text-3xl font-black">R$</span>
                   <span className="text-8xl md:text-9xl font-black text-white tracking-tighter leading-none">29,90</span>
                </div>
                <div className="mt-4 px-4 py-1.5 bg-accent-500/10 rounded-full border border-accent-500/20">
                  <span className="text-[11px] text-accent-400 font-black uppercase tracking-widest">Acesso Vitalício • Pagamento Único</span>
                </div>
              </div>

              <Button size="lg" withIcon onClick={handleScrollToContent} className="px-16 py-7 text-2xl w-full sm:w-auto shadow-gold-glow animate-pulse-soft">
                ENTRAR AGORA
              </Button>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-black">Conheça o conteúdo exclusivo abaixo</p>
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