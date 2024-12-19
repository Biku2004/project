export const calculateStockMetrics = (stock) => {
  const gainLoss = (stock.currentPrice - stock.buyPrice) * stock.quantity;
  const gainLossPercentage = ((stock.currentPrice - stock.buyPrice) / stock.buyPrice) * 100;
  const totalValue = stock.currentPrice * stock.quantity;
  const performance = (stock.currentPrice - stock.buyPrice) / stock.buyPrice;
  
  return {
    gainLoss,
    gainLossPercentage,
    totalValue,
    performance
  };
};

export const calculatePortfolioMetrics = (stocks) => {
  const stockMetrics = stocks.map(stock => ({
    ...stock,
    ...calculateStockMetrics(stock)
  }));

  const totalValue = stockMetrics.reduce((sum, stock) => sum + stock.totalValue, 0);
  const totalGainLoss = stockMetrics.reduce((sum, stock) => sum + stock.gainLoss, 0);
  
  const sortedByPerformance = [...stockMetrics].sort((a, b) => b.performance - a.performance);
  
  return {
    totalValue,
    totalGainLoss,
    topPerformer: sortedByPerformance[0] || null,
    worstPerformer: sortedByPerformance[sortedByPerformance.length - 1] || null,
    stockCount: stocks.length
  };
};