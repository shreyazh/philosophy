import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Search, Filter } from 'lucide-react';
import { challengesData } from '../data/challengesData';

export function ChallengesListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('All');

  const periods = ['All', ...Array.from(new Set(challengesData.map(c => c.period))).sort()];

  const filteredChallenges = challengesData.filter(challenge => {
    const matchesSearch = searchTerm === '' || 
      challenge.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      challenge.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPeriod = selectedPeriod === 'All' || challenge.period === selectedPeriod;

    return matchesSearch && matchesPeriod;
  });

  return (
    <div className="min-h-screen bg-gray-50 max-w-6xl mx-auto w-full">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Zap size={48} className="text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Philosophical Challenges</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the great debates and intellectual conflicts that advanced philosophy
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">Search & Filter</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search challenges..."
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
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredChallenges.length} {filteredChallenges.length === 1 ? 'challenge' : 'challenges'} found
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredChallenges.map((challenge) => (
            <Link
              key={challenge.id}
              to={`/challenge/${challenge.id}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                    <Zap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{challenge.name}</h3>
                    <p className="text-sm text-gray-600">{challenge.period}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3">{challenge.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Challenger:</span>
                    <span className="text-gray-800">{challenge.challenger}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Challenged:</span>
                    <span className="text-gray-800">{challenge.challenged}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredChallenges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No challenges match your current filters.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
