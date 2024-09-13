import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        <p className="mt-2 text-sm text-gray-500">{product.description}</p>
        <p className="mt-2 text-lg font-semibold text-gray-900">{product.price.toFixed(2)} ₹</p>
      </div>
    </div>
  );
}

export default ProductCard;
