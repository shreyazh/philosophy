import React from 'react';
import { Header } from '../components/Header';
import { Timeline } from '../components/Timeline';
import { SearchFilter } from '../components/SearchFilter';
import { PhilosophyGrid } from '../components/PhilosophyGrid';
import { usePhilosophyFilter } from '../hooks/usePhilosophyFilter';
import { philosophyData } from '../data/philosophyData';

export function HomePage() {
  const {
    searchTerm,
    setSearchTerm,
    selectedRegion,
    setSelectedRegion,
    selectedPeriodFilter,
    setSelectedPeriodFilter,
    selectedTimelinePeriod,
    setSelectedTimelinePeriod,
    filteredSchools
  } = usePhilosophyFilter(philosophyData);

  const handleTimelinePeriodSelect = (periodId: string) => {
    if (selectedTimelinePeriod === periodId) {
      setSelectedTimelinePeriod(null);
    } else {
      setSelectedTimelinePeriod(periodId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <Timeline 
          periods={philosophyData}
          selectedPeriod={selectedTimelinePeriod}
          onPeriodSelect={handleTimelinePeriodSelect}
        />
        
        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
          selectedPeriod={selectedPeriodFilter}
          onPeriodChange={setSelectedPeriodFilter}
        />

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 max-w-6xl mx-auto w-full">
            {selectedTimelinePeriod 
              ? `${philosophyData.find(p => p.id === selectedTimelinePeriod)?.name} Schools`
              : 'All Philosophical Schools'
            }
          </h2>
          <p className="text-gray-600 max-w-6xl mx-auto w-full">
            {filteredSchools.length} {filteredSchools.length === 1 ? 'school' : 'schools'} found
          </p>
        </div>

        {filteredSchools.length > 0 ? (
          <PhilosophyGrid schools={filteredSchools} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No philosophical schools match your current filters.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </main>
    </div>
  );
}
