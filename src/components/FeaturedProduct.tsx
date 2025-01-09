// components/FeaturedProducts.tsx
import ProductCard from "@/components/ProductCard";
import { client } from "@/sanity/lib/client"; // Import Sanity client

// Fetching featured products using getServerSideProps
export async function getServerSideProps() {
  const query = `

  *[_type == "product"]
    _id,
    name,
    description,
    price,
    "imageUrl": image.asset->url
  }`;

  try {
    const featuredProducts = await client.fetch(query);

    return {
      props: {
        featuredProducts, // Pass featured products data to the page
      },
    };
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return {
      props: {
        featuredProducts: [], // Empty array if fetch fails
      },
    };
  }
}

type FeaturedProductsProps = {
  featuredProducts: {
    _id: string;
    name: string;
    price: string;
    description: string;
    imageUrl: string;
  }[];
};

export default function FeaturedProducts({ featuredProducts }: FeaturedProductsProps) {


  const safeProducts = featuredProducts || [];
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-green-700 text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {safeProducts.length > 0 ? (
            safeProducts.map((product) => (
              <ProductCard
                key={product._id}
                _id={product._id}
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl} // Corrected to imageUrl
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No featured products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
    