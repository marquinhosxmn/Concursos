import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { Button } from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCheckout = () => {
    window.open('https://go.pepperpay.com.br/qvr0s', '_blank');
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-slate-950/90 backdrop-blur-md shadow-md border-white/5 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-accent-500/10 rounded-xl flex items-center justify-center text-accent-400 border border-accent-500/20">
              <GraduationCap size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Concurso<span className="text-accent-500">Pro+</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-sm font-medium text-slate-300 hover:text-accent-400 transition-colors">Como funciona</a>
            <a href="#lista-cursos" className="text-sm font-medium text-slate-300 hover:text-accent-400 transition-colors">Lista de Cursos</a>
            <a href="#conteudo" className="text-sm font-medium text-slate-300 hover:text-accent-400 transition-colors">O que inclui</a>
            <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-accent-400 transition-colors">Dúvidas</a>
            <Button size="sm" onClick={handleCheckout}>
              Entrar no Grupo
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 shadow-xl border-t border-white/5 py-4 px-4 flex flex-col gap-4">
          <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium py-2">Como funciona</a>
          <a href="#lista-cursos" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium py-2">Lista de Cursos</a>
          <a href="#conteudo" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium py-2">O que inclui</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium py-2">Dúvidas</a>
          <Button fullWidth onClick={handleCheckout}>
            Quero entrar agora
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;