// pages/products.tsx
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: "1",
    name: "Organic Soap",
    price: "$12.99",
    image: "/images/desighee2.jpg",
    description: "A refreshing organic soap with natural ingredients.",
  },
  {
    id: "2",
    name: "Eco-Friendly Shampoo",
    price: "$18.99",
    image: "/images/desighee2.jpg",
    description: "A natural shampoo to keep your hair smooth and healthy.",
  },
  // Add more products as needed
];

export default function ProductPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-green-700 text-center mb-8">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
