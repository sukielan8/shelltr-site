import React from 'react';
import { Calendar, MapPin, Users, Clock, Tag } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Volleyball For Kids!!",
      location: "Fox Valley Cambridge Chase Park",
      description: "Fun volleyball activities for children in our community",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Sports",
      status: "Completed",
      participants: "25+ Kids",
      duration: "3 Hours"
    },
    {
      title: "Letters Against Isolation",
      location: "Community Partnership",
      description: "Partnership with the Letters Against Isolation organization to combat loneliness",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Community",
      status: "Ongoing",
      participants: "50+ Volunteers",
      duration: "Monthly"
    },
    {
      title: "Music For All Fundraiser",
      location: "Various Venues",
      description: "Live musical performances, community engagement, and opportunities to support and participate",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Fundraiser",
      status: "Upcoming",
      participants: "100+ Expected",
      duration: "Full Day"
    },
    {
      title: "Loaves & Fishes Partnership",
      location: "Food Distribution Centers",
      description: "Continued partnership with Loaves & Fishes for community food assistance",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Food Aid",
      status: "Ongoing",
      participants: "30+ Volunteers",
      duration: "Weekly"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Ongoing': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Upcoming': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Community events"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Our Impact</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Recent & <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Upcoming Events</span>
          </h2>
          <p className="text-xl text-gray-300">
            Here are just a few of the numerous events we do at Shelltr!
          </p>
        </div>

        {/* Events Table */}
        <div className="bg-black/40 backdrop-blur-xl border border-green-500/20 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-500/10">
                <tr>
                  <th className="text-left py-6 px-6 text-green-400 font-semibold text-lg">Event Details</th>
                  <th className="text-left py-6 px-6 text-green-400 font-semibold text-lg hidden lg:table-cell">Metrics</th>
                  <th className="text-center py-6 px-6 text-green-400 font-semibold text-lg">Status</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr 
                    key={index}
                    className="border-b border-green-500/10 hover:bg-green-500/5 transition-all duration-300 group"
                  >
                    <td className="py-6 px-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden ring-2 ring-green-500/30 group-hover:ring-green-400/50 transition-all duration-300 flex-shrink-0">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold text-lg mb-1">{event.title}</h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <MapPin className="w-4 h-4 text-green-400" />
                            <span className="text-gray-400 text-sm">{event.location}</span>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed mb-2">{event.description}</p>
                          <div className="flex items-center space-x-2">
                            <Tag className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 text-sm font-medium">{event.type}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6 hidden lg:table-cell">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{event.participants}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{event.duration}</span>
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

        <div className="mt-12 text-center">
          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Join Our Next Event?</h3>
            <p className="text-gray-300 mb-6">
              Stay connected with us to be the first to know about upcoming community events and volunteer opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                View All Events
              </button>
              <button className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-8 py-3 rounded-xl font-medium transition-all duration-300">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;