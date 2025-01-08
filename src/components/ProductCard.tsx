import React from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';

// Define the props type for the ProductCard component
interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, onAddToCart }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
      <div className="relative w-full h-64">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <h3 className="text-xl font-semibold text-[#134C28] mt-4">{title}</h3>
      <p className="text-[#669E42] mt-2">{description}</p>
      <button
        onClick={onAddToCart}
        className="mt-4 flex items-center px-6 py-3 bg-[#9BB536] hover:bg-[#134C28] text-white font-semibold rounded shadow-md transition"
      >
        <FaShoppingCart className="mr-2" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
