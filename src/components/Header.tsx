// "use client"

import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
import { FaHome, FaLeaf, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import { SlBag } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import AppSidebar from "./app-sidebar";

export default function Header() {
  return (
    <header
      className=" bg-[#134C28] shadow sticky top-0 z-50 border-b-2 border-[#134C28] border-solid"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-2 sm:px-8">
        <AppSidebar />

        {/* Logo */}
        <Link href="/">
          <Image src='/svgs/logo.svg' alt="Logo" height={600} width={2000} className="mx-auto w-auto h-10 sm:h-12 md:h-14" />
        </Link>

        {/* Navigation */}
        <nav >
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/" className="text-[#FFFFFF] hover:text-[#9BB53C] flex items-center space-x-2">
                <FaHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-[#FFFFFF] hover:text-[#9BB53C] flex items-center space-x-2">
                <FaLeaf />
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[#FFFFFF] hover:text-[#9BB53C] flex items-center space-x-2">
                <FaInfoCircle />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#FFFFFF] hover:text-[#9BB53C] flex items-center space-x-2">
                <FaPhoneAlt />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
          
        </nav>
        <div className="flex items-center gap-4 text-white text-xl">
            <Link href='/cart'>
            <SlBag />
            </Link>
            <Link href='/profile'>
            <VscAccount />
            </Link>
          </div>
      </div>
    </header>
  );
}
