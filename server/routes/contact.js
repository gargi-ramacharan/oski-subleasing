const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Listing = require('../models/Listing');

router.post('/', async (req, res) => {
  const { listingId, senderEmail, message, dates } = req.body;

  try {
    const listing = await Listing.findById(listingId);
    if (!listing) return res.status(404).json({ message: 'Listing not found' });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: senderEmail,
      to: listing.contactEmail,
      subject: 'Someone is interested in your listing!',
      text: `${senderEmail} is interested in your unit for ${dates}.\n\nMessage: ${message}`,
    });

    res.json({ message: 'Email sent!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;