import React from 'react';
import { Scroll, Brain } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Brain size={48} className="text-blue-300" />
            <Scroll size={48} className="text-purple-300" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Philosophy Roadmap
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore the complete history of human philosophical thought, from ancient wisdom 
            to contemporary insights. Discover how ideas evolved, challenged each other, 
            and shaped our understanding of existence, knowledge, and ethics.
          </p>
        </div>
      </div>
    </header>
  );
}