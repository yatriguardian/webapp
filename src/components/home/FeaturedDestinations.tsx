import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const destinations = [
  {
    country: 'United States',
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Land of opportunities with diverse landscapes and vibrant cities.',
    visaTypes: ['Tourist', 'Business', 'Student', 'Work']
  },
  {
    country: 'United Kingdom',
    image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Rich history, modern culture, and world-class educational institutions.',
    visaTypes: ['Tourist', 'Student', 'Work', 'Family']
  },
  {
    country: 'Canada',
    image: 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Beautiful landscapes, friendly people, and quality of life.',
    visaTypes: ['Tourist', 'Student', 'Work', 'Express Entry']
  },
  {
    country: 'Australia',
    image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Stunning beaches, unique wildlife, and multicultural cities.',
    visaTypes: ['Tourist', 'Student', 'Work', 'Partner']
  },
  {
    country: 'Germany',
    image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Economic powerhouse with rich cultural heritage and innovation.',
    visaTypes: ['Tourist', 'Student', 'Work', 'Business']
  },
  {
    country: 'UAE',
    image: 'https://images.pexels.com/photos/1805272/pexels-photo-1805272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Modern marvels, desert adventures, and business opportunities.',
    visaTypes: ['Tourist', 'Business', 'Work', 'Golden Visa']
  }
];

const FeaturedDestinations: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  
  return (
    <section className="section">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Destinations</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore popular destinations where we offer specialized visa services with high approval rates.
            </p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button 
              ref={prevRef}
              className="p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-primary-50 hover:border-primary-500 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              ref={nextRef}
              className="p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-primary-50 hover:border-primary-500 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="destination-swiper"
        >
          {destinations.map((destination, index) => (
            <SwiperSlide key={index}>
              <div className="card h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.country} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {destination.country}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div>
                    <p className="font-medium mb-2">Visa Types:</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.visaTypes.map((type, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedDestinations;