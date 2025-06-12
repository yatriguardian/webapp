import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Arjun Sharma',
    role: 'Student',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    text: 'I got my student visa for Australia approved in record time. Their guidance throughout the entire process was exceptional. They helped me prepare all the right documents and coached me for the interview. Highly recommended!',
    destination: 'Australia'
  },
  {
    name: 'Priya Patel',
    role: 'Business Professional',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    text: 'Yatri Guardian helped me secure a business visa to the USA when I had previously been rejected twice. Their expertise made all the difference. The team knows exactly what immigration officers are looking for.',
    destination: 'USA'
  },
  {
    name: 'Rahul Khanna',
    role: 'Software Engineer',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
    text: 'I needed a work visa to Canada urgently, and they delivered. The process was streamlined, and they kept me informed at every step. The only reason for 4 stars is that the fees were slightly higher than expected.',
    destination: 'Canada'
  },
  {
    name: 'Neha Gupta',
    role: 'Tourist',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    text: 'I was planning a vacation across multiple European countries and had no idea about the Schengen visa process. Their team made it so simple and handled everything professionally. My trip was wonderful!',
    destination: 'Europe'
  },
  {
    name: 'Vikram Singh',
    role: 'Medical Professional',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    text: 'As a doctor relocating to the UK, my visa process was complex. Yatri Guardian provided expert assistance that made my transition smooth. Their knowledge of medical registration requirements was impressive.',
    destination: 'UK'
  }
];

const Testimonials: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={18} 
        className={i < rating ? 'text-accent-500 fill-accent-500' : 'text-gray-300'} 
      />
    ));
  };
  
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Read testimonials from our satisfied clients who successfully obtained their visas and traveled seamlessly.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -top-12 -left-12 text-primary-200 opacity-20 z-0">
            <Quote size={120} />
          </div>
          
          <div className="flex justify-end mb-8">
            <div className="flex space-x-2">
              <button 
                ref={prevRef}
                className="p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-primary-50 hover:border-primary-500 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                ref={nextRef}
                className="p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-primary-50 hover:border-primary-500 transition-colors"
                aria-label="Next testimonial"
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
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.testimonial-pagination' }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="relative z-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md p-8 h-full">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-primary-600">
                      Destination: {testimonial.destination}
                    </span>
                    <Quote size={20} className="text-accent-400" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="testimonial-pagination flex justify-center mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;