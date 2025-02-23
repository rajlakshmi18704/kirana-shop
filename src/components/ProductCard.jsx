import React from "react";
import { products } from "../assets/data/Product";

function ProductCard() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {products.map((product, i) => (
        <div key={i} className="bg-white shadow-md rounded-lg p-4 w-64">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-md"
          />

          <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
          <p className="text-gray-600">₹{product.price}</p>

          {/* Add to Cart Button */}
          <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
