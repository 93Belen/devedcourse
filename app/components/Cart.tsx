"use client"

import Image from "next/image"
import { useCartStore } from "components/store"
import formatPrice from "components/util/PricesFormat";
import {IoAddCircle, IoRemoveCircle} from 'react-icons/io5'
import basket from 'imgs/shopping-bag.png';
import { AnimatePresence, motion } from "framer-motion";



export default function Cart(){
    const cartStore = useCartStore();


    const totalPrice = cartStore.cart.reduce((acc, item) => {
        return acc + item.unit_amount! * item.quantity!
    }, 0)


    return (
        <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
         onClick={() => cartStore.toggleCart()} 
        className="fixed w-full h-screen left-0 top-0 bg-black/25">
           <motion.div 
           layout
           onClick={(e) => {
               e.stopPropagation()
           }} className="bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-y-scroll text-gray-700">
                {cartStore.cart.map((item) => (
                    <motion.div
                    layout
                    key={item.id}
                    className="flex py-4 gap-4">
                        <Image className="rounded-md h-24" alt="" src={item.image} width={120} height={120} />
                        <motion.div layout>
                            <h2>{item.name}</h2>
                            <div className="flex gap-2">
                            <h2>Quantity: {item.quantity}</h2>
                            <button onClick={() => cartStore.removeProduct({id: item.id, image: item.image, name: item.image, unit_amount: item.unit_amount, quantity: item.quantity})}><IoRemoveCircle /></button>
                            <button onClick={() => cartStore.addProduct({id: item.id, image: item.image, name: item.image, unit_amount: item.unit_amount, quantity: item.quantity})}><IoAddCircle /></button>
                            </div>   
                            <p className="text-sm">{formatPrice(item.unit_amount)}</p>

                        </motion.div>
                    </motion.div>
                ))}
                <motion.div layout>
                {cartStore.cart.length > 0 && (
                    <>
                        <p>Total {formatPrice(totalPrice)}</p>
                        <button className="py-2 mt-4 bg-teal-700 w-full rounded-md text-white">Checkout</button>
                    </>
                )}
                </motion.div>
                <AnimatePresence>
            {!cartStore.cart.length && (
                <motion.div 
                animate={{scale: 1, rotateZ: 0, opacity: 0.75}}
                initial={{scale: 0.5, rotateZ: -10, opacity: 0}}
                exit={{scale: 1, rotateZ: 0, opacity: 0.75}}
                className="=flex flex-col items-center gap-12 text-2xl font-mediumpt-56 opacity-75">
                    <h1>Uhh ohh.. it's empty</h1>
                    <Image src={basket} alt="" width={150} height={150} />
                </motion.div>
            )}
            </AnimatePresence>
           </motion.div>
        </motion.div>
    )
}