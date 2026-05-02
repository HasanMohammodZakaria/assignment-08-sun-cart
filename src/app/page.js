import Banner from "@/components/home/Banner";
import BrandLogoCarousel from "@/components/home/BrandLogoCarousel";
import PopularProducts from "@/components/home/PopularProducts";
import SummerCareTips from "@/components/home/SummerCareTips";

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularProducts />
      <SummerCareTips />
      <BrandLogoCarousel />
    </div>
  );
}
