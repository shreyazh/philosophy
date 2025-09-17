import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Lightbulb, Search, Filter } from "lucide-react";
import { ideasData } from "../data/ideasData";
import { allSchools } from "../data/philosophyData";

export function IdeasListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("All");

  // Only show schools that have at least one idea
  const ideaSchoolIds = new Set(ideasData.map((idea) => idea.originSchool));
  const schools = [
    "All",
    ...allSchools
      .filter((s) => ideaSchoolIds.has(s.id))
      .map((s) => s.name)
      .sort(),
  ];

  const filteredIdeas = ideasData.filter((idea) => {
    const matchesSearch =
      searchTerm === "" ||
      idea.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchTerm.toLowerCase());

    const originSchool = allSchools.find((s) => s.id === idea.originSchool);
    const matchesSchool =
      selectedSchool === "All" ||
      (originSchool && originSchool.name === selectedSchool);

    return matchesSearch && matchesSchool;
  });

  return (
    <div className="min-h-screen bg-gray-50 max-w-6xl mx-auto w-full">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Lightbulb size={48} className="text-yellow-600" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center sm:text-center">
            Philosophical Ideas
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 text-center sm:text-center">
            Discover the fundamental concepts that have shaped human
            understanding
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">
              Search & Filter
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search ideas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {schools.map((school) => (
                <option key={school} value={school}>
                  {school}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredIdeas.length}{" "}
            {filteredIdeas.length === 1 ? "idea" : "ideas"} found
          </p>
        </div>

        {/* Ideas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((idea) => {
            const originSchool = allSchools.find(
              (s) => s.id === idea.originSchool
            );
            return (
              <Link
                key={idea.id}
                to={`/idea/${idea.id}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                      <Lightbulb size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {idea.name}
                      </h3>
                      {originSchool && (
                        <p className="text-sm text-gray-600">
                          {originSchool.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {idea.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-2">
                        Modern Applications:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {idea.modernApplications
                          .slice(0, 2)
                          .map((app, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs"
                            >
                              {app}
                            </span>
                          ))}
                        {idea.modernApplications.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            +{idea.modernApplications.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredIdeas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No ideas match your current filters.
            </p>
            <p className="text-gray-400 mt-2">
              Try adjusting your search terms or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
