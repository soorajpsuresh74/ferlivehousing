import React, { useState } from "react";

const featuresData = [
  {
    title: "Professional Management",
    description:
      "Our team comprises graduates from CET Trivandrum, ensuring a smooth and efficient property management experience.",
    moreInfo:
      "We manage tenant onboarding, rent collection, and maintenance, ensuring full transparency and peace of mind.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
        />
      </svg>
    ),
  },
  {
    title: "Hassle-Free Ownership",
    description:
      "We handle everything from finding reliable tenants to managing maintenance, freeing up your valuable time.",
    moreInfo:
      "From tenant screening to legal agreements, Nesture ensures a seamless landlord experience without interruptions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
        />
      </svg>
    ),
  },
  {
    title: "Investment Protection",
    description:
      "We prioritize proactive maintenance and regular inspections to safeguard your property's value.",
    moreInfo:
      "Routine inspections and preventive measures reduce major repair costs and extend property longevity.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
  {
    title: "Smart Solutions",
    description:
      "We attract high-quality tenants with innovative marketing strategies to maximize your rental income.",
    moreInfo:
      "Our smart digital systems optimize tenant communication and automate property tracking for efficiency.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
        />
      </svg>
    ),
  },
];

const Features = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) =>
    setExpanded(expanded === index ? null : index);

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 animate-fadeInUp">
          Features
        </h2>

        <div className="flex flex-nowrap gap-8 overflow-x-auto hide-scrollbar py-8 px-4">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 min-w-[280px] flex-1 flex flex-col items-center animate-fadeInUp hover:scale-105"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon with pulse animation */}
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white mb-6 hover:animate-pulse">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Expandable Section with smooth transition */}
              {expanded === index && (
                <div className="text-gray-500 text-sm mb-4 animate-fadeIn">
                  {feature.moreInfo}
                </div>
              )}

              <button
                onClick={() => toggleExpand(index)}
                className="mt-auto bg-teal-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-teal-700 transition-all duration-300 hover:scale-110"
              >
                {expanded === index ? "Show Less" : "Learn More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;