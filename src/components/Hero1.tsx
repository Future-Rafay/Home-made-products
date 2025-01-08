import Image from "next/image";

export default function Hero1() {
  return (
    <section className="bg-gradient-to-r from-green-200 via-yellow-200 to-green-200 text-gray-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Welcome to Homemade Products
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6">
              Discover pure and natural products, crafted with love in Switzerland.
            </p>
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded shadow transition">
              Explore Products
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/images/hero.png"
              alt="Hero Image"  
              width={600}
              height={800}
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
