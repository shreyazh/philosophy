import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Lightbulb, Users, BookOpen, ExternalLink, Target, Zap, TrendingUp } from "lucide-react";
import { ideasData } from "../data/ideasData";
import { allSchools } from "../data/philosophyData";
import { philosophersData } from "../data/philosophersData";

export function IdeaPage() {
  const { id } = useParams<{ id: string }>();
  const idea = ideasData.find((i) => i.id === id);
  

  if (!idea) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Idea Not Found
          </h1>
          <Link to="/ideas" className="text-blue-600 hover:text-blue-800">
            Return to Ideas
          </Link>
        </div>
      </div>
    );
  }

  const originSchool = allSchools.find((s) => 
    s.id === idea.originSchool
  );
  const keyThinkers = philosophersData.filter((p) =>
    idea.keyThinkers.includes(p.id)
  );
  const relatedIdeas = ideasData.filter((i) =>
    idea.relatedIdeas.includes(i.id)
  );

  // Back navigation is handled globally with scroll restoration
  
  return (
    <div className="min-h-screen bg-gray-50 max-w-6xl mx-auto w-full">
      <div className="container mx-auto px-6 py-8">
        <button
                   onClick={() => window.history.back()}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
                >
                  <ArrowLeft size={20} />Move Back
                </button>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-7">
          <div className="flex items-start gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full m-1 flex items-center justify-center">
              <Lightbulb className="text-white" size={18} />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800">
                {idea.name}
              </h1>
              <p className="text-gray-700 leading-relaxed text-justify">
                {idea.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Origin School */}
            {originSchool && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Origin School
                </h2>
                <Link
                  to={`/school/${originSchool.id}`}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: originSchool.color }}
                    ></div>
                    <h3 className="font-semibold text-gray-800">
                      {originSchool.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    {originSchool.description}
                  </p>
                </Link>
              </div>
            )}

            {/* Key Thinkers */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">
                  Key Thinkers
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {keyThinkers.map((thinker) => (
                  <Link
                    key={thinker.id}
                    to={`/philosopher/${thinker.id}`}
                    className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {thinker.name}
                    </h3>
                    <p className="text-sm text-gray-600">{thinker.years}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Modern Applications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="text-green-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">
                  Modern Applications
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {idea.modernApplications.map((application, index) => (
                  <div key={index} className="p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-800">
                      {application}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-red-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">
                  What It Challenged
                </h2>
              </div>
              <ul className="space-y-2">
                {idea.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Influences */}
          {idea.influences && idea.influences.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="text-green-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Influences</h2>
              </div>
              <ul className="space-y-2">
                {idea.influences.map((influence, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-gray-700">{influence}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Developments */}
          {idea.developments && idea.developments.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Developments</h2>
              <ul className="grid md:grid-cols-2 gap-2">
                {idea.developments.map((dev, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">{dev}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Legacy */}
          {idea.legacy && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Legacy & Impact</h2>
              <p className="text-gray-700 leading-relaxed">{idea.legacy}</p>
            </div>
          )}

          {/* Key Texts */}
          {idea.keyTexts && idea.keyTexts.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-purple-600" size={20} />
                <h3 className="text-lg font-bold text-gray-800">Key Texts</h3>
              </div>
              <ul className="space-y-2">
                {idea.keyTexts.map((text, idx) => (
                  <li key={idx} className="text-gray-700 text-sm">{text}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Ideas */}
            {relatedIdeas.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Related Ideas
                </h3>
                <div className="space-y-3">
                  {relatedIdeas.map((relatedIdea) => (
                    <Link
                      key={relatedIdea.id}
                      to={`/idea/${relatedIdea.id}`}
                      className="block p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                    >
                      <div className="font-medium text-gray-800">
                        {relatedIdea.name}
                      </div>
                      <div className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {relatedIdea.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* External Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <ExternalLink className="text-blue-600" size={20} />
                <h3 className="text-lg font-bold text-gray-800">Learn More</h3>
              </div>
              <div className="space-y-3">
                {idea.externalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <ExternalLink
                      size={16}
                      className="text-gray-400 group-hover:text-blue-600"
                    />
                    <div>
                      <div className="font-medium text-gray-800 group-hover:text-blue-800">
                        {link.title}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {link.type}
                      </div>
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
