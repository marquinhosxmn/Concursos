import React, { useState, useMemo } from 'react';
import { Search, BookOpen, ExternalLink } from 'lucide-react';
import { COURSES } from '@/courses';
import Button from './Button';

const CourseList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = useMemo(() => {
    return COURSES.filter(course => 
      course.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <section id="lista-cursos" className="py-24 bg-[#020617] relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
            Confira Nossa <span className="gold-text">Lista de Cursos</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-medium">
            Temos o maior acervo de materiais de elite do Brasil. Use a busca abaixo para encontrar o seu curso.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 md:mb-12">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 md:pl-5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 md:h-5 md:w-5 text-slate-400 group-focus-within:text-accent-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 md:pl-14 pr-4 md:pr-5 py-4 md:py-5 bg-slate-800 border border-white/20 rounded-xl md:rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all shadow-2xl text-sm md:text-base backdrop-blur-sm"
              placeholder="Digite o nome do curso, banca ou professor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <p className="text-center mt-3 md:mt-4 text-[10px] md:text-xs text-slate-300 font-bold uppercase tracking-widest">
            Exibindo {filteredCourses.length} de {COURSES.length} cursos disponíveis
          </p>
          <p className="text-center mt-2 text-[9px] md:text-[10px] text-accent-400 font-black uppercase tracking-widest">
            Caso não encontre seu curso, nos chame para verificar qual você quer
          </p>
        </div>

        {/* Course Grid/List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-h-[500px] md:max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div 
                key={index} 
                className="group p-4 md:p-5 bg-slate-800/90 border border-white/10 rounded-lg md:rounded-xl hover:border-accent-500/60 hover:bg-slate-700 transition-all flex items-start gap-3 md:gap-4 shadow-xl backdrop-blur-sm"
              >
                <div className="mt-1 p-1.5 md:p-2 bg-accent-500/20 rounded-lg text-accent-500 group-hover:bg-accent-500 group-hover:text-slate-950 transition-all shadow-inner">
                  <BookOpen size={16} />
                </div>
                <span className="text-slate-100 font-bold text-sm md:text-base leading-snug group-hover:text-white transition-colors">
                  {course}
                </span>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-400 text-lg font-medium">Nenhum curso encontrado para "{searchTerm}"</p>
              <p className="text-accent-500 mt-2 font-bold">Caso não encontre seu curso, nos chame para verificar qual você quer!</p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center flex flex-col items-center gap-8">
          <div className="md:hidden w-full">
            <Button 
              fullWidth 
              withIcon 
              onClick={() => window.open('https://www.ggcheckout.com/checkout/v5/x7BUj7VqT8CcUfODXBSO', '_blank')}
              className="shadow-gold-glow-strong"
            >
              GARANTIR MINHA VAGA
            </Button>
          </div>

          <a 
            href="https://docs.google.com/spreadsheets/d/1pBXjjO8gw6VsQ_zBhiAfjW9mrbOZ6SZFPeApBmQ09yQ/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-bold text-sm uppercase tracking-widest transition-colors"
          >
            Ver lista completa no Google Sheets <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(245, 158, 11, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(245, 158, 11, 0.4);
        }
      `}} />
    </section>
  );
};

export default CourseList;
