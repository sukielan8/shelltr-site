import React from 'react';
import { Calendar, MapPin, Users, Clock, Tag, ExternalLink } from 'lucide-react';
import Footer from './Footer';

const EventsPage = () => {
  const events = [
    {
      title: "Volleyball For Kids!!",
      location: "Fox Valley Cambridge Chase Park",
      description: "Fun volleyball activities for children in our community with games, prizes, and refreshments",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Sports",
      status: "Completed",
      participants: "25+ Kids",
      duration: "3 Hours",
      date: "December 15, 2024",
      impact: "Promoted physical activity and community engagement among local youth"
    },
    {
      title: "Letters Against Isolation",
      location: "Community Partnership",
      description: "Partnership with the Letters Against Isolation organization to combat loneliness through letter writing",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Community",
      status: "Ongoing",
      participants: "50+ Volunteers",
      duration: "Monthly",
      date: "Ongoing Initiative",
      impact: "Connecting isolated community members with heartfelt letters and support"
    },
    {
      title: "Music For All Fundraiser",
      location: "Various Venues",
      description: "Live musical performances, community engagement, and opportunities to support and participate in local arts",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Fundraiser",
      status: "Upcoming",
      participants: "100+ Expected",
      duration: "Full Day",
      date: "January 20, 2025",
      impact: "Supporting local musicians while raising funds for community programs"
    },
    {
      title: "Loaves & Fishes Partnership",
      location: "Food Distribution Centers",
      description: "Continued partnership with Loaves & Fishes for community food assistance and volunteer support",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Food Aid",
      status: "Ongoing",
      participants: "30+ Volunteers",
      duration: "Weekly",
      date: "Every Saturday",
      impact: "Providing essential food assistance to families in need"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-600';
      case 'Ongoing': return 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-600';
      case 'Upcoming': return 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-600';
      default: return 'bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Sports': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Community': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Fundraiser': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Food Aid': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-700 dark:text-green-400 text-sm font-medium">Our Impact</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
            Events & <span className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-400 dark:to-green-600 bg-clip-text text-transparent">Initiatives</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our community events, ongoing partnerships, and upcoming initiatives that make a real difference
          </p>
        </div>

        {/* Events Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 animate-slideInLeft">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">50+</h3>
            <p className="text-gray-600 dark:text-gray-300">Events Organized</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">200+</h3>
            <p className="text-gray-600 dark:text-gray-300">Participants</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">10+</h3>
            <p className="text-gray-600 dark:text-gray-300">Locations</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">500+</h3>
            <p className="text-gray-600 dark:text-gray-300">Volunteer Hours</p>
          </div>
        </div>

        {/* Events Table */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl overflow-hidden shadow-xl animate-slideInRight relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Community events"
              className="w-full h-full object-cover opacity-5 dark:opacity-10 rounded-2xl"
            />
          </div>
          <div className="bg-green-50 dark:bg-green-500/10 px-8 py-6 border-b border-green-100 dark:border-green-500/20 relative z-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Our Events & Initiatives</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Here are just a few of the numerous events we organize at Shelltr</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-25 dark:bg-green-500/5">
                <tr>
                  <th className="text-left py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg">Event Details</th>
                  <th className="text-left py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg hidden lg:table-cell">Metrics & Impact</th>
                  <th className="text-center py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg">Status</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr 
                    key={index}
                    className="border-b border-green-50 dark:border-green-500/10 hover:bg-green-25 dark:hover:bg-green-500/5 transition-all duration-300 group"
                  >
                    <td className="py-6 px-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-24 h-24 rounded-xl overflow-hidden ring-2 ring-green-100 dark:ring-green-500/30 group-hover:ring-green-200 dark:group-hover:ring-green-400/50 transition-all duration-300 flex-shrink-0 shadow-lg">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-gray-800 dark:text-white font-semibold text-lg mb-1">{event.title}</h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <MapPin className="w-4 h-4 text-green-500 dark:text-green-400" />
                            <span className="text-gray-600 dark:text-gray-300 text-sm">{event.location}</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">{event.description}</p>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium ${getTypeColor(event.type)} dark:bg-opacity-20`}>
                              <Tag className="w-3 h-3 mr-1" />
                              {event.type}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 text-xs">{event.date}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6 hidden lg:table-cell">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-green-500 dark:text-green-400" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">{event.participants}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-green-500 dark:text-green-400" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{event.duration}</span>
                        </div>
                        <div className="bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 rounded-lg p-3 mt-3">
                          <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                            <strong>Impact:</strong> {event.impact}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Get Involved */}
        <div className="mt-16 animate-fadeInUp">
          <div className="bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Want to Join Our Next Event?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Stay connected with us to be the first to know about upcoming community events and volunteer opportunities. 
                Follow us <span className="font-semibold text-green-700 dark:text-green-400">@shelltr_nfp</span> for real-time updates.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Event Updates</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Get notified about upcoming events and volunteer opportunities</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Volunteer</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Join our team of dedicated volunteers making a difference</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Partner</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Collaborate with us on community initiatives and events</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                  View All Events
                </button>
                <button className="border-2 border-green-200 dark:border-green-500/50 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-500/10 hover:border-green-300 dark:hover:border-green-400 px-8 py-3 rounded-xl font-medium transition-all duration-300">
                  Subscribe to Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;