import React from 'react';
import { GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent-500/10 rounded-lg flex items-center justify-center text-accent-400 border border-accent-500/20">
              <GraduationCap size={20} />
            </div>
            <span className="text-lg font-bold text-white">
              Concurso<span className="text-accent-500">Pro+</span>
            </span>
          </div>
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} ConcursoPro+. Todos os direitos reservados.
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;