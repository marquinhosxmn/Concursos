import React from 'react';
import { FEATURES, PLATFORMS } from '../constants';
import { Button } from './Button';

const Features: React.FC = () => {
  const handleCheckout = () => {
    window.open('https://pay.wiapy.com/maQ0QPFEAA', '_blank');
  };

  return (
    <section id="conteudo" className="py-24 bg-slate-900/50 border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Features Grid */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que você recebe</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Tudo o que você precisa para ser aprovado, reunido em um único lugar.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {FEATURES.map((feature, index) => (
            <div key={index} className="p-6 md:p-8 rounded-2xl bg-slate-800/80 border border-white/10 hover:border-accent-500/50 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] hover:shadow-accent-500/20 transition-all duration-300 group backdrop-blur-sm">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent-500 transition-colors duration-300 border border-white/10 group-hover:border-accent-500 shadow-inner">
                <feature.icon className="text-accent-400 group-hover:text-slate-950 transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Platforms Section */}
        <div className="bg-slate-950 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden border border-white/10 mb-16">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8 text-slate-200">Conteúdos baseados nas maiores plataformas</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
              {PLATFORMS.map((platform, i) => (
                <span key={i} className="text-xl md:text-2xl font-bold tracking-tight hover:text-accent-400 transition-colors cursor-default">
                  {platform}
                </span>
              ))}
            </div>
            <p className="mt-8 text-xs text-slate-500 max-w-2xl mx-auto">
              *O ConcursoPro+ é um grupo de rateio e curadoria de conteúdos educacionais. As marcas citadas pertencem aos seus respectivos proprietários.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button size="lg" withIcon onClick={handleCheckout} className="shadow-gold-glow-strong">
            GARANTIR MEU ACESSO VIP
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Features;