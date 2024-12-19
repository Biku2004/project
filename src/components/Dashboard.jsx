// true dashboard
import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, PieChart } from 'lucide-react';
import { PortfolioMetrics } from '../types';

export const Dashboard = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Portfolio Value</p>
            <p className="text-2xl font-bold">${metrics.totalValue.toFixed(2)}</p>
          </div>
          <DollarSign className="h-8 w-8 text-green-500" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Gain/Loss</p>
            <p className={`text-2xl font-bold ${metrics.totalGainLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              ${Math.abs(metrics.totalGainLoss).toFixed(2)}
            </p>
          </div>
          {metrics.totalGainLoss >= 0 ? (
            <TrendingUp className="h-8 w-8 text-green-500" />
          ) : (
            <TrendingDown className="h-8 w-8 text-red-500" />
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Top Performer</p>
            <p className="text-2xl font-bold">{metrics.topPerformer?.symbol || 'N/A'}</p>
          </div>
          <TrendingUp className="h-8 w-8 text-green-500" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Portfolio Distribution</p>
            <p className="text-2xl font-bold">5 Stocks</p>
          </div>
          <PieChart className="h-8 w-8 text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;