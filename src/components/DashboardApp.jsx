// import React, { useState, useEffect } from 'react';
// // import { Header } from './components/layout/Header';
// import { Dashboard } from './components/dashboard/Dashboard';
// import { StockList } from './components/stocks/StockList';
// import { StockForm } from './components/forms/StockForm';
// import { MOCK_STOCKS, simulatePriceUpdate } from './utils/mockData';
// import { calculatePortfolioMetrics } from './utils/stockCalculations';


// export function DashboardApp() {
//   const [baseStocks, setBaseStocks] = useState(MOCK_STOCKS);
//   const [editingStock, setEditingStock] = useState(null);
//   const [showForm, setShowForm] = useState(false);

//   // Simulate real-time price updates
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBaseStocks((currentStocks) =>
//         currentStocks.map((stock) => ({
//           ...stock,
//           currentPrice: simulatePriceUpdate(stock.currentPrice),
//         }))
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleAddStock = (stockData) => {
//     const newStock = {
//       id: Date.now().toString(),
//       ...stockData,
//       currentPrice: stockData.buyPrice,
//     };
//     setBaseStocks([...baseStocks, newStock]);
//   };

//   const handleEditStock = (stockData) => {
//     setBaseStocks(
//       baseStocks.map((stock) =>
//         stock.id === editingStock?.id
//           ? { ...stock, ...stockData }
//           : stock
//       )
//     );
//     setEditingStock(null);
//   };

//   const handleDeleteStock = (id) => {
//     setBaseStocks(baseStocks.filter((stock) => stock.id !== id));
//   };

//   const calculateMetrics = () => {
//   const totalValue = stocks.reduce(
//     (sum, stock) => sum + stock.currentPrice * stock.quantity,
//     0
//   );

//   const totalGainLoss = stocks.reduce(
//     (sum, stock) =>
//       sum + (stock.currentPrice - stock.buyPrice) * stock.quantity,
//     0
//   );

//   const performanceMetrics = stocks.map((stock) => ({
//     ...stock,
//     performance: (stock.currentPrice - stock.buyPrice) / stock.buyPrice,
//   }));

//   const topPerformer =
//     stocks.length > 0
//       ? performanceMetrics.reduce((a, b) =>
//           a.performance > b.performance ? a : b
//         )
//       : null;

//   const worstPerformer =
//     stocks.length > 0
//       ? performanceMetrics.reduce((a, b) =>
//           a.performance < b.performance ? a : b
//         )
//       : null;

//   return {
//     totalValue,
//     totalGainLoss,
//     topPerformer,
//     worstPerformer,
//     numberOfStocks: stocks.length,
//   };
// };

//   return (
//     <>


//     <div className="min-h-screen bg-gray-100">
//       <Header 
//         onAddClick={() => setShowForm(true)}
//         loading={false}
//       />
      
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <Dashboard 
//           metrics={calculatePortfolioMetrics(baseStocks)} 
//           loading={false}
//         />

//         <StockList
//           stocks={baseStocks}
//           onEdit={(stock) => {
//             setEditingStock(stock);
//             setShowForm(true);
//           }}
//           onDelete={handleDeleteStock}
//         />

//         {showForm && (
//           <StockForm
//             stock={editingStock}
//             onSubmit={editingStock ? handleEditStock : handleAddStock}
//             onClose={() => {
//               setShowForm(false);
//               setEditingStock(null);
//             }}
//             loading={false}
//           />
//         )}
//       </main>
//     </div>
//     </>
//   );
// }

// export default DashboardApp;