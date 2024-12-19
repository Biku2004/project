// Generate random value between min and max
const randomValue = (min, max) => {
  return Math.random() * (max - min) + min;
};

// Generate initial dataset
export const generateInitialData = (count = 50) => {
  return Array.from({ length: count }, () => ({
    value: randomValue(30, 70),
    timestamp: Date.now()
  }));
};

// Generate new data point with some correlation to previous value
export const generateNewDataPoint = () => {
  const trend = Math.random() > 0.5 ? 1 : -1;
  const volatility = randomValue(0, 5);
  
  return {
    value: Math.max(30, Math.min(70, 50 + (trend * volatility))),
    timestamp: Date.now()
  };
};