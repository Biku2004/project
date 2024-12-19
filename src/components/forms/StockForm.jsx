import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { StockFormFields } from './StockFormFields';

export const StockForm = ({ stock, onSubmit, onClose, loading }) => {
  const [formData, setFormData] = useState({
    symbol: '',
    name: '',
    quantity: 1,
    buyPrice: 0,
  });

  useEffect(() => {
    if (stock) {
      setFormData({
        symbol: stock.symbol,
        name: stock.name,
        quantity: stock.quantity,
        buyPrice: stock.buyPrice,
      });
    }
  }, [stock]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{stock ? 'Edit Stock' : 'Add Stock'}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <StockFormFields 
            formData={formData} 
            onChange={(name, value) => setFormData(prev => ({ ...prev, [name]: value }))}
            loading={loading}
          />
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Processing...' : stock ? 'Update' : 'Add'} Stock
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};