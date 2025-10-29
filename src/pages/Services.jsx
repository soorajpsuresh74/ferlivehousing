import React from "react";
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const Services = () => {
  const differences = [
    {
      icon: <CheckCircleIcon className="w-10 h-10" />,
      title: "Effortless Ownership",
      description:
        "Enjoy complete peace of mind as FerliveHousing manages every aspect of your rental property in Trivandrum.",
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      title: "Trusted Local Experts",
      description:
        "Our Trivandrum-based team ensures your property receives the care, transparency, and professionalism it deserves.",
    },
    {
      icon: <HomeIcon className="w-10 h-10" />,
      title: "Guaranteed Peace of Mind",
      description:
        "With verified tenants, regular inspections, and prompt maintenance, your property stays safe and profitable.",
    },
  ];

  const renderCardSection = (title, text, imageLeft = true, bullets = []) => (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {imageLeft && (
          <div className="flex-1 relative">
            <img
              src={
                bullets.length
                  ? "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
                  : "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80"
              }
              alt={title}
              className="rounded-2xl shadow-xl w-full h-full object-cover animate-fadeInLeft"
            />
          </div>
        )}
        <div className="flex-1 space-y-6 animate-fadeInRight">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h3>
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
              src={
                bullets.length
                  ? "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
                  : "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80"
              }
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
              Our Property Management Services
            </h1>
            <p className="text-gray-700 text-lg max-w-xl">
              At <strong>FerliveHousing.com</strong>, we offer reliable and
              transparent property management solutions in Trivandrum — helping
              you earn steady rental income without the stress of daily
              involvement.
            </p>
          </div>
          <div className="flex-1 relative animate-fadeInRight">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80"
              alt="Trivandrum property management"
              className="rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experience the FerliveHousing Difference */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fadeInLeft space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Experience the FerliveHousing Advantage
            </h2>
            <p className="text-gray-600 text-lg">
              Let us handle tenant management, rent collection, and maintenance
              — while you enjoy a truly hands-free ownership experience. You can
              also download our detailed service brochure below.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center gap-2">
              Download Service Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 space-y-6 animate-fadeInRight">
            {differences.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {item.title}
                  </h3>
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
          Our Core Services
        </h2>
      </section>

      {/* Service Sections */}
      {renderCardSection(
        "Tenant Management & Placement",
        "Finding dependable tenants is the foundation of successful property ownership. FerliveHousing handles tenant sourcing, verification, and coordination with complete professionalism.",
        true,
        [
          "Comprehensive background verification",
          "Tenant move-in/move-out coordination",
          "Security deposit handling and documentation",
        ]
      )}

      {renderCardSection(
        "Legal & Documentation Support",
        "We take care of all documentation, legal formalities, and rental agreements to ensure smooth and compliant transactions between owner and tenant.",
        false,
        [
          "Preparation of lease/rental agreements",
          "Support for renewals and terminations",
          "End-to-end documentation and record keeping",
        ]
      )}

      {renderCardSection(
        "Property Maintenance & Upkeep",
        "Our dedicated team ensures your property remains in pristine condition through routine inspections, timely repairs, and preventive maintenance.",
        true,
        [
          "Electrical, plumbing, and carpentry support",
          "Whitewashing, cleaning, and upkeep services",
          "Scheduled inspections and condition reports",
        ]
      )}

      {renderCardSection(
        "Rent Collection & Owner Payouts",
        "We make rent collection and transfer completely hassle-free. Our transparent process ensures timely rent deposits directly to your account.",
        false,
        [
          "On-time rent reminders and collection",
          "Automated owner payout system",
          "Digital rent receipts and transaction history",
        ]
      )}

      {/* Additional Services */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            Additional Benefits
          </h3>
          <p className="text-gray-600 text-lg mb-4">
            FerliveHousing goes beyond traditional property management by
            offering smart tools and reliable service partners — helping you
            monitor your property’s performance anytime, anywhere.
          </p>
          <p className="text-gray-600 text-lg">
            Enjoy total transparency, verified maintenance updates, and
            long-term tenant retention — all under one trusted platform.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
