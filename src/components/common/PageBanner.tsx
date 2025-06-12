import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageBannerProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="relative bg-primary-800 py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            {subtitle}
          </p>
          <div className="flex items-center text-gray-200">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-white">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;