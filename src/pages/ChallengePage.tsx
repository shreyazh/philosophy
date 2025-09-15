import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Zap, ExternalLink, Target, TrendingUp, Award } from 'lucide-react';
import { challengesData } from '../data/challengesData';

export function ChallengePage() {
  const { id } = useParams<{ id: string }>();
  const challenge = challengesData.find(c => c.id === id);

  if (!challenge) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Challenge Not Found</h1>
          <Link to="/challenges" className="text-blue-600 hover:text-blue-800">Return to Challenges</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <Link 
          to="/challenges" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Challenges
        </Link>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{challenge.name}</h1>
              <p className="text-lg text-gray-700 leading-relaxed">{challenge.description}</p>
            </div>
          </div>
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
              <p className="text-gray-700 leading-relaxed">{challenge.outcome}</p>
            </div>

            {/* Historical Significance */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Historical Significance</h2>
              <p className="text-gray-700 leading-relaxed">{challenge.significance}</p>
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