import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Home, Users, Lightbulb, BookOpen, Zap } from 'lucide-react';

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/schools', label: 'Schools', icon: BookOpen },
    { path: '/philosophers', label: 'Philosophers', icon: Users },
    { path: '/ideas', label: 'Ideas', icon: Lightbulb },
    { path: '/challenges', label: 'Challenges', icon: Zap }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            <Brain size={24} className="text-blue-600" />
            Philosophy Roadmap
          </Link>
          
          <div className="flex space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === path
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}