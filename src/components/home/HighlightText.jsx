"use client";
import { useSpring, animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";

const HighlightText = ({ text }) => {
  const [toggle, setToggle] = useState(false);

  const props = useSpring({
    scale: toggle ? 1.15 : 1,
    config: { tension: 180, friction: 12 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle((prev) => !prev);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <animated.div
      style={props}
      className="inline-block mt-2 px-5 py-2 bg-yellow-400 text-black font-bold rounded-full shadow-lg"
    >
      {text}
    </animated.div>
  );
};

export default HighlightText;
