import React from 'react';
import MainLayout from './components/layout/MainLayout';
import HeroSection from './components/sections/HeroSection';
import ChartSection from './components/sections/ChartSection';
import TopStocks from './components/stocks/TopStocks';
import ContactSection from './components/sections/ContactSection';

const LandingApp = () => {
  return (
    <MainLayout>
      <div className="py-12">
        <HeroSection />
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="md:col-span-2">
            <ChartSection />
          </div>
          <div>
            <TopStocks />
          </div>
        </div>

        <ContactSection />
      </div>
    </MainLayout>
  );
}

export default LandingApp;