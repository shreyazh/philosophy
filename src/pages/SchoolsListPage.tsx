import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Filter } from 'lucide-react';
import { allSchools } from '../data/philosophyData';

export function SchoolsListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const periods = ['All', ...Array.from(new Set(allSchools.map(s => s.period))).sort()];
  const regions = ['All', ...Array.from(new Set(allSchools.map(s => s.region.split(', ')[0]))).sort()];

  const filteredSchools = allSchools.filter(school => {
    const matchesSearch = searchTerm === '' || 
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPeriod = selectedPeriod === 'All' || school.period === selectedPeriod;
    const matchesRegion = selectedRegion === 'All' || school.region.includes(selectedRegion);

    return matchesSearch && matchesPeriod && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <BookOpen size={48} className="text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Philosophical Schools</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the major schools of thought that have shaped philosophical inquiry
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">Search & Filter</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search schools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {periods.map(period => (
                <option key={period} value={period}>{period}</option>
              ))}
            </select>

            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredSchools.length} {filteredSchools.length === 1 ? 'school' : 'schools'} found
          </p>
        </div>

        {/* Schools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchools.map((school) => (
            <Link
              key={school.id}
              to={`/school/${school.id}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="h-2" style={{ backgroundColor: school.color }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{school.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span>{school.years}</span>
                  <span>•</span>
                  <span>{school.region}</span>
                </div>
                <p className="text-gray-700 mb-4 line-clamp-3">{school.description}</p>
                
                <div className="space-y-2">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Key Ideas:</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {school.keyIdeas.slice(0, 3).map((idea, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {idea}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredSchools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No schools match your current filters.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}