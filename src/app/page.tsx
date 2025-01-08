import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Hero1 from "@/components/Hero1";
import FeaturedProduct from "@/components/FeaturedProduct";

export default function Home() {
  return (
    <div className="bg-gray-50 w-full">

      <main>
        <Hero1 />
        <FeaturedProduct />
        <Reviews />
        <FAQ />
      </main>

    </div>
  );
}
