import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import ProductPage from "./products/page";


export default function Home() {
  return (
    <div className="bg-gray-50 w-full">

      <main>
        <Hero />
      <ProductPage />
        <Reviews />
        <FAQ />
      </main>

    </div>
  );
}
