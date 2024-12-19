import React from 'react';

const NavButton = ({ children, onClick, variant = 'primary' }) => {
  const baseStyles = "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200";
  const variants = {
    primary: "bg-secondary hover:bg-accent text-white transform hover:scale-105",
    secondary: "bg-transparent border border-secondary hover:border-accent text-white"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default NavButton;