import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nationality: '',
    destination: '',
    purpose: ''
  });
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getCountryName = (code: string) => {
    const countries: { [key: string]: string } = {
      'in': 'India',
      'us': 'United States',
      'uk': 'United Kingdom',
      'ca': 'Canada',
      'au': 'Australia',
      'de': 'Germany',
      'fr': 'France'
    };
    return countries[code] || code;
  };

  const getPurposeName = (code: string) => {
    const purposes: { [key: string]: string } = {
      'tourism': 'Tourism',
      'business': 'Business',
      'study': 'Study',
      'work': 'Work',
      'family': 'Family Visit',
      'medical': 'Medical'
    };
    return purposes[code] || code;
  };

  const handleCheckRequirements = () => {
    if (formData.nationality && formData.destination && formData.purpose) {
      // Store the form data in sessionStorage to pass to the requirement checker page
      sessionStorage.setItem('visaRequirementData', JSON.stringify(formData));
      // Show WhatsApp modal first
      setShowWhatsAppModal(true);
    } else {
      alert('Please fill in all fields before checking requirements.');
    }
  };

  const handleWhatsAppShare = () => {
    const message = `Hello Yatri Guardian,

I would like to check visa requirements with the following details:

📍 My Nationality: ${getCountryName(formData.nationality)}
🎯 Destination Country: ${getCountryName(formData.destination)}
✈️ Purpose of Visit: ${getPurposeName(formData.purpose)}

Please provide me with the visa requirements and assistance for my travel.

Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919136759842?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setShowWhatsAppModal(false);
    
    // Navigate to requirement checker page after WhatsApp
    setTimeout(() => {
      window.location.href = '/requirement-checker';
    }, 1000);
  };

  const handleSkipWhatsApp = () => {
    setShowWhatsAppModal(false);
    // Navigate to requirement checker page
    window.location.href = '/requirement-checker';
  };

  return (
    <section className="relative bg-primary-800 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Landmarks around the world" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Journey Begins with Expert Visa Assistance
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
              Premier visa and travel consultancy services to make your international travel seamless and stress-free.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Link to="/requirement-checker" className="btn bg-accent-500 hover:bg-accent-600 text-white">
                Check Visa Requirements
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn bg-transparent border border-white text-white hover:bg-white hover:text-primary-800">
                Contact an Expert
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <CheckCircle2 size={20} className="text-accent-400 mr-2" />
                <span>100+ Countries</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 size={20} className="text-accent-400 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 size={20} className="text-accent-400 mr-2" />
                <span>95% Success Rate</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="bg-white rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Find Visa Requirements</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-600 mb-2 text-sm">Your Nationality</label>
                  <select 
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    className="select bg-gray-50 text-gray-800"
                  >
                    <option value="">Select your country</option>
                    <option value="in">India</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 mb-2 text-sm">Destination Country</label>
                  <select 
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="select bg-gray-50 text-gray-800"
                  >
                    <option value="">Select destination</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="au">Australia</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 mb-2 text-sm">Purpose of Visit</label>
                  <select 
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    className="select bg-gray-50 text-gray-800"
                  >
                    <option value="">Select purpose</option>
                    <option value="tourism">Tourism</option>
                    <option value="business">Business</option>
                    <option value="study">Study</option>
                    <option value="work">Work</option>
                    <option value="immigration">Immigration</option>
                  </select>
                </div>
                <button 
                  type="button" 
                  onClick={handleCheckRequirements}
                  className="btn bg-primary-600 hover:bg-primary-700 text-white w-full"
                >
                  Check Requirements
                </button>
              </form>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-500 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-secondary-500 rounded-full z-[-1]"></div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Share via WhatsApp</h3>
            <p className="text-gray-600 mb-4">
              Would you like to share your visa requirement details via WhatsApp for instant assistance?
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-gray-800 mb-2">Your Details:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Nationality: {getCountryName(formData.nationality)}</li>
                <li>• Destination: {getCountryName(formData.destination)}</li>
                <li>• Purpose: {getPurposeName(formData.purpose)}</li>
              </ul>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleSkipWhatsApp}
                className="btn btn-outline"
              >
                Skip
              </button>
              <button
                onClick={handleWhatsAppShare}
                className="btn bg-green-500 hover:bg-green-600 text-white"
              >
                Share on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;