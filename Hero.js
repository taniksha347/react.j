import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white"
      role="region"
      aria-label="Fashion Promotion Hero Section"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Fashion
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Forward
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-pink-100 leading-relaxed">
                Discover the latest trends and express your unique style with our curated collection of premium fashion.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">Free Shipping</span>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">Easy Returns</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/category/women"
                  className="group bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center"
                >
                  Shop Women
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/category/men"
                  className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition duration-300 flex items-center justify-center"
                >
                  Shop Men
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Stylish female model in red jacket"
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-2xl shadow-2xl transition duration-500 ease-in-out transform hover:scale-105"
                />
                <img
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Male model in streetwear fashion"
                  loading="lazy"
                  className="w-full h-32 object-cover rounded-2xl shadow-2xl transition duration-500 ease-in-out transform hover:scale-105"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Elegant woman in white fashion outfit"
                  loading="lazy"
                  className="w-full h-32 object-cover rounded-2xl shadow-2xl transition duration-500 ease-in-out transform hover:scale-105"
                />
                <img
                  src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Model posing in sunlight with sunglasses"
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-2xl shadow-2xl transition duration-500 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
