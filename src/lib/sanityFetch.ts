// lib/sanityFetch.ts
import { client } from "@/sanity/lib/client";

// Function to fetch products by type (e.g., featured, all products, etc.)
export const fetchProducts = async (query: string) => {
  try {
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
