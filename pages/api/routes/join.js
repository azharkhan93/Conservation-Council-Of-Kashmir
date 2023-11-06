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
        // text: `Dear ${PhoneNumber},\n\nThank you for joining us!`,
        text: `Dear ${PhoneNumber},\n\nThank you for joining us! We are excited to have you as part of our community. Your support and involvement are essential to our mission. Together, we can make a meaningful impact.\n\nIf you have any questions or ideas you'd like to share, please feel free to reach out. We look forward to working together for a better future.\n\nSincerely,\n[Fahad Javaid ]\n[Conservation Council Of Kashmir]`,
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
















