
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-900">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src="https://picsum.photos/seed/hero/1600/600"
          alt="Fashion models"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          New Season Arrivals
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-200">
          Discover the latest trends and refresh your wardrobe with our curated collection.
        </p>
        <a
          href="#"
          className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors"
        >
          Shop Collection
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
