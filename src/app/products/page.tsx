import ProductCard from "@/components/ProductCard";
import { client } from "@/sanity/lib/client";

type ProductCardProps = {
  _id: string;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
};


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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#134C28] text-center mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product : ProductCardProps ) => (
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
            <p className="text-center text-gray-500 m-20">No products available.</p>
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
