

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { fullName, email, PhoneNumber, message } = req.body;
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
    text: `Name: ${fullName}\nEmail: ${email}\nCompany: ${PhoneNumber}\nMessage: ${message}`,
  };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).end();
  }
}

