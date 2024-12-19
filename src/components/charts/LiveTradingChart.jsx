import React, { useState, useEffect, useCallback } from 'react';
import { generateInitialData, generateNewDataPoint } from '../../utils/chartUtils';

const LiveTradingChart = () => {
  const [data, setData] = useState(generateInitialData());
  const [dimensions] = useState({ width: 1200, height: 400 });

  const updateData = useCallback(() => {
    setData(currentData => {
      const newData = [...currentData.slice(1), generateNewDataPoint()];
      return newData;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(updateData, 1000);
    return () => clearInterval(interval);
  }, [updateData]);

  const xScale = dimensions.width / (data.length - 1);
  const yScale = dimensions.height / (Math.max(...data.map(d => d.value)) * 1.1);

  const line = data.reduce((acc, point, i) => {
    const x = i * xScale;
    const y = dimensions.height - (point.value * yScale);
    return `${acc} ${i === 0 ? 'M' : 'L'} ${x},${y}`;
  }, '');

  const gradient = (
    <defs>
      <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#646cff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#646cff" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#646cff" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#646cff" stopOpacity="0.05" />
      </linearGradient>
    </defs>
  );

  const area = `${line} L ${dimensions.width},${dimensions.height} L 0,${dimensions.height} Z`;

  return (
    <div className="w-full h-full bg-slate-900/50 rounded-lg overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="none"
        className="transform transition-transform duration-300"
      >
        {gradient}
        
        {/* Grid lines */}
        {[...Array(10)].map((_, i) => (
          <line
            key={`grid-${i}`}
            x1="0"
            y1={i * (dimensions.height / 10)}
            x2={dimensions.width}
            y2={i * (dimensions.height / 10)}
            stroke="#1e293b"
            strokeWidth="1"
          />
        ))}

        {/* Area under the line */}
        <path
          d={area}
          fill="url(#areaGradient)"
          className="transition-all duration-300"
        />

        {/* Main line */}
        <path
          d={line}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          className="transition-all duration-300"
        />

        {/* Data points */}
        {data.map((point, i) => (
          <circle
            key={i}
            cx={i * xScale}
            cy={dimensions.height - (point.value * yScale)}
            r="4"
            fill="#646cff"
            className="transition-all duration-300"
          />
        ))}
      </svg>
    </div>
  );
};

export default LiveTradingChart;