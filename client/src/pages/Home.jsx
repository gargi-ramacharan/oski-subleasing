import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('/api/listings').then(res => setListings(res.data));
  }, []);

  return (
    <div>
      <h1>Oski Subleasing</h1>
      <div>
        {listings.map(listing => (
          <div key={listing._id}>
            <h2>{listing.title}</h2>
            <p>${listing.price}/month</p>
            <p>{listing.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;