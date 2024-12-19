import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, PieChart } from 'lucide-react';
import { MetricCard } from './MetricCard';

export const DashboardMetrics = ({ metrics, loading }) => {
  const {
    totalValue,
    totalGainLoss,
    topPerformer,
    worstPerformer,
    stockCount
  } = metrics;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <MetricCard
        title="Total Portfolio Value"
        value={`$${totalValue.toFixed(2)}`}
        icon={DollarSign}
        loading={loading}
      />
      
      <MetricCard
        title="Total Gain/Loss"
        value={`${totalGainLoss >= 0 ? '+' : '-'}$${Math.abs(totalGainLoss).toFixed(2)}`}
        icon={totalGainLoss >= 0 ? TrendingUp : TrendingDown}
        valueColor={totalGainLoss >= 0 ? 'text-green-500' : 'text-red-500'}
        loading={loading}
      />
      
      <MetricCard
        title="Top Performer"
        value={topPerformer ? `${topPerformer.symbol} (${(topPerformer.performance * 100).toFixed(2)}%)` : 'N/A'}
        icon={TrendingUp}
        valueColor="text-green-500"
        loading={loading}
      />
      
      <MetricCard
        title="Portfolio Distribution"
        value={`${stockCount} Stock${stockCount !== 1 ? 's' : ''}`}
        icon={PieChart}
        loading={loading}
      />
    </div>
  );
};