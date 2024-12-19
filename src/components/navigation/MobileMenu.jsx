import React from 'react';
import NavLink from './NavLink';
import NavButton from './NavButton';

const MobileMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-16 left-4 right-4 bg-slate-800 rounded-lg p-4 navbar-glow">
      <div className="flex flex-col space-y-2">
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Dashboard</NavLink>
        <NavButton variant="primary">Login</NavButton>
      </div>
    </div>
  );
};

export default MobileMenu;