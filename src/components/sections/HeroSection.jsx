import React from 'react';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        Track Your Portfolio
      </h1>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        Monitor your investments in real-time with our advanced portfolio tracking tools
      </p>
      <div className="mt-12">
        <Button size="large">
          Get Started with Dashboard
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;