// components/FeaturedProducts.tsx
import ProductCard from "@/components/ProductCard";

const featuredProducts = [
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
  // Add more featured products as needed
];

export default function FeaturedProducts() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-green-700 text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
