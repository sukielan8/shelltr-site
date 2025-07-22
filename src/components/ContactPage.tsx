import React, { useState } from 'react';
import { Instagram, Mail, Heart, MapPin, Send, Phone, MessageCircle, Clock, Users } from 'lucide-react';
import Footer from './Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: MapPin,
      title: "Location",
      value: "Aurora-Naperville Area, Illinois",
      description: "Serving the greater Chicagoland area",
      color: "from-blue-500 to-blue-600",
      availability: "Community-wide service"
    },
    {
      icon: Instagram,
      title: "Social Media",
      value: "@shelltr_nfp",
      description: "Follow for updates and events",
      color: "from-pink-500 to-pink-600",
      availability: "Active daily"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@shelltr.org",
      description: "General inquiries and partnerships",
      color: "from-green-500 to-green-600",
      availability: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "(555) 123-4567",
      description: "Direct line for urgent matters",
      color: "from-purple-500 to-purple-600",
      availability: "Mon-Fri 9AM-5PM"
    }
  ];

  const inquiryTypes = [
    { value: "volunteer", label: "I want to volunteer", icon: Heart, description: "Join our volunteer team" },
    { value: "partnership", label: "Partnership opportunity", icon: Users, description: "Collaborate with us" },
    { value: "donation", label: "Donation inquiry", icon: Send, description: "Support our cause" },
    { value: "event", label: "Event information", icon: MessageCircle, description: "Learn about events" },
    { value: "general", label: "General question", icon: Mail, description: "Other inquiries" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubjectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-700 dark:text-green-400 text-sm font-medium">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
            Get <span className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-400 dark:to-green-600 bg-clip-text text-transparent">Involved</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our mission to make a positive impact in the Aurora-Naperville community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8 animate-slideInLeft">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Connect With Us</h2>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl overflow-hidden shadow-xl relative">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Contact and communication"
                    className="w-full h-full object-cover opacity-5 dark:opacity-10 rounded-2xl"
                  />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full relative z-10">
                    <thead className="bg-green-50 dark:bg-green-500/10">
                      <tr>
                        <th className="text-left py-4 px-6 text-green-700 dark:text-green-400 font-semibold">Method</th>
                        <th className="text-left py-4 px-6 text-green-700 dark:text-green-400 font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contactMethods.map((method, index) => (
                        <tr 
                          key={index}
                          className="border-b border-green-50 dark:border-green-500/10 hover:bg-green-25 dark:hover:bg-green-500/5 transition-all duration-300 group"
                        >
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                <method.icon className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-gray-800 dark:text-white font-medium">{method.title}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div>
                              <div className="text-green-600 dark:text-green-400 font-medium">{method.value}</div>
                              <div className="text-gray-600 dark:text-gray-300 text-sm">{method.description}</div>
                              <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400 mt-1">
                                <Clock className="w-3 h-3" />
                                <span>{method.availability}</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Ready to make a difference?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Whether you want to volunteer, donate, or partner with us, we'd love to hear from you!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Volunteer Now
                </button>
                <button className="border-2 border-green-200 dark:border-green-500/50 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-500/10 hover:border-green-300 dark:hover:border-green-400 px-6 py-3 rounded-xl font-medium transition-all duration-300">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl shadow-xl animate-slideInRight">
            <div className="bg-green-50 dark:bg-green-500/10 px-8 py-6 border-b border-green-100 dark:border-green-500/20">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Send us a message</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">We'll get back to you within 24 hours</p>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-green-200 dark:border-green-500/30 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-green-200 dark:border-green-500/30 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-green-200 dark:border-green-500/30 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  What can we help you with? *
                </label>
                <div className="bg-green-25 dark:bg-green-500/5 border border-green-100 dark:border-green-500/20 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {inquiryTypes.map((type, index) => (
                        <tr key={index} className="border-b border-green-100 dark:border-green-500/10 last:border-b-0 hover:bg-green-50 dark:hover:bg-green-500/10 transition-colors">
                          <td className="py-3 px-4">
                            <label className="flex items-center space-x-3 cursor-pointer">
                              <input
                                type="radio"
                                name="subject"
                                value={type.value}
                                checked={formData.subject === type.value}
                                onChange={(e) => handleSubjectChange(e.target.value)}
                                className="text-green-500 focus:ring-green-500"
                                required
                              />
                              <type.icon className="w-4 h-4 text-green-500" />
                              <div>
                                <span className="text-gray-800 dark:text-white text-sm font-medium">{type.label}</span>
                                <p className="text-gray-500 dark:text-gray-400 text-xs">{type.description}</p>
                              </div>
                            </label>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-green-200 dark:border-green-500/30 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  placeholder="Tell us how you'd like to get involved or what questions you have..."
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

        {/* Additional Information */}
        <div className="mt-16 animate-fadeInUp">
          <div className="bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Other Ways to Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Stay connected with our community through various channels and never miss an opportunity to make a difference.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Social Media</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Follow @shelltr_nfp for daily updates and behind-the-scenes content</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Newsletter</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Subscribe to our monthly newsletter for event updates and impact stories</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Community Events</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Meet us in person at our regular community events and volunteer opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;