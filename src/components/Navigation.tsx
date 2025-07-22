import React, { useState } from 'react';
import { Menu, X, Heart, Home, Users, Calendar, HelpCircle, Mail, Info, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { name: 'Home', href: 'home', icon: Home },
    { name: 'About', href: 'about', icon: Info },
    { name: 'Board', href: 'board', icon: Users },
    { name: 'Events', href: 'events', icon: Calendar },
    { name: 'FAQ', href: 'faq', icon: HelpCircle },
    { name: 'Contact', href: 'contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-black/80 backdrop-blur-xl border-b border-green-100 dark:border-green-500/20 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-green-600 dark:from-white dark:to-green-400 bg-clip-text text-transparent">
              Shelltr
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  onPageChange(item.href);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 font-medium relative group ${
                  currentPage === item.href
                    ? 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-500/10'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-green-500/10'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                {currentPage === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Donate Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-black border-t border-green-100 dark:border-green-500/20">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onPageChange(item.href);
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left flex items-center space-x-3 px-3 py-2 rounded-xl transition-all duration-300 ${
                    currentPage === item.href
                      ? 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-500/10'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-green-500/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="w-full text-left flex items-center space-x-3 px-3 py-2 rounded-xl transition-all duration-300 text-gray-600 hover:text-green-600 hover:bg-green-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-green-500/10"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
              </button>
              <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300">
                Donate Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;