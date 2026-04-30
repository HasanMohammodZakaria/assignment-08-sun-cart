import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdStar } from "react-icons/md";

const ProductCard = ({ product }) => {
  return (
    <Card className="border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-xl object-cover"
        />

        <Chip className="absolute right-2 top-2 bg-[#FDB813] text-[#005691] font-semibold">
          {product.brand}
        </Chip>
      </div>
      <div>
        <h3 className="text-[18px] text-[#005691] font-bold mt-4">
          {product.name}
        </h3>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <p className="text-[18px] font-bold">${product.price}</p>

        <Separator orientation="vertical" />

        <p className="flex items-center gap-1 text-[16px] font-semibold">
          <MdStar size={20} className="text-[#FDB813] " />
          {product.rating}
        </p>
      </div>
      <Link href={`/products/${product.id}`}>
        <Button
          variant="tertiary"
          className="w-full bg-[#005691] text-white text-[18px] font-medium mt-3 "
        >
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default ProductCard;
