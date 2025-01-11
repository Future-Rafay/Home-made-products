"use client"

import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default async function ProductDetailPage({ params }: { params: { product: string } }) {
  const { product } = params; 

  // Fetch product data using Sanity query based on product ID
  const query = `*[_type == "product" && _id == $productId]{
    _id,
    name,
    price,
    description,
    "imageUrl": image.asset->url,
    details
  }`;

  const productData = await client.fetch(query, { productId: product });

  if (!productData.length) {
    return <div className="text-center text-xl text-gray-700 py-12">Product not found</div>;
  }

  const {  name, price, description, imageUrl, details } = productData[0];

  // Handle add to cart
  const handleAddToCart = () => {
    console.log("Added to cart")
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={imageUrl}
            alt={name}
            width={500}
            height={500}
            className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-[#134C28] mb-4">{name}</h2>
          <p className="text-lg text-gray-700 mb-4">{description}</p>
          <p className="text-lg font-semibold text-[#669E42] mb-4">${price}</p>
          <p className="text-gray-600 mb-8">{details}</p>

          <div className="flex gap-4">
            <Button
              className="bg-[#669E42] text-white py-2 px-6 rounded-md hover:bg-[#9BB53C] flex items-center gap-2"
              onClick={handleAddToCart}
            >
              <FaShoppingCart /> Add to Cart
            </Button>
            <Button className="bg-[#9BB53C] text-white py-2 px-6 rounded-md hover:bg-[#669E42] ">
              <Link href='/checkout' className="flex items-center gap-2">Buy Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}