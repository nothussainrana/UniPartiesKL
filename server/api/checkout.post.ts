import Stripe from 'stripe'
import { defineEventHandler, getRequestURL, setResponseStatus } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  try {
    const runtimeConfig = useRuntimeConfig()
    const secretKey = process.env.STRIPE_SECRET_KEY || runtimeConfig.stripeSecretKey

    if (!secretKey) {
      throw new Error('Stripe secret key is not configured')
    }

    const stripe = new Stripe(secretKey as string, {
      apiVersion: '2023-08-16',
      httpClient: Stripe.createFetchHttpClient(),
    })

    const domain = process.env.DOMAIN || runtimeConfig.public.baseUrl || getRequestURL(event).origin

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'MYR',
            unit_amount: 9900,
            product_data: {
            name: 'Telegram Group Access (Free Event Ticket)',
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${domain}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domain}/payment?canceled=true`,
    })

    return {
      sessionId: session.id,
    }
  } catch (err: any) {
    console.error('Stripe checkout error:', err)
    setResponseStatus(event, 500)
    return {
      error: err.message || 'Internal server error',
    }
  }
}) 