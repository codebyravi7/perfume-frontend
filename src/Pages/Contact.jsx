import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-pink-700">
              Get in Touch
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-pink-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-pink-300"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-pink-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="p-6 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-pink-700">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-pink-600" />
                  <span>123 Perfume Lane, Paris, France</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-pink-600" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-pink-600" />
                  <span>contact@essenceelegance.com</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-pink-700">
                Visit Our Boutique
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.101849022946!2d2.332236615675183!3d48.85884407928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f1a3bc9f517%3A0xf28c51492c56ae6f!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1639629743158!5m2!1sen!2sfr"
                  width="600"
                  height="450"
                  className="w-full h-full rounded-md"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
