// IdeaPage.tsx
import { useParams } from "react-router-dom";
import {
  ArrowLeft,
  Lightbulb,
  Users,
  ExternalLink,
  Target,
  Zap,
} from "lucide-react";
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
          <a href="/ideas" className="text-blue-600 hover:text-blue-800">
            Return to Ideas
          </a>
        </div>
      </div>
    );
  }

  const originSchool = allSchools.find((s) => s.id === idea.originSchool);
  const keyThinkers = philosophersData.filter((p) =>
    idea.keyThinkers.includes(p.id)
  );
  const relatedIdeas = ideasData.filter((i) =>
    idea.relatedIdeas.includes(i.id)
  );

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
          <div className="flex items-start gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full m-1 flex items-center justify-center">
              <Lightbulb className="text-white" size={18} />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800">{idea.name}</h1>
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
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Origin School
              </h2>
              {originSchool ? (
                <a
                  href={`/school/${originSchool.id}`}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {originSchool.color && (
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: originSchool.color }}
                      ></div>
                    )}
                    <h3 className="font-semibold text-gray-800">
                      {originSchool.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    {originSchool.description}
                  </p>
                </a>
              ) : (
                <p className="text-gray-500 italic">No origin school listed.</p>
              )}
            </div>

            {/* Key Thinkers */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Key Thinkers</h2>
              </div>
              {keyThinkers && keyThinkers.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {keyThinkers.map((thinker) => {
                    const hasPage = thinker?.id;
                    const linkUrl = hasPage
                      ? `/philosopher/${thinker.id}`
                      : `https://www.google.com/search?q=${encodeURIComponent(
                          thinker.name
                        )}`;
                    return (
                      <a
                        key={thinker.id || thinker.name}
                        href={linkUrl}
                        target={hasPage ? "_self" : "_blank"}
                        rel={hasPage ? undefined : "noopener noreferrer"}
                        className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors block"
                      >
                        <h3 className="font-semibold text-gray-800 mb-1">
                          {thinker.name}
                        </h3>
                        {thinker.years && (
                          <p className="text-sm text-gray-600">{thinker.years}</p>
                        )}
                      </a>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-500 italic">No key thinkers listed.</p>
              )}
            </div>

            {/* Modern Applications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="text-green-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">
                  Modern Applications
                </h2>
              </div>
              {idea.modernApplications && idea.modernApplications.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-3">
                  {idea.modernApplications.map((application, index) => (
                    <a
                      key={index}
                      href={`https://www.google.com/search?q=${encodeURIComponent(
                        application
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-green-50 rounded-lg hover:bg-green-100"
                    >
                      <span className="font-medium text-gray-800">
                        {application}
                      </span>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  No modern applications listed.
                </p>
              )}
            </div>

            {/* Challenges */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-red-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">
                  What It Challenged
                </h2>
              </div>
              {idea.challenges && idea.challenges.length > 0 ? (
                <ul className="space-y-2">
                  {idea.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2">
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
                <p className="text-gray-500 italic">No challenges listed.</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
              {/* <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="text-green-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Influences</h2>
              </div>
              {idea.influences && idea.influences.length > 0 ? (
                <ul className="space-y-2">
                  {idea.influences.map((influence, index) => (
                    <li key={index} className="flex items-start gap-2">
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
                <p className="text-gray-500 italic">No influences listed.</p>
              )}
            </div> */}
{/* 
            Developments
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Key Developments
              </h2>
              {idea.developments && idea.developments.length > 0 ? (
                <ul className="grid md:grid-cols-2 gap-2">
                  {idea.developments.map((dev, index) => (
                    <li key={index} className="flex items-start gap-2">
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
                <p className="text-gray-500 italic">No developments listed.</p>
              )}
            </div>

            Legacy
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Legacy & Impact
              </h2>
              {idea.legacy ? (
                <p className="text-gray-700 leading-relaxed">{idea.legacy}</p>
              ) : (
                <p className="text-gray-500 italic">No legacy added yet.</p>
              )}
            </div> */}

            {/* Key Texts */}
            {/* <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-purple-600" size={20} />
                <h3 className="text-lg font-bold text-gray-800">Key Texts</h3>
              </div>
              {idea.keyTexts && idea.keyTexts.length > 0 ? (
                <ul className="space-y-2">
                  {idea.keyTexts.map((text, idx) => (
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
                <p className="text-gray-500 italic">No key texts listed.</p>
              )}
            </div> */}

            {/* Related Ideas */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Related Ideas
              </h3>
              {relatedIdeas && relatedIdeas.length > 0 ? (
                <div className="space-y-3">
                  {relatedIdeas.map((relatedIdea) => {
                    const hasPage = relatedIdea?.id;
                    const linkUrl = hasPage
                      ? `/idea/${relatedIdea.id}`
                      : `https://www.google.com/search?q=${encodeURIComponent(
                          relatedIdea.name
                        )}`;
                    return (
                      <a
                        key={relatedIdea.id || relatedIdea.name}
                        href={linkUrl}
                        target={hasPage ? "_self" : "_blank"}
                        rel={hasPage ? undefined : "noopener noreferrer"}
                        className="block p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                      >
                        <div className="font-medium text-gray-800">
                          {relatedIdea.name}
                        </div>
                        {relatedIdea.description && (
                          <div className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {relatedIdea.description}
                          </div>
                        )}
                      </a>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-500 italic">No related ideas listed.</p>
              )}
            </div>

            {/* External Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <ExternalLink className="text-blue-600" size={20} />
                <h3 className="text-lg font-bold text-gray-800">Learn More</h3>
              </div>
              {idea.externalLinks && idea.externalLinks.length > 0 ? (
                <div className="space-y-3">
                  {idea.externalLinks.map((link, index) => {
                    const finalUrl = link.url
                      ? link.url
                      : `https://www.google.com/search?q=${encodeURIComponent(
                          link.title
                        )}`;
                    return (
                      <a
                        key={index}
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
                <p className="text-gray-500 italic">No external links yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
