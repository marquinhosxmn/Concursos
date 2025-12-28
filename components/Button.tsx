import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
  withIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  withIcon = false,
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-black transition-all duration-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 tracking-tight group overflow-hidden";
  
  const variants = {
    primary: "bg-accent-500 hover:bg-accent-400 text-slate-950 shadow-gold-glow hover:shadow-gold-glow-strong border border-accent-400/20 active:scale-95",
    outline: "border-2 border-accent-500 text-accent-400 hover:bg-accent-500/10 focus:ring-accent-500 active:scale-95",
    white: "bg-white text-slate-950 hover:bg-gray-100 shadow-xl focus:ring-white active:scale-95",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-10 py-5 text-xl",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {children}
        {withIcon && <ArrowRight className="ml-2 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      )}
    </button>
  );
};

export default Button;