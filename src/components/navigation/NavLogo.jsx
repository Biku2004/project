import React from 'react';

const NavLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
        <span className="text-white font-bold">PT</span>
      </div>
      <span className="text-xl font-bold text-white">Portfolio Tracker</span>
    </div>
  );
};

export default NavLogo;