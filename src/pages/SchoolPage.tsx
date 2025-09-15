import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Lightbulb, BookOpen, ExternalLink, Clock, MapPin, Target, TrendingUp } from 'lucide-react';
import { allSchools } from '../data/philosophyData';
import { philosophersData } from '../data/philosophersData';
import { ideasData } from '../data/ideasData';

export function SchoolPage() {
  const { id } = useParams<{ id: string }>();
  const school = allSchools.find(s => s.id === id);

  if (!school) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">School Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">Return to Home</Link>
        </div>
      </div>
    );
  }

  const schoolPhilosophers = philosophersData.filter(p => p.schools.includes(school.id));
  const schoolIdeas = ideasData.filter(i => i.originSchool === school.id);
  const relatedSchools = allSchools.filter(s => school.relatedSchools.includes(s.id));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Timeline
        </Link>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-6">
            <div 
              className="w-16 h-16 rounded-lg flex-shrink-0"
              style={{ backgroundColor: school.color }}
            ></div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{school.name}</h1>
              <div className="flex flex-wrap gap-6 text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{school.years}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{school.region}</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{school.detailedDescription}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Ideas */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-yellow-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Key Ideas</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {school.keyIdeas.map((idea, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-gray-800">{idea}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Major Thinkers */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Major Thinkers</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {schoolPhilosophers.map((philosopher) => (
                  <Link
                    key={philosopher.id}
                    to={`/philosopher/${philosopher.id}`}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-200"
                  >
                    <h3 className="font-semibold text-gray-800 mb-1">{philosopher.name}</h3>
                    <p className="text-sm text-gray-600">{philosopher.years}</p>
                    <p className="text-sm text-gray-700 mt-2 line-clamp-2">{philosopher.biography}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Influences and Challenges */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="text-green-600" size={24} />
                  <h2 className="text-xl font-bold text-gray-800">Influences</h2>
                </div>
                <ul className="space-y-2">
                  {school.influences.map((influence, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700">{influence}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="text-red-600" size={24} />
                  <h2 className="text-xl font-bold text-gray-800">Challenged</h2>
                </div>
                <ul className="space-y-2">
                  {school.challenged.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Legacy */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Legacy & Impact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{school.legacy}</p>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800">Key Developments:</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {school.developments.map((development, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{development}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Schools */}
            {relatedSchools.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Related Schools</h3>
                <div className="space-y-3">
                  {relatedSchools.map((relatedSchool) => (
                    <Link
                      key={relatedSchool.id}
                      to={`/school/${relatedSchool.id}`}
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: relatedSchool.color }}
                        ></div>
                        <span className="font-medium text-gray-800">{relatedSchool.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Key Texts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-purple-600" size={20} />
                <h3 className="text-lg font-bold text-gray-800">Key Texts</h3>
              </div>
              <ul className="space-y-2">
                {school.keyTexts.map((text, index) => (
                  <li key={index} className="text-gray-700 text-sm">{text}</li>
                ))}
              </ul>
            </div>

            {/* External Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <ExternalLink className="text-blue-600" size={20} />
                <h3 className="text-lg font-bold text-gray-800">Learn More</h3>
              </div>
              <div className="space-y-3">
                {school.externalLinks.map((link, index) => (
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