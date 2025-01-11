"use client";
import { urlFor } from "@/sanity/lib/image"; 
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

type ProductCardProps = {
  _id: string;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
};

export default function ProductCard({ _id, name, price, imageUrl, description }: ProductCardProps) {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCartStore(); // Destructure addItem from the store

  const handleAddToCart = () => {
    setAddedToCart(true);
    toast.success('Item added to cart!', {
      autoClose: 3000,
    });

    // Create item object with the correct properties
    const item = {
      _id,
      name,
      price: parseFloat(price), // Ensure price is a number
      imageUrl,
      quantity: 1,
    };
    
    addItem(item); // Add item to cart
  };

  // Ensure price is treated as a number if it's a string
  const parsedPrice = typeof price === "string" ? parseFloat(price.replace("$", "")) : price;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 ease-in-out transform lg:hover:scale-105">
      {/* Product Link */}
      <Link href={`/products/${_id}`} className="group relative">
        <Image
          src={urlFor(imageUrl).width(500).url()} // Using Sanity's image URL function
          alt={name}
          className="h-64 w-full object-contain rounded-lg mb-4 transition-transform duration-300 ease-in-out lg:group-hover:scale-105"
          width={500}
          height={500}
          priority
        />
        <h3 className="text-xl font-semibold text-[#134C28] mt-2 group-hover:text-[#9BB536] transition-colors duration-300">{name}</h3>
      </Link>

      {/* Product Description */}
      <p className="text-[#669E42] mt-2 text-sm line-clamp-2 mb-4">{description}</p>

      {/* Price and Add to Cart */}
      <div className="flex justify-between items-center mt-auto">
        <span className="text-lg font-semibold text-[#134C28]">${parsedPrice.toFixed(2)}</span>
        <button
          onClick={handleAddToCart}
          className={`bg-[#669E42] text-white py-2 px-4 rounded-md font-medium text-sm sm:w-auto hover:bg-[#134C28] transition duration-300 ${
            addedToCart ? "bg-[#9BB536] text-white cursor-not-allowed" : ""
          }`}
          disabled={addedToCart}
        >
          {addedToCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
