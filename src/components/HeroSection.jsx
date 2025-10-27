import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white flex items-center px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto w-full flex flex-row gap-8 md:gap-12 lg:gap-20 items-center">
        
        {/* Left Section - Headline area content with animations */}
        <div className="flex-1 space-y-8 animate-fadeInLeft">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-teal-900 leading-tight">
            Relax!! We've got your investment property covered.
          </h1>
          
          <div className="space-y-4">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed">
              Nesture provides stress-free property management for landlords. Enjoy maximized rentals, minimized hassle, and exceptional care for your investment.
            </p>
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed">
              Currently operating in Bangalore, Kochi and Trivandrum
            </p>
          </div>
          
          <a 
            href="/contact" 
            className="inline-block bg-gray-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-semibold text-sm md:text-base"
          >
            Reach out to Us
          </a>
        </div>

        {/* Right Section - HERO IMAGE with overlapping frames and animations */}
        <div className="flex-1 relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Frame 1 - Back image with animation */}
          <div className="absolute left-0 top-0 w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl animate-fadeInUp">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
              alt="Modern apartment building"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          {/* Frame 2 - Front image with delayed animation */}
          <div className="absolute right-0 top-20 sm:top-24 md:top-32 lg:top-40 w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl animate-fadeInUpDelay">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
              alt="Modern living room interior"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;