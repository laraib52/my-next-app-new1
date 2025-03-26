"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [id]);

  if (!product) return <p className="p-6 text-gray-600">Loading product details...</p>;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <button onClick={() => router.push("/products")} className="mb-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
        Go Back
      </button>

      <div className="bg-white p-6 shadow-lg rounded-md max-w-3xl mx-auto">
        <img src={product.image} alt={product.title} className="h-60 mx-auto mb-4" />
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-600">{product.category}</p>
        <p className="text-green-600 font-semibold text-xl">${product.price}</p>
        <p className="text-gray-700 mt-4">{product.description}</p>
      </div>
    </div>
  );
}
