import React from "react";

const Mission = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 flex items-center justify-center px-6 md:px-12 lg:px-20 py-20">
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Our mission is to provide{" "}
          <span className="text-teal-400">the best</span>
          <br />
          property management solutions.
        </h2>
        
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          To provide comprehensive and stress-free property management solutions, ensuring your Bangalore Kochi & Trivandrum investment property thrives, even when you can't be there.
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-teal-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-teal-400 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};

export default Mission;