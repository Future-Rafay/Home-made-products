import ProductCard from "@/components/ProductCard";
import { client } from "@/sanity/lib/client";

// Fetching products in a server component
export default async function ProductPage() {
  const query = `*[_type == "product"]{
    _id,
    name,
    description,
    price,
    _createdAt,
    _updatedAt,
    "categories": categories[]->title,
    "imageUrl": image.asset->url
  }`;

  try {
    const products = await client.fetch(query);

    return (
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-green-700 text-center mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product: any) => (
              <ProductCard
                key={product._id}
                _id={product._id}
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No products available.</p>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="container mx-auto px-6 py-12">
        <p className="text-center text-gray-500">Failed to fetch products.</p>
      </div>
    );
  }
}
