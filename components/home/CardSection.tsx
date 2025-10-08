"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

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

  useEffect(() => {
    fetch("https://dummyjson.com/cart")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json: CartResponse) => {
        const allProducts = json.carts.flatMap((cart) =>
          cart.products.map((product) => ({
            ...product,
            uniqueKey: `${cart.id}-${product.id}`,
          }))
        );

        console.log("Fetched and flattened products:", allProducts);

        setProducts(allProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to fetch API");
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center text-gray-500 py-10">Loading...</p>;

  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 py-10 bg-gray-50">
      {products.map((product) => (
        <Card
          key={product.uniqueKey}
          className="shadow-md hover:shadow-xl transition-shadow"
        >
          <CardHeader>
            <CardTitle className="text-lg text-center">
              {product.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={200}
                height={150}
                className="rounded-lg mb-4 object-cover"
              />
              <p className="text-gray-800 font-semibold">
                💲 Price: ${product.price}
              </p>
              <p className="text-sm text-gray-500">ID: {product.id}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default CardSection;
