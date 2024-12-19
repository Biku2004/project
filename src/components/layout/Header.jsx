import React from 'react';
import { PlusCircle } from 'lucide-react';

export const Header = ({ onAddClick, loading }) => (
  <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200 mb-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Portfolio Tracker</h1>
        <button
          onClick={onAddClick}
          className="w-full sm:w-auto flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          disabled={loading}
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          Add Stock
        </button>
      </div>
    </div>
  </div>
);