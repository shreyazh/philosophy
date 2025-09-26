import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Clock,
  MapPin,
  BookOpen,
  Lightbulb,
  ExternalLink,
  Quote,
} from "lucide-react";
import { philosophersData } from "../data/philosophersData";
import { allSchools } from "../data/philosophyData";
import { ideasData } from "../data/ideasData";

export function PhilosopherPage() {
  const { id } = useParams<{ id: string }>();
  const philosopher = philosophersData.find((p) => p.id === id);

  if (!philosopher) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Philosopher Not Found
          </h1>
          <Link
            to="/philosophers"
            className="text-blue-600 hover:text-blue-800"
          >
            Return to Philosophers
          </Link>
        </div>
      </div>
    );
  }

  const philosopherSchools = allSchools.filter((s) =>
    philosopher.schools.includes(s.id)
  );
  const philosopherIdeas = ideasData.filter((i) =>
    i.keyThinkers.includes(philosopher.id)
  );
  const influenced = philosophersData.filter((p) =>
    philosopher.influenced.includes(p.id)
  );
  const influences = philosophersData.filter((p) =>
    philosopher.influences.includes(p.id)
  );

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
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full m-1 flex items-center justify-center">
              <User className="text-white" size={18} />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800">
                {philosopher.name}
              </h1>
              <div className="flex flex-wrap gap-6 text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{philosopher.years}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{philosopher.nationality}</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                {philosopher.biography}
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Works */}
            {philosopher.keyWorks && philosopher.keyWorks.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="text-purple-600" size={24} />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Key Works
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {philosopher.keyWorks.map((work, index) => (
                    <div key={index} className="p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium text-gray-800">{work}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Philosophical Schools */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Philosophical Schools
              </h2>
              <div className="space-y-4">
                {philosopherSchools.map((school) => (
                  <Link
                    key={school.id}
                    to={`/school/${school.id}`}
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: school.color }}
                      ></div>
                      <h3 className="font-semibold text-gray-800">
                        {school.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      {school.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Key Ideas */}
            {philosopherIdeas.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="text-yellow-600" size={24} />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Key Ideas
                  </h2>
                </div>
                <div className="space-y-4">
                  {philosopherIdeas.map((idea) => (
                    <Link
                      key={idea.id}
                      to={`/idea/${idea.id}`}
                      className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                    >
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {idea.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {idea.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Famous Quotes */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Quote className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">
                  Famous Quotes
                </h2>
              </div>
              <div className="space-y-4">
                {philosopher.quotes.map((quote, index) => (
                  <blockquote
                    key={index}
                    className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500"
                  >
                    <p className="text-gray-700 italic">"{quote}"</p>
                    <footer className="text-sm text-gray-600 mt-2">
                      — {philosopher.name}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Influences */}
            {influences.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Influenced By
                </h3>
                <div className="space-y-3">
                  {influences.map((influence) => (
                    <Link
                      key={influence.id}
                      to={`/philosopher/${influence.id}`}
                      className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <div className="font-medium text-gray-800">
                        {influence.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {influence.years}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Influenced */}
            {influenced.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Influenced
                </h3>
                <div className="space-y-3">
                  {influenced.map((influencedPhilosopher) => (
                    <Link
                      key={influencedPhilosopher.id}
                      to={`/philosopher/${influencedPhilosopher.id}`}
                      className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <div className="font-medium text-gray-800">
                        {influencedPhilosopher.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {influencedPhilosopher.years}
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
                {philosopher.externalLinks.map((link, index) => (
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
