import React from 'react';
import { Button } from './Button';
// Added Star to the imported icons from lucide-react
import { Check, ShieldCheck, Trophy, Star } from 'lucide-react';

const CheckoutSection: React.FC = () => {
  const handleCheckout = () => {
    window.open('https://ggcheckout.com.br/checkout/v3/x7BUj7VqT8CcUfODXBSO', '_blank');
  };

  return (
    <section id="checkout" className="py-24 bg-[#020617]/40 relative overflow-hidden border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="bg-slate-800/80 rounded-[2rem] md:rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9),0_0_80px_-20px_rgba(245,158,11,0.3)] border border-accent-500/30 overflow-hidden flex flex-col lg:flex-row backdrop-blur-xl">
          
          {/* Summary Column */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center text-white">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-accent-500 border border-accent-500/30 mb-6 md:mb-10 shadow-inner">
              <Trophy size={24} className="md:w-7 md:h-7" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 tracking-tighter leading-none">Prepare-se para <br/><span className="gold-text">Sua Aprovação.</span></h2>
            <p className="text-slate-200 mb-8 md:mb-12 text-base md:text-xl leading-relaxed font-medium">
              O melhor custo-benefício do mercado. Comece a estudar agora com material de elite selecionado.
            </p>
            
            <ul className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              {[
                "+50 Cursos Completos",
                "PDFs, Videoaulas e Resumos",
                "Acesso Vitalício Sem Mensalidade",
                "Envio Automático e Imediato"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 md:gap-5">
                  <div className="bg-accent-500 p-1 md:p-1.5 rounded-full text-slate-950 shadow-lg">
                    <Check size={14} className="md:w-[18px] md:h-[18px]" strokeWidth={4} />
                  </div>
                  <span className="font-black text-slate-100 text-sm md:text-lg tracking-tight">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 md:gap-4 text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
              <ShieldCheck size={16} className="text-accent-500 md:w-5 md:h-5" />
              <span>Compra 100% Segura & Criptografada</span>
            </div>
          </div>

          {/* Action Column */}
          <div className="lg:w-1/2 bg-slate-900/80 p-8 md:p-12 lg:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
            <div className="absolute inset-0 bg-accent-500/[0.05] pointer-events-none"></div>
            
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="mb-6 md:mb-8 inline-block px-4 md:px-6 py-2 md:py-2.5 bg-accent-500/20 text-accent-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] rounded-full border border-accent-500/30">
                PROMOÇÃO POR TEMPO LIMITADO
              </div>
              
              <div className="flex flex-col items-center mb-8 md:mb-12">
                 <span className="text-slate-400 text-lg md:text-2xl font-bold line-through mb-1 md:mb-2">DE R$ 297,00</span>
                 <div className="flex items-baseline gap-2 md:gap-3">
                   <span className="text-accent-500 text-2xl md:text-4xl font-black">R$</span>
                   <span className="text-7xl md:text-9xl lg:text-[10rem] font-black text-white tracking-tighter leading-none drop-shadow-2xl">29,90</span>
                 </div>
                 <p className="text-accent-500 text-xs md:text-base font-black mt-3 md:mt-4 uppercase tracking-[0.3em]">Pagamento Único • Acesso Vitalício</p>
              </div>

              <Button 
                size="lg" 
                fullWidth 
                className="py-6 md:py-10 text-xl md:text-3xl font-black tracking-tighter shadow-gold-glow-strong hover:scale-[1.03] rounded-2xl md:rounded-[2rem] border-2 border-accent-500/20"
                onClick={handleCheckout}
              >
                LIBERAR MEU ACESSO VIP
              </Button>
              
              <div className="mt-10 flex flex-col items-center gap-3">
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" className="text-accent-500" />)}
                </div>
                <p className="text-xs text-slate-500 uppercase font-black tracking-[0.3em]">
                  Mais de 14.500 alunos aprovam
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;