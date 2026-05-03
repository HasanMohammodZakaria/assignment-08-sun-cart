import { Chip } from "@heroui/react";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { GiOakLeaf, GiWaterDrop } from "react-icons/gi";
import { MdSunny } from "react-icons/md";

const SummerCareTips = () => {
  return (
    <div className="max-w-7xl mx-auto mb-20 px-4 md:px-6 lg:px-8">
      <h2 className="text-[36px] font-semibold text-[#005691] mb-8">
        Summer Care Tips
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="space-y-3 shadow-sm border-t-2 border-[#FDB813] rounded-xl p-5">
          <div className="w-10 h-10 bg-[#fff3d6] rounded-full text-[24px] flex justify-center items-center">
            <MdSunny className="text-[#005691]" />
          </div>

          <h3 className="text-[22px] text-black font-bold">Skincare</h3>
          <Chip className="bg-[#1f2f3b] text-white">Sun protection</Chip>

          <ul>
            <li className="flex items-start gap-1.5">
              <FaCircle size={10} className="mt-1.5" />
              Apply SPF 30+ sunscreen every morning
            </li>
            <li className="flex items-start gap-1.5">
              <FaCircle size={10} className="mt-1.5" />
              Switch to an oil-free moisturizer
            </li>
            <li className="flex items-start gap-1.5">
              <FaCircle size={10} className="mt-1.5" />
              Exfoliate twice a week
            </li>
            <li className="flex items-start gap-1.5">
              <FaCircle size={10} className="mt-1.5" />
              Avoid direct sun (11 AM – 3 PM)
            </li>
          </ul>
        </div>

        <div className="space-y-3 shadow-sm border-t-2 border-[#FDB813] rounded-xl p-5">
          <div className="w-10 h-10 bg-[#fff3d6] rounded-full text-[24px] flex justify-center items-center">
            <GiWaterDrop className="text-[#005691]" />
          </div>

          <h3 className="text-[22px] text-black font-bold">Hydration tips</h3>
          <Chip className="bg-[#1f2f3b] text-white">Stay refreshed</Chip>

          <ul>
            <li className="flex items-start gap-1.5">
              <FaCircle size={10} className="mt-1.5" />
              Drink 3–4 liters of water daily
            </li>
            <li className="flex items-start gap-1.5">
              <FaCircle size={10} className="mt-1.5" />
              Start morning with water
            </li>
            <li className="flex items-start gap-1.5">
              <FaCircle size={10} className="mt-1.5" />
              Use ORS or coconut water
            </li>
            <li className="flex items-start gap-1.5">
              <FaCircle size={10} className="mt-1.5" />
              Reduce caffeine intake
            </li>
          </ul>
        </div>

        <div className="space-y-3 shadow-sm border-t-2 border-[#FDB813] rounded-xl p-5">
          <div className="w-10 h-10 bg-[#fff3d6] rounded-full text-[24px] flex justify-center items-center">
            <GiOakLeaf className="text-[#005691]" />
          </div>

          <h3 className="text-[22px] text-black font-bold">Hair care</h3>
          <Chip className="bg-[#1f2f3b] text-white">Heat & sweat defense</Chip>

          <ul>
            <li className="flex items-start gap-1.5">
              <FaCircle size={10} className="mt-1.5" />
              Use UV protection spray or cover hair
            </li>
            <li className="flex items-start gap-1.5">
              <FaCircle size={10} className="mt-1.5" />
              Shampoo 2–3 times weekly
            </li>
            <li className="flex items-start gap-1.5">
              <FaCircle size={10} className="mt-1.5" />
              Pat dry gently after wash
            </li>
            <li className="flex items-start gap-1.5">
              <FaCircle size={10} className="mt-1.5" />
              Use oil once a week
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SummerCareTips;
