import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#134C28] shadow mt-8 py-8 border-t-2 border-[#134C28] border-solid ">
      <div className="container mx-auto px-4 py-16">
        
        <div className="text-center mb-12">
          <Image
            src="/svgs/logo.svg"
            alt="Thal Naturals Logo"
            width={250}
            height={250}
            className="mx-auto"
          />
          {/* <h1 className="text-sm font-bold text-[#9BB536] ml-10 my-4 capitalize">Made With Love</h1> */}
          <p className="text-lg text-white  mt-12">
            Thal Naturals is more than just an organic food brand. It's a philosophy of living in harmony with nature. We believe in harnessing the power of pure, organic ingredients to cultivate a healthier, more vibrant you.
          </p>
        </div>

        {/* Information Links */}
        <div className="text-start md:ml-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-auto">
          <div>
            <h3 className="font-bold text-[#9BB536] mb-2">Go to</h3>
            <ul className="text-white space-y-2">
              <li><a className="hover:underline" href="/">Home</a></li>
              <li><a className="hover:underline" href="/products">Products</a></li>
              <li><a className="hover:underline" href="/about">About Us</a></li>
              <li><a className="hover:underline" href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#9BB536] mb-2">Products</h3>
            <ul className="text-white space-y-2">
              <li><a className="hover:underline" href="#">All Products</a></li>
              <li><a className="hover:underline" href="#">Organic Food</a></li>
              <li><a className="hover:underline" href="#">Dry Fruits</a></li>
              <li><a className="hover:underline" href="#">Honey</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#9BB536] mb-2">Customer Service</h3>
            <ul className="text-white space-y-2">
              <li><a className="hover:underline" href="/customer-service/privacy-policy">Privacy Policy</a></li>
              <li><a className="hover:underline" href="/customer-service/refunds-cancellation">Refunds & Cancellation</a></li>
              <li><a className="hover:underline" href="/customer-service/return-exchange">Return & Exchange</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#9BB536] mb-2">Newsletter</h3>
            <ul className="text-white space-y-2">
              <li><a className="hover:underline" href="#">Sign up for exclusive updates, new arrivals & insider-only discounts</a></li>
              <li>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="p-2 border border-white rounded text-gray-800 outline-none w-full"
                />
              </li>
              <li><button className="bg-[#9BB536] text-white py-2 px-4 rounded w-full mt-2">Submit</button></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-8 text-white">
          <a href="https://facebook.com" className="text-2xl  hover:text-[#9BB536] hover:underline">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" className="text-2xl  hover:text-[#9BB536] hover:underline">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com" className="text-2xl  hover:text-[#9BB536] hover:underline">
            <FaTiktok />
          </a>
          <a href="https://youtube.com" className="text-2xl  hover:text-[#9BB536] hover:underline">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>

  );
}
