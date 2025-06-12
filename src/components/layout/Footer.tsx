import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/yatriguardian.in.png" 
                alt="Yatri Guardian Logo" 
                className="h-8 w-auto"
              />
              <div>
                <div className="text-xl font-bold text-white">Yatri</div>
                <div className="text-sm text-accent-400 -mt-1">Guardian</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              Yatri Guardian offers comprehensive visa and travel consultancy services to make your international journey smooth and hassle-free.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-6">Quick Links</h5>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/visa-services" className="text-gray-300 hover:text-white transition-colors">Visa Services</Link></li>
              <li><Link to="/passport-services" className="text-gray-300 hover:text-white transition-colors">Passport Services</Link></li>
              <li><Link to="/travel-services" className="text-gray-300 hover:text-white transition-colors">Travel Services</Link></li>
              <li><Link to="/requirement-checker" className="text-gray-300 hover:text-white transition-colors">Visa Requirements</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-6">Popular Destinations</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">USA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Canada</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">UK</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Australia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Schengen Countries</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">UAE</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-6">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="mr-3 text-accent-400 flex-shrink-0" />
                <span className="text-gray-300">1501, 2B Paradise Heights CHS, MHADA Complex, Opp. Witty International School, Chikuwadi, Borivali West, Mumbai 400067</span>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-3 text-accent-400 flex-shrink-0" />
                <a href="tel:+919136759842" className="text-gray-300 hover:text-white transition-colors">+919136759842</a>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-3 text-accent-400 flex-shrink-0" />
                <a href="mailto:connect@yatriguardian.in" className="text-gray-300 hover:text-white transition-colors">connect@yatriguardian.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-primary-700">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Yatri Guardian. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;