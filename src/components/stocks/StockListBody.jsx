import React from 'react';
import { StockTableRow } from './StockTableRow';
import { Loader } from 'lucide-react';

export const StockListBody = ({ stocks, onEdit, onDelete, loading }) => {
  if (loading && stocks.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan="6" className="px-6 py-8 text-center">
            <div className="flex items-center justify-center gap-2">
              <Loader className="h-5 w-5 animate-spin text-blue-500" />
              <span className="text-gray-500">Loading stocks...</span>
            </div>
          </td>
        </tr>
      </tbody>
    );
  }

  if (!loading && stocks.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
            No stocks in portfolio. Click "Add Stock" to get started.
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {stocks.map((stock) => (
        <StockTableRow
          key={stock.id}
          stock={stock}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </tbody>
  );
};