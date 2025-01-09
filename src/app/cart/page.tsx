"use client"

import CartItem from "@/components/CartItem";
import Link from "next/link";
import { useState } from "react";

const initialCart = [
  {
    id: "1",
    name: "Organic Soap",
    price: "$12.99",
    image: "/images/desighee2.jpg",
    quantity: 1,
  },
  {
    id: "2",
    name: "Eco-Friendly Shampoo",
    price: "$18.99",
    image: "/images/desighee2.jpg",
    quantity: 1,
  },
  // Add more items as needed
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleIncrease = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-semibold text-[#134C28] text-center mb-8">
        Your Cart
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="space-y-6 col-span-2">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                handleIncrease={() => handleIncrease(item.id)}
                handleDecrease={() => handleDecrease(item.id)}
                handleRemove={() => handleRemove(item.id)}
              />
            ))
          )}
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#134C28] mb-4">Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-800 font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Shipping</span>
              <span className="text-gray-800 font-semibold">Free</span>
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-xl font-semibold text-[#669E42]">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="bg-[#669E42] text-white py-2 px-4 rounded-md w-full mt-6 hover:bg-[#134C28]">
              <Link href='/checkout'>Proceed to Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
