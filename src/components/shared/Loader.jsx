"use client";
import React from "react";
import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <CircleLoader size={40} color="#FDB813" />
    </div>
  );
};

export default Loader;
