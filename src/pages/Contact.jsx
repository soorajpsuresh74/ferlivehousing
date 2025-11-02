import React, { useState } from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { contactInfo } from '../contactInfo';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/xpwokdkv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        alert(contactInfo.thankYouMessage);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      setStatus("error");
      alert("Oops! There was a problem submitting your form");
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-teal-700 mb-4">
          {contactInfo.heroTitle}
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          {contactInfo.heroSubtitle}
        </p>
      </section>

      {/* Contact Details + Form */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              {contactInfo.getInTouchTitle}
            </h2>
            <p className="text-gray-600 text-lg">
              {contactInfo.getInTouchDescription}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPinIcon className="w-6 h-6 text-teal-600" />
                <span className="text-gray-700">{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-4">
                <PhoneIcon className="w-6 h-6 text-teal-600" />
                <span className="text-gray-700">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <EnvelopeIcon className="w-6 h-6 text-teal-600" />
                <span className="text-gray-700">{contactInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-lg"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-500 transition-colors disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <iframe
            title={`${contactInfo.companyName} Office Location`}
            className="w-full h-96 rounded-2xl shadow-lg"
            src={contactInfo.mapEmbedUrl}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;