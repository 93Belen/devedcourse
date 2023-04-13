"use client"

import  {loadStripe} from '@stripe/stripe-js'
import { Elements, useStripe } from '@stripe/react-stripe-js'
import { useCartStore } from 'components/store'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)


export default function Checkout(){
    const cartStore = useCartStore()
    const [clientSecret, setClientSecret] = useState("")
    const router = useRouter();

    useEffect(() => {
        fetch("/api/create-payment-intent", {
            method: 'POST',
            headers: {
                "Content-Type": "aplication/json"
            },
            body: JSON.stringify({
                items: cartStore.cart,
                payment_intent_id: cartStore.paymentIntent
            })
        }).then((res) => {
            if(res.status === 403){
                return router.push('/api/auth/signin')
            }
            return res.json()
        }).then((data) => {
            console.log(data)
        })
    }, [])

    return (
        <div>
            <h1>Checkout</h1>
        </div>
    )
}