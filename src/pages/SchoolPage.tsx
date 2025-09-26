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

  // Try to connect school key idea labels to concrete ideas in ideasData
  function findIdeaForLabel(label: string) {
    const normalized = label.trim().toLowerCase();
    const slug = normalized.replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

    // 1) Exact name match (case-insensitive)
    let found = ideasData.find(
      (idea) => idea.name.trim().toLowerCase() === normalized
    );
    if (found) return found;

    // 2) ID equals slug
    found = ideasData.find((idea) => idea.id === slug);
    if (found) return found;

    // 3) Related ideas contain the slug
    found = ideasData.find((idea) =>
      idea.relatedIdeas?.some((r) => r.toLowerCase() === slug)
    );
    if (found) return found;

    // 4) Name contains the label (loose contains)
    found = ideasData.find((idea) =>
      idea.name.toLowerCase().includes(normalized)
    );
    if (found) return found;

    return undefined;
  }

  return (
    <div className="min-h-screen bg-gray-50 max-w-6xl mx-auto w-full">
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Move Back
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
              <div className="space-y-4">
                {school.keyIdeas && school.keyIdeas.length > 0 ? (
                  school.keyIdeas.map((ideaLabel, index) => {
                    const linked = findIdeaForLabel(ideaLabel);

                    if (linked) {
                      return (
                        <Link
                          key={linked.id}
                          to={`/idea/${linked.id}`}
                          className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                        >
                          <h3 className="font-semibold text-gray-800 mb-2">
                            {linked.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {linked.description}
                          </p>
                        </Link>
                      );
                    }

                    return (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="font-medium text-gray-800">
                          {ideaLabel}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-gray-500 italic">
                    No key ideas listed yet.
                  </p>
                )}
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
              {schoolPhilosophers && schoolPhilosophers.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {schoolPhilosophers.map((philosopher) => {
                    const hasPage = philosopher?.id;
                    const linkUrl = hasPage
                      ? `/philosopher/${philosopher.id}`
                      : `https://www.google.com/search?q=${encodeURIComponent(
                          philosopher.name
                        )}`;

                    return (
                      <a
                        key={philosopher.id || philosopher.name}
                        href={linkUrl}
                        target={hasPage ? "_self" : "_blank"}
                        rel={hasPage ? undefined : "noopener noreferrer"}
                        className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-200 block"
                      >
                        <h3 className="font-semibold text-gray-800 mb-1">
                          {philosopher.name}
                        </h3>
                        {philosopher.years && (
                          <p className="text-sm text-gray-600">
                            {philosopher.years}
                          </p>
                        )}
                        {philosopher.biography && (
                          <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                            {philosopher.biography}
                          </p>
                        )}
                      </a>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  No major thinkers added yet.
                </p>
              )}
            </div>

            {/* Influences */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="text-green-600" size={24} />
                <h2 className="text-xl font-bold text-gray-800">Influences</h2>
              </div>
              {school.influences && school.influences.length > 0 ? (
                <ul className="space-y-2">
                  {school.influences.map((influence, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <a
                        href={`https://www.google.com/search?q=${encodeURIComponent(
                          influence
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-green-700 hover:underline"
                      >
                        {influence}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">No influences listed yet.</p>
              )}
            </div>

            {/* Challenged */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-red-600" size={24} />
                <h2 className="text-xl font-bold text-gray-800">Challenged</h2>
              </div>
              {school.challenged && school.challenged.length > 0 ? (
                <ul className="space-y-2">
                  {school.challenged.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <a
                        href={`https://www.google.com/search?q=${encodeURIComponent(
                          challenge
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-red-700 hover:underline"
                      >
                        {challenge}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">
                  No challenges listed yet.
                </p>
              )}
            </div>

            {/* Legacy */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Legacy & Impact
              </h2>
              {school.legacy ? (
                <p className="text-gray-700 leading-relaxed mb-4">
                  {school.legacy}
                </p>
              ) : (
                <p className="text-gray-500 italic mb-4">
                  Legacy description not added yet.
                </p>
              )}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800">
                  Key Developments:
                </h3>
                {school.developments && school.developments.length > 0 ? (
                  <ul className="grid md:grid-cols-2 gap-2">
                    {school.developments.map((dev, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <a
                          href={`https://www.google.com/search?q=${encodeURIComponent(
                            dev
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-blue-700 hover:underline"
                        >
                          {dev}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">
                    No developments added yet.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Schools */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Related Schools
              </h3>
              {relatedSchools && relatedSchools.length > 0 ? (
                <div className="space-y-3">
                  {relatedSchools.map((relatedSchool) => {
                    const hasPage = relatedSchool?.id;
                    const linkUrl = hasPage
                      ? `/school/${relatedSchool.id}`
                      : `https://www.google.com/search?q=${encodeURIComponent(
                          relatedSchool.name
                        )}`;

                    return (
                      <a
                        key={relatedSchool.id || relatedSchool.name}
                        href={linkUrl}
                        target={hasPage ? "_self" : "_blank"}
                        rel={hasPage ? undefined : "noopener noreferrer"}
                        className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {relatedSchool.color && (
                            <div
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: relatedSchool.color }}
                            ></div>
                          )}
                          <span className="font-medium text-gray-800">
                            {relatedSchool.name}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  No related schools added yet.
                </p>
              )}
            </div>

            {/* Key Texts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-purple-600" size={20} />
                <h3 className="text-lg font-bold text-gray-800">Key Texts</h3>
              </div>
              {school.keyTexts && school.keyTexts.length > 0 ? (
                <ul className="space-y-2">
                  {school.keyTexts.map((text, idx) => (
                    <li key={idx}>
                      <a
                        href={`https://www.google.com/search?q=${encodeURIComponent(
                          text
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 text-sm hover:text-purple-700 hover:underline"
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">No key texts added yet.</p>
              )}
            </div>

            {/* External Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <ExternalLink className="text-blue-600" size={20} />
                <h3 className="text-lg font-bold text-gray-800">Learn More</h3>
              </div>
              {school.externalLinks && school.externalLinks.length > 0 ? (
                <div className="space-y-3">
                  {school.externalLinks.map((link, idx) => {
                    const finalUrl = link.url
                      ? link.url
                      : `https://www.google.com/search?q=${encodeURIComponent(
                          link.title
                        )}`;

                    return (
                      <a
                        key={idx}
                        href={finalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
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
                          {link.type && (
                            <div className="text-xs text-gray-500 capitalize">
                              {link.type}
                            </div>
                          )}
                        </div>
                      </a>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  No external links added yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
