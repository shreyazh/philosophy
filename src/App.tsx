import { Github } from "lucide-react";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { SchoolPage } from './pages/SchoolPage';
import { PhilosopherPage } from './pages/PhilosopherPage';
import { IdeaPage } from './pages/IdeaPage';
import { ChallengePage } from './pages/ChallengePage';
import { PhilosophersListPage } from './pages/PhilosophersListPage';
import { IdeasListPage } from './pages/IdeasListPage';
import { SchoolsListPage } from './pages/SchoolsListPage';
import { ChallengesListPage } from './pages/ChallengesListPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schools" element={<SchoolsListPage />} />
          <Route path="/school/:id" element={<SchoolPage />} />
          <Route path="/philosophers" element={<PhilosophersListPage />} />
          <Route path="/philosopher/:id" element={<PhilosopherPage />} />
          <Route path="/ideas" element={<IdeasListPage />} />
          <Route path="/idea/:id" element={<IdeaPage />} />
          <Route path="/challenges" element={<ChallengesListPage />} />
          <Route path="/challenge/:id" element={<ChallengePage />} />
        </Routes>
        
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-300">
              A comprehensive guide to the history of philosophical thought
            </p>
            <p className="text-gray-400 text-sm mt-2">
             export default function GithubStarButton() {
                return (
                  <a
                    href="https://github.com/shreyazh/philosophy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-4 py-2 text-white shadow-md hover:bg-gray-800 transition"
                  >
                    <Github size={18} />
                    ⭐ Star us on GitHub
                  </a>
                );
              }
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
