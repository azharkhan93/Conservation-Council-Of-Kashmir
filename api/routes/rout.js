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
  const mailOptions = {
    from: 'azharkhan.work101@gmail.com',
    to: 'ak305368@gmail.com', 
    subject: 'New Join Request',
    text: `Name: ${name}\nEmail: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
// });
});

module.exports = router;












