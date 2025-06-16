import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext.js';

const CategorySection = ({ product }) => {
  const { dispatch } = useCart();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes?.[0] || '');
      setSelectedColor(product.colors?.[0] || '');
    }
  }, [product]);

  if (!product) return null;

  const handleAdd = () => {
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

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>

      {/* Size selector */}
      {product.sizes?.length > 0 && (
        <div className="mt-2">
          <label className="mr-2 font-semibold">Size:</label>
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`mr-2 px-2 py-1 border rounded ${
                selectedSize === size ? 'border-blue-600 font-bold' : 'border-gray-300'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      )}

      {/* Color selector */}
      {product.colors?.length > 0 && (
        <div className="mt-2">
          <label className="mr-2 font-semibold">Color:</label>
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              style={{ backgroundColor: color }}
              className={`w-6 h-6 rounded-full border-2 mr-2 ${
                selectedColor === color ? 'border-black' : 'border-gray-300'
              }`}
              title={color}
            />
          ))}
        </div>
      )}

      <button
        onClick={handleAdd}
        className="mt-4 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CategorySection;
