// export default function Footer() {
//   return (
//     <footer className="bg-[#F9FAFB] py-8"
//     >
//       <div className="container mx-auto text-center">
//         <p className="text-[#134C28]">
//           © {new Date().getFullYear()} Homemade Products. All rights reserved.
//         </p>
//         <div className="flex justify-center mt-4 space-x-6">
//           <a
//             href="#"
//             className="text-[#9BB536] hover:text-[#669E42] transition duration-300"
//           >
//             Privacy Policy
//           </a>
//           <a
//             href="#"
//             className="text-[#9BB536] hover:text-[#669E42] transition duration-300"
//           >
//             Terms of Service
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#134C28] shadow mt-8 py-8 border-t-2 border-[#134C28] border-solid">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <Link href="/">
          <Image src='/svgs/logo.svg' alt="Logo" height={600} width={2000} className="w-auto h-14 mx-auto mb-4" />
        </Link>

        <p className="text-[#FFFFFF] mb-4">
          © {new Date().getFullYear()} Homemade Products. All rights reserved.
        </p>

        {/* Navigation Links */}
        <div className="flex justify-center mt-4 space-x-6">
          <a
            href="#"
            className="text-[#FFFFFF] hover:text-[#9BB536] transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-[#FFFFFF] hover:text-[#9BB536] transition duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
