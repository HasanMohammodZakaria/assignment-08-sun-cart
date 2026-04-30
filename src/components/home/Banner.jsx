"use client";
import { useTransition, animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import HighlightText from "./HighlightText";

const sliders = [
  {
    id: 1,
    title: "Unbeatable Summer deals",
    highlight: "Summer Sale 50% OFF",
    img: "/sunglass.png",
  },
  {
    id: 2,
    title: "Today's Hot Deals",
    highlight: "Hot Deals 🔥",
    img: "/cap.png",
  },
  {
    id: 3,
    title: "Fresh New Arrivals",
    highlight: "NEW ARRIVALS ✨",
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
    from: { opacity: 0, transform: "scale(1.03)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.95)" },
    config: { tension: 140, friction: 25, clamp: true },
  });

  return (
    <div className="relative w-full h-[90vh] overflow-hidden my-10 ">
      {transitions((style, item) => (
        <animated.div
          style={{ ...style, willChange: "transform, opacity" }}
          className="absolute w-full h-full bg-cover bg-center"
        >
          {/* Background */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.img})`,
              transform: "translateZ(0)",
            }}
          >
            {/* Overlay */}
            <div className="w-full h-full bg-black/50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {item.title}
                </h1>

                {/* Animated Highlight */}
                <HighlightText text={item.highlight} />
                <div className=" mt-6">
                  <button className="bg-[#005691] text-[18px] font-medium px-5 py-2 rounded-md cursor-pointer">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default Banner;
