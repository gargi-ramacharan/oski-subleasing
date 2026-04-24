import React from 'react';

function FilterBar({ filters, setFilters }) {
  return (
    <div>
      <select
        value={filters.location}
        onChange={e => setFilters({ ...filters, location: e.target.value })}
      >
        <option value="">All Locations</option>
        <option value="northside">Northside</option>
        <option value="southside">Southside</option>
      </select>

      <input
        type="number"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={e => setFilters({ ...filters, maxPrice: e.target.value })}
      />
    </div>
  );
}

export default FilterBar;