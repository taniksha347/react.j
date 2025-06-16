import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { state } = useCart();

  const categories = ['Men', 'Women', 'Kids', 'Home & Living', 'Beauty', 'Studio'];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-pink-500 text-white text-xs py-1">
        <div className="max-w-7xl mx-auto px-4 text-center">
          Free shipping on orders above ₹1999 | Download App for Extra Savings
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
              M
            </div>
            <span className="font-bold text-xl text-gray-800 hidden sm:block">Myntra</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} // replace spaces with hyphens for URL friendly
                className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-200 relative group"
              >
                {category}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="bg-transparent flex-1 outline-none text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <Link
              to="/profile"
              className="hidden sm:flex flex-col items-center text-gray-700 hover:text-pink-500 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="text-xs mt-1">Profile</span>
            </Link>

            <Link
              to="/wishlist"
              className="hidden sm:flex flex-col items-center text-gray-700 hover:text-pink-500 transition-colors"
            >
              <Heart className="w-5 h-5" />
              <span className="text-xs mt-1">Wishlist</span>
            </Link>

            <Link
              to="/cart"
              className="flex flex-col items-center text-gray-700 hover:text-pink-500 transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="text-xs mt-1">Bag</span>
              {state.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="bg-transparent flex-1 outline-none text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-4">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-gray-700 hover:text-pink-500 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {category}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
