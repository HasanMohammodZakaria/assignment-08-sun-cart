"use client";

import { useTransition, animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import HighlightText from "./HighlightText";

const sliders = [
  {
    id: 1,
    title: "Big summer sale is live now",
    highlight: "Summer Sale 50% OFF 🚨",
    img: "/sunglass.png",
  },
  {
    id: 2,
    title: "Best offers for you",
    highlight: "Hot Deals ❤️‍🔥",
    img: "/cap.png",
  },
  {
    id: 3,
    title: "Check out latest products",
    highlight: "NEW ARRIVALS 🚀",
    img: "/water-pot.png",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliders.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(sliders[index], {
    key: sliders[index].id,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 120, friction: 26 },
  });

  return (
    <div
      className="
        max-w-7xl mx-auto
        px-3 sm:px-4 md:px-6 lg:px-8
        my-10 md:my-16 lg:my-20
      "
    >
      <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[80vh] rounded-lg overflow-hidden">
        {transitions((style, item) => (
          <animated.div style={style} className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="w-full h-full bg-black/50 flex items-center justify-center">
                <div className="text-center text-white px-4 sm:px-6 md:px-10">
                  <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-4">
                    {item.title}
                  </h1>

                  <div className="text-sm sm:text-base md:text-lg">
                    <HighlightText text={item.highlight} />
                  </div>

                  <button className="mt-4 md:mt-6 bg-[#005691] px-5 py-2 rounded-md text-sm sm:text-base md:text-lg font-medium">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
