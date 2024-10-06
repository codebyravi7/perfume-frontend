import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import logo from "../../public/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log("Subscribed with email:", email);
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img className="h-10" src={logo} alt="Company name" />
            <p className="text-pink-100 text-sm">
              Crafting exquisite scents that captivate the senses and evoke
              unforgettable memories.
            </p>
            <div className="flex space-x-6">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-pink-200 hover:text-pink-100"
                  >
                    <span className="sr-only">Social Media</span>
                    <Icon className="h-6 w-6" />
                  </a>
                )
              )}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-pink-200 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  {["Fragrances", "Gift Sets", "Body Care", "Accessories"].map(
                    (item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-sm text-pink-100 hover:text-white"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-pink-200 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  {["Pricing", "Documentation", "Guides", "API Status"].map(
                    (item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-sm text-pink-100 hover:text-white"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-pink-200 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {["About", "Blog", "Jobs", "Press", "Partners"].map(
                    (item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-sm text-pink-100 hover:text-white"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-pink-200 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {["Claim", "Privacy", "Terms"].map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-sm text-pink-100 hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-pink-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-pink-400" />
              <span className="text-sm text-pink-100">
                contact@essenceelegance.com
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-pink-400" />
              <span className="text-sm text-pink-100">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-pink-400" />
              <span className="text-sm text-pink-100">
                123 Fragrance Lane, Perfume City, 90210
              </span>
            </div>
          </div>
          <div className="mt-8 border-t border-pink-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-pink-100 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-pink-100 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-pink-100 hover:text-white text-sm">
                Cookie Policy
              </a>
            </div>
            <p className="mt-8 text-base text-pink-100 md:mt-0 md:order-1">
              &copy; {new Date().getFullYear()} Essence Elegance. All rights
              reserved.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-pink-200 tracking-wider uppercase mb-4">
            Subscribe to our newsletter
          </h3>
          <form onSubmit={handleSubmit} className="sm:flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 sm:max-w-xs border-pink-700 rounded-md"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-md sm:mt-0 sm:ml-3"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
