import { Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { CgShutterstock } from "react-icons/cg";
import { MdStar } from "react-icons/md";
import { SiBrandfolder } from "react-icons/si";

export const dynamic = "force-dynamic";

const ProductsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("${process.env.NEXT_PUBLIC_BASE_URL}/products.json", {
    cache: "no-store",
  });
  const products = await res.json();

  const product = products.find((product) => product.id == id);

  return (
    <div className="max-w-200 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 border border-gray-200 shadow-sm rounded-xl my-10 p-4 md:p-6 px-4">
      <div className="relative w-full aspect-square order-1 md:order-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-xl object-cover"
        />
      </div>

      <div className="space-y-3 order-2 md:order-0">
        <h2 className="text-2xl md:text-3xl text-[#005691] font-bold">
          {product.name}
        </h2>

        <p className="text-[15px] md:text-[16px] text-black">
          {product.description}
        </p>

        <h4 className="text-3xl md:text-4xl text-[#FDB813] font-bold">
          {product.price} $
        </h4>

        <div className="flex justify-between gap-2">
          <p className="flex items-center gap-1 text-[14px] md:text-[16px] font-semibold">
            <SiBrandfolder size={20} className="text-[#FDB813]" />
            {product.brand}
          </p>

          <Separator orientation="vertical" />

          <p className="flex items-center gap-1 text-[14px] md:text-[16px] font-semibold">
            <MdStar size={20} className="text-[#FDB813]" />
            {product.rating}
          </p>

          <Separator orientation="vertical" />

          <p className="flex items-center gap-1 text-[14px] md:text-[16px] font-semibold">
            <CgShutterstock size={20} className="text-[#FDB813]" />
            {product.stock} pcs
          </p>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-[#005691]">
          {product.category}
        </h3>
      </div>
    </div>
  );
};

export default ProductsDetailsPage;
