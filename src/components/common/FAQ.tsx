import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FAQProps {
  category: string;
  title: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ category, title }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqData: { [key: string]: FAQItem[] } = {
    visa: [
      {
        question: 'What documents are required for a tourist visa?',
        answer: 'The typical documents required for a tourist visa include a valid passport, visa application form, photographs, travel itinerary, proof of accommodation, proof of sufficient funds, travel insurance, and sometimes, a sponsor letter or invitation. Requirements may vary by country.'
      },
      {
        question: 'How long does the visa process take?',
        answer: 'Visa processing times vary by country and visa type. Generally, tourist visas take 5-15 business days, while work and student visas may take 2-8 weeks. During peak seasons, processing times may be longer. We recommend applying at least 1-2 months before your planned travel date.'
      },
      {
        question: 'What is the success rate for visa applications?',
        answer: 'Our agency maintains a 95% success rate for visa applications. We achieve this through thorough application preparation, documentation verification, and personalized guidance for each client based on their specific circumstances and destination country requirements.'
      },
      {
        question: 'Can you expedite my visa application?',
        answer: 'Yes, we offer expedited visa services for urgent travel needs. Additional fees may apply for expedited processing, and availability depends on the destination country. We can typically reduce processing times by 30-50% through our established relationships with consulates.'
      },
      {
        question: 'What happens if my visa application is rejected?',
        answer: 'If your visa application is rejected, we provide a full analysis of the rejection reasons and develop a reapplication strategy. In many cases, we can address the concerns and successfully reapply. Our services include one free reapplication assistance within 30 days of rejection.'
      }
    ],
    passport: [
      {
        question: 'How long does it take to get a new passport?',
        answer: 'Standard passport processing in India typically takes 30-45 days. With our premium service, we can help expedite the process to 7-14 days in most cases. Emergency passports can sometimes be obtained within 1-3 days for genuine emergencies like death in the family or urgent medical treatment abroad.'
      },
      {
        question: 'What should I do if my passport is lost or stolen?',
        answer: 'If your passport is lost or stolen, immediately file a police report. Then contact us for assistance with the replacement application. We will help you file a Lost Passport Report, prepare the necessary documents, and guide you through the replacement process, which may include an interview at the passport office.'
      },
      {
        question: 'Can I renew my passport before it expires?',
        answer: 'Yes, you can renew your passport up to one year before its expiration date. In fact, many countries require your passport to be valid for at least six months beyond your planned return date, so early renewal is often recommended. We provide seamless renewal services with minimum documentation.'
      },
      {
        question: 'Do I need to appear in person for passport services?',
        answer: 'For most passport services, at least one in-person appearance is required for biometric capture. However, our service includes appointment scheduling, document preparation, and guidance throughout the process to minimize your time at the passport office.'
      },
      {
        question: 'How many pages can I request in my new passport?',
        answer: 'Indian passports are now issued with a standard 36 pages. For frequent travelers, you can request a jumbo passport with 60 pages. We recommend the jumbo passport if you travel internationally more than 3-4 times per year or if you require multiple visas simultaneously.'
      }
    ],
    travel: [
      {
        question: 'Do you offer travel insurance?',
        answer: 'Yes, we offer comprehensive travel insurance packages that include medical coverage, trip cancellation, lost baggage protection, and emergency assistance. Our insurance plans are customizable based on your destination, duration of stay, and specific coverage needs.'
      },
      {
        question: 'Can I modify or cancel my flight booking?',
        answer: 'Flight modification and cancellation policies depend on the fare type and airline. We offer flexible booking options with minimal change fees when available. Our service includes assisting with any changes and advocating on your behalf with airlines to minimize penalties when unexpected changes occur.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including credit/debit cards (Visa, Mastercard, American Express), net banking, UPI, PayTM, and bank transfers. For large bookings, we also offer installment payment plans and corporate billing options. All payments are processed through secure gateways with encryption.'
      },
      {
        question: 'Do you offer group travel packages?',
        answer: 'Yes, we specialize in group travel arrangements for both leisure and business purposes. Our group packages include discounted rates, coordinated itineraries, group visa processing, and dedicated tour managers. We can accommodate groups of any size, with special expertise in family gatherings, corporate retreats, and educational tours.'
      },
      {
        question: 'How far in advance should I book my travel?',
        answer: 'For domestic travel, booking 1-3 months in advance typically offers the best rates. For international travel, we recommend booking 3-6 months ahead, especially for peak season travel. Last-minute bookings are possible but may incur higher costs. Our price monitoring tools help secure the best rates regardless of when you book.'
      }
    ]
  };
  
  const filteredFAQs = faqData[category].filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to commonly asked questions about our services.
          </p>
          
          <div className="max-w-2xl mx-auto mt-8 relative">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="input pl-12"
              />
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                    aria-expanded={openIndex === index}
                  >
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp size={20} className="text-primary-600" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-500" />
                    )}
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No results found. Please try a different search term.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;