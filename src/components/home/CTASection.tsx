import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.pexels.com/photos/3952045/pexels-photo-3952045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="World map" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Let our visa experts handle your application and make your international travel seamless and stress-free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="btn bg-accent-500 hover:bg-accent-600 text-white"
            >
              Contact an Expert
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/requirement-checker" 
              className="btn bg-transparent border border-white text-white hover:bg-white hover:text-primary-800"
            >
              Check Visa Requirements
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;