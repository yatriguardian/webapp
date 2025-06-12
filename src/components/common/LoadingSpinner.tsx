import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-16 h-16 border-t-4 border-b-4 border-primary-600 rounded-full animate-spin"></div>
        <div className="w-16 h-16 border-t-4 border-primary-300 rounded-full animate-pulse absolute top-0 left-0 opacity-75"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;