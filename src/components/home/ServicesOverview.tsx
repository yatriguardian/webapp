import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Import as Passport, Plane, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FileText size={48} className="text-primary-600" />,
    title: 'Visa Services',
    description: 'Expert assistance for visa applications to over 100 countries with high approval rates.',
    link: '/visa-services',
    items: ['Tourist Visas', 'Business Visas', 'Student Visas', 'Work Visas', 'Immigration Visas']
  },
  {
    icon: <Passport size={48} className="text-primary-600" />,
    title: 'Passport Services',
    description: 'Streamlined passport application, renewal, and emergency assistance services.',
    link: '/passport-services',
    items: ['New Applications', 'Renewals', 'Emergency Services', 'Lost Passport Assistance', 'Document Authentication']
  },
  {
    icon: <Plane size={48} className="text-primary-600" />,
    title: 'Travel Services',
    description: 'Comprehensive travel solutions including flights, accommodation, and packages.',
    link: '/travel-services',
    items: ['Flight Bookings', 'Hotel Reservations', 'Travel Insurance', 'Package Tours', 'Airport Transfers']
  }
];

const ServicesOverview: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer expert visa, passport, and travel services to make your international journey seamless and stress-free.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="card p-8 bg-white h-full flex flex-col justify-between"
              variants={itemVariants}
            >
              <div>
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                to={service.link} 
                className="group inline-flex items-center font-medium text-primary-600 hover:text-primary-800 transition-colors"
              >
                Learn More
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;