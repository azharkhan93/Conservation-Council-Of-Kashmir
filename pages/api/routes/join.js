import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { PhoneNumber, email } = req.body;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'azharkhan.work101@gmail.com',
          pass: 'vnnbhzxsqhbvfcgn',
        },
      });

      
      const userMessage = {
        from: 'ak305368@gmail.com', 
        to: email,
        subject: 'Welcome to our community',
        text: `Dear ${PhoneNumber},\n\nThank you for joining us!`,
      };

      
      const ownerMessage = {
        from: 'ak305368@gmail.com', 
        to: 'azharkhan.work101@gmail.com', 
        subject: 'New User Joined',
        text: `Name: ${PhoneNumber}\nEmail: ${email}`,
      };

        

      await transporter.sendMail(userMessage);
       await transporter.sendMail(ownerMessage);

      res.status(200).json({ message: 'Success' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).end();
  }
}
















