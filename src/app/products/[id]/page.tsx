import React from "react";
import ProductSvc from "@/app/services/ProductSvc";
import Image from "next/image";

const ProductItem = async ({ params }: { params: { id: string } }) => {
  
  const product = await ProductSvc.getProductById(params.id);
  
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen ">
      <div className="flex flex-col lg:flex-row">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-sm">
            <Image
              src={product.image}
              width={175}
              height={175}
              quality={90}
              alt="Product"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="lg:ml-12 mt-6 lg:mt-0">
          <div className="max-w-md space-y-4">
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">
                ${product.price}
              </span>
              <div className="flex items-center">
                <span className="text-yellow-500">
                  {"★".repeat(Math.round(product.rating))}
                </span>
                <span className="text-gray-500 ml-2">({product.rating})</span>
              </div>
            </div>
            <button className="w-full py-2 bg-primary text-white font-semibold rounded-md hover:bg-green-600 transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
