import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                M
              </div>
              <span className="font-bold text-xl">Myntra</span>
            </div>
            <p className="text-gray-400">
              Your ultimate destination for fashion-forward clothing and accessories.
              Express your unique style with our curated collection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
                <i className="fa fa-facebook w-5 h-5" aria-hidden="true"></i>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
                <i className="fa fa-youtube w-5 h-5" aria-hidden="true"></i>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
                <i className="fa fa-instagram w-5 h-5" aria-hidden="true"></i>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
                <i className="fa fa-twitter w-5 h-5" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/category/men" className="text-gray-400 hover:text-white transition-colors">Men</Link></li>
              <li><Link to="/category/women" className="text-gray-400 hover:text-white transition-colors">Women</Link></li>
              <li><Link to="/category/kids" className="text-gray-400 hover:text-white transition-colors">Kids</Link></li>
              <li><Link to="/sale" className="text-gray-400 hover:text-white transition-colors">Sale</Link></li>
              <li><Link to="/new-arrivals" className="text-gray-400 hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/size-guide" className="text-gray-400 hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-500" />
                <span className="text-gray-400">+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-500" />
                <span className="text-gray-400">help@myntra.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-500" />
                <span className="text-gray-400">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Myntra. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
