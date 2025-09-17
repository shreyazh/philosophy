import React from 'react';
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Zap, ExternalLink, Target, TrendingUp, Award } from 'lucide-react';
import { challengesData } from '../data/challengesData';
import { ideasData } from "../data/ideasData";
import { allSchools } from "../data/philosophyData";
export function ChallengePage() {
  const { id } = useParams<{ id: string }>();
  const challenge = challengesData.find(c => c.id === id);
  

  if (!challenge) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center max-w-7xl mx-auto w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Challenge Not Found</h1>
          <Link to="/challenges" className="text-blue-600 hover:text-blue-800">Return to Challenges</Link>
        </div>
      </div>
    );
  }
 // Back navigation is handled globally with scroll restoration
  return (
    <div className="min-h-screen bg-gray-50 max-w-6xl mx-auto w-full">
      <div className="container mx-auto px-6 py-8">
        <button
                   onClick={() => window.history.back()}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
                >
                  <ArrowLeft size={20} /> Move Back
                </button>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-7">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
              <Zap className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{challenge.name}</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">{challenge.description}</p>
          </div>

      <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* The Conflict */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">The Conflict</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="text-red-600" size={20} />
                    <h3 className="font-semibold text-gray-800">Challenger</h3>
                  </div>
                  <p className="text-gray-700">{challenge.challenger}</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-blue-600" size={20} />
                    <h3 className="font-semibold text-gray-800">Challenged</h3>
                  </div>
                  <p className="text-gray-700">{challenge.challenged}</p>
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-green-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Outcome</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">{challenge.outcome}</p>
            </div>

            {/* Historical Significance */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Historical Significance</h2>
              <p className="text-gray-700 leading-relaxed text-justify">{challenge.significance}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Period Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Historical Context</h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-800 mb-2">Period</div>
                <div className="text-gray-700">{challenge.period}</div>
              </div>
            </div>

            {/* External Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <ExternalLink className="text-blue-600" size={20} />
                <h3 className="text-lg font-bold text-gray-800">Learn More</h3>
              </div>
              <div className="space-y-3">
                {challenge.externalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-800 group-hover:text-blue-800">{link.title}</div>
                      <div className="text-xs text-gray-500 capitalize">{link.type}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
