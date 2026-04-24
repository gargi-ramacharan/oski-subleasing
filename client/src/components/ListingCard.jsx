import React from 'react';
import { Link } from 'react-router-dom';

function ListingCard({ listing }) {
  return (
    <div>
      <h2>{listing.title}</h2>
      <p>${listing.price}/month</p>
      <p>{listing.location}</p>
      <p>{listing.description}</p>
      <Link to={`/listing/${listing._id}`}>View Details</Link>
    </div>
  );
}

export default ListingCard;