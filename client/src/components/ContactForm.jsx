import React, { useState } from 'react';
import axios from 'axios';

function ContactForm({ listingId }) {
  const [form, setForm] = useState({ senderEmail: '', message: '', dates: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', { ...form, listingId });
      setSent(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (sent) return <p>Email sent to the subletter!</p>;

  return (
    <div>
      <input
        placeholder="Your email"
        value={form.senderEmail}
        onChange={e => setForm({ ...form, senderEmail: e.target.value })}
      />
      <input
        placeholder="Dates you need"
        value={form.dates}
        onChange={e => setForm({ ...form, dates: e.target.value })}
      />
      <textarea
        placeholder="Message"
        value={form.message}
        onChange={e => setForm({ ...form, message: e.target.value })}
      />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default ContactForm;