import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Hero1 from "@/components/Hero1";

export default function Home() {
  return (
    <div className="bg-gray-50 w-full">

      <main>
        <Hero1 />
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                image="/images/desighee1.jpg"
                title="Desi Ghee"
                description="Pure and healthy desi ghee."
              />
              <ProductCard
                image="/images/desighee1.jpg"
                title="Organic Honey"
                description="100% natural and raw honey."
              />
              <ProductCard
                image="/images/desighee1.jpg"
                title="Homemade Spices"
                description="Freshly ground and aromatic."
              />
            </div>
          </div>
        </section>
      </main>
      <Reviews />
      <FAQ />

    </div>
  );
}
