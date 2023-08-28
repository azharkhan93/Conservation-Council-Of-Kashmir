export {};


import { Stripe } from "stripe"; // Import the correct Stripe type

// You should define the formatAmountForStripe function here
function formatAmountForStripe(amount: number, currency: string): number {
  // Implement the logic to format the amount for Stripe
  // For example:
  return amount * 100; // Convert to cents if Stripe expects cents
}

// Define CURRENCY and oninput.customDonation variables
const CURRENCY = "usd"; // Replace with your desired currency
const customDonation = 100; // Replace with the actual custom donation value

// Create a Checkout Session using the Stripe API
const params: Stripe.Checkout.SessionCreateParams = {
  submit_type: "donate",
  payment_method_types: ["card"],
  line_items: [
    {
      price_data: {
        currency: CURRENCY,
        product_data: {
          name: "Custom amount donation",
        },
        unit_amount: formatAmountForStripe(customDonation, CURRENCY),
      },
      quantity: 1,
    },
  ],
  success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
};

// Call Stripe API to create the Checkout Session
const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params);

