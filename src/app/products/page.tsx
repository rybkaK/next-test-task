import React from "react";
import ProductSvc from "@/services/ProductSvc";
import Link from "next/link";

const Page = async () => {
  const products = await ProductSvc.getAll();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <Link href={`/products/${product.id}`}>
              <span className="text-blue-500 hover:underline">View Details</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
