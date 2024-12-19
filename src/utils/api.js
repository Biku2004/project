// Alpha Vantage API integration
const API_KEY = 'RYO0372KUJ8PJVDU';
const BASE_URL = 'https://www.alphavantage.co/query';

export const fetchStockPrice = async (symbol) => {
  try {
    const response = await fetch(
      `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    if (data['Global Quote'] && data['Global Quote']['05. price']) {
      return Number(data['Global Quote']['05. price']);
    }
    
    if (data.Note) {
      console.warn('API call frequency exceeded:', data.Note);
      return null;
    }

    throw new Error('Invalid API response format');
  } catch (error) {
    console.error(`Error fetching price for ${symbol}:`, error);
    return null;
  }
};