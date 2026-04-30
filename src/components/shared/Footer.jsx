// import Image from "next/image";
// import React from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaRegArrowAltCircleRight,
//   FaRegEnvelope,
//   FaTwitter,
// } from "react-icons/fa";
// import LogoFt from "@/assets/logo-footer-1.png";
// import { SlLocationPin } from "react-icons/sl";
// import { MdOutlinePhoneInTalk } from "react-icons/md";

// const Footer = () => {
//   return (
//     <footer className="bg-[#005691] text-white pt-14 pb-8">
//       <div className=" max-w-7xl mx-auto grid grid-cols-4">
//         {/* logo & description */}
//         <div className="">
//           <Image src={LogoFt} alt="Logo" width={300} height={80} />
//           <p>
//             SunCart is a modern summer e-commerce store where users can explore
//             and shop seasonal products like sunglasses, clothing, and beach
//             essentials in one place.
//           </p>
//           <div>
//             <FaFacebook />
//             <FaInstagram />
//             <FaLinkedin />
//             <FaTwitter />
//           </div>
//         </div>

//         {/* privacy */}
//         <div>
//           <h3>Privacy Policy</h3>
//           <ul>
//             <li className="flex gap-3 items-center">
//               <FaRegArrowAltCircleRight /> <span>Terms & Conditions</span>
//             </li>
//             <li className="flex gap-3 items-center">
//               <FaRegArrowAltCircleRight /> <span>Refund Policy</span>
//             </li>
//             <li className="flex gap-3 items-center">
//               <FaRegArrowAltCircleRight /> <span>Shipping Policy</span>
//             </li>

//             <li className="flex gap-3 items-center">
//               <FaRegArrowAltCircleRight /> <span>Cookies policy</span>
//             </li>
//           </ul>
//         </div>

//         {/* contact info */}
//         <div>
//           <h3>Contact Info</h3>
//           <ul>
//             <li className="flex gap-3 items-center">
//               <SlLocationPin /> <span>Dhaka, Bangladesh</span>
//             </li>
//             <li className="flex gap-3 items-center">
//               <FaRegEnvelope /> <span>zakariak4@gmail.com</span>
//             </li>
//             <li className="flex gap-3 items-center">
//               <MdOutlinePhoneInTalk /> <span>+8801739108253</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="mt-6 border-t border-white/20 pt-5 text-center text-xs text-white/70">
//         © {new Date().getFullYear()} Your Brand. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegArrowAltCircleRight,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import LogoFt from "@/assets/logo-footer-1.png";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#005691] text-white pt-14 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="text-center lg:text-left">
          <Image src={LogoFt} alt="Logo" width={300} height={60} />

          <p className="mt-4 pl-6.5 text-sm text-white/80 leading-relaxed">
            SunCart is a modern summer e-commerce store where users can explore
            and shop seasonal products like sunglasses, clothing, and beach
            essentials in one place.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 mt-5 pl-6.5 text-xl">
            <FaFacebook className="hover:text-yellow-400 cursor-pointer transition" />
            <FaInstagram className="hover:text-yellow-400 cursor-pointer transition" />
            <FaLinkedin className="hover:text-yellow-400 cursor-pointer transition" />
            <FaTwitter className="hover:text-yellow-400 cursor-pointer transition" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center">
            Privacy Policy
          </h3>
          <ul className="space-y-3 text-sm text-white/80 w-fit mx-auto">
            <li className="flex  gap-3 items-center hover:text-white cursor-pointer">
              <FaRegArrowAltCircleRight /> <span>Terms & Conditions</span>
            </li>
            <li className="flex  gap-3 items-center hover:text-white cursor-pointer">
              <FaRegArrowAltCircleRight /> <span>Refund Policy</span>
            </li>
            <li className="flex  gap-3 items-center hover:text-white cursor-pointer">
              <FaRegArrowAltCircleRight /> <span>Shipping Policy</span>
            </li>
            <li className="flex  gap-3 items-center hover:text-white cursor-pointer">
              <FaRegArrowAltCircleRight /> <span>Cookies Policy</span>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center">
            Contact Info
          </h3>

          <ul className="space-y-3 text-sm text-white/80 w-fit mx-auto">
            <li className="flex items-center gap-3 hover:text-white transition">
              <SlLocationPin /> <span>Dhaka, Bangladesh</span>
            </li>

            <li className="flex items-center gap-3 hover:text-white transition">
              <FaRegEnvelope /> <span>zakariak4@gmail.com</span>
            </li>

            <li className="flex items-center gap-3 hover:text-white transition">
              <MdOutlinePhoneInTalk /> <span>+8801739108253</span>
            </li>
          </ul>
        </div>
      </div>

      <div className=" max-w-7xl mx-auto mt-10 border-t border-white/20 pt-5 text-center text-xs text-white/70 ">
        © {new Date().getFullYear()} Your Brand. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
