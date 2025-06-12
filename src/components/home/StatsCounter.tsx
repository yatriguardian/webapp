import React, { useState, useEffect, useRef } from 'react';
import { Users, FileCheck, Award, Globe } from 'lucide-react';
import CountUp from 'react-countup';

const stats = [
  {
    icon: <Users size={40} className="text-primary-600" />,
    value: 15000,
    label: 'Happy Clients',
    suffix: '+'
  },
  {
    icon: <FileCheck size={40} className="text-primary-600" />,
    value: 25000,
    label: 'Visas Processed',
    suffix: '+'
  },
  {
    icon: <Award size={40} className="text-primary-600" />,
    value: 95,
    label: 'Success Rate',
    suffix: '%'
  },
  {
    icon: <Globe size={40} className="text-primary-600" />,
    value: 100,
    label: 'Countries Covered',
    suffix: '+'
  }
];

const StatsCounter: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-16 bg-primary-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-primary-700 bg-opacity-50">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">
                {isVisible ? (
                  <CountUp 
                    end={stat.value} 
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="text-lg text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;