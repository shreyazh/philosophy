import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Search, Filter, User } from 'lucide-react';
import { philosophersData } from '../data/philosophersData';

export function PhilosophersListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('All');
  const [selectedCentury, setSelectedCentury] = useState('All');

  const nationalities = ['All', ...Array.from(new Set(philosophersData.map(p => p.nationality))).sort()];
  const centuries = ['All', 'Ancient', 'Medieval', 'Renaissance', 'Modern', 'Contemporary'];

  const filteredPhilosophers = philosophersData.filter(philosopher => {
    const matchesSearch = searchTerm === '' || 
      philosopher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      philosopher.biography.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesNationality = selectedNationality === 'All' || 
      philosopher.nationality === selectedNationality;

    // Helper to extract century from years string
    function getCentury(years: string): string | null {
      // Match BCE years like "384–322 BCE"
      const bceMatch = years.match(/(\d+)[–-](\d+)\s*BCE/);
      if (bceMatch) {
        // Use the later year (the smaller number) for BCE
        const year = parseInt(bceMatch[2], 10);
        const century = Math.ceil(year / 100);
        return `${century} BCE`;
      }
      // Match CE years like "1724–1804"
      const ceMatch = years.match(/(\d{3,4})[–-](\d{3,4})/);
      if (ceMatch) {
        // Use the earlier year for CE
        const year = parseInt(ceMatch[1], 10);
        const century = Math.ceil(year / 100);
        return `${century}`;
      }
      // Match single BCE year
      const singleBce = years.match(/(\d+)\s*BCE/);
      if (singleBce) {
        const year = parseInt(singleBce[1], 10);
        const century = Math.ceil(year / 100);
        return `${century} BCE`;
      }
      // Match single CE year
      const singleCe = years.match(/(\d{3,4})/);
      if (singleCe) {
        const year = parseInt(singleCe[1], 10);
        const century = Math.ceil(year / 100);
        return `${century}`;
      }
      return null;
    }

    const philosopherCentury = getCentury(philosopher.years);

    const matchesCentury =
      selectedCentury === 'All' ||
      (selectedCentury === 'Ancient' && philosopherCentury && philosopherCentury.includes('BCE')) ||
      (selectedCentury === 'Medieval' && philosopherCentury && !philosopherCentury.includes('BCE') && ['5','6','7','8','9','10','11','12','13','14','15'].includes(philosopherCentury)) ||
      (selectedCentury === 'Renaissance' && philosopherCentury && !philosopherCentury.includes('BCE') && ['15','16'].includes(philosopherCentury)) ||
      (selectedCentury === 'Modern' && philosopherCentury && !philosopherCentury.includes('BCE') && ['17','18','19'].includes(philosopherCentury)) ||
      (selectedCentury === 'Contemporary' && philosopherCentury && !philosopherCentury.includes('BCE') && ['20','21'].includes(philosopherCentury));

    return matchesSearch && matchesNationality && matchesCentury;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Users size={48} className="text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Philosophers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the great minds that shaped human thought throughout history
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
                placeholder="Search philosophers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedNationality}
              onChange={(e) => setSelectedNationality(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {nationalities.map(nationality => (
                <option key={nationality} value={nationality}>{nationality}</option>
              ))}
            </select>

            <select
              value={selectedCentury}
              onChange={(e) => setSelectedCentury(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {centuries.map(century => (
                <option key={century} value={century}>{century}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredPhilosophers.length} {filteredPhilosophers.length === 1 ? 'philosopher' : 'philosophers'} found
          </p>
        </div>

        {/* Philosophers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhilosophers.map((philosopher) => (
            <Link
              key={philosopher.id}
              to={`/philosopher/${philosopher.id}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{philosopher.name}</h3>
                    <p className="text-sm text-gray-600">{philosopher.years} • {philosopher.nationality}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3">{philosopher.biography}</p>
                
                {philosopher.keyWorks && philosopher.keyWorks.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Works:</h4>
                    <div className="flex flex-wrap gap-2">
                      {philosopher.keyWorks.slice(0, 2).map((work, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                          {work}
                        </span>
                      ))}
                      {philosopher.keyWorks.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          +{philosopher.keyWorks.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {philosopher.keyIdeas.slice(0, 3).map((idea, index) => (
                    <span key={index} className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                      {idea.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPhilosophers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No philosophers match your current filters.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}