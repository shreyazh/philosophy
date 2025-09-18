import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import { allSchools } from "../data/philosophyData";
import { PhilosophicalSchool } from "../types/philosophy";
import { PhilosophyGrid } from "./PhilosophyGrid";

export function SchoolsListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const periods = [
    "All",
    ...Array.from(new Set(allSchools.map((s) => s.period))).sort(),
  ];
  const regions = [
    "All",
    ...Array.from(
      new Set(allSchools.map((s) => s.region.split(", ")[0]))
    ).sort(),
  ];

  const filteredSchools = allSchools.filter((school) => {
    const matchesSearch =
      searchTerm === "" ||
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPeriod =
      selectedPeriod === "All" || school.period === selectedPeriod;
    const matchesRegion =
      selectedRegion === "All" || school.region.includes(selectedRegion);

    return matchesSearch && matchesPeriod && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gray-50 max-w-6xl mx-auto w-full">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Philosophical Schools
          </h1>
          <p className="text-lg text-gray-600">
            Explore the major schools of thought that have shaped philosophy
          </p>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">
              Search & Filter
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
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
              {periods.map((period) => (
                <option key={period} value={period}>
                  {period}
                </option>
              ))}
            </select>

            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-gray-600 max-w-6xl mx-auto w-full">
            {filteredSchools.length} {filteredSchools.length === 1 ? 'school' : 'schools'} found
          </p><br/>
        {/* Schools grid */}
        <PhilosophyGrid schools={filteredSchools} />
      </div>
    </div>
  );
}
