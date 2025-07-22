import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

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
      answer: "Shelltr is a student-led non-profit organization focused on bringing hope, building community, and supporting those in need in the Aurora-Naperville area.",
      category: "About"
    },
    {
      question: "How can I volunteer with Shelltr?",
      answer: "We welcome volunteers of all ages! You can get involved by attending our events, helping with fundraising activities, or reaching out to us directly through our social media @shelltr_nfp.",
      category: "Volunteer"
    },
    {
      question: "What types of events does Shelltr organize?",
      answer: "We organize various community events including sports activities for kids, music fundraisers, food assistance programs, and partnerships with other organizations like Letters Against Isolation.",
      category: "Events"
    },
    {
      question: "How are donations used?",
      answer: "All donations go directly toward funding our community events, purchasing supplies for our programs, and supporting local families and individuals in need.",
      category: "Donations"
    },
    {
      question: "Who can participate in Shelltr events?",
      answer: "Our events are open to all community members! We welcome families, individuals, and groups who want to make a positive impact in our community.",
      category: "Participation"
    },
    {
      question: "How can I stay updated on upcoming events?",
      answer: "Follow us on social media @shelltr_nfp for the most up-to-date information about our events and community initiatives.",
      category: "Updates"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'About': 'bg-blue-500/20 text-blue-400',
      'Volunteer': 'bg-green-500/20 text-green-400',
      'Events': 'bg-purple-500/20 text-purple-400',
      'Donations': 'bg-yellow-500/20 text-yellow-400',
      'Participation': 'bg-pink-500/20 text-pink-400',
      'Updates': 'bg-cyan-500/20 text-cyan-400'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Questions and answers"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Support</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Get answers to common questions about Shelltr and our community work
          </p>
        </div>

        {/* FAQ Table */}
        <div className="bg-black/40 backdrop-blur-xl border border-green-500/20 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-500/10">
                <tr>
                  <th className="text-left py-6 px-6 text-green-400 font-semibold text-lg">Question</th>
                  <th className="text-center py-6 px-6 text-green-400 font-semibold text-lg hidden md:table-cell">Category</th>
                  <th className="text-center py-6 px-6 text-green-400 font-semibold text-lg w-16">Status</th>
                </tr>
              </thead>
              <tbody>
                {faqItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr 
                      className="border-b border-green-500/10 hover:bg-green-500/5 transition-all duration-300 group cursor-pointer"
                      onClick={() => toggleItem(index)}
                    >
                      <td className="py-6 px-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-white font-medium text-lg group-hover:text-green-400 transition-colors">
                            {item.question}
                          </span>
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center hidden md:table-cell">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="flex justify-center">
                          {openItems.includes(index) ? (
                            <ChevronUp className="w-5 h-5 text-green-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-green-400" />
                          )}
                        </div>
                      </td>
                    </tr>
                    {openItems.includes(index) && (
                      <tr className="bg-green-500/5">
                        <td colSpan={3} className="px-6 pb-6">
                          <div className="flex items-start space-x-3 ml-5">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                            <p className="text-gray-300 leading-relaxed">
                              {item.answer}
                            </p>
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

        <div className="mt-12 text-center">
          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Reach out to us directly and we'll be happy to help.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;