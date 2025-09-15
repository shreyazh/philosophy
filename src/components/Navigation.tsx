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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 text-lg sm:text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            <Brain size={24} className="text-blue-600" />
            <span className="hidden sm:inline">Philosophy Roadmap</span>
            <span className="sm:hidden">Philosophy</span>
          </Link>
          
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm lg:text-base ${
                  location.pathname === path
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={16} className="lg:w-5 lg:h-5" />
                {label}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <div className="flex space-x-2">
              {navItems.slice(1).map(({ path, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    location.pathname === path
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
