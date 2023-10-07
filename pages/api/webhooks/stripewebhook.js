const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async function (req, res) {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
        console.error('Stripe webhook secret is not defined.');
        return res.status(400).end();
    }

    if (req.method === 'POST') {
        const sig = req.headers['stripe-signature'];
        let event;

        try {
            event = stripe.webhooks.constructEvent(
                req.rawBody,
                sig,
                webhookSecret
            );
        } catch (err) {
            console.error('Error verifying Stripe webhook:', err.message);
            return res.status(400).send(`Webhook Error: ${err.message}`);
        }


        switch (event.type) {
            case 'payment_intent.succeeded':

                console.log('Payment succeeded:', event.data.object);
                break;
            case 'payment_intent.failed':

                console.log('Payment failed:', event.data.object);
                break;
            default:
                console.log(`Unhandled event type: ${event.type}`);
        }


        res.json({ received: true });
    } else {
        res.status(405).end();
    }
};
