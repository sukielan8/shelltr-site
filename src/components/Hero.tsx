import React from 'react';
import { ArrowRight, Sparkles, Users, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Community helping hands"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Student-Led Non-Profit</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent">
              Bringing Hope.
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Building Community.
            </span>
            <br />
            <span className="text-white">
              Supporting those in need.
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We are a student-led non-profit organization located in the Aurora-Naperville area, 
            working towards making a positive impact in our community through innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/25">
              <span className="flex items-center space-x-2">
                <span>Donate Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>

          {/* Stats Table */}
          <div className="bg-black/40 backdrop-blur-xl border border-green-500/20 rounded-2xl p-8 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-green-500/20">
                    <th className="text-left py-4 px-6 text-green-400 font-semibold">Metric</th>
                    <th className="text-center py-4 px-6 text-green-400 font-semibold">Count</th>
                    <th className="text-right py-4 px-6 text-green-400 font-semibold">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-green-500/10 hover:bg-green-500/5 transition-colors">
                    <td className="py-4 px-6 text-white flex items-center space-x-2">
                      <Target className="w-5 h-5 text-green-400" />
                      <span>Community Events</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">50+</span>
                    </td>
                    <td className="py-4 px-6 text-right text-gray-300">Organized</td>
                  </tr>
                  <tr className="border-b border-green-500/10 hover:bg-green-500/5 transition-colors">
                    <td className="py-4 px-6 text-white flex items-center space-x-2">
                      <Users className="w-5 h-5 text-green-400" />
                      <span>Active Volunteers</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">100+</span>
                    </td>
                    <td className="py-4 px-6 text-right text-gray-300">Engaged</td>
                  </tr>
                  <tr className="hover:bg-green-500/5 transition-colors">
                    <td className="py-4 px-6 text-white flex items-center space-x-2">
                      <Sparkles className="w-5 h-5 text-green-400" />
                      <span>Lives Impacted</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">1000+</span>
                    </td>
                    <td className="py-4 px-6 text-right text-gray-300">Transformed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;