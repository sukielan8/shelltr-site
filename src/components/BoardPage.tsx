import React from 'react';
import { User, Quote, Star, MapPin, Calendar } from 'lucide-react';
import Footer from './Footer';

const BoardPage = () => {
  const boardMembers = [
    {
      name: "Saket Gajara",
      motivation: "What motivates me is the chance to build meaningful relationships with others while aiding my community!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      role: "Co-Founder",
      expertise: "Community Relations",
      joinDate: "January 2023",
      location: "Aurora, IL"
    },
    {
      name: "Aryan Nigam",
      motivation: "What motivates me is giving back to others, knowing that I am helping improve my community!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      role: "Co-Founder",
      expertise: "Operations",
      joinDate: "January 2023",
      location: "Naperville, IL"
    },
    {
      name: "Praneeth Doddi",
      motivation: "What motivates me is giving back to the community and making a difference in people's lives. It's the best feeling you can have!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      role: "Board Member",
      expertise: "Event Planning",
      joinDate: "March 2023",
      location: "Aurora, IL"
    },
    {
      name: "Rayhan Mallikar",
      motivation: "What motivates me is the love I have for witnessing the direct impact I have on my community!",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      role: "Board Member",
      expertise: "Outreach",
      joinDate: "February 2023",
      location: "Naperville, IL"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-full px-4 py-2 mb-6">
            <User className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-700 dark:text-green-400 text-sm font-medium">Board Team</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
            Meet the <span className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-400 dark:to-green-600 bg-clip-text text-transparent">Board</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate students dedicated to making a difference in our community through leadership and service
          </p>
        </div>

        {/* Board Members Table */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl overflow-hidden shadow-xl animate-slideInLeft relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover opacity-5 dark:opacity-10 rounded-2xl"
            />
          </div>
          <div className="bg-green-50 dark:bg-green-500/10 px-8 py-6 border-b border-green-100 dark:border-green-500/20 relative z-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Our Board Team</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Meet the dedicated board members driving our mission forward</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-25 dark:bg-green-500/5">
                <tr>
                  <th className="text-left py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg">Member</th>
                  <th className="text-left py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg hidden lg:table-cell">Role & Details</th>
                  <th className="text-left py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg">Motivation</th>
                </tr>
              </thead>
              <tbody>
                {boardMembers.map((member, index) => (
                  <tr 
                    key={index}
                    className="border-b border-green-50 dark:border-green-500/10 hover:bg-green-25 dark:hover:bg-green-500/5 transition-all duration-300 group"
                  >
                    <td className="py-6 px-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-green-100 dark:ring-green-500/30 group-hover:ring-green-200 dark:group-hover:ring-green-400/50 transition-all duration-300 shadow-lg">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                            <Star className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-gray-800 dark:text-white font-semibold text-lg">{member.name}</h3>
                          <div className="lg:hidden space-y-1">
                            <p className="text-green-600 dark:text-green-400 text-sm font-medium">{member.role}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">{member.expertise}</p>
                            <div className="flex items-center space-x-2 text-xs text-gray-400 dark:text-gray-500">
                              <MapPin className="w-3 h-3" />
                              <span>{member.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6 hidden lg:table-cell">
                      <div className="space-y-2">
                        <p className="text-green-600 dark:text-green-400 font-semibold">{member.role}</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{member.expertise}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>Joined {member.joinDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{member.location}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <div className="flex items-start space-x-2">
                        <Quote className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic">
                          {member.motivation}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="mt-16 animate-slideInRight">
          <div className="bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Join Our Leadership Team</h3>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Join Our Board Team</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Interested in becoming part of our board team? We're always looking for passionate individuals who want to make a lasting impact in our community.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Leadership Skills</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Develop your leadership abilities while making a difference</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Community Impact</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Create meaningful change in the Aurora-Naperville area</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Personal Growth</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Build relationships and grow personally and professionally</p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                Apply to Join the Board
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BoardPage;