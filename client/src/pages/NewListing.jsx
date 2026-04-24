import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function NewListing() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    price: '',
    location: 'northside',
    description: '',
    contactEmail: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/listings', form);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Post a New Listing</h1>
      <input
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Price per month"
        type="number"
        value={form.price}
        onChange={e => setForm({ ...form, price: e.target.value })}
      />
      <select
        value={form.location}
        onChange={e => setForm({ ...form, location: e.target.value })}
      >
        <option value="northside">Northside</option>
        <option value="southside">Southside</option>
      </select>
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
      />
      <input
        placeholder="Your contact email"
        value={form.contactEmail}
        onChange={e => setForm({ ...form, contactEmail: e.target.value })}
      />
      <button onClick={handleSubmit}>Post Listing</button>
    </div>
  );
}

export default NewListing;