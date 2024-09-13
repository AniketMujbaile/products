import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import ProductCard from './ProductCard';
import SortSelect from './SortSelect';
import CategoryFilter from './CategoryFilter';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    try {
      const data = await getProducts(category);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const sortProducts = (products) => {
    return [...products].sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      }
      return a.name.localeCompare(b.name);
    });
  };

  const sortedProducts = sortProducts(products);

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <CategoryFilter category={category} setCategory={setCategory} />
        <SortSelect sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;