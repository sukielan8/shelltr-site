import React from 'react';
import { Heart, Users, Target, Zap, Globe, Shield, Camera, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';

import Footer from './Footer';

const AboutPage = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = React.useState(0);

  const features = [
    {
      icon: Heart,
      title: "Community First",
      description: "Our mission is centered around making a meaningful impact in the Aurora-Naperville community through dedicated service.",
      metric: "Local Focus",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Users,
      title: "Student-Led",
      description: "We are proudly student-led, bringing fresh perspectives and passionate energy to community service initiatives.",
      metric: "Youth Power",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Direct Impact",
      description: "We focus on creating tangible, positive changes that directly benefit those in need in our local community.",
      metric: "Real Results",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We leverage modern approaches and technology to maximize our community outreach and engagement efforts.",
      metric: "Future Ready",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Building long-term solutions that create lasting positive change in our community ecosystem.",
      metric: "Long Term",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Complete openness in our operations, funding, and impact measurement for community trust.",
      metric: "Open Source",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const communityPhotos = [
    {
      url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Community volunteers working together",
      event: "Volleyball for Kids Event"
    },
    {
      url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Students collaborating on community projects",
      event: "Board Planning Session"
    },
    {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Kids enjoying sports activities",
      event: "Youth Sports Program"
    },
    {
      url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Food distribution and community support",
      event: "Loaves & Fishes Partnership"
    },
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Community gathering and celebration",
      event: "Music for All Fundraiser"
    }
  ];

  const partnerships = [
    {
      name: "Letters Against Isolation",
      description: "Combating loneliness through heartfelt letter writing campaigns",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      website: "#",
      impact: "50+ volunteers, 200+ letters sent"
    },
    {
      name: "Loaves & Fishes",
      description: "Providing essential food assistance to families in need",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      website: "#",
      impact: "Weekly distributions, 100+ families served"
    },
    {
      name: "Fox Valley Parks",
      description: "Organizing youth sports and recreational activities",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      website: "#",
      impact: "Monthly events, 25+ kids per session"
    },
    {
      name: "Local Music Alliance",
      description: "Supporting local artists and community music programs",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      website: "#",
      impact: "Quarterly fundraisers, $5000+ raised"
    }
  ];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % communityPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + communityPhotos.length) % communityPhotos.length);
  };

  React.useEffect(() => {
    const interval = setInterval(nextPhoto, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-700 dark:text-green-400 text-sm font-medium">About Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
            What is <span className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-400 dark:to-green-600 bg-clip-text text-transparent">Shelltr</span>?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a student-led non-profit organization located in the Aurora-Naperville area. 
            Working towards making a positive impact in our community, we are looking to grow 
            and would love your help!
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl p-8 shadow-xl mb-16 animate-slideInLeft">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Community collaboration"
              className="w-full h-full object-cover opacity-5 dark:opacity-10"
            />
          </div>
          <div className="text-center relative z-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Bringing Hope</h3>
                <p className="text-gray-600 dark:text-gray-300">Inspiring positive change in our community through compassionate action.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Building Community</h3>
                <p className="text-gray-600 dark:text-gray-300">Creating connections and fostering unity among diverse community members.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Supporting Those in Need</h3>
                <p className="text-gray-600 dark:text-gray-300">Providing direct assistance and resources to vulnerable community members.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Table */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl overflow-hidden shadow-xl animate-slideInRight">
          <div className="bg-green-50 dark:bg-green-500/10 px-8 py-6 border-b border-green-100 dark:border-green-500/20">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Our Core Values</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">The principles that guide everything we do</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-25 dark:bg-green-500/5">
                <tr>
                  <th className="text-left py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg">Value</th>
                  <th className="text-left py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg hidden md:table-cell">Description</th>
                  <th className="text-center py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg">Focus</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr 
                    key={index}
                    className="border-b border-green-50 dark:border-green-500/10 hover:bg-green-25 dark:hover:bg-green-500/5 transition-all duration-300 group"
                  >
                    <td className="py-6 px-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-gray-800 dark:text-white font-semibold text-lg">{feature.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm md:hidden mt-1">{feature.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-gray-600 dark:text-gray-300 leading-relaxed hidden md:table-cell">
                      {feature.description}
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="inline-flex items-center bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-200 dark:border-green-500/30">
                        {feature.metric}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Community Photos Carousel */}
        <div className="mb-16 animate-slideInRight">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-full px-4 py-2 mb-4">
              <Camera className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-green-700 dark:text-green-400 text-sm font-medium">Community in Action</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Our Impact in Photos</h2>
            <p className="text-gray-600 dark:text-gray-300">See the difference we're making in our community</p>
          </div>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentPhotoIndex * 100}%)` }}
            >
              {communityPhotos.map((photo, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl overflow-hidden shadow-xl">
                    <div className="aspect-video relative">
                      <img 
                        src={photo.url} 
                        alt={photo.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-lg font-semibold mb-1">{photo.event}</h3>
                        <p className="text-sm opacity-90">{photo.caption}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-full flex items-center justify-center shadow-lg hover:bg-green-50 dark:hover:bg-green-500/10 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button 
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-full flex items-center justify-center shadow-lg hover:bg-green-50 dark:hover:bg-green-500/10 transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {communityPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPhotoIndex 
                      ? 'bg-green-500 scale-125' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-green-300 dark:hover:bg-green-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Partnerships Section */}
        <div className="mb-16 animate-slideInLeft">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-green-700 dark:text-green-400 text-sm font-medium">Community Partners</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Our Partnerships</h2>
            <p className="text-gray-600 dark:text-gray-300">Working together with amazing organizations to amplify our impact</p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-green-50 dark:bg-green-500/10 px-8 py-6 border-b border-green-100 dark:border-green-500/20">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Partner Organizations</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Collaborating for greater community impact</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-25 dark:bg-green-500/5">
                  <tr>
                    <th className="text-left py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg">Organization</th>
                    <th className="text-left py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg hidden lg:table-cell">Partnership Details</th>
                    <th className="text-center py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {partnerships.map((partner, index) => (
                    <tr 
                      key={index}
                      className="border-b border-green-50 dark:border-green-500/10 hover:bg-green-25 dark:hover:bg-green-500/5 transition-all duration-300 group"
                    >
                      <td className="py-6 px-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 rounded-xl overflow-hidden ring-2 ring-green-100 dark:ring-green-500/30 group-hover:ring-green-200 dark:group-hover:ring-green-400/50 transition-all duration-300 flex-shrink-0 shadow-lg">
                            <img 
                              src={partner.image} 
                              alt={partner.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-gray-800 dark:text-white font-semibold text-lg">{partner.name}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm lg:hidden mt-1">{partner.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-6 hidden lg:table-cell">
                        <div className="space-y-2">
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{partner.description}</p>
                          <a 
                            href={partner.website}
                            className="inline-flex items-center space-x-1 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm font-medium transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>Visit Website</span>
                          </a>
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="bg-green-100 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30 rounded-lg p-3">
                          <p className="text-green-700 dark:text-green-400 text-sm font-medium">{partner.impact}</p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fadeInUp">
          <div className="bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Join Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Ready to make a difference in the Aurora-Naperville community? We're always looking for passionate individuals to join our cause.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                Volunteer Now
              </button>
              <button className="border-2 border-green-200 dark:border-green-500/50 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-500/10 hover:border-green-300 dark:hover:border-green-400 px-8 py-3 rounded-xl font-medium transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;