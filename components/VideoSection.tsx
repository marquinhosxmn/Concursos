import React, { useEffect } from 'react';

const VideoSection: React.FC = () => {
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
    <section className="py-20 bg-slate-900 border-t border-b border-white/5 relative">
      <div className="absolute inset-0 bg-accent-500/5 pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-accent-400 font-semibold tracking-wider text-sm uppercase mb-3 block">Bastidores</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Veja o material por dentro</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Assista agora e veja como o ConcursoPro+ vai acelerar sua aprovação com organização e qualidade.</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-accent-500/20 max-w-4xl mx-auto">
          <style>
            {`wistia-player[media-id='v9bzqklo3y']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/v9bzqklo3y/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`}
          </style>
          {/* @ts-ignore - Elemento customizado externo */}
          <wistia-player media-id="v9bzqklo3y" aspect="1.7777777777777777"></wistia-player>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
            Mais de 14.500 alunos já assistiram
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;