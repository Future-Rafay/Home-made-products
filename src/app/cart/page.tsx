
// "use client";

// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";
// import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
// import Image from "next/image";

// // Define the structure of a cart item
// interface CartItemType {
//   _id: string;
//   name: string;
//   price: string;
//   imageUrl: string;
//   quantity: number;
// }

// export default function CartPage() {
//   const [cartItems, setCartItems] = useState<CartItemType[]>([]); // Correct type for state
//   const [products, setProducts] = useState<CartItemType[]>([]); // Correct type for products

//   // Fetch product details based on IDs stored in local storage
//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");

//     if (cart.length > 0) {
//       const query = `*[_type == "product" && _id in $ids]{
//         _id,
//         name,
//         price,
//         description,
//         "imageUrl": image.asset->url
//       }`;

//       client.fetch(query, { ids: cart }).then((fetchedProducts) => {
//         const updatedProducts = fetchedProducts.map((product) => {
//           const cartItem = cart.find((item: string) => item === product._id);
//           return {
//             ...product,
//             quantity: cartItem ? 1 : 0, // Default quantity to 1 for new products
//           };
//         });
//         setProducts(updatedProducts);
//         setCartItems(updatedProducts); // Sync products with cartItems if needed
//       });
//     }
//   }, []);

//   const handleIncrease = (id: string) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item._id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const handleDecrease = (id: string) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item._id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const handleRemove = (id: string) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
//     // Remove from localStorage
//     const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     const filteredCart = updatedCart.filter((item: string) => item !== id);
//     localStorage.setItem("cart", JSON.stringify(filteredCart));
//   };

//   // Calculate total price
//   const totalPrice = cartItems.reduce(
//     (acc, item) => {
//       const price = typeof item.price === "string"
//         ? parseFloat(item.price.replace("$", "")) // If it's a string, remove $ and parse
//         : item.price; // If it's already a number, use it directly
//       return acc + price * item.quantity;
//     },
//     0
//   );

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h2 className="text-3xl font-semibold text-[#134C28] text-center mb-8">
//         Your Cart
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//         <div className="space-y-6 col-span-2">
//           {products.length === 0 ? (
//             <p className="text-center text-gray-600">Your cart is empty.</p>
//           ) : (
//             products.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-white shadow-md rounded-lg mb-6 md:mb-4"
//               >
//                 <div className="flex items-center gap-6 md:gap-4">
//                   <Image
//                     height={80}
//                     width={80}
//                     key={item._id}
//                     src={item.imageUrl}
//                     alt={item.name}
//                     className="h-20 w-20 object-cover rounded-md shrink-0"
//                     priority
//                   />
//                   <div>
//                     <h3 className="font-semibold text-[#134C28] text-lg">{item.name}</h3>
//                     <p className="text-gray-600 text-sm">${item.price}</p>
//                   </div>
//                 </div>
//                 <div className="mt-6 md:mt-0 flex items-center justify-between gap-6 md:gap-4">
//                   <div className="flex items-center gap-6 ">
//                     <button
//                       onClick={() => handleDecrease(item._id)}
//                       className="text-lg text-gray-600 hover:text-[#669E42]"
//                       aria-label={`Decrease ${item.name} quantity`}
//                     >
//                       <FaMinus />
//                     </button>
//                     <span className="text-lg text-gray-800">{item.quantity}</span>
//                     <button
//                       onClick={() => handleIncrease(item._id)}
//                       className="text-lg text-gray-600 hover:text-[#669E42]"
//                       aria-label={`Increase ${item.name} quantity`}
//                     >
//                       <FaPlus />
//                     </button>
//                   </div>
//                   <button
//                     onClick={() => handleRemove(item._id)}
//                     className="text-lg text-red-600 hover:text-red-800"
//                     aria-label={`Remove ${item.name} from cart`}
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="bg-white shadow-lg p-6 rounded-lg">
//           <h3 className="text-xl font-semibold text-[#134C28] mb-4">Summary</h3>
//           <div className="space-y-4">
//             <div className="flex justify-between">
//               <span className="text-gray-700">Subtotal</span>
//               <span className="text-gray-800 font-semibold">${totalPrice.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-700">Shipping</span>
//               <span className="text-gray-800 font-semibold">Free</span>
//             </div>
//             <div className="flex justify-between mt-4">
//               <span className="text-lg font-semibold">Total</span>
//               <span className="text-xl font-semibold text-[#669E42]">${totalPrice.toFixed(2)}</span>
//             </div>
//             <Link href="/checkout" className="bg-[#669E42] text-white py-2 px-4 rounded-md w-full mt-6 hover:bg-[#134C28]">
//               Proceed to Checkout
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";

// Define the structure of a cart item
interface CartItemType {
  _id: string;
  name: string;
  price: string;
  imageUrl: string;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]); // Correct type for state
  const [products, setProducts] = useState<CartItemType[]>([]); // Correct type for products

  // Fetch product details based on IDs stored in local storage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (cart.length > 0) {
      const query = `*[_type == "product" && _id in $ids]{
        _id,
        name,
        price,
        description,
        "imageUrl": image.asset->url
      }`;

      client.fetch(query, { ids: cart }).then((fetchedProducts) => {
        const updatedProducts = fetchedProducts.map((product : CartItemType ) => {
          const cartItem = cart.find((item: string) => item === product._id);
          return {
            ...product,
            quantity: cartItem ? 1 : 0, // Default quantity to 1 for new products
          };
        });
        setProducts(updatedProducts);
        setCartItems(updatedProducts); // Sync products with cartItems if needed
      });
    }
  }, []);

  const handleIncrease = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    updateLocalStorage();
  };

  const handleDecrease = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    updateLocalStorage();
  };

  const handleRemove = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
    // Remove from localStorage
    const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const filteredCart = updatedCart.filter((item: string) => item !== id);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  };

  // Update localStorage whenever the cart changes
  const updateLocalStorage = () => {
    const updatedCart = cartItems.map((item) => item._id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => {
      const price = typeof item.price === "string"
        ? parseFloat(item.price.replace("$", "")) // If it's a string, remove $ and parse
        : item.price; // If it's already a number, use it directly
      return acc + price * item.quantity;
    },
    0
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-semibold text-[#134C28] text-center mb-8">
        Your Cart
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="space-y-6 col-span-2">
          {products.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            products.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-white shadow-md rounded-lg mb-6 md:mb-4"
              >
                <div className="flex items-center gap-6 md:gap-4">
                  <Image
                    height={80}
                    width={80}
                    key={item._id}
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded-md shrink-0"
                    priority
                  />
                  <div>
                    <h3 className="font-semibold text-[#134C28] text-lg">{item.name}</h3>
                    <p className="text-gray-600 text-sm">${item.price}</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 flex items-center justify-between gap-6 md:gap-4">
                  <div className="flex items-center gap-6 ">
                    <button
                      onClick={() => handleDecrease(item._id)}
                      className="text-lg text-gray-600 hover:text-[#669E42]"
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      <FaMinus />
                    </button>
                    <span className="text-lg text-gray-800">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item._id)}
                      className="text-lg text-gray-600 hover:text-[#669E42]"
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-lg text-red-600 hover:text-red-800"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#134C28] mb-4">Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-800 font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Shipping</span>
              <span className="text-gray-800 font-semibold">Free</span>
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-xl font-semibold text-[#669E42]">${totalPrice.toFixed(2)}</span>
            </div>
            <Link href="/checkout" className="bg-[#669E42] text-white py-2 px-4 rounded-md w-full mt-6 hover:bg-[#134C28]">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
