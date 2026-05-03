import Banner from "@/components/home/Banner";
import BrandLogoCarousel from "@/components/home/BrandLogoCarousel";
import PopularProducts from "@/components/home/PopularProducts";
import SummerCareTips from "@/components/home/SummerCareTips";
import Loader from "@/components/shared/Loader";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<Loader />}>
        <PopularProducts />
      </Suspense>
      <SummerCareTips />
      <BrandLogoCarousel />
    </div>
  );
}
