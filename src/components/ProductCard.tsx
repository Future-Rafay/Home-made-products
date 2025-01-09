// components/ProductCard.tsx
import { urlFor } from "@/sanity/lib/image"; // Import Sanity image URL function
import Image from "next/image";
import Link from "next/link";

// Define proper typing for props
type ProductCardProps = {
  _id: string;
  name: string;
  price: string;
  imageUrl: string; // Use imageUrl instead of image
  description: string;
};

export default function ProductCard({ _id, name, price, imageUrl, description }: ProductCardProps) {
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
        <span className="text-lg font-semibold text-green-600">${price}</span>
        <Link
          href={`/products/${_id}`}
          className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
