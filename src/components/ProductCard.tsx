import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ProductCard({ image, title, description }: ProductCardProps) {
  return (
    <div className="bg-white shadow rounded p-6 text-center">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="mx-auto rounded"
        priority
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
