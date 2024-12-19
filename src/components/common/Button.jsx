import React from 'react';
import { buttonVariants, commonTransitions } from '../../utils/styles';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  className = '' 
}) => {
  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-2.5 text-base",
    large: "px-8 py-3 text-lg"
  };

  return (
    <button 
      onClick={onClick}
      className={`
        ${buttonVariants[variant]}
        ${sizes[size]}
        ${commonTransitions.base}
        font-medium rounded-lg
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;