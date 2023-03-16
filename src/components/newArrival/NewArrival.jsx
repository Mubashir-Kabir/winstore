import React, { useEffect, useState } from "react";
import NewArrivalCard from "../newArrivalCard/NewArrivalCard";

const NewArrival = ({ setCart, cart }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h3 className="my-5">
        <span className="text-info">New</span> Arrival
      </h3>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
        {products.map((product) => (
          <NewArrivalCard
            key={product.id}
            product={product}
            setCart={setCart}
            cart={cart}
          ></NewArrivalCard>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
