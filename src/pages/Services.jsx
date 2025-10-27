import React from "react";
import { CheckCircleIcon, ShieldCheckIcon, HomeIcon } from "@heroicons/react/24/outline";

const Services = () => {
  const differences = [
    {
      icon: <CheckCircleIcon className="w-10 h-10" />,
      title: "Stress-Free Ownership",
      description: "Focus on what matters most, while we handle all aspects of tenant management.",
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      title: "Experienced Professionals",
      description: "Our team brings expertise and a commitment to excellence to your property.",
    },
    {
      icon: <HomeIcon className="w-10 h-10" />,
      title: "Peace of Mind",
      description: "Rest assured knowing your property is in safe hands with Nesture's comprehensive services.",
    },
  ];

  const renderCardSection = (title, text, imageLeft = true, bullets = []) => (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {imageLeft && (
          <div className="flex-1 relative">
            <img
              src={bullets.length ? "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80" : "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80"}
              alt={title}
              className="rounded-2xl shadow-xl w-full h-full object-cover animate-fadeInLeft"
            />
          </div>
        )}
        <div className="flex-1 space-y-6 animate-fadeInRight">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-lg">{text}</p>
          {bullets.length > 0 && (
            <ul className="space-y-4">
              {bullets.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {!imageLeft && (
          <div className="flex-1 relative">
            <img
              src={bullets.length ? "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80" : "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80"}
              alt={title}
              className="rounded-2xl shadow-xl w-full h-full object-cover animate-fadeInRight"
            />
          </div>
        )}
      </div>
    </section>
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-50 to-blue-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-fadeInLeft">
            <h1 className="text-5xl md:text-6xl font-bold text-teal-700 mb-6">
              What We Offer
            </h1>
          </div>
          <div className="flex-1 relative animate-fadeInRight">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80"
              alt="Modern architecture"
              className="rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experience the Nesture Difference */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fadeInLeft space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Experience the Nesture Difference.
            </h2>
            <p className="text-gray-600 text-lg">
              Let us help you find the perfect tenant and manage your property with ease. Download document for more details
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center gap-2">
              Download Details
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </button>
          </div>
          <div className="flex-1 space-y-6 animate-fadeInRight">
            {differences.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Provided Title */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 animate-fadeInUp">
          Service Provided
        </h2>
      </section>

      {/* All Sections with Side-by-Side Layout */}
      {renderCardSection(
        "Finding Your Ideal Tenant",
        "Finding the right tenant can feel like a gamble. At Nesture Property Care, we take the guesswork out of the equation.",
        true,
        [
          "Background Checks for Tenant Safety",
          "Rental Follow-Ups & Security Deposit Collection",
          "Tenant Replacement & Property Inspections",
        ]
      )}

      {renderCardSection(
        "Paperwork & Legal Formalities",
        "Relax and enjoy peace of mind throughout the lease. Nesture Care handles everything, from rent collection and security deposit management to seamless tenant transitions and regular property inspections.",
        false,
        [
          "Rental Agreements & Legal Support",
          "Smooth & Hassle-Free Transactions",
        ]
      )}

      {renderCardSection(
        "Taking Care of the Details",
        "We take care of the details so you don't have to. Nesture Property Care provides comprehensive support for all lease agreements and legal formalities. We also prioritize clear and transparent communication, ensuring you stay informed throughout the entire lease term.",
        true
      )}

      {renderCardSection(
        "Comprehensive Property Maintenance",
        "Our team of experienced professionals ensures your Bangalore property stays in top condition.",
        false,
        [
          "Whitewashing & Painting",
          "Electrical & Carpentry Repairs",
          "Plumbing & Fixtures Solutions",
        ]
      )}

      {/* Additional Services */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            Additional Services
          </h3>
          <p className="text-gray-600 text-lg mb-4">
            Nesture Property Care goes the extra mile with additional services like thorough inventory checks to document the condition of your property and its contents.
          </p>
          <p className="text-gray-600 text-lg">
            Thorough inventory management to keep track of all property assets.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
