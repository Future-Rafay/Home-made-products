"use client"

import { useCartStore } from "@/store/cartStore";
import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function CartPage() {
  const { items, removeItem, increaseQuantity, decreaseQuantity, totalPrice } = useCartStore();


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-semibold text-[#134C28] text-center mb-8">
        Your Cart
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {items.length === 0 ? (
          <div className="col-span-2 flex flex-col items-center justify-center space-y-6">
            <FaShoppingCart className="text-[#134C28] text-6xl animate-pulse" />
            <p className="text-center text-lg text-gray-600">Your cart is empty!</p>
            <p className="text-center text-gray-500">Add some products to start shopping.</p>
            <Link
              href="/products"
              className="bg-[#669E42] text-white py-2 px-4 rounded-md hover:bg-[#134C28] text-center mt-4"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="space-y-6 col-span-2">
            {items.map((item) => (
              <div key={item._id} className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-white shadow-md rounded-lg mb-6 md:mb-4">
                <div className="flex items-center gap-6 md:gap-4">
                  <Image
                    height={80}
                    width={80}
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded-md shrink-0"
                    priority
                  />
                  <div>
                    <Link href={`/products/${item._id}`}>
                      <h3 className="font-semibold text-[#134C28] text-lg">{item.name}</h3>
                    </Link>
                    <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 flex items-center justify-between gap-6 md:gap-4">
                  <div className="flex items-center gap-6">
                    <button
                      className="text-lg text-gray-600 hover:text-[#669E42]"
                      onClick={() => decreaseQuantity(item._id)}
                    >
                      <FaMinus />
                    </button>
                    <span className="text-lg text-gray-800">{item.quantity}</span>
                    <button
                      className="text-lg text-gray-600 hover:text-[#669E42]"
                      onClick={() => increaseQuantity(item._id)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    className="text-lg text-red-600 hover:text-red-800"
                    onClick={() => removeItem(item._id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary Section */}
      {items.length > 0 && (
        <div className="bg-white shadow-lg p-6 rounded-lg col-span-2 md:col-span-1">
          <h3 className="text-xl font-semibold text-[#134C28] mb-4">Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-800 font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="w-full h-0 border border-solid " />
            <div className="flex justify-between">
              <span className="text-gray-700">Shipping</span>
              <span className="text-gray-800 font-semibold">Free</span>
            </div>
            <div className="w-full h-0 border border-solid " />
            <div className="flex justify-between">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-xl font-semibold text-[#669E42]">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="w-full h-0 border border-solid " />
            <Button className="bg-[#669E42] text-white py-2 px-4 rounded-md w-full hover:bg-[#134C28] text-center">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
