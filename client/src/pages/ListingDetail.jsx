import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

function ListingDetail() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    axios.get(`/api/listings/${id}`).then(res => setListing(res.data));
  }, [id]);

  if (!listing) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <h1>{listing.title}</h1>
      <p>${listing.price}/month</p>
      <p>{listing.location}</p>
      <p>{listing.description}</p>
      <h2>Interested? Contact the subletter:</h2>
      <ContactForm listingId={listing._id} />
    </div>
  );
}

export default ListingDetail;