import React from 'react';
import { Calendar, Users, Heart, ArrowRight, Sparkles, TrendingUp, MapPin } from 'lucide-react';
import Footer from './Footer';

const HomePage = () => {
  const recentUpdates = [
    {
      date: "Jan 20, 2025",
      title: "Music For All Fundraiser Announced",
      description: "Live musical performances and community engagement opportunities coming soon",
      type: "Upcoming Event",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "upcoming"
    },
    {
      date: "Dec 10, 2024",
      title: "Letters Against Isolation Partnership",
      description: "Continuing our partnership to combat loneliness in our community",
      type: "Partnership",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "ongoing"
    },
    {
      date: "Dec 15, 2024",
      title: "Volleyball For Kids Event Success!",
      description: "Amazing turnout at Fox Valley Cambridge Chase Park with 25+ kids participating",
      type: "Event Complete",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "completed"
    }
  ];

  const quickStats = [
    { label: "Community Events", value: "50+", icon: Calendar, color: "from-blue-500 to-blue-600" },
    { label: "Active Volunteers", value: "100+", icon: Users, color: "from-green-500 to-green-600" },
    { label: "Lives Impacted", value: "1000+", icon: Heart, color: "from-purple-500 to-purple-600" },
    { label: "Growth Rate", value: "25%", icon: TrendingUp, color: "from-orange-500 to-orange-600" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-600';
      case 'ongoing': return 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-600';
      case 'upcoming': return 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-600';
      default: return 'bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-white dark:from-black dark:via-gray-900 dark:to-black">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Community helping hands"
            className="w-full h-full object-cover opacity-5 dark:opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative z-10 animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-green-700 dark:text-green-400 text-sm font-medium">Student-Led Non-Profit</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-800 via-green-600 to-green-700 dark:from-white dark:via-green-200 dark:to-green-400 bg-clip-text text-transparent">
                Bringing Hope.
              </span>
              <br />
              <span className="text-gray-800 dark:text-white">
                Building Community.
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We are a student-led non-profit organization located in the Aurora-Naperville area, 
              working towards making a positive impact in our community.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400 mb-8">
              <MapPin className="w-5 h-5" />
              <span>Aurora-Naperville Area, Illinois</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                <span className="flex items-center space-x-2">
                  <span>Get Involved</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-green-200 dark:border-green-500/50 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-500/10 hover:border-green-300 dark:hover:border-green-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Follow @shelltr_nfp
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl p-8 shadow-xl mb-16 animate-slideInLeft">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-green-100">
                    <th className="text-left py-4 px-6 text-green-700 dark:text-green-400 font-semibold text-lg">Impact Metrics</th>
                    <th className="text-center py-4 px-6 text-green-700 dark:text-green-400 font-semibold text-lg">Current</th>
                  </tr>
                </thead>
                <tbody>
                  {quickStats.map((stat, index) => (
                    <tr key={index} className="border-b border-green-50 dark:border-green-500/10 hover:bg-green-25 dark:hover:bg-green-500/5 transition-colors group">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                            <stat.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-800 dark:text-white font-medium">{stat.label}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 dark:from-green-400 dark:to-green-600 bg-clip-text text-transparent">
                          {stat.value}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Recent <span className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-400 dark:to-green-600 bg-clip-text text-transparent">Updates</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Stay up to date with our latest community initiatives and events
            </p>
          </div>

          <div className="bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-50 dark:bg-green-500/10">
                  <tr>
                    <th className="text-left py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg">Update Details</th>
                    <th className="text-center py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg hidden lg:table-cell">Date</th>
                    <th className="text-center py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUpdates.map((update, index) => (
                    <tr key={index} className="border-b border-green-50 dark:border-green-500/10 hover:bg-green-25 dark:hover:bg-green-500/5 transition-all duration-300 group">
                      <td className="py-6 px-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-20 h-20 rounded-xl overflow-hidden ring-2 ring-green-100 dark:ring-green-500/30 group-hover:ring-green-200 dark:group-hover:ring-green-400/50 transition-all duration-300 flex-shrink-0">
                            <img 
                              src={update.image} 
                              alt={update.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-gray-800 dark:text-white font-semibold text-lg mb-1">{update.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-2">{update.description}</p>
                            <div className="flex items-center space-x-2">
                              <span className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-lg text-xs font-medium">
                                {update.type}
                              </span>
                              <span className="text-gray-400 dark:text-gray-500 text-xs lg:hidden">{update.date}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center hidden lg:table-cell">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">{update.date}</span>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(update.status)}`}>
                          {update.status.charAt(0).toUpperCase() + update.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Stay Connected</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Follow us <span className="font-semibold text-green-700 dark:text-green-400">@shelltr_nfp</span> for the most up-to-date information about our events and community initiatives.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                  Follow Us
                </button>
                <button className="border-2 border-green-200 dark:border-green-500/50 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-500/10 hover:border-green-300 dark:hover:border-green-400 px-8 py-3 rounded-xl font-medium transition-all duration-300">
                  Volunteer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;