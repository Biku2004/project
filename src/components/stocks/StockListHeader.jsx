import React from 'react';
import { ArrowUpDown } from 'lucide-react';

export const StockListHeader = () => (
  <thead className="bg-gray-50">
    <tr>
      <th scope="col" className="px-4 sm:px-6 py-3 text-left">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Stock
          </span>
          <ArrowUpDown className="h-4 w-4 text-gray-400" />
        </div>
      </th>
      <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Quantity
      </th>
      <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Buy Price
      </th>
      <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Current Price
      </th>
      <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Gain/Loss
      </th>
      <th scope="col" className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
        Actions
      </th>
    </tr>
  </thead>
);