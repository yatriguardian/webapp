import React, { useState, useEffect } from 'react';

const NewsTickerBar: React.FC = () => {
  const [news, setNews] = useState<string[]>([
    "New visa regulations for UK travel - effective from October 2025",
    "Special discounts on travel packages to Europe this summer",
    "USA student visa appointments now available for 2026 intake",
    "Express passport service now available - get your passport in 3 working days",
    "Temporary visa changes for Australia announced - check eligibility"
  ]);
  
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % news.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [news.length]);
  
  return (
    <div className="news-ticker">
      <div className="container-custom">
        <div className="flex items-center">
          <div className="bg-accent-500 px-3 py-1 rounded text-xs font-bold text-white mr-3">
            NEWS
          </div>
          <div className="flex-1 overflow-hidden whitespace-nowrap">
            <div className="animate-in-right">
              {news[currentNewsIndex]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTickerBar;