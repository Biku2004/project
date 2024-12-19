import React from 'react';

export const StockFormFields = ({ formData, onChange, loading }) => {
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const processedValue = type === 'number' ? Number(value) : value;
    onChange(name, processedValue);
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="symbol" className="block text-sm font-medium text-gray-700">
          Stock Symbol
        </label>
        <input
          type="text"
          id="symbol"
          name="symbol"
          value={formData.symbol}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="e.g., AAPL"
          required
          disabled={loading}
          autoComplete="off"
          maxLength={5}
          pattern="[A-Za-z]+"
        />
        <p className="mt-1 text-xs text-gray-500">
          Enter the stock symbol (e.g., AAPL for Apple Inc.)
        </p>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Company Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="e.g., Apple Inc."
          required
          disabled={loading}
        />
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          min="1"
          step="1"
          required
          disabled={loading}
        />
      </div>

      <div>
        <label htmlFor="buyPrice" className="block text-sm font-medium text-gray-700">
          Buy Price
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            id="buyPrice"
            name="buyPrice"
            value={formData.buyPrice}
            onChange={handleChange}
            className="block w-full pl-7 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0.01"
            step="0.01"
            required
            disabled={loading}
          />
        </div>
      </div>
    </div>
  );
};