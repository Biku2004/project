import React from 'react';
import { Loader } from 'lucide-react';

export const MetricCard = ({ title, value, icon: Icon, valueColor, loading }) => {
  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 animate-pulse">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-6 bg-gray-200 rounded w-32"></div>
          </div>
          <Loader className="h-8 w-8 text-gray-200 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className={`text-xl sm:text-2xl font-bold ${valueColor || ''}`}>{value}</p>
        </div>
        {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      </div>
    </div>
  );
};