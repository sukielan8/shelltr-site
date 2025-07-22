import React from 'react';
import { Heart, Users, Target, Zap, Globe, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Community First",
      description: "Our mission is centered around making a meaningful impact in the Aurora-Naperville community through dedicated service.",
      metric: "Local Focus"
    },
    {
      icon: Users,
      title: "Student-Led",
      description: "We are proudly student-led, bringing fresh perspectives and passionate energy to community service initiatives.",
      metric: "Youth Power"
    },
    {
      icon: Target,
      title: "Direct Impact",
      description: "We focus on creating tangible, positive changes that directly benefit those in need in our local community.",
      metric: "Real Results"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We leverage modern approaches and technology to maximize our community outreach and engagement efforts.",
      metric: "Future Ready"
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Building long-term solutions that create lasting positive change in our community ecosystem.",
      metric: "Long Term"
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Complete openness in our operations, funding, and impact measurement for community trust.",
      metric: "Open Source"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Community collaboration"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">About Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What is <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Shelltr</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a student-led non-profit organization located in the Aurora-Naperville area. 
            Working towards making a positive impact in our community, we are looking to grow 
            and would love your help!
          </p>
        </div>

        {/* Features Table */}
        <div className="bg-black/40 backdrop-blur-xl border border-green-500/20 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-500/10">
                <tr>
                  <th className="text-left py-6 px-6 text-green-400 font-semibold text-lg">Core Values</th>
                  <th className="text-left py-6 px-6 text-green-400 font-semibold text-lg hidden md:table-cell">Description</th>
                  <th className="text-center py-6 px-6 text-green-400 font-semibold text-lg">Focus</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr 
                    key={index}
                    className="border-b border-green-500/10 hover:bg-green-500/5 transition-all duration-300 group"
                  >
                    <td className="py-6 px-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all duration-300">
                          <feature.icon className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                          <p className="text-gray-400 text-sm md:hidden mt-1">{feature.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-gray-300 leading-relaxed hidden md:table-cell">
                      {feature.description}
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="inline-flex items-center bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                        {feature.metric}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-8">
            Stay updated: follow us <span className="font-semibold text-green-400">@shelltr_nfp</span> for the 
            most up to date information about our events for the community
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
              Follow Us
            </button>
            <button className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-8 py-3 rounded-xl font-medium transition-all duration-300">
              Volunteer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;