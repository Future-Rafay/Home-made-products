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
    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-white shadow-md rounded-lg mb-6 md:mb-4">
      <div className="flex items-center gap-6 md:gap-4">
        <Image
          height={80}
          width={80}
          key={id}
          src={image}
          alt={name}
          className="h-20 w-20 object-cover rounded-md shrink-0"
          priority
        />
        <div>
          <h3 className="font-semibold text-[#134C28] text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{price}</p>
        </div>
      </div>
      <div className=" mt-6 md:mt-0 flex items-center justify-between gap-6 md:gap-4">
        <div className="flex items-center gap-6 ">
        <button 
          onClick={handleDecrease}
          className="text-lg text-gray-600 hover:text-[#669E42]"
          aria-label={`Decrease ${name} quantity`}
        >
          <FaMinus />
        </button>
        <span className="text-lg text-gray-800">{quantity}</span>
        <button
          onClick={handleIncrease}
          className="text-lg text-gray-600 hover:text-[#669E42]"
          aria-label={`Increase ${name} quantity`}
        >
          <FaPlus />
        </button>
        </div>
        <button
          onClick={handleRemove}
          className="text-lg text-red-600 hover:text-red-800"
          aria-label={`Remove ${name} from cart`}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
