import React, { useState, useEffect } from 'react';
import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  // Initialize state empty first, update when product changes
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes?.[0] || '');
      setSelectedColor(product.colors?.[0] || '');
    }
  }, [product]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        product,
        size: selectedSize,
        color: selectedColor,
      },
    });
  };

  if (!product) return null;

  return (
    <div className="group bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name || 'Product Image'}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Discount Tag */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            {product.discount}% OFF
          </div>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100"
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4 text-gray-600 hover:text-pink-500" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm text-gray-800 mb-1 line-clamp-1">
            {product.brand}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">{product.name}</p>
        </Link>

        {/* Rating */}
        <div className="flex items-center text-sm mt-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-700">{product.rating}</span>
          <span className="ml-2 text-gray-400">({product.reviews})</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-base font-bold text-gray-900">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
          )}
        </div>

        {/* Size Selector */}
        {product.sizes?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2 py-1 text-xs rounded border ${
                  selectedSize === size ? 'border-blue-600 font-semibold' : 'border-gray-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}

        {/* Color Selector */}
        {product.colors?.length > 0 && (
          <div className="flex space-x-2 mt-3">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                title={color}
                style={{ backgroundColor: color }}
                className={`w-6 h-6 rounded-full border-2 ${
                  color === selectedColor ? 'border-black' : 'border-gray-300'
                }`}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
        )}

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className={`mt-4 w-full py-2 rounded transition ${
            !selectedSize || !selectedColor
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
          disabled={!selectedSize || !selectedColor}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
