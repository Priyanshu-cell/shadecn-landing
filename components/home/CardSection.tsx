"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import CardDisplay from "./CardDisplay";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  uniqueKey: string;
}

interface CartResponse {
  carts: {
    id: number;
    products: Omit<Product, "uniqueKey">[];
  }[];
}

const CardSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Define the limit here
  const PRODUCT_LIMIT = 10;

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get<CartResponse>(
          "https://dummyjson.com/cart"
        );
        const json = response.data;

        const allProducts = json.carts.flatMap((cart) =>
          cart.products.map((product) => ({
            ...product,
            uniqueKey: `${cart.id}-${product.id}`,
          }))
        );
        const limitedProducts = allProducts.slice(0, PRODUCT_LIMIT);

        console.log(
          `Fetched and flattened products. Displaying ${limitedProducts.length}:`,
          limitedProducts
        );

        setProducts(limitedProducts);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch API");
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  if (loading)
    return <p className="text-center text-gray-500 py-10">Loading...</p>;

  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-14 py-10 bg-gray-50">
      {products.map((product) => (
        <CardDisplay key={product.uniqueKey} product={product} />
      ))}
    </section>
  );
};

export default CardSection;
