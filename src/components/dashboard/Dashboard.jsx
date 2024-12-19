import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, PieChart, Loader } from 'lucide-react';
import { MetricCard } from './MetricCard';

export const Dashboard = ({ metrics, loading }) => {
  const { totalValue, totalGainLoss, topPerformer } = metrics;
  
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 animate-pulse">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-6 bg-gray-200 rounded w-32"></div>
              </div>
              <Loader className="h-8 w-8 text-gray-200 animate-spin" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <MetricCard
        title="Total Portfolio Value"
        value={`$${totalValue.toFixed(2)}`}
        icon={DollarSign}
      />
      
      <MetricCard
        title="Total Gain/Loss"
        value={`$${Math.abs(totalGainLoss).toFixed(2)}`}
        icon={totalGainLoss >= 0 ? TrendingUp : TrendingDown}
        valueColor={totalGainLoss >= 0 ? 'text-green-500' : 'text-red-500'}
      />
      
      <MetricCard
        title="Top Performer"
        value={topPerformer?.symbol || 'N/A'}
        icon={TrendingUp}
      />
      
      <MetricCard
        title="Portfolio Distribution"
        value={`${metrics.stocks?.length || 0} Stocks`}
        icon={PieChart}
      />
    </div>
  );
};