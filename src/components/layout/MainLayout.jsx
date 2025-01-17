import React from 'react';
import Navbar from '../navigation/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;