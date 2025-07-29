/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import Stripe from 'stripe/lib/stripe.js'

export const onRequestPost = async ({ env }) => {
  try {
    // Initialize Stripe with Fetch-compatible HTTP client for Cloudflare Workers
    const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
      httpClient: Stripe.createFetchHttpClient(),
    })

    const YOUR_DOMAIN = env.DOMAIN || 'https://unipartieskl.com'

    // Create a Checkout Session for a one-time 99 RM payment
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'MYR',
            product_data: {
              name: 'UniPartiesKL VIP Membership',
              description:
                'Lifetime access to UniPartiesKL elite Telegram group and exclusive perks',
            },
            unit_amount: 9900, // 99.00 MYR in sen (smallest currency unit)
          },
          quantity: 1,
        },
      ],
      success_url: `${YOUR_DOMAIN}/payment?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/payment?canceled=true`,
    })

    return new Response(JSON.stringify({ sessionId: session.id }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (err: any) {
    console.error('Stripe session error', err)
    return new Response(JSON.stringify({ error: err.message || 'Internal error' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
} 