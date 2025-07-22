import React from 'react';
import { User, Quote, Star } from 'lucide-react';

const Board = () => {
  const boardMembers = [
    {
      name: "Saket Gajara",
      motivation: "What motivates me is the chance to build meaningful relationships with others while aiding my community!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      role: "Co-Founder",
      expertise: "Community Relations"
    },
    {
      name: "Aryan Nigam",
      motivation: "What motivates me is giving back to others, knowing that I am helping improve my community!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      role: "Co-Founder",
      expertise: "Operations"
    },
    {
      name: "Praneeth Doddi",
      motivation: "What motivates me is giving back to the community and making a difference in people's lives. It's the best feeling you can have!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      role: "Board Member",
      expertise: "Event Planning"
    },
    {
      name: "Rayhan Mallikar",
      motivation: "What motivates me is the love I have for witnessing the direct impact I have on my community!",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      role: "Board Member",
      expertise: "Outreach"
    }
  ];

  return (
    <section id="board" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <User className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Leadership Team</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet the <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Board</span>
          </h2>
          <p className="text-xl text-gray-300">
            Passionate students dedicated to making a difference in our community
          </p>
        </div>

        {/* Board Members Table */}
        <div className="bg-black/40 backdrop-blur-xl border border-green-500/20 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-500/10">
                <tr>
                  <th className="text-left py-6 px-6 text-green-400 font-semibold text-lg">Member</th>
                  <th className="text-left py-6 px-6 text-green-400 font-semibold text-lg hidden lg:table-cell">Role & Expertise</th>
                  <th className="text-left py-6 px-6 text-green-400 font-semibold text-lg">Motivation</th>
                </tr>
              </thead>
              <tbody>
                {boardMembers.map((member, index) => (
                  <tr 
                    key={index}
                    className="border-b border-green-500/10 hover:bg-green-500/5 transition-all duration-300 group"
                  >
                    <td className="py-6 px-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-green-500/30 group-hover:ring-green-400/50 transition-all duration-300">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <Star className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                          <div className="lg:hidden">
                            <p className="text-green-400 text-sm">{member.role}</p>
                            <p className="text-gray-400 text-xs">{member.expertise}</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6 hidden lg:table-cell">
                      <div className="space-y-1">
                        <p className="text-green-400 font-medium">{member.role}</p>
                        <p className="text-gray-400 text-sm">{member.expertise}</p>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <div className="flex items-start space-x-2">
                        <Quote className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-300 text-sm leading-relaxed italic">
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

        <div className="mt-12 text-center">
          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Mission</h3>
            <p className="text-gray-300 mb-6">
              Interested in becoming part of our leadership team? We're always looking for passionate individuals.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
              Apply to Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Board;