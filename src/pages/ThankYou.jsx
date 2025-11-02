import React from "react";
import { CheckCircleIcon, HomeIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

// navigated by the formspree

const ThankYou = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
      <div className="max-w-2xl mx-auto px-6 py-12 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <CheckCircleIcon className="w-32 h-32 text-teal-600 relative animate-bounce" />
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Thank You!
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-4">
          Your message has been sent successfully
        </p>
        
        <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
          We appreciate you reaching out to us. Our team will review your message and get back to you as soon as possible, usually within 24-48 hours.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <EnvelopeIcon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Check Your Email</h3>
            <p className="text-gray-600 text-sm">
              You'll receive a confirmation email shortly
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <HomeIcon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
            <p className="text-gray-600 text-sm">
              We typically respond within 24-48 hours
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-teal-500 transition-colors shadow-lg hover:shadow-xl"
          >
            <HomeIcon className="w-5 h-5" />
            Back to Home
          </Link>
          
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl border-2 border-teal-600"
          >
            <EnvelopeIcon className="w-5 h-5" />
            Send Another Message
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Need immediate assistance?{" "}
            <a href="tel:+15551234567" className="text-teal-600 hover:underline font-medium">
              Call us directly
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;