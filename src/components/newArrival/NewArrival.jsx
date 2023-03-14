import React, { useEffect, useState } from "react";
import NewArrivalCard from "../newArrivalCard/NewArrivalCard";

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h3>New Arrival</h3>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
        {products.map((product) => (
          <NewArrivalCard key={product.id} product={product}></NewArrivalCard>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
