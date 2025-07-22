import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle, Search } from 'lucide-react';
import Footer from './Footer';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "What is Shelltr's mission?",
      answer: "Shelltr is a student-led non-profit organization focused on bringing hope, building community, and supporting those in need in the Aurora-Naperville area. We organize various community events and partner with local organizations to create positive change.",
      category: "About",
      tags: ["mission", "purpose", "goals"]
    },
    {
      question: "How can I volunteer with Shelltr?",
      answer: "We welcome volunteers of all ages! You can get involved by attending our events, helping with fundraising activities, or reaching out to us directly through our social media @shelltr_nfp. We also have regular volunteer opportunities with our partner organizations.",
      category: "Volunteer",
      tags: ["volunteer", "help", "participate"]
    },
    {
      question: "What types of events does Shelltr organize?",
      answer: "We organize various community events including sports activities for kids (like our Volleyball for Kids event), music fundraisers, food assistance programs, and partnerships with organizations like Letters Against Isolation and Loaves & Fishes.",
      category: "Events",
      tags: ["events", "activities", "programs"]
    },
    {
      question: "How are donations used?",
      answer: "All donations go directly toward funding our community events, purchasing supplies for our programs, and supporting local families and individuals in need. We maintain complete transparency in our financial operations and can provide detailed reports upon request.",
      category: "Donations",
      tags: ["donations", "money", "funding", "transparency"]
    },
    {
      question: "Who can participate in Shelltr events?",
      answer: "Our events are open to all community members! We welcome families, individuals, and groups who want to make a positive impact in our community. Some events may have age-specific activities, but we strive to be inclusive for all ages.",
      category: "Participation",
      tags: ["participation", "eligibility", "community"]
    },
    {
      question: "How can I stay updated on upcoming events?",
      answer: "Follow us on social media @shelltr_nfp for the most up-to-date information about our events and community initiatives. We also send out regular newsletters and post updates on our website.",
      category: "Updates",
      tags: ["updates", "social media", "news", "information"]
    },
    {
      question: "Can I suggest an event or initiative?",
      answer: "Absolutely! We're always open to new ideas and community suggestions. You can reach out to us through our contact form, social media, or speak with any of our board members. We value community input in shaping our programs.",
      category: "Suggestions",
      tags: ["suggestions", "ideas", "feedback", "input"]
    },
    {
      question: "Do you partner with other organizations?",
      answer: "Yes! We actively partner with organizations like Letters Against Isolation and Loaves & Fishes. We're always looking for new partnership opportunities that align with our mission of community service and support.",
      category: "Partnerships",
      tags: ["partnerships", "collaboration", "organizations"]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'About': 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-600',
      'Volunteer': 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-600',
      'Events': 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-600',
      'Donations': 'bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-600',
      'Participation': 'bg-pink-100 text-pink-800 border-pink-300 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-600',
      'Updates': 'bg-cyan-100 text-cyan-800 border-cyan-300 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-600',
      'Suggestions': 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-600',
      'Partnerships': 'bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600';
  };

  const filteredFAQs = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(faqItems.map(item => item.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-700 dark:text-green-400 text-sm font-medium">Support</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
            Frequently Asked <span className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-400 dark:to-green-600 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about Shelltr and our community work
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl p-6 shadow-lg mb-8 animate-slideInLeft">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions, answers, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-green-200 dark:border-green-500/30 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSearchTerm(category.toLowerCase())}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${getCategoryColor(category)} hover:scale-105 dark:bg-opacity-20`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Table */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-green-100 dark:border-green-500/20 rounded-2xl overflow-hidden shadow-xl animate-slideInRight relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Questions and answers"
              className="w-full h-full object-cover opacity-5 dark:opacity-10 rounded-2xl"
            />
          </div>
          <div className="bg-green-50 dark:bg-green-500/10 px-8 py-6 border-b border-green-100 dark:border-green-500/20 relative z-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Questions & Answers</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {filteredFAQs.length} of {faqItems.length} questions
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-25 dark:bg-green-500/5">
                <tr>
                  <th className="text-left py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg">Question</th>
                  <th className="text-center py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg hidden md:table-cell">Category</th>
                  <th className="text-center py-6 px-6 text-green-700 dark:text-green-400 font-semibold text-lg w-16">Expand</th>
                </tr>
              </thead>
              <tbody>
                {filteredFAQs.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr 
                      className="border-b border-green-50 dark:border-green-500/10 hover:bg-green-25 dark:hover:bg-green-500/5 transition-all duration-300 group cursor-pointer"
                      onClick={() => toggleItem(index)}
                    >
                      <td className="py-6 px-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-800 dark:text-white font-medium text-lg group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                            {item.question}
                          </span>
                        </div>
                        <div className="md:hidden mt-2">
                          <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium ${getCategoryColor(item.category)} dark:bg-opacity-20`}>
                            {item.category}
                          </span>
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center hidden md:table-cell">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(item.category)} dark:bg-opacity-20 dark:border-opacity-30`}>
                          {item.category}
                        </span>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="flex justify-center">
                          {openItems.includes(index) ? (
                            <ChevronUp className="w-5 h-5 text-green-500 dark:text-green-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-green-500 dark:text-green-400" />
                          )}
                        </div>
                      </td>
                    </tr>
                    {openItems.includes(index) && (
                      <tr className="bg-green-25 dark:bg-green-500/5">
                        <td colSpan={3} className="px-6 pb-6">
                          <div className="flex items-start space-x-3 ml-5">
                            <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                {item.answer}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="inline-flex items-center bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-lg text-xs"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 animate-fadeInUp">
          <div className="bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Reach out to us directly and we'll be happy to help. 
                We're always here to support our community members.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Direct Support</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Get personalized answers to your specific questions</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Quick Response</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">We typically respond within 24 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Comprehensive Help</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Detailed guidance for all your needs</p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;