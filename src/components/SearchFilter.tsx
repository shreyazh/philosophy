import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedRegion: string;
  onRegionChange: (region: string) => void;
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
}

export function SearchFilter({
  searchTerm,
  onSearchChange,
  selectedRegion,
  onRegionChange,
  selectedPeriod,
  onPeriodChange
}: SearchFilterProps) {
  const regions = ['All Regions', 'Greece', 'Europe', 'Asia', 'Britain', 'France', 'Germany', 'United States'];
  const periods = ['All Periods', 'Ancient', 'Medieval', 'Renaissance', 'Enlightenment', '19th Century', 'Contemporary'];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-6xl mx-auto w-full">
      <div className="flex items-center gap-2 mb-4">
        <Filter size={20} className="text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-800">Search & Filter</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search schools, thinkers, ideas..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Region Filter */}
        <select
          value={selectedRegion}
          onChange={(e) => onRegionChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>

        {/* Period Filter */}
        <select
          value={selectedPeriod}
          onChange={(e) => onPeriodChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {periods.map(period => (
            <option key={period} value={period}>{period}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
