import Image from "next/image";
import React from "react";

const BrandLogoCarousel = () => {
  const brandLogos = [
    {
      id: 1,
      name: "SunShade",
      img: "/brands/sun-shade-logo.png",
    },
    {
      id: 2,
      name: "SkinGuard",
      img: "/brands/skin-guard-logo.png",
    },
    {
      id: 3,
      name: "HydroFlow",
      img: "/brands/hydro-flow-logo.png",
    },
    {
      id: 4,
      name: "Fruit",
      img: "/brands/fruit-logo.png",
    },
    {
      id: 5,
      name: "BlueWave",
      img: "/brands/blue-wave-logo.png",
    },
    {
      id: 6,
      name: "BeachWear",
      img: "/brands/beach-wear-logo.png",
    },
    {
      id: 7,
      name: "AirStyle",
      img: "/brands/air-style-logo.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mb-20 b">
      <h2 className="text-[36px] font-semibold text-[#005691] mb-8">
        Our Trusted Top Brands
      </h2>
      <div className="relative overflow-hidden w-full">
        <div className=" w-max flex gap-6 animate-marquee items center ">
          {brandLogos.concat(brandLogos).map((logo, index) => (
            <Image
              key={`${logo.id} - ${index}`}
              src={logo.img}
              alt={logo.name}
              width={150}
              height={50}
              className=" object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogoCarousel;
