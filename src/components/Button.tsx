import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors rounded-lg';
  
  const variants = {
    primary: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2',
    secondary: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-2 focus:ring-gray-700 focus:ring-offset-2',
    outline: 'border-2 border-amber-500 text-amber-500 hover:bg-amber-50 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}