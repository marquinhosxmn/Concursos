import React, { useEffect } from 'react';
import { Button } from './Button';

const VideoSection: React.FC = () => {
  const handleCheckout = () => {
    window.open('https://ggcheckout.com.br/checkout/v3/x7BUj7VqT8CcUfODXBSO', '_blank');
  };

  useEffect(() => {
    // Carrega os scripts do Wistia dinamicamente
    const script1 = document.createElement('script');
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://fast.wistia.com/embed/v9bzqklo3y.js";
    script2.async = true;
    script2.type = "module";
    document.body.appendChild(script2);

    return () => {
      if (document.body.contains(script1)) document.body.removeChild(script1);
      if (document.body.contains(script2)) document.body.removeChild(script2);
    };
  }, []);

  return (
    <section className="py-24 bg-[#020617]/50 border-t border-b border-white/10 relative">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent-500 font-black tracking-[0.3em] text-xs uppercase mb-4 block">Bastidores</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Veja o material <span className="gold-text">por dentro</span></h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto font-medium">Assista agora e veja como o ConcursoPro+ vai acelerar sua aprovação com organização e qualidade.</p>
        </div>

        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-950 shadow-[0_0_80px_-20px_rgba(245,158,11,0.2)] border border-accent-500/30 max-w-4xl mx-auto">
          <style>
            {`wistia-player[media-id='v9bzqklo3y']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/v9bzqklo3y/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`}
          </style>
          {/* @ts-ignore - Elemento customizado externo */}
          <wistia-player media-id="v9bzqklo3y" aspect="1.7777777777777777"></wistia-player>
        </div>
        
        <div className="mt-10 text-center flex flex-col items-center gap-8">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
            Mais de 14.500 alunos já assistiram
          </p>
          
          <Button size="lg" withIcon onClick={handleCheckout} className="shadow-gold-glow-strong animate-pulse-soft">
            QUERO ACESSO AO MATERIAL
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;