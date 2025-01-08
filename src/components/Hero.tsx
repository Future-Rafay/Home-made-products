export default function Hero() {
    return (
      <section
        className="bg-gradient-to-r from-green-200 via-yellow-200 to-green-200 text-gray-800 py-20"
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold">Welcome to Homemade Products</h1>
          <p className="mt-4 text-lg">
            Discover pure and natural products crafted with love and care.
          </p>
          <button className="mt-6 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded shadow transition">
            Explore Products
          </button>
        </div>
      </section>
    );
  }
  