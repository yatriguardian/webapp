import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    title: 'New Schengen Visa Rules for 2026',
    excerpt: 'The European Union has announced changes to Schengen visa applications starting January 2026. Know how this might affect your travel plans.',
    image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'October 15, 2025',
    author: 'Visa Expert Team'
  },
  {
    id: 2,
    title: 'Canada Expands Express Entry Program',
    excerpt: 'Canada has expanded its Express Entry program to include new categories of skilled workers. Check if you qualify under the new criteria.',
    image: 'https://images.pexels.com/photos/635529/pexels-photo-635529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'September 28, 2025',
    author: 'Immigration Specialists'
  },
  {
    id: 3,
    title: 'US Student Visa Interview Tips',
    excerpt: 'Preparing for your US student visa interview? Our experts share the top tips to increase your chances of approval.',
    image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'September 10, 2025',
    author: 'Student Visa Advisor'
  }
];

const LatestNews: React.FC = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Travel News</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Stay updated with the latest visa regulations, travel advisories, and immigration news.
            </p>
          </div>
          <Link to="#" className="mt-4 md:mt-0 flex items-center font-medium text-primary-600 hover:text-primary-800 transition-colors">
            View All News
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="card h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{item.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link 
                  to="#" 
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 transition-colors"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;