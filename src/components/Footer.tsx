import React from 'react';
import { Heart, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-green-100 dark:border-green-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Description */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-gray-800 to-green-600 dark:from-white dark:to-green-400 bg-clip-text text-transparent">
                Shelltr
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400">Student-led non-profit</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a href="#" className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Location and Copyright */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-1 text-sm text-gray-600 dark:text-gray-400 mb-1">
              <MapPin className="w-3 h-3" />
              <span>Aurora-Naperville, IL</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © 2025 Shelltr. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;