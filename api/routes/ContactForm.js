const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/submit', async (req, res) => {
  const { fullName, email, company, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'azharkhan.work101@gmail.com',
      pass: 'vnnbhzxsqhbvfcgn',
    },
  });

  const mailOptions = {
    from: 'ak305368@gmail.com',
    to: 'azharkhan.work101@gmail.com', 
    subject: 'New Contact Form Submission',
    text: `Name: ${fullName}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

module.exports = router;