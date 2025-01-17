export const MOCK_STOCKS = [
  {
    id: '1',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    quantity: 1,
    buyPrice: 150.00,
    currentPrice: 175.50,
  },
  {
    id: '2',
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    quantity: 1,
    buyPrice: 280.00,
    currentPrice: 305.20,
  },
  {
    id: '3',
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    quantity: 1,
    buyPrice: 2500.00,
    currentPrice: 2650.75,
  },
  {
    id: '4',
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    quantity: 1,
    buyPrice: 3200.00,
    currentPrice: 3350.25,
  },
  {
    id: '5',
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    quantity: 1,
    buyPrice: 750.00,
    currentPrice: 825.30,
  },
];

export const simulatePriceUpdate = (currentPrice) => {
  const changePercent = (Math.random() - 0.5) * 0.02; // -1% to +1% change
  return Number((currentPrice * (1 + changePercent)).toFixed(2));
};