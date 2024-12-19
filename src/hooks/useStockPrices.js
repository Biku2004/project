import { useState, useEffect } from 'react';
import { fetchStockPrice } from '../utils/api';

export const useStockPrices = (stocks) => {
  const [updatedStocks, setUpdatedStocks] = useState(stocks);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const updateStockPrices = async () => {
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
        setUpdatedStocks(updated);
      } catch (err) {
        setError('Failed to update stock prices');
        console.error('Error updating stock prices:', err);
      }
      setLoading(false);
    };

    updateStockPrices();
    const interval = setInterval(updateStockPrices, 60000);

    return () => clearInterval(interval);
  }, [stocks]);

  return { stocks: updatedStocks, loading, error };
};