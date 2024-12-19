import React from 'react';
import { commonTransitions } from '../../utils/styles';

const NavLink = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className={`
        text-gray-300 hover:text-white 
        px-3 py-2 rounded-md 
        text-sm font-medium 
        ${commonTransitions.colors}
      `}
    >
      {children}
    </a>
  );
};

export default NavLink;