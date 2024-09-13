import React from 'react';

function CategoryFilter({ category, setCategory }) {
  const categories = ['', 'Electronics', 'Clothing', 'Books', 'Home & Garden'];

  return (
    <div>
      <label htmlFor="category" className="block text-sm font-medium text-gray-700">
        Filter by Category
      </label>
      <select
        id="category"
        name="category"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;