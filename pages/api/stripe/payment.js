const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log('Received request with body:', req.body);
      const { amount } = req.body;

      
      if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
        return res.status(400).json({ error: 'Invalid amount' });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'inr',
              product_data: {
                name: 'Donations for Conservation Council Of Kashmir',
              },
              unit_amount: amount * 100, 
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'https://www.conservationcouncil.net/success',
        cancel_url: 'https://www.conservationcouncil.net/error-page',
      });

      res.status(200).json({ sessionId: session.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end();
  }
};



// import { NextApiRequest, NextApiResponse } from 'next';
// import Razorpay from 'razorpay';

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { amount } = req.body;

//       if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
//         return res.status(400).json({ error: 'Invalid amount' });
//       }

//       const options = {
//         amount: amount * 100, 
//         currency: 'INR', 
//         receipt: 'receipt_id', 
//         payment_capture: 1, 
//       };

//       razorpay.orders.create(options, (err, order) => {
//         if (err) {
//           return res.status(500).json({ error: 'Razorpay order creation failed' });
//         }

//         return res.status(200).json(order);
//       });

//     } catch (error) {
//       return res.status(500).json({ error: 'Razorpay order creation failed' });
//     }
//   }
// }




