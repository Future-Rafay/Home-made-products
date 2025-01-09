import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import FeaturedProduct from "@/components/FeaturedProduct";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-gray-50 w-full">

      <main>
        <Hero />
        <FeaturedProduct />
        <Reviews />
        <FAQ />
      </main>

    </div>
  );
}
