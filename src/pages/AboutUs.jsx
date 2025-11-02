import React from "react";
import {
  HeartIcon,
  ShieldCheckIcon,
  UsersIcon,
  TrophyIcon,
  SparklesIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const AboutUs = () => {
  const values = [
    {
      icon: <HeartIcon className="w-10 h-10" />,
      title: "Care & Commitment",
      description:
        "We treat every property as our own, ensuring it receives the attention and care it deserves.",
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      title: "Trust & Transparency",
      description:
        "Open communication and honest practices form the foundation of everything we do.",
    },
    {
      icon: <SparklesIcon className="w-10 h-10" />,
      title: "Excellence in Service",
      description:
        "From tenant screening to maintenance, we deliver premium quality in every interaction.",
    },
    {
      icon: <UsersIcon className="w-10 h-10" />,
      title: "Client-First Approach",
      description:
        "Your success is our success. We prioritize your goals and peace of mind above all.",
    },
  ];

  const stats = [
    { number: "500+", label: "Properties Managed" },
    { number: "1000+", label: "Happy Clients" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "3", label: "Cities Served" },
  ];

  const team = [
    {
      name: "Professional Team",
      role: "Dedicated Experts",
      description: "Our experienced team brings years of property management expertise to serve you better.",
    },
    {
      name: "Local Knowledge",
      role: "Market Specialists",
      description: "Deep understanding of Trivandrum property markets.",
    },
    {
      name: "24/7 Support",
      role: "Always Available",
      description: "Round-the-clock assistance ensures your property needs are met promptly.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-50 to-blue-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-teal-900 leading-tight">
              About FerliveHousing
            </h1>
            <p className="text-gray-700 text-xl leading-relaxed">
              More than property management—we're your trusted partner in real estate success.
            </p>
            <p className="text-gray-600 text-lg">
              Founded with a vision to revolutionize property management, FerliveHousing brings together 
              innovation, expertise, and genuine care to help property owners thrive.
            </p>
          </div>
          <div className="flex-1 relative">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80"
              alt="FerliveHousing property management"
              className="rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Our journey"
              className="rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              FerliveHousing was born from a simple observation: property owners needed more than 
              just management—they needed a partner who truly cared about their investment's success.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We've built our company on the principle that exceptional property management 
              combines cutting-edge technology with genuine human touch. Today, we're proud 
              to serve hundreds of property owners across Trivandrum, 
              turning their real estate investments into thriving assets.
            </p>
            <div className="flex items-center gap-3 pt-4">
              <TrophyIcon className="w-8 h-8 text-teal-600" />
              <p className="text-gray-700 font-semibold">
                Award-winning service recognized across South India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-teal-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every service we provide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white">
              <HomeIcon className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower property owners with stress-free, profitable real estate investments 
              through exceptional management, transparent communication, and unwavering dedication 
              to their success.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white">
              <SparklesIcon className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become India's most trusted property management company, setting new standards 
              for excellence, innovation, and client satisfaction in the real estate industry.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Property Owners Trust FerliveHousing
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We combine local expertise, proven processes, and personal attention to deliver 
              results that exceed expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-teal-600 font-semibold mb-4">{item.role}</p>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-teal-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Experience the FerliveHousing Difference?
          </h2>
          <p className="text-teal-100 text-lg">
            Join hundreds of satisfied property owners who've discovered the peace of mind 
            that comes with truly exceptional property management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="/contact"
              className="inline-block bg-white text-teal-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
            >
              Get Started Today
            </a>
            <a
              href="/services"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-teal-900 transition-all duration-300 font-semibold text-lg"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;