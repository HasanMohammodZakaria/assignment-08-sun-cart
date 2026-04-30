import ProductCard from "@/components/home/ProductCard";
import React from "react";

const ProductsPage = async () => {
  const res = await fetch("https://sun-cart-peach.vercel.app/products.json");
  const products = await res.json();

  return (
    <div className="max-w-7xl mx-auto my-10 ">
      <h2 className="text-[36px] font-bold text-[#005691] mb-8">
        All Products
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
