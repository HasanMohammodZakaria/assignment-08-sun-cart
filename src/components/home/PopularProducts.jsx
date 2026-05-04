import React from "react";
import ProductCard from "./ProductCard";

const PopularProducts = async () => {
  const res = await fetch("https://sun-cart-peach.vercel.app/products.json");
  const data = await res.json();

  const products = data.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto mb-20 px-4 md:px-6 lg:px-8">
      <h2 className="text-[36px] font-semibold text-[#005691] mb-8">
        Popular Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
