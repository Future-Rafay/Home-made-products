"use client"

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaHome, FaInfoCircle, FaLeaf, FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import Image from "next/image";

// Branding Colors
const brandingColors = {
  white: "#FFFFFF",
  olive: "#669E42",
  lime: "#9BB53C",
  darkGreen: "#134C28",
};

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: FaHome,
  },
  {
    title: "Products",
    url: "/products",
    icon: FaLeaf,
  },
  {
    title: "About",
    url: "/about",
    icon: FaInfoCircle,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: FaPhoneAlt,
  },
];

export default function AppSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar Trigger for Mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-white p-2  focus:outline-none"
        aria-label="Open Sidebar"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-40 bg-[#669E42] shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-linear w-64 md:w-72`}
      >
        {/* Sidebar Header */}
        <div
          className="flex items-center justify-between bg-[#134C28] px-4 py-5"
          style={{ color: brandingColors.white }}
        >
          <Image
            src="/svgs/logo.svg"
            alt="Logo"
            height={600}
            width={2000}
            className="w-auto h-10"
          />
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none p-2"
            aria-label="Close Sidebar"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex flex-col p-4 space-y-4">
          {items.map((item) => (
            <Link
              href={item.url}
              key={item.title}
              className="flex items-center gap-3 text-white text-lg hover:bg-[#9BB53C] p-3 rounded-lg transition-colors"
            >
              <item.icon size={20} />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}
    </>
  );
}