// Server Component to fetch product data
import { client } from "@/sanity/lib/client";

export async function getProductData(productId: string) {
  const query = `*[_type == "product" && _id == $productId]{
    _id,
    name,
    price,
    description,
    "imageUrl": image.asset->url,
    details
  }`;

  const productData = await client.fetch(query, { productId });
  return productData.length ? productData[0] : null;
}
