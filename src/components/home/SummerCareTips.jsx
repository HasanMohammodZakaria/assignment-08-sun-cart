import { Chip } from "@heroui/react";
import React from "react";
import { FaArrowRight, FaCircle } from "react-icons/fa";
import { GiOakLeaf, GiWaterDrop } from "react-icons/gi";
import { MdSunny } from "react-icons/md";

const SummerCareTips = () => {
  return (
    <div className=" max-w-7xl mx-auto mb-20 ">
      <h2 className="text-[36px] font-semibold text-[#005691] mb-8">
        Summer Care Tips
      </h2>
      <div className="grid grid-cols-3 gap-5">
        <div className="space-y-3 shadow-sm border-t-2 border-[#FDB813] rounded-xl p-5">
          <div className="w-10 h-10 bg-[#fff3d6] rounded-full text-[24px] flex justify-center items-center">
            <MdSunny className="text-[#005691]" />
          </div>
          <h3 className="text-[22px] text-black text-bold">Skincare</h3>
          <Chip className="bg-[#1f2f3b] text-white">Sun protection</Chip>
          <ul>
            <li className="flex items-start gap-1.75">
              <FaCircle size={10} className="mt-1.5" />
              Apply SPF 30+ sunscreen every morning,
            </li>
            <li className="flex items-start gap-1.75">
              <FaCircle size={10} className="mt-1.5" />
              Switch to an oil-free moisturizer
            </li>
            <li className="flex items-start gap-1.75">
              <FaCircle size={10} className="mt-1.5" />
              Exfoliate twice a week to remove dead skin cells
            </li>
            <li className="flex items-start gap-1.75">
              <FaCircle size={10} className="mt-1.5" />
              Avoid direct sun exposure between 11 to 3 PM
            </li>
          </ul>
        </div>

        <div className="space-y-3 shadow-sm border-t-2 border-[#FDB813] rounded-xl p-5">
          <div className="w-10 h-10 bg-[#fff3d6] rounded-full text-[24px] flex justify-center items-center">
            <GiWaterDrop className="text-[#005691]" />
          </div>
          <h3 className="text-[22px] text-black text-bold">Hydration tips</h3>
          <Chip className="bg-[#1f2f3b] text-white">Stay refreshed</Chip>
          <ul>
            <li className="flex items-start gap-1.75">
              <FaCircle size={10} className="mt-1.5" />
              Drink at least 3–4 liters of water daily
            </li>
            <li className="flex items-start gap-1.75">
              <FaCircle size={10} className="mt-1.5" />
              Start your morning with 1–2 glasses of water
            </li>
            <li className="flex items-start gap-1.75">
              <FaCircle size={10} className="mt-1.5" />
              Sip ORS or coconut water after heavy activity
            </li>
            <li className="flex items-start gap-1.75">
              <FaCircle size={10} className="mt-1.5" />
              Cut back on tea and coffee — caffeine
            </li>
          </ul>
        </div>

        <div className="space-y-3 shadow-sm border-t-2 border-[#FDB813] rounded-xl p-5">
          <div className="w-10 h-10 bg-[#fff3d6] rounded-full text-[24px] flex justify-center items-center">
            <GiOakLeaf className="text-[#005691]" />
          </div>
          <h3 className="text-[22px] text-black text-bold">Hair care</h3>
          <Chip className="bg-[#1f2f3b] text-white">Heat & sweat defense</Chip>
          <ul>
            <li className="flex items-start gap-1.75">
              <FaCircle size={10} className="mt-1.5" />
              Use a UV protection hair spray or wear
            </li>
            <li className="flex items-start gap-1.75">
              <FaCircle size={10} className="mt-1.5" />
              Shampoo only 2–3 times a week — over-washing
            </li>
            <li className="flex items-start gap-1.75">
              <FaCircle size={10} className="mt-1.5" />
              After washing, pat hair dry gently
            </li>
            <li className="flex items-start gap-1.75">
              <FaCircle size={10} className="mt-1.5" />
              Apply coconut or argan oil once a week
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SummerCareTips;
