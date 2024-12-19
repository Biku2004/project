import React from 'react';

const stocks = [
  { name: 'AAPL', price: '182.52', change: '+1.25%' },
  { name: 'MSFT', price: '405.12', change: '+0.75%' },
  { name: 'GOOGL', price: '142.65', change: '-0.50%' },
];

const TopStocks = () => {
  return (
    <div className="bg-slate-800/50 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Top Stocks</h2>
      <div className="space-y-4">
        {stocks.map((stock) => (
          <div key={stock.name} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
            <span className="font-medium">{stock.name}</span>
            <div className="text-right">
              <div className="font-semibold">${stock.price}</div>
              <div className={stock.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                {stock.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStocks;