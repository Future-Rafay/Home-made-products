// components/CartItem.tsx
import Image from "next/image";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

type CartItemProps = {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleRemove: () => void;
};

export default function CartItem({
  id,
  name,
  price,
  image,
  quantity,
  handleIncrease,
  handleDecrease,
  handleRemove,
}: CartItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4">
      <div className="flex items-center gap-4">
        <Image
          height={80}
          width={80}
          key={id}
          src={image}
          alt={name}
          className="h-20 w-20 object-cover rounded-md"
        />
        <div>
          <h3 className="font-semibold text-green-700">{name}</h3>
          <p className="text-gray-600 text-sm">{price}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={handleDecrease}
          className="text-lg text-gray-600 hover:text-green-600"
        >
          <FaMinus />
        </button>
        <span className="text-lg text-gray-800">{quantity}</span>
        <button
          onClick={handleIncrease}
          className="text-lg text-gray-600 hover:text-green-600"
        >
          <FaPlus />
        </button>
        <button
          onClick={handleRemove}
          className="text-lg text-red-600 hover:text-red-800"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
