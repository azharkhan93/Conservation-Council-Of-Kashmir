// routes.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/join', async (req, res) => {
  const { name, email } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'azharkhan.work101@gmail.com',
      pass: 'vnnbhzxsqhbvfcgn',
    },
  });
  const ownerMailOptions = {
    from: 'mail from user',
    to: 'ak305368@gmail.com',
    subject: 'New User Join Request',
    text: `Name: ${name}\nEmail: ${email}`,
  };

  const userMailOptions = {
    from: ' conservation council of kahshmir',
    to: email,
    subject: 'Welcome to Our Community',
    text: `Dear ${name},\n\nThank you for joining our community!\n\nBest regards,\nThe Team`,
  };

  try {
    await transporter.sendMail(ownerMailOptions); // Send email to owner
    await transporter.sendMail(userMailOptions);  // Send email to user
    // await transporter.sendMail(companyMailOptions); // Send email to company
    res.status(200).json({ message: 'Email sent successfully' });
    res.status(200).json({ message: 'Details sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

module.exports = router;












