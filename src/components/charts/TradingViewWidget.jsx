import React, { useEffect, useRef, memo } from 'react';
import { TRADING_VIEW_CONFIG } from '../../utils/tradingView';

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create container for TradingView widget
    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container__widget h-[400px]';
    containerRef.current.appendChild(widgetContainer);

    // Load TradingView widget
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify(TRADING_VIEW_CONFIG);

    containerRef.current.appendChild(script);

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      className="tradingview-widget-container w-full h-full rounded-lg overflow-hidden"
      ref={containerRef}
    />
  );
};

export default memo(TradingViewWidget);