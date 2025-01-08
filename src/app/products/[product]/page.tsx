// pages/products/[product]/page.tsx

import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

// Define the product type
interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  details: string;
}

// Mock product data (replace with your actual data fetching)
const products: Record<string, Product> = {
  "1": {
    id: "1",
    name: "Organic Soap",
    price: "$12.99",
    description: "A refreshing organic soap with natural ingredients.",
    image: "/images/desighee2.jpg",
    details: "Made from natural oils and extracts, this soap is gentle on the skin.",
  },
  "2": {
    id: "2",
    name: "Natural Shampoo",
    price: "$15.99",
    description: "A nourishing shampoo for healthy hair.",
    image: "/images/desighee2.jpg",
    details: "Formulated with organic ingredients for soft, shiny hair.",
  },
  // Add more products here...
};

export default function ProductDetailPage({ params }: { params: { product: string } }) {
  const { product } = params; // Get product ID from the URL

  // Type assertion to tell TypeScript that the product ID is a valid key in the products object
  const productData = products[product as keyof typeof products];

  if (!productData) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src={productData.image}
            alt={productData.name}
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">{productData.name}</h2>
          <p className="text-lg text-gray-700 mb-4">{productData.description}</p>
          <p className="text-lg font-semibold text-green-600 mb-4">{productData.price}</p>
          <p className="text-gray-600 mb-8">{productData.details}</p>
          <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 flex items-center gap-2">
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
