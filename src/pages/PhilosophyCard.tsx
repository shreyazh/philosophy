import { Link } from "react-router-dom";
import { PhilosophicalSchool } from "../types/philosophy";
import {
  User,
  MapPin,
  Clock,
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";

interface PhilosophyCardProps {
  school: PhilosophicalSchool;
}

export function PhilosophyCard({ school }: PhilosophyCardProps) {
  return (
    <Link
      to={`/school/${school.id}`}
      className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
    >
      {/* Color header */}
      <div className="h-2" style={{ backgroundColor: school.color }}></div>

      <div className="p-6">
        {/* Title & meta */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {school.name}
          </h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{school.years}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{school.region}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          {school.description}
        </p>

        {/* Key Ideas */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb size={16} className="text-yellow-600" />
            <h4 className="font-semibold text-gray-800">Key Ideas</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {school.keyIdeas.map((idea, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {idea}
              </span>
            ))}
          </div>
        </div>

        {/* Major Thinkers */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <User size={16} className="text-blue-600" />
            <h4 className="font-semibold text-gray-800">Major Thinkers</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {school.majorThinkers.map((thinker, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {thinker}
              </span>
            ))}
          </div>
        </div>

        {/* Influences & Challenges */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={16} className="text-green-600" />
              <h4 className="font-semibold text-gray-800 text-sm">
                Influenced By
              </h4>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              {school.influences.map((inf, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-green-600 mt-1">•</span>
                  <span>{inf}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target size={16} className="text-red-600" />
              <h4 className="font-semibold text-gray-800 text-sm">
                Challenged
              </h4>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              {school.challenged.map((c, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-red-600 mt-1">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legacy */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen size={16} className="text-purple-600" />
            <h4 className="font-semibold text-gray-800">Legacy</h4>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            {school.legacy}
          </p>
        </div>
      </div>
    </Link>
  );
}
