import React, { useState } from 'react';
import NavLogo from './NavLogo';
import NavLink from './NavLink';
import NavButton from './NavButton';
import MobileMenu from './MobileMenu';
import '../../styles/navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900/90 backdrop-blur-lg rounded-2xl navbar-glow">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <NavLogo />
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-300 hover:text-white p-2"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <NavLink href="#">Home</NavLink>
                  <NavLink href="#">Dashboard</NavLink>
                  <NavButton>Login</NavButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;