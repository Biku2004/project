import React from 'react';
import { StockTableHeader } from './StockTableHeader';
import { StockTableRow } from './StockTableRow';

export const StockList = ({ stocks, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <StockTableHeader />
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
        </table>
      </div>
    </div>
  );
};