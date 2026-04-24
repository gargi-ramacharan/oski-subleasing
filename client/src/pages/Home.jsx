import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ListingCard from '../components/ListingCard';
import FilterBar from '../components/FilterBar';

function Home() {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState({ location: '', maxPrice: '' });

  useEffect(() => {
    axios.get('/api/listings')
      .then(res => setListings(res.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = listings.filter(l => {
    if (filters.location && l.location !== filters.location) return false;
    if (filters.maxPrice && l.price > filters.maxPrice) return false;
    return true;
  });

  return (
    <div>
      <Navbar />
      <FilterBar filters={filters} setFilters={setFilters} />
      <div>
        {filtered.map(listing => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </div>
  );
}

export default Home;