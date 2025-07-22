import React from 'react';
import { Instagram, Mail, Heart, MapPin, Send, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: MapPin,
      title: "Location",
      value: "Aurora-Naperville Area, Illinois",
      description: "Serving the greater Chicagoland area",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Instagram,
      title: "Social Media",
      value: "@shelltr_nfp",
      description: "Follow for updates and events",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@shelltr.org",
      description: "General inquiries and partnerships",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "(555) 123-4567",
      description: "Direct line for urgent matters",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const inquiryTypes = [
    { value: "volunteer", label: "I want to volunteer", icon: Heart },
    { value: "partnership", label: "Partnership opportunity", icon: MessageCircle },
    { value: "donation", label: "Donation inquiry", icon: Send },
    { value: "general", label: "General question", icon: Mail },
    { value: "other", label: "Other", icon: MessageCircle }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Contact and communication"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Involved</span>
          </h2>
          <p className="text-xl text-gray-300">
            Join our mission to make a positive impact in the community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods Table */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Us</h3>
              <div className="bg-black/40 backdrop-blur-xl border border-green-500/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-green-500/10">
                      <tr>
                        <th className="text-left py-4 px-6 text-green-400 font-semibold">Method</th>
                        <th className="text-left py-4 px-6 text-green-400 font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contactMethods.map((method, index) => (
                        <tr 
                          key={index}
                          className="border-b border-green-500/10 hover:bg-green-500/5 transition-all duration-300 group"
                        >
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                <method.icon className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-white font-medium">{method.title}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div>
                              <div className="text-green-400 font-medium">{method.value}</div>
                              <div className="text-gray-400 text-sm">{method.description}</div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 backdrop-blur-xl">
              <h4 className="text-lg font-semibold text-white mb-3">Ready to make a difference?</h4>
              <p className="text-gray-300 mb-4">
                Whether you want to volunteer, donate, or partner with us, we'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                  Volunteer Now
                </button>
                <button className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-6 py-2 rounded-xl font-medium transition-all duration-300">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/40 backdrop-blur-xl border border-green-500/20 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-green-400 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-xl border border-green-500/30 bg-black/50 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-green-400 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-xl border border-green-500/30 bg-black/50 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-green-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-green-500/30 bg-black/50 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-green-400 mb-2">
                  Subject
                </label>
                <div className="bg-black/40 backdrop-blur-xl border border-green-500/20 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {inquiryTypes.map((type, index) => (
                        <tr key={index} className="border-b border-green-500/10 last:border-b-0 hover:bg-green-500/5 transition-colors">
                          <td className="py-2 px-4">
                            <label className="flex items-center space-x-3 cursor-pointer">
                              <input
                                type="radio"
                                name="subject"
                                value={type.value}
                                className="text-green-500 focus:ring-green-500"
                              />
                              <type.icon className="w-4 h-4 text-green-400" />
                              <span className="text-gray-300 text-sm">{type.label}</span>
                            </label>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-green-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-green-500/30 bg-black/50 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 backdrop-blur-sm"
                  placeholder="Tell us how you'd like to get involved..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;