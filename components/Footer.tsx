import React from 'react';
import { GraduationCap, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent-500/10 rounded-lg flex items-center justify-center text-accent-400 border border-accent-500/20">
              <GraduationCap size={20} />
            </div>
            <span className="text-lg font-bold text-white">
              Concurso<span className="text-accent-500">Pro+</span>
            </span>
          </div>
          
          {/* Social & Contact */}
          <div className="flex flex-col items-center gap-2">
            <a 
              href="https://instagram.com/devpromais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-accent-400 transition-all duration-300 group"
            >
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-accent-500/10 transition-colors border border-white/5 group-hover:border-accent-500/30">
                <Instagram size={20} />
              </div>
              <span className="font-black tracking-tight text-lg">@devpromais</span>
            </a>
            <div className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-600">Acompanhe as novidades</div>
          </div>

          {/* Links & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-6 text-sm font-medium">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
            <div className="text-xs text-slate-600 font-medium">
              &copy; {new Date().getFullYear()} ConcursoPro+. Todos os direitos reservados.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;