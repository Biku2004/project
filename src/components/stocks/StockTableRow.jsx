import React from 'react';
import { Trash2, Edit } from 'lucide-react';
import { calculateStockMetrics } from '../../utils/stockCalculations';

export const StockTableRow = ({ stock, onEdit, onDelete }) => {
  const { gainLoss, gainLossPercentage } = calculateStockMetrics(stock);

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="font-medium text-gray-900">{stock.symbol}</span>
          <span className="text-sm text-gray-500 sm:ml-2">{stock.name}</span>
        </div>
      </td>
      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">{stock.quantity}</td>
      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">${stock.buyPrice.toFixed(2)}</td>
      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">${stock.currentPrice.toFixed(2)}</td>
      <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm ${gainLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
          <span>${Math.abs(gainLoss).toFixed(2)}</span>
          <span>({gainLossPercentage.toFixed(2)}%)</span>
        </div>
      </td>
      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
        <div className="flex justify-end sm:justify-start space-x-2">
          <button
            onClick={() => onEdit(stock)}
            className="text-blue-600 hover:text-blue-900 transition-colors p-1"
            title="Edit stock"
          >
            <Edit className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(stock.id)}
            className="text-red-600 hover:text-red-900 transition-colors p-1"
            title="Delete stock"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};