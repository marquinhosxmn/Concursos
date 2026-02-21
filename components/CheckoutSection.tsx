import React from 'react';
import Button from './Button';
// Added Star to the imported icons from lucide-react
import { Check, ShieldCheck, Trophy, Star } from 'lucide-react';

const CheckoutSection: React.FC = () => {
  const handleCheckout = () => {
    window.open('https://www.ggcheckout.com/checkout/v5/x7BUj7VqT8CcUfODXBSO', '_blank');
  };

  return (
    <section id="checkout" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-600/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="bg-slate-900/40 rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] border border-accent-500/10 overflow-hidden flex flex-col lg:flex-row backdrop-blur-sm">
          
          {/* Summary Column */}
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center text-white">
            <div className="w-12 h-12 bg-accent-500/10 rounded-2xl flex items-center justify-center text-accent-500 border border-accent-500/20 mb-8">
              <Trophy size={24} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tighter leading-tight">Prepare-se para <br/><span className="gold-text">Sua Aprovação.</span></h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed font-medium">
              O melhor custo-benefício do mercado. Comece a estudar agora com material de elite selecionado.
            </p>
            
            <ul className="space-y-5 mb-10">
              {[
                "+50 Cursos Completos",
                "PDFs, Videoaulas e Resumos",
                "Acesso Vitalício Sem Mensalidade",
                "Envio Automático e Imediato"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="bg-accent-500 p-1 rounded-full text-slate-950">
                    <Check size={16} strokeWidth={4} />
                  </div>
                  <span className="font-bold text-slate-200 tracking-tight">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 text-slate-500 text-xs font-black uppercase tracking-widest">
              <ShieldCheck size={18} className="text-accent-500" />
              <span>Compra 100% Segura & Criptografada</span>
            </div>
          </div>

          {/* Action Column */}
          <div className="lg:w-1/2 bg-slate-900 p-12 lg:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-accent-500/[0.02] pointer-events-none"></div>
            
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="mb-6 inline-block px-5 py-2 bg-accent-500/10 text-accent-400 text-xs font-black uppercase tracking-[0.2em] rounded-full border border-accent-500/20">
                PROMOÇÃO POR TEMPO LIMITADO
              </div>
              
              <div className="flex flex-col items-center mb-10">
                 <span className="text-slate-500 text-xl font-bold line-through mb-1">DE R$ 297,00</span>
                 <div className="flex items-baseline gap-2">
                   <span className="text-accent-500 text-3xl font-black">R$</span>
                   <span className="text-8xl md:text-9xl font-black text-white tracking-tighter">29,90</span>
                 </div>
                 <p className="text-accent-500/80 text-sm font-black mt-2 uppercase tracking-widest">Pagamento Único • Acesso Vitalício</p>
              </div>

              <Button 
                size="lg" 
                fullWidth 
                className="py-8 text-2xl font-black tracking-tighter shadow-gold-glow hover:scale-[1.03]"
                onClick={handleCheckout}
              >
                LIBERAR MEU ACESSO VIP
              </Button>
              
              <div className="mt-8 flex flex-col items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#f59e0b" className="text-accent-500" />)}
                </div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em]">
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