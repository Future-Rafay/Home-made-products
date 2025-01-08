"use client"

import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

export default function TopHeader() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
   <div className="bg-yellow-100 text-gray-800 py-2 px-4">
     
     <div className="flex items-center justify-between mx-40">
      <p className="text-sm">
        We only offer pick up. For more info,{" "}
        <Link href="/contact" className="text-emerald-600 font-semibold hover:underline">
          contact us
        </Link>
        .
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="text-gray-800 hover:text-red-600 transition"
        aria-label="Close"
      >
        <AiOutlineClose size={20} />
      </button>
    </div>
   </div>
  );
}
