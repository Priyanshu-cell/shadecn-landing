import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  uniqueKey: string;
}

interface CardDisplayProps {
  product: Product;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ product }) => {
  return (
    <motion.div
      key={product.uniqueKey}
      className="shadow-md transition-shadow"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg text-center">{product.title}</CardTitle>
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
    </motion.div>
  );
};

export default CardDisplay;
