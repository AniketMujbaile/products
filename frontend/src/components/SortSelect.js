import React from 'react';

function SortSelect({ sortBy, setSortBy }) {
  return (
    <div>
      <label htmlFor="sort" className="block text-sm font-medium text-gray-700">
        Sort by
      </label>
      <select
        id="sort"
        name="sort"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
}

export default SortSelect;