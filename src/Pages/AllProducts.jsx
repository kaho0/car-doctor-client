import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []); // Adding an empty dependency array so it only fetches once.

  return (
    <div className="m-4">
      <div className="p-4 text-center">
        <h4 className="font-extrabold text-2xl text-orange-500">Products</h4>
        <h2 className="text-2xl font-semibold">Explore Our Product Range</h2>
        <p>
          Discover top-quality products that meet your needs. From tools to
          essentials,
          <br /> find what you’re looking for at competitive prices.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
