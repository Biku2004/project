import React, { useState } from 'react';
import TradingViewWidget from '../charts/TradingViewWidget';
import LiveTradingChart from '../charts/LiveTradingChart';

const ChartSection = () => {
  const [chartType, setChartType] = useState('live');

  return (
    <div className="w-full bg-slate-800/50 rounded-lg p-4 shadow-lg backdrop-blur-sm">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-white">Market Overview</h2>
          <p className="text-slate-400">Real-time market visualization</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setChartType('live')}
            className={`px-4 py-2 rounded-lg transition-all ${
              chartType === 'live'
                ? 'bg-secondary text-white'
                : 'bg-slate-700 text-slate-300'
            }`}
          >
            Live Chart
          </button>
          <button
            onClick={() => setChartType('trading')}
            className={`px-4 py-2 rounded-lg transition-all ${
              chartType === 'trading'
                ? 'bg-secondary text-white'
                : 'bg-slate-700 text-slate-300'
            }`}
          >
            TradingView
          </button>
        </div>
      </div>
      <div className="h-[400px] w-full bg-slate-900/50 rounded-lg overflow-hidden">
        {chartType === 'live' ? <LiveTradingChart /> : <TradingViewWidget />}
      </div>
    </div>
  );
};

export default ChartSection;