"use client"

// components/ProductCard.tsx
import { urlFor } from "@/sanity/lib/image"; // Import Sanity image URL function
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Define proper typing for props
type ProductCardProps = {
  _id: string;
  name: string;
  price: string;
  imageUrl: string; // Use imageUrl instead of image
  description: string;
};

export default function ProductCard({ _id, name, price, imageUrl, description }: ProductCardProps) {
  // State to manage cart item addition
  const [addedToCart, setAddedToCart] = useState(false);

  // Handle adding to cart
  const handleAddToCart = () => {
    // Get current cart items from local storage (if any)
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Add the product ID to the cart array if it's not already there
    if (!cart.includes(_id)) {
      cart.push(_id);
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Mark the item as added to cart
    setAddedToCart(true);
  };

  // Ensure price is treated as a number if it's a string
  const parsedPrice = typeof price === "string" ? parseFloat(price.replace("$", "")) : price;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
      <Link href={`/products/${_id}`}>
        <Image
          src={urlFor(imageUrl).width(500).url()} // Using Sanity's image URL function
          alt={name}
          className="h-64 w-full object-contain rounded-lg mb-4"
          width={500}
          height={256}
          priority
        />
        <h3 className="text-xl font-semibold text-green-700">{name}</h3>
      </Link>

      <p className="text-gray-600 mt-2 line-clamp-2">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-semibold text-green-600">${parsedPrice.toFixed(2)}</span>
        <button
          onClick={handleAddToCart}
          className={`bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 ${
            addedToCart ? "bg-green-400 cursor-not-allowed" : ""
          }`}
          disabled={addedToCart}
        >
          {addedToCart ? "Added to Cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
