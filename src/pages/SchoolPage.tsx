// SchoolPage.tsx
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Lightbulb,
  GraduationCap,
  BookOpen,
  ExternalLink,
  Clock,
  MapPin,
  Target,
  TrendingUp,
} from "lucide-react";
import { allSchools } from "../data/philosophyData";
import { philosophersData } from "../data/philosophersData";
import { ideasData } from "../data/ideasData";

export function SchoolPage() {
  const { id } = useParams<{ id: string }>();
  const school = allSchools.find((s) => s.id === id);
  

  if (!school) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            School Not Found
          </h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const schoolPhilosophers = philosophersData.filter((p) =>
    p.schools.includes(school.id)
  );
  
  const relatedSchools = allSchools.filter((s) =>
    school.relatedSchools.includes(s.id)
  );

  // Back navigation is handled globally with scroll restoration

  // Try to connect school key idea labels to concrete ideas in ideasData
  function findIdeaForLabel(label: string) {
    const normalized = label.trim().toLowerCase();
    const slug = normalized
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    // 1) Exact name match (case-insensitive)
    let found = ideasData.find((idea) => idea.name.trim().toLowerCase() === normalized);
    if (found) return found;

    // 2) ID equals slug
    found = ideasData.find((idea) => idea.id === slug);
    if (found) return found;

    // 3) Related ideas contain the slug
    found = ideasData.find((idea) => idea.relatedIdeas?.some((r) => r.toLowerCase() === slug));
    if (found) return found;

    // 4) Name contains the label (loose contains)
    found = ideasData.find((idea) => idea.name.toLowerCase().includes(normalized));
    if (found) return found;

    return undefined;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <button
           onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />Move Back
        </button>

        {/* School Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-7">
          <div className="flex items-start gap-2 mb-2">
            <div
              className="w-8 h-8 rounded-full m-1 flex items-center justify-center"
              style={{ backgroundColor: school.color }}
            >
              <GraduationCap className="text-white" size={18} />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800">
                {school.name}
              </h1>
              <div className="flex flex-wrap text-gray-600 mb-4 gap-4">
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{school.years}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{school.region}</span>
                </div>
              </div>
              <p className="text-md text-gray-700 leading-relaxed text-justify">
                {school.detailedDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            
            {/* Key Ideas */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-yellow-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Key Ideas</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {school.keyIdeas.map((ideaLabel, index) => {
                  const linked = findIdeaForLabel(ideaLabel);
                  const content = (
                    <span className="font-medium text-gray-800">
                      {linked ? linked.name : ideaLabel}
                    </span>
                  );
                  return (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      {linked ? (
                        <Link to={`/idea/${linked.id}`} className="hover:underline">
                          {content}
                        </Link>
                      ) : (
                        content
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Major Thinkers */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">
                  Major Thinkers
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {schoolPhilosophers.map((philosopher) => (
                  <Link
                    key={philosopher.id}
                    to={`/philosopher/${philosopher.id}`}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-200"
                  >
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {philosopher.name}
                    </h3>
                    <p className="text-sm text-gray-600">{philosopher.years}</p>
                    <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                      {philosopher.biography}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Influences & Challenges */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="text-green-600" size={24} />
                  <h2 className="text-xl font-bold text-gray-800">Influences</h2>
                </div>
                <ul className="space-y-2">
                  {school.influences.map((influence, idx) => (
                    <li key={idx} className="flex items-start gap-2">
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
                  {school.challenged.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Legacy */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Legacy & Impact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">{school.legacy}</p>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800">Key Developments:</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {school.developments.map((dev, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{dev}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {relatedSchools.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Related Schools
                </h3>
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
                        <span className="font-medium text-gray-800">
                          {relatedSchool.name}
                        </span>
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
                {school.keyTexts.map((text, idx) => (
                  <li key={idx} className="text-gray-700 text-sm">
                    {text}
                  </li>
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
                {school.externalLinks.map((link, idx) => (
                  <a
                    key={idx}
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
