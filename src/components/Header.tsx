import React from 'react';
import { Scroll, Brain } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
    <div className="text-center">
      <div className="flex justify-center items-center gap-2 mb-3">
        <Brain size={36} className="text-blue-300" />
        <Scroll size={36} className="text-purple-300" />
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
        Philosophy Roadmap
      </h1>
      <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
        Explore the complete history of human philosophical thought, from ancient wisdom 
        to contemporary insights. Discover how ideas evolved, challenged each other, 
        and shaped our understanding of existence, knowledge, and ethics.
      </p>
    </div>
  </div>
</header>
  );
}
