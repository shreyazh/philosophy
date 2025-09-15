import { useState, useMemo } from 'react';
import { PhilosophicalSchool, PhilosophicalPeriod } from '../types/philosophy';

export function usePhilosophyFilter(periods: PhilosophicalPeriod[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedPeriodFilter, setSelectedPeriodFilter] = useState('All Periods');
  const [selectedTimelinePeriod, setSelectedTimelinePeriod] = useState<string | null>(null);

  const filteredSchools = useMemo(() => {
    let allSchools: PhilosophicalSchool[] = [];
    
    // If a timeline period is selected, only show schools from that period
    if (selectedTimelinePeriod) {
      const period = periods.find(p => p.id === selectedTimelinePeriod);
      if (period) {
        allSchools = period.schools;
      }
    } else {
      // Otherwise, get all schools
      allSchools = periods.flatMap(period => period.schools);
    }

    return allSchools.filter(school => {
      const matchesSearch = searchTerm === '' || 
        school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.keyIdeas.some(idea => idea.toLowerCase().includes(searchTerm.toLowerCase())) ||
        school.majorThinkers.some(thinker => thinker.name.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesRegion = selectedRegion === 'All Regions' || 
        school.region.includes(selectedRegion);

      const matchesPeriod = selectedPeriodFilter === 'All Periods' || 
        school.period === selectedPeriodFilter;

      return matchesSearch && matchesRegion && matchesPeriod;
    });
  }, [periods, searchTerm, selectedRegion, selectedPeriodFilter, selectedTimelinePeriod]);

  return {
    searchTerm,
    setSearchTerm,
    selectedRegion,
    setSelectedRegion,
    selectedPeriodFilter,
    setSelectedPeriodFilter,
    selectedTimelinePeriod,
    setSelectedTimelinePeriod,
    filteredSchools
  };
}