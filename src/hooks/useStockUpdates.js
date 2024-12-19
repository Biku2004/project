import { useState, useEffect, useCallback } from 'react';
import { fetchStockPrice } from '../utils/api';

export const useStockUpdates = (initialStocks) => {
  const [stocks, setStocks] = useState(initialStocks);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdateTime, setLastUpdateTime] = useState(null);

  const updateStockPrices = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const updated = await Promise.all(
        stocks.map(async (stock) => {
          const price = await fetchStockPrice(stock.symbol);
          return {
            ...stock,
            currentPrice: price || stock.currentPrice,
          };
        })
      );
      
      setStocks(updated);
      setLastUpdateTime(new Date());
    } catch (err) {
      setError('Failed to update stock prices. Please try again later.');
      console.error('Error updating stock prices:', err);
    } finally {
      setLoading(false);
    }
  }, [stocks]);

  // Initial load and periodic updates
  useEffect(() => {
    updateStockPrices();
    
    // Update every minute
    const interval = setInterval(updateStockPrices, 60000);
    
    return () => clearInterval(interval);
  }, [updateStockPrices]);

  // Update when initialStocks changes
  useEffect(() => {
    setStocks(initialStocks);
  }, [initialStocks]);

  return {
    stocks,
    loading,
    error,
    lastUpdateTime,
    refreshPrices: updateStockPrices
  };
};