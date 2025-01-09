// components/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
  description,
}: ProductCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
      <Image
        src={image}
        alt={name}
        className="h-64 w-full object-cover rounded-lg mb-4"
        width={500}
        height={256}
      />
      <h3 className="text-xl font-semibold text-green-700">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-semibold text-green-600">{price}</span>
        <Link
          href={`/products/${id}`}
          className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
